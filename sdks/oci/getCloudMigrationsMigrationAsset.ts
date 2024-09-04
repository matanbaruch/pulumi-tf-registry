// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getCloudMigrationsMigrationAsset(args: GetCloudMigrationsMigrationAssetArgs, opts?: pulumi.InvokeOptions): Promise<GetCloudMigrationsMigrationAssetResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getCloudMigrationsMigrationAsset:getCloudMigrationsMigrationAsset", {
        "migrationAssetId": args.migrationAssetId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCloudMigrationsMigrationAsset.
 */
export interface GetCloudMigrationsMigrationAssetArgs {
    migrationAssetId: string;
}

/**
 * A collection of values returned by getCloudMigrationsMigrationAsset.
 */
export interface GetCloudMigrationsMigrationAssetResult {
    readonly availabilityDomain: string;
    readonly compartmentId: string;
    readonly dependedOnBies: string[];
    readonly displayName: string;
    readonly id: string;
    readonly inventoryAssetId: string;
    readonly lifecycleDetails: string;
    readonly migrationAssetDependsOns: string[];
    readonly migrationAssetId: string;
    readonly migrationId: string;
    readonly notifications: string[];
    readonly parentSnapshot: string;
    readonly replicationCompartmentId: string;
    readonly replicationScheduleId: string;
    readonly snapShotBucketName: string;
    readonly snapshots: {[key: string]: string};
    readonly sourceAssetId: string;
    readonly state: string;
    readonly tenancyId: string;
    readonly timeCreated: string;
    readonly timeUpdated: string;
    readonly type: string;
}
export function getCloudMigrationsMigrationAssetOutput(args: GetCloudMigrationsMigrationAssetOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCloudMigrationsMigrationAssetResult> {
    return pulumi.output(args).apply((a: any) => getCloudMigrationsMigrationAsset(a, opts))
}

/**
 * A collection of arguments for invoking getCloudMigrationsMigrationAsset.
 */
export interface GetCloudMigrationsMigrationAssetOutputArgs {
    migrationAssetId: pulumi.Input<string>;
}
