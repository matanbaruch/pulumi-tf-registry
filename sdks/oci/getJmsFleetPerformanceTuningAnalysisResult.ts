// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getJmsFleetPerformanceTuningAnalysisResult(args: GetJmsFleetPerformanceTuningAnalysisResultArgs, opts?: pulumi.InvokeOptions): Promise<GetJmsFleetPerformanceTuningAnalysisResultResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getJmsFleetPerformanceTuningAnalysisResult:getJmsFleetPerformanceTuningAnalysisResult", {
        "fleetId": args.fleetId,
        "id": args.id,
        "performanceTuningAnalysisResultId": args.performanceTuningAnalysisResultId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getJmsFleetPerformanceTuningAnalysisResult.
 */
export interface GetJmsFleetPerformanceTuningAnalysisResultArgs {
    fleetId: string;
    id?: string;
    performanceTuningAnalysisResultId: string;
}

/**
 * A collection of values returned by getJmsFleetPerformanceTuningAnalysisResult.
 */
export interface GetJmsFleetPerformanceTuningAnalysisResultResult {
    readonly applicationId: string;
    readonly applicationInstallationId: string;
    readonly applicationInstallationPath: string;
    readonly applicationName: string;
    readonly bucket: string;
    readonly fleetId: string;
    readonly hostName: string;
    readonly id: string;
    readonly managedInstanceId: string;
    readonly namespace: string;
    readonly object: string;
    readonly performanceTuningAnalysisResultId: string;
    readonly result: string;
    readonly timeCreated: string;
    readonly timeFinished: string;
    readonly timeStarted: string;
    readonly warningCount: number;
    readonly workRequestId: string;
}
export function getJmsFleetPerformanceTuningAnalysisResultOutput(args: GetJmsFleetPerformanceTuningAnalysisResultOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetJmsFleetPerformanceTuningAnalysisResultResult> {
    return pulumi.output(args).apply((a: any) => getJmsFleetPerformanceTuningAnalysisResult(a, opts))
}

/**
 * A collection of arguments for invoking getJmsFleetPerformanceTuningAnalysisResult.
 */
export interface GetJmsFleetPerformanceTuningAnalysisResultOutputArgs {
    fleetId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    performanceTuningAnalysisResultId: pulumi.Input<string>;
}
