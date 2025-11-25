import createClient from 'openapi-fetch';
import { DokployError } from '../error';
/**
 * Server API resource
 * Handles all server-related operations
 */
export class Server {
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
     * server-create
     * @param data
     */
    async create(data) {
        const response = await this.client.POST("/server.create", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * server-one
     * @param query?
     */
    async one(query) {
        const response = await this.client.GET("/server.one", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * server-getDefaultCommand
     * @param query?
     */
    async getDefaultCommand(query) {
        const response = await this.client.GET("/server.getDefaultCommand", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * server-all
     * @param void
     */
    async all() {
        const response = await this.client.GET("/server.all");
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * server-count
     * @param void
     */
    async count() {
        const response = await this.client.GET("/server.count");
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * server-withSSHKey
     * @param void
     */
    async withSSHKey() {
        const response = await this.client.GET("/server.withSSHKey");
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * server-setup
     * @param data
     */
    async setup(data) {
        const response = await this.client.POST("/server.setup", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * server-validate
     * @param query?
     */
    async validate(query) {
        const response = await this.client.GET("/server.validate", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * server-security
     * @param query?
     */
    async security(query) {
        const response = await this.client.GET("/server.security", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * server-setupMonitoring
     * @param data
     */
    async setupMonitoring(data) {
        const response = await this.client.POST("/server.setupMonitoring", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * server-remove
     * @param data
     */
    async remove(data) {
        const response = await this.client.POST("/server.remove", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * server-update
     * @param data
     */
    async update(data) {
        const response = await this.client.POST("/server.update", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * server-publicIp
     * @param void
     */
    async publicIp() {
        const response = await this.client.GET("/server.publicIp");
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * server-getServerTime
     * @param void
     */
    async getServerTime() {
        const response = await this.client.GET("/server.getServerTime");
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * server-getServerMetrics
     * @param query?
     */
    async getServerMetrics(query) {
        const response = await this.client.GET("/server.getServerMetrics", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
}
//# sourceMappingURL=Server.js.map