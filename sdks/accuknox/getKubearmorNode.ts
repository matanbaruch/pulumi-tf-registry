// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getKubearmorNode(args?: GetKubearmorNodeArgs, opts?: pulumi.InvokeOptions): Promise<GetKubearmorNodeResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("accuknox:index/getKubearmorNode:getKubearmorNode", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getKubearmorNode.
 */
export interface GetKubearmorNodeArgs {
    id?: string;
}

/**
 * A collection of values returned by getKubearmorNode.
 */
export interface GetKubearmorNodeResult {
    readonly id: string;
    readonly nodeDatas: outputs.GetKubearmorNodeNodeData[];
}
export function getKubearmorNodeOutput(args?: GetKubearmorNodeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetKubearmorNodeResult> {
    return pulumi.output(args).apply((a: any) => getKubearmorNode(a, opts))
}

/**
 * A collection of arguments for invoking getKubearmorNode.
 */
export interface GetKubearmorNodeOutputArgs {
    id?: pulumi.Input<string>;
}
