// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCloudIdentityGroupTransitiveMemberships(args: GetCloudIdentityGroupTransitiveMembershipsArgs, opts?: pulumi.InvokeOptions): Promise<GetCloudIdentityGroupTransitiveMembershipsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google:index/getCloudIdentityGroupTransitiveMemberships:getCloudIdentityGroupTransitiveMemberships", {
        "group": args.group,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCloudIdentityGroupTransitiveMemberships.
 */
export interface GetCloudIdentityGroupTransitiveMembershipsArgs {
    group: string;
    id?: string;
}

/**
 * A collection of values returned by getCloudIdentityGroupTransitiveMemberships.
 */
export interface GetCloudIdentityGroupTransitiveMembershipsResult {
    readonly group: string;
    readonly id: string;
    readonly memberships: outputs.GetCloudIdentityGroupTransitiveMembershipsMembership[];
}
export function getCloudIdentityGroupTransitiveMembershipsOutput(args: GetCloudIdentityGroupTransitiveMembershipsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCloudIdentityGroupTransitiveMembershipsResult> {
    return pulumi.output(args).apply((a: any) => getCloudIdentityGroupTransitiveMemberships(a, opts))
}

/**
 * A collection of arguments for invoking getCloudIdentityGroupTransitiveMemberships.
 */
export interface GetCloudIdentityGroupTransitiveMembershipsOutputArgs {
    group: pulumi.Input<string>;
    id?: pulumi.Input<string>;
}
