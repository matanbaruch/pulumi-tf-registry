// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getOsManagementHubManagedInstanceModules(args: GetOsManagementHubManagedInstanceModulesArgs, opts?: pulumi.InvokeOptions): Promise<GetOsManagementHubManagedInstanceModulesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getOsManagementHubManagedInstanceModules:getOsManagementHubManagedInstanceModules", {
        "compartmentId": args.compartmentId,
        "filters": args.filters,
        "id": args.id,
        "managedInstanceId": args.managedInstanceId,
        "name": args.name,
        "nameContains": args.nameContains,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getOsManagementHubManagedInstanceModules.
 */
export interface GetOsManagementHubManagedInstanceModulesArgs {
    compartmentId?: string;
    filters?: inputs.GetOsManagementHubManagedInstanceModulesFilter[];
    id?: string;
    managedInstanceId: string;
    name?: string;
    nameContains?: string;
}

/**
 * A collection of values returned by getOsManagementHubManagedInstanceModules.
 */
export interface GetOsManagementHubManagedInstanceModulesResult {
    readonly compartmentId?: string;
    readonly filters?: outputs.GetOsManagementHubManagedInstanceModulesFilter[];
    readonly id: string;
    readonly managedInstanceId: string;
    readonly managedInstanceModuleCollections: outputs.GetOsManagementHubManagedInstanceModulesManagedInstanceModuleCollection[];
    readonly name?: string;
    readonly nameContains?: string;
}
export function getOsManagementHubManagedInstanceModulesOutput(args: GetOsManagementHubManagedInstanceModulesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOsManagementHubManagedInstanceModulesResult> {
    return pulumi.output(args).apply((a: any) => getOsManagementHubManagedInstanceModules(a, opts))
}

/**
 * A collection of arguments for invoking getOsManagementHubManagedInstanceModules.
 */
export interface GetOsManagementHubManagedInstanceModulesOutputArgs {
    compartmentId?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetOsManagementHubManagedInstanceModulesFilterArgs>[]>;
    id?: pulumi.Input<string>;
    managedInstanceId: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nameContains?: pulumi.Input<string>;
}
