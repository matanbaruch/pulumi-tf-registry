// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getMonitorNotificationChannelIbmFunction(args: GetMonitorNotificationChannelIbmFunctionArgs, opts?: pulumi.InvokeOptions): Promise<GetMonitorNotificationChannelIbmFunctionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("sysdig:index/getMonitorNotificationChannelIbmFunction:getMonitorNotificationChannelIbmFunction", {
        "enabled": args.enabled,
        "id": args.id,
        "name": args.name,
        "notifyWhenOk": args.notifyWhenOk,
        "notifyWhenResolved": args.notifyWhenResolved,
        "sendTestNotification": args.sendTestNotification,
        "shareWithCurrentTeam": args.shareWithCurrentTeam,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMonitorNotificationChannelIbmFunction.
 */
export interface GetMonitorNotificationChannelIbmFunctionArgs {
    enabled?: boolean;
    id?: string;
    name: string;
    notifyWhenOk?: boolean;
    notifyWhenResolved?: boolean;
    sendTestNotification?: boolean;
    shareWithCurrentTeam?: boolean;
    timeouts?: inputs.GetMonitorNotificationChannelIbmFunctionTimeouts;
}

/**
 * A collection of values returned by getMonitorNotificationChannelIbmFunction.
 */
export interface GetMonitorNotificationChannelIbmFunctionResult {
    readonly customData: {[key: string]: string};
    readonly enabled?: boolean;
    readonly iamApiKey: string;
    readonly ibmFunctionType: string;
    readonly id: string;
    readonly name: string;
    readonly notifyWhenOk?: boolean;
    readonly notifyWhenResolved?: boolean;
    readonly sendTestNotification?: boolean;
    readonly shareWithCurrentTeam?: boolean;
    readonly timeouts?: outputs.GetMonitorNotificationChannelIbmFunctionTimeouts;
    readonly url: string;
    readonly version: number;
    readonly whiskAuthToken: string;
}
export function getMonitorNotificationChannelIbmFunctionOutput(args: GetMonitorNotificationChannelIbmFunctionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMonitorNotificationChannelIbmFunctionResult> {
    return pulumi.output(args).apply((a: any) => getMonitorNotificationChannelIbmFunction(a, opts))
}

/**
 * A collection of arguments for invoking getMonitorNotificationChannelIbmFunction.
 */
export interface GetMonitorNotificationChannelIbmFunctionOutputArgs {
    enabled?: pulumi.Input<boolean>;
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    notifyWhenOk?: pulumi.Input<boolean>;
    notifyWhenResolved?: pulumi.Input<boolean>;
    sendTestNotification?: pulumi.Input<boolean>;
    shareWithCurrentTeam?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.GetMonitorNotificationChannelIbmFunctionTimeoutsArgs>;
}
