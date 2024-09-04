// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getClusters(args?: GetClustersArgs, opts?: pulumi.InvokeOptions): Promise<GetClustersResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("vergeio:index/getClusters:getClusters", {
        "filterName": args.filterName,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getClusters.
 */
export interface GetClustersArgs {
    filterName?: string;
    id?: string;
}

/**
 * A collection of values returned by getClusters.
 */
export interface GetClustersResult {
    readonly clusters: outputs.GetClustersCluster[];
    readonly filterName?: string;
    readonly id: string;
}
export function getClustersOutput(args?: GetClustersOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetClustersResult> {
    return pulumi.output(args).apply((a: any) => getClusters(a, opts))
}

/**
 * A collection of arguments for invoking getClusters.
 */
export interface GetClustersOutputArgs {
    filterName?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
}
