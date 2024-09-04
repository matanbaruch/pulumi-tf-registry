// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getVnicSanConnectivityPolicy(args?: GetVnicSanConnectivityPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetVnicSanConnectivityPolicyResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getVnicSanConnectivityPolicy:getVnicSanConnectivityPolicy", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "createTime": args.createTime,
        "description": args.description,
        "domainGroupMoid": args.domainGroupMoid,
        "fcIfs": args.fcIfs,
        "id": args.id,
        "modTime": args.modTime,
        "moid": args.moid,
        "name": args.name,
        "objectType": args.objectType,
        "organization": args.organization,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "placementMode": args.placementMode,
        "profiles": args.profiles,
        "sharedScope": args.sharedScope,
        "staticWwnnAddress": args.staticWwnnAddress,
        "tags": args.tags,
        "targetPlatform": args.targetPlatform,
        "versionContext": args.versionContext,
        "wwnnAddressType": args.wwnnAddressType,
        "wwnnPool": args.wwnnPool,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVnicSanConnectivityPolicy.
 */
export interface GetVnicSanConnectivityPolicyArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetVnicSanConnectivityPolicyAncestor[];
    classId?: string;
    createTime?: string;
    description?: string;
    domainGroupMoid?: string;
    fcIfs?: inputs.GetVnicSanConnectivityPolicyFcIf[];
    id?: string;
    modTime?: string;
    moid?: string;
    name?: string;
    objectType?: string;
    organization?: inputs.GetVnicSanConnectivityPolicyOrganization;
    owners?: string[];
    parent?: inputs.GetVnicSanConnectivityPolicyParent;
    permissionResources?: inputs.GetVnicSanConnectivityPolicyPermissionResource[];
    placementMode?: string;
    profiles?: inputs.GetVnicSanConnectivityPolicyProfile[];
    sharedScope?: string;
    staticWwnnAddress?: string;
    tags?: inputs.GetVnicSanConnectivityPolicyTag[];
    targetPlatform?: string;
    versionContext?: inputs.GetVnicSanConnectivityPolicyVersionContext;
    wwnnAddressType?: string;
    wwnnPool?: inputs.GetVnicSanConnectivityPolicyWwnnPool;
}

/**
 * A collection of values returned by getVnicSanConnectivityPolicy.
 */
export interface GetVnicSanConnectivityPolicyResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetVnicSanConnectivityPolicyAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly description?: string;
    readonly domainGroupMoid?: string;
    readonly fcIfs?: outputs.GetVnicSanConnectivityPolicyFcIf[];
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly name?: string;
    readonly objectType?: string;
    readonly organization?: outputs.GetVnicSanConnectivityPolicyOrganization;
    readonly owners?: string[];
    readonly parent?: outputs.GetVnicSanConnectivityPolicyParent;
    readonly permissionResources?: outputs.GetVnicSanConnectivityPolicyPermissionResource[];
    readonly placementMode?: string;
    readonly profiles?: outputs.GetVnicSanConnectivityPolicyProfile[];
    readonly results: outputs.GetVnicSanConnectivityPolicyResult[];
    readonly sharedScope?: string;
    readonly staticWwnnAddress?: string;
    readonly tags?: outputs.GetVnicSanConnectivityPolicyTag[];
    readonly targetPlatform?: string;
    readonly versionContext?: outputs.GetVnicSanConnectivityPolicyVersionContext;
    readonly wwnnAddressType?: string;
    readonly wwnnPool?: outputs.GetVnicSanConnectivityPolicyWwnnPool;
}
export function getVnicSanConnectivityPolicyOutput(args?: GetVnicSanConnectivityPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVnicSanConnectivityPolicyResult> {
    return pulumi.output(args).apply((a: any) => getVnicSanConnectivityPolicy(a, opts))
}

/**
 * A collection of arguments for invoking getVnicSanConnectivityPolicy.
 */
export interface GetVnicSanConnectivityPolicyOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetVnicSanConnectivityPolicyAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    fcIfs?: pulumi.Input<pulumi.Input<inputs.GetVnicSanConnectivityPolicyFcIfArgs>[]>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    organization?: pulumi.Input<inputs.GetVnicSanConnectivityPolicyOrganizationArgs>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetVnicSanConnectivityPolicyParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetVnicSanConnectivityPolicyPermissionResourceArgs>[]>;
    placementMode?: pulumi.Input<string>;
    profiles?: pulumi.Input<pulumi.Input<inputs.GetVnicSanConnectivityPolicyProfileArgs>[]>;
    sharedScope?: pulumi.Input<string>;
    staticWwnnAddress?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetVnicSanConnectivityPolicyTagArgs>[]>;
    targetPlatform?: pulumi.Input<string>;
    versionContext?: pulumi.Input<inputs.GetVnicSanConnectivityPolicyVersionContextArgs>;
    wwnnAddressType?: pulumi.Input<string>;
    wwnnPool?: pulumi.Input<inputs.GetVnicSanConnectivityPolicyWwnnPoolArgs>;
}
