/**
 * Rollback API resource
 * Handles all rollback-related operations
 */
export declare class Rollback {
    private client;
    constructor(baseUrl: string, apiToken: string);
    /**
     * rollback-delete
     * @param data
     */
    delete(data: any): Promise<unknown>;
    /**
     * rollback-rollback
     * @param data
     */
    rollback(data: any): Promise<unknown>;
}
//# sourceMappingURL=Rollback.d.ts.map