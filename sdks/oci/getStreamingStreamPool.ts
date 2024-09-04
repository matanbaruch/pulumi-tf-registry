// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getStreamingStreamPool(args: GetStreamingStreamPoolArgs, opts?: pulumi.InvokeOptions): Promise<GetStreamingStreamPoolResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getStreamingStreamPool:getStreamingStreamPool", {
        "streamPoolId": args.streamPoolId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getStreamingStreamPool.
 */
export interface GetStreamingStreamPoolArgs {
    streamPoolId: string;
}

/**
 * A collection of values returned by getStreamingStreamPool.
 */
export interface GetStreamingStreamPoolResult {
    readonly compartmentId: string;
    readonly customEncryptionKeys: outputs.GetStreamingStreamPoolCustomEncryptionKey[];
    readonly definedTags: {[key: string]: string};
    readonly endpointFqdn: string;
    readonly freeformTags: {[key: string]: string};
    readonly id: string;
    readonly isPrivate: boolean;
    readonly kafkaSettings: outputs.GetStreamingStreamPoolKafkaSetting[];
    readonly lifecycleStateDetails: string;
    readonly name: string;
    readonly privateEndpointSettings: outputs.GetStreamingStreamPoolPrivateEndpointSetting[];
    readonly state: string;
    readonly streamPoolId: string;
    readonly timeCreated: string;
}
export function getStreamingStreamPoolOutput(args: GetStreamingStreamPoolOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStreamingStreamPoolResult> {
    return pulumi.output(args).apply((a: any) => getStreamingStreamPool(a, opts))
}

/**
 * A collection of arguments for invoking getStreamingStreamPool.
 */
export interface GetStreamingStreamPoolOutputArgs {
    streamPoolId: pulumi.Input<string>;
}
