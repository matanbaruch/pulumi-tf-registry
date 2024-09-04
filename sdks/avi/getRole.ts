// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getRole(args?: GetRoleArgs, opts?: pulumi.InvokeOptions): Promise<GetRoleResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("avi:index/getRole:getRole", {
        "id": args.id,
        "name": args.name,
        "tenantRef": args.tenantRef,
        "uuid": args.uuid,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRole.
 */
export interface GetRoleArgs {
    id?: string;
    name?: string;
    tenantRef?: string;
    uuid?: string;
}

/**
 * A collection of values returned by getRole.
 */
export interface GetRoleResult {
    readonly allowUnlabelledAccess: string;
    readonly configpbAttributes: outputs.GetRoleConfigpbAttribute[];
    readonly filters: outputs.GetRoleFilter[];
    readonly id: string;
    readonly name: string;
    readonly privileges: outputs.GetRolePrivilege[];
    readonly tenantRef: string;
    readonly uuid: string;
}
export function getRoleOutput(args?: GetRoleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRoleResult> {
    return pulumi.output(args).apply((a: any) => getRole(a, opts))
}

/**
 * A collection of arguments for invoking getRole.
 */
export interface GetRoleOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    tenantRef?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
}
