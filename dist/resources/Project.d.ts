/**
 * Project API resource
 * Handles all project-related operations
 */
export declare class Project {
    private client;
    constructor(baseUrl: string, apiToken: string);
    /**
     * project-create
     * @param data
     */
    create(data: any): Promise<unknown>;
    /**
     * project-one
     * @param query?
     */
    one(query?: any): Promise<unknown>;
    /**
     * project-all
     * @param void
     */
    all(): Promise<unknown>;
    /**
     * project-remove
     * @param data
     */
    remove(data: any): Promise<unknown>;
    /**
     * project-update
     * @param data
     */
    update(data: any): Promise<unknown>;
    /**
     * project-duplicate
     * @param data
     */
    duplicate(data: any): Promise<unknown>;
}
//# sourceMappingURL=Project.d.ts.map