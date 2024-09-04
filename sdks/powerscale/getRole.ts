// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getRole(args?: GetRoleArgs, opts?: pulumi.InvokeOptions): Promise<GetRoleResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("powerscale:index/getRole:getRole", {
        "filter": args.filter,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRole.
 */
export interface GetRoleArgs {
    filter?: inputs.GetRoleFilter;
}

/**
 * A collection of values returned by getRole.
 */
export interface GetRoleResult {
    readonly filter?: outputs.GetRoleFilter;
    readonly id: string;
    readonly rolesDetails: outputs.GetRoleRolesDetail[];
}
export function getRoleOutput(args?: GetRoleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRoleResult> {
    return pulumi.output(args).apply((a: any) => getRole(a, opts))
}

/**
 * A collection of arguments for invoking getRole.
 */
export interface GetRoleOutputArgs {
    filter?: pulumi.Input<inputs.GetRoleFilterArgs>;
}
