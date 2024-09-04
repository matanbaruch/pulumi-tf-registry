// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getMacieAllowList(args: GetMacieAllowListArgs, opts?: pulumi.InvokeOptions): Promise<GetMacieAllowListResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getMacieAllowList:getMacieAllowList", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMacieAllowList.
 */
export interface GetMacieAllowListArgs {
    id: string;
}

/**
 * A collection of values returned by getMacieAllowList.
 */
export interface GetMacieAllowListResult {
    readonly allowListId: string;
    readonly arn: string;
    readonly criteria: outputs.GetMacieAllowListCriteria;
    readonly description: string;
    readonly id: string;
    readonly name: string;
    readonly status: string;
    readonly tags: outputs.GetMacieAllowListTag[];
}
export function getMacieAllowListOutput(args: GetMacieAllowListOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMacieAllowListResult> {
    return pulumi.output(args).apply((a: any) => getMacieAllowList(a, opts))
}

/**
 * A collection of arguments for invoking getMacieAllowList.
 */
export interface GetMacieAllowListOutputArgs {
    id: pulumi.Input<string>;
}
