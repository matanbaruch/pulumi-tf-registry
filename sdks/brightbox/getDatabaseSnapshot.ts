// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDatabaseSnapshot(args?: GetDatabaseSnapshotArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseSnapshotResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("brightbox:index/getDatabaseSnapshot:getDatabaseSnapshot", {
        "databaseEngine": args.databaseEngine,
        "databaseVersion": args.databaseVersion,
        "description": args.description,
        "id": args.id,
        "mostRecent": args.mostRecent,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatabaseSnapshot.
 */
export interface GetDatabaseSnapshotArgs {
    databaseEngine?: string;
    databaseVersion?: string;
    description?: string;
    id?: string;
    mostRecent?: boolean;
    name?: string;
}

/**
 * A collection of values returned by getDatabaseSnapshot.
 */
export interface GetDatabaseSnapshotResult {
    readonly createdAt: string;
    readonly databaseEngine: string;
    readonly databaseVersion: string;
    readonly description: string;
    readonly id: string;
    readonly locked: boolean;
    readonly mostRecent?: boolean;
    readonly name: string;
    readonly size: number;
    readonly status: string;
}
export function getDatabaseSnapshotOutput(args?: GetDatabaseSnapshotOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatabaseSnapshotResult> {
    return pulumi.output(args).apply((a: any) => getDatabaseSnapshot(a, opts))
}

/**
 * A collection of arguments for invoking getDatabaseSnapshot.
 */
export interface GetDatabaseSnapshotOutputArgs {
    databaseEngine?: pulumi.Input<string>;
    databaseVersion?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    mostRecent?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
}
