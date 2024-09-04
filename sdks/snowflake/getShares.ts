// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getShares(args?: GetSharesArgs, opts?: pulumi.InvokeOptions): Promise<GetSharesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("snowflake:index/getShares:getShares", {
        "id": args.id,
        "pattern": args.pattern,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getShares.
 */
export interface GetSharesArgs {
    id?: string;
    pattern?: string;
}

/**
 * A collection of values returned by getShares.
 */
export interface GetSharesResult {
    readonly id: string;
    readonly pattern?: string;
    readonly shares: outputs.GetSharesShare[];
}
export function getSharesOutput(args?: GetSharesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSharesResult> {
    return pulumi.output(args).apply((a: any) => getShares(a, opts))
}

/**
 * A collection of arguments for invoking getShares.
 */
export interface GetSharesOutputArgs {
    id?: pulumi.Input<string>;
    pattern?: pulumi.Input<string>;
}
