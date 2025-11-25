import createClient from 'openapi-fetch';
import { DokployError } from '../error';
/**
 * Bitbucket API resource
 * Handles all bitbucket-related operations
 */
export class Bitbucket {
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
     * bitbucket-create
     * @param data
     */
    async create(data) {
        const response = await this.client.POST("/bitbucket.create", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * bitbucket-one
     * @param query?
     */
    async one(query) {
        const response = await this.client.GET("/bitbucket.one", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * bitbucket-bitbucketProviders
     * @param void
     */
    async bitbucketProviders() {
        const response = await this.client.GET("/bitbucket.bitbucketProviders");
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * bitbucket-getBitbucketRepositories
     * @param query?
     */
    async getBitbucketRepositories(query) {
        const response = await this.client.GET("/bitbucket.getBitbucketRepositories", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * bitbucket-getBitbucketBranches
     * @param query?
     */
    async getBitbucketBranches(query) {
        const response = await this.client.GET("/bitbucket.getBitbucketBranches", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * bitbucket-testConnection
     * @param data
     */
    async testConnection(data) {
        const response = await this.client.POST("/bitbucket.testConnection", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * bitbucket-update
     * @param data
     */
    async update(data) {
        const response = await this.client.POST("/bitbucket.update", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
}
//# sourceMappingURL=Bitbucket.js.map