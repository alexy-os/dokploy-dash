/**
 * Docker API resource
 * Handles all docker-related operations
 */
export declare class Docker {
    private client;
    constructor(baseUrl: string, apiToken: string);
    /**
     * docker-getContainers
     * @param query?
     */
    getContainers(query?: any): Promise<unknown>;
    /**
     * docker-restartContainer
     * @param data
     */
    restartContainer(data: any): Promise<unknown>;
    /**
     * docker-getConfig
     * @param query?
     */
    getConfig(query?: any): Promise<unknown>;
    /**
     * docker-getContainersByAppNameMatch
     * @param query?
     */
    getContainersByAppNameMatch(query?: any): Promise<unknown>;
    /**
     * docker-getContainersByAppLabel
     * @param query?
     */
    getContainersByAppLabel(query?: any): Promise<unknown>;
    /**
     * docker-getStackContainersByAppName
     * @param query?
     */
    getStackContainersByAppName(query?: any): Promise<unknown>;
    /**
     * docker-getServiceContainersByAppName
     * @param query?
     */
    getServiceContainersByAppName(query?: any): Promise<unknown>;
}
//# sourceMappingURL=Docker.d.ts.map