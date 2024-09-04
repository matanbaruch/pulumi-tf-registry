// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getLambdaEventSourceMapping(args: GetLambdaEventSourceMappingArgs, opts?: pulumi.InvokeOptions): Promise<GetLambdaEventSourceMappingResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getLambdaEventSourceMapping:getLambdaEventSourceMapping", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLambdaEventSourceMapping.
 */
export interface GetLambdaEventSourceMappingArgs {
    id: string;
}

/**
 * A collection of values returned by getLambdaEventSourceMapping.
 */
export interface GetLambdaEventSourceMappingResult {
    readonly amazonManagedKafkaEventSourceConfig: outputs.GetLambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig;
    readonly batchSize: number;
    readonly bisectBatchOnFunctionError: boolean;
    readonly destinationConfig: outputs.GetLambdaEventSourceMappingDestinationConfig;
    readonly documentDbEventSourceConfig: outputs.GetLambdaEventSourceMappingDocumentDbEventSourceConfig;
    readonly enabled: boolean;
    readonly eventSourceArn: string;
    readonly eventSourceMappingId: string;
    readonly filterCriteria: outputs.GetLambdaEventSourceMappingFilterCriteria;
    readonly functionName: string;
    readonly functionResponseTypes: string[];
    readonly id: string;
    readonly kmsKeyArn: string;
    readonly maximumBatchingWindowInSeconds: number;
    readonly maximumRecordAgeInSeconds: number;
    readonly maximumRetryAttempts: number;
    readonly parallelizationFactor: number;
    readonly queues: string[];
    readonly scalingConfig: outputs.GetLambdaEventSourceMappingScalingConfig;
    readonly selfManagedEventSource: outputs.GetLambdaEventSourceMappingSelfManagedEventSource;
    readonly selfManagedKafkaEventSourceConfig: outputs.GetLambdaEventSourceMappingSelfManagedKafkaEventSourceConfig;
    readonly sourceAccessConfigurations: outputs.GetLambdaEventSourceMappingSourceAccessConfiguration[];
    readonly startingPosition: string;
    readonly startingPositionTimestamp: number;
    readonly topics: string[];
    readonly tumblingWindowInSeconds: number;
}
export function getLambdaEventSourceMappingOutput(args: GetLambdaEventSourceMappingOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLambdaEventSourceMappingResult> {
    return pulumi.output(args).apply((a: any) => getLambdaEventSourceMapping(a, opts))
}

/**
 * A collection of arguments for invoking getLambdaEventSourceMapping.
 */
export interface GetLambdaEventSourceMappingOutputArgs {
    id: pulumi.Input<string>;
}
