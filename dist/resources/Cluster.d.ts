/**
 * Cluster API resource
 * Handles all cluster-related operations
 */
export declare class Cluster {
    private client;
    constructor(baseUrl: string, apiToken: string);
    /**
     * cluster-getNodes
     * @param query?
     */
    getNodes(query?: any): Promise<unknown>;
    /**
     * cluster-removeWorker
     * @param data
     */
    removeWorker(data: any): Promise<unknown>;
    /**
     * cluster-addWorker
     * @param query?
     */
    addWorker(query?: any): Promise<unknown>;
    /**
     * cluster-addManager
     * @param query?
     */
    addManager(query?: any): Promise<unknown>;
}
//# sourceMappingURL=Cluster.d.ts.map