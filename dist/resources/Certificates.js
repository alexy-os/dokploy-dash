import createClient from 'openapi-fetch';
import { DokployError } from '../error';
/**
 * Certificates API resource
 * Handles all certificates-related operations
 */
export class Certificates {
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
     * certificates-create
     * @param data
     */
    async create(data) {
        const response = await this.client.POST("/certificates.create", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * certificates-one
     * @param query?
     */
    async one(query) {
        const response = await this.client.GET("/certificates.one", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * certificates-remove
     * @param data
     */
    async remove(data) {
        const response = await this.client.POST("/certificates.remove", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * certificates-all
     * @param void
     */
    async all() {
        const response = await this.client.GET("/certificates.all");
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
}
//# sourceMappingURL=Certificates.js.map