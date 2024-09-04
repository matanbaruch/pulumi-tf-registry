// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getInstancePool(args: GetInstancePoolArgs, opts?: pulumi.InvokeOptions): Promise<GetInstancePoolResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("databricks:index/getInstancePool:getInstancePool", {
        "id": args.id,
        "name": args.name,
        "poolInfo": args.poolInfo,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getInstancePool.
 */
export interface GetInstancePoolArgs {
    id?: string;
    name: string;
    poolInfo?: inputs.GetInstancePoolPoolInfo;
}

/**
 * A collection of values returned by getInstancePool.
 */
export interface GetInstancePoolResult {
    readonly id: string;
    readonly name: string;
    readonly poolInfo?: outputs.GetInstancePoolPoolInfo;
}
export function getInstancePoolOutput(args: GetInstancePoolOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetInstancePoolResult> {
    return pulumi.output(args).apply((a: any) => getInstancePool(a, opts))
}

/**
 * A collection of arguments for invoking getInstancePool.
 */
export interface GetInstancePoolOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    poolInfo?: pulumi.Input<inputs.GetInstancePoolPoolInfoArgs>;
}
