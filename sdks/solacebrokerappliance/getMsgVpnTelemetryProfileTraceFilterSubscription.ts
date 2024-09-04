// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getMsgVpnTelemetryProfileTraceFilterSubscription(args: GetMsgVpnTelemetryProfileTraceFilterSubscriptionArgs, opts?: pulumi.InvokeOptions): Promise<GetMsgVpnTelemetryProfileTraceFilterSubscriptionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("solacebrokerappliance:index/getMsgVpnTelemetryProfileTraceFilterSubscription:getMsgVpnTelemetryProfileTraceFilterSubscription", {
        "msgVpnName": args.msgVpnName,
        "subscription": args.subscription,
        "subscriptionSyntax": args.subscriptionSyntax,
        "telemetryProfileName": args.telemetryProfileName,
        "traceFilterName": args.traceFilterName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMsgVpnTelemetryProfileTraceFilterSubscription.
 */
export interface GetMsgVpnTelemetryProfileTraceFilterSubscriptionArgs {
    msgVpnName: string;
    subscription: string;
    subscriptionSyntax: string;
    telemetryProfileName: string;
    traceFilterName: string;
}

/**
 * A collection of values returned by getMsgVpnTelemetryProfileTraceFilterSubscription.
 */
export interface GetMsgVpnTelemetryProfileTraceFilterSubscriptionResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly msgVpnName: string;
    readonly subscription: string;
    readonly subscriptionSyntax: string;
    readonly telemetryProfileName: string;
    readonly traceFilterName: string;
}
export function getMsgVpnTelemetryProfileTraceFilterSubscriptionOutput(args: GetMsgVpnTelemetryProfileTraceFilterSubscriptionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMsgVpnTelemetryProfileTraceFilterSubscriptionResult> {
    return pulumi.output(args).apply((a: any) => getMsgVpnTelemetryProfileTraceFilterSubscription(a, opts))
}

/**
 * A collection of arguments for invoking getMsgVpnTelemetryProfileTraceFilterSubscription.
 */
export interface GetMsgVpnTelemetryProfileTraceFilterSubscriptionOutputArgs {
    msgVpnName: pulumi.Input<string>;
    subscription: pulumi.Input<string>;
    subscriptionSyntax: pulumi.Input<string>;
    telemetryProfileName: pulumi.Input<string>;
    traceFilterName: pulumi.Input<string>;
}
