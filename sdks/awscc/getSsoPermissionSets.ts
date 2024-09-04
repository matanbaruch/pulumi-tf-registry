// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSsoPermissionSets(opts?: pulumi.InvokeOptions): Promise<GetSsoPermissionSetsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getSsoPermissionSets:getSsoPermissionSets", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getSsoPermissionSets.
 */
export interface GetSsoPermissionSetsResult {
    readonly id: string;
    readonly ids: string[];
}
export function getSsoPermissionSetsOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetSsoPermissionSetsResult> {
    return pulumi.output(getSsoPermissionSets(opts))
}
