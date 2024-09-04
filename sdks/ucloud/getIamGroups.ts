// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getIamGroups(args?: GetIamGroupsArgs, opts?: pulumi.InvokeOptions): Promise<GetIamGroupsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("ucloud:index/getIamGroups:getIamGroups", {
        "id": args.id,
        "nameRegex": args.nameRegex,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIamGroups.
 */
export interface GetIamGroupsArgs {
    id?: string;
    nameRegex?: string;
}

/**
 * A collection of values returned by getIamGroups.
 */
export interface GetIamGroupsResult {
    readonly groups: outputs.GetIamGroupsGroup[];
    readonly id: string;
    readonly nameRegex?: string;
    readonly names: string[];
}
export function getIamGroupsOutput(args?: GetIamGroupsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIamGroupsResult> {
    return pulumi.output(args).apply((a: any) => getIamGroups(a, opts))
}

/**
 * A collection of arguments for invoking getIamGroups.
 */
export interface GetIamGroupsOutputArgs {
    id?: pulumi.Input<string>;
    nameRegex?: pulumi.Input<string>;
}
