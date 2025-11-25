/**
 * Application API resource
 * Handles all application-related operations
 */
export declare class Application {
    private client;
    constructor(baseUrl: string, apiToken: string);
    /**
     * application-create
     * @param data
     */
    create(data: any): Promise<unknown>;
    /**
     * application-one
     * @param query?
     */
    one(query?: any): Promise<unknown>;
    /**
     * application-reload
     * @param data
     */
    reload(data: any): Promise<unknown>;
    /**
     * application-delete
     * @param data
     */
    delete(data: any): Promise<unknown>;
    /**
     * application-stop
     * @param data
     */
    stop(data: any): Promise<unknown>;
    /**
     * application-start
     * @param data
     */
    start(data: any): Promise<unknown>;
    /**
     * application-redeploy
     * @param data
     */
    redeploy(data: any): Promise<unknown>;
    /**
     * application-saveEnvironment
     * @param data
     */
    saveEnvironment(data: any): Promise<unknown>;
    /**
     * application-saveBuildType
     * @param data
     */
    saveBuildType(data: any): Promise<unknown>;
    /**
     * application-saveGithubProvider
     * @param data
     */
    saveGithubProvider(data: any): Promise<unknown>;
    /**
     * application-saveGitlabProvider
     * @param data
     */
    saveGitlabProvider(data: any): Promise<unknown>;
    /**
     * application-saveBitbucketProvider
     * @param data
     */
    saveBitbucketProvider(data: any): Promise<unknown>;
    /**
     * application-saveGiteaProvider
     * @param data
     */
    saveGiteaProvider(data: any): Promise<unknown>;
    /**
     * application-saveDockerProvider
     * @param data
     */
    saveDockerProvider(data: any): Promise<unknown>;
    /**
     * application-saveGitProvider
     * @param data
     */
    saveGitProvider(data: any): Promise<unknown>;
    /**
     * application-disconnectGitProvider
     * @param data
     */
    disconnectGitProvider(data: any): Promise<unknown>;
    /**
     * application-markRunning
     * @param data
     */
    markRunning(data: any): Promise<unknown>;
    /**
     * application-update
     * @param data
     */
    update(data: any): Promise<unknown>;
    /**
     * application-refreshToken
     * @param data
     */
    refreshToken(data: any): Promise<unknown>;
    /**
     * application-deploy
     * @param data
     */
    deploy(data: any): Promise<unknown>;
    /**
     * application-cleanQueues
     * @param data
     */
    cleanQueues(data: any): Promise<unknown>;
    /**
     * application-killBuild
     * @param data
     */
    killBuild(data: any): Promise<unknown>;
    /**
     * application-readTraefikConfig
     * @param query?
     */
    readTraefikConfig(query?: any): Promise<unknown>;
    /**
     * application-updateTraefikConfig
     * @param data
     */
    updateTraefikConfig(data: any): Promise<unknown>;
    /**
     * application-readAppMonitoring
     * @param query?
     */
    readAppMonitoring(query?: any): Promise<unknown>;
    /**
     * application-move
     * @param data
     */
    move(data: any): Promise<unknown>;
    /**
     * application-cancelDeployment
     * @param data
     */
    cancelDeployment(data: any): Promise<unknown>;
}
//# sourceMappingURL=Application.d.ts.map