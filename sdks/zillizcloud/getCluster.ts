// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getCluster(args: GetClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetClusterResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("zillizcloud:index/getCluster:getCluster", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCluster.
 */
export interface GetClusterArgs {
    id: string;
}

/**
 * A collection of values returned by getCluster.
 */
export interface GetClusterResult {
    readonly clusterName: string;
    readonly clusterType: string;
    readonly connectAddress: string;
    readonly createTime: string;
    readonly cuSize: number;
    readonly description: string;
    readonly id: string;
    readonly privateLinkAddress: string;
    readonly regionId: string;
    readonly status: string;
}
export function getClusterOutput(args: GetClusterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetClusterResult> {
    return pulumi.output(args).apply((a: any) => getCluster(a, opts))
}

/**
 * A collection of arguments for invoking getCluster.
 */
export interface GetClusterOutputArgs {
    id: pulumi.Input<string>;
}
