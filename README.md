# Dokploy TypeScript SDK

TypeScript SDK for the Dokploy API with full type safety and auto-generated client classes.

## Installation

```bash
npm install @dokploy/sdk
```

## Usage

```typescript
import { Dokploy } from '@dokploy/sdk';

const client = new Dokploy(
  'https://dash.example.com/api',
  'your-api-token'
);

// Get cluster nodes
const nodes = await client.cluster.getNodes();

// List projects
const projects = await client.project.all();

// Create application
const app = await client.application.create({
  name: 'my-app',
  environmentId: 'env-id'
});
```

## Features

- ✅ Full TypeScript support with generated types
- ✅ 40+ resource classes (Application, Docker, Cluster, etc.)
- ✅ Type-safe API calls
- ✅ Automatic error handling
- ✅ Zero dependencies in production

## Available Resources

- `admin` - Admin operations
- `ai` - AI operations
- `application` - Application management
- `backup` - Backup operations
- `bitbucket` - Bitbucket integration
- `certificates` - SSL certificates
- `cluster` - Cluster management
- `compose` - Docker Compose
- `deployment` - Deployment operations
- `destination` - Backup destinations
- `docker` - Docker operations
- `domain` - Domain management
- `environment` - Environments
- `gitProvider` - Git providers
- `gitea` - Gitea integration
- `github` - GitHub integration
- `gitlab` - GitLab integration
- `mariadb` - MariaDB databases
- `mongo` - MongoDB databases
- `mounts` - Volume mounts
- `mysql` - MySQL databases
- `notification` - Notifications
- `organization` - Organizations
- `port` - Port mappings
- `postgres` - PostgreSQL databases
- `previewDeployment` - Preview deployments
- `project` - Projects
- `redirects` - URL redirects
- `redis` - Redis databases
- `registry` - Container registries
- `rollback` - Rollback operations
- `schedule` - Scheduled tasks
- `security` - Security settings
- `server` - Remote servers
- `settings` - System settings
- `sshKey` - SSH keys
- `stripe` - Stripe integration
- `swarm` - Docker Swarm
- `user` - User management
- `volumeBackups` - Volume backups

## Development

### Generate SDK

```bash
# Generate types from OpenAPI spec
npm run generate:types

# Generate SDK classes
npm run generate:sdk

# Or both
npm run generate
```

### Build

```bash
npm run build
```

### Test

```bash
npm test
```

## Error Handling

```typescript
import { DokployError } from '@dokploy/sdk';

try {
  await client.application.create({ name: 'app' });
} catch (error) {
  if (error instanceof DokployError) {
    console.error('Code:', error.code);
    console.error('Message:', error.message);
    console.error('Issues:', error.issues);
    console.error('Full:', error.getFullMessage());
  }
}
```

## License

MIT
