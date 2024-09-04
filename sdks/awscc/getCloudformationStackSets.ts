// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getCloudformationStackSets(opts?: pulumi.InvokeOptions): Promise<GetCloudformationStackSetsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getCloudformationStackSets:getCloudformationStackSets", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getCloudformationStackSets.
 */
export interface GetCloudformationStackSetsResult {
    readonly id: string;
    readonly ids: string[];
}
export function getCloudformationStackSetsOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetCloudformationStackSetsResult> {
    return pulumi.output(getCloudformationStackSets(opts))
}
