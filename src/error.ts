/**
 * Custom error class for Dokploy API errors
 */
export class DokployError extends Error {
  constructor(
    public readonly code: string,
    message: string,
    public readonly issues?: { message: string }[]
  ) {
    super(message);
    this.name = 'DokployError';
    Object.setPrototypeOf(this, DokployError.prototype);
  }

  getFullMessage(): string {
    if (!this.issues || this.issues.length === 0) {
      return this.message;
    }
    const issuesText = this.issues.map(issue => `  - ${issue.message}`).join('\n');
    return `${this.message}\n${issuesText}`;
  }
}
