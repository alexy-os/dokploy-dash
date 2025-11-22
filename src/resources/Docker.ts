import createClient from 'openapi-fetch';
import type { paths } from '../types/dokploy';
import { DokployError } from '../error';

/**
 * Docker API resource
 * Handles all docker-related operations
 */
export class Docker {
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
   * docker-getContainers
   * @param query?
   */
  async getContainers(query?: any) {
    const response = await this.client.GET("/docker.getContainers", {
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
   * docker-restartContainer
   * @param data
   */
  async restartContainer(data: any) {
    const response = await this.client.POST("/docker.restartContainer", {
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
   * docker-getConfig
   * @param query?
   */
  async getConfig(query?: any) {
    const response = await this.client.GET("/docker.getConfig", {
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
   * docker-getContainersByAppNameMatch
   * @param query?
   */
  async getContainersByAppNameMatch(query?: any) {
    const response = await this.client.GET("/docker.getContainersByAppNameMatch", {
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
   * docker-getContainersByAppLabel
   * @param query?
   */
  async getContainersByAppLabel(query?: any) {
    const response = await this.client.GET("/docker.getContainersByAppLabel", {
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
   * docker-getStackContainersByAppName
   * @param query?
   */
  async getStackContainersByAppName(query?: any) {
    const response = await this.client.GET("/docker.getStackContainersByAppName", {
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
   * docker-getServiceContainersByAppName
   * @param query?
   */
  async getServiceContainersByAppName(query?: any) {
    const response = await this.client.GET("/docker.getServiceContainersByAppName", {
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
