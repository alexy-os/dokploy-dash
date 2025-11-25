/**
 * Notification API resource
 * Handles all notification-related operations
 */
export declare class Notification {
    private client;
    constructor(baseUrl: string, apiToken: string);
    /**
     * notification-createSlack
     * @param data
     */
    createSlack(data: any): Promise<unknown>;
    /**
     * notification-updateSlack
     * @param data
     */
    updateSlack(data: any): Promise<unknown>;
    /**
     * notification-testSlackConnection
     * @param data
     */
    testSlackConnection(data: any): Promise<unknown>;
    /**
     * notification-createTelegram
     * @param data
     */
    createTelegram(data: any): Promise<unknown>;
    /**
     * notification-updateTelegram
     * @param data
     */
    updateTelegram(data: any): Promise<unknown>;
    /**
     * notification-testTelegramConnection
     * @param data
     */
    testTelegramConnection(data: any): Promise<unknown>;
    /**
     * notification-createDiscord
     * @param data
     */
    createDiscord(data: any): Promise<unknown>;
    /**
     * notification-updateDiscord
     * @param data
     */
    updateDiscord(data: any): Promise<unknown>;
    /**
     * notification-testDiscordConnection
     * @param data
     */
    testDiscordConnection(data: any): Promise<unknown>;
    /**
     * notification-createEmail
     * @param data
     */
    createEmail(data: any): Promise<unknown>;
    /**
     * notification-updateEmail
     * @param data
     */
    updateEmail(data: any): Promise<unknown>;
    /**
     * notification-testEmailConnection
     * @param data
     */
    testEmailConnection(data: any): Promise<unknown>;
    /**
     * notification-remove
     * @param data
     */
    remove(data: any): Promise<unknown>;
    /**
     * notification-one
     * @param query?
     */
    one(query?: any): Promise<unknown>;
    /**
     * notification-all
     * @param void
     */
    all(): Promise<unknown>;
    /**
     * notification-receiveNotification
     * @param data
     */
    receiveNotification(data: any): Promise<unknown>;
    /**
     * notification-createGotify
     * @param data
     */
    createGotify(data: any): Promise<unknown>;
    /**
     * notification-updateGotify
     * @param data
     */
    updateGotify(data: any): Promise<unknown>;
    /**
     * notification-testGotifyConnection
     * @param data
     */
    testGotifyConnection(data: any): Promise<unknown>;
    /**
     * notification-createNtfy
     * @param data
     */
    createNtfy(data: any): Promise<unknown>;
    /**
     * notification-updateNtfy
     * @param data
     */
    updateNtfy(data: any): Promise<unknown>;
    /**
     * notification-testNtfyConnection
     * @param data
     */
    testNtfyConnection(data: any): Promise<unknown>;
    /**
     * notification-createLark
     * @param data
     */
    createLark(data: any): Promise<unknown>;
    /**
     * notification-updateLark
     * @param data
     */
    updateLark(data: any): Promise<unknown>;
    /**
     * notification-testLarkConnection
     * @param data
     */
    testLarkConnection(data: any): Promise<unknown>;
    /**
     * notification-getEmailProviders
     * @param void
     */
    getEmailProviders(): Promise<unknown>;
}
//# sourceMappingURL=Notification.d.ts.map