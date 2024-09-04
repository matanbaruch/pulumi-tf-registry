// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getLogRetentionPolicies(args?: GetLogRetentionPoliciesArgs, opts?: pulumi.InvokeOptions): Promise<GetLogRetentionPoliciesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("pingdirectory:index/getLogRetentionPolicies:getLogRetentionPolicies", {
        "filter": args.filter,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLogRetentionPolicies.
 */
export interface GetLogRetentionPoliciesArgs {
    filter?: string;
}

/**
 * A collection of values returned by getLogRetentionPolicies.
 */
export interface GetLogRetentionPoliciesResult {
    readonly filter?: string;
    readonly id: string;
    readonly objects: outputs.GetLogRetentionPoliciesObject[];
}
export function getLogRetentionPoliciesOutput(args?: GetLogRetentionPoliciesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLogRetentionPoliciesResult> {
    return pulumi.output(args).apply((a: any) => getLogRetentionPolicies(a, opts))
}

/**
 * A collection of arguments for invoking getLogRetentionPolicies.
 */
export interface GetLogRetentionPoliciesOutputArgs {
    filter?: pulumi.Input<string>;
}
