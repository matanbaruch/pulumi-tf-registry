// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getApproleAuthBackendRoleId(args: GetApproleAuthBackendRoleIdArgs, opts?: pulumi.InvokeOptions): Promise<GetApproleAuthBackendRoleIdResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("vault:index/getApproleAuthBackendRoleId:getApproleAuthBackendRoleId", {
        "backend": args.backend,
        "id": args.id,
        "namespace": args.namespace,
        "roleName": args.roleName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getApproleAuthBackendRoleId.
 */
export interface GetApproleAuthBackendRoleIdArgs {
    backend?: string;
    id?: string;
    namespace?: string;
    roleName: string;
}

/**
 * A collection of values returned by getApproleAuthBackendRoleId.
 */
export interface GetApproleAuthBackendRoleIdResult {
    readonly backend?: string;
    readonly id: string;
    readonly namespace?: string;
    readonly roleId: string;
    readonly roleName: string;
}
export function getApproleAuthBackendRoleIdOutput(args: GetApproleAuthBackendRoleIdOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApproleAuthBackendRoleIdResult> {
    return pulumi.output(args).apply((a: any) => getApproleAuthBackendRoleId(a, opts))
}

/**
 * A collection of arguments for invoking getApproleAuthBackendRoleId.
 */
export interface GetApproleAuthBackendRoleIdOutputArgs {
    backend?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    namespace?: pulumi.Input<string>;
    roleName: pulumi.Input<string>;
}
