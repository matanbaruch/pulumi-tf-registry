// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getMerakiTag(args?: GetMerakiTagArgs, opts?: pulumi.InvokeOptions): Promise<GetMerakiTagResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getMerakiTag:getMerakiTag", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "createTime": args.createTime,
        "device": args.device,
        "domainGroupMoid": args.domainGroupMoid,
        "id": args.id,
        "modTime": args.modTime,
        "moid": args.moid,
        "name": args.name,
        "network": args.network,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "registeredDevice": args.registeredDevice,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "type": args.type,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMerakiTag.
 */
export interface GetMerakiTagArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetMerakiTagAncestor[];
    classId?: string;
    createTime?: string;
    device?: inputs.GetMerakiTagDevice;
    domainGroupMoid?: string;
    id?: string;
    modTime?: string;
    moid?: string;
    name?: string;
    network?: inputs.GetMerakiTagNetwork;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetMerakiTagParent;
    permissionResources?: inputs.GetMerakiTagPermissionResource[];
    registeredDevice?: inputs.GetMerakiTagRegisteredDevice;
    sharedScope?: string;
    tags?: inputs.GetMerakiTagTag[];
    type?: string;
    versionContext?: inputs.GetMerakiTagVersionContext;
}

/**
 * A collection of values returned by getMerakiTag.
 */
export interface GetMerakiTagResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetMerakiTagAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly device?: outputs.GetMerakiTagDevice;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly name?: string;
    readonly network?: outputs.GetMerakiTagNetwork;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetMerakiTagParent;
    readonly permissionResources?: outputs.GetMerakiTagPermissionResource[];
    readonly registeredDevice?: outputs.GetMerakiTagRegisteredDevice;
    readonly results: outputs.GetMerakiTagResult[];
    readonly sharedScope?: string;
    readonly tags?: outputs.GetMerakiTagTag[];
    readonly type?: string;
    readonly versionContext?: outputs.GetMerakiTagVersionContext;
}
export function getMerakiTagOutput(args?: GetMerakiTagOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMerakiTagResult> {
    return pulumi.output(args).apply((a: any) => getMerakiTag(a, opts))
}

/**
 * A collection of arguments for invoking getMerakiTag.
 */
export interface GetMerakiTagOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetMerakiTagAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    device?: pulumi.Input<inputs.GetMerakiTagDeviceArgs>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    network?: pulumi.Input<inputs.GetMerakiTagNetworkArgs>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetMerakiTagParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetMerakiTagPermissionResourceArgs>[]>;
    registeredDevice?: pulumi.Input<inputs.GetMerakiTagRegisteredDeviceArgs>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetMerakiTagTagArgs>[]>;
    type?: pulumi.Input<string>;
    versionContext?: pulumi.Input<inputs.GetMerakiTagVersionContextArgs>;
}
