/**
 * Server API resource
 * Handles all server-related operations
 */
export declare class Server {
    private client;
    constructor(baseUrl: string, apiToken: string);
    /**
     * server-create
     * @param data
     */
    create(data: any): Promise<unknown>;
    /**
     * server-one
     * @param query?
     */
    one(query?: any): Promise<unknown>;
    /**
     * server-getDefaultCommand
     * @param query?
     */
    getDefaultCommand(query?: any): Promise<unknown>;
    /**
     * server-all
     * @param void
     */
    all(): Promise<unknown>;
    /**
     * server-count
     * @param void
     */
    count(): Promise<unknown>;
    /**
     * server-withSSHKey
     * @param void
     */
    withSSHKey(): Promise<unknown>;
    /**
     * server-setup
     * @param data
     */
    setup(data: any): Promise<unknown>;
    /**
     * server-validate
     * @param query?
     */
    validate(query?: any): Promise<unknown>;
    /**
     * server-security
     * @param query?
     */
    security(query?: any): Promise<unknown>;
    /**
     * server-setupMonitoring
     * @param data
     */
    setupMonitoring(data: any): Promise<unknown>;
    /**
     * server-remove
     * @param data
     */
    remove(data: any): Promise<unknown>;
    /**
     * server-update
     * @param data
     */
    update(data: any): Promise<unknown>;
    /**
     * server-publicIp
     * @param void
     */
    publicIp(): Promise<unknown>;
    /**
     * server-getServerTime
     * @param void
     */
    getServerTime(): Promise<unknown>;
    /**
     * server-getServerMetrics
     * @param query?
     */
    getServerMetrics(query?: any): Promise<unknown>;
}
//# sourceMappingURL=Server.d.ts.map