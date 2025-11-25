/**
 * Mongo API resource
 * Handles all mongo-related operations
 */
export declare class Mongo {
    private client;
    constructor(baseUrl: string, apiToken: string);
    /**
     * mongo-create
     * @param data
     */
    create(data: any): Promise<unknown>;
    /**
     * mongo-one
     * @param query?
     */
    one(query?: any): Promise<unknown>;
    /**
     * mongo-start
     * @param data
     */
    start(data: any): Promise<unknown>;
    /**
     * mongo-stop
     * @param data
     */
    stop(data: any): Promise<unknown>;
    /**
     * mongo-saveExternalPort
     * @param data
     */
    saveExternalPort(data: any): Promise<unknown>;
    /**
     * mongo-deploy
     * @param data
     */
    deploy(data: any): Promise<unknown>;
    /**
     * mongo-changeStatus
     * @param data
     */
    changeStatus(data: any): Promise<unknown>;
    /**
     * mongo-reload
     * @param data
     */
    reload(data: any): Promise<unknown>;
    /**
     * mongo-remove
     * @param data
     */
    remove(data: any): Promise<unknown>;
    /**
     * mongo-saveEnvironment
     * @param data
     */
    saveEnvironment(data: any): Promise<unknown>;
    /**
     * mongo-update
     * @param data
     */
    update(data: any): Promise<unknown>;
    /**
     * mongo-move
     * @param data
     */
    move(data: any): Promise<unknown>;
    /**
     * mongo-rebuild
     * @param data
     */
    rebuild(data: any): Promise<unknown>;
}
//# sourceMappingURL=Mongo.d.ts.map