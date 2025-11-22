import { Dokploy } from '../src';

async function main() {
  const client = new Dokploy(
    'https://dash.example.com/api',
    'test-token'
  );

  console.log('✅ Dokploy client initialized');
  console.log('✅ Available resources:', Object.keys(client).join(', '));
}

main();

