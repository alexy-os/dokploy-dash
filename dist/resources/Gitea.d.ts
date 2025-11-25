/**
 * Gitea API resource
 * Handles all gitea-related operations
 */
export declare class Gitea {
    private client;
    constructor(baseUrl: string, apiToken: string);
    /**
     * gitea-create
     * @param data
     */
    create(data: any): Promise<unknown>;
    /**
     * gitea-one
     * @param query?
     */
    one(query?: any): Promise<unknown>;
    /**
     * gitea-giteaProviders
     * @param void
     */
    giteaProviders(): Promise<unknown>;
    /**
     * gitea-getGiteaRepositories
     * @param query?
     */
    getGiteaRepositories(query?: any): Promise<unknown>;
    /**
     * gitea-getGiteaBranches
     * @param query?
     */
    getGiteaBranches(query?: any): Promise<unknown>;
    /**
     * gitea-testConnection
     * @param data
     */
    testConnection(data: any): Promise<unknown>;
    /**
     * gitea-update
     * @param data
     */
    update(data: any): Promise<unknown>;
    /**
     * gitea-getGiteaUrl
     * @param query?
     */
    getGiteaUrl(query?: any): Promise<unknown>;
}
//# sourceMappingURL=Gitea.d.ts.map