/**
 * SSHKey API resource
 * Handles all sshKey-related operations
 */
export declare class SSHKey {
    private client;
    constructor(baseUrl: string, apiToken: string);
    /**
     * sshKey-create
     * @param data
     */
    create(data: any): Promise<unknown>;
    /**
     * sshKey-remove
     * @param data
     */
    remove(data: any): Promise<unknown>;
    /**
     * sshKey-one
     * @param query?
     */
    one(query?: any): Promise<unknown>;
    /**
     * sshKey-all
     * @param void
     */
    all(): Promise<unknown>;
    /**
     * sshKey-generate
     * @param data
     */
    generate(data: any): Promise<unknown>;
    /**
     * sshKey-update
     * @param data
     */
    update(data: any): Promise<unknown>;
}
//# sourceMappingURL=SSHKey.d.ts.map