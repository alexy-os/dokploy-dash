import createClient from 'openapi-fetch';
import { DokployError } from '../error';
/**
 * GitProvider API resource
 * Handles all gitProvider-related operations
 */
export class GitProvider {
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
     * gitProvider-getAll
     * @param void
     */
    async getAll() {
        const response = await this.client.GET("/gitProvider.getAll");
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * gitProvider-remove
     * @param data
     */
    async remove(data) {
        const response = await this.client.POST("/gitProvider.remove", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
}
//# sourceMappingURL=GitProvider.js.map