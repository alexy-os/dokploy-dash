import createClient from 'openapi-fetch';
import { DokployError } from '../error';
/**
 * Cluster API resource
 * Handles all cluster-related operations
 */
export class Cluster {
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
     * cluster-getNodes
     * @param query?
     */
    async getNodes(query) {
        const response = await this.client.GET("/cluster.getNodes", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * cluster-removeWorker
     * @param data
     */
    async removeWorker(data) {
        const response = await this.client.POST("/cluster.removeWorker", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * cluster-addWorker
     * @param query?
     */
    async addWorker(query) {
        const response = await this.client.GET("/cluster.addWorker", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * cluster-addManager
     * @param query?
     */
    async addManager(query) {
        const response = await this.client.GET("/cluster.addManager", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
}
//# sourceMappingURL=Cluster.js.map