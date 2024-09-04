// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getApicApplicationEndpointGroup(args?: GetApicApplicationEndpointGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetApicApplicationEndpointGroupResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getApicApplicationEndpointGroup:getApicApplicationEndpointGroup", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "application": args.application,
        "classId": args.classId,
        "createTime": args.createTime,
        "dn": args.dn,
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
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getApicApplicationEndpointGroup.
 */
export interface GetApicApplicationEndpointGroupArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetApicApplicationEndpointGroupAncestor[];
    application?: inputs.GetApicApplicationEndpointGroupApplication;
    classId?: string;
    createTime?: string;
    dn?: string;
    domainGroupMoid?: string;
    id?: string;
    modTime?: string;
    moid?: string;
    name?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetApicApplicationEndpointGroupParent;
    permissionResources?: inputs.GetApicApplicationEndpointGroupPermissionResource[];
    registeredDevice?: inputs.GetApicApplicationEndpointGroupRegisteredDevice;
    sharedScope?: string;
    tags?: inputs.GetApicApplicationEndpointGroupTag[];
    versionContext?: inputs.GetApicApplicationEndpointGroupVersionContext;
}

/**
 * A collection of values returned by getApicApplicationEndpointGroup.
 */
export interface GetApicApplicationEndpointGroupResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetApicApplicationEndpointGroupAncestor[];
    readonly application?: outputs.GetApicApplicationEndpointGroupApplication;
    readonly classId?: string;
    readonly createTime?: string;
    readonly dn?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly name?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetApicApplicationEndpointGroupParent;
    readonly permissionResources?: outputs.GetApicApplicationEndpointGroupPermissionResource[];
    readonly registeredDevice?: outputs.GetApicApplicationEndpointGroupRegisteredDevice;
    readonly results: outputs.GetApicApplicationEndpointGroupResult[];
    readonly sharedScope?: string;
    readonly tags?: outputs.GetApicApplicationEndpointGroupTag[];
    readonly versionContext?: outputs.GetApicApplicationEndpointGroupVersionContext;
}
export function getApicApplicationEndpointGroupOutput(args?: GetApicApplicationEndpointGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApicApplicationEndpointGroupResult> {
    return pulumi.output(args).apply((a: any) => getApicApplicationEndpointGroup(a, opts))
}

/**
 * A collection of arguments for invoking getApicApplicationEndpointGroup.
 */
export interface GetApicApplicationEndpointGroupOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetApicApplicationEndpointGroupAncestorArgs>[]>;
    application?: pulumi.Input<inputs.GetApicApplicationEndpointGroupApplicationArgs>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    dn?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetApicApplicationEndpointGroupParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetApicApplicationEndpointGroupPermissionResourceArgs>[]>;
    registeredDevice?: pulumi.Input<inputs.GetApicApplicationEndpointGroupRegisteredDeviceArgs>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetApicApplicationEndpointGroupTagArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetApicApplicationEndpointGroupVersionContextArgs>;
}
