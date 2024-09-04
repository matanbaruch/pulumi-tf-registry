// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAnalyticsAnalyticsInstancePrivateAccessChannel(args: GetAnalyticsAnalyticsInstancePrivateAccessChannelArgs, opts?: pulumi.InvokeOptions): Promise<GetAnalyticsAnalyticsInstancePrivateAccessChannelResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getAnalyticsAnalyticsInstancePrivateAccessChannel:getAnalyticsAnalyticsInstancePrivateAccessChannel", {
        "analyticsInstanceId": args.analyticsInstanceId,
        "privateAccessChannelKey": args.privateAccessChannelKey,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAnalyticsAnalyticsInstancePrivateAccessChannel.
 */
export interface GetAnalyticsAnalyticsInstancePrivateAccessChannelArgs {
    analyticsInstanceId: string;
    privateAccessChannelKey: string;
}

/**
 * A collection of values returned by getAnalyticsAnalyticsInstancePrivateAccessChannel.
 */
export interface GetAnalyticsAnalyticsInstancePrivateAccessChannelResult {
    readonly analyticsInstanceId: string;
    readonly displayName: string;
    readonly egressSourceIpAddresses: string[];
    readonly id: string;
    readonly ipAddress: string;
    readonly key: string;
    readonly networkSecurityGroupIds: string[];
    readonly privateAccessChannelKey: string;
    readonly privateSourceDnsZones: outputs.GetAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZone[];
    readonly privateSourceScanHosts: outputs.GetAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHost[];
    readonly subnetId: string;
    readonly vcnId: string;
}
export function getAnalyticsAnalyticsInstancePrivateAccessChannelOutput(args: GetAnalyticsAnalyticsInstancePrivateAccessChannelOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAnalyticsAnalyticsInstancePrivateAccessChannelResult> {
    return pulumi.output(args).apply((a: any) => getAnalyticsAnalyticsInstancePrivateAccessChannel(a, opts))
}

/**
 * A collection of arguments for invoking getAnalyticsAnalyticsInstancePrivateAccessChannel.
 */
export interface GetAnalyticsAnalyticsInstancePrivateAccessChannelOutputArgs {
    analyticsInstanceId: pulumi.Input<string>;
    privateAccessChannelKey: pulumi.Input<string>;
}
