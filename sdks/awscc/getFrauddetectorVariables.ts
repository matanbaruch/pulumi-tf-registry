// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getFrauddetectorVariables(opts?: pulumi.InvokeOptions): Promise<GetFrauddetectorVariablesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getFrauddetectorVariables:getFrauddetectorVariables", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getFrauddetectorVariables.
 */
export interface GetFrauddetectorVariablesResult {
    readonly id: string;
    readonly ids: string[];
}
export function getFrauddetectorVariablesOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetFrauddetectorVariablesResult> {
    return pulumi.output(getFrauddetectorVariables(opts))
}
