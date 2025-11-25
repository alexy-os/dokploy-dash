import createClient from 'openapi-fetch';
import { DokployError } from '../error';
/**
 * SSHKey API resource
 * Handles all sshKey-related operations
 */
export class SSHKey {
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
     * sshKey-create
     * @param data
     */
    async create(data) {
        const response = await this.client.POST("/sshKey.create", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * sshKey-remove
     * @param data
     */
    async remove(data) {
        const response = await this.client.POST("/sshKey.remove", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * sshKey-one
     * @param query?
     */
    async one(query) {
        const response = await this.client.GET("/sshKey.one", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * sshKey-all
     * @param void
     */
    async all() {
        const response = await this.client.GET("/sshKey.all");
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * sshKey-generate
     * @param data
     */
    async generate(data) {
        const response = await this.client.POST("/sshKey.generate", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * sshKey-update
     * @param data
     */
    async update(data) {
        const response = await this.client.POST("/sshKey.update", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
}
//# sourceMappingURL=SSHKey.js.map