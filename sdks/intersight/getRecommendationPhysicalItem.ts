// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getRecommendationPhysicalItem(args?: GetRecommendationPhysicalItemArgs, opts?: pulumi.InvokeOptions): Promise<GetRecommendationPhysicalItemResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("intersight:index/getRecommendationPhysicalItem:getRecommendationPhysicalItem", {
        "accountMoid": args.accountMoid,
        "additionalProperties": args.additionalProperties,
        "ancestors": args.ancestors,
        "capacity": args.capacity,
        "capacityRunway": args.capacityRunway,
        "classId": args.classId,
        "clusterExpansion": args.clusterExpansion,
        "configurationPath": args.configurationPath,
        "createTime": args.createTime,
        "domainGroupMoid": args.domainGroupMoid,
        "id": args.id,
        "isNew": args.isNew,
        "maxCount": args.maxCount,
        "modTime": args.modTime,
        "model": args.model,
        "moid": args.moid,
        "name": args.name,
        "nrCount": args.nrCount,
        "objectType": args.objectType,
        "owners": args.owners,
        "parent": args.parent,
        "parentMoid": args.parentMoid,
        "permissionResources": args.permissionResources,
        "personality": args.personality,
        "physicalItems": args.physicalItems,
        "sharedScope": args.sharedScope,
        "sourceMoid": args.sourceMoid,
        "tags": args.tags,
        "type": args.type,
        "unit": args.unit,
        "uuid": args.uuid,
        "versionContext": args.versionContext,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRecommendationPhysicalItem.
 */
export interface GetRecommendationPhysicalItemArgs {
    accountMoid?: string;
    additionalProperties?: string;
    ancestors?: inputs.GetRecommendationPhysicalItemAncestor[];
    capacity?: number;
    capacityRunway?: inputs.GetRecommendationPhysicalItemCapacityRunway;
    classId?: string;
    clusterExpansion?: inputs.GetRecommendationPhysicalItemClusterExpansion;
    configurationPath?: string;
    createTime?: string;
    domainGroupMoid?: string;
    id?: string;
    isNew?: boolean;
    maxCount?: number;
    modTime?: string;
    model?: string;
    moid?: string;
    name?: string;
    nrCount?: number;
    objectType?: string;
    owners?: string[];
    parent?: inputs.GetRecommendationPhysicalItemParent;
    parentMoid?: string;
    permissionResources?: inputs.GetRecommendationPhysicalItemPermissionResource[];
    personality?: string;
    physicalItems?: inputs.GetRecommendationPhysicalItemPhysicalItem[];
    sharedScope?: string;
    sourceMoid?: string;
    tags?: inputs.GetRecommendationPhysicalItemTag[];
    type?: string;
    unit?: string;
    uuid?: string;
    versionContext?: inputs.GetRecommendationPhysicalItemVersionContext;
}

/**
 * A collection of values returned by getRecommendationPhysicalItem.
 */
export interface GetRecommendationPhysicalItemResult {
    readonly accountMoid?: string;
    readonly additionalProperties?: string;
    readonly ancestors?: outputs.GetRecommendationPhysicalItemAncestor[];
    readonly capacity?: number;
    readonly capacityRunway?: outputs.GetRecommendationPhysicalItemCapacityRunway;
    readonly classId?: string;
    readonly clusterExpansion?: outputs.GetRecommendationPhysicalItemClusterExpansion;
    readonly configurationPath?: string;
    readonly createTime?: string;
    readonly domainGroupMoid?: string;
    readonly id: string;
    readonly isNew?: boolean;
    readonly maxCount?: number;
    readonly modTime?: string;
    readonly model?: string;
    readonly moid?: string;
    readonly name?: string;
    readonly nrCount?: number;
    readonly objectType?: string;
    readonly owners?: string[];
    readonly parent?: outputs.GetRecommendationPhysicalItemParent;
    readonly parentMoid?: string;
    readonly permissionResources?: outputs.GetRecommendationPhysicalItemPermissionResource[];
    readonly personality?: string;
    readonly physicalItems?: outputs.GetRecommendationPhysicalItemPhysicalItem[];
    readonly results: outputs.GetRecommendationPhysicalItemResult[];
    readonly sharedScope?: string;
    readonly sourceMoid?: string;
    readonly tags?: outputs.GetRecommendationPhysicalItemTag[];
    readonly type?: string;
    readonly unit?: string;
    readonly uuid?: string;
    readonly versionContext?: outputs.GetRecommendationPhysicalItemVersionContext;
}
export function getRecommendationPhysicalItemOutput(args?: GetRecommendationPhysicalItemOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRecommendationPhysicalItemResult> {
    return pulumi.output(args).apply((a: any) => getRecommendationPhysicalItem(a, opts))
}

/**
 * A collection of arguments for invoking getRecommendationPhysicalItem.
 */
export interface GetRecommendationPhysicalItemOutputArgs {
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    ancestors?: pulumi.Input<pulumi.Input<inputs.GetRecommendationPhysicalItemAncestorArgs>[]>;
    capacity?: pulumi.Input<number>;
    capacityRunway?: pulumi.Input<inputs.GetRecommendationPhysicalItemCapacityRunwayArgs>;
    classId?: pulumi.Input<string>;
    clusterExpansion?: pulumi.Input<inputs.GetRecommendationPhysicalItemClusterExpansionArgs>;
    configurationPath?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    domainGroupMoid?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    isNew?: pulumi.Input<boolean>;
    maxCount?: pulumi.Input<number>;
    modTime?: pulumi.Input<string>;
    model?: pulumi.Input<string>;
    moid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nrCount?: pulumi.Input<number>;
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parent?: pulumi.Input<inputs.GetRecommendationPhysicalItemParentArgs>;
    parentMoid?: pulumi.Input<string>;
    permissionResources?: pulumi.Input<pulumi.Input<inputs.GetRecommendationPhysicalItemPermissionResourceArgs>[]>;
    personality?: pulumi.Input<string>;
    physicalItems?: pulumi.Input<pulumi.Input<inputs.GetRecommendationPhysicalItemPhysicalItemArgs>[]>;
    sharedScope?: pulumi.Input<string>;
    sourceMoid?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetRecommendationPhysicalItemTagArgs>[]>;
    type?: pulumi.Input<string>;
    unit?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
    versionContext?: pulumi.Input<inputs.GetRecommendationPhysicalItemVersionContextArgs>;
}
