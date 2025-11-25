/**
 * Security API resource
 * Handles all security-related operations
 */
export declare class Security {
    private client;
    constructor(baseUrl: string, apiToken: string);
    /**
     * security-create
     * @param data
     */
    create(data: any): Promise<unknown>;
    /**
     * security-one
     * @param query?
     */
    one(query?: any): Promise<unknown>;
    /**
     * security-delete
     * @param data
     */
    delete(data: any): Promise<unknown>;
    /**
     * security-update
     * @param data
     */
    update(data: any): Promise<unknown>;
}
//# sourceMappingURL=Security.d.ts.map