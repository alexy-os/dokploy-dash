/**
 * Domain API resource
 * Handles all domain-related operations
 */
export declare class Domain {
    private client;
    constructor(baseUrl: string, apiToken: string);
    /**
     * domain-create
     * @param data
     */
    create(data: any): Promise<unknown>;
    /**
     * domain-byApplicationId
     * @param query?
     */
    byApplicationId(query?: any): Promise<unknown>;
    /**
     * domain-byComposeId
     * @param query?
     */
    byComposeId(query?: any): Promise<unknown>;
    /**
     * domain-generateDomain
     * @param data
     */
    generateDomain(data: any): Promise<unknown>;
    /**
     * domain-canGenerateTraefikMeDomains
     * @param query?
     */
    canGenerateTraefikMeDomains(query?: any): Promise<unknown>;
    /**
     * domain-update
     * @param data
     */
    update(data: any): Promise<unknown>;
    /**
     * domain-one
     * @param query?
     */
    one(query?: any): Promise<unknown>;
    /**
     * domain-delete
     * @param data
     */
    delete(data: any): Promise<unknown>;
    /**
     * domain-validateDomain
     * @param data
     */
    validateDomain(data: any): Promise<unknown>;
}
//# sourceMappingURL=Domain.d.ts.map