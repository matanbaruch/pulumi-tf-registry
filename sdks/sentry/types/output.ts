// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface DashboardWidget {
    displayType: string;
    id: string;
    interval: string;
    layout: outputs.DashboardWidgetLayout;
    limit: number;
    queries: outputs.DashboardWidgetQuery[];
    title: string;
    widgetType: string;
}

export interface DashboardWidgetLayout {
    h: number;
    minH: number;
    w: number;
    x: number;
    y: number;
}

export interface DashboardWidgetQuery {
    aggregates: string[];
    columns: string[];
    conditions: string;
    fieldAliases: string[];
    fields: string[];
    id: string;
    name?: string;
    orderBy: string;
}

export interface GetAllKeysKey {
    /**
     * Security header endpoint for features like CSP and Expect-CT reports.
     */
    dsnCsp: string;
    /**
     * The DSN tells the SDK where to send the events to.
     */
    dsnPublic: string;
    /**
     * Deprecated DSN includes a secret which is no longer required by newer SDK versions. If you are unsure which to use, follow installation instructions for your language.
     */
    dsnSecret: string;
    /**
     * The ID of this resource.
     */
    id: string;
    /**
     * The name of the client key.
     */
    name: string;
    /**
     * The slug of the organization the resource belongs to.
     */
    organization: string;
    /**
     * The slug of the project the resource belongs to.
     */
    project: string;
    /**
     * The ID of the project that the key belongs to.
     */
    projectId: string;
    /**
     * The public key.
     */
    public: string;
    /**
     * Number of events that can be reported within the rate limit window.
     */
    rateLimitCount: number;
    /**
     * Length of time that will be considered when checking the rate limit.
     */
    rateLimitWindow: number;
    /**
     * The secret key.
     */
    secret: string;
}

export interface GetAllProjectsProject {
    /**
     * The color of this project.
     */
    color: string;
    /**
     * The date this project was created.
     */
    dateCreated: string;
    /**
     * The features of this project.
     */
    features: string[];
    /**
     * The internal ID of this project.
     */
    internalId: string;
    /**
     * The name of this project.
     */
    name: string;
    /**
     * The platform of this project.
     */
    platform: string;
    /**
     * The slug of this project.
     */
    slug: string;
}

export interface GetDashboardWidget {
    displayType: string;
    id: string;
    interval: string;
    layouts: outputs.GetDashboardWidgetLayout[];
    limit: number;
    queries: outputs.GetDashboardWidgetQuery[];
    title: string;
    widgetType: string;
}

export interface GetDashboardWidgetLayout {
    h: number;
    minH: number;
    w: number;
    x: number;
    y: number;
}

export interface GetDashboardWidgetQuery {
    aggregates: string[];
    columns: string[];
    conditions: string;
    fieldAliases: string[];
    fields: string[];
    id: string;
    name: string;
    orderBy: string;
}

export interface GetMetricAlertTrigger {
    actions: outputs.GetMetricAlertTriggerAction[];
    alertThreshold: number;
    id: string;
    label: string;
    resolveThreshold: number;
    thresholdType: number;
}

export interface GetMetricAlertTriggerAction {
    id: string;
    inputChannelId: string;
    integrationId: number;
    targetIdentifier: string;
    targetType: string;
    type: string;
}

export interface MetricAlertTrigger {
    actions?: outputs.MetricAlertTriggerAction[];
    alertThreshold: number;
    id: string;
    label: string;
    resolveThreshold: number;
    thresholdType: number;
}

export interface MetricAlertTriggerAction {
    id: string;
    /**
     * Slack channel ID to avoid rate-limiting, see [here](https://docs.sentry.io/product/integrations/notification-incidents/slack/#rate-limiting-error)
     */
    inputChannelId?: string;
    integrationId?: number;
    targetIdentifier?: string;
    targetType: string;
    type: string;
}

export interface ProjectSymbolSourceLayout {
    /**
     * The casing of the symbol source layout. The layout of the folder structure. The options are: `default` - Default (mixed case), `uppercase` - Uppercase, `lowercase` - Lowercase.
     */
    casing: string;
    /**
     * The layout of the folder structure. The options are: `native` - Platform-Specific (SymStore / GDB / LLVM), `symstore` - Microsoft SymStore, `symstore_index2` - Microsoft SymStore (with index2.txt), `ssqp` - Microsoft SSQP, `unified` - Unified Symbol Server Layout, `debuginfod` - debuginfod.
     */
    type: string;
}

