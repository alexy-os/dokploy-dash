import createClient from 'openapi-fetch';
import { DokployError } from '../error';
/**
 * Mongo API resource
 * Handles all mongo-related operations
 */
export class Mongo {
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
     * mongo-create
     * @param data
     */
    async create(data) {
        const response = await this.client.POST("/mongo.create", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * mongo-one
     * @param query?
     */
    async one(query) {
        const response = await this.client.GET("/mongo.one", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * mongo-start
     * @param data
     */
    async start(data) {
        const response = await this.client.POST("/mongo.start", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * mongo-stop
     * @param data
     */
    async stop(data) {
        const response = await this.client.POST("/mongo.stop", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * mongo-saveExternalPort
     * @param data
     */
    async saveExternalPort(data) {
        const response = await this.client.POST("/mongo.saveExternalPort", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * mongo-deploy
     * @param data
     */
    async deploy(data) {
        const response = await this.client.POST("/mongo.deploy", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * mongo-changeStatus
     * @param data
     */
    async changeStatus(data) {
        const response = await this.client.POST("/mongo.changeStatus", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * mongo-reload
     * @param data
     */
    async reload(data) {
        const response = await this.client.POST("/mongo.reload", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * mongo-remove
     * @param data
     */
    async remove(data) {
        const response = await this.client.POST("/mongo.remove", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * mongo-saveEnvironment
     * @param data
     */
    async saveEnvironment(data) {
        const response = await this.client.POST("/mongo.saveEnvironment", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * mongo-update
     * @param data
     */
    async update(data) {
        const response = await this.client.POST("/mongo.update", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * mongo-move
     * @param data
     */
    async move(data) {
        const response = await this.client.POST("/mongo.move", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * mongo-rebuild
     * @param data
     */
    async rebuild(data) {
        const response = await this.client.POST("/mongo.rebuild", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
}
//# sourceMappingURL=Mongo.js.map