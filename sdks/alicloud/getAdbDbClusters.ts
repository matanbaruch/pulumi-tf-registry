// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAdbDbClusters(args?: GetAdbDbClustersArgs, opts?: pulumi.InvokeOptions): Promise<GetAdbDbClustersResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getAdbDbClusters:getAdbDbClusters", {
        "description": args.description,
        "descriptionRegex": args.descriptionRegex,
        "enableDetails": args.enableDetails,
        "id": args.id,
        "ids": args.ids,
        "outputFile": args.outputFile,
        "pageNumber": args.pageNumber,
        "pageSize": args.pageSize,
        "resourceGroupId": args.resourceGroupId,
        "status": args.status,
        "tags": args.tags,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAdbDbClusters.
 */
export interface GetAdbDbClustersArgs {
    description?: string;
    descriptionRegex?: string;
    enableDetails?: boolean;
    id?: string;
    ids?: string[];
    outputFile?: string;
    pageNumber?: number;
    pageSize?: number;
    resourceGroupId?: string;
    status?: string;
    tags?: {[key: string]: string};
}

/**
 * A collection of values returned by getAdbDbClusters.
 */
export interface GetAdbDbClustersResult {
    readonly clusters: outputs.GetAdbDbClustersCluster[];
    readonly description?: string;
    readonly descriptionRegex?: string;
    readonly descriptions: string[];
    readonly enableDetails?: boolean;
    readonly id: string;
    readonly ids: string[];
    readonly outputFile?: string;
    readonly pageNumber?: number;
    readonly pageSize?: number;
    readonly resourceGroupId?: string;
    readonly status?: string;
    readonly tags?: {[key: string]: string};
    readonly totalCount: number;
}
export function getAdbDbClustersOutput(args?: GetAdbDbClustersOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAdbDbClustersResult> {
    return pulumi.output(args).apply((a: any) => getAdbDbClusters(a, opts))
}

/**
 * A collection of arguments for invoking getAdbDbClusters.
 */
export interface GetAdbDbClustersOutputArgs {
    description?: pulumi.Input<string>;
    descriptionRegex?: pulumi.Input<string>;
    enableDetails?: pulumi.Input<boolean>;
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    outputFile?: pulumi.Input<string>;
    pageNumber?: pulumi.Input<number>;
    pageSize?: pulumi.Input<number>;
    resourceGroupId?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
