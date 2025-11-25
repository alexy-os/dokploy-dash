import createClient from 'openapi-fetch';
import { DokployError } from '../error';
/**
 * PreviewDeployment API resource
 * Handles all previewDeployment-related operations
 */
export class PreviewDeployment {
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
     * previewDeployment-all
     * @param query?
     */
    async all(query) {
        const response = await this.client.GET("/previewDeployment.all", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * previewDeployment-delete
     * @param data
     */
    async delete(data) {
        const response = await this.client.POST("/previewDeployment.delete", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * previewDeployment-one
     * @param query?
     */
    async one(query) {
        const response = await this.client.GET("/previewDeployment.one", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
}
//# sourceMappingURL=PreviewDeployment.js.map