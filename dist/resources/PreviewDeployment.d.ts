/**
 * PreviewDeployment API resource
 * Handles all previewDeployment-related operations
 */
export declare class PreviewDeployment {
    private client;
    constructor(baseUrl: string, apiToken: string);
    /**
     * previewDeployment-all
     * @param query?
     */
    all(query?: any): Promise<unknown>;
    /**
     * previewDeployment-delete
     * @param data
     */
    delete(data: any): Promise<unknown>;
    /**
     * previewDeployment-one
     * @param query?
     */
    one(query?: any): Promise<unknown>;
}
//# sourceMappingURL=PreviewDeployment.d.ts.map