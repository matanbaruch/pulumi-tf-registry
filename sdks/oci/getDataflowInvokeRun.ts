// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDataflowInvokeRun(args: GetDataflowInvokeRunArgs, opts?: pulumi.InvokeOptions): Promise<GetDataflowInvokeRunResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDataflowInvokeRun:getDataflowInvokeRun", {
        "runId": args.runId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDataflowInvokeRun.
 */
export interface GetDataflowInvokeRunArgs {
    runId: string;
}

/**
 * A collection of values returned by getDataflowInvokeRun.
 */
export interface GetDataflowInvokeRunResult {
    readonly applicationId: string;
    readonly applicationLogConfigs: outputs.GetDataflowInvokeRunApplicationLogConfig[];
    readonly archiveUri: string;
    readonly arguments: string[];
    readonly asynchronous: boolean;
    readonly className: string;
    readonly compartmentId: string;
    readonly configuration: {[key: string]: string};
    readonly dataReadInBytes: string;
    readonly dataWrittenInBytes: string;
    readonly definedTags: {[key: string]: string};
    readonly displayName: string;
    readonly driverShape: string;
    readonly driverShapeConfigs: outputs.GetDataflowInvokeRunDriverShapeConfig[];
    readonly execute: string;
    readonly executorShape: string;
    readonly executorShapeConfigs: outputs.GetDataflowInvokeRunExecutorShapeConfig[];
    readonly fileUri: string;
    readonly freeformTags: {[key: string]: string};
    readonly id: string;
    readonly idleTimeoutInMinutes: string;
    readonly language: string;
    readonly lifecycleDetails: string;
    readonly logsBucketUri: string;
    readonly maxDurationInMinutes: string;
    readonly metastoreId: string;
    readonly numExecutors: number;
    readonly opcParentRptUrl: string;
    readonly opcRequestId: string;
    readonly ownerPrincipalId: string;
    readonly ownerUserName: string;
    readonly parameters: outputs.GetDataflowInvokeRunParameter[];
    readonly poolId: string;
    readonly privateEndpointDnsZones: string[];
    readonly privateEndpointId: string;
    readonly privateEndpointMaxHostCount: number;
    readonly privateEndpointNsgIds: string[];
    readonly privateEndpointSubnetId: string;
    readonly runDurationInMilliseconds: string;
    readonly runId: string;
    readonly sparkVersion: string;
    readonly state: string;
    readonly timeCreated: string;
    readonly timeUpdated: string;
    readonly totalOcpu: number;
    readonly type: string;
    readonly warehouseBucketUri: string;
}
export function getDataflowInvokeRunOutput(args: GetDataflowInvokeRunOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDataflowInvokeRunResult> {
    return pulumi.output(args).apply((a: any) => getDataflowInvokeRun(a, opts))
}

/**
 * A collection of arguments for invoking getDataflowInvokeRun.
 */
export interface GetDataflowInvokeRunOutputArgs {
    runId: pulumi.Input<string>;
}
