// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCynosdbClusters(args?: GetCynosdbClustersArgs, opts?: pulumi.InvokeOptions): Promise<GetCynosdbClustersResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getCynosdbClusters:getCynosdbClusters", {
        "clusterId": args.clusterId,
        "clusterName": args.clusterName,
        "dbType": args.dbType,
        "id": args.id,
        "projectId": args.projectId,
        "resultOutputFile": args.resultOutputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCynosdbClusters.
 */
export interface GetCynosdbClustersArgs {
    clusterId?: string;
    clusterName?: string;
    dbType?: string;
    id?: string;
    projectId?: number;
    resultOutputFile?: string;
}

/**
 * A collection of values returned by getCynosdbClusters.
 */
export interface GetCynosdbClustersResult {
    readonly clusterId?: string;
    readonly clusterLists: outputs.GetCynosdbClustersClusterList[];
    readonly clusterName?: string;
    readonly dbType?: string;
    readonly id: string;
    readonly projectId?: number;
    readonly resultOutputFile?: string;
}
export function getCynosdbClustersOutput(args?: GetCynosdbClustersOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCynosdbClustersResult> {
    return pulumi.output(args).apply((a: any) => getCynosdbClusters(a, opts))
}

/**
 * A collection of arguments for invoking getCynosdbClusters.
 */
export interface GetCynosdbClustersOutputArgs {
    clusterId?: pulumi.Input<string>;
    clusterName?: pulumi.Input<string>;
    dbType?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    projectId?: pulumi.Input<number>;
    resultOutputFile?: pulumi.Input<string>;
}
