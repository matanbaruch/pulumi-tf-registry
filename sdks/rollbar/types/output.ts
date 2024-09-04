// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface GetProjectAccessTokensAccessToken {
    accessToken: string;
    curRateLimitWindowCount: number;
    curRateLimitWindowStart: number;
    dateCreated: number;
    dateModified: number;
    name: string;
    projectId: number;
    rateLimitWindowCount: number;
    rateLimitWindowSize: number;
    scopes: string[];
    status: string;
}

export interface GetProjectsProject {
    accountId: number;
    dateCreated: number;
    dateModified: number;
    id: number;
    name: string;
    status: string;
}

export interface IntegrationEmail {
    /**
     * Enabled
     */
    enabled: boolean;
    /**
     * Scrub params
     */
    scrubParams?: boolean;
}

export interface IntegrationPagerduty {
    /**
     * Enabled
     */
    enabled: boolean;
    /**
     * Service key
     */
    serviceKey: string;
}

export interface IntegrationSlack {
    /**
     * Channel
     */
    channel: string;
    /**
     * Enabled
     */
    enabled: boolean;
    /**
     * Service account ID
     */
    serviceAccountId: string;
    /**
     * Show message buttons
     */
    showMessageButtons?: boolean;
}

export interface IntegrationWebhook {
    /**
     * Enabled
     */
    enabled: boolean;
    /**
     * URL
     */
    url: string;
}

export interface NotificationConfig {
    /**
     * Channel (slack)
     */
    channel?: string;
    /**
     * Environments (email daily summary only)
     */
    environments?: string[];
    /**
     * Format (webhook)
     */
    format?: string;
    /**
     * Message template (slack)
     */
    messageTemplate?: string;
    /**
     * Min item level (email daily summary only)
     */
    minItemLevel?: string;
    /**
     * Send only if data (email daily summary only)
     */
    sendOnlyIfData?: boolean;
    /**
     * Service key (pagerduty)
     */
    serviceKey?: string;
    /**
     * Show message buttons (slack)
     */
    showMessageButtons?: boolean;
    /**
     * Summary Time (email daily summary only)
     */
    summaryTime?: number;
    /**
     * Teams (email)
     */
    teams?: string[];
    /**
     * URL (webhook)
     */
    url?: string;
    /**
     * Users (email)
     */
    users?: string[];
}

export interface NotificationRule {
    /**
     * Enabled
     */
    enabled?: boolean;
    /**
     * Filters
     */
    filters?: outputs.NotificationRuleFilter[];
    /**
     * Trigger
     */
    trigger: string;
}

export interface NotificationRuleFilter {
    /**
     * Count
     */
    count?: number;
    /**
     * Operation
     */
    operation?: string;
    /**
     * Path
     */
    path?: string;
    /**
     * Period
     */
    period?: number;
    /**
     * Type
     */
    type: string;
    /**
     * Value
     */
    value?: string;
}

