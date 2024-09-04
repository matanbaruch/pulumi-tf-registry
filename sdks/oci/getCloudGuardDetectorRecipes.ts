// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCloudGuardDetectorRecipes(args: GetCloudGuardDetectorRecipesArgs, opts?: pulumi.InvokeOptions): Promise<GetCloudGuardDetectorRecipesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getCloudGuardDetectorRecipes:getCloudGuardDetectorRecipes", {
        "accessLevel": args.accessLevel,
        "compartmentId": args.compartmentId,
        "compartmentIdInSubtree": args.compartmentIdInSubtree,
        "displayName": args.displayName,
        "filters": args.filters,
        "id": args.id,
        "resourceMetadataOnly": args.resourceMetadataOnly,
        "state": args.state,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCloudGuardDetectorRecipes.
 */
export interface GetCloudGuardDetectorRecipesArgs {
    accessLevel?: string;
    compartmentId: string;
    compartmentIdInSubtree?: boolean;
    displayName?: string;
    filters?: inputs.GetCloudGuardDetectorRecipesFilter[];
    id?: string;
    resourceMetadataOnly?: boolean;
    state?: string;
}

/**
 * A collection of values returned by getCloudGuardDetectorRecipes.
 */
export interface GetCloudGuardDetectorRecipesResult {
    readonly accessLevel?: string;
    readonly compartmentId: string;
    readonly compartmentIdInSubtree?: boolean;
    readonly detectorRecipeCollections: outputs.GetCloudGuardDetectorRecipesDetectorRecipeCollection[];
    readonly displayName?: string;
    readonly filters?: outputs.GetCloudGuardDetectorRecipesFilter[];
    readonly id: string;
    readonly resourceMetadataOnly?: boolean;
    readonly state?: string;
}
export function getCloudGuardDetectorRecipesOutput(args: GetCloudGuardDetectorRecipesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCloudGuardDetectorRecipesResult> {
    return pulumi.output(args).apply((a: any) => getCloudGuardDetectorRecipes(a, opts))
}

/**
 * A collection of arguments for invoking getCloudGuardDetectorRecipes.
 */
export interface GetCloudGuardDetectorRecipesOutputArgs {
    accessLevel?: pulumi.Input<string>;
    compartmentId: pulumi.Input<string>;
    compartmentIdInSubtree?: pulumi.Input<boolean>;
    displayName?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetCloudGuardDetectorRecipesFilterArgs>[]>;
    id?: pulumi.Input<string>;
    resourceMetadataOnly?: pulumi.Input<boolean>;
    state?: pulumi.Input<string>;
}
