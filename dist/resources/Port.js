import createClient from 'openapi-fetch';
import { DokployError } from '../error';
/**
 * Port API resource
 * Handles all port-related operations
 */
export class Port {
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
     * port-create
     * @param data
     */
    async create(data) {
        const response = await this.client.POST("/port.create", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * port-one
     * @param query?
     */
    async one(query) {
        const response = await this.client.GET("/port.one", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * port-delete
     * @param data
     */
    async delete(data) {
        const response = await this.client.POST("/port.delete", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * port-update
     * @param data
     */
    async update(data) {
        const response = await this.client.POST("/port.update", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
}
//# sourceMappingURL=Port.js.map