// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getFrauddetectorLabels(opts?: pulumi.InvokeOptions): Promise<GetFrauddetectorLabelsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getFrauddetectorLabels:getFrauddetectorLabels", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getFrauddetectorLabels.
 */
export interface GetFrauddetectorLabelsResult {
    readonly id: string;
    readonly ids: string[];
}
export function getFrauddetectorLabelsOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetFrauddetectorLabelsResult> {
    return pulumi.output(getFrauddetectorLabels(opts))
}
