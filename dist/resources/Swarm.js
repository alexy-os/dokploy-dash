import createClient from 'openapi-fetch';
import { DokployError } from '../error';
/**
 * Swarm API resource
 * Handles all swarm-related operations
 */
export class Swarm {
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
     * swarm-getNodes
     * @param query?
     */
    async getNodes(query) {
        const response = await this.client.GET("/swarm.getNodes", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * swarm-getNodeInfo
     * @param query?
     */
    async getNodeInfo(query) {
        const response = await this.client.GET("/swarm.getNodeInfo", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * swarm-getNodeApps
     * @param query?
     */
    async getNodeApps(query) {
        const response = await this.client.GET("/swarm.getNodeApps", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
}
//# sourceMappingURL=Swarm.js.map