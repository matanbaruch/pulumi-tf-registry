// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDatastreamActivationHistory(args: GetDatastreamActivationHistoryArgs, opts?: pulumi.InvokeOptions): Promise<GetDatastreamActivationHistoryResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("akamai:index/getDatastreamActivationHistory:getDatastreamActivationHistory", {
        "id": args.id,
        "streamId": args.streamId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatastreamActivationHistory.
 */
export interface GetDatastreamActivationHistoryArgs {
    id?: string;
    streamId: number;
}

/**
 * A collection of values returned by getDatastreamActivationHistory.
 */
export interface GetDatastreamActivationHistoryResult {
    readonly activations: outputs.GetDatastreamActivationHistoryActivation[];
    readonly id: string;
    readonly streamId: number;
}
export function getDatastreamActivationHistoryOutput(args: GetDatastreamActivationHistoryOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatastreamActivationHistoryResult> {
    return pulumi.output(args).apply((a: any) => getDatastreamActivationHistory(a, opts))
}

/**
 * A collection of arguments for invoking getDatastreamActivationHistory.
 */
export interface GetDatastreamActivationHistoryOutputArgs {
    id?: pulumi.Input<string>;
    streamId: pulumi.Input<number>;
}
