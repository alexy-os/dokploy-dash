/**
 * Certificates API resource
 * Handles all certificates-related operations
 */
export declare class Certificates {
    private client;
    constructor(baseUrl: string, apiToken: string);
    /**
     * certificates-create
     * @param data
     */
    create(data: any): Promise<unknown>;
    /**
     * certificates-one
     * @param query?
     */
    one(query?: any): Promise<unknown>;
    /**
     * certificates-remove
     * @param data
     */
    remove(data: any): Promise<unknown>;
    /**
     * certificates-all
     * @param void
     */
    all(): Promise<unknown>;
}
//# sourceMappingURL=Certificates.d.ts.map