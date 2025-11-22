import { Dokploy } from '../src';

async function main() {
  const client = new Dokploy(
    process.env.DOKPLOY_URL || 'https://dash.example.com/api',
    process.env.DOKPLOY_TOKEN || 'test-token'
  );

  console.log('📦 Dokploy SDK - Complete Workflow Example\n');

  try {
    // 1. Create Project
    console.log('1️⃣  Creating project...');
    const project = await client.project.create({
      name: 'Production',
      description: 'Main production environment'
    });
    console.log('   ✓ Project created:', project);

    // 2. Create Environment
    console.log('\n2️⃣  Creating environment...');
    const env = await client.environment.create({
      name: 'prod',
      projectId: project.projectId
    });
    console.log('   ✓ Environment created:', env);

    // 3. Create Application
    console.log('\n3️⃣  Creating application...');
    const app = await client.application.create({
      name: 'Web API',
      environmentId: env.environmentId,
      appName: 'web-api'
    });
    console.log('   ✓ Application created:', app);

    // 4. Create Database
    console.log('\n4️⃣  Creating PostgreSQL database...');
    const db = await client.postgres.create({
      name: 'Main DB',
      appName: 'postgres-main',
      environmentId: env.environmentId,
      databaseName: 'app',
      databaseUser: 'admin',
      databasePassword: 'secure-pass'
    });
    console.log('   ✓ Database created:', db);

    // 5. Create Domain
    console.log('\n5️⃣  Creating domain...');
    const domain = await client.domain.create({
      host: 'api.example.com',
      port: 3000,
      https: true,
      certificateType: 'letsencrypt',
      applicationId: app.applicationId
    });
    console.log('   ✓ Domain created:', domain);

    console.log('\n✅ Workflow completed successfully!');
    console.log('\n📊 Summary:');
    console.log(`   - Project ID: ${project.projectId}`);
    console.log(`   - Environment ID: ${env.environmentId}`);
    console.log(`   - Application ID: ${app.applicationId}`);
    console.log(`   - Database ID: ${db.postgresId}`);
    console.log(`   - Domain: ${domain.host}`);

  } catch (error) {
    console.error('\n❌ Error:', error);
  }
}

// Only run if executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

