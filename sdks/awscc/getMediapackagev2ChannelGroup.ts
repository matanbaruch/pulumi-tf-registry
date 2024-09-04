// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getMediapackagev2ChannelGroup(args: GetMediapackagev2ChannelGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetMediapackagev2ChannelGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getMediapackagev2ChannelGroup:getMediapackagev2ChannelGroup", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMediapackagev2ChannelGroup.
 */
export interface GetMediapackagev2ChannelGroupArgs {
    id: string;
}

/**
 * A collection of values returned by getMediapackagev2ChannelGroup.
 */
export interface GetMediapackagev2ChannelGroupResult {
    readonly arn: string;
    readonly channelGroupName: string;
    readonly createdAt: string;
    readonly description: string;
    readonly egressDomain: string;
    readonly id: string;
    readonly modifiedAt: string;
    readonly tags: outputs.GetMediapackagev2ChannelGroupTag[];
}
export function getMediapackagev2ChannelGroupOutput(args: GetMediapackagev2ChannelGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMediapackagev2ChannelGroupResult> {
    return pulumi.output(args).apply((a: any) => getMediapackagev2ChannelGroup(a, opts))
}

/**
 * A collection of arguments for invoking getMediapackagev2ChannelGroup.
 */
export interface GetMediapackagev2ChannelGroupOutputArgs {
    id: pulumi.Input<string>;
}
