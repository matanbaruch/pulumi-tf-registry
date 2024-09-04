// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDataSafeSensitiveDataModels(args: GetDataSafeSensitiveDataModelsArgs, opts?: pulumi.InvokeOptions): Promise<GetDataSafeSensitiveDataModelsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDataSafeSensitiveDataModels:getDataSafeSensitiveDataModels", {
        "accessLevel": args.accessLevel,
        "compartmentId": args.compartmentId,
        "compartmentIdInSubtree": args.compartmentIdInSubtree,
        "displayName": args.displayName,
        "filters": args.filters,
        "id": args.id,
        "sensitiveDataModelId": args.sensitiveDataModelId,
        "state": args.state,
        "targetId": args.targetId,
        "timeCreatedGreaterThanOrEqualTo": args.timeCreatedGreaterThanOrEqualTo,
        "timeCreatedLessThan": args.timeCreatedLessThan,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDataSafeSensitiveDataModels.
 */
export interface GetDataSafeSensitiveDataModelsArgs {
    accessLevel?: string;
    compartmentId: string;
    compartmentIdInSubtree?: boolean;
    displayName?: string;
    filters?: inputs.GetDataSafeSensitiveDataModelsFilter[];
    id?: string;
    sensitiveDataModelId?: string;
    state?: string;
    targetId?: string;
    timeCreatedGreaterThanOrEqualTo?: string;
    timeCreatedLessThan?: string;
}

/**
 * A collection of values returned by getDataSafeSensitiveDataModels.
 */
export interface GetDataSafeSensitiveDataModelsResult {
    readonly accessLevel?: string;
    readonly compartmentId: string;
    readonly compartmentIdInSubtree?: boolean;
    readonly displayName?: string;
    readonly filters?: outputs.GetDataSafeSensitiveDataModelsFilter[];
    readonly id: string;
    readonly sensitiveDataModelCollections: outputs.GetDataSafeSensitiveDataModelsSensitiveDataModelCollection[];
    readonly sensitiveDataModelId?: string;
    readonly state?: string;
    readonly targetId?: string;
    readonly timeCreatedGreaterThanOrEqualTo?: string;
    readonly timeCreatedLessThan?: string;
}
export function getDataSafeSensitiveDataModelsOutput(args: GetDataSafeSensitiveDataModelsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDataSafeSensitiveDataModelsResult> {
    return pulumi.output(args).apply((a: any) => getDataSafeSensitiveDataModels(a, opts))
}

/**
 * A collection of arguments for invoking getDataSafeSensitiveDataModels.
 */
export interface GetDataSafeSensitiveDataModelsOutputArgs {
    accessLevel?: pulumi.Input<string>;
    compartmentId: pulumi.Input<string>;
    compartmentIdInSubtree?: pulumi.Input<boolean>;
    displayName?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetDataSafeSensitiveDataModelsFilterArgs>[]>;
    id?: pulumi.Input<string>;
    sensitiveDataModelId?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    targetId?: pulumi.Input<string>;
    timeCreatedGreaterThanOrEqualTo?: pulumi.Input<string>;
    timeCreatedLessThan?: pulumi.Input<string>;
}
