/**
 * Organization API resource
 * Handles all organization-related operations
 */
export declare class Organization {
    private client;
    constructor(baseUrl: string, apiToken: string);
    /**
     * organization-create
     * @param data
     */
    create(data: any): Promise<unknown>;
    /**
     * organization-all
     * @param void
     */
    all(): Promise<unknown>;
    /**
     * organization-one
     * @param query?
     */
    one(query?: any): Promise<unknown>;
    /**
     * organization-update
     * @param data
     */
    update(data: any): Promise<unknown>;
    /**
     * organization-delete
     * @param data
     */
    delete(data: any): Promise<unknown>;
    /**
     * organization-allInvitations
     * @param void
     */
    allInvitations(): Promise<unknown>;
    /**
     * organization-removeInvitation
     * @param data
     */
    removeInvitation(data: any): Promise<unknown>;
    /**
     * organization-setDefault
     * @param data
     */
    setDefault(data: any): Promise<unknown>;
}
//# sourceMappingURL=Organization.d.ts.map