// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getProbePing(args: GetProbePingArgs, opts?: pulumi.InvokeOptions): Promise<GetProbePingResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("ultradns:index/getProbePing:getProbePing", {
        "agents": args.agents,
        "guid": args.guid,
        "id": args.id,
        "interval": args.interval,
        "ownerName": args.ownerName,
        "poolRecord": args.poolRecord,
        "threshold": args.threshold,
        "zoneName": args.zoneName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getProbePing.
 */
export interface GetProbePingArgs {
    agents?: string[];
    guid?: string;
    id?: string;
    interval?: string;
    ownerName: string;
    poolRecord?: string;
    threshold?: number;
    zoneName: string;
}

/**
 * A collection of values returned by getProbePing.
 */
export interface GetProbePingResult {
    readonly agents: string[];
    readonly averageLimits: outputs.GetProbePingAverageLimit[];
    readonly avgRunLimits: outputs.GetProbePingAvgRunLimit[];
    readonly guid?: string;
    readonly id: string;
    readonly interval: string;
    readonly lossPercentLimits: outputs.GetProbePingLossPercentLimit[];
    readonly ownerName: string;
    readonly packetSize: number;
    readonly packets: number;
    readonly poolRecord: string;
    readonly runLimits: outputs.GetProbePingRunLimit[];
    readonly threshold: number;
    readonly totalLimits: outputs.GetProbePingTotalLimit[];
    readonly zoneName: string;
}
export function getProbePingOutput(args: GetProbePingOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetProbePingResult> {
    return pulumi.output(args).apply((a: any) => getProbePing(a, opts))
}

/**
 * A collection of arguments for invoking getProbePing.
 */
export interface GetProbePingOutputArgs {
    agents?: pulumi.Input<pulumi.Input<string>[]>;
    guid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    interval?: pulumi.Input<string>;
    ownerName: pulumi.Input<string>;
    poolRecord?: pulumi.Input<string>;
    threshold?: pulumi.Input<number>;
    zoneName: pulumi.Input<string>;
}
