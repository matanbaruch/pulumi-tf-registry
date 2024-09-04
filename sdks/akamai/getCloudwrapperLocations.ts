// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCloudwrapperLocations(args?: GetCloudwrapperLocationsArgs, opts?: pulumi.InvokeOptions): Promise<GetCloudwrapperLocationsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("akamai:index/getCloudwrapperLocations:getCloudwrapperLocations", {
        "locations": args.locations,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCloudwrapperLocations.
 */
export interface GetCloudwrapperLocationsArgs {
    locations?: inputs.GetCloudwrapperLocationsLocation[];
}

/**
 * A collection of values returned by getCloudwrapperLocations.
 */
export interface GetCloudwrapperLocationsResult {
    /**
     * @deprecated Deprecated
     */
    readonly id: string;
    readonly locations?: outputs.GetCloudwrapperLocationsLocation[];
}
export function getCloudwrapperLocationsOutput(args?: GetCloudwrapperLocationsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCloudwrapperLocationsResult> {
    return pulumi.output(args).apply((a: any) => getCloudwrapperLocations(a, opts))
}

/**
 * A collection of arguments for invoking getCloudwrapperLocations.
 */
export interface GetCloudwrapperLocationsOutputArgs {
    locations?: pulumi.Input<pulumi.Input<inputs.GetCloudwrapperLocationsLocationArgs>[]>;
}
