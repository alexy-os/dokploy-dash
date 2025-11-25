/**
 * Deployment API resource
 * Handles all deployment-related operations
 */
export declare class Deployment {
    private client;
    constructor(baseUrl: string, apiToken: string);
    /**
     * deployment-all
     * @param query?
     */
    all(query?: any): Promise<unknown>;
    /**
     * deployment-allByCompose
     * @param query?
     */
    allByCompose(query?: any): Promise<unknown>;
    /**
     * deployment-allByServer
     * @param query?
     */
    allByServer(query?: any): Promise<unknown>;
    /**
     * deployment-allByType
     * @param query?
     */
    allByType(query?: any): Promise<unknown>;
    /**
     * deployment-killProcess
     * @param data
     */
    killProcess(data: any): Promise<unknown>;
}
//# sourceMappingURL=Deployment.d.ts.map