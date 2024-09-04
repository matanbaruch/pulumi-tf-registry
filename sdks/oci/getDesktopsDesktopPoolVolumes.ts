// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDesktopsDesktopPoolVolumes(args: GetDesktopsDesktopPoolVolumesArgs, opts?: pulumi.InvokeOptions): Promise<GetDesktopsDesktopPoolVolumesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDesktopsDesktopPoolVolumes:getDesktopsDesktopPoolVolumes", {
        "availabilityDomain": args.availabilityDomain,
        "compartmentId": args.compartmentId,
        "desktopPoolId": args.desktopPoolId,
        "displayName": args.displayName,
        "filters": args.filters,
        "id": args.id,
        "state": args.state,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDesktopsDesktopPoolVolumes.
 */
export interface GetDesktopsDesktopPoolVolumesArgs {
    availabilityDomain?: string;
    compartmentId: string;
    desktopPoolId: string;
    displayName?: string;
    filters?: inputs.GetDesktopsDesktopPoolVolumesFilter[];
    id?: string;
    state?: string;
}

/**
 * A collection of values returned by getDesktopsDesktopPoolVolumes.
 */
export interface GetDesktopsDesktopPoolVolumesResult {
    readonly availabilityDomain?: string;
    readonly compartmentId: string;
    readonly desktopPoolId: string;
    readonly desktopPoolVolumeCollections: outputs.GetDesktopsDesktopPoolVolumesDesktopPoolVolumeCollection[];
    readonly displayName?: string;
    readonly filters?: outputs.GetDesktopsDesktopPoolVolumesFilter[];
    readonly id?: string;
    readonly state?: string;
}
export function getDesktopsDesktopPoolVolumesOutput(args: GetDesktopsDesktopPoolVolumesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDesktopsDesktopPoolVolumesResult> {
    return pulumi.output(args).apply((a: any) => getDesktopsDesktopPoolVolumes(a, opts))
}

/**
 * A collection of arguments for invoking getDesktopsDesktopPoolVolumes.
 */
export interface GetDesktopsDesktopPoolVolumesOutputArgs {
    availabilityDomain?: pulumi.Input<string>;
    compartmentId: pulumi.Input<string>;
    desktopPoolId: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetDesktopsDesktopPoolVolumesFilterArgs>[]>;
    id?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
}
