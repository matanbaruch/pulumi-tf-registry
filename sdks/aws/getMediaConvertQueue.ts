// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getMediaConvertQueue(args: GetMediaConvertQueueArgs, opts?: pulumi.InvokeOptions): Promise<GetMediaConvertQueueResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getMediaConvertQueue:getMediaConvertQueue", {
        "id": args.id,
        "tags": args.tags,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMediaConvertQueue.
 */
export interface GetMediaConvertQueueArgs {
    id: string;
    tags?: {[key: string]: string};
}

/**
 * A collection of values returned by getMediaConvertQueue.
 */
export interface GetMediaConvertQueueResult {
    readonly arn: string;
    readonly id: string;
    readonly name: string;
    readonly status: string;
    readonly tags: {[key: string]: string};
}
export function getMediaConvertQueueOutput(args: GetMediaConvertQueueOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMediaConvertQueueResult> {
    return pulumi.output(args).apply((a: any) => getMediaConvertQueue(a, opts))
}

/**
 * A collection of arguments for invoking getMediaConvertQueue.
 */
export interface GetMediaConvertQueueOutputArgs {
    id: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
