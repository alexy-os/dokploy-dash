import createClient from 'openapi-fetch';
import { DokployError } from '../error';
/**
 * MariaDB API resource
 * Handles all mariadb-related operations
 */
export class MariaDB {
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
     * mariadb-create
     * @param data
     */
    async create(data) {
        const response = await this.client.POST("/mariadb.create", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * mariadb-one
     * @param query?
     */
    async one(query) {
        const response = await this.client.GET("/mariadb.one", {
            params: query
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * mariadb-start
     * @param data
     */
    async start(data) {
        const response = await this.client.POST("/mariadb.start", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * mariadb-stop
     * @param data
     */
    async stop(data) {
        const response = await this.client.POST("/mariadb.stop", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * mariadb-saveExternalPort
     * @param data
     */
    async saveExternalPort(data) {
        const response = await this.client.POST("/mariadb.saveExternalPort", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * mariadb-deploy
     * @param data
     */
    async deploy(data) {
        const response = await this.client.POST("/mariadb.deploy", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * mariadb-changeStatus
     * @param data
     */
    async changeStatus(data) {
        const response = await this.client.POST("/mariadb.changeStatus", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * mariadb-remove
     * @param data
     */
    async remove(data) {
        const response = await this.client.POST("/mariadb.remove", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * mariadb-saveEnvironment
     * @param data
     */
    async saveEnvironment(data) {
        const response = await this.client.POST("/mariadb.saveEnvironment", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * mariadb-reload
     * @param data
     */
    async reload(data) {
        const response = await this.client.POST("/mariadb.reload", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * mariadb-update
     * @param data
     */
    async update(data) {
        const response = await this.client.POST("/mariadb.update", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * mariadb-move
     * @param data
     */
    async move(data) {
        const response = await this.client.POST("/mariadb.move", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
    /**
     * mariadb-rebuild
     * @param data
     */
    async rebuild(data) {
        const response = await this.client.POST("/mariadb.rebuild", {
            body: data
        });
        if (response.error) {
            throw new DokployError(response.error.code || 'UNKNOWN_ERROR', response.error.message || 'An error occurred', response.error.issues);
        }
        return response.data;
    }
}
//# sourceMappingURL=MariaDB.js.map