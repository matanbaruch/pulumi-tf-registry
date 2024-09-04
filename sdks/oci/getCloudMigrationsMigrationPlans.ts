// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCloudMigrationsMigrationPlans(args?: GetCloudMigrationsMigrationPlansArgs, opts?: pulumi.InvokeOptions): Promise<GetCloudMigrationsMigrationPlansResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getCloudMigrationsMigrationPlans:getCloudMigrationsMigrationPlans", {
        "compartmentId": args.compartmentId,
        "displayName": args.displayName,
        "filters": args.filters,
        "id": args.id,
        "migrationId": args.migrationId,
        "migrationPlanId": args.migrationPlanId,
        "state": args.state,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCloudMigrationsMigrationPlans.
 */
export interface GetCloudMigrationsMigrationPlansArgs {
    compartmentId?: string;
    displayName?: string;
    filters?: inputs.GetCloudMigrationsMigrationPlansFilter[];
    id?: string;
    migrationId?: string;
    migrationPlanId?: string;
    state?: string;
}

/**
 * A collection of values returned by getCloudMigrationsMigrationPlans.
 */
export interface GetCloudMigrationsMigrationPlansResult {
    readonly compartmentId?: string;
    readonly displayName?: string;
    readonly filters?: outputs.GetCloudMigrationsMigrationPlansFilter[];
    readonly id: string;
    readonly migrationId?: string;
    readonly migrationPlanCollections: outputs.GetCloudMigrationsMigrationPlansMigrationPlanCollection[];
    readonly migrationPlanId?: string;
    readonly state?: string;
}
export function getCloudMigrationsMigrationPlansOutput(args?: GetCloudMigrationsMigrationPlansOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCloudMigrationsMigrationPlansResult> {
    return pulumi.output(args).apply((a: any) => getCloudMigrationsMigrationPlans(a, opts))
}

/**
 * A collection of arguments for invoking getCloudMigrationsMigrationPlans.
 */
export interface GetCloudMigrationsMigrationPlansOutputArgs {
    compartmentId?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetCloudMigrationsMigrationPlansFilterArgs>[]>;
    id?: pulumi.Input<string>;
    migrationId?: pulumi.Input<string>;
    migrationPlanId?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
}
