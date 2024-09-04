// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getRoleDefinition(args?: GetRoleDefinitionArgs, opts?: pulumi.InvokeOptions): Promise<GetRoleDefinitionResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azurerm:index/getRoleDefinition:getRoleDefinition", {
        "id": args.id,
        "name": args.name,
        "roleDefinitionId": args.roleDefinitionId,
        "scope": args.scope,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRoleDefinition.
 */
export interface GetRoleDefinitionArgs {
    id?: string;
    name?: string;
    roleDefinitionId?: string;
    scope?: string;
    timeouts?: inputs.GetRoleDefinitionTimeouts;
}

/**
 * A collection of values returned by getRoleDefinition.
 */
export interface GetRoleDefinitionResult {
    readonly assignableScopes: string[];
    readonly description: string;
    readonly id: string;
    readonly name: string;
    readonly permissions: outputs.GetRoleDefinitionPermission[];
    readonly roleDefinitionId: string;
    readonly scope?: string;
    readonly timeouts?: outputs.GetRoleDefinitionTimeouts;
    readonly type: string;
}
export function getRoleDefinitionOutput(args?: GetRoleDefinitionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRoleDefinitionResult> {
    return pulumi.output(args).apply((a: any) => getRoleDefinition(a, opts))
}

/**
 * A collection of arguments for invoking getRoleDefinition.
 */
export interface GetRoleDefinitionOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    roleDefinitionId?: pulumi.Input<string>;
    scope?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetRoleDefinitionTimeoutsArgs>;
}
