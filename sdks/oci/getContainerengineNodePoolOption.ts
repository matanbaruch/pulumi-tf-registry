// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getContainerengineNodePoolOption(args: GetContainerengineNodePoolOptionArgs, opts?: pulumi.InvokeOptions): Promise<GetContainerengineNodePoolOptionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getContainerengineNodePoolOption:getContainerengineNodePoolOption", {
        "compartmentId": args.compartmentId,
        "id": args.id,
        "nodePoolOptionId": args.nodePoolOptionId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getContainerengineNodePoolOption.
 */
export interface GetContainerengineNodePoolOptionArgs {
    compartmentId?: string;
    id?: string;
    nodePoolOptionId: string;
}

/**
 * A collection of values returned by getContainerengineNodePoolOption.
 */
export interface GetContainerengineNodePoolOptionResult {
    readonly compartmentId?: string;
    readonly id: string;
    readonly images: string[];
    readonly kubernetesVersions: string[];
    readonly nodePoolOptionId: string;
    readonly shapes: string[];
    readonly sources: outputs.GetContainerengineNodePoolOptionSource[];
}
export function getContainerengineNodePoolOptionOutput(args: GetContainerengineNodePoolOptionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetContainerengineNodePoolOptionResult> {
    return pulumi.output(args).apply((a: any) => getContainerengineNodePoolOption(a, opts))
}

/**
 * A collection of arguments for invoking getContainerengineNodePoolOption.
 */
export interface GetContainerengineNodePoolOptionOutputArgs {
    compartmentId?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    nodePoolOptionId: pulumi.Input<string>;
}
