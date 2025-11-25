import createClient from 'openapi-fetch';
import { DokployError } from '../error';
/**
 * Redirects API resource
 * Handles all redirects-related operations
 */
export class Redirects {
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
     * redirects-create
     * @param data
     */
    async create(data) {
        const response = await this.client.POST("/redirects.create", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * redirects-one
     * @param query?
     */
    async one(query) {
        const response = await this.client.GET("/redirects.one", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * redirects-delete
     * @param data
     */
    async delete(data) {
        const response = await this.client.POST("/redirects.delete", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * redirects-update
     * @param data
     */
    async update(data) {
        const response = await this.client.POST("/redirects.update", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
}
//# sourceMappingURL=Redirects.js.map