/**
 * Compose API resource
 * Handles all compose-related operations
 */
export declare class Compose {
    private client;
    constructor(baseUrl: string, apiToken: string);
    /**
     * compose-create
     * @param data
     */
    create(data: any): Promise<unknown>;
    /**
     * compose-one
     * @param query?
     */
    one(query?: any): Promise<unknown>;
    /**
     * compose-update
     * @param data
     */
    update(data: any): Promise<unknown>;
    /**
     * compose-delete
     * @param data
     */
    delete(data: any): Promise<unknown>;
    /**
     * compose-cleanQueues
     * @param data
     */
    cleanQueues(data: any): Promise<unknown>;
    /**
     * compose-killBuild
     * @param data
     */
    killBuild(data: any): Promise<unknown>;
    /**
     * compose-loadServices
     * @param query?
     */
    loadServices(query?: any): Promise<unknown>;
    /**
     * compose-loadMountsByService
     * @param query?
     */
    loadMountsByService(query?: any): Promise<unknown>;
    /**
     * compose-fetchSourceType
     * @param data
     */
    fetchSourceType(data: any): Promise<unknown>;
    /**
     * compose-randomizeCompose
     * @param data
     */
    randomizeCompose(data: any): Promise<unknown>;
    /**
     * compose-isolatedDeployment
     * @param data
     */
    isolatedDeployment(data: any): Promise<unknown>;
    /**
     * compose-getConvertedCompose
     * @param query?
     */
    getConvertedCompose(query?: any): Promise<unknown>;
    /**
     * compose-deploy
     * @param data
     */
    deploy(data: any): Promise<unknown>;
    /**
     * compose-redeploy
     * @param data
     */
    redeploy(data: any): Promise<unknown>;
    /**
     * compose-stop
     * @param data
     */
    stop(data: any): Promise<unknown>;
    /**
     * compose-start
     * @param data
     */
    start(data: any): Promise<unknown>;
    /**
     * compose-getDefaultCommand
     * @param query?
     */
    getDefaultCommand(query?: any): Promise<unknown>;
    /**
     * compose-refreshToken
     * @param data
     */
    refreshToken(data: any): Promise<unknown>;
    /**
     * compose-deployTemplate
     * @param data
     */
    deployTemplate(data: any): Promise<unknown>;
    /**
     * compose-templates
     * @param query?
     */
    templates(query?: any): Promise<unknown>;
    /**
     * compose-getTags
     * @param query?
     */
    getTags(query?: any): Promise<unknown>;
    /**
     * compose-disconnectGitProvider
     * @param data
     */
    disconnectGitProvider(data: any): Promise<unknown>;
    /**
     * compose-move
     * @param data
     */
    move(data: any): Promise<unknown>;
    /**
     * compose-processTemplate
     * @param data
     */
    processTemplate(data: any): Promise<unknown>;
    /**
     * compose-import
     * @param data
     */
    import(data: any): Promise<unknown>;
    /**
     * compose-cancelDeployment
     * @param data
     */
    cancelDeployment(data: any): Promise<unknown>;
}
//# sourceMappingURL=Compose.d.ts.map