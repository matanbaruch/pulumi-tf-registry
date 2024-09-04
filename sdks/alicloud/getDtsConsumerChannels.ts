// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDtsConsumerChannels(args: GetDtsConsumerChannelsArgs, opts?: pulumi.InvokeOptions): Promise<GetDtsConsumerChannelsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getDtsConsumerChannels:getDtsConsumerChannels", {
        "dtsInstanceId": args.dtsInstanceId,
        "id": args.id,
        "ids": args.ids,
        "outputFile": args.outputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDtsConsumerChannels.
 */
export interface GetDtsConsumerChannelsArgs {
    dtsInstanceId: string;
    id?: string;
    ids?: string[];
    outputFile?: string;
}

/**
 * A collection of values returned by getDtsConsumerChannels.
 */
export interface GetDtsConsumerChannelsResult {
    readonly channels: outputs.GetDtsConsumerChannelsChannel[];
    readonly dtsInstanceId: string;
    readonly id: string;
    readonly ids: string[];
    readonly outputFile?: string;
}
export function getDtsConsumerChannelsOutput(args: GetDtsConsumerChannelsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDtsConsumerChannelsResult> {
    return pulumi.output(args).apply((a: any) => getDtsConsumerChannels(a, opts))
}

/**
 * A collection of arguments for invoking getDtsConsumerChannels.
 */
export interface GetDtsConsumerChannelsOutputArgs {
    dtsInstanceId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    outputFile?: pulumi.Input<string>;
}
