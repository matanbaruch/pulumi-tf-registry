// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getPagespeedMonitoringLocations(args?: GetPagespeedMonitoringLocationsArgs, opts?: pulumi.InvokeOptions): Promise<GetPagespeedMonitoringLocationsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("statuscake:index/getPagespeedMonitoringLocations:getPagespeedMonitoringLocations", {
        "id": args.id,
        "regionCode": args.regionCode,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPagespeedMonitoringLocations.
 */
export interface GetPagespeedMonitoringLocationsArgs {
    id?: string;
    regionCode?: string;
}

/**
 * A collection of values returned by getPagespeedMonitoringLocations.
 */
export interface GetPagespeedMonitoringLocationsResult {
    readonly id: string;
    readonly locations: outputs.GetPagespeedMonitoringLocationsLocation[];
    readonly regionCode?: string;
}
export function getPagespeedMonitoringLocationsOutput(args?: GetPagespeedMonitoringLocationsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPagespeedMonitoringLocationsResult> {
    return pulumi.output(args).apply((a: any) => getPagespeedMonitoringLocations(a, opts))
}

/**
 * A collection of arguments for invoking getPagespeedMonitoringLocations.
 */
export interface GetPagespeedMonitoringLocationsOutputArgs {
    id?: pulumi.Input<string>;
    regionCode?: pulumi.Input<string>;
}
