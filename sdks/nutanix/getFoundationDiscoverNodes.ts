// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getFoundationDiscoverNodes(args?: GetFoundationDiscoverNodesArgs, opts?: pulumi.InvokeOptions): Promise<GetFoundationDiscoverNodesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("nutanix:index/getFoundationDiscoverNodes:getFoundationDiscoverNodes", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFoundationDiscoverNodes.
 */
export interface GetFoundationDiscoverNodesArgs {
    id?: string;
}

/**
 * A collection of values returned by getFoundationDiscoverNodes.
 */
export interface GetFoundationDiscoverNodesResult {
    readonly entities: outputs.GetFoundationDiscoverNodesEntity[];
    readonly id: string;
}
export function getFoundationDiscoverNodesOutput(args?: GetFoundationDiscoverNodesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFoundationDiscoverNodesResult> {
    return pulumi.output(args).apply((a: any) => getFoundationDiscoverNodes(a, opts))
}

/**
 * A collection of arguments for invoking getFoundationDiscoverNodes.
 */
export interface GetFoundationDiscoverNodesOutputArgs {
    id?: pulumi.Input<string>;
}
