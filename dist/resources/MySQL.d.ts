/**
 * MySQL API resource
 * Handles all mysql-related operations
 */
export declare class MySQL {
    private client;
    constructor(baseUrl: string, apiToken: string);
    /**
     * mysql-create
     * @param data
     */
    create(data: any): Promise<unknown>;
    /**
     * mysql-one
     * @param query?
     */
    one(query?: any): Promise<unknown>;
    /**
     * mysql-start
     * @param data
     */
    start(data: any): Promise<unknown>;
    /**
     * mysql-stop
     * @param data
     */
    stop(data: any): Promise<unknown>;
    /**
     * mysql-saveExternalPort
     * @param data
     */
    saveExternalPort(data: any): Promise<unknown>;
    /**
     * mysql-deploy
     * @param data
     */
    deploy(data: any): Promise<unknown>;
    /**
     * mysql-changeStatus
     * @param data
     */
    changeStatus(data: any): Promise<unknown>;
    /**
     * mysql-reload
     * @param data
     */
    reload(data: any): Promise<unknown>;
    /**
     * mysql-remove
     * @param data
     */
    remove(data: any): Promise<unknown>;
    /**
     * mysql-saveEnvironment
     * @param data
     */
    saveEnvironment(data: any): Promise<unknown>;
    /**
     * mysql-update
     * @param data
     */
    update(data: any): Promise<unknown>;
    /**
     * mysql-move
     * @param data
     */
    move(data: any): Promise<unknown>;
    /**
     * mysql-rebuild
     * @param data
     */
    rebuild(data: any): Promise<unknown>;
}
//# sourceMappingURL=MySQL.d.ts.map