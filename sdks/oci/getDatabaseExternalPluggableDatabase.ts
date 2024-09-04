// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDatabaseExternalPluggableDatabase(args: GetDatabaseExternalPluggableDatabaseArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseExternalPluggableDatabaseResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDatabaseExternalPluggableDatabase:getDatabaseExternalPluggableDatabase", {
        "externalPluggableDatabaseId": args.externalPluggableDatabaseId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatabaseExternalPluggableDatabase.
 */
export interface GetDatabaseExternalPluggableDatabaseArgs {
    externalPluggableDatabaseId: string;
}

/**
 * A collection of values returned by getDatabaseExternalPluggableDatabase.
 */
export interface GetDatabaseExternalPluggableDatabaseResult {
    readonly characterSet: string;
    readonly compartmentId: string;
    readonly databaseConfiguration: string;
    readonly databaseEdition: string;
    readonly databaseManagementConfigs: outputs.GetDatabaseExternalPluggableDatabaseDatabaseManagementConfig[];
    readonly databaseVersion: string;
    readonly dbId: string;
    readonly dbPacks: string;
    readonly dbUniqueName: string;
    readonly definedTags: {[key: string]: string};
    readonly displayName: string;
    readonly externalContainerDatabaseId: string;
    readonly externalPluggableDatabaseId: string;
    readonly freeformTags: {[key: string]: string};
    readonly id: string;
    readonly lifecycleDetails: string;
    readonly ncharacterSet: string;
    readonly operationsInsightsConfigs: outputs.GetDatabaseExternalPluggableDatabaseOperationsInsightsConfig[];
    readonly sourceId: string;
    readonly stackMonitoringConfigs: outputs.GetDatabaseExternalPluggableDatabaseStackMonitoringConfig[];
    readonly state: string;
    readonly timeCreated: string;
    readonly timeZone: string;
}
export function getDatabaseExternalPluggableDatabaseOutput(args: GetDatabaseExternalPluggableDatabaseOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatabaseExternalPluggableDatabaseResult> {
    return pulumi.output(args).apply((a: any) => getDatabaseExternalPluggableDatabase(a, opts))
}

/**
 * A collection of arguments for invoking getDatabaseExternalPluggableDatabase.
 */
export interface GetDatabaseExternalPluggableDatabaseOutputArgs {
    externalPluggableDatabaseId: pulumi.Input<string>;
}
