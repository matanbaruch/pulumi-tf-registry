// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getBlueprint(args?: GetBlueprintArgs, opts?: pulumi.InvokeOptions): Promise<GetBlueprintResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("vra:index/getBlueprint:getBlueprint", {
        "id": args.id,
        "name": args.name,
        "projectId": args.projectId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getBlueprint.
 */
export interface GetBlueprintArgs {
    id?: string;
    name?: string;
    projectId?: string;
}

/**
 * A collection of values returned by getBlueprint.
 */
export interface GetBlueprintResult {
    readonly content: string;
    readonly contentSourceId: string;
    readonly contentSourcePath: string;
    readonly contentSourceSyncAt: string;
    readonly contentSourceSyncMessages: string[];
    readonly contentSourceSyncStatus: string;
    readonly contentSourceType: string;
    readonly createdAt: string;
    readonly createdBy: string;
    readonly description: string;
    readonly id: string;
    readonly name: string;
    readonly orgId: string;
    readonly projectId: string;
    readonly projectName: string;
    readonly requestScopeOrg: boolean;
    readonly selfLink: string;
    readonly status: string;
    readonly totalReleasedVersions: number;
    readonly totalVersions: number;
    readonly updatedAt: string;
    readonly updatedBy: string;
    readonly valid: boolean;
    readonly validationMessages: outputs.GetBlueprintValidationMessage[];
}
export function getBlueprintOutput(args?: GetBlueprintOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBlueprintResult> {
    return pulumi.output(args).apply((a: any) => getBlueprint(a, opts))
}

/**
 * A collection of arguments for invoking getBlueprint.
 */
export interface GetBlueprintOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    projectId?: pulumi.Input<string>;
}
