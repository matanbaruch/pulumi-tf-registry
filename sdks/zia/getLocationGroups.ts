// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getLocationGroups(args?: GetLocationGroupsArgs, opts?: pulumi.InvokeOptions): Promise<GetLocationGroupsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("zia:index/getLocationGroups:getLocationGroups", {
        "dynamicLocationGroupCriterias": args.dynamicLocationGroupCriterias,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLocationGroups.
 */
export interface GetLocationGroupsArgs {
    dynamicLocationGroupCriterias?: inputs.GetLocationGroupsDynamicLocationGroupCriteria[];
    name?: string;
}

/**
 * A collection of values returned by getLocationGroups.
 */
export interface GetLocationGroupsResult {
    readonly comments: string;
    readonly deleted: boolean;
    readonly dynamicLocationGroupCriterias?: outputs.GetLocationGroupsDynamicLocationGroupCriteria[];
    readonly groupType: string;
    readonly id: number;
    readonly lastModTime: number;
    readonly lastModUsers: outputs.GetLocationGroupsLastModUser[];
    readonly locations: outputs.GetLocationGroupsLocation[];
    readonly name?: string;
    readonly predefined: boolean;
}
export function getLocationGroupsOutput(args?: GetLocationGroupsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLocationGroupsResult> {
    return pulumi.output(args).apply((a: any) => getLocationGroups(a, opts))
}

/**
 * A collection of arguments for invoking getLocationGroups.
 */
export interface GetLocationGroupsOutputArgs {
    dynamicLocationGroupCriterias?: pulumi.Input<pulumi.Input<inputs.GetLocationGroupsDynamicLocationGroupCriteriaArgs>[]>;
    name?: pulumi.Input<string>;
}
