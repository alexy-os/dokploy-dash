/**
 * Swarm API resource
 * Handles all swarm-related operations
 */
export declare class Swarm {
    private client;
    constructor(baseUrl: string, apiToken: string);
    /**
     * swarm-getNodes
     * @param query?
     */
    getNodes(query?: any): Promise<unknown>;
    /**
     * swarm-getNodeInfo
     * @param query?
     */
    getNodeInfo(query?: any): Promise<unknown>;
    /**
     * swarm-getNodeApps
     * @param query?
     */
    getNodeApps(query?: any): Promise<unknown>;
}
//# sourceMappingURL=Swarm.d.ts.map