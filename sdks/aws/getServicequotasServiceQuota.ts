// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getServicequotasServiceQuota(args: GetServicequotasServiceQuotaArgs, opts?: pulumi.InvokeOptions): Promise<GetServicequotasServiceQuotaResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getServicequotasServiceQuota:getServicequotasServiceQuota", {
        "id": args.id,
        "quotaCode": args.quotaCode,
        "quotaName": args.quotaName,
        "serviceCode": args.serviceCode,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getServicequotasServiceQuota.
 */
export interface GetServicequotasServiceQuotaArgs {
    id?: string;
    quotaCode?: string;
    quotaName?: string;
    serviceCode: string;
}

/**
 * A collection of values returned by getServicequotasServiceQuota.
 */
export interface GetServicequotasServiceQuotaResult {
    readonly adjustable: boolean;
    readonly arn: string;
    readonly defaultValue: number;
    readonly globalQuota: boolean;
    readonly id: string;
    readonly quotaCode: string;
    readonly quotaName: string;
    readonly serviceCode: string;
    readonly serviceName: string;
    readonly usageMetrics: outputs.GetServicequotasServiceQuotaUsageMetric[];
    readonly value: number;
}
export function getServicequotasServiceQuotaOutput(args: GetServicequotasServiceQuotaOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServicequotasServiceQuotaResult> {
    return pulumi.output(args).apply((a: any) => getServicequotasServiceQuota(a, opts))
}

/**
 * A collection of arguments for invoking getServicequotasServiceQuota.
 */
export interface GetServicequotasServiceQuotaOutputArgs {
    id?: pulumi.Input<string>;
    quotaCode?: pulumi.Input<string>;
    quotaName?: pulumi.Input<string>;
    serviceCode: pulumi.Input<string>;
}
