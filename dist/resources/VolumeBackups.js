import createClient from 'openapi-fetch';
import { DokployError } from '../error';
/**
 * VolumeBackups API resource
 * Handles all volumeBackups-related operations
 */
export class VolumeBackups {
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
     * volumeBackups-list
     * @param query?
     */
    async list(query) {
        const response = await this.client.GET("/volumeBackups.list", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * volumeBackups-create
     * @param data
     */
    async create(data) {
        const response = await this.client.POST("/volumeBackups.create", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * volumeBackups-one
     * @param query?
     */
    async one(query) {
        const response = await this.client.GET("/volumeBackups.one", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * volumeBackups-delete
     * @param data
     */
    async delete(data) {
        const response = await this.client.POST("/volumeBackups.delete", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * volumeBackups-update
     * @param data
     */
    async update(data) {
        const response = await this.client.POST("/volumeBackups.update", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * volumeBackups-runManually
     * @param data
     */
    async runManually(data) {
        const response = await this.client.POST("/volumeBackups.runManually", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
}
//# sourceMappingURL=VolumeBackups.js.map