// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAdvancedClusters(args: GetAdvancedClustersArgs, opts?: pulumi.InvokeOptions): Promise<GetAdvancedClustersResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("mongodbatlas:index/getAdvancedClusters:getAdvancedClusters", {
        "id": args.id,
        "projectId": args.projectId,
        "useReplicationSpecPerShard": args.useReplicationSpecPerShard,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAdvancedClusters.
 */
export interface GetAdvancedClustersArgs {
    id?: string;
    projectId: string;
    useReplicationSpecPerShard?: boolean;
}

/**
 * A collection of values returned by getAdvancedClusters.
 */
export interface GetAdvancedClustersResult {
    readonly id: string;
    readonly projectId: string;
    readonly results: outputs.GetAdvancedClustersResult[];
    readonly useReplicationSpecPerShard?: boolean;
}
export function getAdvancedClustersOutput(args: GetAdvancedClustersOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAdvancedClustersResult> {
    return pulumi.output(args).apply((a: any) => getAdvancedClusters(a, opts))
}

/**
 * A collection of arguments for invoking getAdvancedClusters.
 */
export interface GetAdvancedClustersOutputArgs {
    id?: pulumi.Input<string>;
    projectId: pulumi.Input<string>;
    useReplicationSpecPerShard?: pulumi.Input<boolean>;
}
