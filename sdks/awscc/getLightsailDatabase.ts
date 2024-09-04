// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getLightsailDatabase(args: GetLightsailDatabaseArgs, opts?: pulumi.InvokeOptions): Promise<GetLightsailDatabaseResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getLightsailDatabase:getLightsailDatabase", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLightsailDatabase.
 */
export interface GetLightsailDatabaseArgs {
    id: string;
}

/**
 * A collection of values returned by getLightsailDatabase.
 */
export interface GetLightsailDatabaseResult {
    readonly availabilityZone: string;
    readonly backupRetention: boolean;
    readonly caCertificateIdentifier: string;
    readonly databaseArn: string;
    readonly id: string;
    readonly masterDatabaseName: string;
    readonly masterUserPassword: string;
    readonly masterUsername: string;
    readonly preferredBackupWindow: string;
    readonly preferredMaintenanceWindow: string;
    readonly publiclyAccessible: boolean;
    readonly relationalDatabaseBlueprintId: string;
    readonly relationalDatabaseBundleId: string;
    readonly relationalDatabaseName: string;
    readonly relationalDatabaseParameters: outputs.GetLightsailDatabaseRelationalDatabaseParameter[];
    readonly rotateMasterUserPassword: boolean;
    readonly tags: outputs.GetLightsailDatabaseTag[];
}
export function getLightsailDatabaseOutput(args: GetLightsailDatabaseOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLightsailDatabaseResult> {
    return pulumi.output(args).apply((a: any) => getLightsailDatabase(a, opts))
}

/**
 * A collection of arguments for invoking getLightsailDatabase.
 */
export interface GetLightsailDatabaseOutputArgs {
    id: pulumi.Input<string>;
}
