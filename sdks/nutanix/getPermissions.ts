// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getPermissions(args?: GetPermissionsArgs, opts?: pulumi.InvokeOptions): Promise<GetPermissionsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("nutanix:index/getPermissions:getPermissions", {
        "id": args.id,
        "metadatas": args.metadatas,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPermissions.
 */
export interface GetPermissionsArgs {
    id?: string;
    metadatas?: inputs.GetPermissionsMetadata[];
}

/**
 * A collection of values returned by getPermissions.
 */
export interface GetPermissionsResult {
    readonly apiVersion: string;
    readonly entities: outputs.GetPermissionsEntity[];
    readonly id: string;
    readonly metadatas?: outputs.GetPermissionsMetadata[];
}
export function getPermissionsOutput(args?: GetPermissionsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPermissionsResult> {
    return pulumi.output(args).apply((a: any) => getPermissions(a, opts))
}

/**
 * A collection of arguments for invoking getPermissions.
 */
export interface GetPermissionsOutputArgs {
    id?: pulumi.Input<string>;
    metadatas?: pulumi.Input<pulumi.Input<inputs.GetPermissionsMetadataArgs>[]>;
}
