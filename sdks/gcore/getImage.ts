// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getImage(args: GetImageArgs, opts?: pulumi.InvokeOptions): Promise<GetImageResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("gcore:index/getImage:getImage", {
        "id": args.id,
        "isBaremetal": args.isBaremetal,
        "metadataK": args.metadataK,
        "metadataKv": args.metadataKv,
        "name": args.name,
        "projectId": args.projectId,
        "projectName": args.projectName,
        "regionId": args.regionId,
        "regionName": args.regionName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getImage.
 */
export interface GetImageArgs {
    id?: string;
    isBaremetal?: boolean;
    metadataK?: string;
    metadataKv?: {[key: string]: string};
    name: string;
    projectId?: number;
    projectName?: string;
    regionId?: number;
    regionName?: string;
}

/**
 * A collection of values returned by getImage.
 */
export interface GetImageResult {
    readonly description: string;
    readonly id: string;
    readonly isBaremetal?: boolean;
    readonly metadataK?: string;
    readonly metadataKv?: {[key: string]: string};
    readonly metadataReadOnlies: outputs.GetImageMetadataReadOnly[];
    readonly minDisk: number;
    readonly minRam: number;
    readonly name: string;
    readonly osDistro: string;
    readonly osVersion: string;
    readonly projectId?: number;
    readonly projectName?: string;
    readonly regionId?: number;
    readonly regionName?: string;
}
export function getImageOutput(args: GetImageOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetImageResult> {
    return pulumi.output(args).apply((a: any) => getImage(a, opts))
}

/**
 * A collection of arguments for invoking getImage.
 */
export interface GetImageOutputArgs {
    id?: pulumi.Input<string>;
    isBaremetal?: pulumi.Input<boolean>;
    metadataK?: pulumi.Input<string>;
    metadataKv?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    name: pulumi.Input<string>;
    projectId?: pulumi.Input<number>;
    projectName?: pulumi.Input<string>;
    regionId?: pulumi.Input<number>;
    regionName?: pulumi.Input<string>;
}
