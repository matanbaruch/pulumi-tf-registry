// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSagemakerUserProfiles(opts?: pulumi.InvokeOptions): Promise<GetSagemakerUserProfilesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getSagemakerUserProfiles:getSagemakerUserProfiles", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getSagemakerUserProfiles.
 */
export interface GetSagemakerUserProfilesResult {
    readonly id: string;
    readonly ids: string[];
}
export function getSagemakerUserProfilesOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetSagemakerUserProfilesResult> {
    return pulumi.output(getSagemakerUserProfiles(opts))
}
