import createClient from 'openapi-fetch';
import type { paths } from '../types/dokploy';
import { DokployError } from '../error';

/**
 * MySQL API resource
 * Handles all mysql-related operations
 */
export class MySQL {
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
   * mysql-create
   * @param data
   */
  async create(data: any) {
    const response = await this.client.POST("/mysql.create", {
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
   * mysql-one
   * @param query?
   */
  async one(query?: any) {
    const response = await this.client.GET("/mysql.one", {
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
   * mysql-start
   * @param data
   */
  async start(data: any) {
    const response = await this.client.POST("/mysql.start", {
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
   * mysql-stop
   * @param data
   */
  async stop(data: any) {
    const response = await this.client.POST("/mysql.stop", {
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
   * mysql-saveExternalPort
   * @param data
   */
  async saveExternalPort(data: any) {
    const response = await this.client.POST("/mysql.saveExternalPort", {
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
   * mysql-deploy
   * @param data
   */
  async deploy(data: any) {
    const response = await this.client.POST("/mysql.deploy", {
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
   * mysql-changeStatus
   * @param data
   */
  async changeStatus(data: any) {
    const response = await this.client.POST("/mysql.changeStatus", {
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
   * mysql-reload
   * @param data
   */
  async reload(data: any) {
    const response = await this.client.POST("/mysql.reload", {
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
   * mysql-remove
   * @param data
   */
  async remove(data: any) {
    const response = await this.client.POST("/mysql.remove", {
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
   * mysql-saveEnvironment
   * @param data
   */
  async saveEnvironment(data: any) {
    const response = await this.client.POST("/mysql.saveEnvironment", {
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
   * mysql-update
   * @param data
   */
  async update(data: any) {
    const response = await this.client.POST("/mysql.update", {
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
   * mysql-move
   * @param data
   */
  async move(data: any) {
    const response = await this.client.POST("/mysql.move", {
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
   * mysql-rebuild
   * @param data
   */
  async rebuild(data: any) {
    const response = await this.client.POST("/mysql.rebuild", {
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
