// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getNetworkObject(args: GetNetworkObjectArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkObjectResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("ciscoasa:index/getNetworkObject:getNetworkObject", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNetworkObject.
 */
export interface GetNetworkObjectArgs {
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getNetworkObject.
 */
export interface GetNetworkObjectResult {
    readonly id: string;
    readonly name: string;
    readonly value: string;
}
export function getNetworkObjectOutput(args: GetNetworkObjectOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkObjectResult> {
    return pulumi.output(args).apply((a: any) => getNetworkObject(a, opts))
}

/**
 * A collection of arguments for invoking getNetworkObject.
 */
export interface GetNetworkObjectOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
