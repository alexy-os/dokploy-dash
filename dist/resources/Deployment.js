import createClient from 'openapi-fetch';
import { DokployError } from '../error';
/**
 * Deployment API resource
 * Handles all deployment-related operations
 */
export class Deployment {
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
     * deployment-all
     * @param query?
     */
    async all(query) {
        const response = await this.client.GET("/deployment.all", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * deployment-allByCompose
     * @param query?
     */
    async allByCompose(query) {
        const response = await this.client.GET("/deployment.allByCompose", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * deployment-allByServer
     * @param query?
     */
    async allByServer(query) {
        const response = await this.client.GET("/deployment.allByServer", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * deployment-allByType
     * @param query?
     */
    async allByType(query) {
        const response = await this.client.GET("/deployment.allByType", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * deployment-killProcess
     * @param data
     */
    async killProcess(data) {
        const response = await this.client.POST("/deployment.killProcess", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
}
//# sourceMappingURL=Deployment.js.map