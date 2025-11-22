import fs from 'fs';
import path from 'path';

interface OpenAPISpec {
  paths: Record<string, any>;
  tags?: { name: string; description?: string }[];
}

interface Endpoint {
  path: string;
  method: string;
  operationId: string;
  tag: string;
  parameters: any[];
  requestBody?: any;
  hasQuery: boolean;
  hasBody: boolean;
}

const TAGS_MAP: Record<string, string> = {
  'admin': 'Admin',
  'application': 'Application',
  'auth': 'Auth',
  'backup': 'Backup',
  'bitbucket': 'Bitbucket',
  'certificates': 'Certificates',
  'cluster': 'Cluster',
  'compose': 'Compose',
  'deployment': 'Deployment',
  'destination': 'Destination',
  'docker': 'Docker',
  'domain': 'Domain',
  'environment': 'Environment',
  'gitProvider': 'GitProvider',
  'gitea': 'Gitea',
  'github': 'Github',
  'gitlab': 'Gitlab',
  'mariadb': 'MariaDB',
  'mongo': 'Mongo',
  'mounts': 'Mounts',
  'mysql': 'MySQL',
  'notification': 'Notification',
  'organization': 'Organization',
  'port': 'Port',
  'postgres': 'Postgres',
  'previewDeployment': 'PreviewDeployment',
  'project': 'Project',
  'redirects': 'Redirects',
  'redis': 'Redis',
  'registry': 'Registry',
  'rollback': 'Rollback',
  'schedule': 'Schedule',
  'security': 'Security',
  'server': 'Server',
  'settings': 'Settings',
  'sshKey': 'SSHKey',
  'stripe': 'Stripe',
  'swarm': 'Swarm',
  'user': 'User',
  'volumeBackups': 'VolumeBackups',
  'ai': 'AI'
};

function generateSDK() {
  const openApiPath = './openapi.json';
  const outputDir = './src/resources';
  
  // Read OpenAPI spec
  const spec: OpenAPISpec = JSON.parse(fs.readFileSync(openApiPath, 'utf-8'));
  
  // Create output directory
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Group endpoints by tag
  const endpointsByTag = groupEndpointsByTag(spec);
  
  console.log('📦 Generating SDK classes...');
  
  // Generate class for each tag
  const generatedTags: string[] = [];
  for (const [tag, endpoints] of Object.entries(endpointsByTag)) {
    const className = TAGS_MAP[tag] || capitalize(tag);
    const code = generateClassCode(className, tag, endpoints);
    
    const fileName = `${className}.ts`;
    fs.writeFileSync(path.join(outputDir, fileName), code);
    
    generatedTags.push(tag);
    console.log(`  ✓ Generated ${className}.ts (${endpoints.length} methods)`);
  }
  
  // Generate main Dokploy class
  console.log('📦 Generating main Dokploy class...');
  const mainClass = generateMainClass(generatedTags);
  fs.writeFileSync('./src/Dokploy.ts', mainClass);
  console.log('  ✓ Generated Dokploy.ts');
  
  // Generate index
  console.log('📦 Generating index...');
  const indexCode = generateIndex(generatedTags);
  fs.writeFileSync('./src/index.ts', indexCode);
  console.log('  ✓ Generated index.ts');
  
  console.log(`\n✅ SDK generation complete! Generated ${generatedTags.length} resource classes.`);
}

function groupEndpointsByTag(spec: OpenAPISpec): Record<string, Endpoint[]> {
  const grouped: Record<string, Endpoint[]> = {};
  
  for (const [pathStr, methods] of Object.entries(spec.paths)) {
    for (const [method, details] of Object.entries(methods)) {
      if (method === 'parameters' || typeof details !== 'object') continue;
      
      const tags = details.tags || ['default'];
      const tag = tags[0];
      
      if (!grouped[tag]) grouped[tag] = [];
      
      const parameters = details.parameters || [];
      const hasQuery = parameters.some((p: any) => p.in === 'query');
      const hasBody = details.requestBody !== undefined;
      
      grouped[tag].push({
        path: pathStr,
        method: method.toUpperCase(),
        operationId: details.operationId,
        tag,
        parameters,
        requestBody: details.requestBody,
        hasQuery,
        hasBody
      });
    }
  }
  
  return grouped;
}

function generateClassCode(className: string, tag: string, endpoints: Endpoint[]): string {
  const methods = endpoints.map(ep => {
    const methodName = ep.operationId.replace(`${tag}-`, '');
    const pathType = `"${ep.path}"`;
    
    return generateMethod(methodName, ep, pathType);
  }).join('\n');

  return `import createClient from 'openapi-fetch';
import type { paths } from '../types/dokploy';
import { DokployError } from '../error';

/**
 * ${className} API resource
 * Handles all ${tag}-related operations
 */
export class ${className} {
  private client: ReturnType<typeof createClient<paths>>;

  constructor(baseUrl: string, apiToken: string) {
    this.client = createClient<paths>({ 
      baseUrl,
      headers: { 
        Authorization: \`Bearer \${apiToken}\` 
      }
    });
  }
${methods}
}
`;
}

function generateMethod(methodName: string, endpoint: Endpoint, pathType: string): string {
  const method = endpoint.method.toLowerCase();
  const params: string[] = [];
  const callParams: string[] = [];
  
  if (endpoint.hasBody) {
    params.push('data: any');
    callParams.push('body: data');
  }
  
  if (endpoint.hasQuery) {
    params.push('query?: any');
    callParams.push('params: query');
  }
  
  const paramsStr = params.length > 0 ? params.join(', ') : '';
  const callParamsStr = callParams.length > 0 ? `, {\n      ${callParams.join(',\n      ')}\n    }` : '';

  return `
  /**
   * ${endpoint.operationId}
   * @param ${params.length > 0 ? params.map(p => p.split(':')[0]).join(', ') : 'void'}
   */
  async ${methodName}(${paramsStr}) {
    const response = await this.client.${method.toUpperCase()}(${pathType}${callParamsStr});
    
    if (response.error) {
      throw new DokployError(
        response.error.code || 'UNKNOWN_ERROR',
        response.error.message || 'An error occurred',
        response.error.issues
      );
    }
    
    return response.data;
  }`;
}

function generateMainClass(tags: string[]): string {
  const imports = tags.map(tag => {
    const className = TAGS_MAP[tag] || capitalize(tag);
    return `import { ${className} } from './resources/${className}';`;
  }).join('\n');
  
  const properties = tags.map(tag => {
    const className = TAGS_MAP[tag] || capitalize(tag);
    return `  public readonly ${tag}: ${className};`;
  }).join('\n');
  
  const constructorBody = tags.map(tag => {
    const className = TAGS_MAP[tag] || capitalize(tag);
    return `    this.${tag} = new ${className}(baseUrl, apiToken);`;
  }).join('\n');

  return `${imports}
import { DokployError } from './error';

export { DokployError };

/**
 * Dokploy API Client
 */
export class Dokploy {
${properties}

  constructor(
    private readonly baseUrl: string,
    private readonly apiToken: string
  ) {
${constructorBody}
  }
}

export default Dokploy;
`;
}

function generateIndex(tags: string[]): string {
  const exports = tags.map(tag => {
    const className = TAGS_MAP[tag] || capitalize(tag);
    return `export { ${className} } from './resources/${className}';`;
  }).join('\n');
  
  return `// Main client
export { Dokploy, DokployError } from './Dokploy';
import { Dokploy } from './Dokploy';
export default Dokploy;

// Individual resources
${exports}

// Types
export type { paths, components, operations } from './types/dokploy';
`;
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Run generator
try {
  generateSDK();
} catch (error) {
  console.error('❌ Error generating SDK:', error);
  process.exit(1);
}

