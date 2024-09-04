// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIdentitystoreGroupMembership(args: GetIdentitystoreGroupMembershipArgs, opts?: pulumi.InvokeOptions): Promise<GetIdentitystoreGroupMembershipResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getIdentitystoreGroupMembership:getIdentitystoreGroupMembership", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIdentitystoreGroupMembership.
 */
export interface GetIdentitystoreGroupMembershipArgs {
    id: string;
}

/**
 * A collection of values returned by getIdentitystoreGroupMembership.
 */
export interface GetIdentitystoreGroupMembershipResult {
    readonly groupId: string;
    readonly id: string;
    readonly identityStoreId: string;
    readonly memberId: outputs.GetIdentitystoreGroupMembershipMemberId;
    readonly membershipId: string;
}
export function getIdentitystoreGroupMembershipOutput(args: GetIdentitystoreGroupMembershipOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIdentitystoreGroupMembershipResult> {
    return pulumi.output(args).apply((a: any) => getIdentitystoreGroupMembership(a, opts))
}

/**
 * A collection of arguments for invoking getIdentitystoreGroupMembership.
 */
export interface GetIdentitystoreGroupMembershipOutputArgs {
    id: pulumi.Input<string>;
}
