import createClient from 'openapi-fetch';
import type { paths } from '../types/dokploy';
import { DokployError } from '../error';

/**
 * MariaDB API resource
 * Handles all mariadb-related operations
 */
export class MariaDB {
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
   * mariadb-create
   * @param data
   */
  async create(data: any) {
    const response = await this.client.POST("/mariadb.create", {
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
   * mariadb-one
   * @param query?
   */
  async one(query?: any) {
    const response = await this.client.GET("/mariadb.one", {
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
   * mariadb-start
   * @param data
   */
  async start(data: any) {
    const response = await this.client.POST("/mariadb.start", {
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
   * mariadb-stop
   * @param data
   */
  async stop(data: any) {
    const response = await this.client.POST("/mariadb.stop", {
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
   * mariadb-saveExternalPort
   * @param data
   */
  async saveExternalPort(data: any) {
    const response = await this.client.POST("/mariadb.saveExternalPort", {
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
   * mariadb-deploy
   * @param data
   */
  async deploy(data: any) {
    const response = await this.client.POST("/mariadb.deploy", {
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
   * mariadb-changeStatus
   * @param data
   */
  async changeStatus(data: any) {
    const response = await this.client.POST("/mariadb.changeStatus", {
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
   * mariadb-remove
   * @param data
   */
  async remove(data: any) {
    const response = await this.client.POST("/mariadb.remove", {
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
   * mariadb-saveEnvironment
   * @param data
   */
  async saveEnvironment(data: any) {
    const response = await this.client.POST("/mariadb.saveEnvironment", {
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
   * mariadb-reload
   * @param data
   */
  async reload(data: any) {
    const response = await this.client.POST("/mariadb.reload", {
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
   * mariadb-update
   * @param data
   */
  async update(data: any) {
    const response = await this.client.POST("/mariadb.update", {
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
   * mariadb-move
   * @param data
   */
  async move(data: any) {
    const response = await this.client.POST("/mariadb.move", {
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
   * mariadb-rebuild
   * @param data
   */
  async rebuild(data: any) {
    const response = await this.client.POST("/mariadb.rebuild", {
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
