import createClient from 'openapi-fetch';
import { DokployError } from '../error';
/**
 * Github API resource
 * Handles all github-related operations
 */
export class Github {
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
     * github-one
     * @param query?
     */
    async one(query) {
        const response = await this.client.GET("/github.one", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * github-getGithubRepositories
     * @param query?
     */
    async getGithubRepositories(query) {
        const response = await this.client.GET("/github.getGithubRepositories", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * github-getGithubBranches
     * @param query?
     */
    async getGithubBranches(query) {
        const response = await this.client.GET("/github.getGithubBranches", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * github-githubProviders
     * @param void
     */
    async githubProviders() {
        const response = await this.client.GET("/github.githubProviders");
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * github-testConnection
     * @param data
     */
    async testConnection(data) {
        const response = await this.client.POST("/github.testConnection", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * github-update
     * @param data
     */
    async update(data) {
        const response = await this.client.POST("/github.update", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
}
//# sourceMappingURL=Github.js.map