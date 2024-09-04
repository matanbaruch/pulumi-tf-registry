// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getVolume(args: GetVolumeArgs, opts?: pulumi.InvokeOptions): Promise<GetVolumeResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("gcore:index/getVolume:getVolume", {
        "id": args.id,
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
 * A collection of arguments for invoking getVolume.
 */
export interface GetVolumeArgs {
    id?: string;
    metadataK?: string;
    metadataKv?: {[key: string]: string};
    name: string;
    projectId?: number;
    projectName?: string;
    regionId?: number;
    regionName?: string;
}

/**
 * A collection of values returned by getVolume.
 */
export interface GetVolumeResult {
    readonly id: string;
    readonly metadataK?: string;
    readonly metadataKv?: {[key: string]: string};
    readonly metadataReadOnlies: outputs.GetVolumeMetadataReadOnly[];
    readonly name: string;
    readonly projectId?: number;
    readonly projectName?: string;
    readonly regionId?: number;
    readonly regionName?: string;
    readonly size: number;
    readonly typeName: string;
}
export function getVolumeOutput(args: GetVolumeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVolumeResult> {
    return pulumi.output(args).apply((a: any) => getVolume(a, opts))
}

/**
 * A collection of arguments for invoking getVolume.
 */
export interface GetVolumeOutputArgs {
    id?: pulumi.Input<string>;
    metadataK?: pulumi.Input<string>;
    metadataKv?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    name: pulumi.Input<string>;
    projectId?: pulumi.Input<number>;
    projectName?: pulumi.Input<string>;
    regionId?: pulumi.Input<number>;
    regionName?: pulumi.Input<string>;
}
