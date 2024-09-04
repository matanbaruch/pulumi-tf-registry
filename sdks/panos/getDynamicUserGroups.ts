// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDynamicUserGroups(args?: GetDynamicUserGroupsArgs, opts?: pulumi.InvokeOptions): Promise<GetDynamicUserGroupsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("panos:index/getDynamicUserGroups:getDynamicUserGroups", {
        "deviceGroup": args.deviceGroup,
        "id": args.id,
        "vsys": args.vsys,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDynamicUserGroups.
 */
export interface GetDynamicUserGroupsArgs {
    deviceGroup?: string;
    id?: string;
    vsys?: string;
}

/**
 * A collection of values returned by getDynamicUserGroups.
 */
export interface GetDynamicUserGroupsResult {
    readonly deviceGroup?: string;
    readonly id: string;
    readonly listings: string[];
    readonly total: number;
    readonly vsys?: string;
}
export function getDynamicUserGroupsOutput(args?: GetDynamicUserGroupsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDynamicUserGroupsResult> {
    return pulumi.output(args).apply((a: any) => getDynamicUserGroups(a, opts))
}

/**
 * A collection of arguments for invoking getDynamicUserGroups.
 */
export interface GetDynamicUserGroupsOutputArgs {
    deviceGroup?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    vsys?: pulumi.Input<string>;
}
