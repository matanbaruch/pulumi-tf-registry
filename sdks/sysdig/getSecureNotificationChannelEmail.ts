// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSecureNotificationChannelEmail(args: GetSecureNotificationChannelEmailArgs, opts?: pulumi.InvokeOptions): Promise<GetSecureNotificationChannelEmailResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("sysdig:index/getSecureNotificationChannelEmail:getSecureNotificationChannelEmail", {
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
 * A collection of arguments for invoking getSecureNotificationChannelEmail.
 */
export interface GetSecureNotificationChannelEmailArgs {
    enabled?: boolean;
    id?: string;
    name: string;
    notifyWhenOk?: boolean;
    notifyWhenResolved?: boolean;
    sendTestNotification?: boolean;
    shareWithCurrentTeam?: boolean;
    timeouts?: inputs.GetSecureNotificationChannelEmailTimeouts;
}

/**
 * A collection of values returned by getSecureNotificationChannelEmail.
 */
export interface GetSecureNotificationChannelEmailResult {
    readonly enabled?: boolean;
    readonly id: string;
    readonly name: string;
    readonly notifyWhenOk?: boolean;
    readonly notifyWhenResolved?: boolean;
    readonly recipients: string[];
    readonly sendTestNotification?: boolean;
    readonly shareWithCurrentTeam?: boolean;
    readonly timeouts?: outputs.GetSecureNotificationChannelEmailTimeouts;
    readonly version: number;
}
export function getSecureNotificationChannelEmailOutput(args: GetSecureNotificationChannelEmailOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSecureNotificationChannelEmailResult> {
    return pulumi.output(args).apply((a: any) => getSecureNotificationChannelEmail(a, opts))
}

/**
 * A collection of arguments for invoking getSecureNotificationChannelEmail.
 */
export interface GetSecureNotificationChannelEmailOutputArgs {
    enabled?: pulumi.Input<boolean>;
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    notifyWhenOk?: pulumi.Input<boolean>;
    notifyWhenResolved?: pulumi.Input<boolean>;
    sendTestNotification?: pulumi.Input<boolean>;
    shareWithCurrentTeam?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.GetSecureNotificationChannelEmailTimeoutsArgs>;
}
