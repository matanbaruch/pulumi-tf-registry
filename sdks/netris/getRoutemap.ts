// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getRoutemap(args: GetRoutemapArgs, opts?: pulumi.InvokeOptions): Promise<GetRoutemapResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("netris:index/getRoutemap:getRoutemap", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRoutemap.
 */
export interface GetRoutemapArgs {
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getRoutemap.
 */
export interface GetRoutemapResult {
    readonly id: string;
    readonly name: string;
}
export function getRoutemapOutput(args: GetRoutemapOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRoutemapResult> {
    return pulumi.output(args).apply((a: any) => getRoutemap(a, opts))
}

/**
 * A collection of arguments for invoking getRoutemap.
 */
export interface GetRoutemapOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
