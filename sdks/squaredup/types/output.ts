// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface GetAlertingChannelTypesAlertingChannelType {
    channelId: string;
    description: string;
    displayName: string;
    imagePreviewSupported: boolean;
    protocol: string;
}

export interface GetDataStreamsDataStream {
    dataSourceName: string;
    definitionName: string;
    displayName: string;
    id: string;
}

export interface GetDatasourcesPlugin {
    displayName: string;
    id: string;
    onPrem: boolean;
    version: string;
}

export interface GetNodesNodeProperty {
    displayName: string;
    id: string;
    sourceId: string;
    sourceName: string;
    type: string;
}

export interface WorkspaceAlertAlertingRule {
    /**
     * The ID of the channel to send the alert to
     */
    channel: string;
    /**
     * Condition to trigger the alert. Must be one of: 'workspace_state', 'all_monitors', or 'selected_monitors'
     */
    notifyOn: string;
    /**
     * Whether to include a preview image in the alert
     */
    previewImage: boolean;
    /**
     * The monitors to trigger the alert on. Required if notify_on is 'selected_monitors'
     */
    selectedMonitors?: outputs.WorkspaceAlertAlertingRuleSelectedMonitor[];
}

export interface WorkspaceAlertAlertingRuleSelectedMonitor {
    /**
     * The ID of the dashboard where the monitor is configured
     */
    dashboardId: string;
    /**
     * The ID of the tiles to trigger the alert on
     */
    tilesIds: string[];
}

