// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIdentityUsers(args: GetIdentityUsersArgs, opts?: pulumi.InvokeOptions): Promise<GetIdentityUsersResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getIdentityUsers:getIdentityUsers", {
        "compartmentId": args.compartmentId,
        "externalIdentifier": args.externalIdentifier,
        "filters": args.filters,
        "id": args.id,
        "identityProviderId": args.identityProviderId,
        "name": args.name,
        "state": args.state,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIdentityUsers.
 */
export interface GetIdentityUsersArgs {
    compartmentId: string;
    externalIdentifier?: string;
    filters?: inputs.GetIdentityUsersFilter[];
    id?: string;
    identityProviderId?: string;
    name?: string;
    state?: string;
}

/**
 * A collection of values returned by getIdentityUsers.
 */
export interface GetIdentityUsersResult {
    readonly compartmentId: string;
    readonly externalIdentifier?: string;
    readonly filters?: outputs.GetIdentityUsersFilter[];
    readonly id: string;
    readonly identityProviderId?: string;
    readonly name?: string;
    readonly state?: string;
    readonly users: outputs.GetIdentityUsersUser[];
}
export function getIdentityUsersOutput(args: GetIdentityUsersOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIdentityUsersResult> {
    return pulumi.output(args).apply((a: any) => getIdentityUsers(a, opts))
}

/**
 * A collection of arguments for invoking getIdentityUsers.
 */
export interface GetIdentityUsersOutputArgs {
    compartmentId: pulumi.Input<string>;
    externalIdentifier?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetIdentityUsersFilterArgs>[]>;
    id?: pulumi.Input<string>;
    identityProviderId?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
}
