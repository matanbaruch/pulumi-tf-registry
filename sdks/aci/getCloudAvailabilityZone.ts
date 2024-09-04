// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getCloudAvailabilityZone(args: GetCloudAvailabilityZoneArgs, opts?: pulumi.InvokeOptions): Promise<GetCloudAvailabilityZoneResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aci:index/getCloudAvailabilityZone:getCloudAvailabilityZone", {
        "annotation": args.annotation,
        "cloudProvidersRegionDn": args.cloudProvidersRegionDn,
        "id": args.id,
        "name": args.name,
        "nameAlias": args.nameAlias,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCloudAvailabilityZone.
 */
export interface GetCloudAvailabilityZoneArgs {
    annotation?: string;
    cloudProvidersRegionDn: string;
    id?: string;
    name: string;
    nameAlias?: string;
}

/**
 * A collection of values returned by getCloudAvailabilityZone.
 */
export interface GetCloudAvailabilityZoneResult {
    readonly annotation: string;
    readonly cloudProvidersRegionDn: string;
    readonly id: string;
    readonly name: string;
    readonly nameAlias: string;
}
export function getCloudAvailabilityZoneOutput(args: GetCloudAvailabilityZoneOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCloudAvailabilityZoneResult> {
    return pulumi.output(args).apply((a: any) => getCloudAvailabilityZone(a, opts))
}

/**
 * A collection of arguments for invoking getCloudAvailabilityZone.
 */
export interface GetCloudAvailabilityZoneOutputArgs {
    annotation?: pulumi.Input<string>;
    cloudProvidersRegionDn: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
}
