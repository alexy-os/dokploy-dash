import createClient from 'openapi-fetch';
import { DokployError } from '../error';
/**
 * Gitea API resource
 * Handles all gitea-related operations
 */
export class Gitea {
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
     * gitea-create
     * @param data
     */
    async create(data) {
        const response = await this.client.POST("/gitea.create", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * gitea-one
     * @param query?
     */
    async one(query) {
        const response = await this.client.GET("/gitea.one", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * gitea-giteaProviders
     * @param void
     */
    async giteaProviders() {
        const response = await this.client.GET("/gitea.giteaProviders");
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * gitea-getGiteaRepositories
     * @param query?
     */
    async getGiteaRepositories(query) {
        const response = await this.client.GET("/gitea.getGiteaRepositories", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * gitea-getGiteaBranches
     * @param query?
     */
    async getGiteaBranches(query) {
        const response = await this.client.GET("/gitea.getGiteaBranches", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * gitea-testConnection
     * @param data
     */
    async testConnection(data) {
        const response = await this.client.POST("/gitea.testConnection", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * gitea-update
     * @param data
     */
    async update(data) {
        const response = await this.client.POST("/gitea.update", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * gitea-getGiteaUrl
     * @param query?
     */
    async getGiteaUrl(query) {
        const response = await this.client.GET("/gitea.getGiteaUrl", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
}
//# sourceMappingURL=Gitea.js.map