// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getTag(args?: GetTagArgs, opts?: pulumi.InvokeOptions): Promise<GetTagResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("pnap:index/getTag:getTag", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getTag.
 */
export interface GetTagArgs {
    id?: string;
    name?: string;
}

/**
 * A collection of values returned by getTag.
 */
export interface GetTagResult {
    readonly createdBy: string;
    readonly description: string;
    readonly id: string;
    readonly isBillingTag: boolean;
    readonly name: string;
    readonly resourceAssignments: outputs.GetTagResourceAssignment[];
    readonly values: string[];
}
export function getTagOutput(args?: GetTagOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTagResult> {
    return pulumi.output(args).apply((a: any) => getTag(a, opts))
}

/**
 * A collection of arguments for invoking getTag.
 */
export interface GetTagOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}
