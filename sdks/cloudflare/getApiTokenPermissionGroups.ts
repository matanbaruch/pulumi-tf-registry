// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getApiTokenPermissionGroups(opts?: pulumi.InvokeOptions): Promise<GetApiTokenPermissionGroupsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("cloudflare:index/getApiTokenPermissionGroups:getApiTokenPermissionGroups", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getApiTokenPermissionGroups.
 */
export interface GetApiTokenPermissionGroupsResult {
    readonly account: {[key: string]: string};
    readonly id: string;
    /**
     * @deprecated Deprecated
     */
    readonly permissions: {[key: string]: string};
    readonly r2: {[key: string]: string};
    readonly user: {[key: string]: string};
    readonly zone: {[key: string]: string};
}
export function getApiTokenPermissionGroupsOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetApiTokenPermissionGroupsResult> {
    return pulumi.output(getApiTokenPermissionGroups(opts))
}
