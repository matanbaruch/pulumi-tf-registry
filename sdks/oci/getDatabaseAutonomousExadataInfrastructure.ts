// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDatabaseAutonomousExadataInfrastructure(args: GetDatabaseAutonomousExadataInfrastructureArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseAutonomousExadataInfrastructureResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDatabaseAutonomousExadataInfrastructure:getDatabaseAutonomousExadataInfrastructure", {
        "autonomousExadataInfrastructureId": args.autonomousExadataInfrastructureId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatabaseAutonomousExadataInfrastructure.
 */
export interface GetDatabaseAutonomousExadataInfrastructureArgs {
    autonomousExadataInfrastructureId: string;
}

/**
 * A collection of values returned by getDatabaseAutonomousExadataInfrastructure.
 */
export interface GetDatabaseAutonomousExadataInfrastructureResult {
    readonly autonomousExadataInfrastructureId: string;
    /**
     * @deprecated Deprecated
     */
    readonly availabilityDomain: string;
    readonly compartmentId: string;
    readonly createAsync: boolean;
    readonly definedTags: {[key: string]: string};
    readonly displayName: string;
    readonly domain: string;
    readonly freeformTags: {[key: string]: string};
    readonly hostname: string;
    readonly id: string;
    readonly lastMaintenanceRunId: string;
    readonly licenseModel: string;
    readonly lifecycleDetails: string;
    readonly maintenanceWindowDetails: outputs.GetDatabaseAutonomousExadataInfrastructureMaintenanceWindowDetail[];
    readonly maintenanceWindows: outputs.GetDatabaseAutonomousExadataInfrastructureMaintenanceWindow[];
    readonly nextMaintenanceRunId: string;
    readonly nsgIds: string[];
    readonly scanDnsName: string;
    readonly shape: string;
    readonly state: string;
    readonly subnetId: string;
    readonly timeCreated: string;
    readonly zoneId: string;
}
export function getDatabaseAutonomousExadataInfrastructureOutput(args: GetDatabaseAutonomousExadataInfrastructureOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatabaseAutonomousExadataInfrastructureResult> {
    return pulumi.output(args).apply((a: any) => getDatabaseAutonomousExadataInfrastructure(a, opts))
}

/**
 * A collection of arguments for invoking getDatabaseAutonomousExadataInfrastructure.
 */
export interface GetDatabaseAutonomousExadataInfrastructureOutputArgs {
    autonomousExadataInfrastructureId: pulumi.Input<string>;
}
