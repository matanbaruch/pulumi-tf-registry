// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getWorkspace(args?: GetWorkspaceArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkspaceResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("prefect:index/getWorkspace:getWorkspace", {
        "accountId": args.accountId,
        "handle": args.handle,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getWorkspace.
 */
export interface GetWorkspaceArgs {
    accountId?: string;
    handle?: string;
    id?: string;
}

/**
 * A collection of values returned by getWorkspace.
 */
export interface GetWorkspaceResult {
    readonly accountId?: string;
    readonly created: string;
    readonly description: string;
    readonly handle: string;
    readonly id: string;
    readonly name: string;
    readonly updated: string;
}
export function getWorkspaceOutput(args?: GetWorkspaceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWorkspaceResult> {
    return pulumi.output(args).apply((a: any) => getWorkspace(a, opts))
}

/**
 * A collection of arguments for invoking getWorkspace.
 */
export interface GetWorkspaceOutputArgs {
    accountId?: pulumi.Input<string>;
    handle?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
}
