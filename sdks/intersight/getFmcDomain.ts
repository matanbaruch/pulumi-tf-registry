// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getFmcDomain(args?: GetFmcDomainArgs, opts?: pulumi.InvokeOptions): Promise<GetFmcDomainResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getFmcDomain:getFmcDomain", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "createTime": args.createTime,
        "domainGroupMoid": args.domainGroupMoid,
        "id": args.id,
        "modTime": args.modTime,
        "moid": args.moid,
        "name": args.name,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "registeredDevice": args.registeredDevice,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "uuid": args.uuid,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFmcDomain.
 */
export interface GetFmcDomainArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetFmcDomainAncestor[];
    classId?: string;
    createTime?: string;
    domainGroupMoid?: string;
    id?: string;
    modTime?: string;
    moid?: string;
    name?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetFmcDomainParent;
    permissionResources?: inputs.GetFmcDomainPermissionResource[];
    registeredDevice?: inputs.GetFmcDomainRegisteredDevice;
    sharedScope?: string;
    tags?: inputs.GetFmcDomainTag[];
    uuid?: string;
    versionContext?: inputs.GetFmcDomainVersionContext;
}

/**
 * A collection of values returned by getFmcDomain.
 */
export interface GetFmcDomainResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetFmcDomainAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly name?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetFmcDomainParent;
    readonly permissionResources?: outputs.GetFmcDomainPermissionResource[];
    readonly registeredDevice?: outputs.GetFmcDomainRegisteredDevice;
    readonly results: outputs.GetFmcDomainResult[];
    readonly sharedScope?: string;
    readonly tags?: outputs.GetFmcDomainTag[];
    readonly uuid?: string;
    readonly versionContext?: outputs.GetFmcDomainVersionContext;
}
export function getFmcDomainOutput(args?: GetFmcDomainOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFmcDomainResult> {
    return pulumi.output(args).apply((a: any) => getFmcDomain(a, opts))
}

/**
 * A collection of arguments for invoking getFmcDomain.
 */
export interface GetFmcDomainOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetFmcDomainAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetFmcDomainParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetFmcDomainPermissionResourceArgs>[]>;
    registeredDevice?: pulumi.Input<inputs.GetFmcDomainRegisteredDeviceArgs>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetFmcDomainTagArgs>[]>;
    uuid?: pulumi.Input<string>;
    versionContext?: pulumi.Input<inputs.GetFmcDomainVersionContextArgs>;
}
