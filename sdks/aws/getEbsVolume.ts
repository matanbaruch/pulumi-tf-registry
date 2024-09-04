// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getEbsVolume(args?: GetEbsVolumeArgs, opts?: pulumi.InvokeOptions): Promise<GetEbsVolumeResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getEbsVolume:getEbsVolume", {
        "filters": args.filters,
        "id": args.id,
        "mostRecent": args.mostRecent,
        "tags": args.tags,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getEbsVolume.
 */
export interface GetEbsVolumeArgs {
    filters?: inputs.GetEbsVolumeFilter[];
    id?: string;
    mostRecent?: boolean;
    tags?: {[key: string]: string};
    timeouts?: inputs.GetEbsVolumeTimeouts;
}

/**
 * A collection of values returned by getEbsVolume.
 */
export interface GetEbsVolumeResult {
    readonly arn: string;
    readonly availabilityZone: string;
    readonly encrypted: boolean;
    readonly filters?: outputs.GetEbsVolumeFilter[];
    readonly id: string;
    readonly iops: number;
    readonly kmsKeyId: string;
    readonly mostRecent?: boolean;
    readonly multiAttachEnabled: boolean;
    readonly outpostArn: string;
    readonly size: number;
    readonly snapshotId: string;
    readonly tags: {[key: string]: string};
    readonly throughput: number;
    readonly timeouts?: outputs.GetEbsVolumeTimeouts;
    readonly volumeId: string;
    readonly volumeType: string;
}
export function getEbsVolumeOutput(args?: GetEbsVolumeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEbsVolumeResult> {
    return pulumi.output(args).apply((a: any) => getEbsVolume(a, opts))
}

/**
 * A collection of arguments for invoking getEbsVolume.
 */
export interface GetEbsVolumeOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetEbsVolumeFilterArgs>[]>;
    id?: pulumi.Input<string>;
    mostRecent?: pulumi.Input<boolean>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.GetEbsVolumeTimeoutsArgs>;
}
