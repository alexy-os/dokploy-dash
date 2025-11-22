# Changelog

All notable changes to the Dokploy SDK will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-11-22

### Added

- Initial release of Dokploy TypeScript SDK
- 40 auto-generated resource classes
- 382 API methods
- Full TypeScript type safety with OpenAPI types
- Custom `DokployError` class for error handling
- Comprehensive documentation with examples
- Support for all Dokploy API endpoints:
  - Admin operations
  - AI operations
  - Application management (27 methods)
  - Backup operations (11 methods)
  - Certificate management
  - Cluster operations
  - Compose/Stack management (26 methods)
  - Database management (Postgres, MySQL, MariaDB, MongoDB, Redis)
  - Deployment tracking
  - Docker operations
  - Domain and SSL management
  - Environment management
  - Git provider integrations (GitHub, GitLab, Bitbucket, Gitea)
  - Monitoring and metrics
  - Notification services (Slack, Discord, Email, Telegram, etc.)
  - Organization management
  - Port mappings
  - Project management
  - Registry management
  - Remote server management (15 methods)
  - Schedule/Cron jobs
  - Security settings
  - SSH key management
  - Settings (46 methods)
  - Swarm operations
  - User management (18 methods)
  - Volume backup management

### Features

- Zero production dependencies (only `openapi-fetch`)
- Automatic SDK generation from OpenAPI specification
- Type-safe API calls with full IntelliSense support
- Comprehensive error handling with detailed error messages
- ESM module support
- Full documentation with practical examples

### Developer Tools

- TypeScript 5.7 with strict mode
- ESLint configuration
- Vitest for testing
- Auto-generation scripts
- Example workflows

