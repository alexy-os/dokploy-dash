/**
 * Postgres API resource
 * Handles all postgres-related operations
 */
export declare class Postgres {
    private client;
    constructor(baseUrl: string, apiToken: string);
    /**
     * postgres-create
     * @param data
     */
    create(data: any): Promise<unknown>;
    /**
     * postgres-one
     * @param query?
     */
    one(query?: any): Promise<unknown>;
    /**
     * postgres-start
     * @param data
     */
    start(data: any): Promise<unknown>;
    /**
     * postgres-stop
     * @param data
     */
    stop(data: any): Promise<unknown>;
    /**
     * postgres-saveExternalPort
     * @param data
     */
    saveExternalPort(data: any): Promise<unknown>;
    /**
     * postgres-deploy
     * @param data
     */
    deploy(data: any): Promise<unknown>;
    /**
     * postgres-changeStatus
     * @param data
     */
    changeStatus(data: any): Promise<unknown>;
    /**
     * postgres-remove
     * @param data
     */
    remove(data: any): Promise<unknown>;
    /**
     * postgres-saveEnvironment
     * @param data
     */
    saveEnvironment(data: any): Promise<unknown>;
    /**
     * postgres-reload
     * @param data
     */
    reload(data: any): Promise<unknown>;
    /**
     * postgres-update
     * @param data
     */
    update(data: any): Promise<unknown>;
    /**
     * postgres-move
     * @param data
     */
    move(data: any): Promise<unknown>;
    /**
     * postgres-rebuild
     * @param data
     */
    rebuild(data: any): Promise<unknown>;
}
//# sourceMappingURL=Postgres.d.ts.map