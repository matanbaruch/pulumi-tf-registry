// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSsmcontactsContactChannel(args: GetSsmcontactsContactChannelArgs, opts?: pulumi.InvokeOptions): Promise<GetSsmcontactsContactChannelResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getSsmcontactsContactChannel:getSsmcontactsContactChannel", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSsmcontactsContactChannel.
 */
export interface GetSsmcontactsContactChannelArgs {
    id: string;
}

/**
 * A collection of values returned by getSsmcontactsContactChannel.
 */
export interface GetSsmcontactsContactChannelResult {
    readonly arn: string;
    readonly channelAddress: string;
    readonly channelName: string;
    readonly channelType: string;
    readonly contactId: string;
    readonly deferActivation: boolean;
    readonly id: string;
}
export function getSsmcontactsContactChannelOutput(args: GetSsmcontactsContactChannelOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSsmcontactsContactChannelResult> {
    return pulumi.output(args).apply((a: any) => getSsmcontactsContactChannel(a, opts))
}

/**
 * A collection of arguments for invoking getSsmcontactsContactChannel.
 */
export interface GetSsmcontactsContactChannelOutputArgs {
    id: pulumi.Input<string>;
}
