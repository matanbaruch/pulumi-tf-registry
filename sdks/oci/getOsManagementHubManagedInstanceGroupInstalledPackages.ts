// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getOsManagementHubManagedInstanceGroupInstalledPackages(args: GetOsManagementHubManagedInstanceGroupInstalledPackagesArgs, opts?: pulumi.InvokeOptions): Promise<GetOsManagementHubManagedInstanceGroupInstalledPackagesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getOsManagementHubManagedInstanceGroupInstalledPackages:getOsManagementHubManagedInstanceGroupInstalledPackages", {
        "compartmentId": args.compartmentId,
        "displayNameContains": args.displayNameContains,
        "displayNames": args.displayNames,
        "filters": args.filters,
        "id": args.id,
        "managedInstanceGroupId": args.managedInstanceGroupId,
        "timeInstallDateEnd": args.timeInstallDateEnd,
        "timeInstallDateStart": args.timeInstallDateStart,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getOsManagementHubManagedInstanceGroupInstalledPackages.
 */
export interface GetOsManagementHubManagedInstanceGroupInstalledPackagesArgs {
    compartmentId?: string;
    displayNameContains?: string;
    displayNames?: string[];
    filters?: inputs.GetOsManagementHubManagedInstanceGroupInstalledPackagesFilter[];
    id?: string;
    managedInstanceGroupId: string;
    timeInstallDateEnd?: string;
    timeInstallDateStart?: string;
}

/**
 * A collection of values returned by getOsManagementHubManagedInstanceGroupInstalledPackages.
 */
export interface GetOsManagementHubManagedInstanceGroupInstalledPackagesResult {
    readonly compartmentId?: string;
    readonly displayNameContains?: string;
    readonly displayNames?: string[];
    readonly filters?: outputs.GetOsManagementHubManagedInstanceGroupInstalledPackagesFilter[];
    readonly id: string;
    readonly managedInstanceGroupId: string;
    readonly managedInstanceGroupInstalledPackageCollections: outputs.GetOsManagementHubManagedInstanceGroupInstalledPackagesManagedInstanceGroupInstalledPackageCollection[];
    readonly timeInstallDateEnd?: string;
    readonly timeInstallDateStart?: string;
}
export function getOsManagementHubManagedInstanceGroupInstalledPackagesOutput(args: GetOsManagementHubManagedInstanceGroupInstalledPackagesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOsManagementHubManagedInstanceGroupInstalledPackagesResult> {
    return pulumi.output(args).apply((a: any) => getOsManagementHubManagedInstanceGroupInstalledPackages(a, opts))
}

/**
 * A collection of arguments for invoking getOsManagementHubManagedInstanceGroupInstalledPackages.
 */
export interface GetOsManagementHubManagedInstanceGroupInstalledPackagesOutputArgs {
    compartmentId?: pulumi.Input<string>;
    displayNameContains?: pulumi.Input<string>;
    displayNames?: pulumi.Input<pulumi.Input<string>[]>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetOsManagementHubManagedInstanceGroupInstalledPackagesFilterArgs>[]>;
    id?: pulumi.Input<string>;
    managedInstanceGroupId: pulumi.Input<string>;
    timeInstallDateEnd?: pulumi.Input<string>;
    timeInstallDateStart?: pulumi.Input<string>;
}
