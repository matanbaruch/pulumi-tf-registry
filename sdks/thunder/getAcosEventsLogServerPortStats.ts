// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAcosEventsLogServerPortStats(args: GetAcosEventsLogServerPortStatsArgs, opts?: pulumi.InvokeOptions): Promise<GetAcosEventsLogServerPortStatsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("thunder:index/getAcosEventsLogServerPortStats:getAcosEventsLogServerPortStats", {
        "id": args.id,
        "name": args.name,
        "portNumber": args.portNumber,
        "protocol": args.protocol,
        "stats": args.stats,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAcosEventsLogServerPortStats.
 */
export interface GetAcosEventsLogServerPortStatsArgs {
    id?: string;
    name: string;
    portNumber: number;
    protocol: string;
    stats?: inputs.GetAcosEventsLogServerPortStatsStats;
}

/**
 * A collection of values returned by getAcosEventsLogServerPortStats.
 */
export interface GetAcosEventsLogServerPortStatsResult {
    readonly id: string;
    readonly name: string;
    readonly portNumber: number;
    readonly protocol: string;
    readonly stats?: outputs.GetAcosEventsLogServerPortStatsStats;
}
export function getAcosEventsLogServerPortStatsOutput(args: GetAcosEventsLogServerPortStatsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAcosEventsLogServerPortStatsResult> {
    return pulumi.output(args).apply((a: any) => getAcosEventsLogServerPortStats(a, opts))
}

/**
 * A collection of arguments for invoking getAcosEventsLogServerPortStats.
 */
export interface GetAcosEventsLogServerPortStatsOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    portNumber: pulumi.Input<number>;
    protocol: pulumi.Input<string>;
    stats?: pulumi.Input<inputs.GetAcosEventsLogServerPortStatsStatsArgs>;
}
