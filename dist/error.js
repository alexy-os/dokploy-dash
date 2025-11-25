/**
 * Custom error class for Dokploy API errors
 */
export class DokployError extends Error {
    code;
    issues;
    constructor(code, message, issues) {
        super(message);
        this.code = code;
        this.issues = issues;
        this.name = 'DokployError';
        Object.setPrototypeOf(this, DokployError.prototype);
    }
    getFullMessage() {
        if (!this.issues || this.issues.length === 0) {
            return this.message;
        }
        const issuesText = this.issues.map(issue => `  - ${issue.message}`).join('\n');
        return `${this.message}\n${issuesText}`;
    }
}
//# sourceMappingURL=error.js.map