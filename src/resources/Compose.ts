import createClient from 'openapi-fetch';
import type { paths } from '../types/dokploy';
import { DokployError } from '../error';

/**
 * Compose API resource
 * Handles all compose-related operations
 */
export class Compose {
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
   * compose-create
   * @param data
   */
  async create(data: any) {
    const response = await this.client.POST("/compose.create", {
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
   * compose-one
   * @param query?
   */
  async one(query?: any) {
    const response = await this.client.GET("/compose.one", {
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
   * compose-update
   * @param data
   */
  async update(data: any) {
    const response = await this.client.POST("/compose.update", {
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
   * compose-delete
   * @param data
   */
  async delete(data: any) {
    const response = await this.client.POST("/compose.delete", {
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
   * compose-cleanQueues
   * @param data
   */
  async cleanQueues(data: any) {
    const response = await this.client.POST("/compose.cleanQueues", {
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
   * compose-killBuild
   * @param data
   */
  async killBuild(data: any) {
    const response = await this.client.POST("/compose.killBuild", {
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
   * compose-loadServices
   * @param query?
   */
  async loadServices(query?: any) {
    const response = await this.client.GET("/compose.loadServices", {
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
   * compose-loadMountsByService
   * @param query?
   */
  async loadMountsByService(query?: any) {
    const response = await this.client.GET("/compose.loadMountsByService", {
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
   * compose-fetchSourceType
   * @param data
   */
  async fetchSourceType(data: any) {
    const response = await this.client.POST("/compose.fetchSourceType", {
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
   * compose-randomizeCompose
   * @param data
   */
  async randomizeCompose(data: any) {
    const response = await this.client.POST("/compose.randomizeCompose", {
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
   * compose-isolatedDeployment
   * @param data
   */
  async isolatedDeployment(data: any) {
    const response = await this.client.POST("/compose.isolatedDeployment", {
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
   * compose-getConvertedCompose
   * @param query?
   */
  async getConvertedCompose(query?: any) {
    const response = await this.client.GET("/compose.getConvertedCompose", {
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
   * compose-deploy
   * @param data
   */
  async deploy(data: any) {
    const response = await this.client.POST("/compose.deploy", {
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
   * compose-redeploy
   * @param data
   */
  async redeploy(data: any) {
    const response = await this.client.POST("/compose.redeploy", {
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
   * compose-stop
   * @param data
   */
  async stop(data: any) {
    const response = await this.client.POST("/compose.stop", {
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
   * compose-start
   * @param data
   */
  async start(data: any) {
    const response = await this.client.POST("/compose.start", {
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
   * compose-getDefaultCommand
   * @param query?
   */
  async getDefaultCommand(query?: any) {
    const response = await this.client.GET("/compose.getDefaultCommand", {
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
   * compose-refreshToken
   * @param data
   */
  async refreshToken(data: any) {
    const response = await this.client.POST("/compose.refreshToken", {
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
   * compose-deployTemplate
   * @param data
   */
  async deployTemplate(data: any) {
    const response = await this.client.POST("/compose.deployTemplate", {
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
   * compose-templates
   * @param query?
   */
  async templates(query?: any) {
    const response = await this.client.GET("/compose.templates", {
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
   * compose-getTags
   * @param query?
   */
  async getTags(query?: any) {
    const response = await this.client.GET("/compose.getTags", {
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
   * compose-disconnectGitProvider
   * @param data
   */
  async disconnectGitProvider(data: any) {
    const response = await this.client.POST("/compose.disconnectGitProvider", {
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
   * compose-move
   * @param data
   */
  async move(data: any) {
    const response = await this.client.POST("/compose.move", {
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
   * compose-processTemplate
   * @param data
   */
  async processTemplate(data: any) {
    const response = await this.client.POST("/compose.processTemplate", {
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
   * compose-import
   * @param data
   */
  async import(data: any) {
    const response = await this.client.POST("/compose.import", {
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
   * compose-cancelDeployment
   * @param data
   */
  async cancelDeployment(data: any) {
    const response = await this.client.POST("/compose.cancelDeployment", {
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
