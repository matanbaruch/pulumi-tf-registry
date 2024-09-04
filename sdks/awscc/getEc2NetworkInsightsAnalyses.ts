// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getEc2NetworkInsightsAnalyses(opts?: pulumi.InvokeOptions): Promise<GetEc2NetworkInsightsAnalysesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getEc2NetworkInsightsAnalyses:getEc2NetworkInsightsAnalyses", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getEc2NetworkInsightsAnalyses.
 */
export interface GetEc2NetworkInsightsAnalysesResult {
    readonly id: string;
    readonly ids: string[];
}
export function getEc2NetworkInsightsAnalysesOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetEc2NetworkInsightsAnalysesResult> {
    return pulumi.output(getEc2NetworkInsightsAnalyses(opts))
}
