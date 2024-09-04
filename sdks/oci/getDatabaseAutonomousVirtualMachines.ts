// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDatabaseAutonomousVirtualMachines(args: GetDatabaseAutonomousVirtualMachinesArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseAutonomousVirtualMachinesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDatabaseAutonomousVirtualMachines:getDatabaseAutonomousVirtualMachines", {
        "autonomousVmClusterId": args.autonomousVmClusterId,
        "compartmentId": args.compartmentId,
        "filters": args.filters,
        "id": args.id,
        "state": args.state,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatabaseAutonomousVirtualMachines.
 */
export interface GetDatabaseAutonomousVirtualMachinesArgs {
    autonomousVmClusterId: string;
    compartmentId: string;
    filters?: inputs.GetDatabaseAutonomousVirtualMachinesFilter[];
    id?: string;
    state?: string;
}

/**
 * A collection of values returned by getDatabaseAutonomousVirtualMachines.
 */
export interface GetDatabaseAutonomousVirtualMachinesResult {
    readonly autonomousVirtualMachines: outputs.GetDatabaseAutonomousVirtualMachinesAutonomousVirtualMachine[];
    readonly autonomousVmClusterId: string;
    readonly compartmentId: string;
    readonly filters?: outputs.GetDatabaseAutonomousVirtualMachinesFilter[];
    readonly id: string;
    readonly state?: string;
}
export function getDatabaseAutonomousVirtualMachinesOutput(args: GetDatabaseAutonomousVirtualMachinesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatabaseAutonomousVirtualMachinesResult> {
    return pulumi.output(args).apply((a: any) => getDatabaseAutonomousVirtualMachines(a, opts))
}

/**
 * A collection of arguments for invoking getDatabaseAutonomousVirtualMachines.
 */
export interface GetDatabaseAutonomousVirtualMachinesOutputArgs {
    autonomousVmClusterId: pulumi.Input<string>;
    compartmentId: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetDatabaseAutonomousVirtualMachinesFilterArgs>[]>;
    id?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
}
