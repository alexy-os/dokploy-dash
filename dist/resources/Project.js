import createClient from 'openapi-fetch';
import { DokployError } from '../error';
/**
 * Project API resource
 * Handles all project-related operations
 */
export class Project {
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
     * project-create
     * @param data
     */
    async create(data) {
        const response = await this.client.POST("/project.create", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * project-one
     * @param query?
     */
    async one(query) {
        const response = await this.client.GET("/project.one", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * project-all
     * @param void
     */
    async all() {
        const response = await this.client.GET("/project.all");
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * project-remove
     * @param data
     */
    async remove(data) {
        const response = await this.client.POST("/project.remove", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * project-update
     * @param data
     */
    async update(data) {
        const response = await this.client.POST("/project.update", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * project-duplicate
     * @param data
     */
    async duplicate(data) {
        const response = await this.client.POST("/project.duplicate", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
}
//# sourceMappingURL=Project.js.map