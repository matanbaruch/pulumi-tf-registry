// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getTag(args: GetTagArgs, opts?: pulumi.InvokeOptions): Promise<GetTagResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("scm:index/getTag:getTag", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getTag.
 */
export interface GetTagArgs {
    id: string;
}

/**
 * A collection of values returned by getTag.
 */
export interface GetTagResult {
    readonly color: string;
    readonly comments: string;
    readonly id: string;
    readonly name: string;
    readonly tfid: string;
}
export function getTagOutput(args: GetTagOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTagResult> {
    return pulumi.output(args).apply((a: any) => getTag(a, opts))
}

/**
 * A collection of arguments for invoking getTag.
 */
export interface GetTagOutputArgs {
    id: pulumi.Input<string>;
}
