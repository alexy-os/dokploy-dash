import createClient from 'openapi-fetch';
import type { paths } from '../types/dokploy';
import { DokployError } from '../error';

/**
 * Bitbucket API resource
 * Handles all bitbucket-related operations
 */
export class Bitbucket {
  private client: ReturnType<typeof createClient<paths>>;

  constructor(baseUrl: string, apiToken: string) {
    this.client = createClient<paths>({ 
      baseUrl,
      headers: { 
        Authorization: `Bearer ${apiToken}` 
      }
    });
  }

  /**
   * bitbucket-create
   * @param data
   */
  async create(data: any) {
    const response = await this.client.POST("/bitbucket.create", {
      body: data
    });
    
    if (response.error) {
      throw new DokployError(
        response.error.code || 'UNKNOWN_ERROR',
        response.error.message || 'An error occurred',
        response.error.issues
      );
    }
    
    return response.data;
  }

  /**
   * bitbucket-one
   * @param query?
   */
  async one(query?: any) {
    const response = await this.client.GET("/bitbucket.one", {
      params: query
    });
    
    if (response.error) {
      throw new DokployError(
        response.error.code || 'UNKNOWN_ERROR',
        response.error.message || 'An error occurred',
        response.error.issues
      );
    }
    
    return response.data;
  }

  /**
   * bitbucket-bitbucketProviders
   * @param void
   */
  async bitbucketProviders() {
    const response = await this.client.GET("/bitbucket.bitbucketProviders");
    
    if (response.error) {
      throw new DokployError(
        response.error.code || 'UNKNOWN_ERROR',
        response.error.message || 'An error occurred',
        response.error.issues
      );
    }
    
    return response.data;
  }

  /**
   * bitbucket-getBitbucketRepositories
   * @param query?
   */
  async getBitbucketRepositories(query?: any) {
    const response = await this.client.GET("/bitbucket.getBitbucketRepositories", {
      params: query
    });
    
    if (response.error) {
      throw new DokployError(
        response.error.code || 'UNKNOWN_ERROR',
        response.error.message || 'An error occurred',
        response.error.issues
      );
    }
    
    return response.data;
  }

  /**
   * bitbucket-getBitbucketBranches
   * @param query?
   */
  async getBitbucketBranches(query?: any) {
    const response = await this.client.GET("/bitbucket.getBitbucketBranches", {
      params: query
    });
    
    if (response.error) {
      throw new DokployError(
        response.error.code || 'UNKNOWN_ERROR',
        response.error.message || 'An error occurred',
        response.error.issues
      );
    }
    
    return response.data;
  }

  /**
   * bitbucket-testConnection
   * @param data
   */
  async testConnection(data: any) {
    const response = await this.client.POST("/bitbucket.testConnection", {
      body: data
    });
    
    if (response.error) {
      throw new DokployError(
        response.error.code || 'UNKNOWN_ERROR',
        response.error.message || 'An error occurred',
        response.error.issues
      );
    }
    
    return response.data;
  }

  /**
   * bitbucket-update
   * @param data
   */
  async update(data: any) {
    const response = await this.client.POST("/bitbucket.update", {
      body: data
    });
    
    if (response.error) {
      throw new DokployError(
        response.error.code || 'UNKNOWN_ERROR',
        response.error.message || 'An error occurred',
        response.error.issues
      );
    }
    
    return response.data;
  }
}
