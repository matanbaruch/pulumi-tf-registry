// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getKinesisvideoSignalingChannel(args: GetKinesisvideoSignalingChannelArgs, opts?: pulumi.InvokeOptions): Promise<GetKinesisvideoSignalingChannelResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getKinesisvideoSignalingChannel:getKinesisvideoSignalingChannel", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getKinesisvideoSignalingChannel.
 */
export interface GetKinesisvideoSignalingChannelArgs {
    id: string;
}

/**
 * A collection of values returned by getKinesisvideoSignalingChannel.
 */
export interface GetKinesisvideoSignalingChannelResult {
    readonly arn: string;
    readonly id: string;
    readonly messageTtlSeconds: number;
    readonly name: string;
    readonly tags: outputs.GetKinesisvideoSignalingChannelTag[];
    readonly type: string;
}
export function getKinesisvideoSignalingChannelOutput(args: GetKinesisvideoSignalingChannelOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetKinesisvideoSignalingChannelResult> {
    return pulumi.output(args).apply((a: any) => getKinesisvideoSignalingChannel(a, opts))
}

/**
 * A collection of arguments for invoking getKinesisvideoSignalingChannel.
 */
export interface GetKinesisvideoSignalingChannelOutputArgs {
    id: pulumi.Input<string>;
}
