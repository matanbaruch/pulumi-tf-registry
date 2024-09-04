// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getMediaServicesStreamDistributionChannels(args?: GetMediaServicesStreamDistributionChannelsArgs, opts?: pulumi.InvokeOptions): Promise<GetMediaServicesStreamDistributionChannelsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getMediaServicesStreamDistributionChannels:getMediaServicesStreamDistributionChannels", {
        "compartmentId": args.compartmentId,
        "displayName": args.displayName,
        "filters": args.filters,
        "id": args.id,
        "state": args.state,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMediaServicesStreamDistributionChannels.
 */
export interface GetMediaServicesStreamDistributionChannelsArgs {
    compartmentId?: string;
    displayName?: string;
    filters?: inputs.GetMediaServicesStreamDistributionChannelsFilter[];
    id?: string;
    state?: string;
}

/**
 * A collection of values returned by getMediaServicesStreamDistributionChannels.
 */
export interface GetMediaServicesStreamDistributionChannelsResult {
    readonly compartmentId?: string;
    readonly displayName?: string;
    readonly filters?: outputs.GetMediaServicesStreamDistributionChannelsFilter[];
    readonly id?: string;
    readonly state?: string;
    readonly streamDistributionChannelCollections: outputs.GetMediaServicesStreamDistributionChannelsStreamDistributionChannelCollection[];
}
export function getMediaServicesStreamDistributionChannelsOutput(args?: GetMediaServicesStreamDistributionChannelsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMediaServicesStreamDistributionChannelsResult> {
    return pulumi.output(args).apply((a: any) => getMediaServicesStreamDistributionChannels(a, opts))
}

/**
 * A collection of arguments for invoking getMediaServicesStreamDistributionChannels.
 */
export interface GetMediaServicesStreamDistributionChannelsOutputArgs {
    compartmentId?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetMediaServicesStreamDistributionChannelsFilterArgs>[]>;
    id?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
}
