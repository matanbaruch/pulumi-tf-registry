// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCapabilityAdapterDeprecatedDef(args?: GetCapabilityAdapterDeprecatedDefArgs, opts?: pulumi.InvokeOptions): Promise<GetCapabilityAdapterDeprecatedDefResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getCapabilityAdapterDeprecatedDef:getCapabilityAdapterDeprecatedDef", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "createTime": args.createTime,
        "domainGroupMoid": args.domainGroupMoid,
        "id": args.id,
        "modTime": args.modTime,
        "model": args.model,
        "moid": args.moid,
        "name": args.name,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "vendor": args.vendor,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCapabilityAdapterDeprecatedDef.
 */
export interface GetCapabilityAdapterDeprecatedDefArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetCapabilityAdapterDeprecatedDefAncestor[];
    classId?: string;
    createTime?: string;
    domainGroupMoid?: string;
    id?: string;
    modTime?: string;
    model?: string;
    moid?: string;
    name?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetCapabilityAdapterDeprecatedDefParent;
    permissionResources?: inputs.GetCapabilityAdapterDeprecatedDefPermissionResource[];
    sharedScope?: string;
    tags?: inputs.GetCapabilityAdapterDeprecatedDefTag[];
    vendor?: string;
    versionContext?: inputs.GetCapabilityAdapterDeprecatedDefVersionContext;
}

/**
 * A collection of values returned by getCapabilityAdapterDeprecatedDef.
 */
export interface GetCapabilityAdapterDeprecatedDefResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetCapabilityAdapterDeprecatedDefAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly modTime?: string;
    readonly model?: string;
    readonly moid?: string;
    readonly name?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetCapabilityAdapterDeprecatedDefParent;
    readonly permissionResources?: outputs.GetCapabilityAdapterDeprecatedDefPermissionResource[];
    readonly results: outputs.GetCapabilityAdapterDeprecatedDefResult[];
    readonly sharedScope?: string;
    readonly tags?: outputs.GetCapabilityAdapterDeprecatedDefTag[];
    readonly vendor?: string;
    readonly versionContext?: outputs.GetCapabilityAdapterDeprecatedDefVersionContext;
}
export function getCapabilityAdapterDeprecatedDefOutput(args?: GetCapabilityAdapterDeprecatedDefOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCapabilityAdapterDeprecatedDefResult> {
    return pulumi.output(args).apply((a: any) => getCapabilityAdapterDeprecatedDef(a, opts))
}

/**
 * A collection of arguments for invoking getCapabilityAdapterDeprecatedDef.
 */
export interface GetCapabilityAdapterDeprecatedDefOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetCapabilityAdapterDeprecatedDefAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    model?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetCapabilityAdapterDeprecatedDefParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetCapabilityAdapterDeprecatedDefPermissionResourceArgs>[]>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetCapabilityAdapterDeprecatedDefTagArgs>[]>;
    vendor?: pulumi.Input<string>;
    versionContext?: pulumi.Input<inputs.GetCapabilityAdapterDeprecatedDefVersionContextArgs>;
}
