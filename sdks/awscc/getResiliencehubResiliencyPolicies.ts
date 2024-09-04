// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getResiliencehubResiliencyPolicies(opts?: pulumi.InvokeOptions): Promise<GetResiliencehubResiliencyPoliciesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getResiliencehubResiliencyPolicies:getResiliencehubResiliencyPolicies", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getResiliencehubResiliencyPolicies.
 */
export interface GetResiliencehubResiliencyPoliciesResult {
    readonly id: string;
    readonly ids: string[];
}
export function getResiliencehubResiliencyPoliciesOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetResiliencehubResiliencyPoliciesResult> {
    return pulumi.output(getResiliencehubResiliencyPolicies(opts))
}
