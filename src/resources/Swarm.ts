import createClient from 'openapi-fetch';
import type { paths } from '../types/dokploy';
import { DokployError } from '../error';

/**
 * Swarm API resource
 * Handles all swarm-related operations
 */
export class Swarm {
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
   * swarm-getNodes
   * @param query?
   */
  async getNodes(query?: any) {
    const response = await this.client.GET("/swarm.getNodes", {
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
   * swarm-getNodeInfo
   * @param query?
   */
  async getNodeInfo(query?: any) {
    const response = await this.client.GET("/swarm.getNodeInfo", {
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
   * swarm-getNodeApps
   * @param query?
   */
  async getNodeApps(query?: any) {
    const response = await this.client.GET("/swarm.getNodeApps", {
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
