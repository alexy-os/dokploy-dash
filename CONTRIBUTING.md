# Contributing to Dokploy SDK

Thank you for your interest in contributing! This document provides guidelines for developing and testing the Dokploy TypeScript SDK.

## Development Workflow

### Setup

```bash
# Clone repository
git clone https://github.com/yourusername/dokploy-sdk.git
cd dokploy-sdk

# Install dependencies
npm install

# Generate SDK from OpenAPI spec
npm run generate
```

### Making Changes

1. **Update OpenAPI Spec** - If Dokploy API changes, update `openapi.json`
2. **Regenerate SDK** - Run `npm run generate`
3. **Build** - Run `npm run build`
4. **Test** - Run `npm test`
5. **Lint** - Run `npm run lint`

## SDK Generation Process

### Step 1: Generate Types

```bash
npm run generate:types
```

This runs `openapi-typescript` to generate TypeScript types from `openapi.json`:
- Input: `openapi.json`
- Output: `src/types/dokploy.d.ts`

### Step 2: Generate Resource Classes

```bash
npm run generate:sdk
```

This executes `scripts/generate-sdk.ts` which:

1. **Reads OpenAPI spec** from `openapi.json`
2. **Groups endpoints by tags** (e.g., `application`, `cluster`, `docker`)
3. **Generates resource classes** for each tag in `src/resources/`
4. **Creates main client** in `src/Dokploy.ts`
5. **Updates exports** in `src/index.ts`

**Generator logic:**

```typescript
// Each endpoint like "/cluster.getNodes" (GET)
// becomes a method:
async getNodes(query?: any) {
  const response = await this.client.GET("/cluster.getNodes", {
    params: query
  });
  
  if (response.error) {
    throw new DokployError(/* ... */);
  }
  
  return response.data;
}
```

### Generated Files

After running `npm run generate`, these files are created/updated:

```
src/
├── Dokploy.ts          # Main client (imports all resources)
├── index.ts            # Public exports
└── resources/
    ├── Admin.ts
    ├── Application.ts
    ├── Cluster.ts
    └── ... (40 total)
```

**Do not manually edit these generated files!** They will be overwritten.

## Testing

### Running Tests

```bash
# Run all tests
npm test

# Watch mode
npm test -- --watch

# Coverage report
npm test -- --coverage

# Specific test file
npm test tests/client.test.ts
```

### Writing Tests

Tests are located in `tests/` directory using Vitest:

```typescript
import { describe, it, expect, beforeEach } from 'vitest';
import { Dokploy, DokployError } from '../src';

describe('Resource Tests', () => {
  let client: Dokploy;

  beforeEach(() => {
    client = new Dokploy(
      'https://test.example.com/api',
      'test-token'
    );
  });

  it('should initialize resource', () => {
    expect(client.cluster).toBeDefined();
  });
});
```

### Test Configuration

See `vitest.config.ts` for test configuration.

## Manual Changes

### Files You Can Edit

**Core files:**
- `src/error.ts` - Error handling class
- `src/README.md` - User documentation

**Configuration:**
- `package.json` - Package metadata and scripts
- `tsconfig.json` - TypeScript compiler options
- `.eslintrc.js` - ESLint rules
- `.editorconfig` - Editor settings

**Scripts:**
- `scripts/generate-sdk.ts` - Generator logic
- `scripts/TAGS_MAP` - Tag to class name mapping

**Tests:**
- `tests/*.test.ts` - Test files

**Examples:**
- `examples/*.ts` - Usage examples

### Files Generated (Do Not Edit)

- `src/Dokploy.ts`
- `src/index.ts`
- `src/resources/*.ts` (all 40 files)
- `src/types/dokploy.d.ts`

## Adding New Resource Classes

If Dokploy adds a new resource type (e.g., `monitoring`):

1. **Update TAGS_MAP** in `scripts/generate-sdk.ts`:

```typescript
const TAGS_MAP: Record<string, string> = {
  // ... existing tags
  'monitoring': 'Monitoring',
};
```

2. **Regenerate SDK:**

```bash
npm run generate
```

3. **Verify generation:**

```bash
ls src/resources/Monitoring.ts
```

## Modifying Generator Behavior

### Changing Method Signatures

Edit `generateMethod()` in `scripts/generate-sdk.ts`:

```typescript
function generateMethod(methodName: string, endpoint: Endpoint, pathType: string): string {
  // Current implementation generates:
  // async methodName(data?: any, query?: any)
  
  // Modify to add custom logic
}
```

### Customizing Error Handling

Edit the error handling block in the generated methods:

```typescript
if (response.error) {
  throw new DokployError(
    response.error.code || 'UNKNOWN_ERROR',
    response.error.message || 'An error occurred',
    response.error.issues
  );
}
```

### Adding Documentation

Enhance method documentation by modifying the JSDoc generation in `generateMethod()`:

```typescript
return `
  /**
   * ${endpoint.operationId}
   * ${endpoint.description || ''}
   * @param ${params.map(p => p.split(':')[0]).join(', ')}
   * @returns Promise with API response
   * @throws {DokployError}
   */
  async ${methodName}(${paramsStr}) {
    // ...
  }`;
```

## Build Process

The build process (`npm run build`) does the following:

1. **Compile TypeScript** → JavaScript (`tsc`)
2. **Generate type definitions** → `.d.ts` files
3. **Copy documentation** → `dist/README.md`
4. **Copy license** → `dist/LICENSE`
5. **Copy package.json** → `dist/package.json`

Output structure:

```
dist/
├── Dokploy.js
├── Dokploy.d.ts
├── error.js
├── error.d.ts
├── index.js
├── index.d.ts
├── resources/
│   ├── Admin.js
│   ├── Admin.d.ts
│   └── ... (40 resources)
├── README.md
├── LICENSE
└── package.json
```

## Publishing to npm

### Pre-publish Checklist

- [ ] Update version in `package.json`
- [ ] Run `npm run generate` to ensure SDK is up-to-date
- [ ] Run `npm run build` to compile
- [ ] Run `npm test` to verify tests pass
- [ ] Update `CHANGELOG.md` with changes
- [ ] Commit all changes

### Publishing

```bash
# Dry run to see what will be published
npm pack

# Check the tarball contents
tar -tzf dokploy-sdk-1.0.0.tgz

# Publish to npm
npm publish
```

### What Gets Published

The `.npmignore` file excludes development files:

**Included in package:**
- `dist/` - Compiled SDK
- `dist/README.md` - Documentation
- `dist/LICENSE` - License

**Excluded from package:**
- `src/` - Source files
- `tests/` - Test files
- `scripts/` - Generator scripts
- `examples/` - Example files
- Development config files

## Code Style

### TypeScript

- Use strict TypeScript mode
- Enable all strict type checking
- Export all public interfaces and types
- Use async/await for asynchronous code

### ESLint Rules

```javascript
rules: {
  '@typescript-eslint/no-explicit-any': 'off', // Allow any for OpenAPI types
  '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
}
```

### Naming Conventions

- **Classes**: PascalCase (`Dokploy`, `Application`, `DokployError`)
- **Methods**: camelCase (`getNodes`, `createApplication`)
- **Files**: PascalCase for classes (`Cluster.ts`, `Project.ts`)
- **Variables**: camelCase

## Common Tasks

### Update OpenAPI Spec

```bash
# Download from Dokploy instance
curl https://your-dokploy.com/api/settings.getOpenApiDocument > openapi.json

# Or copy from examples
cp examples/settings.getOpenApiDocument openapi.json

# Regenerate SDK
npm run generate
npm run build
```

### Add New Example

Create file in `examples/` directory:

```typescript
import { Dokploy } from '../src';

async function main() {
  const client = new Dokploy(
    process.env.DOKPLOY_URL!,
    process.env.DOKPLOY_TOKEN!
  );
  
  // Your example code
}

main();
```

Run with:

```bash
npx tsx examples/your-example.ts
```

### Debug Generated Code

```bash
# Generate and view specific resource
npm run generate:sdk
cat src/resources/Cluster.ts

# Check method signature
grep -A 10 "async getNodes" src/resources/Cluster.ts
```

## Troubleshooting

### Generation Issues

**Problem**: Generator fails with parse error

```bash
# Check OpenAPI spec is valid JSON
cat openapi.json | jq . > /dev/null

# Validate OpenAPI spec
npx @redocly/cli lint openapi.json
```

**Problem**: Missing methods after generation

- Verify endpoint has `tags` field in OpenAPI spec
- Check `operationId` format is `tag-methodName`
- Ensure tag is in `TAGS_MAP`

### Build Issues

**Problem**: TypeScript errors

```bash
# Clean build
rm -rf dist/
npm run build
```

**Problem**: Type errors in generated files

- Regenerate types: `npm run generate:types`
- Check `openapi.json` schema definitions
- Verify `openapi-typescript` version compatibility

### Test Issues

**Problem**: Import errors in tests

```bash
# Rebuild SDK
npm run build

# Check exports
cat src/index.ts
```

## Dependencies

### Production

- `openapi-fetch` (v0.12.5) - OpenAPI-typed fetch client

### Development

- `typescript` - TypeScript compiler
- `openapi-typescript` - Generate types from OpenAPI
- `tsx` - TypeScript executor
- `vitest` - Testing framework
- `eslint` - Code linting

## Version Management

Follow semantic versioning:

- **Major** (x.0.0) - Breaking API changes
- **Minor** (0.x.0) - New features, backward compatible
- **Patch** (0.0.x) - Bug fixes

Update `package.json` version before publishing.

## Getting Help

- **Issues**: GitHub Issues
- **Discussions**: GitHub Discussions
- **Documentation**: See `src/README.md`
- **Examples**: Check `examples/` directory

## Code Review Checklist

Before submitting PR:

- [ ] Code follows project style guide
- [ ] All tests pass (`npm test`)
- [ ] Build succeeds (`npm run build`)
- [ ] Linter passes (`npm run lint`)
- [ ] Documentation updated if needed
- [ ] Examples updated if adding features
- [ ] Commit messages are clear

## Questions?

Open an issue or discussion on GitHub.

