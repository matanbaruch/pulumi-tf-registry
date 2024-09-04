// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getKubernetesAvailableClusterVersions(args?: GetKubernetesAvailableClusterVersionsArgs, opts?: pulumi.InvokeOptions): Promise<GetKubernetesAvailableClusterVersionsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getKubernetesAvailableClusterVersions:getKubernetesAvailableClusterVersions", {
        "clusterId": args.clusterId,
        "clusterIds": args.clusterIds,
        "id": args.id,
        "resultOutputFile": args.resultOutputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getKubernetesAvailableClusterVersions.
 */
export interface GetKubernetesAvailableClusterVersionsArgs {
    clusterId?: string;
    clusterIds?: string[];
    id?: string;
    resultOutputFile?: string;
}

/**
 * A collection of values returned by getKubernetesAvailableClusterVersions.
 */
export interface GetKubernetesAvailableClusterVersionsResult {
    readonly clusterId?: string;
    readonly clusterIds?: string[];
    readonly clusters: outputs.GetKubernetesAvailableClusterVersionsCluster[];
    readonly id: string;
    readonly resultOutputFile?: string;
    readonly versions: string[];
}
export function getKubernetesAvailableClusterVersionsOutput(args?: GetKubernetesAvailableClusterVersionsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetKubernetesAvailableClusterVersionsResult> {
    return pulumi.output(args).apply((a: any) => getKubernetesAvailableClusterVersions(a, opts))
}

/**
 * A collection of arguments for invoking getKubernetesAvailableClusterVersions.
 */
export interface GetKubernetesAvailableClusterVersionsOutputArgs {
    clusterId?: pulumi.Input<string>;
    clusterIds?: pulumi.Input<pulumi.Input<string>[]>;
    id?: pulumi.Input<string>;
    resultOutputFile?: pulumi.Input<string>;
}
