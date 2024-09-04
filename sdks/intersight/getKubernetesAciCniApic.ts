// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getKubernetesAciCniApic(args?: GetKubernetesAciCniApicArgs, opts?: pulumi.InvokeOptions): Promise<GetKubernetesAciCniApicResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getKubernetesAciCniApic:getKubernetesAciCniApic", {
        "accountMoid": args.accountMoid,
        "aciCniProfiles": args.aciCniProfiles,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "assetApicMoid": args.assetApicMoid,
        "classId": args.classId,
        "createTime": args.createTime,
        "domainGroupMoid": args.domainGroupMoid,
        "id": args.id,
        "modTime": args.modTime,
        "moid": args.moid,
        "numAciCniProfiles": args.numAciCniProfiles,
        "objectType": args.objectType,
        "organization": args.organization,
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
 * A collection of arguments for invoking getKubernetesAciCniApic.
 */
export interface GetKubernetesAciCniApicArgs {
    accountMoid?: string;
    aciCniProfiles?: inputs.GetKubernetesAciCniApicAciCniProfile[];
    additionalProperties?: string;
    ancestors?: inputs.GetKubernetesAciCniApicAncestor[];
    assetApicMoid?: string;
    classId?: string;
    createTime?: string;
    domainGroupMoid?: string;
    id?: string;
    modTime?: string;
    moid?: string;
    numAciCniProfiles?: number;
    objectType?: string;
    organization?: inputs.GetKubernetesAciCniApicOrganization;
    owners?: string[];
    parent?: inputs.GetKubernetesAciCniApicParent;
    permissionResources?: inputs.GetKubernetesAciCniApicPermissionResource[];
    registeredDevice?: inputs.GetKubernetesAciCniApicRegisteredDevice;
    sharedScope?: string;
    tags?: inputs.GetKubernetesAciCniApicTag[];
    versionContext?: inputs.GetKubernetesAciCniApicVersionContext;
}

/**
 * A collection of values returned by getKubernetesAciCniApic.
 */
export interface GetKubernetesAciCniApicResult {
    readonly accountMoid?: string;
    readonly aciCniProfiles?: outputs.GetKubernetesAciCniApicAciCniProfile[];
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetKubernetesAciCniApicAncestor[];
    readonly assetApicMoid?: string;
    readonly classId?: string;
    readonly createTime?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly numAciCniProfiles?: number;
    readonly objectType?: string;
    readonly organization?: outputs.GetKubernetesAciCniApicOrganization;
    readonly owners?: string[];
    readonly parent?: outputs.GetKubernetesAciCniApicParent;
    readonly permissionResources?: outputs.GetKubernetesAciCniApicPermissionResource[];
    readonly registeredDevice?: outputs.GetKubernetesAciCniApicRegisteredDevice;
    readonly results: outputs.GetKubernetesAciCniApicResult[];
    readonly sharedScope?: string;
    readonly tags?: outputs.GetKubernetesAciCniApicTag[];
    readonly versionContext?: outputs.GetKubernetesAciCniApicVersionContext;
}
export function getKubernetesAciCniApicOutput(args?: GetKubernetesAciCniApicOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetKubernetesAciCniApicResult> {
    return pulumi.output(args).apply((a: any) => getKubernetesAciCniApic(a, opts))
}

/**
 * A collection of arguments for invoking getKubernetesAciCniApic.
 */
export interface GetKubernetesAciCniApicOutputArgs {
    accountMoid?: pulumi.Input<string>;
    aciCniProfiles?: pulumi.Input<pulumi.Input<inputs.GetKubernetesAciCniApicAciCniProfileArgs>[]>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetKubernetesAciCniApicAncestorArgs>[]>;
    assetApicMoid?: pulumi.Input<string>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    numAciCniProfiles?: pulumi.Input<number>;
    objectType?: pulumi.Input<string>;
    organization?: pulumi.Input<inputs.GetKubernetesAciCniApicOrganizationArgs>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetKubernetesAciCniApicParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetKubernetesAciCniApicPermissionResourceArgs>[]>;
    registeredDevice?: pulumi.Input<inputs.GetKubernetesAciCniApicRegisteredDeviceArgs>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetKubernetesAciCniApicTagArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetKubernetesAciCniApicVersionContextArgs>;
}
