/**
 * GitProvider API resource
 * Handles all gitProvider-related operations
 */
export declare class GitProvider {
    private client;
    constructor(baseUrl: string, apiToken: string);
    /**
     * gitProvider-getAll
     * @param void
     */
    getAll(): Promise<unknown>;
    /**
     * gitProvider-remove
     * @param data
     */
    remove(data: any): Promise<unknown>;
}
//# sourceMappingURL=GitProvider.d.ts.map