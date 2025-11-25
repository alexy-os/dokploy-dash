/**
 * Custom error class for Dokploy API errors
 */
export declare class DokployError extends Error {
    readonly code: string;
    readonly issues?: {
        message: string;
    }[] | undefined;
    constructor(code: string, message: string, issues?: {
        message: string;
    }[] | undefined);
    getFullMessage(): string;
}
//# sourceMappingURL=error.d.ts.map