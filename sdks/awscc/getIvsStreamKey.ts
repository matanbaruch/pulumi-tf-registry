// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIvsStreamKey(args: GetIvsStreamKeyArgs, opts?: pulumi.InvokeOptions): Promise<GetIvsStreamKeyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getIvsStreamKey:getIvsStreamKey", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIvsStreamKey.
 */
export interface GetIvsStreamKeyArgs {
    id: string;
}

/**
 * A collection of values returned by getIvsStreamKey.
 */
export interface GetIvsStreamKeyResult {
    readonly arn: string;
    readonly channelArn: string;
    readonly id: string;
    readonly tags: outputs.GetIvsStreamKeyTag[];
    readonly value: string;
}
export function getIvsStreamKeyOutput(args: GetIvsStreamKeyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIvsStreamKeyResult> {
    return pulumi.output(args).apply((a: any) => getIvsStreamKey(a, opts))
}

/**
 * A collection of arguments for invoking getIvsStreamKey.
 */
export interface GetIvsStreamKeyOutputArgs {
    id: pulumi.Input<string>;
}
