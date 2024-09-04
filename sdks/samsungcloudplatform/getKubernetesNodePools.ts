// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getKubernetesNodePools(args: GetKubernetesNodePoolsArgs, opts?: pulumi.InvokeOptions): Promise<GetKubernetesNodePoolsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("samsungcloudplatform:index/getKubernetesNodePools:getKubernetesNodePools", {
        "contents": args.contents,
        "createdBy": args.createdBy,
        "id": args.id,
        "kubernetesEngineId": args.kubernetesEngineId,
        "nodePoolName": args.nodePoolName,
        "page": args.page,
        "size": args.size,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getKubernetesNodePools.
 */
export interface GetKubernetesNodePoolsArgs {
    contents?: inputs.GetKubernetesNodePoolsContent[];
    createdBy?: string;
    id?: string;
    kubernetesEngineId: string;
    nodePoolName?: string;
    page?: number;
    size?: number;
}

/**
 * A collection of values returned by getKubernetesNodePools.
 */
export interface GetKubernetesNodePoolsResult {
    readonly contents?: outputs.GetKubernetesNodePoolsContent[];
    readonly createdBy?: string;
    readonly id: string;
    readonly kubernetesEngineId: string;
    readonly nodePoolName?: string;
    readonly page?: number;
    readonly size?: number;
    readonly totalCount: number;
}
export function getKubernetesNodePoolsOutput(args: GetKubernetesNodePoolsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetKubernetesNodePoolsResult> {
    return pulumi.output(args).apply((a: any) => getKubernetesNodePools(a, opts))
}

/**
 * A collection of arguments for invoking getKubernetesNodePools.
 */
export interface GetKubernetesNodePoolsOutputArgs {
    contents?: pulumi.Input<pulumi.Input<inputs.GetKubernetesNodePoolsContentArgs>[]>;
    createdBy?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    kubernetesEngineId: pulumi.Input<string>;
    nodePoolName?: pulumi.Input<string>;
    page?: pulumi.Input<number>;
    size?: pulumi.Input<number>;
}
