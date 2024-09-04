// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getOrganization(opts?: pulumi.InvokeOptions): Promise<GetOrganizationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("cockroach:index/getOrganization:getOrganization", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getOrganization.
 */
export interface GetOrganizationResult {
    readonly createdAt: string;
    readonly id: string;
    readonly label: string;
    readonly name: string;
}
export function getOrganizationOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetOrganizationResult> {
    return pulumi.output(getOrganization(opts))
}
