// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSpannerInstance(args: GetSpannerInstanceArgs, opts?: pulumi.InvokeOptions): Promise<GetSpannerInstanceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google:index/getSpannerInstance:getSpannerInstance", {
        "config": args.config,
        "displayName": args.displayName,
        "id": args.id,
        "name": args.name,
        "project": args.project,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSpannerInstance.
 */
export interface GetSpannerInstanceArgs {
    config?: string;
    displayName?: string;
    id?: string;
    name: string;
    project?: string;
}

/**
 * A collection of values returned by getSpannerInstance.
 */
export interface GetSpannerInstanceResult {
    readonly autoscalingConfigs: outputs.GetSpannerInstanceAutoscalingConfig[];
    readonly config?: string;
    readonly displayName?: string;
    readonly effectiveLabels: {[key: string]: string};
    readonly forceDestroy: boolean;
    readonly id: string;
    readonly labels: {[key: string]: string};
    readonly name: string;
    readonly numNodes: number;
    readonly processingUnits: number;
    readonly project?: string;
    readonly state: string;
    readonly terraformLabels: {[key: string]: string};
}
export function getSpannerInstanceOutput(args: GetSpannerInstanceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSpannerInstanceResult> {
    return pulumi.output(args).apply((a: any) => getSpannerInstance(a, opts))
}

/**
 * A collection of arguments for invoking getSpannerInstance.
 */
export interface GetSpannerInstanceOutputArgs {
    config?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    project?: pulumi.Input<string>;
}
