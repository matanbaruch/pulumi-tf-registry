// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getHealthChecksHttpMonitor(args: GetHealthChecksHttpMonitorArgs, opts?: pulumi.InvokeOptions): Promise<GetHealthChecksHttpMonitorResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getHealthChecksHttpMonitor:getHealthChecksHttpMonitor", {
        "monitorId": args.monitorId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getHealthChecksHttpMonitor.
 */
export interface GetHealthChecksHttpMonitorArgs {
    monitorId: string;
}

/**
 * A collection of values returned by getHealthChecksHttpMonitor.
 */
export interface GetHealthChecksHttpMonitorResult {
    readonly compartmentId: string;
    readonly definedTags: {[key: string]: string};
    readonly displayName: string;
    readonly freeformTags: {[key: string]: string};
    readonly headers: {[key: string]: string};
    readonly homeRegion: string;
    readonly id: string;
    readonly intervalInSeconds: number;
    readonly isEnabled: boolean;
    readonly method: string;
    readonly monitorId: string;
    readonly path: string;
    readonly port: number;
    readonly protocol: string;
    readonly resultsUrl: string;
    readonly targets: string[];
    readonly timeCreated: string;
    readonly timeoutInSeconds: number;
    readonly vantagePointNames: string[];
}
export function getHealthChecksHttpMonitorOutput(args: GetHealthChecksHttpMonitorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetHealthChecksHttpMonitorResult> {
    return pulumi.output(args).apply((a: any) => getHealthChecksHttpMonitor(a, opts))
}

/**
 * A collection of arguments for invoking getHealthChecksHttpMonitor.
 */
export interface GetHealthChecksHttpMonitorOutputArgs {
    monitorId: pulumi.Input<string>;
}
