// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getConnectorpackConnectorPackUpgrade(args?: GetConnectorpackConnectorPackUpgradeArgs, opts?: pulumi.InvokeOptions): Promise<GetConnectorpackConnectorPackUpgradeResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getConnectorpackConnectorPackUpgrade:getConnectorpackConnectorPackUpgrade", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "classId": args.classId,
        "connectorPackOpType": args.connectorPackOpType,
        "createTime": args.createTime,
        "domainGroupMoid": args.domainGroupMoid,
        "id": args.id,
        "modTime": args.modTime,
        "moid": args.moid,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "permissionResources": args.permissionResources,
        "sharedScope": args.sharedScope,
        "tags": args.tags,
        "ucsdInfo": args.ucsdInfo,
        "versionContext": args.versionContext,
        "workflow": args.workflow,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getConnectorpackConnectorPackUpgrade.
 */
export interface GetConnectorpackConnectorPackUpgradeArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetConnectorpackConnectorPackUpgradeAncestor[];
    classId?: string;
    connectorPackOpType?: string;
    createTime?: string;
    domainGroupMoid?: string;
    id?: string;
    modTime?: string;
    moid?: string;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetConnectorpackConnectorPackUpgradeParent;
    permissionResources?: inputs.GetConnectorpackConnectorPackUpgradePermissionResource[];
    sharedScope?: string;
    tags?: inputs.GetConnectorpackConnectorPackUpgradeTag[];
    ucsdInfo?: inputs.GetConnectorpackConnectorPackUpgradeUcsdInfo;
    versionContext?: inputs.GetConnectorpackConnectorPackUpgradeVersionContext;
    workflow?: inputs.GetConnectorpackConnectorPackUpgradeWorkflow;
}

/**
 * A collection of values returned by getConnectorpackConnectorPackUpgrade.
 */
export interface GetConnectorpackConnectorPackUpgradeResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetConnectorpackConnectorPackUpgradeAncestor[];
    readonly classId?: string;
    readonly connectorPackOpType?: string;
    readonly createTime?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly modTime?: string;
    readonly moid?: string;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetConnectorpackConnectorPackUpgradeParent;
    readonly permissionResources?: outputs.GetConnectorpackConnectorPackUpgradePermissionResource[];
    readonly results: outputs.GetConnectorpackConnectorPackUpgradeResult[];
    readonly sharedScope?: string;
    readonly tags?: outputs.GetConnectorpackConnectorPackUpgradeTag[];
    readonly ucsdInfo?: outputs.GetConnectorpackConnectorPackUpgradeUcsdInfo;
    readonly versionContext?: outputs.GetConnectorpackConnectorPackUpgradeVersionContext;
    readonly workflow?: outputs.GetConnectorpackConnectorPackUpgradeWorkflow;
}
export function getConnectorpackConnectorPackUpgradeOutput(args?: GetConnectorpackConnectorPackUpgradeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetConnectorpackConnectorPackUpgradeResult> {
    return pulumi.output(args).apply((a: any) => getConnectorpackConnectorPackUpgrade(a, opts))
}

/**
 * A collection of arguments for invoking getConnectorpackConnectorPackUpgrade.
 */
export interface GetConnectorpackConnectorPackUpgradeOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetConnectorpackConnectorPackUpgradeAncestorArgs>[]>;
    classId?: pulumi.Input<string>;
    connectorPackOpType?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    modTime?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetConnectorpackConnectorPackUpgradeParentArgs>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetConnectorpackConnectorPackUpgradePermissionResourceArgs>[]>;
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetConnectorpackConnectorPackUpgradeTagArgs>[]>;
    ucsdInfo?: pulumi.Input<inputs.GetConnectorpackConnectorPackUpgradeUcsdInfoArgs>;
    versionContext?: pulumi.Input<inputs.GetConnectorpackConnectorPackUpgradeVersionContextArgs>;
    workflow?: pulumi.Input<inputs.GetConnectorpackConnectorPackUpgradeWorkflowArgs>;
}
