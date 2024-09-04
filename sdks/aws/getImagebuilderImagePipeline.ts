// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getImagebuilderImagePipeline(args: GetImagebuilderImagePipelineArgs, opts?: pulumi.InvokeOptions): Promise<GetImagebuilderImagePipelineResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getImagebuilderImagePipeline:getImagebuilderImagePipeline", {
        "arn": args.arn,
        "id": args.id,
        "tags": args.tags,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getImagebuilderImagePipeline.
 */
export interface GetImagebuilderImagePipelineArgs {
    arn: string;
    id?: string;
    tags?: {[key: string]: string};
}

/**
 * A collection of values returned by getImagebuilderImagePipeline.
 */
export interface GetImagebuilderImagePipelineResult {
    readonly arn: string;
    readonly containerRecipeArn: string;
    readonly dateCreated: string;
    readonly dateLastRun: string;
    readonly dateNextRun: string;
    readonly dateUpdated: string;
    readonly description: string;
    readonly distributionConfigurationArn: string;
    readonly enhancedImageMetadataEnabled: boolean;
    readonly id: string;
    readonly imageRecipeArn: string;
    readonly imageScanningConfigurations: outputs.GetImagebuilderImagePipelineImageScanningConfiguration[];
    readonly imageTestsConfigurations: outputs.GetImagebuilderImagePipelineImageTestsConfiguration[];
    readonly infrastructureConfigurationArn: string;
    readonly name: string;
    readonly platform: string;
    readonly schedules: outputs.GetImagebuilderImagePipelineSchedule[];
    readonly status: string;
    readonly tags: {[key: string]: string};
}
export function getImagebuilderImagePipelineOutput(args: GetImagebuilderImagePipelineOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetImagebuilderImagePipelineResult> {
    return pulumi.output(args).apply((a: any) => getImagebuilderImagePipeline(a, opts))
}

/**
 * A collection of arguments for invoking getImagebuilderImagePipeline.
 */
export interface GetImagebuilderImagePipelineOutputArgs {
    arn: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
