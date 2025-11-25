/**
 * Redis API resource
 * Handles all redis-related operations
 */
export declare class Redis {
    private client;
    constructor(baseUrl: string, apiToken: string);
    /**
     * redis-create
     * @param data
     */
    create(data: any): Promise<unknown>;
    /**
     * redis-one
     * @param query?
     */
    one(query?: any): Promise<unknown>;
    /**
     * redis-start
     * @param data
     */
    start(data: any): Promise<unknown>;
    /**
     * redis-reload
     * @param data
     */
    reload(data: any): Promise<unknown>;
    /**
     * redis-stop
     * @param data
     */
    stop(data: any): Promise<unknown>;
    /**
     * redis-saveExternalPort
     * @param data
     */
    saveExternalPort(data: any): Promise<unknown>;
    /**
     * redis-deploy
     * @param data
     */
    deploy(data: any): Promise<unknown>;
    /**
     * redis-changeStatus
     * @param data
     */
    changeStatus(data: any): Promise<unknown>;
    /**
     * redis-remove
     * @param data
     */
    remove(data: any): Promise<unknown>;
    /**
     * redis-saveEnvironment
     * @param data
     */
    saveEnvironment(data: any): Promise<unknown>;
    /**
     * redis-update
     * @param data
     */
    update(data: any): Promise<unknown>;
    /**
     * redis-move
     * @param data
     */
    move(data: any): Promise<unknown>;
    /**
     * redis-rebuild
     * @param data
     */
    rebuild(data: any): Promise<unknown>;
}
//# sourceMappingURL=Redis.d.ts.map