// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAssetDeviceConfiguration(args?: GetAssetDeviceConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetAssetDeviceConfigurationResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getAssetDeviceConfiguration:getAssetDeviceConfiguration", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "createTime": args.createTime,
        "device": args.device,
        "domainGroupMoid": args.domainGroupMoid,
        "id": args.id,
        "localConfigurationLocked": args.localConfigurationLocked,
        "logLevel": args.logLevel,
        "modTime": args.modTime,
        "moid": args.moid,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "tunneledKvm": args.tunneledKvm,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAssetDeviceConfiguration.
 */
export interface GetAssetDeviceConfigurationArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetAssetDeviceConfigurationAncestor[];
    classId?: string;
    createTime?: string;
    device?: inputs.GetAssetDeviceConfigurationDevice;
    domainGroupMoid?: string;
    id?: string;
    localConfigurationLocked?: boolean;
    logLevel?: string;
    modTime?: string;
    moid?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetAssetDeviceConfigurationParent;
    permissionResources?: inputs.GetAssetDeviceConfigurationPermissionResource[];
    sharedScope?: string;
    tags?: inputs.GetAssetDeviceConfigurationTag[];
    tunneledKvm?: boolean;
    versionContext?: inputs.GetAssetDeviceConfigurationVersionContext;
}

/**
 * A collection of values returned by getAssetDeviceConfiguration.
 */
export interface GetAssetDeviceConfigurationResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetAssetDeviceConfigurationAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly device?: outputs.GetAssetDeviceConfigurationDevice;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly localConfigurationLocked?: boolean;
    readonly logLevel?: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetAssetDeviceConfigurationParent;
    readonly permissionResources?: outputs.GetAssetDeviceConfigurationPermissionResource[];
    readonly results: outputs.GetAssetDeviceConfigurationResult[];
    readonly sharedScope?: string;
    readonly tags?: outputs.GetAssetDeviceConfigurationTag[];
    readonly tunneledKvm?: boolean;
    readonly versionContext?: outputs.GetAssetDeviceConfigurationVersionContext;
}
export function getAssetDeviceConfigurationOutput(args?: GetAssetDeviceConfigurationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAssetDeviceConfigurationResult> {
    return pulumi.output(args).apply((a: any) => getAssetDeviceConfiguration(a, opts))
}

/**
 * A collection of arguments for invoking getAssetDeviceConfiguration.
 */
export interface GetAssetDeviceConfigurationOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetAssetDeviceConfigurationAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    device?: pulumi.Input<inputs.GetAssetDeviceConfigurationDeviceArgs>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    localConfigurationLocked?: pulumi.Input<boolean>;
    logLevel?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetAssetDeviceConfigurationParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetAssetDeviceConfigurationPermissionResourceArgs>[]>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetAssetDeviceConfigurationTagArgs>[]>;
    tunneledKvm?: pulumi.Input<boolean>;
    versionContext?: pulumi.Input<inputs.GetAssetDeviceConfigurationVersionContextArgs>;
}
