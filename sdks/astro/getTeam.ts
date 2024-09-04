// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getTeam(args: GetTeamArgs, opts?: pulumi.InvokeOptions): Promise<GetTeamResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("astro:index/getTeam:getTeam", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getTeam.
 */
export interface GetTeamArgs {
    id: string;
}

/**
 * A collection of values returned by getTeam.
 */
export interface GetTeamResult {
    readonly createdAt: string;
    readonly createdBy: outputs.GetTeamCreatedBy;
    readonly deploymentRoles: outputs.GetTeamDeploymentRole[];
    readonly description: string;
    readonly id: string;
    readonly isIdpManaged: boolean;
    readonly name: string;
    readonly organizationRole: string;
    readonly rolesCount: number;
    readonly updatedAt: string;
    readonly updatedBy: outputs.GetTeamUpdatedBy;
    readonly workspaceRoles: outputs.GetTeamWorkspaceRole[];
}
export function getTeamOutput(args: GetTeamOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTeamResult> {
    return pulumi.output(args).apply((a: any) => getTeam(a, opts))
}

/**
 * A collection of arguments for invoking getTeam.
 */
export interface GetTeamOutputArgs {
    id: pulumi.Input<string>;
}
