# Dokploy TypeScript SDK

TypeScript SDK for Dokploy API with full type safety.

## Installation

```bash
npm install @dokploy/sdk
```

## Quick Start

```typescript
import { Dokploy } from '@dokploy/sdk';

const client = new Dokploy(
  'https://dash.example.com/api',
  'your-api-token'
);
```

## Examples

### Projects & Environments

```typescript
// List all projects
const projects = await client.project.all();

// Get specific project
const project = await client.project.one({ projectId: 'proj-id' });

// Create project
const newProject = await client.project.create({
  name: 'My Project',
  description: 'Production environment'
});

// Create environment
const env = await client.environment.create({
  name: 'production',
  projectId: newProject.projectId
});
```

### Applications

```typescript
// Create application
const app = await client.application.create({
  name: 'web-api',
  environmentId: 'env-id',
  appName: 'my-web-api'
});

// Deploy application
await client.application.deploy({
  applicationId: app.applicationId,
  title: 'v1.0.0',
  description: 'Initial deployment'
});

// Get application status
const appDetails = await client.application.one({ 
  applicationId: app.applicationId 
});

// Stop/Start
await client.application.stop({ applicationId: app.applicationId });
await client.application.start({ applicationId: app.applicationId });

// Update environment variables
await client.application.saveEnvironment({
  applicationId: app.applicationId,
  env: 'NODE_ENV=production\nPORT=3000'
});
```

### Databases

#### PostgreSQL

```typescript
// Create database
const db = await client.postgres.create({
  name: 'Main Database',
  appName: 'postgres-main',
  environmentId: 'env-id',
  databaseName: 'myapp',
  databaseUser: 'admin',
  databasePassword: 'secure-password'
});

// Deploy database
await client.postgres.deploy({ postgresId: db.postgresId });

// Get database info
const dbInfo = await client.postgres.one({ postgresId: db.postgresId });
```

#### MySQL, MariaDB, MongoDB, Redis

```typescript
// MySQL
const mysql = await client.mysql.create({
  name: 'MySQL DB',
  appName: 'mysql-db',
  environmentId: 'env-id',
  databaseName: 'app',
  databaseUser: 'user',
  databasePassword: 'pass',
  databaseRootPassword: 'root-pass'
});

// MariaDB
const maria = await client.mariadb.create({ /* ... */ });

// MongoDB
const mongo = await client.mongo.create({
  name: 'Mongo DB',
  appName: 'mongo-db',
  environmentId: 'env-id',
  databaseUser: 'admin',
  databasePassword: 'pass'
});

// Redis
const redis = await client.redis.create({
  name: 'Redis Cache',
  appName: 'redis-cache',
  environmentId: 'env-id',
  databasePassword: 'redis-pass'
});
```

### Docker Compose

```typescript
// Create compose
const compose = await client.compose.create({
  name: 'My Stack',
  environmentId: 'env-id',
  composeType: 'docker-compose',
  composeFile: `
version: '3.8'
services:
  web:
    image: nginx:latest
    ports:
      - 80:80
  `
});

// Deploy compose
await client.compose.deploy({ composeId: compose.composeId });

// Get services
const services = await client.compose.loadServices({ 
  composeId: compose.composeId 
});
```

### Domains

```typescript
// Create domain for application
const domain = await client.domain.create({
  host: 'app.example.com',
  port: 3000,
  https: true,
  certificateType: 'letsencrypt',
  applicationId: 'app-id'
});

// Create domain for compose service
const composeDomain = await client.domain.create({
  host: 'service.example.com',
  port: 8080,
  https: true,
  certificateType: 'letsencrypt',
  composeId: 'compose-id',
  serviceName: 'web'
});

// Update domain
await client.domain.update({
  domainId: domain.domainId,
  host: 'new-app.example.com',
  port: 3000,
  https: true
});
```

### Docker Operations

```typescript
// Get all containers
const containers = await client.docker.getContainers();

// Get containers by app name
const appContainers = await client.docker.getContainersByAppLabel({
  appName: 'my-app',
  type: 'standalone'
});

// Restart container
await client.docker.restartContainer({ 
  containerId: 'container-id' 
});

// Get container config
const config = await client.docker.getConfig({
  containerId: 'container-id'
});
```

### Cluster & Swarm

```typescript
// Get cluster nodes
const nodes = await client.cluster.getNodes();

// Add worker node
const workerToken = await client.cluster.addWorker();

// Get swarm nodes
const swarmNodes = await client.swarm.getNodes();

// Get node info
const nodeInfo = await client.swarm.getNodeInfo({ 
  nodeId: 'node-id' 
});
```

### Backups

```typescript
// Create backup schedule
const backup = await client.backup.create({
  schedule: '0 2 * * *', // Daily at 2 AM
  enabled: true,
  prefix: 'daily-backup',
  destinationId: 'dest-id',
  database: 'mydb',
  postgresId: 'postgres-id',
  databaseType: 'postgres',
  backupType: 'database'
});

// Manual backup
await client.backup.manualBackupPostgres({ 
  backupId: backup.backupId 
});

// List backup files
const files = await client.backup.listBackupFiles({
  destinationId: 'dest-id',
  search: 'daily-backup'
});
```

### Users & Organizations

```typescript
// Get current user
const currentUser = await client.user.get();

// List all users
const users = await client.user.all();

// Create organization
const org = await client.organization.create({
  name: 'My Company',
  logo: 'https://example.com/logo.png'
});

// Assign permissions
await client.user.assignPermissions({
  id: 'user-id',
  accessedProjects: ['proj-1', 'proj-2'],
  accessedEnvironments: ['env-1'],
  accessedServices: ['app-1'],
  canCreateProjects: true,
  canCreateServices: true,
  canDeleteProjects: false,
  canDeleteServices: false,
  canAccessToDocker: true,
  canAccessToTraefikFiles: true,
  canAccessToAPI: true,
  canAccessToSSHKeys: true,
  canAccessToGitProviders: true,
  canDeleteEnvironments: false,
  canCreateEnvironments: true
});
```

### Monitoring & Metrics

```typescript
// Get server metrics
const metrics = await client.user.getServerMetrics();

// Get container metrics
const containerMetrics = await client.user.getContainerMetrics({
  url: 'https://metrics.example.com',
  token: 'metrics-token',
  appName: 'my-app',
  dataPoints: '100'
});

// Setup monitoring for server
await client.server.setupMonitoring({
  serverId: 'server-id',
  metricsConfig: {
    server: {
      refreshRate: 5,
      port: 9090,
      token: 'token',
      urlCallback: 'https://dash.example.com/api',
      retentionDays: 30,
      cronJob: '*/5 * * * *',
      thresholds: {
        cpu: 80,
        memory: 85
      }
    },
    containers: {
      refreshRate: 10,
      services: {
        include: ['app-*'],
        exclude: ['test-*']
      }
    }
  }
});
```

### Settings

```typescript
// Get system health
const health = await client.settings.health();

// Reload Traefik
await client.settings.reloadTraefik();

// Get Dokploy version
const version = await client.settings.getDokployVersion();

// Clean Docker resources
await client.settings.cleanUnusedImages();
await client.settings.cleanUnusedVolumes();
await client.settings.cleanStoppedContainers();
await client.settings.cleanAll();
```

### Git Providers

#### GitHub

```typescript
// Get GitHub repositories
const repos = await client.github.getGithubRepositories({ 
  githubId: 'github-id' 
});

// Get branches
const branches = await client.github.getGithubBranches({
  repo: 'my-repo',
  owner: 'my-org',
  githubId: 'github-id'
});

// Configure GitHub for application
await client.application.saveGithubProvider({
  applicationId: 'app-id',
  repository: 'my-repo',
  branch: 'main',
  owner: 'my-org',
  buildPath: '/',
  githubId: 'github-id',
  enableSubmodules: false,
  triggerType: 'push'
});
```

#### GitLab, Bitbucket, Gitea

```typescript
// GitLab
const gitlabRepos = await client.gitlab.getGitlabRepositories({ 
  gitlabId: 'gitlab-id' 
});

// Bitbucket
const bbRepos = await client.bitbucket.getBitbucketRepositories({ 
  bitbucketId: 'bb-id' 
});

// Gitea
const giteaRepos = await client.gitea.getGiteaRepositories({ 
  giteaId: 'gitea-id' 
});
```

### Notifications

```typescript
// Slack
const slack = await client.notification.createSlack({
  name: 'Slack Notifications',
  webhookUrl: 'https://hooks.slack.com/...',
  channel: '#deployments',
  appDeploy: true,
  appBuildError: true,
  databaseBackup: true,
  dokployRestart: true,
  dockerCleanup: false,
  serverThreshold: true
});

// Discord
const discord = await client.notification.createDiscord({
  name: 'Discord Alerts',
  webhookUrl: 'https://discord.com/api/webhooks/...',
  decoration: true,
  appDeploy: true,
  appBuildError: true,
  databaseBackup: false,
  dokployRestart: true,
  dockerCleanup: false,
  serverThreshold: true
});

// Email
const email = await client.notification.createEmail({
  name: 'Email Alerts',
  smtpServer: 'smtp.gmail.com',
  smtpPort: 587,
  username: 'user@gmail.com',
  password: 'app-password',
  fromAddress: 'alerts@example.com',
  toAddresses: ['admin@example.com'],
  appDeploy: true,
  appBuildError: true,
  databaseBackup: true,
  dokployRestart: true,
  dockerCleanup: false,
  serverThreshold: true
});
```

### Scheduled Tasks

```typescript
// Create schedule
const schedule = await client.schedule.create({
  name: 'Daily Cleanup',
  cronExpression: '0 3 * * *',
  scheduleType: 'dokploy-server',
  shellType: 'bash',
  command: 'docker system prune -f',
  enabled: true
});

// Run schedule manually
await client.schedule.runManually({ 
  scheduleId: schedule.scheduleId 
});

// List schedules
const schedules = await client.schedule.list({
  id: 'server-id',
  scheduleType: 'server'
});
```

### Deployments

```typescript
// Get deployment history
const deployments = await client.deployment.all({ 
  applicationId: 'app-id' 
});

// Get compose deployments
const composeDeployments = await client.deployment.allByCompose({ 
  composeId: 'compose-id' 
});

// Kill running deployment
await client.deployment.killProcess({ 
  deploymentId: 'deploy-id' 
});
```

### Mounts & Volumes

```typescript
// Create bind mount
await client.mounts.create({
  type: 'bind',
  hostPath: '/host/path',
  mountPath: '/container/path',
  serviceType: 'application',
  serviceId: 'app-id'
});

// Create volume mount
await client.mounts.create({
  type: 'volume',
  volumeName: 'my-volume',
  mountPath: '/data',
  serviceType: 'postgres',
  serviceId: 'postgres-id'
});

// Create file mount
await client.mounts.create({
  type: 'file',
  content: 'config content',
  filePath: '/etc/config.conf',
  mountPath: '/app/config.conf',
  serviceType: 'application',
  serviceId: 'app-id'
});
```

### Remote Servers

```typescript
// Create remote server
const server = await client.server.create({
  name: 'Production Server',
  description: 'Main production server',
  ipAddress: '192.168.1.100',
  port: 22,
  username: 'root',
  sshKeyId: 'ssh-key-id'
});

// Setup server
await client.server.setup({ serverId: server.serverId });

// Validate server connection
const isValid = await client.server.validate({ 
  serverId: server.serverId 
});
```

### SSH Keys

```typescript
// Generate SSH key
const keyPair = await client.sshKey.generate({ type: 'ed25519' });

// Create SSH key
const sshKey = await client.sshKey.create({
  name: 'Deploy Key',
  description: 'For GitHub deployments',
  privateKey: keyPair.privateKey,
  publicKey: keyPair.publicKey,
  organizationId: 'org-id'
});

// List keys
const keys = await client.sshKey.all();
```

### Registry

```typescript
// Create registry
const registry = await client.registry.create({
  registryName: 'Docker Hub',
  username: 'myuser',
  password: 'mypass',
  registryUrl: 'https://index.docker.io/v1/',
  registryType: 'cloud',
  imagePrefix: 'myorg'
});

// Test registry connection
await client.registry.testRegistry({
  registryName: 'Test',
  username: 'user',
  password: 'pass',
  registryUrl: 'https://registry.example.com',
  registryType: 'cloud'
});
```

### Security & Redirects

```typescript
// Add basic auth
await client.security.create({
  applicationId: 'app-id',
  username: 'admin',
  password: 'secure-password'
});

// Create redirect
await client.redirects.create({
  applicationId: 'app-id',
  regex: '^/old-path/(.*)',
  replacement: '/new-path/$1',
  permanent: true
});
```

### Ports

```typescript
// Expose additional port
await client.port.create({
  applicationId: 'app-id',
  publishedPort: 8080,
  targetPort: 8080,
  protocol: 'tcp',
  publishMode: 'ingress'
});
```

## Error Handling

```typescript
import { DokployError } from '@dokploy/sdk';

try {
  await client.application.create({
    name: 'my-app',
    environmentId: 'invalid-id'
  });
} catch (error) {
  if (error instanceof DokployError) {
    console.error('Error Code:', error.code);
    console.error('Message:', error.message);
    
    if (error.issues) {
      console.error('Validation Issues:');
      error.issues.forEach(issue => {
        console.error(`  - ${issue.message}`);
      });
    }
    
    // Or get formatted message
    console.error(error.getFullMessage());
  }
}
```

## Type Safety

All methods are fully typed using the OpenAPI specification:

```typescript
// TypeScript will autocomplete and validate:
const app = await client.application.create({
  name: 'app',           // ✓ required
  environmentId: 'env',  // ✓ required
  description: 'test',   // ✓ optional
  // unknownField: 123   // ✗ TypeScript error
});

// Query parameters are typed too
const project = await client.project.one({
  projectId: 'id'  // ✓ required
});
```

## Available Resources

All 40 resources are available via the client:

```typescript
client.admin          // Admin operations
client.ai             // AI operations
client.application    // Applications
client.backup         // Backups
client.bitbucket      // Bitbucket integration
client.certificates   // SSL certificates
client.cluster        // Cluster management
client.compose        // Docker Compose
client.deployment     // Deployments
client.destination    // Backup destinations
client.docker         // Docker operations
client.domain         // Domains
client.environment    // Environments
client.gitProvider    // Git providers
client.gitea          // Gitea
client.github         // GitHub
client.gitlab         // GitLab
client.mariadb        // MariaDB
client.mongo          // MongoDB
client.mounts         // Volume mounts
client.mysql          // MySQL
client.notification   // Notifications
client.organization   // Organizations
client.port           // Port mappings
client.postgres       // PostgreSQL
client.previewDeployment  // Preview deployments
client.project        // Projects
client.redirects      // URL redirects
client.redis          // Redis
client.registry       // Container registries
client.rollback       // Rollbacks
client.schedule       // Scheduled tasks
client.security       // Security settings
client.server         // Remote servers
client.settings       // System settings
client.sshKey         // SSH keys
client.stripe         // Stripe integration
client.swarm          // Docker Swarm
client.user           // Users
client.volumeBackups  // Volume backups
```

## API Token

Get your API token from Dokploy dashboard:

1. Login to Dokploy
2. Go to Settings → API
3. Click "Generate Token"
4. Copy the token

```typescript
const client = new Dokploy(
  'https://your-dokploy-instance.com/api',
  'dkp_your_token_here'
);
```

## License

MIT

