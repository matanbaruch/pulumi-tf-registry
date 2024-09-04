// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getRolesanywhereCrls(opts?: pulumi.InvokeOptions): Promise<GetRolesanywhereCrlsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getRolesanywhereCrls:getRolesanywhereCrls", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getRolesanywhereCrls.
 */
export interface GetRolesanywhereCrlsResult {
    readonly id: string;
    readonly ids: string[];
}
export function getRolesanywhereCrlsOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetRolesanywhereCrlsResult> {
    return pulumi.output(getRolesanywhereCrls(opts))
}
