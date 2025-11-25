/**
 * Schedule API resource
 * Handles all schedule-related operations
 */
export declare class Schedule {
    private client;
    constructor(baseUrl: string, apiToken: string);
    /**
     * schedule-create
     * @param data
     */
    create(data: any): Promise<unknown>;
    /**
     * schedule-update
     * @param data
     */
    update(data: any): Promise<unknown>;
    /**
     * schedule-delete
     * @param data
     */
    delete(data: any): Promise<unknown>;
    /**
     * schedule-list
     * @param query?
     */
    list(query?: any): Promise<unknown>;
    /**
     * schedule-one
     * @param query?
     */
    one(query?: any): Promise<unknown>;
    /**
     * schedule-runManually
     * @param data
     */
    runManually(data: any): Promise<unknown>;
}
//# sourceMappingURL=Schedule.d.ts.map