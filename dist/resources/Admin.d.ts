/**
 * Admin API resource
 * Handles all admin-related operations
 */
export declare class Admin {
    private client;
    constructor(baseUrl: string, apiToken: string);
    /**
     * admin-setupMonitoring
     * @param data
     */
    setupMonitoring(data: any): Promise<unknown>;
}
//# sourceMappingURL=Admin.d.ts.map