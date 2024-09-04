// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getRegion(args: GetRegionArgs, opts?: pulumi.InvokeOptions): Promise<GetRegionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("gcore:index/getRegion:getRegion", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRegion.
 */
export interface GetRegionArgs {
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getRegion.
 */
export interface GetRegionResult {
    readonly id: string;
    readonly name: string;
}
export function getRegionOutput(args: GetRegionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRegionResult> {
    return pulumi.output(args).apply((a: any) => getRegion(a, opts))
}

/**
 * A collection of arguments for invoking getRegion.
 */
export interface GetRegionOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
