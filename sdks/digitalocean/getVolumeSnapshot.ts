// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getVolumeSnapshot(args?: GetVolumeSnapshotArgs, opts?: pulumi.InvokeOptions): Promise<GetVolumeSnapshotResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("digitalocean:index/getVolumeSnapshot:getVolumeSnapshot", {
        "id": args.id,
        "mostRecent": args.mostRecent,
        "name": args.name,
        "nameRegex": args.nameRegex,
        "region": args.region,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVolumeSnapshot.
 */
export interface GetVolumeSnapshotArgs {
    id?: string;
    mostRecent?: boolean;
    name?: string;
    nameRegex?: string;
    region?: string;
}

/**
 * A collection of values returned by getVolumeSnapshot.
 */
export interface GetVolumeSnapshotResult {
    readonly createdAt: string;
    readonly id: string;
    readonly minDiskSize: number;
    readonly mostRecent?: boolean;
    readonly name?: string;
    readonly nameRegex?: string;
    readonly region?: string;
    readonly regions: string[];
    readonly size: number;
    readonly tags: string[];
    readonly volumeId: string;
}
export function getVolumeSnapshotOutput(args?: GetVolumeSnapshotOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVolumeSnapshotResult> {
    return pulumi.output(args).apply((a: any) => getVolumeSnapshot(a, opts))
}

/**
 * A collection of arguments for invoking getVolumeSnapshot.
 */
export interface GetVolumeSnapshotOutputArgs {
    id?: pulumi.Input<string>;
    mostRecent?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    nameRegex?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
}
