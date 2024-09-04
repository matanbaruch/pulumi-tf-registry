// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getTagsTagKey(args: GetTagsTagKeyArgs, opts?: pulumi.InvokeOptions): Promise<GetTagsTagKeyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google-beta:index/getTagsTagKey:getTagsTagKey", {
        "parent": args.parent,
        "shortName": args.shortName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getTagsTagKey.
 */
export interface GetTagsTagKeyArgs {
    parent: string;
    shortName: string;
}

/**
 * A collection of values returned by getTagsTagKey.
 */
export interface GetTagsTagKeyResult {
    readonly createTime: string;
    readonly description: string;
    readonly id: string;
    readonly name: string;
    readonly namespacedName: string;
    readonly parent: string;
    readonly shortName: string;
    readonly updateTime: string;
}
export function getTagsTagKeyOutput(args: GetTagsTagKeyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTagsTagKeyResult> {
    return pulumi.output(args).apply((a: any) => getTagsTagKey(a, opts))
}

/**
 * A collection of arguments for invoking getTagsTagKey.
 */
export interface GetTagsTagKeyOutputArgs {
    parent: pulumi.Input<string>;
    shortName: pulumi.Input<string>;
}
