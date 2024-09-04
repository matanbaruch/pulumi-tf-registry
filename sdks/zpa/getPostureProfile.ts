// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getPostureProfile(args?: GetPostureProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetPostureProfileResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("zpa:index/getPostureProfile:getPostureProfile", {
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPostureProfile.
 */
export interface GetPostureProfileArgs {
    name?: string;
}

/**
 * A collection of values returned by getPostureProfile.
 */
export interface GetPostureProfileResult {
    readonly creationTime: string;
    readonly domain: string;
    readonly id: string;
    readonly masterCustomerId: string;
    readonly modifiedTime: string;
    readonly modifiedby: string;
    readonly name?: string;
    readonly postureUdid: string;
    readonly zscalerCloud: string;
    readonly zscalerCustomerId: string;
}
export function getPostureProfileOutput(args?: GetPostureProfileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPostureProfileResult> {
    return pulumi.output(args).apply((a: any) => getPostureProfile(a, opts))
}

/**
 * A collection of arguments for invoking getPostureProfile.
 */
export interface GetPostureProfileOutputArgs {
    name?: pulumi.Input<string>;
}
