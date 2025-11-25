import createClient from 'openapi-fetch';
import { DokployError } from '../error';
/**
 * Docker API resource
 * Handles all docker-related operations
 */
export class Docker {
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
     * docker-getContainers
     * @param query?
     */
    async getContainers(query) {
        const response = await this.client.GET("/docker.getContainers", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * docker-restartContainer
     * @param data
     */
    async restartContainer(data) {
        const response = await this.client.POST("/docker.restartContainer", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * docker-getConfig
     * @param query?
     */
    async getConfig(query) {
        const response = await this.client.GET("/docker.getConfig", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * docker-getContainersByAppNameMatch
     * @param query?
     */
    async getContainersByAppNameMatch(query) {
        const response = await this.client.GET("/docker.getContainersByAppNameMatch", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * docker-getContainersByAppLabel
     * @param query?
     */
    async getContainersByAppLabel(query) {
        const response = await this.client.GET("/docker.getContainersByAppLabel", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * docker-getStackContainersByAppName
     * @param query?
     */
    async getStackContainersByAppName(query) {
        const response = await this.client.GET("/docker.getStackContainersByAppName", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * docker-getServiceContainersByAppName
     * @param query?
     */
    async getServiceContainersByAppName(query) {
        const response = await this.client.GET("/docker.getServiceContainersByAppName", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
}
//# sourceMappingURL=Docker.js.map