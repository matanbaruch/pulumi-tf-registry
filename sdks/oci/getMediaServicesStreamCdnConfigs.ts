// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getMediaServicesStreamCdnConfigs(args: GetMediaServicesStreamCdnConfigsArgs, opts?: pulumi.InvokeOptions): Promise<GetMediaServicesStreamCdnConfigsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getMediaServicesStreamCdnConfigs:getMediaServicesStreamCdnConfigs", {
        "displayName": args.displayName,
        "distributionChannelId": args.distributionChannelId,
        "filters": args.filters,
        "id": args.id,
        "state": args.state,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMediaServicesStreamCdnConfigs.
 */
export interface GetMediaServicesStreamCdnConfigsArgs {
    displayName?: string;
    distributionChannelId: string;
    filters?: inputs.GetMediaServicesStreamCdnConfigsFilter[];
    id?: string;
    state?: string;
}

/**
 * A collection of values returned by getMediaServicesStreamCdnConfigs.
 */
export interface GetMediaServicesStreamCdnConfigsResult {
    readonly displayName?: string;
    readonly distributionChannelId: string;
    readonly filters?: outputs.GetMediaServicesStreamCdnConfigsFilter[];
    readonly id?: string;
    readonly state?: string;
    readonly streamCdnConfigCollections: outputs.GetMediaServicesStreamCdnConfigsStreamCdnConfigCollection[];
}
export function getMediaServicesStreamCdnConfigsOutput(args: GetMediaServicesStreamCdnConfigsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMediaServicesStreamCdnConfigsResult> {
    return pulumi.output(args).apply((a: any) => getMediaServicesStreamCdnConfigs(a, opts))
}

/**
 * A collection of arguments for invoking getMediaServicesStreamCdnConfigs.
 */
export interface GetMediaServicesStreamCdnConfigsOutputArgs {
    displayName?: pulumi.Input<string>;
    distributionChannelId: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetMediaServicesStreamCdnConfigsFilterArgs>[]>;
    id?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
}
