import createClient from 'openapi-fetch';
import { DokployError } from '../error';
/**
 * User API resource
 * Handles all user-related operations
 */
export class User {
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
     * user-all
     * @param void
     */
    async all() {
        const response = await this.client.GET("/user.all");
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * user-one
     * @param query?
     */
    async one(query) {
        const response = await this.client.GET("/user.one", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * user-get
     * @param void
     */
    async get() {
        const response = await this.client.GET("/user.get");
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * user-haveRootAccess
     * @param void
     */
    async haveRootAccess() {
        const response = await this.client.GET("/user.haveRootAccess");
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * user-getBackups
     * @param void
     */
    async getBackups() {
        const response = await this.client.GET("/user.getBackups");
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * user-getServerMetrics
     * @param void
     */
    async getServerMetrics() {
        const response = await this.client.GET("/user.getServerMetrics");
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * user-update
     * @param data
     */
    async update(data) {
        const response = await this.client.POST("/user.update", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * user-getUserByToken
     * @param query?
     */
    async getUserByToken(query) {
        const response = await this.client.GET("/user.getUserByToken", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * user-getMetricsToken
     * @param void
     */
    async getMetricsToken() {
        const response = await this.client.GET("/user.getMetricsToken");
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * user-remove
     * @param data
     */
    async remove(data) {
        const response = await this.client.POST("/user.remove", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * user-assignPermissions
     * @param data
     */
    async assignPermissions(data) {
        const response = await this.client.POST("/user.assignPermissions", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * user-getInvitations
     * @param void
     */
    async getInvitations() {
        const response = await this.client.GET("/user.getInvitations");
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * user-getContainerMetrics
     * @param query?
     */
    async getContainerMetrics(query) {
        const response = await this.client.GET("/user.getContainerMetrics", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * user-generateToken
     * @param void
     */
    async generateToken() {
        const response = await this.client.POST("/user.generateToken");
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * user-deleteApiKey
     * @param data
     */
    async deleteApiKey(data) {
        const response = await this.client.POST("/user.deleteApiKey", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * user-createApiKey
     * @param data
     */
    async createApiKey(data) {
        const response = await this.client.POST("/user.createApiKey", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * user-checkUserOrganizations
     * @param query?
     */
    async checkUserOrganizations(query) {
        const response = await this.client.GET("/user.checkUserOrganizations", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * user-sendInvitation
     * @param data
     */
    async sendInvitation(data) {
        const response = await this.client.POST("/user.sendInvitation", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
}
//# sourceMappingURL=User.js.map