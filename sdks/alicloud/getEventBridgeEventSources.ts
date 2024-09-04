// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getEventBridgeEventSources(args?: GetEventBridgeEventSourcesArgs, opts?: pulumi.InvokeOptions): Promise<GetEventBridgeEventSourcesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getEventBridgeEventSources:getEventBridgeEventSources", {
        "id": args.id,
        "ids": args.ids,
        "nameRegex": args.nameRegex,
        "outputFile": args.outputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getEventBridgeEventSources.
 */
export interface GetEventBridgeEventSourcesArgs {
    id?: string;
    ids?: string[];
    nameRegex?: string;
    outputFile?: string;
}

/**
 * A collection of values returned by getEventBridgeEventSources.
 */
export interface GetEventBridgeEventSourcesResult {
    readonly id: string;
    readonly ids: string[];
    readonly nameRegex?: string;
    readonly names: string[];
    readonly outputFile?: string;
    readonly sources: outputs.GetEventBridgeEventSourcesSource[];
}
export function getEventBridgeEventSourcesOutput(args?: GetEventBridgeEventSourcesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEventBridgeEventSourcesResult> {
    return pulumi.output(args).apply((a: any) => getEventBridgeEventSources(a, opts))
}

/**
 * A collection of arguments for invoking getEventBridgeEventSources.
 */
export interface GetEventBridgeEventSourcesOutputArgs {
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    nameRegex?: pulumi.Input<string>;
    outputFile?: pulumi.Input<string>;
}
