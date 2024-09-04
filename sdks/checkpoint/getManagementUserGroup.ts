// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getManagementUserGroup(args?: GetManagementUserGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetManagementUserGroupResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("checkpoint:index/getManagementUserGroup:getManagementUserGroup", {
        "id": args.id,
        "name": args.name,
        "uid": args.uid,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getManagementUserGroup.
 */
export interface GetManagementUserGroupArgs {
    id?: string;
    name?: string;
    uid?: string;
}

/**
 * A collection of values returned by getManagementUserGroup.
 */
export interface GetManagementUserGroupResult {
    readonly color: string;
    readonly comments: string;
    readonly email: string;
    readonly id: string;
    readonly members: string[];
    readonly name?: string;
    readonly tags: string[];
    readonly uid?: string;
}
export function getManagementUserGroupOutput(args?: GetManagementUserGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagementUserGroupResult> {
    return pulumi.output(args).apply((a: any) => getManagementUserGroup(a, opts))
}

/**
 * A collection of arguments for invoking getManagementUserGroup.
 */
export interface GetManagementUserGroupOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    uid?: pulumi.Input<string>;
}
