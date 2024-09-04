// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getIamRoles(opts?: pulumi.InvokeOptions): Promise<GetIamRolesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getIamRoles:getIamRoles", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getIamRoles.
 */
export interface GetIamRolesResult {
    readonly id: string;
    readonly ids: string[];
}
export function getIamRolesOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetIamRolesResult> {
    return pulumi.output(getIamRoles(opts))
}
