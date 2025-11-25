/**
 * Redirects API resource
 * Handles all redirects-related operations
 */
export declare class Redirects {
    private client;
    constructor(baseUrl: string, apiToken: string);
    /**
     * redirects-create
     * @param data
     */
    create(data: any): Promise<unknown>;
    /**
     * redirects-one
     * @param query?
     */
    one(query?: any): Promise<unknown>;
    /**
     * redirects-delete
     * @param data
     */
    delete(data: any): Promise<unknown>;
    /**
     * redirects-update
     * @param data
     */
    update(data: any): Promise<unknown>;
}
//# sourceMappingURL=Redirects.d.ts.map