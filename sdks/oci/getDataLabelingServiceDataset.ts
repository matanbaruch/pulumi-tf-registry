// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDataLabelingServiceDataset(args: GetDataLabelingServiceDatasetArgs, opts?: pulumi.InvokeOptions): Promise<GetDataLabelingServiceDatasetResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDataLabelingServiceDataset:getDataLabelingServiceDataset", {
        "datasetId": args.datasetId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDataLabelingServiceDataset.
 */
export interface GetDataLabelingServiceDatasetArgs {
    datasetId: string;
}

/**
 * A collection of values returned by getDataLabelingServiceDataset.
 */
export interface GetDataLabelingServiceDatasetResult {
    readonly additionalProperties: {[key: string]: string};
    readonly annotationFormat: string;
    readonly compartmentId: string;
    readonly datasetFormatDetails: outputs.GetDataLabelingServiceDatasetDatasetFormatDetail[];
    readonly datasetId: string;
    readonly datasetSourceDetails: outputs.GetDataLabelingServiceDatasetDatasetSourceDetail[];
    readonly definedTags: {[key: string]: string};
    readonly description: string;
    readonly displayName: string;
    readonly freeformTags: {[key: string]: string};
    readonly id: string;
    readonly initialImportDatasetConfigurations: outputs.GetDataLabelingServiceDatasetInitialImportDatasetConfiguration[];
    readonly initialRecordGenerationConfigurations: outputs.GetDataLabelingServiceDatasetInitialRecordGenerationConfiguration[];
    readonly labelSets: outputs.GetDataLabelingServiceDatasetLabelSet[];
    readonly labelingInstructions: string;
    readonly lifecycleDetails: string;
    readonly lifecycleSubstate: string;
    readonly state: string;
    readonly timeCreated: string;
    readonly timeUpdated: string;
}
export function getDataLabelingServiceDatasetOutput(args: GetDataLabelingServiceDatasetOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDataLabelingServiceDatasetResult> {
    return pulumi.output(args).apply((a: any) => getDataLabelingServiceDataset(a, opts))
}

/**
 * A collection of arguments for invoking getDataLabelingServiceDataset.
 */
export interface GetDataLabelingServiceDatasetOutputArgs {
    datasetId: pulumi.Input<string>;
}
