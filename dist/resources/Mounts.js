import createClient from 'openapi-fetch';
import { DokployError } from '../error';
/**
 * Mounts API resource
 * Handles all mounts-related operations
 */
export class Mounts {
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
     * mounts-create
     * @param data
     */
    async create(data) {
        const response = await this.client.POST("/mounts.create", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * mounts-remove
     * @param data
     */
    async remove(data) {
        const response = await this.client.POST("/mounts.remove", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * mounts-one
     * @param query?
     */
    async one(query) {
        const response = await this.client.GET("/mounts.one", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * mounts-update
     * @param data
     */
    async update(data) {
        const response = await this.client.POST("/mounts.update", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * mounts-allNamedByApplicationId
     * @param query?
     */
    async allNamedByApplicationId(query) {
        const response = await this.client.GET("/mounts.allNamedByApplicationId", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
}
//# sourceMappingURL=Mounts.js.map