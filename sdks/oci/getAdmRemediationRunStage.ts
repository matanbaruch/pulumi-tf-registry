// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAdmRemediationRunStage(args: GetAdmRemediationRunStageArgs, opts?: pulumi.InvokeOptions): Promise<GetAdmRemediationRunStageResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getAdmRemediationRunStage:getAdmRemediationRunStage", {
        "id": args.id,
        "remediationRunId": args.remediationRunId,
        "stageType": args.stageType,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAdmRemediationRunStage.
 */
export interface GetAdmRemediationRunStageArgs {
    id?: string;
    remediationRunId: string;
    stageType: string;
}

/**
 * A collection of values returned by getAdmRemediationRunStage.
 */
export interface GetAdmRemediationRunStageResult {
    readonly auditId: string;
    readonly id: string;
    readonly nextStageType: string;
    readonly pipelineProperties: outputs.GetAdmRemediationRunStagePipelineProperty[];
    readonly previousStageType: string;
    readonly pullRequestProperties: outputs.GetAdmRemediationRunStagePullRequestProperty[];
    readonly recommendedUpdatesCount: number;
    readonly remediationRunId: string;
    readonly stageType: string;
    readonly status: string;
    readonly summary: string;
    readonly timeCreated: string;
    readonly timeFinished: string;
    readonly timeStarted: string;
    readonly type: string;
}
export function getAdmRemediationRunStageOutput(args: GetAdmRemediationRunStageOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAdmRemediationRunStageResult> {
    return pulumi.output(args).apply((a: any) => getAdmRemediationRunStage(a, opts))
}

/**
 * A collection of arguments for invoking getAdmRemediationRunStage.
 */
export interface GetAdmRemediationRunStageOutputArgs {
    id?: pulumi.Input<string>;
    remediationRunId: pulumi.Input<string>;
    stageType: pulumi.Input<string>;
}
