import createClient from 'openapi-fetch';
import { DokployError } from '../error';
/**
 * Organization API resource
 * Handles all organization-related operations
 */
export class Organization {
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
     * organization-create
     * @param data
     */
    async create(data) {
        const response = await this.client.POST("/organization.create", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * organization-all
     * @param void
     */
    async all() {
        const response = await this.client.GET("/organization.all");
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * organization-one
     * @param query?
     */
    async one(query) {
        const response = await this.client.GET("/organization.one", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * organization-update
     * @param data
     */
    async update(data) {
        const response = await this.client.POST("/organization.update", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * organization-delete
     * @param data
     */
    async delete(data) {
        const response = await this.client.POST("/organization.delete", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * organization-allInvitations
     * @param void
     */
    async allInvitations() {
        const response = await this.client.GET("/organization.allInvitations");
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * organization-removeInvitation
     * @param data
     */
    async removeInvitation(data) {
        const response = await this.client.POST("/organization.removeInvitation", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * organization-setDefault
     * @param data
     */
    async setDefault(data) {
        const response = await this.client.POST("/organization.setDefault", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
}
//# sourceMappingURL=Organization.js.map