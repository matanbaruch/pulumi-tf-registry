// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDefaultTags(args?: GetDefaultTagsArgs, opts?: pulumi.InvokeOptions): Promise<GetDefaultTagsResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getDefaultTags:getDefaultTags", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDefaultTags.
 */
export interface GetDefaultTagsArgs {
    id?: string;
}

/**
 * A collection of values returned by getDefaultTags.
 */
export interface GetDefaultTagsResult {
    readonly id: string;
    readonly tags: {[key: string]: string};
}
export function getDefaultTagsOutput(args?: GetDefaultTagsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDefaultTagsResult> {
    return pulumi.output(args).apply((a: any) => getDefaultTags(a, opts))
}

/**
 * A collection of arguments for invoking getDefaultTags.
 */
export interface GetDefaultTagsOutputArgs {
    id?: pulumi.Input<string>;
}
