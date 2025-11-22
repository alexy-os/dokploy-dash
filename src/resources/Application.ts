import createClient from 'openapi-fetch';
import type { paths } from '../types/dokploy';
import { DokployError } from '../error';

/**
 * Application API resource
 * Handles all application-related operations
 */
export class Application {
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
   * application-create
   * @param data
   */
  async create(data: any) {
    const response = await this.client.POST("/application.create", {
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
   * application-one
   * @param query?
   */
  async one(query?: any) {
    const response = await this.client.GET("/application.one", {
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
   * application-reload
   * @param data
   */
  async reload(data: any) {
    const response = await this.client.POST("/application.reload", {
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
   * application-delete
   * @param data
   */
  async delete(data: any) {
    const response = await this.client.POST("/application.delete", {
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
   * application-stop
   * @param data
   */
  async stop(data: any) {
    const response = await this.client.POST("/application.stop", {
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
   * application-start
   * @param data
   */
  async start(data: any) {
    const response = await this.client.POST("/application.start", {
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
   * application-redeploy
   * @param data
   */
  async redeploy(data: any) {
    const response = await this.client.POST("/application.redeploy", {
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
   * application-saveEnvironment
   * @param data
   */
  async saveEnvironment(data: any) {
    const response = await this.client.POST("/application.saveEnvironment", {
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
   * application-saveBuildType
   * @param data
   */
  async saveBuildType(data: any) {
    const response = await this.client.POST("/application.saveBuildType", {
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
   * application-saveGithubProvider
   * @param data
   */
  async saveGithubProvider(data: any) {
    const response = await this.client.POST("/application.saveGithubProvider", {
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
   * application-saveGitlabProvider
   * @param data
   */
  async saveGitlabProvider(data: any) {
    const response = await this.client.POST("/application.saveGitlabProvider", {
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
   * application-saveBitbucketProvider
   * @param data
   */
  async saveBitbucketProvider(data: any) {
    const response = await this.client.POST("/application.saveBitbucketProvider", {
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
   * application-saveGiteaProvider
   * @param data
   */
  async saveGiteaProvider(data: any) {
    const response = await this.client.POST("/application.saveGiteaProvider", {
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
   * application-saveDockerProvider
   * @param data
   */
  async saveDockerProvider(data: any) {
    const response = await this.client.POST("/application.saveDockerProvider", {
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
   * application-saveGitProvider
   * @param data
   */
  async saveGitProvider(data: any) {
    const response = await this.client.POST("/application.saveGitProvider", {
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
   * application-disconnectGitProvider
   * @param data
   */
  async disconnectGitProvider(data: any) {
    const response = await this.client.POST("/application.disconnectGitProvider", {
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
   * application-markRunning
   * @param data
   */
  async markRunning(data: any) {
    const response = await this.client.POST("/application.markRunning", {
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
   * application-update
   * @param data
   */
  async update(data: any) {
    const response = await this.client.POST("/application.update", {
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
   * application-refreshToken
   * @param data
   */
  async refreshToken(data: any) {
    const response = await this.client.POST("/application.refreshToken", {
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
   * application-deploy
   * @param data
   */
  async deploy(data: any) {
    const response = await this.client.POST("/application.deploy", {
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
   * application-cleanQueues
   * @param data
   */
  async cleanQueues(data: any) {
    const response = await this.client.POST("/application.cleanQueues", {
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
   * application-killBuild
   * @param data
   */
  async killBuild(data: any) {
    const response = await this.client.POST("/application.killBuild", {
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
   * application-readTraefikConfig
   * @param query?
   */
  async readTraefikConfig(query?: any) {
    const response = await this.client.GET("/application.readTraefikConfig", {
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
   * application-updateTraefikConfig
   * @param data
   */
  async updateTraefikConfig(data: any) {
    const response = await this.client.POST("/application.updateTraefikConfig", {
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
   * application-readAppMonitoring
   * @param query?
   */
  async readAppMonitoring(query?: any) {
    const response = await this.client.GET("/application.readAppMonitoring", {
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
   * application-move
   * @param data
   */
  async move(data: any) {
    const response = await this.client.POST("/application.move", {
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
   * application-cancelDeployment
   * @param data
   */
  async cancelDeployment(data: any) {
    const response = await this.client.POST("/application.cancelDeployment", {
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
