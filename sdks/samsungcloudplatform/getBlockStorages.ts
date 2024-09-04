// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getBlockStorages(args?: GetBlockStoragesArgs, opts?: pulumi.InvokeOptions): Promise<GetBlockStoragesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("samsungcloudplatform:index/getBlockStorages:getBlockStorages", {
        "blockStorageId": args.blockStorageId,
        "contents": args.contents,
        "createdBy": args.createdBy,
        "id": args.id,
        "page": args.page,
        "size": args.size,
        "virtualServerId": args.virtualServerId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getBlockStorages.
 */
export interface GetBlockStoragesArgs {
    blockStorageId?: string;
    contents?: inputs.GetBlockStoragesContent[];
    createdBy?: string;
    id?: string;
    page?: number;
    size?: number;
    virtualServerId?: string;
}

/**
 * A collection of values returned by getBlockStorages.
 */
export interface GetBlockStoragesResult {
    readonly blockStorageId?: string;
    readonly contents?: outputs.GetBlockStoragesContent[];
    readonly createdBy?: string;
    readonly id: string;
    readonly page?: number;
    readonly size?: number;
    readonly totalCount: number;
    readonly virtualServerId?: string;
}
export function getBlockStoragesOutput(args?: GetBlockStoragesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBlockStoragesResult> {
    return pulumi.output(args).apply((a: any) => getBlockStorages(a, opts))
}

/**
 * A collection of arguments for invoking getBlockStorages.
 */
export interface GetBlockStoragesOutputArgs {
    blockStorageId?: pulumi.Input<string>;
    contents?: pulumi.Input<pulumi.Input<inputs.GetBlockStoragesContentArgs>[]>;
    createdBy?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    page?: pulumi.Input<number>;
    size?: pulumi.Input<number>;
    virtualServerId?: pulumi.Input<string>;
}
