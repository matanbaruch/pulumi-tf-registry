// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getQuotasQuotaAlarms(args?: GetQuotasQuotaAlarmsArgs, opts?: pulumi.InvokeOptions): Promise<GetQuotasQuotaAlarmsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("alicloud:index/getQuotasQuotaAlarms:getQuotasQuotaAlarms", {
        "enableDetails": args.enableDetails,
        "id": args.id,
        "ids": args.ids,
        "nameRegex": args.nameRegex,
        "outputFile": args.outputFile,
        "productCode": args.productCode,
        "quotaActionCode": args.quotaActionCode,
        "quotaAlarmName": args.quotaAlarmName,
        "quotaDimensions": args.quotaDimensions,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getQuotasQuotaAlarms.
 */
export interface GetQuotasQuotaAlarmsArgs {
    enableDetails?: boolean;
    id?: string;
    ids?: string[];
    nameRegex?: string;
    outputFile?: string;
    productCode?: string;
    quotaActionCode?: string;
    quotaAlarmName?: string;
    quotaDimensions?: inputs.GetQuotasQuotaAlarmsQuotaDimension[];
}

/**
 * A collection of values returned by getQuotasQuotaAlarms.
 */
export interface GetQuotasQuotaAlarmsResult {
    readonly alarms: outputs.GetQuotasQuotaAlarmsAlarm[];
    readonly enableDetails?: boolean;
    readonly id: string;
    readonly ids: string[];
    readonly nameRegex?: string;
    readonly names: string[];
    readonly outputFile?: string;
    readonly productCode?: string;
    readonly quotaActionCode?: string;
    readonly quotaAlarmName?: string;
    readonly quotaDimensions?: outputs.GetQuotasQuotaAlarmsQuotaDimension[];
}
export function getQuotasQuotaAlarmsOutput(args?: GetQuotasQuotaAlarmsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetQuotasQuotaAlarmsResult> {
    return pulumi.output(args).apply((a: any) => getQuotasQuotaAlarms(a, opts))
}

/**
 * A collection of arguments for invoking getQuotasQuotaAlarms.
 */
export interface GetQuotasQuotaAlarmsOutputArgs {
    enableDetails?: pulumi.Input<boolean>;
    id?: pulumi.Input<string>;
    ids?: pulumi.Input<pulumi.Input<string>[]>;
    nameRegex?: pulumi.Input<string>;
    outputFile?: pulumi.Input<string>;
    productCode?: pulumi.Input<string>;
    quotaActionCode?: pulumi.Input<string>;
    quotaAlarmName?: pulumi.Input<string>;
    quotaDimensions?: pulumi.Input<pulumi.Input<inputs.GetQuotasQuotaAlarmsQuotaDimensionArgs>[]>;
}
