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

See [SDK Documentation](./src/README.md) for complete usage examples.

## Features

- ✅ Full TypeScript support with generated types
- ✅ 40+ resource classes (Application, Docker, Cluster, etc.)
- ✅ 382 API methods
- ✅ Type-safe API calls
- ✅ Automatic error handling
- ✅ Zero dependencies in production

## Development Setup

### Prerequisites

- Node.js 18+ and npm
- Dokploy OpenAPI specification (`openapi.json`)

### Installation

```bash
# Clone repository
git clone https://github.com/yourusername/dokploy-sdk.git
cd dokploy-sdk

# Install dependencies
npm install
```

### Generate SDK from OpenAPI Spec

The SDK is auto-generated from the Dokploy OpenAPI specification:

```bash
# Step 1: Generate TypeScript types from OpenAPI spec
npm run generate:types

# Step 2: Generate SDK resource classes
npm run generate:sdk

# Or run both steps
npm run generate
```

**What happens during generation:**

1. `generate:types` - Runs `openapi-typescript` to create type definitions in `src/types/dokploy.d.ts`
2. `generate:sdk` - Executes `scripts/generate-sdk.ts` which:
   - Reads `openapi.json`
   - Groups endpoints by tags
   - Generates 40 resource classes in `src/resources/`
   - Creates main `Dokploy` client class
   - Generates exports in `src/index.ts`

### Build

```bash
# Compile TypeScript to JavaScript
npm run build
```

This will:
- Compile all TypeScript files to `dist/`
- Generate `.d.ts` type definition files
- Copy `src/README.md` to `dist/README.md`
- Copy `LICENSE` and `package.json` to `dist/`

### Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

### Linting

```bash
npm run lint
```

## Project Structure

```
.
├── src/
│   ├── Dokploy.ts              # Main client class
│   ├── error.ts                # DokployError class
│   ├── index.ts                # Public exports
│   ├── README.md               # User documentation
│   ├── types/
│   │   └── dokploy.d.ts        # Generated OpenAPI types
│   └── resources/              # Generated resource classes
│       ├── Application.ts      # Application management
│       ├── Cluster.ts          # Cluster operations
│       ├── Docker.ts           # Docker operations
│       └── ... (40 total)
│
├── scripts/
│   └── generate-sdk.ts         # SDK generator script
│
├── tests/
│   └── client.test.ts          # Client tests
│
├── examples/
│   ├── basic-usage.ts          # Basic usage example
│   ├── simple-test.ts          # Simple test
│   └── complete-workflow.ts    # Complete workflow
│
├── dist/                       # Build output (generated)
│   ├── README.md               # Documentation
│   ├── *.js                    # Compiled JavaScript
│   └── *.d.ts                  # Type definitions
│
├── openapi.json                # Dokploy OpenAPI spec
├── package.json                # Package configuration
├── tsconfig.json               # TypeScript config
└── .eslintrc.js                # ESLint config
```

## Generator Configuration

### Tags Mapping

The generator maps OpenAPI tags to TypeScript class names in `scripts/generate-sdk.ts`:

```typescript
const TAGS_MAP = {
  'admin': 'Admin',
  'application': 'Application',
  'cluster': 'Cluster',
  'docker': 'Docker',
  // ... etc
};
```

### Adding New Resources

When new endpoints are added to Dokploy:

1. Update `openapi.json` with the new OpenAPI specification
2. Add tag mapping to `TAGS_MAP` if needed
3. Run `npm run generate`
4. Build with `npm run build`

## Available Resources

All 40 resources with method counts:

| Resource | Methods | Description |
|----------|---------|-------------|
| Admin | 1 | Admin operations |
| AI | 9 | AI operations |
| Application | 27 | Application management |
| Backup | 11 | Backup operations |
| Bitbucket | 7 | Bitbucket integration |
| Certificates | 4 | SSL certificates |
| Cluster | 4 | Cluster management |
| Compose | 26 | Docker Compose |
| Deployment | 5 | Deployment operations |
| Destination | 6 | Backup destinations |
| Docker | 7 | Docker operations |
| Domain | 9 | Domain management |
| Environment | 6 | Environment management |
| Gitea | 8 | Gitea integration |
| Github | 6 | GitHub integration |
| Gitlab | 7 | GitLab integration |
| GitProvider | 2 | Git provider management |
| MariaDB | 13 | MariaDB databases |
| Mongo | 13 | MongoDB databases |
| Mounts | 5 | Volume mounts |
| MySQL | 13 | MySQL databases |
| Notification | 26 | Notification services |
| Organization | 8 | Organization management |
| Port | 4 | Port mappings |
| Postgres | 13 | PostgreSQL databases |
| PreviewDeployment | 3 | Preview deployments |
| Project | 6 | Project management |
| Redirects | 4 | URL redirects |
| Redis | 13 | Redis databases |
| Registry | 6 | Container registries |
| Rollback | 2 | Rollback operations |
| Schedule | 6 | Scheduled tasks |
| Security | 4 | Security settings |
| Server | 15 | Remote server management |
| Settings | 46 | System settings |
| SSHKey | 6 | SSH key management |
| Stripe | 4 | Stripe integration |
| Swarm | 3 | Docker Swarm |
| User | 18 | User management |
| VolumeBackups | 6 | Volume backups |

**Total: 382 methods**

## Error Handling

The SDK includes a custom `DokployError` class:

```typescript
export class DokployError extends Error {
  constructor(
    public readonly code: string,
    message: string,
    public readonly issues?: { message: string }[]
  ) {
    super(message);
    this.name = 'DokployError';
  }

  getFullMessage(): string {
    // Returns formatted message with all issues
  }
}
```

All API errors are automatically caught and wrapped in `DokployError`.

## Type Safety

The SDK leverages the OpenAPI specification for full type safety:

```typescript
// TypeScript knows the exact structure
const app = await client.application.create({
  name: 'app',              // ✓ string required
  environmentId: 'env-id',  // ✓ string required
  description: 'optional',  // ✓ string | null optional
  // invalidField: 123      // ✗ TypeScript error
});
```

## Publishing

```bash
# Build the SDK
npm run build

# Publish to npm
npm publish
```

The published package includes:
- `dist/` - Compiled JavaScript and type definitions
- `dist/README.md` - Complete documentation
- `dist/LICENSE` - MIT license
- `dist/package.json` - Package metadata

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution guidelines.

## License

MIT - See [LICENSE](./LICENSE) for details.
