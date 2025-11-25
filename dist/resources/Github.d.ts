/**
 * Github API resource
 * Handles all github-related operations
 */
export declare class Github {
    private client;
    constructor(baseUrl: string, apiToken: string);
    /**
     * github-one
     * @param query?
     */
    one(query?: any): Promise<unknown>;
    /**
     * github-getGithubRepositories
     * @param query?
     */
    getGithubRepositories(query?: any): Promise<unknown>;
    /**
     * github-getGithubBranches
     * @param query?
     */
    getGithubBranches(query?: any): Promise<unknown>;
    /**
     * github-githubProviders
     * @param void
     */
    githubProviders(): Promise<unknown>;
    /**
     * github-testConnection
     * @param data
     */
    testConnection(data: any): Promise<unknown>;
    /**
     * github-update
     * @param data
     */
    update(data: any): Promise<unknown>;
}
//# sourceMappingURL=Github.d.ts.map