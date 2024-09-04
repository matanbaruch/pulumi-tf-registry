// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAiAnomalyDetectionDataAssets(args: GetAiAnomalyDetectionDataAssetsArgs, opts?: pulumi.InvokeOptions): Promise<GetAiAnomalyDetectionDataAssetsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getAiAnomalyDetectionDataAssets:getAiAnomalyDetectionDataAssets", {
        "compartmentId": args.compartmentId,
        "displayName": args.displayName,
        "filters": args.filters,
        "id": args.id,
        "projectId": args.projectId,
        "state": args.state,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAiAnomalyDetectionDataAssets.
 */
export interface GetAiAnomalyDetectionDataAssetsArgs {
    compartmentId: string;
    displayName?: string;
    filters?: inputs.GetAiAnomalyDetectionDataAssetsFilter[];
    id?: string;
    projectId?: string;
    state?: string;
}

/**
 * A collection of values returned by getAiAnomalyDetectionDataAssets.
 */
export interface GetAiAnomalyDetectionDataAssetsResult {
    readonly compartmentId: string;
    readonly dataAssetCollections: outputs.GetAiAnomalyDetectionDataAssetsDataAssetCollection[];
    readonly displayName?: string;
    readonly filters?: outputs.GetAiAnomalyDetectionDataAssetsFilter[];
    readonly id: string;
    readonly projectId?: string;
    readonly state?: string;
}
export function getAiAnomalyDetectionDataAssetsOutput(args: GetAiAnomalyDetectionDataAssetsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAiAnomalyDetectionDataAssetsResult> {
    return pulumi.output(args).apply((a: any) => getAiAnomalyDetectionDataAssets(a, opts))
}

/**
 * A collection of arguments for invoking getAiAnomalyDetectionDataAssets.
 */
export interface GetAiAnomalyDetectionDataAssetsOutputArgs {
    compartmentId: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetAiAnomalyDetectionDataAssetsFilterArgs>[]>;
    id?: pulumi.Input<string>;
    projectId?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
}
