// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getThreatDetectionHoneypotNodes(args?: GetThreatDetectionHoneypotNodesArgs, opts?: pulumi.InvokeOptions): Promise<GetThreatDetectionHoneypotNodesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getThreatDetectionHoneypotNodes:getThreatDetectionHoneypotNodes", {
        "id": args.id,
        "ids": args.ids,
        "nameRegex": args.nameRegex,
        "nodeId": args.nodeId,
        "nodeName": args.nodeName,
        "outputFile": args.outputFile,
        "pageNumber": args.pageNumber,
        "pageSize": args.pageSize,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getThreatDetectionHoneypotNodes.
 */
export interface GetThreatDetectionHoneypotNodesArgs {
    id?: string;
    ids?: string[];
    nameRegex?: string;
    nodeId?: string;
    nodeName?: string;
    outputFile?: string;
    pageNumber?: number;
    pageSize?: number;
}

/**
 * A collection of values returned by getThreatDetectionHoneypotNodes.
 */
export interface GetThreatDetectionHoneypotNodesResult {
    readonly id: string;
    readonly ids: string[];
    readonly nameRegex?: string;
    readonly names: string[];
    readonly nodeId?: string;
    readonly nodeName?: string;
    readonly nodes: outputs.GetThreatDetectionHoneypotNodesNode[];
    readonly outputFile?: string;
    readonly pageNumber?: number;
    readonly pageSize?: number;
}
export function getThreatDetectionHoneypotNodesOutput(args?: GetThreatDetectionHoneypotNodesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetThreatDetectionHoneypotNodesResult> {
    return pulumi.output(args).apply((a: any) => getThreatDetectionHoneypotNodes(a, opts))
}

/**
 * A collection of arguments for invoking getThreatDetectionHoneypotNodes.
 */
export interface GetThreatDetectionHoneypotNodesOutputArgs {
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    nameRegex?: pulumi.Input<string>;
    nodeId?: pulumi.Input<string>;
    nodeName?: pulumi.Input<string>;
    outputFile?: pulumi.Input<string>;
    pageNumber?: pulumi.Input<number>;
    pageSize?: pulumi.Input<number>;
}
