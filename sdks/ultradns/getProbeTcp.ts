// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getProbeTcp(args: GetProbeTcpArgs, opts?: pulumi.InvokeOptions): Promise<GetProbeTcpResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("ultradns:index/getProbeTcp:getProbeTcp", {
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
 * A collection of arguments for invoking getProbeTcp.
 */
export interface GetProbeTcpArgs {
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
 * A collection of values returned by getProbeTcp.
 */
export interface GetProbeTcpResult {
    readonly agents: string[];
    readonly avgConnectLimits: outputs.GetProbeTcpAvgConnectLimit[];
    readonly connectLimits: outputs.GetProbeTcpConnectLimit[];
    readonly controlIp: string;
    readonly guid?: string;
    readonly id: string;
    readonly interval: string;
    readonly ownerName: string;
    readonly poolRecord: string;
    readonly port: number;
    readonly threshold: number;
    readonly zoneName: string;
}
export function getProbeTcpOutput(args: GetProbeTcpOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetProbeTcpResult> {
    return pulumi.output(args).apply((a: any) => getProbeTcp(a, opts))
}

/**
 * A collection of arguments for invoking getProbeTcp.
 */
export interface GetProbeTcpOutputArgs {
    agents?: pulumi.Input<pulumi.Input<string>[]>;
    guid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    interval?: pulumi.Input<string>;
    ownerName: pulumi.Input<string>;
    poolRecord?: pulumi.Input<string>;
    threshold?: pulumi.Input<number>;
    zoneName: pulumi.Input<string>;
}
