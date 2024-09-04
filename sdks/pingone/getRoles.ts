// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getRoles(opts?: pulumi.InvokeOptions): Promise<GetRolesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("pingone:index/getRoles:getRoles", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getRoles.
 */
export interface GetRolesResult {
    readonly id: string;
    readonly ids: string[];
}
export function getRolesOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetRolesResult> {
    return pulumi.output(getRoles(opts))
}
