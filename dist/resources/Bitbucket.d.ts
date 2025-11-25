/**
 * Bitbucket API resource
 * Handles all bitbucket-related operations
 */
export declare class Bitbucket {
    private client;
    constructor(baseUrl: string, apiToken: string);
    /**
     * bitbucket-create
     * @param data
     */
    create(data: any): Promise<unknown>;
    /**
     * bitbucket-one
     * @param query?
     */
    one(query?: any): Promise<unknown>;
    /**
     * bitbucket-bitbucketProviders
     * @param void
     */
    bitbucketProviders(): Promise<unknown>;
    /**
     * bitbucket-getBitbucketRepositories
     * @param query?
     */
    getBitbucketRepositories(query?: any): Promise<unknown>;
    /**
     * bitbucket-getBitbucketBranches
     * @param query?
     */
    getBitbucketBranches(query?: any): Promise<unknown>;
    /**
     * bitbucket-testConnection
     * @param data
     */
    testConnection(data: any): Promise<unknown>;
    /**
     * bitbucket-update
     * @param data
     */
    update(data: any): Promise<unknown>;
}
//# sourceMappingURL=Bitbucket.d.ts.map