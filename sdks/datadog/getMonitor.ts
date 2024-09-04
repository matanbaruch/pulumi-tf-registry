// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getMonitor(args?: GetMonitorArgs, opts?: pulumi.InvokeOptions): Promise<GetMonitorResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("datadog:index/getMonitor:getMonitor", {
        "id": args.id,
        "monitorTagsFilters": args.monitorTagsFilters,
        "nameFilter": args.nameFilter,
        "tagsFilters": args.tagsFilters,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMonitor.
 */
export interface GetMonitorArgs {
    id?: string;
    monitorTagsFilters?: string[];
    nameFilter?: string;
    tagsFilters?: string[];
}

/**
 * A collection of values returned by getMonitor.
 */
export interface GetMonitorResult {
    readonly enableLogsSample: boolean;
    readonly enableSamples: boolean;
    readonly escalationMessage: string;
    readonly evaluationDelay: number;
    readonly groupRetentionDuration: string;
    readonly groupbySimpleMonitor: boolean;
    readonly id: string;
    readonly includeTags: boolean;
    readonly locked: boolean;
    readonly message: string;
    readonly monitorTagsFilters?: string[];
    readonly monitorThresholdWindows: outputs.GetMonitorMonitorThresholdWindow[];
    readonly monitorThresholds: outputs.GetMonitorMonitorThreshold[];
    readonly name: string;
    readonly nameFilter?: string;
    readonly newGroupDelay: number;
    readonly newHostDelay: number;
    readonly noDataTimeframe: number;
    readonly notificationPresetName: string;
    readonly notifyAudit: boolean;
    readonly notifyBies: string[];
    readonly notifyNoData: boolean;
    readonly onMissingData: string;
    readonly query: string;
    readonly renotifyInterval: number;
    readonly renotifyOccurrences: number;
    readonly renotifyStatuses: string[];
    readonly requireFullWindow: boolean;
    readonly restrictedRoles: string[];
    readonly schedulingOptions: outputs.GetMonitorSchedulingOption[];
    readonly tags: string[];
    readonly tagsFilters?: string[];
    readonly timeoutH: number;
    readonly type: string;
}
export function getMonitorOutput(args?: GetMonitorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMonitorResult> {
    return pulumi.output(args).apply((a: any) => getMonitor(a, opts))
}

/**
 * A collection of arguments for invoking getMonitor.
 */
export interface GetMonitorOutputArgs {
    id?: pulumi.Input<string>;
    monitorTagsFilters?: pulumi.Input<pulumi.Input<string>[]>;
    nameFilter?: pulumi.Input<string>;
    tagsFilters?: pulumi.Input<pulumi.Input<string>[]>;
}
