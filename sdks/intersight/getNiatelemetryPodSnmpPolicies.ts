// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getNiatelemetryPodSnmpPolicies(args?: GetNiatelemetryPodSnmpPoliciesArgs, opts?: pulumi.InvokeOptions): Promise<GetNiatelemetryPodSnmpPoliciesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getNiatelemetryPodSnmpPolicies:getNiatelemetryPodSnmpPolicies", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "adminSt": args.adminSt,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "createTime": args.createTime,
        "domainGroupMoid": args.domainGroupMoid,
        "id": args.id,
        "modTime": args.modTime,
        "moid": args.moid,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "polDn": args.polDn,
        "recordType": args.recordType,
        "recordVersion": args.recordVersion,
        "registeredDevice": args.registeredDevice,
        "sharedScope": args.sharedScope,
        "siteName": args.siteName,
        "snmpClientGrp": args.snmpClientGrp,
        "snmpCommunity": args.snmpCommunity,
        "snmpTrapFwdServer": args.snmpTrapFwdServer,
        "snmpUser": args.snmpUser,
        "tags": args.tags,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNiatelemetryPodSnmpPolicies.
 */
export interface GetNiatelemetryPodSnmpPoliciesArgs {
    accountMoid?: string;
    additionalProperties?: string;
    adminSt?: string;
    ancestors?: inputs.GetNiatelemetryPodSnmpPoliciesAncestor[];
    classId?: string;
    createTime?: string;
    domainGroupMoid?: string;
    id?: string;
    modTime?: string;
    moid?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetNiatelemetryPodSnmpPoliciesParent;
    permissionResources?: inputs.GetNiatelemetryPodSnmpPoliciesPermissionResource[];
    polDn?: string;
    recordType?: string;
    recordVersion?: string;
    registeredDevice?: inputs.GetNiatelemetryPodSnmpPoliciesRegisteredDevice;
    sharedScope?: string;
    siteName?: string;
    snmpClientGrp?: string;
    snmpCommunity?: string;
    snmpTrapFwdServer?: string;
    snmpUser?: string;
    tags?: inputs.GetNiatelemetryPodSnmpPoliciesTag[];
    versionContext?: inputs.GetNiatelemetryPodSnmpPoliciesVersionContext;
}

/**
 * A collection of values returned by getNiatelemetryPodSnmpPolicies.
 */
export interface GetNiatelemetryPodSnmpPoliciesResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly adminSt?: string;
    readonly ancestors?: outputs.GetNiatelemetryPodSnmpPoliciesAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetNiatelemetryPodSnmpPoliciesParent;
    readonly permissionResources?: outputs.GetNiatelemetryPodSnmpPoliciesPermissionResource[];
    readonly polDn?: string;
    readonly recordType?: string;
    readonly recordVersion?: string;
    readonly registeredDevice?: outputs.GetNiatelemetryPodSnmpPoliciesRegisteredDevice;
    readonly results: outputs.GetNiatelemetryPodSnmpPoliciesResult[];
    readonly sharedScope?: string;
    readonly siteName?: string;
    readonly snmpClientGrp?: string;
    readonly snmpCommunity?: string;
    readonly snmpTrapFwdServer?: string;
    readonly snmpUser?: string;
    readonly tags?: outputs.GetNiatelemetryPodSnmpPoliciesTag[];
    readonly versionContext?: outputs.GetNiatelemetryPodSnmpPoliciesVersionContext;
}
export function getNiatelemetryPodSnmpPoliciesOutput(args?: GetNiatelemetryPodSnmpPoliciesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNiatelemetryPodSnmpPoliciesResult> {
    return pulumi.output(args).apply((a: any) => getNiatelemetryPodSnmpPolicies(a, opts))
}

/**
 * A collection of arguments for invoking getNiatelemetryPodSnmpPolicies.
 */
export interface GetNiatelemetryPodSnmpPoliciesOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    adminSt?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetNiatelemetryPodSnmpPoliciesAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetNiatelemetryPodSnmpPoliciesParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetNiatelemetryPodSnmpPoliciesPermissionResourceArgs>[]>;
    polDn?: pulumi.Input<string>;
    recordType?: pulumi.Input<string>;
    recordVersion?: pulumi.Input<string>;
    registeredDevice?: pulumi.Input<inputs.GetNiatelemetryPodSnmpPoliciesRegisteredDeviceArgs>;
    sharedScope?: pulumi.Input<string>;
    siteName?: pulumi.Input<string>;
    snmpClientGrp?: pulumi.Input<string>;
    snmpCommunity?: pulumi.Input<string>;
    snmpTrapFwdServer?: pulumi.Input<string>;
    snmpUser?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetNiatelemetryPodSnmpPoliciesTagArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetNiatelemetryPodSnmpPoliciesVersionContextArgs>;
}
