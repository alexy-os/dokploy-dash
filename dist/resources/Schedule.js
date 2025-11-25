import createClient from 'openapi-fetch';
import { DokployError } from '../error';
/**
 * Schedule API resource
 * Handles all schedule-related operations
 */
export class Schedule {
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
     * schedule-create
     * @param data
     */
    async create(data) {
        const response = await this.client.POST("/schedule.create", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * schedule-update
     * @param data
     */
    async update(data) {
        const response = await this.client.POST("/schedule.update", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * schedule-delete
     * @param data
     */
    async delete(data) {
        const response = await this.client.POST("/schedule.delete", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * schedule-list
     * @param query?
     */
    async list(query) {
        const response = await this.client.GET("/schedule.list", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * schedule-one
     * @param query?
     */
    async one(query) {
        const response = await this.client.GET("/schedule.one", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * schedule-runManually
     * @param data
     */
    async runManually(data) {
        const response = await this.client.POST("/schedule.runManually", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
}
//# sourceMappingURL=Schedule.js.map