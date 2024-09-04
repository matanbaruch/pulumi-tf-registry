// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getConvergedinfraSwitchComplianceDetails(args?: GetConvergedinfraSwitchComplianceDetailsArgs, opts?: pulumi.InvokeOptions): Promise<GetConvergedinfraSwitchComplianceDetailsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getConvergedinfraSwitchComplianceDetails:getConvergedinfraSwitchComplianceDetails", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "createTime": args.createTime,
        "domainGroupMoid": args.domainGroupMoid,
        "firmware": args.firmware,
        "id": args.id,
        "modTime": args.modTime,
        "model": args.model,
        "moid": args.moid,
        "name": args.name,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "podCompliance": args.podCompliance,
        "reason": args.reason,
        "sharedScope": args.sharedScope,
        "status": args.status,
        "storageCompliances": args.storageCompliances,
        "switch": args.switch,
        "tags": args.tags,
        "type": args.type,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getConvergedinfraSwitchComplianceDetails.
 */
export interface GetConvergedinfraSwitchComplianceDetailsArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetConvergedinfraSwitchComplianceDetailsAncestor[];
    classId?: string;
    createTime?: string;
    domainGroupMoid?: string;
    firmware?: string;
    id?: string;
    modTime?: string;
    model?: string;
    moid?: string;
    name?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetConvergedinfraSwitchComplianceDetailsParent;
    permissionResources?: inputs.GetConvergedinfraSwitchComplianceDetailsPermissionResource[];
    podCompliance?: inputs.GetConvergedinfraSwitchComplianceDetailsPodCompliance;
    reason?: string;
    sharedScope?: string;
    status?: string;
    storageCompliances?: inputs.GetConvergedinfraSwitchComplianceDetailsStorageCompliance[];
    switch?: inputs.GetConvergedinfraSwitchComplianceDetailsSwitch;
    tags?: inputs.GetConvergedinfraSwitchComplianceDetailsTag[];
    type?: string;
    versionContext?: inputs.GetConvergedinfraSwitchComplianceDetailsVersionContext;
}

/**
 * A collection of values returned by getConvergedinfraSwitchComplianceDetails.
 */
export interface GetConvergedinfraSwitchComplianceDetailsResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetConvergedinfraSwitchComplianceDetailsAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly domainGroupMoid?: string;
    readonly firmware?: string;
    readonly id: string;
    readonly modTime?: string;
    readonly model?: string;
    readonly moid?: string;
    readonly name?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetConvergedinfraSwitchComplianceDetailsParent;
    readonly permissionResources?: outputs.GetConvergedinfraSwitchComplianceDetailsPermissionResource[];
    readonly podCompliance?: outputs.GetConvergedinfraSwitchComplianceDetailsPodCompliance;
    readonly reason?: string;
    readonly results: outputs.GetConvergedinfraSwitchComplianceDetailsResult[];
    readonly sharedScope?: string;
    readonly status?: string;
    readonly storageCompliances?: outputs.GetConvergedinfraSwitchComplianceDetailsStorageCompliance[];
    readonly switch?: outputs.GetConvergedinfraSwitchComplianceDetailsSwitch;
    readonly tags?: outputs.GetConvergedinfraSwitchComplianceDetailsTag[];
    readonly type?: string;
    readonly versionContext?: outputs.GetConvergedinfraSwitchComplianceDetailsVersionContext;
}
export function getConvergedinfraSwitchComplianceDetailsOutput(args?: GetConvergedinfraSwitchComplianceDetailsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetConvergedinfraSwitchComplianceDetailsResult> {
    return pulumi.output(args).apply((a: any) => getConvergedinfraSwitchComplianceDetails(a, opts))
}

/**
 * A collection of arguments for invoking getConvergedinfraSwitchComplianceDetails.
 */
export interface GetConvergedinfraSwitchComplianceDetailsOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetConvergedinfraSwitchComplianceDetailsAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    firmware?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    model?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetConvergedinfraSwitchComplianceDetailsParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetConvergedinfraSwitchComplianceDetailsPermissionResourceArgs>[]>;
    podCompliance?: pulumi.Input<inputs.GetConvergedinfraSwitchComplianceDetailsPodComplianceArgs>;
    reason?: pulumi.Input<string>;
    sharedScope?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    storageCompliances?: pulumi.Input<pulumi.Input<inputs.GetConvergedinfraSwitchComplianceDetailsStorageComplianceArgs>[]>;
    switch?: pulumi.Input<inputs.GetConvergedinfraSwitchComplianceDetailsSwitchArgs>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetConvergedinfraSwitchComplianceDetailsTagArgs>[]>;
    type?: pulumi.Input<string>;
    versionContext?: pulumi.Input<inputs.GetConvergedinfraSwitchComplianceDetailsVersionContextArgs>;
}
