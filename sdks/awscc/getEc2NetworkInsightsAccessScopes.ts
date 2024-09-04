// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getEc2NetworkInsightsAccessScopes(opts?: pulumi.InvokeOptions): Promise<GetEc2NetworkInsightsAccessScopesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getEc2NetworkInsightsAccessScopes:getEc2NetworkInsightsAccessScopes", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getEc2NetworkInsightsAccessScopes.
 */
export interface GetEc2NetworkInsightsAccessScopesResult {
    readonly id: string;
    readonly ids: string[];
}
export function getEc2NetworkInsightsAccessScopesOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetEc2NetworkInsightsAccessScopesResult> {
    return pulumi.output(getEc2NetworkInsightsAccessScopes(opts))
}
