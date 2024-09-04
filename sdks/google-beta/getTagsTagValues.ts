// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getTagsTagValues(args: GetTagsTagValuesArgs, opts?: pulumi.InvokeOptions): Promise<GetTagsTagValuesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google-beta:index/getTagsTagValues:getTagsTagValues", {
        "id": args.id,
        "parent": args.parent,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getTagsTagValues.
 */
export interface GetTagsTagValuesArgs {
    id?: string;
    parent: string;
}

/**
 * A collection of values returned by getTagsTagValues.
 */
export interface GetTagsTagValuesResult {
    readonly id: string;
    readonly parent: string;
    readonly values: outputs.GetTagsTagValuesValue[];
}
export function getTagsTagValuesOutput(args: GetTagsTagValuesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTagsTagValuesResult> {
    return pulumi.output(args).apply((a: any) => getTagsTagValues(a, opts))
}

/**
 * A collection of arguments for invoking getTagsTagValues.
 */
export interface GetTagsTagValuesOutputArgs {
    id?: pulumi.Input<string>;
    parent: pulumi.Input<string>;
}
