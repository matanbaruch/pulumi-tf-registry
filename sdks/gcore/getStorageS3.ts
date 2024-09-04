// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getStorageS3(args?: GetStorageS3Args, opts?: pulumi.InvokeOptions): Promise<GetStorageS3Result> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("gcore:index/getStorageS3:getStorageS3", {
        "id": args.id,
        "name": args.name,
        "storageId": args.storageId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getStorageS3.
 */
export interface GetStorageS3Args {
    id?: string;
    name?: string;
    storageId?: number;
}

/**
 * A collection of values returned by getStorageS3.
 */
export interface GetStorageS3Result {
    readonly clientId: number;
    readonly generatedEndpoint: string;
    readonly generatedHttpEndpoint: string;
    readonly generatedS3Endpoint: string;
    readonly id: string;
    readonly location: string;
    readonly name?: string;
    readonly storageId?: number;
}
export function getStorageS3Output(args?: GetStorageS3OutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStorageS3Result> {
    return pulumi.output(args).apply((a: any) => getStorageS3(a, opts))
}

/**
 * A collection of arguments for invoking getStorageS3.
 */
export interface GetStorageS3OutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    storageId?: pulumi.Input<number>;
}
