// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getMediapackagePackagingGroups(opts?: pulumi.InvokeOptions): Promise<GetMediapackagePackagingGroupsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getMediapackagePackagingGroups:getMediapackagePackagingGroups", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getMediapackagePackagingGroups.
 */
export interface GetMediapackagePackagingGroupsResult {
    readonly id: string;
    readonly ids: string[];
}
export function getMediapackagePackagingGroupsOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetMediapackagePackagingGroupsResult> {
    return pulumi.output(getMediapackagePackagingGroups(opts))
}
