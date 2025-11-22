import createClient from 'openapi-fetch';
import type { paths } from '../types/dokploy';
import { DokployError } from '../error';

/**
 * Gitlab API resource
 * Handles all gitlab-related operations
 */
export class Gitlab {
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
   * gitlab-create
   * @param data
   */
  async create(data: any) {
    const response = await this.client.POST("/gitlab.create", {
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
   * gitlab-one
   * @param query?
   */
  async one(query?: any) {
    const response = await this.client.GET("/gitlab.one", {
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
   * gitlab-gitlabProviders
   * @param void
   */
  async gitlabProviders() {
    const response = await this.client.GET("/gitlab.gitlabProviders");
    
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
   * gitlab-getGitlabRepositories
   * @param query?
   */
  async getGitlabRepositories(query?: any) {
    const response = await this.client.GET("/gitlab.getGitlabRepositories", {
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
   * gitlab-getGitlabBranches
   * @param query?
   */
  async getGitlabBranches(query?: any) {
    const response = await this.client.GET("/gitlab.getGitlabBranches", {
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
   * gitlab-testConnection
   * @param data
   */
  async testConnection(data: any) {
    const response = await this.client.POST("/gitlab.testConnection", {
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
   * gitlab-update
   * @param data
   */
  async update(data: any) {
    const response = await this.client.POST("/gitlab.update", {
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
