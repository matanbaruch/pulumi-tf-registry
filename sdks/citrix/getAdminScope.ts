// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getAdminScope(args?: GetAdminScopeArgs, opts?: pulumi.InvokeOptions): Promise<GetAdminScopeResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("citrix:index/getAdminScope:getAdminScope", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAdminScope.
 */
export interface GetAdminScopeArgs {
    id?: string;
    name?: string;
}

/**
 * A collection of values returned by getAdminScope.
 */
export interface GetAdminScopeResult {
    readonly description: string;
    readonly id?: string;
    readonly isAllScope: boolean;
    readonly isBuiltIn: boolean;
    readonly isTenantScope: boolean;
    readonly name?: string;
    readonly tenantId: string;
    readonly tenantName: string;
}
export function getAdminScopeOutput(args?: GetAdminScopeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAdminScopeResult> {
    return pulumi.output(args).apply((a: any) => getAdminScope(a, opts))
}

/**
 * A collection of arguments for invoking getAdminScope.
 */
export interface GetAdminScopeOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}
