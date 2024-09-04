// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCoreVolumeGroupReplica(args: GetCoreVolumeGroupReplicaArgs, opts?: pulumi.InvokeOptions): Promise<GetCoreVolumeGroupReplicaResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getCoreVolumeGroupReplica:getCoreVolumeGroupReplica", {
        "id": args.id,
        "volumeGroupReplicaId": args.volumeGroupReplicaId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCoreVolumeGroupReplica.
 */
export interface GetCoreVolumeGroupReplicaArgs {
    id?: string;
    volumeGroupReplicaId: string;
}

/**
 * A collection of values returned by getCoreVolumeGroupReplica.
 */
export interface GetCoreVolumeGroupReplicaResult {
    readonly availabilityDomain: string;
    readonly compartmentId: string;
    readonly definedTags: {[key: string]: string};
    readonly displayName: string;
    readonly freeformTags: {[key: string]: string};
    readonly id: string;
    readonly memberReplicas: outputs.GetCoreVolumeGroupReplicaMemberReplica[];
    readonly sizeInGbs: string;
    readonly state: string;
    readonly timeCreated: string;
    readonly timeLastSynced: string;
    readonly volumeGroupId: string;
    readonly volumeGroupReplicaId: string;
}
export function getCoreVolumeGroupReplicaOutput(args: GetCoreVolumeGroupReplicaOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCoreVolumeGroupReplicaResult> {
    return pulumi.output(args).apply((a: any) => getCoreVolumeGroupReplica(a, opts))
}

/**
 * A collection of arguments for invoking getCoreVolumeGroupReplica.
 */
export interface GetCoreVolumeGroupReplicaOutputArgs {
    id?: pulumi.Input<string>;
    volumeGroupReplicaId: pulumi.Input<string>;
}
