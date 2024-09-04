// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getCloudformationHookDefaultVersions(opts?: pulumi.InvokeOptions): Promise<GetCloudformationHookDefaultVersionsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getCloudformationHookDefaultVersions:getCloudformationHookDefaultVersions", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getCloudformationHookDefaultVersions.
 */
export interface GetCloudformationHookDefaultVersionsResult {
    readonly id: string;
    readonly ids: string[];
}
export function getCloudformationHookDefaultVersionsOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetCloudformationHookDefaultVersionsResult> {
    return pulumi.output(getCloudformationHookDefaultVersions(opts))
}
