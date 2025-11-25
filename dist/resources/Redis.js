import createClient from 'openapi-fetch';
import { DokployError } from '../error';
/**
 * Redis API resource
 * Handles all redis-related operations
 */
export class Redis {
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
     * redis-create
     * @param data
     */
    async create(data) {
        const response = await this.client.POST("/redis.create", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * redis-one
     * @param query?
     */
    async one(query) {
        const response = await this.client.GET("/redis.one", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * redis-start
     * @param data
     */
    async start(data) {
        const response = await this.client.POST("/redis.start", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * redis-reload
     * @param data
     */
    async reload(data) {
        const response = await this.client.POST("/redis.reload", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * redis-stop
     * @param data
     */
    async stop(data) {
        const response = await this.client.POST("/redis.stop", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * redis-saveExternalPort
     * @param data
     */
    async saveExternalPort(data) {
        const response = await this.client.POST("/redis.saveExternalPort", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * redis-deploy
     * @param data
     */
    async deploy(data) {
        const response = await this.client.POST("/redis.deploy", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * redis-changeStatus
     * @param data
     */
    async changeStatus(data) {
        const response = await this.client.POST("/redis.changeStatus", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * redis-remove
     * @param data
     */
    async remove(data) {
        const response = await this.client.POST("/redis.remove", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * redis-saveEnvironment
     * @param data
     */
    async saveEnvironment(data) {
        const response = await this.client.POST("/redis.saveEnvironment", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * redis-update
     * @param data
     */
    async update(data) {
        const response = await this.client.POST("/redis.update", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * redis-move
     * @param data
     */
    async move(data) {
        const response = await this.client.POST("/redis.move", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * redis-rebuild
     * @param data
     */
    async rebuild(data) {
        const response = await this.client.POST("/redis.rebuild", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
}
//# sourceMappingURL=Redis.js.map