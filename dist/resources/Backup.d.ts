/**
 * Backup API resource
 * Handles all backup-related operations
 */
export declare class Backup {
    private client;
    constructor(baseUrl: string, apiToken: string);
    /**
     * backup-create
     * @param data
     */
    create(data: any): Promise<unknown>;
    /**
     * backup-one
     * @param query?
     */
    one(query?: any): Promise<unknown>;
    /**
     * backup-update
     * @param data
     */
    update(data: any): Promise<unknown>;
    /**
     * backup-remove
     * @param data
     */
    remove(data: any): Promise<unknown>;
    /**
     * backup-manualBackupPostgres
     * @param data
     */
    manualBackupPostgres(data: any): Promise<unknown>;
    /**
     * backup-manualBackupMySql
     * @param data
     */
    manualBackupMySql(data: any): Promise<unknown>;
    /**
     * backup-manualBackupMariadb
     * @param data
     */
    manualBackupMariadb(data: any): Promise<unknown>;
    /**
     * backup-manualBackupCompose
     * @param data
     */
    manualBackupCompose(data: any): Promise<unknown>;
    /**
     * backup-manualBackupMongo
     * @param data
     */
    manualBackupMongo(data: any): Promise<unknown>;
    /**
     * backup-manualBackupWebServer
     * @param data
     */
    manualBackupWebServer(data: any): Promise<unknown>;
    /**
     * backup-listBackupFiles
     * @param query?
     */
    listBackupFiles(query?: any): Promise<unknown>;
}
//# sourceMappingURL=Backup.d.ts.map