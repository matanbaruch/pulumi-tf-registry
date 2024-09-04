// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSharedImageVersion(args: GetSharedImageVersionArgs, opts?: pulumi.InvokeOptions): Promise<GetSharedImageVersionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azurerm:index/getSharedImageVersion:getSharedImageVersion", {
        "galleryName": args.galleryName,
        "id": args.id,
        "imageName": args.imageName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "sortVersionsBySemver": args.sortVersionsBySemver,
        "tags": args.tags,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSharedImageVersion.
 */
export interface GetSharedImageVersionArgs {
    galleryName: string;
    id?: string;
    imageName: string;
    name: string;
    resourceGroupName: string;
    sortVersionsBySemver?: boolean;
    tags?: {[key: string]: string};
    timeouts?: inputs.GetSharedImageVersionTimeouts;
}

/**
 * A collection of values returned by getSharedImageVersion.
 */
export interface GetSharedImageVersionResult {
    readonly excludeFromLatest: boolean;
    readonly galleryName: string;
    readonly id: string;
    readonly imageName: string;
    readonly location: string;
    readonly managedImageId: string;
    readonly name: string;
    readonly osDiskImageSizeGb: number;
    readonly osDiskSnapshotId: string;
    readonly resourceGroupName: string;
    readonly sortVersionsBySemver?: boolean;
    readonly tags?: {[key: string]: string};
    readonly targetRegions: outputs.GetSharedImageVersionTargetRegion[];
    readonly timeouts?: outputs.GetSharedImageVersionTimeouts;
}
export function getSharedImageVersionOutput(args: GetSharedImageVersionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSharedImageVersionResult> {
    return pulumi.output(args).apply((a: any) => getSharedImageVersion(a, opts))
}

/**
 * A collection of arguments for invoking getSharedImageVersion.
 */
export interface GetSharedImageVersionOutputArgs {
    galleryName: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    imageName: pulumi.Input<string>;
    name: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    sortVersionsBySemver?: pulumi.Input<boolean>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.GetSharedImageVersionTimeoutsArgs>;
}
