// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getOsManagementHubProfile(args: GetOsManagementHubProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetOsManagementHubProfileResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getOsManagementHubProfile:getOsManagementHubProfile", {
        "profileId": args.profileId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getOsManagementHubProfile.
 */
export interface GetOsManagementHubProfileArgs {
    profileId: string;
}

/**
 * A collection of values returned by getOsManagementHubProfile.
 */
export interface GetOsManagementHubProfileResult {
    readonly archType: string;
    readonly compartmentId: string;
    readonly definedTags: {[key: string]: string};
    readonly description: string;
    readonly displayName: string;
    readonly freeformTags: {[key: string]: string};
    readonly id: string;
    readonly isDefaultProfile: boolean;
    readonly isServiceProvidedProfile: boolean;
    readonly lifecycleEnvironments: outputs.GetOsManagementHubProfileLifecycleEnvironment[];
    readonly lifecycleStageId: string;
    readonly lifecycleStages: outputs.GetOsManagementHubProfileLifecycleStage[];
    readonly managedInstanceGroupId: string;
    readonly managedInstanceGroups: outputs.GetOsManagementHubProfileManagedInstanceGroup[];
    readonly managementStationId: string;
    readonly osFamily: string;
    readonly profileId: string;
    readonly profileType: string;
    readonly registrationType: string;
    readonly softwareSourceIds: string[];
    readonly softwareSources: outputs.GetOsManagementHubProfileSoftwareSource[];
    readonly state: string;
    readonly systemTags: {[key: string]: string};
    readonly timeCreated: string;
    readonly vendorName: string;
}
export function getOsManagementHubProfileOutput(args: GetOsManagementHubProfileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOsManagementHubProfileResult> {
    return pulumi.output(args).apply((a: any) => getOsManagementHubProfile(a, opts))
}

/**
 * A collection of arguments for invoking getOsManagementHubProfile.
 */
export interface GetOsManagementHubProfileOutputArgs {
    profileId: pulumi.Input<string>;
}
