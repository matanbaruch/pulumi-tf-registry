// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getOrganizationTeamSyncGroups(args?: GetOrganizationTeamSyncGroupsArgs, opts?: pulumi.InvokeOptions): Promise<GetOrganizationTeamSyncGroupsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("github:index/getOrganizationTeamSyncGroups:getOrganizationTeamSyncGroups", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getOrganizationTeamSyncGroups.
 */
export interface GetOrganizationTeamSyncGroupsArgs {
    id?: string;
}

/**
 * A collection of values returned by getOrganizationTeamSyncGroups.
 */
export interface GetOrganizationTeamSyncGroupsResult {
    readonly groups: outputs.GetOrganizationTeamSyncGroupsGroup[];
    readonly id: string;
}
export function getOrganizationTeamSyncGroupsOutput(args?: GetOrganizationTeamSyncGroupsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOrganizationTeamSyncGroupsResult> {
    return pulumi.output(args).apply((a: any) => getOrganizationTeamSyncGroups(a, opts))
}

/**
 * A collection of arguments for invoking getOrganizationTeamSyncGroups.
 */
export interface GetOrganizationTeamSyncGroupsOutputArgs {
    id?: pulumi.Input<string>;
}
