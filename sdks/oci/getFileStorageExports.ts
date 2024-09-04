// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getFileStorageExports(args?: GetFileStorageExportsArgs, opts?: pulumi.InvokeOptions): Promise<GetFileStorageExportsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getFileStorageExports:getFileStorageExports", {
        "compartmentId": args.compartmentId,
        "exportSetId": args.exportSetId,
        "fileSystemId": args.fileSystemId,
        "filters": args.filters,
        "id": args.id,
        "state": args.state,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFileStorageExports.
 */
export interface GetFileStorageExportsArgs {
    compartmentId?: string;
    exportSetId?: string;
    fileSystemId?: string;
    filters?: inputs.GetFileStorageExportsFilter[];
    id?: string;
    state?: string;
}

/**
 * A collection of values returned by getFileStorageExports.
 */
export interface GetFileStorageExportsResult {
    readonly compartmentId?: string;
    readonly exportSetId?: string;
    readonly exports: outputs.GetFileStorageExportsExport[];
    readonly fileSystemId?: string;
    readonly filters?: outputs.GetFileStorageExportsFilter[];
    readonly id?: string;
    readonly state?: string;
}
export function getFileStorageExportsOutput(args?: GetFileStorageExportsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFileStorageExportsResult> {
    return pulumi.output(args).apply((a: any) => getFileStorageExports(a, opts))
}

/**
 * A collection of arguments for invoking getFileStorageExports.
 */
export interface GetFileStorageExportsOutputArgs {
    compartmentId?: pulumi.Input<string>;
    exportSetId?: pulumi.Input<string>;
    fileSystemId?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetFileStorageExportsFilterArgs>[]>;
    id?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
}
