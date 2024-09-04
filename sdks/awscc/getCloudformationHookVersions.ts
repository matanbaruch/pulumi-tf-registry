// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getCloudformationHookVersions(opts?: pulumi.InvokeOptions): Promise<GetCloudformationHookVersionsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getCloudformationHookVersions:getCloudformationHookVersions", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getCloudformationHookVersions.
 */
export interface GetCloudformationHookVersionsResult {
    readonly id: string;
    readonly ids: string[];
}
export function getCloudformationHookVersionsOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetCloudformationHookVersionsResult> {
    return pulumi.output(getCloudformationHookVersions(opts))
}
