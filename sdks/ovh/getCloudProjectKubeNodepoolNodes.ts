// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCloudProjectKubeNodepoolNodes(args: GetCloudProjectKubeNodepoolNodesArgs, opts?: pulumi.InvokeOptions): Promise<GetCloudProjectKubeNodepoolNodesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("ovh:index/getCloudProjectKubeNodepoolNodes:getCloudProjectKubeNodepoolNodes", {
        "id": args.id,
        "kubeId": args.kubeId,
        "name": args.name,
        "serviceName": args.serviceName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCloudProjectKubeNodepoolNodes.
 */
export interface GetCloudProjectKubeNodepoolNodesArgs {
    id?: string;
    kubeId: string;
    name: string;
    serviceName: string;
}

/**
 * A collection of values returned by getCloudProjectKubeNodepoolNodes.
 */
export interface GetCloudProjectKubeNodepoolNodesResult {
    readonly id: string;
    readonly kubeId: string;
    readonly name: string;
    readonly nodes: outputs.GetCloudProjectKubeNodepoolNodesNode[];
    readonly serviceName: string;
}
export function getCloudProjectKubeNodepoolNodesOutput(args: GetCloudProjectKubeNodepoolNodesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCloudProjectKubeNodepoolNodesResult> {
    return pulumi.output(args).apply((a: any) => getCloudProjectKubeNodepoolNodes(a, opts))
}

/**
 * A collection of arguments for invoking getCloudProjectKubeNodepoolNodes.
 */
export interface GetCloudProjectKubeNodepoolNodesOutputArgs {
    id?: pulumi.Input<string>;
    kubeId: pulumi.Input<string>;
    name: pulumi.Input<string>;
    serviceName: pulumi.Input<string>;
}
