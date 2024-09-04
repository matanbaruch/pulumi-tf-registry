// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getOrganizationMembership(args?: GetOrganizationMembershipArgs, opts?: pulumi.InvokeOptions): Promise<GetOrganizationMembershipResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tfe:index/getOrganizationMembership:getOrganizationMembership", {
        "email": args.email,
        "id": args.id,
        "organization": args.organization,
        "organizationMembershipId": args.organizationMembershipId,
        "username": args.username,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getOrganizationMembership.
 */
export interface GetOrganizationMembershipArgs {
    email?: string;
    id?: string;
    organization?: string;
    organizationMembershipId?: string;
    username?: string;
}

/**
 * A collection of values returned by getOrganizationMembership.
 */
export interface GetOrganizationMembershipResult {
    readonly email?: string;
    readonly id: string;
    readonly organization?: string;
    readonly organizationMembershipId: string;
    readonly userId: string;
    readonly username: string;
}
export function getOrganizationMembershipOutput(args?: GetOrganizationMembershipOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOrganizationMembershipResult> {
    return pulumi.output(args).apply((a: any) => getOrganizationMembership(a, opts))
}

/**
 * A collection of arguments for invoking getOrganizationMembership.
 */
export interface GetOrganizationMembershipOutputArgs {
    email?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    organization?: pulumi.Input<string>;
    organizationMembershipId?: pulumi.Input<string>;
    username?: pulumi.Input<string>;
}
