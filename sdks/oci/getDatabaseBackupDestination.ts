// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDatabaseBackupDestination(args: GetDatabaseBackupDestinationArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseBackupDestinationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDatabaseBackupDestination:getDatabaseBackupDestination", {
        "backupDestinationId": args.backupDestinationId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatabaseBackupDestination.
 */
export interface GetDatabaseBackupDestinationArgs {
    backupDestinationId: string;
}

/**
 * A collection of values returned by getDatabaseBackupDestination.
 */
export interface GetDatabaseBackupDestinationResult {
    readonly associatedDatabases: outputs.GetDatabaseBackupDestinationAssociatedDatabase[];
    readonly backupDestinationId: string;
    readonly compartmentId: string;
    readonly connectionString: string;
    readonly definedTags: {[key: string]: string};
    readonly displayName: string;
    readonly freeformTags: {[key: string]: string};
    readonly id: string;
    readonly lifecycleDetails: string;
    /**
     * @deprecated Deprecated
     */
    readonly localMountPointPath: string;
    readonly mountTypeDetails: outputs.GetDatabaseBackupDestinationMountTypeDetail[];
    readonly nfsMountType: string;
    readonly nfsServerExport: string;
    readonly nfsServers: string[];
    readonly state: string;
    readonly timeCreated: string;
    readonly type: string;
    readonly vpcUsers: string[];
}
export function getDatabaseBackupDestinationOutput(args: GetDatabaseBackupDestinationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatabaseBackupDestinationResult> {
    return pulumi.output(args).apply((a: any) => getDatabaseBackupDestination(a, opts))
}

/**
 * A collection of arguments for invoking getDatabaseBackupDestination.
 */
export interface GetDatabaseBackupDestinationOutputArgs {
    backupDestinationId: pulumi.Input<string>;
}
