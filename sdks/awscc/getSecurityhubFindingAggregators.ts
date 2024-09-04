// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSecurityhubFindingAggregators(opts?: pulumi.InvokeOptions): Promise<GetSecurityhubFindingAggregatorsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getSecurityhubFindingAggregators:getSecurityhubFindingAggregators", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getSecurityhubFindingAggregators.
 */
export interface GetSecurityhubFindingAggregatorsResult {
    readonly id: string;
    readonly ids: string[];
}
export function getSecurityhubFindingAggregatorsOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetSecurityhubFindingAggregatorsResult> {
    return pulumi.output(getSecurityhubFindingAggregators(opts))
}
