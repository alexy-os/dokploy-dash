import createClient from 'openapi-fetch';
import type { paths } from '../types/dokploy';
import { DokployError } from '../error';

/**
 * Gitea API resource
 * Handles all gitea-related operations
 */
export class Gitea {
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
   * gitea-create
   * @param data
   */
  async create(data: any) {
    const response = await this.client.POST("/gitea.create", {
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
   * gitea-one
   * @param query?
   */
  async one(query?: any) {
    const response = await this.client.GET("/gitea.one", {
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
   * gitea-giteaProviders
   * @param void
   */
  async giteaProviders() {
    const response = await this.client.GET("/gitea.giteaProviders");
    
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
   * gitea-getGiteaRepositories
   * @param query?
   */
  async getGiteaRepositories(query?: any) {
    const response = await this.client.GET("/gitea.getGiteaRepositories", {
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
   * gitea-getGiteaBranches
   * @param query?
   */
  async getGiteaBranches(query?: any) {
    const response = await this.client.GET("/gitea.getGiteaBranches", {
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
   * gitea-testConnection
   * @param data
   */
  async testConnection(data: any) {
    const response = await this.client.POST("/gitea.testConnection", {
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
   * gitea-update
   * @param data
   */
  async update(data: any) {
    const response = await this.client.POST("/gitea.update", {
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
   * gitea-getGiteaUrl
   * @param query?
   */
  async getGiteaUrl(query?: any) {
    const response = await this.client.GET("/gitea.getGiteaUrl", {
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
}
