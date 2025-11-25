/**
 * Destination API resource
 * Handles all destination-related operations
 */
export declare class Destination {
    private client;
    constructor(baseUrl: string, apiToken: string);
    /**
     * destination-create
     * @param data
     */
    create(data: any): Promise<unknown>;
    /**
     * destination-testConnection
     * @param data
     */
    testConnection(data: any): Promise<unknown>;
    /**
     * destination-one
     * @param query?
     */
    one(query?: any): Promise<unknown>;
    /**
     * destination-all
     * @param void
     */
    all(): Promise<unknown>;
    /**
     * destination-remove
     * @param data
     */
    remove(data: any): Promise<unknown>;
    /**
     * destination-update
     * @param data
     */
    update(data: any): Promise<unknown>;
}
//# sourceMappingURL=Destination.d.ts.map