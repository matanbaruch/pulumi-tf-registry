// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getAutotag(args: GetAutotagArgs, opts?: pulumi.InvokeOptions): Promise<GetAutotagResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("dynatrace:index/getAutotag:getAutotag", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAutotag.
 */
export interface GetAutotagArgs {
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getAutotag.
 */
export interface GetAutotagResult {
    readonly id: string;
    readonly name: string;
}
export function getAutotagOutput(args: GetAutotagOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAutotagResult> {
    return pulumi.output(args).apply((a: any) => getAutotag(a, opts))
}

/**
 * A collection of arguments for invoking getAutotag.
 */
export interface GetAutotagOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
