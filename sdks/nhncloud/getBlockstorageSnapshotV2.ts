// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getBlockstorageSnapshotV2(args?: GetBlockstorageSnapshotV2Args, opts?: pulumi.InvokeOptions): Promise<GetBlockstorageSnapshotV2Result> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("nhncloud:index/getBlockstorageSnapshotV2:getBlockstorageSnapshotV2", {
        "id": args.id,
        "mostRecent": args.mostRecent,
        "name": args.name,
        "region": args.region,
        "status": args.status,
        "volumeId": args.volumeId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getBlockstorageSnapshotV2.
 */
export interface GetBlockstorageSnapshotV2Args {
    id?: string;
    mostRecent?: boolean;
    name?: string;
    region?: string;
    status?: string;
    volumeId?: string;
}

/**
 * A collection of values returned by getBlockstorageSnapshotV2.
 */
export interface GetBlockstorageSnapshotV2Result {
    readonly description: string;
    readonly id: string;
    readonly metadata: {[key: string]: string};
    readonly mostRecent?: boolean;
    readonly name: string;
    readonly region: string;
    readonly size: number;
    readonly status: string;
    readonly volumeId: string;
}
export function getBlockstorageSnapshotV2Output(args?: GetBlockstorageSnapshotV2OutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBlockstorageSnapshotV2Result> {
    return pulumi.output(args).apply((a: any) => getBlockstorageSnapshotV2(a, opts))
}

/**
 * A collection of arguments for invoking getBlockstorageSnapshotV2.
 */
export interface GetBlockstorageSnapshotV2OutputArgs {
    id?: pulumi.Input<string>;
    mostRecent?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    volumeId?: pulumi.Input<string>;
}
