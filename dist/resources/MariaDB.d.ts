/**
 * MariaDB API resource
 * Handles all mariadb-related operations
 */
export declare class MariaDB {
    private client;
    constructor(baseUrl: string, apiToken: string);
    /**
     * mariadb-create
     * @param data
     */
    create(data: any): Promise<unknown>;
    /**
     * mariadb-one
     * @param query?
     */
    one(query?: any): Promise<unknown>;
    /**
     * mariadb-start
     * @param data
     */
    start(data: any): Promise<unknown>;
    /**
     * mariadb-stop
     * @param data
     */
    stop(data: any): Promise<unknown>;
    /**
     * mariadb-saveExternalPort
     * @param data
     */
    saveExternalPort(data: any): Promise<unknown>;
    /**
     * mariadb-deploy
     * @param data
     */
    deploy(data: any): Promise<unknown>;
    /**
     * mariadb-changeStatus
     * @param data
     */
    changeStatus(data: any): Promise<unknown>;
    /**
     * mariadb-remove
     * @param data
     */
    remove(data: any): Promise<unknown>;
    /**
     * mariadb-saveEnvironment
     * @param data
     */
    saveEnvironment(data: any): Promise<unknown>;
    /**
     * mariadb-reload
     * @param data
     */
    reload(data: any): Promise<unknown>;
    /**
     * mariadb-update
     * @param data
     */
    update(data: any): Promise<unknown>;
    /**
     * mariadb-move
     * @param data
     */
    move(data: any): Promise<unknown>;
    /**
     * mariadb-rebuild
     * @param data
     */
    rebuild(data: any): Promise<unknown>;
}
//# sourceMappingURL=MariaDB.d.ts.map