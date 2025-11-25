/**
 * Environment API resource
 * Handles all environment-related operations
 */
export declare class Environment {
    private client;
    constructor(baseUrl: string, apiToken: string);
    /**
     * environment-create
     * @param data
     */
    create(data: any): Promise<unknown>;
    /**
     * environment-one
     * @param query?
     */
    one(query?: any): Promise<unknown>;
    /**
     * environment-byProjectId
     * @param query?
     */
    byProjectId(query?: any): Promise<unknown>;
    /**
     * environment-remove
     * @param data
     */
    remove(data: any): Promise<unknown>;
    /**
     * environment-update
     * @param data
     */
    update(data: any): Promise<unknown>;
    /**
     * environment-duplicate
     * @param data
     */
    duplicate(data: any): Promise<unknown>;
}
//# sourceMappingURL=Environment.d.ts.map