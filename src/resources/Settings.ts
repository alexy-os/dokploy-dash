import createClient from 'openapi-fetch';
import type { paths } from '../types/dokploy';
import { DokployError } from '../error';

/**
 * Settings API resource
 * Handles all settings-related operations
 */
export class Settings {
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
   * settings-reloadServer
   * @param void
   */
  async reloadServer() {
    const response = await this.client.POST("/settings.reloadServer");
    
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
   * settings-cleanRedis
   * @param void
   */
  async cleanRedis() {
    const response = await this.client.POST("/settings.cleanRedis");
    
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
   * settings-reloadRedis
   * @param void
   */
  async reloadRedis() {
    const response = await this.client.POST("/settings.reloadRedis");
    
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
   * settings-reloadTraefik
   * @param data
   */
  async reloadTraefik(data: any) {
    const response = await this.client.POST("/settings.reloadTraefik", {
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
   * settings-toggleDashboard
   * @param data
   */
  async toggleDashboard(data: any) {
    const response = await this.client.POST("/settings.toggleDashboard", {
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
   * settings-cleanUnusedImages
   * @param data
   */
  async cleanUnusedImages(data: any) {
    const response = await this.client.POST("/settings.cleanUnusedImages", {
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
   * settings-cleanUnusedVolumes
   * @param data
   */
  async cleanUnusedVolumes(data: any) {
    const response = await this.client.POST("/settings.cleanUnusedVolumes", {
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
   * settings-cleanStoppedContainers
   * @param data
   */
  async cleanStoppedContainers(data: any) {
    const response = await this.client.POST("/settings.cleanStoppedContainers", {
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
   * settings-cleanDockerBuilder
   * @param data
   */
  async cleanDockerBuilder(data: any) {
    const response = await this.client.POST("/settings.cleanDockerBuilder", {
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
   * settings-cleanDockerPrune
   * @param data
   */
  async cleanDockerPrune(data: any) {
    const response = await this.client.POST("/settings.cleanDockerPrune", {
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
   * settings-cleanAll
   * @param data
   */
  async cleanAll(data: any) {
    const response = await this.client.POST("/settings.cleanAll", {
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
   * settings-cleanMonitoring
   * @param void
   */
  async cleanMonitoring() {
    const response = await this.client.POST("/settings.cleanMonitoring");
    
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
   * settings-saveSSHPrivateKey
   * @param data
   */
  async saveSSHPrivateKey(data: any) {
    const response = await this.client.POST("/settings.saveSSHPrivateKey", {
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
   * settings-assignDomainServer
   * @param data
   */
  async assignDomainServer(data: any) {
    const response = await this.client.POST("/settings.assignDomainServer", {
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
   * settings-cleanSSHPrivateKey
   * @param void
   */
  async cleanSSHPrivateKey() {
    const response = await this.client.POST("/settings.cleanSSHPrivateKey");
    
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
   * settings-updateDockerCleanup
   * @param data
   */
  async updateDockerCleanup(data: any) {
    const response = await this.client.POST("/settings.updateDockerCleanup", {
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
   * settings-readTraefikConfig
   * @param void
   */
  async readTraefikConfig() {
    const response = await this.client.GET("/settings.readTraefikConfig");
    
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
   * settings-updateTraefikConfig
   * @param data
   */
  async updateTraefikConfig(data: any) {
    const response = await this.client.POST("/settings.updateTraefikConfig", {
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
   * settings-readWebServerTraefikConfig
   * @param void
   */
  async readWebServerTraefikConfig() {
    const response = await this.client.GET("/settings.readWebServerTraefikConfig");
    
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
   * settings-updateWebServerTraefikConfig
   * @param data
   */
  async updateWebServerTraefikConfig(data: any) {
    const response = await this.client.POST("/settings.updateWebServerTraefikConfig", {
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
   * settings-readMiddlewareTraefikConfig
   * @param void
   */
  async readMiddlewareTraefikConfig() {
    const response = await this.client.GET("/settings.readMiddlewareTraefikConfig");
    
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
   * settings-updateMiddlewareTraefikConfig
   * @param data
   */
  async updateMiddlewareTraefikConfig(data: any) {
    const response = await this.client.POST("/settings.updateMiddlewareTraefikConfig", {
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
   * settings-getUpdateData
   * @param void
   */
  async getUpdateData() {
    const response = await this.client.POST("/settings.getUpdateData");
    
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
   * settings-updateServer
   * @param void
   */
  async updateServer() {
    const response = await this.client.POST("/settings.updateServer");
    
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
   * settings-getDokployVersion
   * @param void
   */
  async getDokployVersion() {
    const response = await this.client.GET("/settings.getDokployVersion");
    
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
   * settings-getReleaseTag
   * @param void
   */
  async getReleaseTag() {
    const response = await this.client.GET("/settings.getReleaseTag");
    
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
   * settings-readDirectories
   * @param query?
   */
  async readDirectories(query?: any) {
    const response = await this.client.GET("/settings.readDirectories", {
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
   * settings-updateTraefikFile
   * @param data
   */
  async updateTraefikFile(data: any) {
    const response = await this.client.POST("/settings.updateTraefikFile", {
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
   * settings-readTraefikFile
   * @param query?
   */
  async readTraefikFile(query?: any) {
    const response = await this.client.GET("/settings.readTraefikFile", {
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
   * settings-getIp
   * @param void
   */
  async getIp() {
    const response = await this.client.GET("/settings.getIp");
    
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
   * settings-getOpenApiDocument
   * @param void
   */
  async getOpenApiDocument() {
    const response = await this.client.GET("/settings.getOpenApiDocument");
    
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
   * settings-readTraefikEnv
   * @param query?
   */
  async readTraefikEnv(query?: any) {
    const response = await this.client.GET("/settings.readTraefikEnv", {
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
   * settings-writeTraefikEnv
   * @param data
   */
  async writeTraefikEnv(data: any) {
    const response = await this.client.POST("/settings.writeTraefikEnv", {
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
   * settings-haveTraefikDashboardPortEnabled
   * @param query?
   */
  async haveTraefikDashboardPortEnabled(query?: any) {
    const response = await this.client.GET("/settings.haveTraefikDashboardPortEnabled", {
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
   * settings-haveActivateRequests
   * @param void
   */
  async haveActivateRequests() {
    const response = await this.client.GET("/settings.haveActivateRequests");
    
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
   * settings-toggleRequests
   * @param data
   */
  async toggleRequests(data: any) {
    const response = await this.client.POST("/settings.toggleRequests", {
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
   * settings-isCloud
   * @param void
   */
  async isCloud() {
    const response = await this.client.GET("/settings.isCloud");
    
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
   * settings-isUserSubscribed
   * @param void
   */
  async isUserSubscribed() {
    const response = await this.client.GET("/settings.isUserSubscribed");
    
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
   * settings-health
   * @param void
   */
  async health() {
    const response = await this.client.GET("/settings.health");
    
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
   * settings-setupGPU
   * @param data
   */
  async setupGPU(data: any) {
    const response = await this.client.POST("/settings.setupGPU", {
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
   * settings-checkGPUStatus
   * @param query?
   */
  async checkGPUStatus(query?: any) {
    const response = await this.client.GET("/settings.checkGPUStatus", {
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
   * settings-updateTraefikPorts
   * @param data
   */
  async updateTraefikPorts(data: any) {
    const response = await this.client.POST("/settings.updateTraefikPorts", {
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
   * settings-getTraefikPorts
   * @param query?
   */
  async getTraefikPorts(query?: any) {
    const response = await this.client.GET("/settings.getTraefikPorts", {
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
   * settings-updateLogCleanup
   * @param data
   */
  async updateLogCleanup(data: any) {
    const response = await this.client.POST("/settings.updateLogCleanup", {
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
   * settings-getLogCleanupStatus
   * @param void
   */
  async getLogCleanupStatus() {
    const response = await this.client.GET("/settings.getLogCleanupStatus");
    
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
   * settings-getDokployCloudIps
   * @param void
   */
  async getDokployCloudIps() {
    const response = await this.client.GET("/settings.getDokployCloudIps");
    
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
