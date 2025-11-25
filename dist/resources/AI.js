import createClient from 'openapi-fetch';
import { DokployError } from '../error';
/**
 * AI API resource
 * Handles all ai-related operations
 */
export class AI {
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
     * ai-one
     * @param query?
     */
    async one(query) {
        const response = await this.client.GET("/ai.one", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * ai-getModels
     * @param query?
     */
    async getModels(query) {
        const response = await this.client.GET("/ai.getModels", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * ai-create
     * @param data
     */
    async create(data) {
        const response = await this.client.POST("/ai.create", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * ai-update
     * @param data
     */
    async update(data) {
        const response = await this.client.POST("/ai.update", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * ai-getAll
     * @param void
     */
    async getAll() {
        const response = await this.client.GET("/ai.getAll");
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * ai-get
     * @param query?
     */
    async get(query) {
        const response = await this.client.GET("/ai.get", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * ai-delete
     * @param data
     */
    async delete(data) {
        const response = await this.client.POST("/ai.delete", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * ai-suggest
     * @param data
     */
    async suggest(data) {
        const response = await this.client.POST("/ai.suggest", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * ai-deploy
     * @param data
     */
    async deploy(data) {
        const response = await this.client.POST("/ai.deploy", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
}
//# sourceMappingURL=AI.js.map