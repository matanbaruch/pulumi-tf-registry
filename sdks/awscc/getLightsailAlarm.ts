// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getLightsailAlarm(args: GetLightsailAlarmArgs, opts?: pulumi.InvokeOptions): Promise<GetLightsailAlarmResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getLightsailAlarm:getLightsailAlarm", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLightsailAlarm.
 */
export interface GetLightsailAlarmArgs {
    id: string;
}

/**
 * A collection of values returned by getLightsailAlarm.
 */
export interface GetLightsailAlarmResult {
    readonly alarmArn: string;
    readonly alarmName: string;
    readonly comparisonOperator: string;
    readonly contactProtocols: string[];
    readonly datapointsToAlarm: number;
    readonly evaluationPeriods: number;
    readonly id: string;
    readonly metricName: string;
    readonly monitoredResourceName: string;
    readonly notificationEnabled: boolean;
    readonly notificationTriggers: string[];
    readonly state: string;
    readonly threshold: number;
    readonly treatMissingData: string;
}
export function getLightsailAlarmOutput(args: GetLightsailAlarmOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLightsailAlarmResult> {
    return pulumi.output(args).apply((a: any) => getLightsailAlarm(a, opts))
}

/**
 * A collection of arguments for invoking getLightsailAlarm.
 */
export interface GetLightsailAlarmOutputArgs {
    id: pulumi.Input<string>;
}
