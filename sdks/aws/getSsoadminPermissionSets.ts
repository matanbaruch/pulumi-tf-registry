// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSsoadminPermissionSets(args: GetSsoadminPermissionSetsArgs, opts?: pulumi.InvokeOptions): Promise<GetSsoadminPermissionSetsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getSsoadminPermissionSets:getSsoadminPermissionSets", {
        "instanceArn": args.instanceArn,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSsoadminPermissionSets.
 */
export interface GetSsoadminPermissionSetsArgs {
    instanceArn: string;
}

/**
 * A collection of values returned by getSsoadminPermissionSets.
 */
export interface GetSsoadminPermissionSetsResult {
    readonly arns: string[];
    readonly id: string;
    readonly instanceArn: string;
}
export function getSsoadminPermissionSetsOutput(args: GetSsoadminPermissionSetsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSsoadminPermissionSetsResult> {
    return pulumi.output(args).apply((a: any) => getSsoadminPermissionSets(a, opts))
}

/**
 * A collection of arguments for invoking getSsoadminPermissionSets.
 */
export interface GetSsoadminPermissionSetsOutputArgs {
    instanceArn: pulumi.Input<string>;
}
