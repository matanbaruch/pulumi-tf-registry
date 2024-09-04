// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDatabaseManagementManagedDatabaseGroup(args: GetDatabaseManagementManagedDatabaseGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseManagementManagedDatabaseGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDatabaseManagementManagedDatabaseGroup:getDatabaseManagementManagedDatabaseGroup", {
        "managedDatabaseGroupId": args.managedDatabaseGroupId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatabaseManagementManagedDatabaseGroup.
 */
export interface GetDatabaseManagementManagedDatabaseGroupArgs {
    managedDatabaseGroupId: string;
}

/**
 * A collection of values returned by getDatabaseManagementManagedDatabaseGroup.
 */
export interface GetDatabaseManagementManagedDatabaseGroupResult {
    readonly compartmentId: string;
    readonly definedTags: {[key: string]: string};
    readonly description: string;
    readonly freeformTags: {[key: string]: string};
    readonly id: string;
    readonly managedDatabaseGroupId: string;
    readonly managedDatabases: outputs.GetDatabaseManagementManagedDatabaseGroupManagedDatabase[];
    readonly name: string;
    readonly state: string;
    readonly systemTags: {[key: string]: string};
    readonly timeCreated: string;
    readonly timeUpdated: string;
}
export function getDatabaseManagementManagedDatabaseGroupOutput(args: GetDatabaseManagementManagedDatabaseGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatabaseManagementManagedDatabaseGroupResult> {
    return pulumi.output(args).apply((a: any) => getDatabaseManagementManagedDatabaseGroup(a, opts))
}

/**
 * A collection of arguments for invoking getDatabaseManagementManagedDatabaseGroup.
 */
export interface GetDatabaseManagementManagedDatabaseGroupOutputArgs {
    managedDatabaseGroupId: pulumi.Input<string>;
}
