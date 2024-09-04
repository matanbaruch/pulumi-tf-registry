// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getMediatailorChannel(args: GetMediatailorChannelArgs, opts?: pulumi.InvokeOptions): Promise<GetMediatailorChannelResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getMediatailorChannel:getMediatailorChannel", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMediatailorChannel.
 */
export interface GetMediatailorChannelArgs {
    id: string;
}

/**
 * A collection of values returned by getMediatailorChannel.
 */
export interface GetMediatailorChannelResult {
    readonly arn: string;
    readonly audiences: string[];
    readonly channelName: string;
    readonly fillerSlate: outputs.GetMediatailorChannelFillerSlate;
    readonly id: string;
    readonly logConfiguration: outputs.GetMediatailorChannelLogConfiguration;
    readonly outputs: outputs.GetMediatailorChannelOutput[];
    readonly playbackMode: string;
    readonly tags: outputs.GetMediatailorChannelTag[];
    readonly tier: string;
    readonly timeShiftConfiguration: outputs.GetMediatailorChannelTimeShiftConfiguration;
}
export function getMediatailorChannelOutput(args: GetMediatailorChannelOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMediatailorChannelResult> {
    return pulumi.output(args).apply((a: any) => getMediatailorChannel(a, opts))
}

/**
 * A collection of arguments for invoking getMediatailorChannel.
 */
export interface GetMediatailorChannelOutputArgs {
    id: pulumi.Input<string>;
}
