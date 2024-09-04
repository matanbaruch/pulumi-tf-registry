// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDatabaseDbHome(args: GetDatabaseDbHomeArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseDbHomeResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDatabaseDbHome:getDatabaseDbHome", {
        "dbHomeId": args.dbHomeId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatabaseDbHome.
 */
export interface GetDatabaseDbHomeArgs {
    dbHomeId: string;
}

/**
 * A collection of values returned by getDatabaseDbHome.
 */
export interface GetDatabaseDbHomeResult {
    readonly compartmentId: string;
    readonly databaseSoftwareImageId: string;
    readonly databases: outputs.GetDatabaseDbHomeDatabase[];
    readonly dbHomeId: string;
    readonly dbHomeLocation: string;
    readonly dbSystemId: string;
    readonly dbVersion: string;
    readonly definedTags: {[key: string]: string};
    readonly displayName: string;
    readonly enableDatabaseDelete: boolean;
    readonly freeformTags: {[key: string]: string};
    readonly id: string;
    readonly isDesupportedVersion: boolean;
    readonly isUnifiedAuditingEnabled: boolean;
    readonly kmsKeyId: string;
    readonly kmsKeyVersionId: string;
    readonly lastPatchHistoryEntryId: string;
    readonly lifecycleDetails: string;
    readonly source: string;
    readonly state: string;
    readonly timeCreated: string;
    readonly vmClusterId: string;
}
export function getDatabaseDbHomeOutput(args: GetDatabaseDbHomeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatabaseDbHomeResult> {
    return pulumi.output(args).apply((a: any) => getDatabaseDbHome(a, opts))
}

/**
 * A collection of arguments for invoking getDatabaseDbHome.
 */
export interface GetDatabaseDbHomeOutputArgs {
    dbHomeId: pulumi.Input<string>;
}
