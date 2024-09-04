// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSystemPerformanceMonitoringProfileParcel(args: GetSystemPerformanceMonitoringProfileParcelArgs, opts?: pulumi.InvokeOptions): Promise<GetSystemPerformanceMonitoringProfileParcelResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("sdwan:index/getSystemPerformanceMonitoringProfileParcel:getSystemPerformanceMonitoringProfileParcel", {
        "featureProfileId": args.featureProfileId,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSystemPerformanceMonitoringProfileParcel.
 */
export interface GetSystemPerformanceMonitoringProfileParcelArgs {
    featureProfileId: string;
    id: string;
}

/**
 * A collection of values returned by getSystemPerformanceMonitoringProfileParcel.
 */
export interface GetSystemPerformanceMonitoringProfileParcelResult {
    readonly appPerfMonitorAppGroups: string[];
    readonly appPerfMonitorEnabled: boolean;
    readonly description: string;
    readonly eventDrivenConfigEnabled: boolean;
    readonly eventDrivenEvents: string[];
    readonly featureProfileId: string;
    readonly id: string;
    readonly monitoringConfigEnabled: boolean;
    readonly monitoringConfigInterval: string;
    readonly name: string;
    readonly version: number;
}
export function getSystemPerformanceMonitoringProfileParcelOutput(args: GetSystemPerformanceMonitoringProfileParcelOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSystemPerformanceMonitoringProfileParcelResult> {
    return pulumi.output(args).apply((a: any) => getSystemPerformanceMonitoringProfileParcel(a, opts))
}

/**
 * A collection of arguments for invoking getSystemPerformanceMonitoringProfileParcel.
 */
export interface GetSystemPerformanceMonitoringProfileParcelOutputArgs {
    featureProfileId: pulumi.Input<string>;
    id: pulumi.Input<string>;
}
