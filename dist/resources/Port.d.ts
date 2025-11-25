/**
 * Port API resource
 * Handles all port-related operations
 */
export declare class Port {
    private client;
    constructor(baseUrl: string, apiToken: string);
    /**
     * port-create
     * @param data
     */
    create(data: any): Promise<unknown>;
    /**
     * port-one
     * @param query?
     */
    one(query?: any): Promise<unknown>;
    /**
     * port-delete
     * @param data
     */
    delete(data: any): Promise<unknown>;
    /**
     * port-update
     * @param data
     */
    update(data: any): Promise<unknown>;
}
//# sourceMappingURL=Port.d.ts.map