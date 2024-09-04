// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAiAnomalyDetectionModels(args: GetAiAnomalyDetectionModelsArgs, opts?: pulumi.InvokeOptions): Promise<GetAiAnomalyDetectionModelsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getAiAnomalyDetectionModels:getAiAnomalyDetectionModels", {
        "compartmentId": args.compartmentId,
        "displayName": args.displayName,
        "filters": args.filters,
        "id": args.id,
        "projectId": args.projectId,
        "state": args.state,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAiAnomalyDetectionModels.
 */
export interface GetAiAnomalyDetectionModelsArgs {
    compartmentId: string;
    displayName?: string;
    filters?: inputs.GetAiAnomalyDetectionModelsFilter[];
    id?: string;
    projectId?: string;
    state?: string;
}

/**
 * A collection of values returned by getAiAnomalyDetectionModels.
 */
export interface GetAiAnomalyDetectionModelsResult {
    readonly compartmentId: string;
    readonly displayName?: string;
    readonly filters?: outputs.GetAiAnomalyDetectionModelsFilter[];
    readonly id: string;
    readonly modelCollections: outputs.GetAiAnomalyDetectionModelsModelCollection[];
    readonly projectId?: string;
    readonly state?: string;
}
export function getAiAnomalyDetectionModelsOutput(args: GetAiAnomalyDetectionModelsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAiAnomalyDetectionModelsResult> {
    return pulumi.output(args).apply((a: any) => getAiAnomalyDetectionModels(a, opts))
}

/**
 * A collection of arguments for invoking getAiAnomalyDetectionModels.
 */
export interface GetAiAnomalyDetectionModelsOutputArgs {
    compartmentId: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetAiAnomalyDetectionModelsFilterArgs>[]>;
    id?: pulumi.Input<string>;
    projectId?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
}
