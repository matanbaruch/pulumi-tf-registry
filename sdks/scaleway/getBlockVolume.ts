// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getBlockVolume(args?: GetBlockVolumeArgs, opts?: pulumi.InvokeOptions): Promise<GetBlockVolumeResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("scaleway:index/getBlockVolume:getBlockVolume", {
        "id": args.id,
        "name": args.name,
        "projectId": args.projectId,
        "volumeId": args.volumeId,
        "zone": args.zone,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getBlockVolume.
 */
export interface GetBlockVolumeArgs {
    id?: string;
    name?: string;
    projectId?: string;
    volumeId?: string;
    zone?: string;
}

/**
 * A collection of values returned by getBlockVolume.
 */
export interface GetBlockVolumeResult {
    readonly id: string;
    readonly iops: number;
    readonly name?: string;
    readonly projectId?: string;
    readonly sizeInGb: number;
    readonly snapshotId: string;
    readonly tags: string[];
    readonly volumeId?: string;
    readonly zone?: string;
}
export function getBlockVolumeOutput(args?: GetBlockVolumeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBlockVolumeResult> {
    return pulumi.output(args).apply((a: any) => getBlockVolume(a, opts))
}

/**
 * A collection of arguments for invoking getBlockVolume.
 */
export interface GetBlockVolumeOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    projectId?: pulumi.Input<string>;
    volumeId?: pulumi.Input<string>;
    zone?: pulumi.Input<string>;
}
