import createClient from 'openapi-fetch';
import type { paths } from '../types/dokploy';
import { DokployError } from '../error';

/**
 * Destination API resource
 * Handles all destination-related operations
 */
export class Destination {
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
   * destination-create
   * @param data
   */
  async create(data: any) {
    const response = await this.client.POST("/destination.create", {
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
   * destination-testConnection
   * @param data
   */
  async testConnection(data: any) {
    const response = await this.client.POST("/destination.testConnection", {
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
   * destination-one
   * @param query?
   */
  async one(query?: any) {
    const response = await this.client.GET("/destination.one", {
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
   * destination-all
   * @param void
   */
  async all() {
    const response = await this.client.GET("/destination.all");
    
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
   * destination-remove
   * @param data
   */
  async remove(data: any) {
    const response = await this.client.POST("/destination.remove", {
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
   * destination-update
   * @param data
   */
  async update(data: any) {
    const response = await this.client.POST("/destination.update", {
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
