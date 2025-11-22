import createClient from 'openapi-fetch';
import type { paths } from '../types/dokploy';
import { DokployError } from '../error';

/**
 * Notification API resource
 * Handles all notification-related operations
 */
export class Notification {
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
   * notification-createSlack
   * @param data
   */
  async createSlack(data: any) {
    const response = await this.client.POST("/notification.createSlack", {
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
   * notification-updateSlack
   * @param data
   */
  async updateSlack(data: any) {
    const response = await this.client.POST("/notification.updateSlack", {
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
   * notification-testSlackConnection
   * @param data
   */
  async testSlackConnection(data: any) {
    const response = await this.client.POST("/notification.testSlackConnection", {
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
   * notification-createTelegram
   * @param data
   */
  async createTelegram(data: any) {
    const response = await this.client.POST("/notification.createTelegram", {
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
   * notification-updateTelegram
   * @param data
   */
  async updateTelegram(data: any) {
    const response = await this.client.POST("/notification.updateTelegram", {
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
   * notification-testTelegramConnection
   * @param data
   */
  async testTelegramConnection(data: any) {
    const response = await this.client.POST("/notification.testTelegramConnection", {
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
   * notification-createDiscord
   * @param data
   */
  async createDiscord(data: any) {
    const response = await this.client.POST("/notification.createDiscord", {
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
   * notification-updateDiscord
   * @param data
   */
  async updateDiscord(data: any) {
    const response = await this.client.POST("/notification.updateDiscord", {
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
   * notification-testDiscordConnection
   * @param data
   */
  async testDiscordConnection(data: any) {
    const response = await this.client.POST("/notification.testDiscordConnection", {
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
   * notification-createEmail
   * @param data
   */
  async createEmail(data: any) {
    const response = await this.client.POST("/notification.createEmail", {
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
   * notification-updateEmail
   * @param data
   */
  async updateEmail(data: any) {
    const response = await this.client.POST("/notification.updateEmail", {
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
   * notification-testEmailConnection
   * @param data
   */
  async testEmailConnection(data: any) {
    const response = await this.client.POST("/notification.testEmailConnection", {
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
   * notification-remove
   * @param data
   */
  async remove(data: any) {
    const response = await this.client.POST("/notification.remove", {
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
   * notification-one
   * @param query?
   */
  async one(query?: any) {
    const response = await this.client.GET("/notification.one", {
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
   * notification-all
   * @param void
   */
  async all() {
    const response = await this.client.GET("/notification.all");
    
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
   * notification-receiveNotification
   * @param data
   */
  async receiveNotification(data: any) {
    const response = await this.client.POST("/notification.receiveNotification", {
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
   * notification-createGotify
   * @param data
   */
  async createGotify(data: any) {
    const response = await this.client.POST("/notification.createGotify", {
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
   * notification-updateGotify
   * @param data
   */
  async updateGotify(data: any) {
    const response = await this.client.POST("/notification.updateGotify", {
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
   * notification-testGotifyConnection
   * @param data
   */
  async testGotifyConnection(data: any) {
    const response = await this.client.POST("/notification.testGotifyConnection", {
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
   * notification-createNtfy
   * @param data
   */
  async createNtfy(data: any) {
    const response = await this.client.POST("/notification.createNtfy", {
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
   * notification-updateNtfy
   * @param data
   */
  async updateNtfy(data: any) {
    const response = await this.client.POST("/notification.updateNtfy", {
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
   * notification-testNtfyConnection
   * @param data
   */
  async testNtfyConnection(data: any) {
    const response = await this.client.POST("/notification.testNtfyConnection", {
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
   * notification-createLark
   * @param data
   */
  async createLark(data: any) {
    const response = await this.client.POST("/notification.createLark", {
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
   * notification-updateLark
   * @param data
   */
  async updateLark(data: any) {
    const response = await this.client.POST("/notification.updateLark", {
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
   * notification-testLarkConnection
   * @param data
   */
  async testLarkConnection(data: any) {
    const response = await this.client.POST("/notification.testLarkConnection", {
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
   * notification-getEmailProviders
   * @param void
   */
  async getEmailProviders() {
    const response = await this.client.GET("/notification.getEmailProviders");
    
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
