/**
 * User API resource
 * Handles all user-related operations
 */
export declare class User {
    private client;
    constructor(baseUrl: string, apiToken: string);
    /**
     * user-all
     * @param void
     */
    all(): Promise<unknown>;
    /**
     * user-one
     * @param query?
     */
    one(query?: any): Promise<unknown>;
    /**
     * user-get
     * @param void
     */
    get(): Promise<unknown>;
    /**
     * user-haveRootAccess
     * @param void
     */
    haveRootAccess(): Promise<unknown>;
    /**
     * user-getBackups
     * @param void
     */
    getBackups(): Promise<unknown>;
    /**
     * user-getServerMetrics
     * @param void
     */
    getServerMetrics(): Promise<unknown>;
    /**
     * user-update
     * @param data
     */
    update(data: any): Promise<unknown>;
    /**
     * user-getUserByToken
     * @param query?
     */
    getUserByToken(query?: any): Promise<unknown>;
    /**
     * user-getMetricsToken
     * @param void
     */
    getMetricsToken(): Promise<unknown>;
    /**
     * user-remove
     * @param data
     */
    remove(data: any): Promise<unknown>;
    /**
     * user-assignPermissions
     * @param data
     */
    assignPermissions(data: any): Promise<unknown>;
    /**
     * user-getInvitations
     * @param void
     */
    getInvitations(): Promise<unknown>;
    /**
     * user-getContainerMetrics
     * @param query?
     */
    getContainerMetrics(query?: any): Promise<unknown>;
    /**
     * user-generateToken
     * @param void
     */
    generateToken(): Promise<unknown>;
    /**
     * user-deleteApiKey
     * @param data
     */
    deleteApiKey(data: any): Promise<unknown>;
    /**
     * user-createApiKey
     * @param data
     */
    createApiKey(data: any): Promise<unknown>;
    /**
     * user-checkUserOrganizations
     * @param query?
     */
    checkUserOrganizations(query?: any): Promise<unknown>;
    /**
     * user-sendInvitation
     * @param data
     */
    sendInvitation(data: any): Promise<unknown>;
}
//# sourceMappingURL=User.d.ts.map