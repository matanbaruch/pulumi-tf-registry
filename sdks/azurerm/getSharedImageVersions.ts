// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSharedImageVersions(args: GetSharedImageVersionsArgs, opts?: pulumi.InvokeOptions): Promise<GetSharedImageVersionsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azurerm:index/getSharedImageVersions:getSharedImageVersions", {
        "galleryName": args.galleryName,
        "id": args.id,
        "imageName": args.imageName,
        "resourceGroupName": args.resourceGroupName,
        "tagsFilter": args.tagsFilter,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSharedImageVersions.
 */
export interface GetSharedImageVersionsArgs {
    galleryName: string;
    id?: string;
    imageName: string;
    resourceGroupName: string;
    tagsFilter?: {[key: string]: string};
    timeouts?: inputs.GetSharedImageVersionsTimeouts;
}

/**
 * A collection of values returned by getSharedImageVersions.
 */
export interface GetSharedImageVersionsResult {
    readonly galleryName: string;
    readonly id: string;
    readonly imageName: string;
    readonly images: outputs.GetSharedImageVersionsImage[];
    readonly resourceGroupName: string;
    readonly tagsFilter?: {[key: string]: string};
    readonly timeouts?: outputs.GetSharedImageVersionsTimeouts;
}
export function getSharedImageVersionsOutput(args: GetSharedImageVersionsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSharedImageVersionsResult> {
    return pulumi.output(args).apply((a: any) => getSharedImageVersions(a, opts))
}

/**
 * A collection of arguments for invoking getSharedImageVersions.
 */
export interface GetSharedImageVersionsOutputArgs {
    galleryName: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    imageName: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    tagsFilter?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.GetSharedImageVersionsTimeoutsArgs>;
}
