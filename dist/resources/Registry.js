import createClient from 'openapi-fetch';
import { DokployError } from '../error';
/**
 * Registry API resource
 * Handles all registry-related operations
 */
export class Registry {
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
     * registry-create
     * @param data
     */
    async create(data) {
        const response = await this.client.POST("/registry.create", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * registry-remove
     * @param data
     */
    async remove(data) {
        const response = await this.client.POST("/registry.remove", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * registry-update
     * @param data
     */
    async update(data) {
        const response = await this.client.POST("/registry.update", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * registry-all
     * @param void
     */
    async all() {
        const response = await this.client.GET("/registry.all");
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * registry-one
     * @param query?
     */
    async one(query) {
        const response = await this.client.GET("/registry.one", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * registry-testRegistry
     * @param data
     */
    async testRegistry(data) {
        const response = await this.client.POST("/registry.testRegistry", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
}
//# sourceMappingURL=Registry.js.map