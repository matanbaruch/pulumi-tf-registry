// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDataSafeAuditProfiles(args: GetDataSafeAuditProfilesArgs, opts?: pulumi.InvokeOptions): Promise<GetDataSafeAuditProfilesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDataSafeAuditProfiles:getDataSafeAuditProfiles", {
        "accessLevel": args.accessLevel,
        "auditCollectedVolumeGreaterThanOrEqualTo": args.auditCollectedVolumeGreaterThanOrEqualTo,
        "auditProfileId": args.auditProfileId,
        "compartmentId": args.compartmentId,
        "compartmentIdInSubtree": args.compartmentIdInSubtree,
        "displayName": args.displayName,
        "filters": args.filters,
        "id": args.id,
        "isOverrideGlobalRetentionSetting": args.isOverrideGlobalRetentionSetting,
        "isPaidUsageEnabled": args.isPaidUsageEnabled,
        "state": args.state,
        "targetId": args.targetId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDataSafeAuditProfiles.
 */
export interface GetDataSafeAuditProfilesArgs {
    accessLevel?: string;
    auditCollectedVolumeGreaterThanOrEqualTo?: string;
    auditProfileId?: string;
    compartmentId: string;
    compartmentIdInSubtree?: boolean;
    displayName?: string;
    filters?: inputs.GetDataSafeAuditProfilesFilter[];
    id?: string;
    isOverrideGlobalRetentionSetting?: boolean;
    isPaidUsageEnabled?: boolean;
    state?: string;
    targetId?: string;
}

/**
 * A collection of values returned by getDataSafeAuditProfiles.
 */
export interface GetDataSafeAuditProfilesResult {
    readonly accessLevel?: string;
    readonly auditCollectedVolumeGreaterThanOrEqualTo?: string;
    readonly auditProfileCollections: outputs.GetDataSafeAuditProfilesAuditProfileCollection[];
    readonly auditProfileId?: string;
    readonly compartmentId: string;
    readonly compartmentIdInSubtree?: boolean;
    readonly displayName?: string;
    readonly filters?: outputs.GetDataSafeAuditProfilesFilter[];
    readonly id: string;
    readonly isOverrideGlobalRetentionSetting?: boolean;
    readonly isPaidUsageEnabled?: boolean;
    readonly state?: string;
    readonly targetId?: string;
}
export function getDataSafeAuditProfilesOutput(args: GetDataSafeAuditProfilesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDataSafeAuditProfilesResult> {
    return pulumi.output(args).apply((a: any) => getDataSafeAuditProfiles(a, opts))
}

/**
 * A collection of arguments for invoking getDataSafeAuditProfiles.
 */
export interface GetDataSafeAuditProfilesOutputArgs {
    accessLevel?: pulumi.Input<string>;
    auditCollectedVolumeGreaterThanOrEqualTo?: pulumi.Input<string>;
    auditProfileId?: pulumi.Input<string>;
    compartmentId: pulumi.Input<string>;
    compartmentIdInSubtree?: pulumi.Input<boolean>;
    displayName?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetDataSafeAuditProfilesFilterArgs>[]>;
    id?: pulumi.Input<string>;
    isOverrideGlobalRetentionSetting?: pulumi.Input<boolean>;
    isPaidUsageEnabled?: pulumi.Input<boolean>;
    state?: pulumi.Input<string>;
    targetId?: pulumi.Input<string>;
}
