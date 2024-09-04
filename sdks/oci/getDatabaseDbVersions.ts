// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDatabaseDbVersions(args: GetDatabaseDbVersionsArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseDbVersionsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDatabaseDbVersions:getDatabaseDbVersions", {
        "compartmentId": args.compartmentId,
        "dbSystemId": args.dbSystemId,
        "dbSystemShape": args.dbSystemShape,
        "filters": args.filters,
        "id": args.id,
        "isDatabaseSoftwareImageSupported": args.isDatabaseSoftwareImageSupported,
        "isUpgradeSupported": args.isUpgradeSupported,
        "storageManagement": args.storageManagement,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatabaseDbVersions.
 */
export interface GetDatabaseDbVersionsArgs {
    compartmentId: string;
    dbSystemId?: string;
    dbSystemShape?: string;
    filters?: inputs.GetDatabaseDbVersionsFilter[];
    id?: string;
    isDatabaseSoftwareImageSupported?: boolean;
    isUpgradeSupported?: boolean;
    storageManagement?: string;
}

/**
 * A collection of values returned by getDatabaseDbVersions.
 */
export interface GetDatabaseDbVersionsResult {
    readonly compartmentId: string;
    readonly dbSystemId?: string;
    readonly dbSystemShape?: string;
    readonly dbVersions: outputs.GetDatabaseDbVersionsDbVersion[];
    readonly filters?: outputs.GetDatabaseDbVersionsFilter[];
    readonly id: string;
    readonly isDatabaseSoftwareImageSupported?: boolean;
    readonly isUpgradeSupported?: boolean;
    readonly storageManagement?: string;
}
export function getDatabaseDbVersionsOutput(args: GetDatabaseDbVersionsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatabaseDbVersionsResult> {
    return pulumi.output(args).apply((a: any) => getDatabaseDbVersions(a, opts))
}

/**
 * A collection of arguments for invoking getDatabaseDbVersions.
 */
export interface GetDatabaseDbVersionsOutputArgs {
    compartmentId: pulumi.Input<string>;
    dbSystemId?: pulumi.Input<string>;
    dbSystemShape?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetDatabaseDbVersionsFilterArgs>[]>;
    id?: pulumi.Input<string>;
    isDatabaseSoftwareImageSupported?: pulumi.Input<boolean>;
    isUpgradeSupported?: pulumi.Input<boolean>;
    storageManagement?: pulumi.Input<string>;
}
