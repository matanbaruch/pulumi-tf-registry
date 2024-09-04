// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getMonitorAlarmBasicAlarms(args: GetMonitorAlarmBasicAlarmsArgs, opts?: pulumi.InvokeOptions): Promise<GetMonitorAlarmBasicAlarmsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getMonitorAlarmBasicAlarms:getMonitorAlarmBasicAlarms", {
        "alarmStatuses": args.alarmStatuses,
        "endTime": args.endTime,
        "id": args.id,
        "instanceGroupIds": args.instanceGroupIds,
        "metricNames": args.metricNames,
        "module": args.module,
        "objLike": args.objLike,
        "occurTimeOrder": args.occurTimeOrder,
        "projectIds": args.projectIds,
        "resultOutputFile": args.resultOutputFile,
        "startTime": args.startTime,
        "viewNames": args.viewNames,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMonitorAlarmBasicAlarms.
 */
export interface GetMonitorAlarmBasicAlarmsArgs {
    alarmStatuses?: number[];
    endTime?: number;
    id?: string;
    instanceGroupIds?: number[];
    metricNames?: string[];
    module: string;
    objLike?: string;
    occurTimeOrder?: string;
    projectIds?: number[];
    resultOutputFile?: string;
    startTime?: number;
    viewNames?: string[];
}

/**
 * A collection of values returned by getMonitorAlarmBasicAlarms.
 */
export interface GetMonitorAlarmBasicAlarmsResult {
    readonly alarmStatuses?: number[];
    readonly alarms: outputs.GetMonitorAlarmBasicAlarmsAlarm[];
    readonly endTime?: number;
    readonly id: string;
    readonly instanceGroupIds?: number[];
    readonly metricNames?: string[];
    readonly module: string;
    readonly objLike?: string;
    readonly occurTimeOrder?: string;
    readonly projectIds?: number[];
    readonly resultOutputFile?: string;
    readonly startTime?: number;
    readonly viewNames?: string[];
    readonly warning: string;
}
export function getMonitorAlarmBasicAlarmsOutput(args: GetMonitorAlarmBasicAlarmsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMonitorAlarmBasicAlarmsResult> {
    return pulumi.output(args).apply((a: any) => getMonitorAlarmBasicAlarms(a, opts))
}

/**
 * A collection of arguments for invoking getMonitorAlarmBasicAlarms.
 */
export interface GetMonitorAlarmBasicAlarmsOutputArgs {
    alarmStatuses?: pulumi.Input<pulumi.Input<number>[]>;
    endTime?: pulumi.Input<number>;
    id?: pulumi.Input<string>;
    instanceGroupIds?: pulumi.Input<pulumi.Input<number>[]>;
    metricNames?: pulumi.Input<pulumi.Input<string>[]>;
    module: pulumi.Input<string>;
    objLike?: pulumi.Input<string>;
    occurTimeOrder?: pulumi.Input<string>;
    projectIds?: pulumi.Input<pulumi.Input<number>[]>;
    resultOutputFile?: pulumi.Input<string>;
    startTime?: pulumi.Input<number>;
    viewNames?: pulumi.Input<pulumi.Input<string>[]>;
}
