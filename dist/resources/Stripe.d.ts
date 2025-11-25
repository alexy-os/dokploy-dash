/**
 * Stripe API resource
 * Handles all stripe-related operations
 */
export declare class Stripe {
    private client;
    constructor(baseUrl: string, apiToken: string);
    /**
     * stripe-getProducts
     * @param void
     */
    getProducts(): Promise<unknown>;
    /**
     * stripe-createCheckoutSession
     * @param data
     */
    createCheckoutSession(data: any): Promise<unknown>;
    /**
     * stripe-createCustomerPortalSession
     * @param void
     */
    createCustomerPortalSession(): Promise<unknown>;
    /**
     * stripe-canCreateMoreServers
     * @param void
     */
    canCreateMoreServers(): Promise<unknown>;
}
//# sourceMappingURL=Stripe.d.ts.map