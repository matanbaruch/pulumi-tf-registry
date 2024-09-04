// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getContainerengineClusters(args: GetContainerengineClustersArgs, opts?: pulumi.InvokeOptions): Promise<GetContainerengineClustersResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getContainerengineClusters:getContainerengineClusters", {
        "compartmentId": args.compartmentId,
        "filters": args.filters,
        "id": args.id,
        "name": args.name,
        "states": args.states,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getContainerengineClusters.
 */
export interface GetContainerengineClustersArgs {
    compartmentId: string;
    filters?: inputs.GetContainerengineClustersFilter[];
    id?: string;
    name?: string;
    states?: string[];
}

/**
 * A collection of values returned by getContainerengineClusters.
 */
export interface GetContainerengineClustersResult {
    readonly clusters: outputs.GetContainerengineClustersCluster[];
    readonly compartmentId: string;
    readonly filters?: outputs.GetContainerengineClustersFilter[];
    readonly id: string;
    readonly name?: string;
    readonly states?: string[];
}
export function getContainerengineClustersOutput(args: GetContainerengineClustersOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetContainerengineClustersResult> {
    return pulumi.output(args).apply((a: any) => getContainerengineClusters(a, opts))
}

/**
 * A collection of arguments for invoking getContainerengineClusters.
 */
export interface GetContainerengineClustersOutputArgs {
    compartmentId: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetContainerengineClustersFilterArgs>[]>;
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    states?: pulumi.Input<pulumi.Input<string>[]>;
}
