// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getMonitorProductEvent(args?: GetMonitorProductEventArgs, opts?: pulumi.InvokeOptions): Promise<GetMonitorProductEventResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getMonitorProductEvent:getMonitorProductEvent", {
        "dimensions": args.dimensions,
        "endTime": args.endTime,
        "eventNames": args.eventNames,
        "id": args.id,
        "instanceIds": args.instanceIds,
        "isAlarmConfig": args.isAlarmConfig,
        "productNames": args.productNames,
        "projectIds": args.projectIds,
        "regionLists": args.regionLists,
        "resultOutputFile": args.resultOutputFile,
        "startTime": args.startTime,
        "statuses": args.statuses,
        "types": args.types,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMonitorProductEvent.
 */
export interface GetMonitorProductEventArgs {
    dimensions?: inputs.GetMonitorProductEventDimension[];
    endTime?: number;
    eventNames?: string[];
    id?: string;
    instanceIds?: string[];
    isAlarmConfig?: number;
    productNames?: string[];
    projectIds?: string[];
    regionLists?: string[];
    resultOutputFile?: string;
    startTime?: number;
    statuses?: string[];
    types?: string[];
}

/**
 * A collection of values returned by getMonitorProductEvent.
 */
export interface GetMonitorProductEventResult {
    readonly dimensions?: outputs.GetMonitorProductEventDimension[];
    readonly endTime?: number;
    readonly eventNames?: string[];
    readonly id: string;
    readonly instanceIds?: string[];
    readonly isAlarmConfig?: number;
    readonly lists: outputs.GetMonitorProductEventList[];
    readonly productNames?: string[];
    readonly projectIds?: string[];
    readonly regionLists?: string[];
    readonly resultOutputFile?: string;
    readonly startTime?: number;
    readonly statuses?: string[];
    readonly types?: string[];
}
export function getMonitorProductEventOutput(args?: GetMonitorProductEventOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMonitorProductEventResult> {
    return pulumi.output(args).apply((a: any) => getMonitorProductEvent(a, opts))
}

/**
 * A collection of arguments for invoking getMonitorProductEvent.
 */
export interface GetMonitorProductEventOutputArgs {
    dimensions?: pulumi.Input<pulumi.Input<inputs.GetMonitorProductEventDimensionArgs>[]>;
    endTime?: pulumi.Input<number>;
    eventNames?: pulumi.Input<pulumi.Input<string>[]>;
    id?: pulumi.Input<string>;
    instanceIds?: pulumi.Input<pulumi.Input<string>[]>;
    isAlarmConfig?: pulumi.Input<number>;
    productNames?: pulumi.Input<pulumi.Input<string>[]>;
    projectIds?: pulumi.Input<pulumi.Input<string>[]>;
    regionLists?: pulumi.Input<pulumi.Input<string>[]>;
    resultOutputFile?: pulumi.Input<string>;
    startTime?: pulumi.Input<number>;
    statuses?: pulumi.Input<pulumi.Input<string>[]>;
    types?: pulumi.Input<pulumi.Input<string>[]>;
}
