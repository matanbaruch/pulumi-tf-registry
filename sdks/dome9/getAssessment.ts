// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAssessment(args: GetAssessmentArgs, opts?: pulumi.InvokeOptions): Promise<GetAssessmentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("dome9:index/getAssessment:getAssessment", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAssessment.
 */
export interface GetAssessmentArgs {
    id: number;
}

/**
 * A collection of values returned by getAssessment.
 */
export interface GetAssessmentResult {
    readonly additionalFields: {[key: string]: string};
    readonly assessmentId: string;
    readonly assessmentPassed: boolean;
    readonly bundleId: number;
    readonly cloudAccountId: string;
    readonly cloudAccountType: string;
    readonly comparisonCustomId: string;
    readonly createdTime: string;
    readonly dataSyncStatuses: outputs.GetAssessmentDataSyncStatus[];
    readonly description: string;
    readonly dome9CloudAccountId: string;
    readonly exclusions: outputs.GetAssessmentExclusion[];
    readonly externalCloudAccountId: string;
    readonly hasDataSyncStatusIssues: boolean;
    readonly hasErrors: boolean;
    readonly id: number;
    readonly locationMetadatas: outputs.GetAssessmentLocationMetadata[];
    readonly name: string;
    readonly remediations: outputs.GetAssessmentRemediation[];
    readonly requestId: string;
    readonly requests: outputs.GetAssessmentRequest[];
    readonly shouldMinimizeResult: boolean;
    readonly stats: outputs.GetAssessmentStat[];
    readonly tests: outputs.GetAssessmentTest[];
    readonly triggeredBy: string;
}
export function getAssessmentOutput(args: GetAssessmentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAssessmentResult> {
    return pulumi.output(args).apply((a: any) => getAssessment(a, opts))
}

/**
 * A collection of arguments for invoking getAssessment.
 */
export interface GetAssessmentOutputArgs {
    id: pulumi.Input<number>;
}
