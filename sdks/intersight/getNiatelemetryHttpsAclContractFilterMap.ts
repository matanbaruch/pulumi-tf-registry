// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getNiatelemetryHttpsAclContractFilterMap(args?: GetNiatelemetryHttpsAclContractFilterMapArgs, opts?: pulumi.InvokeOptions): Promise<GetNiatelemetryHttpsAclContractFilterMapResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getNiatelemetryHttpsAclContractFilterMap:getNiatelemetryHttpsAclContractFilterMap", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "contractName": args.contractName,
        "createTime": args.createTime,
        "dn": args.dn,
        "domainGroupMoid": args.domainGroupMoid,
        "filterName": args.filterName,
        "id": args.id,
        "modTime": args.modTime,
        "moid": args.moid,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "recordType": args.recordType,
        "recordVersion": args.recordVersion,
        "registeredDevice": args.registeredDevice,
        "sharedScope": args.sharedScope,
        "siteName": args.siteName,
        "tags": args.tags,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getNiatelemetryHttpsAclContractFilterMap.
 */
export interface GetNiatelemetryHttpsAclContractFilterMapArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetNiatelemetryHttpsAclContractFilterMapAncestor[];
    classId?: string;
    contractName?: string;
    createTime?: string;
    dn?: string;
    domainGroupMoid?: string;
    filterName?: string;
    id?: string;
    modTime?: string;
    moid?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetNiatelemetryHttpsAclContractFilterMapParent;
    permissionResources?: inputs.GetNiatelemetryHttpsAclContractFilterMapPermissionResource[];
    recordType?: string;
    recordVersion?: string;
    registeredDevice?: inputs.GetNiatelemetryHttpsAclContractFilterMapRegisteredDevice;
    sharedScope?: string;
    siteName?: string;
    tags?: inputs.GetNiatelemetryHttpsAclContractFilterMapTag[];
    versionContext?: inputs.GetNiatelemetryHttpsAclContractFilterMapVersionContext;
}

/**
 * A collection of values returned by getNiatelemetryHttpsAclContractFilterMap.
 */
export interface GetNiatelemetryHttpsAclContractFilterMapResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetNiatelemetryHttpsAclContractFilterMapAncestor[];
    readonly classId?: string;
    readonly contractName?: string;
    readonly createTime?: string;
    readonly dn?: string;
    readonly domainGroupMoid?: string;
    readonly filterName?: string;
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetNiatelemetryHttpsAclContractFilterMapParent;
    readonly permissionResources?: outputs.GetNiatelemetryHttpsAclContractFilterMapPermissionResource[];
    readonly recordType?: string;
    readonly recordVersion?: string;
    readonly registeredDevice?: outputs.GetNiatelemetryHttpsAclContractFilterMapRegisteredDevice;
    readonly results: outputs.GetNiatelemetryHttpsAclContractFilterMapResult[];
    readonly sharedScope?: string;
    readonly siteName?: string;
    readonly tags?: outputs.GetNiatelemetryHttpsAclContractFilterMapTag[];
    readonly versionContext?: outputs.GetNiatelemetryHttpsAclContractFilterMapVersionContext;
}
export function getNiatelemetryHttpsAclContractFilterMapOutput(args?: GetNiatelemetryHttpsAclContractFilterMapOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNiatelemetryHttpsAclContractFilterMapResult> {
    return pulumi.output(args).apply((a: any) => getNiatelemetryHttpsAclContractFilterMap(a, opts))
}

/**
 * A collection of arguments for invoking getNiatelemetryHttpsAclContractFilterMap.
 */
export interface GetNiatelemetryHttpsAclContractFilterMapOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetNiatelemetryHttpsAclContractFilterMapAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    contractName?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    dn?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    filterName?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetNiatelemetryHttpsAclContractFilterMapParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetNiatelemetryHttpsAclContractFilterMapPermissionResourceArgs>[]>;
    recordType?: pulumi.Input<string>;
    recordVersion?: pulumi.Input<string>;
    registeredDevice?: pulumi.Input<inputs.GetNiatelemetryHttpsAclContractFilterMapRegisteredDeviceArgs>;
    sharedScope?: pulumi.Input<string>;
    siteName?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetNiatelemetryHttpsAclContractFilterMapTagArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetNiatelemetryHttpsAclContractFilterMapVersionContextArgs>;
}
