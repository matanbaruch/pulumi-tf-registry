// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getZone(args?: GetZoneArgs, opts?: pulumi.InvokeOptions): Promise<GetZoneResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("vra:index/getZone:getZone", {
        "id": args.id,
        "name": args.name,
        "tags": args.tags,
        "tagsToMatches": args.tagsToMatches,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getZone.
 */
export interface GetZoneArgs {
    id?: string;
    name?: string;
    tags?: inputs.GetZoneTag[];
    tagsToMatches?: inputs.GetZoneTagsToMatch[];
}

/**
 * A collection of values returned by getZone.
 */
export interface GetZoneResult {
    readonly cloudAccountId: string;
    readonly computeIds: string[];
    readonly createdAt: string;
    readonly customProperties: {[key: string]: string};
    readonly description: string;
    readonly externalRegionId: string;
    readonly folder: string;
    readonly id: string;
    readonly links: outputs.GetZoneLink[];
    readonly name: string;
    readonly orgId: string;
    readonly owner: string;
    readonly placementPolicy: string;
    readonly tags?: outputs.GetZoneTag[];
    readonly tagsToMatches?: outputs.GetZoneTagsToMatch[];
    readonly updatedAt: string;
}
export function getZoneOutput(args?: GetZoneOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetZoneResult> {
    return pulumi.output(args).apply((a: any) => getZone(a, opts))
}

/**
 * A collection of arguments for invoking getZone.
 */
export interface GetZoneOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.GetZoneTagArgs>[]>;
    tagsToMatches?: pulumi.Input<pulumi.Input<inputs.GetZoneTagsToMatchArgs>[]>;
}
