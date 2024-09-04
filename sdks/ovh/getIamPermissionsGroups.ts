// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getIamPermissionsGroups(args?: GetIamPermissionsGroupsArgs, opts?: pulumi.InvokeOptions): Promise<GetIamPermissionsGroupsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("ovh:index/getIamPermissionsGroups:getIamPermissionsGroups", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIamPermissionsGroups.
 */
export interface GetIamPermissionsGroupsArgs {
    id?: string;
}

/**
 * A collection of values returned by getIamPermissionsGroups.
 */
export interface GetIamPermissionsGroupsResult {
    readonly id: string;
    readonly urns: string[];
}
export function getIamPermissionsGroupsOutput(args?: GetIamPermissionsGroupsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIamPermissionsGroupsResult> {
    return pulumi.output(args).apply((a: any) => getIamPermissionsGroups(a, opts))
}

/**
 * A collection of arguments for invoking getIamPermissionsGroups.
 */
export interface GetIamPermissionsGroupsOutputArgs {
    id?: pulumi.Input<string>;
}
