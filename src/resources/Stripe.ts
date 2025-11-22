import createClient from 'openapi-fetch';
import type { paths } from '../types/dokploy';
import { DokployError } from '../error';

/**
 * Stripe API resource
 * Handles all stripe-related operations
 */
export class Stripe {
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
   * stripe-getProducts
   * @param void
   */
  async getProducts() {
    const response = await this.client.GET("/stripe.getProducts");
    
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
   * stripe-createCheckoutSession
   * @param data
   */
  async createCheckoutSession(data: any) {
    const response = await this.client.POST("/stripe.createCheckoutSession", {
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
   * stripe-createCustomerPortalSession
   * @param void
   */
  async createCustomerPortalSession() {
    const response = await this.client.POST("/stripe.createCustomerPortalSession");
    
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
   * stripe-canCreateMoreServers
   * @param void
   */
  async canCreateMoreServers() {
    const response = await this.client.GET("/stripe.canCreateMoreServers");
    
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
