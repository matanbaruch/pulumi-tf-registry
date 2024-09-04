// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSecurityGroups(args?: GetSecurityGroupsArgs, opts?: pulumi.InvokeOptions): Promise<GetSecurityGroupsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("samsungcloudplatform:index/getSecurityGroups:getSecurityGroups", {
        "contents": args.contents,
        "filters": args.filters,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSecurityGroups.
 */
export interface GetSecurityGroupsArgs {
    contents?: inputs.GetSecurityGroupsContent[];
    filters?: inputs.GetSecurityGroupsFilter[];
    id?: string;
}

/**
 * A collection of values returned by getSecurityGroups.
 */
export interface GetSecurityGroupsResult {
    readonly contents?: outputs.GetSecurityGroupsContent[];
    readonly filters?: outputs.GetSecurityGroupsFilter[];
    readonly id: string;
    readonly totalCount: number;
}
export function getSecurityGroupsOutput(args?: GetSecurityGroupsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSecurityGroupsResult> {
    return pulumi.output(args).apply((a: any) => getSecurityGroups(a, opts))
}

/**
 * A collection of arguments for invoking getSecurityGroups.
 */
export interface GetSecurityGroupsOutputArgs {
    contents?: pulumi.Input<pulumi.Input<inputs.GetSecurityGroupsContentArgs>[]>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetSecurityGroupsFilterArgs>[]>;
    id?: pulumi.Input<string>;
}
