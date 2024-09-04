// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getRole(args: GetRoleArgs, opts?: pulumi.InvokeOptions): Promise<GetRoleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("kestra:index/getRole:getRole", {
        "id": args.id,
        "isDefault": args.isDefault,
        "namespace": args.namespace,
        "roleId": args.roleId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRole.
 */
export interface GetRoleArgs {
    id?: string;
    isDefault?: boolean;
    namespace?: string;
    roleId: string;
}

/**
 * A collection of values returned by getRole.
 */
export interface GetRoleResult {
    readonly description: string;
    readonly id: string;
    readonly isDefault?: boolean;
    readonly name: string;
    readonly namespace?: string;
    readonly permissions: outputs.GetRolePermission[];
    readonly roleId: string;
    readonly tenantId: string;
}
export function getRoleOutput(args: GetRoleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRoleResult> {
    return pulumi.output(args).apply((a: any) => getRole(a, opts))
}

/**
 * A collection of arguments for invoking getRole.
 */
export interface GetRoleOutputArgs {
    id?: pulumi.Input<string>;
    isDefault?: pulumi.Input<boolean>;
    namespace?: pulumi.Input<string>;
    roleId: pulumi.Input<string>;
}
