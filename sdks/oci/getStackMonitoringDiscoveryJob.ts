// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getStackMonitoringDiscoveryJob(args: GetStackMonitoringDiscoveryJobArgs, opts?: pulumi.InvokeOptions): Promise<GetStackMonitoringDiscoveryJobResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getStackMonitoringDiscoveryJob:getStackMonitoringDiscoveryJob", {
        "discoveryJobId": args.discoveryJobId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getStackMonitoringDiscoveryJob.
 */
export interface GetStackMonitoringDiscoveryJobArgs {
    discoveryJobId: string;
}

/**
 * A collection of values returned by getStackMonitoringDiscoveryJob.
 */
export interface GetStackMonitoringDiscoveryJobResult {
    readonly compartmentId: string;
    readonly definedTags: {[key: string]: string};
    readonly discoveryClient: string;
    readonly discoveryDetails: outputs.GetStackMonitoringDiscoveryJobDiscoveryDetail[];
    readonly discoveryJobId: string;
    readonly discoveryType: string;
    readonly freeformTags: {[key: string]: string};
    readonly id: string;
    readonly shouldPropagateTagsToDiscoveredResources: boolean;
    readonly state: string;
    readonly status: string;
    readonly statusMessage: string;
    readonly systemTags: {[key: string]: string};
    readonly tenantId: string;
    readonly timeUpdated: string;
    readonly userId: string;
}
export function getStackMonitoringDiscoveryJobOutput(args: GetStackMonitoringDiscoveryJobOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStackMonitoringDiscoveryJobResult> {
    return pulumi.output(args).apply((a: any) => getStackMonitoringDiscoveryJob(a, opts))
}

/**
 * A collection of arguments for invoking getStackMonitoringDiscoveryJob.
 */
export interface GetStackMonitoringDiscoveryJobOutputArgs {
    discoveryJobId: pulumi.Input<string>;
}
