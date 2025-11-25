import createClient from 'openapi-fetch';
import { DokployError } from '../error';
/**
 * Security API resource
 * Handles all security-related operations
 */
export class Security {
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
     * security-create
     * @param data
     */
    async create(data) {
        const response = await this.client.POST("/security.create", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * security-one
     * @param query?
     */
    async one(query) {
        const response = await this.client.GET("/security.one", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * security-delete
     * @param data
     */
    async delete(data) {
        const response = await this.client.POST("/security.delete", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * security-update
     * @param data
     */
    async update(data) {
        const response = await this.client.POST("/security.update", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
}
//# sourceMappingURL=Security.js.map