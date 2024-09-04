// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getQuicksightDataSets(opts?: pulumi.InvokeOptions): Promise<GetQuicksightDataSetsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getQuicksightDataSets:getQuicksightDataSets", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getQuicksightDataSets.
 */
export interface GetQuicksightDataSetsResult {
    readonly id: string;
    readonly ids: string[];
}
export function getQuicksightDataSetsOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetQuicksightDataSetsResult> {
    return pulumi.output(getQuicksightDataSets(opts))
}
