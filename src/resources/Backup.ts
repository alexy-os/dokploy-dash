import createClient from 'openapi-fetch';
import type { paths } from '../types/dokploy';
import { DokployError } from '../error';

/**
 * Backup API resource
 * Handles all backup-related operations
 */
export class Backup {
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
   * backup-create
   * @param data
   */
  async create(data: any) {
    const response = await this.client.POST("/backup.create", {
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
   * backup-one
   * @param query?
   */
  async one(query?: any) {
    const response = await this.client.GET("/backup.one", {
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
   * backup-update
   * @param data
   */
  async update(data: any) {
    const response = await this.client.POST("/backup.update", {
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
   * backup-remove
   * @param data
   */
  async remove(data: any) {
    const response = await this.client.POST("/backup.remove", {
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
   * backup-manualBackupPostgres
   * @param data
   */
  async manualBackupPostgres(data: any) {
    const response = await this.client.POST("/backup.manualBackupPostgres", {
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
   * backup-manualBackupMySql
   * @param data
   */
  async manualBackupMySql(data: any) {
    const response = await this.client.POST("/backup.manualBackupMySql", {
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
   * backup-manualBackupMariadb
   * @param data
   */
  async manualBackupMariadb(data: any) {
    const response = await this.client.POST("/backup.manualBackupMariadb", {
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
   * backup-manualBackupCompose
   * @param data
   */
  async manualBackupCompose(data: any) {
    const response = await this.client.POST("/backup.manualBackupCompose", {
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
   * backup-manualBackupMongo
   * @param data
   */
  async manualBackupMongo(data: any) {
    const response = await this.client.POST("/backup.manualBackupMongo", {
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
   * backup-manualBackupWebServer
   * @param data
   */
  async manualBackupWebServer(data: any) {
    const response = await this.client.POST("/backup.manualBackupWebServer", {
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
   * backup-listBackupFiles
   * @param query?
   */
  async listBackupFiles(query?: any) {
    const response = await this.client.GET("/backup.listBackupFiles", {
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
