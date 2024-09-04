// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSsmResourcePolicies(opts?: pulumi.InvokeOptions): Promise<GetSsmResourcePoliciesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getSsmResourcePolicies:getSsmResourcePolicies", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getSsmResourcePolicies.
 */
export interface GetSsmResourcePoliciesResult {
    readonly id: string;
    readonly ids: string[];
}
export function getSsmResourcePoliciesOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetSsmResourcePoliciesResult> {
    return pulumi.output(getSsmResourcePolicies(opts))
}
