// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getEc2CapacityReservationFleets(opts?: pulumi.InvokeOptions): Promise<GetEc2CapacityReservationFleetsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getEc2CapacityReservationFleets:getEc2CapacityReservationFleets", {
    }, opts, utilities.getPackage());
}

/**
 * A collection of values returned by getEc2CapacityReservationFleets.
 */
export interface GetEc2CapacityReservationFleetsResult {
    readonly id: string;
    readonly ids: string[];
}
export function getEc2CapacityReservationFleetsOutput(opts?: pulumi.InvokeOptions): pulumi.Output<GetEc2CapacityReservationFleetsResult> {
    return pulumi.output(getEc2CapacityReservationFleets(opts))
}
