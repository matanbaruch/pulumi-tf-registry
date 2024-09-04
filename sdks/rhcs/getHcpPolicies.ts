// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getHcpPolicies(opts?: pulumi.InvokeOptions): Promise<GetHcpPoliciesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("rhcs:index/getHcpPolicies:getHcpPolicies", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getHcpPolicies.
 */
export interface GetHcpPoliciesResult {
    readonly accountRolePolicies: outputs.GetHcpPoliciesAccountRolePolicies;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly operatorRolePolicies: outputs.GetHcpPoliciesOperatorRolePolicies;
}
export function getHcpPoliciesOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetHcpPoliciesResult> {
    return pulumi.output(getHcpPolicies(opts))
}
