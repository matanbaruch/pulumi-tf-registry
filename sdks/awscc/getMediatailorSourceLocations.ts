// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getMediatailorSourceLocations(opts?: pulumi.InvokeOptions): Promise<GetMediatailorSourceLocationsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getMediatailorSourceLocations:getMediatailorSourceLocations", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getMediatailorSourceLocations.
 */
export interface GetMediatailorSourceLocationsResult {
    readonly id: string;
    readonly ids: string[];
}
export function getMediatailorSourceLocationsOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetMediatailorSourceLocationsResult> {
    return pulumi.output(getMediatailorSourceLocations(opts))
}
