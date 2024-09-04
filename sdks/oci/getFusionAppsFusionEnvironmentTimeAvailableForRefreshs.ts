// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getFusionAppsFusionEnvironmentTimeAvailableForRefreshs(args: GetFusionAppsFusionEnvironmentTimeAvailableForRefreshsArgs, opts?: pulumi.InvokeOptions): Promise<GetFusionAppsFusionEnvironmentTimeAvailableForRefreshsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getFusionAppsFusionEnvironmentTimeAvailableForRefreshs:getFusionAppsFusionEnvironmentTimeAvailableForRefreshs", {
        "filters": args.filters,
        "fusionEnvironmentId": args.fusionEnvironmentId,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFusionAppsFusionEnvironmentTimeAvailableForRefreshs.
 */
export interface GetFusionAppsFusionEnvironmentTimeAvailableForRefreshsArgs {
    filters?: inputs.GetFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilter[];
    fusionEnvironmentId: string;
    id?: string;
}

/**
 * A collection of values returned by getFusionAppsFusionEnvironmentTimeAvailableForRefreshs.
 */
export interface GetFusionAppsFusionEnvironmentTimeAvailableForRefreshsResult {
    readonly filters?: outputs.GetFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilter[];
    readonly fusionEnvironmentId: string;
    readonly id: string;
    readonly timeAvailableForRefreshCollections: outputs.GetFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollection[];
}
export function getFusionAppsFusionEnvironmentTimeAvailableForRefreshsOutput(args: GetFusionAppsFusionEnvironmentTimeAvailableForRefreshsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFusionAppsFusionEnvironmentTimeAvailableForRefreshsResult> {
    return pulumi.output(args).apply((a: any) => getFusionAppsFusionEnvironmentTimeAvailableForRefreshs(a, opts))
}

/**
 * A collection of arguments for invoking getFusionAppsFusionEnvironmentTimeAvailableForRefreshs.
 */
export interface GetFusionAppsFusionEnvironmentTimeAvailableForRefreshsOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterArgs>[]>;
    fusionEnvironmentId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
}
