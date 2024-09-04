// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getIamPolicies(args?: GetIamPoliciesArgs, opts?: pulumi.InvokeOptions): Promise<GetIamPoliciesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("ovh:index/getIamPolicies:getIamPolicies", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIamPolicies.
 */
export interface GetIamPoliciesArgs {
    id?: string;
}

/**
 * A collection of values returned by getIamPolicies.
 */
export interface GetIamPoliciesResult {
    readonly id: string;
    readonly policies: string[];
}
export function getIamPoliciesOutput(args?: GetIamPoliciesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIamPoliciesResult> {
    return pulumi.output(args).apply((a: any) => getIamPolicies(a, opts))
}

/**
 * A collection of arguments for invoking getIamPolicies.
 */
export interface GetIamPoliciesOutputArgs {
    id?: pulumi.Input<string>;
}
