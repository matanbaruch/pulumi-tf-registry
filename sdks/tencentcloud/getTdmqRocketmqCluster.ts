// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getTdmqRocketmqCluster(args?: GetTdmqRocketmqClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetTdmqRocketmqClusterResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getTdmqRocketmqCluster:getTdmqRocketmqCluster", {
        "clusterIdLists": args.clusterIdLists,
        "id": args.id,
        "idKeyword": args.idKeyword,
        "nameKeyword": args.nameKeyword,
        "resultOutputFile": args.resultOutputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getTdmqRocketmqCluster.
 */
export interface GetTdmqRocketmqClusterArgs {
    clusterIdLists?: string[];
    id?: string;
    idKeyword?: string;
    nameKeyword?: string;
    resultOutputFile?: string;
}

/**
 * A collection of values returned by getTdmqRocketmqCluster.
 */
export interface GetTdmqRocketmqClusterResult {
    readonly clusterIdLists?: string[];
    readonly clusterLists: outputs.GetTdmqRocketmqClusterClusterList[];
    readonly id: string;
    readonly idKeyword?: string;
    readonly nameKeyword?: string;
    readonly resultOutputFile?: string;
}
export function getTdmqRocketmqClusterOutput(args?: GetTdmqRocketmqClusterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTdmqRocketmqClusterResult> {
    return pulumi.output(args).apply((a: any) => getTdmqRocketmqCluster(a, opts))
}

/**
 * A collection of arguments for invoking getTdmqRocketmqCluster.
 */
export interface GetTdmqRocketmqClusterOutputArgs {
    clusterIdLists?: pulumi.Input<pulumi.Input<string>[]>;
    id?: pulumi.Input<string>;
    idKeyword?: pulumi.Input<string>;
    nameKeyword?: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
}
