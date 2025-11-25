import createClient from 'openapi-fetch';
import { DokployError } from '../error';
/**
 * Domain API resource
 * Handles all domain-related operations
 */
export class Domain {
    client;
    constructor(baseUrl, apiToken) {
        this.client = createClient({
            baseUrl,
            headers: {
                Authorization: `Bearer ${apiToken}`
            }
        });
    }
    /**
     * domain-create
     * @param data
     */
    async create(data) {
        const response = await this.client.POST("/domain.create", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * domain-byApplicationId
     * @param query?
     */
    async byApplicationId(query) {
        const response = await this.client.GET("/domain.byApplicationId", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * domain-byComposeId
     * @param query?
     */
    async byComposeId(query) {
        const response = await this.client.GET("/domain.byComposeId", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * domain-generateDomain
     * @param data
     */
    async generateDomain(data) {
        const response = await this.client.POST("/domain.generateDomain", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * domain-canGenerateTraefikMeDomains
     * @param query?
     */
    async canGenerateTraefikMeDomains(query) {
        const response = await this.client.GET("/domain.canGenerateTraefikMeDomains", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * domain-update
     * @param data
     */
    async update(data) {
        const response = await this.client.POST("/domain.update", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * domain-one
     * @param query?
     */
    async one(query) {
        const response = await this.client.GET("/domain.one", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * domain-delete
     * @param data
     */
    async delete(data) {
        const response = await this.client.POST("/domain.delete", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * domain-validateDomain
     * @param data
     */
    async validateDomain(data) {
        const response = await this.client.POST("/domain.validateDomain", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
}
//# sourceMappingURL=Domain.js.map