// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getPolicies(args?: GetPoliciesArgs, opts?: pulumi.InvokeOptions): Promise<GetPoliciesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("bridgecrew:index/getPolicies:getPolicies", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPolicies.
 */
export interface GetPoliciesArgs {
    id?: string;
}

/**
 * A collection of values returned by getPolicies.
 */
export interface GetPoliciesResult {
    readonly id: string;
    readonly policies: outputs.GetPoliciesPolicy[];
}
export function getPoliciesOutput(args?: GetPoliciesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPoliciesResult> {
    return pulumi.output(args).apply((a: any) => getPolicies(a, opts))
}

/**
 * A collection of arguments for invoking getPolicies.
 */
export interface GetPoliciesOutputArgs {
    id?: pulumi.Input<string>;
}
