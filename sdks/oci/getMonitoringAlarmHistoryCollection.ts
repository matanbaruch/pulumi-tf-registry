// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getMonitoringAlarmHistoryCollection(args: GetMonitoringAlarmHistoryCollectionArgs, opts?: pulumi.InvokeOptions): Promise<GetMonitoringAlarmHistoryCollectionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getMonitoringAlarmHistoryCollection:getMonitoringAlarmHistoryCollection", {
        "alarmHistorytype": args.alarmHistorytype,
        "alarmId": args.alarmId,
        "id": args.id,
        "timestampGreaterThanOrEqualTo": args.timestampGreaterThanOrEqualTo,
        "timestampLessThan": args.timestampLessThan,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMonitoringAlarmHistoryCollection.
 */
export interface GetMonitoringAlarmHistoryCollectionArgs {
    alarmHistorytype?: string;
    alarmId: string;
    id?: string;
    timestampGreaterThanOrEqualTo?: string;
    timestampLessThan?: string;
}

/**
 * A collection of values returned by getMonitoringAlarmHistoryCollection.
 */
export interface GetMonitoringAlarmHistoryCollectionResult {
    readonly alarmHistorytype?: string;
    readonly alarmId: string;
    readonly entries: outputs.GetMonitoringAlarmHistoryCollectionEntry[];
    readonly id: string;
    readonly isEnabled: boolean;
    readonly timestampGreaterThanOrEqualTo?: string;
    readonly timestampLessThan?: string;
}
export function getMonitoringAlarmHistoryCollectionOutput(args: GetMonitoringAlarmHistoryCollectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMonitoringAlarmHistoryCollectionResult> {
    return pulumi.output(args).apply((a: any) => getMonitoringAlarmHistoryCollection(a, opts))
}

/**
 * A collection of arguments for invoking getMonitoringAlarmHistoryCollection.
 */
export interface GetMonitoringAlarmHistoryCollectionOutputArgs {
    alarmHistorytype?: pulumi.Input<string>;
    alarmId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    timestampGreaterThanOrEqualTo?: pulumi.Input<string>;
    timestampLessThan?: pulumi.Input<string>;
}
