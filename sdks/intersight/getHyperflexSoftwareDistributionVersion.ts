// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getHyperflexSoftwareDistributionVersion(args?: GetHyperflexSoftwareDistributionVersionArgs, opts?: pulumi.InvokeOptions): Promise<GetHyperflexSoftwareDistributionVersionResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getHyperflexSoftwareDistributionVersion:getHyperflexSoftwareDistributionVersion", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "createTime": args.createTime,
        "distributionComponents": args.distributionComponents,
        "domainGroupMoid": args.domainGroupMoid,
        "id": args.id,
        "modTime": args.modTime,
        "moid": args.moid,
        "nrVersion": args.nrVersion,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "sharedScope": args.sharedScope,
        "softwareDistributionEntry": args.softwareDistributionEntry,
        "tags": args.tags,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getHyperflexSoftwareDistributionVersion.
 */
export interface GetHyperflexSoftwareDistributionVersionArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetHyperflexSoftwareDistributionVersionAncestor[];
    classId?: string;
    createTime?: string;
    distributionComponents?: inputs.GetHyperflexSoftwareDistributionVersionDistributionComponent[];
    domainGroupMoid?: string;
    id?: string;
    modTime?: string;
    moid?: string;
    nrVersion?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetHyperflexSoftwareDistributionVersionParent;
    permissionResources?: inputs.GetHyperflexSoftwareDistributionVersionPermissionResource[];
    sharedScope?: string;
    softwareDistributionEntry?: inputs.GetHyperflexSoftwareDistributionVersionSoftwareDistributionEntry;
    tags?: inputs.GetHyperflexSoftwareDistributionVersionTag[];
    versionContext?: inputs.GetHyperflexSoftwareDistributionVersionVersionContext;
}

/**
 * A collection of values returned by getHyperflexSoftwareDistributionVersion.
 */
export interface GetHyperflexSoftwareDistributionVersionResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetHyperflexSoftwareDistributionVersionAncestor[];
    readonly classId?: string;
    readonly createTime?: string;
    readonly distributionComponents?: outputs.GetHyperflexSoftwareDistributionVersionDistributionComponent[];
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly nrVersion?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetHyperflexSoftwareDistributionVersionParent;
    readonly permissionResources?: outputs.GetHyperflexSoftwareDistributionVersionPermissionResource[];
    readonly results: outputs.GetHyperflexSoftwareDistributionVersionResult[];
    readonly sharedScope?: string;
    readonly softwareDistributionEntry?: outputs.GetHyperflexSoftwareDistributionVersionSoftwareDistributionEntry;
    readonly tags?: outputs.GetHyperflexSoftwareDistributionVersionTag[];
    readonly versionContext?: outputs.GetHyperflexSoftwareDistributionVersionVersionContext;
}
export function getHyperflexSoftwareDistributionVersionOutput(args?: GetHyperflexSoftwareDistributionVersionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetHyperflexSoftwareDistributionVersionResult> {
    return pulumi.output(args).apply((a: any) => getHyperflexSoftwareDistributionVersion(a, opts))
}

/**
 * A collection of arguments for invoking getHyperflexSoftwareDistributionVersion.
 */
export interface GetHyperflexSoftwareDistributionVersionOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetHyperflexSoftwareDistributionVersionAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    distributionComponents?: pulumi.Input<pulumi.Input<inputs.GetHyperflexSoftwareDistributionVersionDistributionComponentArgs>[]>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    nrVersion?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetHyperflexSoftwareDistributionVersionParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetHyperflexSoftwareDistributionVersionPermissionResourceArgs>[]>;
    sharedScope?: pulumi.Input<string>;
    softwareDistributionEntry?: pulumi.Input<inputs.GetHyperflexSoftwareDistributionVersionSoftwareDistributionEntryArgs>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetHyperflexSoftwareDistributionVersionTagArgs>[]>;
    versionContext?: pulumi.Input<inputs.GetHyperflexSoftwareDistributionVersionVersionContextArgs>;
}
