import createClient from 'openapi-fetch';
import { DokployError } from '../error';
/**
 * Rollback API resource
 * Handles all rollback-related operations
 */
export class Rollback {
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
     * rollback-delete
     * @param data
     */
    async delete(data) {
        const response = await this.client.POST("/rollback.delete", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * rollback-rollback
     * @param data
     */
    async rollback(data) {
        const response = await this.client.POST("/rollback.rollback", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
}
//# sourceMappingURL=Rollback.js.map