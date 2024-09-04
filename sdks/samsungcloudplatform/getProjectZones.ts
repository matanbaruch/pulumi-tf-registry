// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getProjectZones(args: GetProjectZonesArgs, opts?: pulumi.InvokeOptions): Promise<GetProjectZonesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("samsungcloudplatform:index/getProjectZones:getProjectZones", {
        "filters": args.filters,
        "id": args.id,
        "projectId": args.projectId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getProjectZones.
 */
export interface GetProjectZonesArgs {
    filters?: inputs.GetProjectZonesFilter[];
    id?: string;
    projectId: string;
}

/**
 * A collection of values returned by getProjectZones.
 */
export interface GetProjectZonesResult {
    readonly contents: outputs.GetProjectZonesContent[];
    readonly filters?: outputs.GetProjectZonesFilter[];
    readonly id: string;
    readonly projectId: string;
    readonly totalCount: number;
}
export function getProjectZonesOutput(args: GetProjectZonesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetProjectZonesResult> {
    return pulumi.output(args).apply((a: any) => getProjectZones(a, opts))
}

/**
 * A collection of arguments for invoking getProjectZones.
 */
export interface GetProjectZonesOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetProjectZonesFilterArgs>[]>;
    id?: pulumi.Input<string>;
    projectId: pulumi.Input<string>;
}
