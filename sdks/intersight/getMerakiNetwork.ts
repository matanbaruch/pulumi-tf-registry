// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getMerakiNetwork(args?: GetMerakiNetworkArgs, opts?: pulumi.InvokeOptions): Promise<GetMerakiNetworkResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getMerakiNetwork:getMerakiNetwork", {
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
        "networkId": args.networkId,
        "networkTags": args.networkTags,
        "objectType": args.objectType,
        "organization": args.organization,
        "organizationId": args.organizationId,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "productTypes": args.productTypes,
        "registeredDevice": args.registeredDevice,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMerakiNetwork.
 */
export interface GetMerakiNetworkArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetMerakiNetworkAncestor[];
    classId?: string;
    createTime?: string;
    domainGroupMoid?: string;
    id?: string;
    modTime?: string;
    moid?: string;
    name?: string;
    networkId?: string;
    networkTags?: string[];
    objectType?: string;
    organization?: inputs.GetMerakiNetworkOrganization;
    organizationId?: string;
    owners?: string[];
    parent?: inputs.GetMerakiNetworkParent;
    permissionResources?: inputs.GetMerakiNetworkPermissionResource[];
    productTypes?: string[];
    registeredDevice?: inputs.GetMerakiNetworkRegisteredDevice;
    sharedScope?: string;
    tags?: inputs.GetMerakiNetworkTag[];
    versionContext?: inputs.GetMerakiNetworkVersionContext;
}

/**
 * A collection of values returned by getMerakiNetwork.
 */
export interface GetMerakiNetworkResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetMerakiNetworkAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly name?: string;
    readonly networkId?: string;
    readonly networkTags?: string[];
    readonly objectType?: string;
    readonly organization?: outputs.GetMerakiNetworkOrganization;
    readonly organizationId?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetMerakiNetworkParent;
    readonly permissionResources?: outputs.GetMerakiNetworkPermissionResource[];
    readonly productTypes?: string[];
    readonly registeredDevice?: outputs.GetMerakiNetworkRegisteredDevice;
    readonly results: outputs.GetMerakiNetworkResult[];
    readonly sharedScope?: string;
    readonly tags?: outputs.GetMerakiNetworkTag[];
    readonly versionContext?: outputs.GetMerakiNetworkVersionContext;
}
export function getMerakiNetworkOutput(args?: GetMerakiNetworkOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMerakiNetworkResult> {
    return pulumi.output(args).apply((a: any) => getMerakiNetwork(a, opts))
}

/**
 * A collection of arguments for invoking getMerakiNetwork.
 */
export interface GetMerakiNetworkOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetMerakiNetworkAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    networkId?: pulumi.Input<string>;
    networkTags?: pulumi.Input<pulumi.Input<string>[]>;
    objectType?: pulumi.Input<string>;
    organization?: pulumi.Input<inputs.GetMerakiNetworkOrganizationArgs>;
    organizationId?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetMerakiNetworkParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetMerakiNetworkPermissionResourceArgs>[]>;
    productTypes?: pulumi.Input<pulumi.Input<string>[]>;
    registeredDevice?: pulumi.Input<inputs.GetMerakiNetworkRegisteredDeviceArgs>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetMerakiNetworkTagArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetMerakiNetworkVersionContextArgs>;
}
