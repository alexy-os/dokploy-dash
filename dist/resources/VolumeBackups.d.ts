/**
 * VolumeBackups API resource
 * Handles all volumeBackups-related operations
 */
export declare class VolumeBackups {
    private client;
    constructor(baseUrl: string, apiToken: string);
    /**
     * volumeBackups-list
     * @param query?
     */
    list(query?: any): Promise<unknown>;
    /**
     * volumeBackups-create
     * @param data
     */
    create(data: any): Promise<unknown>;
    /**
     * volumeBackups-one
     * @param query?
     */
    one(query?: any): Promise<unknown>;
    /**
     * volumeBackups-delete
     * @param data
     */
    delete(data: any): Promise<unknown>;
    /**
     * volumeBackups-update
     * @param data
     */
    update(data: any): Promise<unknown>;
    /**
     * volumeBackups-runManually
     * @param data
     */
    runManually(data: any): Promise<unknown>;
}
//# sourceMappingURL=VolumeBackups.d.ts.map