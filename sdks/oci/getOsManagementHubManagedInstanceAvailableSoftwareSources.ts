// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getOsManagementHubManagedInstanceAvailableSoftwareSources(args: GetOsManagementHubManagedInstanceAvailableSoftwareSourcesArgs, opts?: pulumi.InvokeOptions): Promise<GetOsManagementHubManagedInstanceAvailableSoftwareSourcesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getOsManagementHubManagedInstanceAvailableSoftwareSources:getOsManagementHubManagedInstanceAvailableSoftwareSources", {
        "compartmentId": args.compartmentId,
        "displayNameContains": args.displayNameContains,
        "displayNames": args.displayNames,
        "filters": args.filters,
        "id": args.id,
        "managedInstanceId": args.managedInstanceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getOsManagementHubManagedInstanceAvailableSoftwareSources.
 */
export interface GetOsManagementHubManagedInstanceAvailableSoftwareSourcesArgs {
    compartmentId?: string;
    displayNameContains?: string;
    displayNames?: string[];
    filters?: inputs.GetOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter[];
    id?: string;
    managedInstanceId: string;
}

/**
 * A collection of values returned by getOsManagementHubManagedInstanceAvailableSoftwareSources.
 */
export interface GetOsManagementHubManagedInstanceAvailableSoftwareSourcesResult {
    readonly availableSoftwareSourceCollections: outputs.GetOsManagementHubManagedInstanceAvailableSoftwareSourcesAvailableSoftwareSourceCollection[];
    readonly compartmentId?: string;
    readonly displayNameContains?: string;
    readonly displayNames?: string[];
    readonly filters?: outputs.GetOsManagementHubManagedInstanceAvailableSoftwareSourcesFilter[];
    readonly id: string;
    readonly managedInstanceId: string;
}
export function getOsManagementHubManagedInstanceAvailableSoftwareSourcesOutput(args: GetOsManagementHubManagedInstanceAvailableSoftwareSourcesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOsManagementHubManagedInstanceAvailableSoftwareSourcesResult> {
    return pulumi.output(args).apply((a: any) => getOsManagementHubManagedInstanceAvailableSoftwareSources(a, opts))
}

/**
 * A collection of arguments for invoking getOsManagementHubManagedInstanceAvailableSoftwareSources.
 */
export interface GetOsManagementHubManagedInstanceAvailableSoftwareSourcesOutputArgs {
    compartmentId?: pulumi.Input<string>;
    displayNameContains?: pulumi.Input<string>;
    displayNames?: pulumi.Input<pulumi.Input<string>[]>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetOsManagementHubManagedInstanceAvailableSoftwareSourcesFilterArgs>[]>;
    id?: pulumi.Input<string>;
    managedInstanceId: pulumi.Input<string>;
}
