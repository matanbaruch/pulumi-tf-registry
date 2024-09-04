// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getPlacementGroups(args?: GetPlacementGroupsArgs, opts?: pulumi.InvokeOptions): Promise<GetPlacementGroupsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("hcloud:index/getPlacementGroups:getPlacementGroups", {
        "id": args.id,
        "mostRecent": args.mostRecent,
        "withSelector": args.withSelector,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPlacementGroups.
 */
export interface GetPlacementGroupsArgs {
    id?: string;
    mostRecent?: boolean;
    withSelector?: string;
}

/**
 * A collection of values returned by getPlacementGroups.
 */
export interface GetPlacementGroupsResult {
    readonly id: string;
    readonly mostRecent?: boolean;
    readonly placementGroups: outputs.GetPlacementGroupsPlacementGroup[];
    readonly withSelector?: string;
}
export function getPlacementGroupsOutput(args?: GetPlacementGroupsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPlacementGroupsResult> {
    return pulumi.output(args).apply((a: any) => getPlacementGroups(a, opts))
}

/**
 * A collection of arguments for invoking getPlacementGroups.
 */
export interface GetPlacementGroupsOutputArgs {
    id?: pulumi.Input<string>;
    mostRecent?: pulumi.Input<boolean>;
    withSelector?: pulumi.Input<string>;
}
