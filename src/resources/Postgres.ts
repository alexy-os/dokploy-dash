import createClient from 'openapi-fetch';
import type { paths } from '../types/dokploy';
import { DokployError } from '../error';

/**
 * Postgres API resource
 * Handles all postgres-related operations
 */
export class Postgres {
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
   * postgres-create
   * @param data
   */
  async create(data: any) {
    const response = await this.client.POST("/postgres.create", {
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
   * postgres-one
   * @param query?
   */
  async one(query?: any) {
    const response = await this.client.GET("/postgres.one", {
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
   * postgres-start
   * @param data
   */
  async start(data: any) {
    const response = await this.client.POST("/postgres.start", {
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
   * postgres-stop
   * @param data
   */
  async stop(data: any) {
    const response = await this.client.POST("/postgres.stop", {
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
   * postgres-saveExternalPort
   * @param data
   */
  async saveExternalPort(data: any) {
    const response = await this.client.POST("/postgres.saveExternalPort", {
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
   * postgres-deploy
   * @param data
   */
  async deploy(data: any) {
    const response = await this.client.POST("/postgres.deploy", {
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
   * postgres-changeStatus
   * @param data
   */
  async changeStatus(data: any) {
    const response = await this.client.POST("/postgres.changeStatus", {
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
   * postgres-remove
   * @param data
   */
  async remove(data: any) {
    const response = await this.client.POST("/postgres.remove", {
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
   * postgres-saveEnvironment
   * @param data
   */
  async saveEnvironment(data: any) {
    const response = await this.client.POST("/postgres.saveEnvironment", {
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
   * postgres-reload
   * @param data
   */
  async reload(data: any) {
    const response = await this.client.POST("/postgres.reload", {
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
   * postgres-update
   * @param data
   */
  async update(data: any) {
    const response = await this.client.POST("/postgres.update", {
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
   * postgres-move
   * @param data
   */
  async move(data: any) {
    const response = await this.client.POST("/postgres.move", {
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
   * postgres-rebuild
   * @param data
   */
  async rebuild(data: any) {
    const response = await this.client.POST("/postgres.rebuild", {
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
