import { Dokploy } from '../src';
import 'dotenv/config';

async function main() {
  // Initialize client
  const client = new Dokploy(
    process.env.DOKPLOY_URL || 'https://dash.example.com/api',
    process.env.DOKPLOY_TOKEN || ''
  );

  try {
    // Example 1: Get cluster nodes
    console.log('📦 Fetching cluster nodes...');
    const nodes = await client.cluster.getNodes();
    console.log('Nodes:', nodes);

    // Example 2: List all projects
    console.log('\n📁 Fetching projects...');
    const projects = await client.project.all();
    console.log('Projects:', projects);

    // Example 3: Get Docker containers
    console.log('\n🐳 Fetching Docker containers...');
    const containers = await client.docker.getContainers();
    console.log('Containers:', containers);

    // Example 4: Check system health
    console.log('\n💚 Checking system health...');
    const health = await client.settings.health();
    console.log('Health:', health);

  } catch (error) {
    console.error('❌ Error:', error);
  }
}

main();

