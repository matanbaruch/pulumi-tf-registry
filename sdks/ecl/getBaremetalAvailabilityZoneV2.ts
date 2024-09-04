// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getBaremetalAvailabilityZoneV2(args?: GetBaremetalAvailabilityZoneV2Args, opts?: pulumi.InvokeOptions): Promise<GetBaremetalAvailabilityZoneV2Result> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("ecl:index/getBaremetalAvailabilityZoneV2:getBaremetalAvailabilityZoneV2", {
        "id": args.id,
        "zoneName": args.zoneName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getBaremetalAvailabilityZoneV2.
 */
export interface GetBaremetalAvailabilityZoneV2Args {
    id?: string;
    zoneName?: string;
}

/**
 * A collection of values returned by getBaremetalAvailabilityZoneV2.
 */
export interface GetBaremetalAvailabilityZoneV2Result {
    readonly id: string;
    readonly zoneName: string;
}
export function getBaremetalAvailabilityZoneV2Output(args?: GetBaremetalAvailabilityZoneV2OutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBaremetalAvailabilityZoneV2Result> {
    return pulumi.output(args).apply((a: any) => getBaremetalAvailabilityZoneV2(a, opts))
}

/**
 * A collection of arguments for invoking getBaremetalAvailabilityZoneV2.
 */
export interface GetBaremetalAvailabilityZoneV2OutputArgs {
    id?: pulumi.Input<string>;
    zoneName?: pulumi.Input<string>;
}
