import createClient from 'openapi-fetch';
import { DokployError } from '../error';
/**
 * Admin API resource
 * Handles all admin-related operations
 */
export class Admin {
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
     * admin-setupMonitoring
     * @param data
     */
    async setupMonitoring(data) {
        const response = await this.client.POST("/admin.setupMonitoring", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
}
//# sourceMappingURL=Admin.js.map