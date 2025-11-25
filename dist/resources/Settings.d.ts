/**
 * Settings API resource
 * Handles all settings-related operations
 */
export declare class Settings {
    private client;
    constructor(baseUrl: string, apiToken: string);
    /**
     * settings-reloadServer
     * @param void
     */
    reloadServer(): Promise<unknown>;
    /**
     * settings-cleanRedis
     * @param void
     */
    cleanRedis(): Promise<unknown>;
    /**
     * settings-reloadRedis
     * @param void
     */
    reloadRedis(): Promise<unknown>;
    /**
     * settings-reloadTraefik
     * @param data
     */
    reloadTraefik(data: any): Promise<unknown>;
    /**
     * settings-toggleDashboard
     * @param data
     */
    toggleDashboard(data: any): Promise<unknown>;
    /**
     * settings-cleanUnusedImages
     * @param data
     */
    cleanUnusedImages(data: any): Promise<unknown>;
    /**
     * settings-cleanUnusedVolumes
     * @param data
     */
    cleanUnusedVolumes(data: any): Promise<unknown>;
    /**
     * settings-cleanStoppedContainers
     * @param data
     */
    cleanStoppedContainers(data: any): Promise<unknown>;
    /**
     * settings-cleanDockerBuilder
     * @param data
     */
    cleanDockerBuilder(data: any): Promise<unknown>;
    /**
     * settings-cleanDockerPrune
     * @param data
     */
    cleanDockerPrune(data: any): Promise<unknown>;
    /**
     * settings-cleanAll
     * @param data
     */
    cleanAll(data: any): Promise<unknown>;
    /**
     * settings-cleanMonitoring
     * @param void
     */
    cleanMonitoring(): Promise<unknown>;
    /**
     * settings-saveSSHPrivateKey
     * @param data
     */
    saveSSHPrivateKey(data: any): Promise<unknown>;
    /**
     * settings-assignDomainServer
     * @param data
     */
    assignDomainServer(data: any): Promise<unknown>;
    /**
     * settings-cleanSSHPrivateKey
     * @param void
     */
    cleanSSHPrivateKey(): Promise<unknown>;
    /**
     * settings-updateDockerCleanup
     * @param data
     */
    updateDockerCleanup(data: any): Promise<unknown>;
    /**
     * settings-readTraefikConfig
     * @param void
     */
    readTraefikConfig(): Promise<unknown>;
    /**
     * settings-updateTraefikConfig
     * @param data
     */
    updateTraefikConfig(data: any): Promise<unknown>;
    /**
     * settings-readWebServerTraefikConfig
     * @param void
     */
    readWebServerTraefikConfig(): Promise<unknown>;
    /**
     * settings-updateWebServerTraefikConfig
     * @param data
     */
    updateWebServerTraefikConfig(data: any): Promise<unknown>;
    /**
     * settings-readMiddlewareTraefikConfig
     * @param void
     */
    readMiddlewareTraefikConfig(): Promise<unknown>;
    /**
     * settings-updateMiddlewareTraefikConfig
     * @param data
     */
    updateMiddlewareTraefikConfig(data: any): Promise<unknown>;
    /**
     * settings-getUpdateData
     * @param void
     */
    getUpdateData(): Promise<unknown>;
    /**
     * settings-updateServer
     * @param void
     */
    updateServer(): Promise<unknown>;
    /**
     * settings-getDokployVersion
     * @param void
     */
    getDokployVersion(): Promise<unknown>;
    /**
     * settings-getReleaseTag
     * @param void
     */
    getReleaseTag(): Promise<unknown>;
    /**
     * settings-readDirectories
     * @param query?
     */
    readDirectories(query?: any): Promise<unknown>;
    /**
     * settings-updateTraefikFile
     * @param data
     */
    updateTraefikFile(data: any): Promise<unknown>;
    /**
     * settings-readTraefikFile
     * @param query?
     */
    readTraefikFile(query?: any): Promise<unknown>;
    /**
     * settings-getIp
     * @param void
     */
    getIp(): Promise<unknown>;
    /**
     * settings-getOpenApiDocument
     * @param void
     */
    getOpenApiDocument(): Promise<unknown>;
    /**
     * settings-readTraefikEnv
     * @param query?
     */
    readTraefikEnv(query?: any): Promise<unknown>;
    /**
     * settings-writeTraefikEnv
     * @param data
     */
    writeTraefikEnv(data: any): Promise<unknown>;
    /**
     * settings-haveTraefikDashboardPortEnabled
     * @param query?
     */
    haveTraefikDashboardPortEnabled(query?: any): Promise<unknown>;
    /**
     * settings-haveActivateRequests
     * @param void
     */
    haveActivateRequests(): Promise<unknown>;
    /**
     * settings-toggleRequests
     * @param data
     */
    toggleRequests(data: any): Promise<unknown>;
    /**
     * settings-isCloud
     * @param void
     */
    isCloud(): Promise<unknown>;
    /**
     * settings-isUserSubscribed
     * @param void
     */
    isUserSubscribed(): Promise<unknown>;
    /**
     * settings-health
     * @param void
     */
    health(): Promise<unknown>;
    /**
     * settings-setupGPU
     * @param data
     */
    setupGPU(data: any): Promise<unknown>;
    /**
     * settings-checkGPUStatus
     * @param query?
     */
    checkGPUStatus(query?: any): Promise<unknown>;
    /**
     * settings-updateTraefikPorts
     * @param data
     */
    updateTraefikPorts(data: any): Promise<unknown>;
    /**
     * settings-getTraefikPorts
     * @param query?
     */
    getTraefikPorts(query?: any): Promise<unknown>;
    /**
     * settings-updateLogCleanup
     * @param data
     */
    updateLogCleanup(data: any): Promise<unknown>;
    /**
     * settings-getLogCleanupStatus
     * @param void
     */
    getLogCleanupStatus(): Promise<unknown>;
    /**
     * settings-getDokployCloudIps
     * @param void
     */
    getDokployCloudIps(): Promise<unknown>;
}
//# sourceMappingURL=Settings.d.ts.map