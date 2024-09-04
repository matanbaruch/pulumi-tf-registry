// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getMacPool(args?: GetMacPoolArgs, opts?: pulumi.InvokeOptions): Promise<GetMacPoolResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("nsxt:index/getMacPool:getMacPool", {
        "description": args.description,
        "displayName": args.displayName,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMacPool.
 */
export interface GetMacPoolArgs {
    description?: string;
    displayName?: string;
    id?: string;
}

/**
 * A collection of values returned by getMacPool.
 */
export interface GetMacPoolResult {
    readonly description: string;
    readonly displayName: string;
    readonly id: string;
}
export function getMacPoolOutput(args?: GetMacPoolOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMacPoolResult> {
    return pulumi.output(args).apply((a: any) => getMacPool(a, opts))
}

/**
 * A collection of arguments for invoking getMacPool.
 */
export interface GetMacPoolOutputArgs {
    description?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
}
