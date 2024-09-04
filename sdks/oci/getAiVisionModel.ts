// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAiVisionModel(args: GetAiVisionModelArgs, opts?: pulumi.InvokeOptions): Promise<GetAiVisionModelResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getAiVisionModel:getAiVisionModel", {
        "modelId": args.modelId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAiVisionModel.
 */
export interface GetAiVisionModelArgs {
    modelId: string;
}

/**
 * A collection of values returned by getAiVisionModel.
 */
export interface GetAiVisionModelResult {
    readonly averagePrecision: number;
    readonly compartmentId: string;
    readonly confidenceThreshold: number;
    readonly definedTags: {[key: string]: string};
    readonly description: string;
    readonly displayName: string;
    readonly freeformTags: {[key: string]: string};
    readonly id: string;
    readonly isQuickMode: boolean;
    readonly lifecycleDetails: string;
    readonly maxTrainingDurationInHours: number;
    readonly metrics: string;
    readonly modelId: string;
    readonly modelType: string;
    readonly modelVersion: string;
    readonly precision: number;
    readonly projectId: string;
    readonly recall: number;
    readonly state: string;
    readonly systemTags: {[key: string]: string};
    readonly testImageCount: number;
    readonly testingDatasets: outputs.GetAiVisionModelTestingDataset[];
    readonly timeCreated: string;
    readonly timeUpdated: string;
    readonly totalImageCount: number;
    readonly trainedDurationInHours: number;
    readonly trainingDatasets: outputs.GetAiVisionModelTrainingDataset[];
    readonly validationDatasets: outputs.GetAiVisionModelValidationDataset[];
}
export function getAiVisionModelOutput(args: GetAiVisionModelOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAiVisionModelResult> {
    return pulumi.output(args).apply((a: any) => getAiVisionModel(a, opts))
}

/**
 * A collection of arguments for invoking getAiVisionModel.
 */
export interface GetAiVisionModelOutputArgs {
    modelId: pulumi.Input<string>;
}
