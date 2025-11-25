/**
 * AI API resource
 * Handles all ai-related operations
 */
export declare class AI {
    private client;
    constructor(baseUrl: string, apiToken: string);
    /**
     * ai-one
     * @param query?
     */
    one(query?: any): Promise<unknown>;
    /**
     * ai-getModels
     * @param query?
     */
    getModels(query?: any): Promise<unknown>;
    /**
     * ai-create
     * @param data
     */
    create(data: any): Promise<unknown>;
    /**
     * ai-update
     * @param data
     */
    update(data: any): Promise<unknown>;
    /**
     * ai-getAll
     * @param void
     */
    getAll(): Promise<unknown>;
    /**
     * ai-get
     * @param query?
     */
    get(query?: any): Promise<unknown>;
    /**
     * ai-delete
     * @param data
     */
    delete(data: any): Promise<unknown>;
    /**
     * ai-suggest
     * @param data
     */
    suggest(data: any): Promise<unknown>;
    /**
     * ai-deploy
     * @param data
     */
    deploy(data: any): Promise<unknown>;
}
//# sourceMappingURL=AI.d.ts.map