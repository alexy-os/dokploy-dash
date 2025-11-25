/**
 * Gitlab API resource
 * Handles all gitlab-related operations
 */
export declare class Gitlab {
    private client;
    constructor(baseUrl: string, apiToken: string);
    /**
     * gitlab-create
     * @param data
     */
    create(data: any): Promise<unknown>;
    /**
     * gitlab-one
     * @param query?
     */
    one(query?: any): Promise<unknown>;
    /**
     * gitlab-gitlabProviders
     * @param void
     */
    gitlabProviders(): Promise<unknown>;
    /**
     * gitlab-getGitlabRepositories
     * @param query?
     */
    getGitlabRepositories(query?: any): Promise<unknown>;
    /**
     * gitlab-getGitlabBranches
     * @param query?
     */
    getGitlabBranches(query?: any): Promise<unknown>;
    /**
     * gitlab-testConnection
     * @param data
     */
    testConnection(data: any): Promise<unknown>;
    /**
     * gitlab-update
     * @param data
     */
    update(data: any): Promise<unknown>;
}
//# sourceMappingURL=Gitlab.d.ts.map