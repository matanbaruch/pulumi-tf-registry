// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getBulkMoDeepCloner(args?: GetBulkMoDeepClonerArgs, opts?: pulumi.InvokeOptions): Promise<GetBulkMoDeepClonerResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getBulkMoDeepCloner:getBulkMoDeepCloner", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "asyncResult": args.asyncResult,
        "classId": args.classId,
        "createTime": args.createTime,
        "domainGroupMoid": args.domainGroupMoid,
        "excludeProperties": args.excludeProperties,
        "id": args.id,
        "modTime": args.modTime,
        "moid": args.moid,
        "nrSource": args.nrSource,
        "objectType": args.objectType,
        "organization": args.organization,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "referenceNameSuffix": args.referenceNameSuffix,
        "referencePolicy": args.referencePolicy,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "targets": args.targets,
        "versionContext": args.versionContext,
        "workflowNameSuffix": args.workflowNameSuffix,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getBulkMoDeepCloner.
 */
export interface GetBulkMoDeepClonerArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetBulkMoDeepClonerAncestor[];
    asyncResult?: inputs.GetBulkMoDeepClonerAsyncResult;
    classId?: string;
    createTime?: string;
    domainGroupMoid?: string;
    excludeProperties?: string[];
    id?: string;
    modTime?: string;
    moid?: string;
    nrSource?: inputs.GetBulkMoDeepClonerNrSource;
    objectType?: string;
    organization?: inputs.GetBulkMoDeepClonerOrganization;
    owners?: string[];
    parent?: inputs.GetBulkMoDeepClonerParent;
    permissionResources?: inputs.GetBulkMoDeepClonerPermissionResource[];
    referenceNameSuffix?: string;
    referencePolicy?: string;
    sharedScope?: string;
    tags?: inputs.GetBulkMoDeepClonerTag[];
    targets?: inputs.GetBulkMoDeepClonerTarget[];
    versionContext?: inputs.GetBulkMoDeepClonerVersionContext;
    workflowNameSuffix?: string;
}

/**
 * A collection of values returned by getBulkMoDeepCloner.
 */
export interface GetBulkMoDeepClonerResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetBulkMoDeepClonerAncestor[];
    readonly asyncResult?: outputs.GetBulkMoDeepClonerAsyncResult;
    readonly classId?: string;
    readonly createTime?: string;
    readonly domainGroupMoid?: string;
    readonly excludeProperties?: string[];
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly nrSource?: outputs.GetBulkMoDeepClonerNrSource;
    readonly objectType?: string;
    readonly organization?: outputs.GetBulkMoDeepClonerOrganization;
    readonly owners?: string[];
    readonly parent?: outputs.GetBulkMoDeepClonerParent;
    readonly permissionResources?: outputs.GetBulkMoDeepClonerPermissionResource[];
    readonly referenceNameSuffix?: string;
    readonly referencePolicy?: string;
    readonly results: outputs.GetBulkMoDeepClonerResult[];
    readonly sharedScope?: string;
    readonly tags?: outputs.GetBulkMoDeepClonerTag[];
    readonly targets?: outputs.GetBulkMoDeepClonerTarget[];
    readonly versionContext?: outputs.GetBulkMoDeepClonerVersionContext;
    readonly workflowNameSuffix?: string;
}
export function getBulkMoDeepClonerOutput(args?: GetBulkMoDeepClonerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBulkMoDeepClonerResult> {
    return pulumi.output(args).apply((a: any) => getBulkMoDeepCloner(a, opts))
}

/**
 * A collection of arguments for invoking getBulkMoDeepCloner.
 */
export interface GetBulkMoDeepClonerOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetBulkMoDeepClonerAncestorArgs>[]>;
    asyncResult?: pulumi.Input<inputs.GetBulkMoDeepClonerAsyncResultArgs>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    excludeProperties?: pulumi.Input<pulumi.Input<string>[]>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    nrSource?: pulumi.Input<inputs.GetBulkMoDeepClonerNrSourceArgs>;
    objectType?: pulumi.Input<string>;
    organization?: pulumi.Input<inputs.GetBulkMoDeepClonerOrganizationArgs>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetBulkMoDeepClonerParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetBulkMoDeepClonerPermissionResourceArgs>[]>;
    referenceNameSuffix?: pulumi.Input<string>;
    referencePolicy?: pulumi.Input<string>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetBulkMoDeepClonerTagArgs>[]>;
    targets?: pulumi.Input<pulumi.Input<inputs.GetBulkMoDeepClonerTargetArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetBulkMoDeepClonerVersionContextArgs>;
    workflowNameSuffix?: pulumi.Input<string>;
}
