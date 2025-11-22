import { describe, it, expect, beforeEach } from 'vitest';
import { Dokploy, DokployError } from '../src';

describe('Dokploy SDK', () => {
  let client: Dokploy;

  beforeEach(() => {
    client = new Dokploy(
      'https://dash.example.com/api',
      'test-token'
    );
  });

  it('should create client instance', () => {
    expect(client).toBeInstanceOf(Dokploy);
  });

  it('should have all resource properties', () => {
    expect(client.cluster).toBeDefined();
    expect(client.application).toBeDefined();
    expect(client.docker).toBeDefined();
    expect(client.project).toBeDefined();
    expect(client.postgres).toBeDefined();
    expect(client.mongo).toBeDefined();
    expect(client.mysql).toBeDefined();
    expect(client.redis).toBeDefined();
  });

  it('should create DokployError with proper structure', () => {
    const error = new DokployError(
      'VALIDATION_ERROR',
      'Invalid input',
      [{ message: 'Name is required' }]
    );

    expect(error).toBeInstanceOf(Error);
    expect(error.code).toBe('VALIDATION_ERROR');
    expect(error.message).toBe('Invalid input');
    expect(error.issues).toHaveLength(1);
    expect(error.getFullMessage()).toContain('Name is required');
  });
});

