/**
 * Mounts API resource
 * Handles all mounts-related operations
 */
export declare class Mounts {
    private client;
    constructor(baseUrl: string, apiToken: string);
    /**
     * mounts-create
     * @param data
     */
    create(data: any): Promise<unknown>;
    /**
     * mounts-remove
     * @param data
     */
    remove(data: any): Promise<unknown>;
    /**
     * mounts-one
     * @param query?
     */
    one(query?: any): Promise<unknown>;
    /**
     * mounts-update
     * @param data
     */
    update(data: any): Promise<unknown>;
    /**
     * mounts-allNamedByApplicationId
     * @param query?
     */
    allNamedByApplicationId(query?: any): Promise<unknown>;
}
//# sourceMappingURL=Mounts.d.ts.map