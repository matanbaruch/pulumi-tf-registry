// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getGroups(args?: GetGroupsArgs, opts?: pulumi.InvokeOptions): Promise<GetGroupsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("googleworkspace:index/getGroups:getGroups", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getGroups.
 */
export interface GetGroupsArgs {
    id?: string;
}

/**
 * A collection of values returned by getGroups.
 */
export interface GetGroupsResult {
    readonly groups: outputs.GetGroupsGroup[];
    readonly id: string;
}
export function getGroupsOutput(args?: GetGroupsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGroupsResult> {
    return pulumi.output(args).apply((a: any) => getGroups(a, opts))
}

/**
 * A collection of arguments for invoking getGroups.
 */
export interface GetGroupsOutputArgs {
    id?: pulumi.Input<string>;
}
