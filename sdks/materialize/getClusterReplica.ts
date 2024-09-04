// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getClusterReplica(args?: GetClusterReplicaArgs, opts?: pulumi.InvokeOptions): Promise<GetClusterReplicaResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("materialize:index/getClusterReplica:getClusterReplica", {
        "id": args.id,
        "region": args.region,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getClusterReplica.
 */
export interface GetClusterReplicaArgs {
    id?: string;
    region?: string;
}

/**
 * A collection of values returned by getClusterReplica.
 */
export interface GetClusterReplicaResult {
    readonly clusterReplicas: outputs.GetClusterReplicaClusterReplica[];
    readonly id: string;
    readonly region: string;
}
export function getClusterReplicaOutput(args?: GetClusterReplicaOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetClusterReplicaResult> {
    return pulumi.output(args).apply((a: any) => getClusterReplica(a, opts))
}

/**
 * A collection of arguments for invoking getClusterReplica.
 */
export interface GetClusterReplicaOutputArgs {
    id?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
}
