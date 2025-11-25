import createClient from 'openapi-fetch';
import { DokployError } from '../error';
/**
 * Destination API resource
 * Handles all destination-related operations
 */
export class Destination {
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
     * destination-create
     * @param data
     */
    async create(data) {
        const response = await this.client.POST("/destination.create", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * destination-testConnection
     * @param data
     */
    async testConnection(data) {
        const response = await this.client.POST("/destination.testConnection", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * destination-one
     * @param query?
     */
    async one(query) {
        const response = await this.client.GET("/destination.one", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * destination-all
     * @param void
     */
    async all() {
        const response = await this.client.GET("/destination.all");
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * destination-remove
     * @param data
     */
    async remove(data) {
        const response = await this.client.POST("/destination.remove", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * destination-update
     * @param data
     */
    async update(data) {
        const response = await this.client.POST("/destination.update", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
}
//# sourceMappingURL=Destination.js.map