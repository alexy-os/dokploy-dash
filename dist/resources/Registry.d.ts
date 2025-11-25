/**
 * Registry API resource
 * Handles all registry-related operations
 */
export declare class Registry {
    private client;
    constructor(baseUrl: string, apiToken: string);
    /**
     * registry-create
     * @param data
     */
    create(data: any): Promise<unknown>;
    /**
     * registry-remove
     * @param data
     */
    remove(data: any): Promise<unknown>;
    /**
     * registry-update
     * @param data
     */
    update(data: any): Promise<unknown>;
    /**
     * registry-all
     * @param void
     */
    all(): Promise<unknown>;
    /**
     * registry-one
     * @param query?
     */
    one(query?: any): Promise<unknown>;
    /**
     * registry-testRegistry
     * @param data
     */
    testRegistry(data: any): Promise<unknown>;
}
//# sourceMappingURL=Registry.d.ts.map