// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getMediaconnectFlowSources(opts?: pulumi.InvokeOptions): Promise<GetMediaconnectFlowSourcesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getMediaconnectFlowSources:getMediaconnectFlowSources", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getMediaconnectFlowSources.
 */
export interface GetMediaconnectFlowSourcesResult {
    readonly id: string;
    readonly ids: string[];
}
export function getMediaconnectFlowSourcesOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetMediaconnectFlowSourcesResult> {
    return pulumi.output(getMediaconnectFlowSources(opts))
}
