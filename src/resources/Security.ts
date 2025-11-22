import createClient from 'openapi-fetch';
import type { paths } from '../types/dokploy';
import { DokployError } from '../error';

/**
 * Security API resource
 * Handles all security-related operations
 */
export class Security {
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
   * security-create
   * @param data
   */
  async create(data: any) {
    const response = await this.client.POST("/security.create", {
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
   * security-one
   * @param query?
   */
  async one(query?: any) {
    const response = await this.client.GET("/security.one", {
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
   * security-delete
   * @param data
   */
  async delete(data: any) {
    const response = await this.client.POST("/security.delete", {
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
   * security-update
   * @param data
   */
  async update(data: any) {
    const response = await this.client.POST("/security.update", {
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
