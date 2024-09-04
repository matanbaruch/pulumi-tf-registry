// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getHyperflexExtIscsiStoragePolicy(args?: GetHyperflexExtIscsiStoragePolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetHyperflexExtIscsiStoragePolicyResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getHyperflexExtIscsiStoragePolicy:getHyperflexExtIscsiStoragePolicy", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "adminState": args.adminState,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "clusterProfiles": args.clusterProfiles,
        "createTime": args.createTime,
        "description": args.description,
        "domainGroupMoid": args.domainGroupMoid,
        "extaTraffic": args.extaTraffic,
        "extbTraffic": args.extbTraffic,
        "id": args.id,
        "modTime": args.modTime,
        "moid": args.moid,
        "name": args.name,
        "objectType": args.objectType,
        "organization": args.organization,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getHyperflexExtIscsiStoragePolicy.
 */
export interface GetHyperflexExtIscsiStoragePolicyArgs {
    accountMoid?: string;
    additionalProperties?: string;
    adminState?: boolean;
    ancestors?: inputs.GetHyperflexExtIscsiStoragePolicyAncestor[];
    classId?: string;
    clusterProfiles?: inputs.GetHyperflexExtIscsiStoragePolicyClusterProfile[];
    createTime?: string;
    description?: string;
    domainGroupMoid?: string;
    extaTraffic?: inputs.GetHyperflexExtIscsiStoragePolicyExtaTraffic;
    extbTraffic?: inputs.GetHyperflexExtIscsiStoragePolicyExtbTraffic;
    id?: string;
    modTime?: string;
    moid?: string;
    name?: string;
    objectType?: string;
    organization?: inputs.GetHyperflexExtIscsiStoragePolicyOrganization;
    owners?: string[];
    parent?: inputs.GetHyperflexExtIscsiStoragePolicyParent;
    permissionResources?: inputs.GetHyperflexExtIscsiStoragePolicyPermissionResource[];
    sharedScope?: string;
    tags?: inputs.GetHyperflexExtIscsiStoragePolicyTag[];
    versionContext?: inputs.GetHyperflexExtIscsiStoragePolicyVersionContext;
}

/**
 * A collection of values returned by getHyperflexExtIscsiStoragePolicy.
 */
export interface GetHyperflexExtIscsiStoragePolicyResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly adminState?: boolean;
    readonly ancestors?: outputs.GetHyperflexExtIscsiStoragePolicyAncestor[];
    readonly classId?: string;
    readonly clusterProfiles?: outputs.GetHyperflexExtIscsiStoragePolicyClusterProfile[];
    readonly createTime?: string;
    readonly description?: string;
    readonly domainGroupMoid?: string;
    readonly extaTraffic?: outputs.GetHyperflexExtIscsiStoragePolicyExtaTraffic;
    readonly extbTraffic?: outputs.GetHyperflexExtIscsiStoragePolicyExtbTraffic;
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly name?: string;
    readonly objectType?: string;
    readonly organization?: outputs.GetHyperflexExtIscsiStoragePolicyOrganization;
    readonly owners?: string[];
    readonly parent?: outputs.GetHyperflexExtIscsiStoragePolicyParent;
    readonly permissionResources?: outputs.GetHyperflexExtIscsiStoragePolicyPermissionResource[];
    readonly results: outputs.GetHyperflexExtIscsiStoragePolicyResult[];
    readonly sharedScope?: string;
    readonly tags?: outputs.GetHyperflexExtIscsiStoragePolicyTag[];
    readonly versionContext?: outputs.GetHyperflexExtIscsiStoragePolicyVersionContext;
}
export function getHyperflexExtIscsiStoragePolicyOutput(args?: GetHyperflexExtIscsiStoragePolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetHyperflexExtIscsiStoragePolicyResult> {
    return pulumi.output(args).apply((a: any) => getHyperflexExtIscsiStoragePolicy(a, opts))
}

/**
 * A collection of arguments for invoking getHyperflexExtIscsiStoragePolicy.
 */
export interface GetHyperflexExtIscsiStoragePolicyOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    adminState?: pulumi.Input<boolean>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetHyperflexExtIscsiStoragePolicyAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    clusterProfiles?: pulumi.Input<pulumi.Input<inputs.GetHyperflexExtIscsiStoragePolicyClusterProfileArgs>[]>;
    createTime?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    extaTraffic?: pulumi.Input<inputs.GetHyperflexExtIscsiStoragePolicyExtaTrafficArgs>;
    extbTraffic?: pulumi.Input<inputs.GetHyperflexExtIscsiStoragePolicyExtbTrafficArgs>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    organization?: pulumi.Input<inputs.GetHyperflexExtIscsiStoragePolicyOrganizationArgs>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetHyperflexExtIscsiStoragePolicyParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetHyperflexExtIscsiStoragePolicyPermissionResourceArgs>[]>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetHyperflexExtIscsiStoragePolicyTagArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetHyperflexExtIscsiStoragePolicyVersionContextArgs>;
}
