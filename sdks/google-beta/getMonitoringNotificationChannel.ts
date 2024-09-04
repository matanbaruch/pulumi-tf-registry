// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getMonitoringNotificationChannel(args?: GetMonitoringNotificationChannelArgs, opts?: pulumi.InvokeOptions): Promise<GetMonitoringNotificationChannelResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google-beta:index/getMonitoringNotificationChannel:getMonitoringNotificationChannel", {
        "displayName": args.displayName,
        "id": args.id,
        "labels": args.labels,
        "project": args.project,
        "type": args.type,
        "userLabels": args.userLabels,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMonitoringNotificationChannel.
 */
export interface GetMonitoringNotificationChannelArgs {
    displayName?: string;
    id?: string;
    labels?: {[key: string]: string};
    project?: string;
    type?: string;
    userLabels?: {[key: string]: string};
}

/**
 * A collection of values returned by getMonitoringNotificationChannel.
 */
export interface GetMonitoringNotificationChannelResult {
    readonly description: string;
    readonly displayName?: string;
    readonly enabled: boolean;
    readonly forceDelete: boolean;
    readonly id: string;
    readonly labels?: {[key: string]: string};
    readonly name: string;
    readonly project?: string;
    readonly sensitiveLabels: outputs.GetMonitoringNotificationChannelSensitiveLabel[];
    readonly type?: string;
    readonly userLabels?: {[key: string]: string};
    readonly verificationStatus: string;
}
export function getMonitoringNotificationChannelOutput(args?: GetMonitoringNotificationChannelOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMonitoringNotificationChannelResult> {
    return pulumi.output(args).apply((a: any) => getMonitoringNotificationChannel(a, opts))
}

/**
 * A collection of arguments for invoking getMonitoringNotificationChannel.
 */
export interface GetMonitoringNotificationChannelOutputArgs {
    displayName?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    project?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
    userLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
