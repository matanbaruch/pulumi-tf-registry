// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getFeed(args?: GetFeedArgs, opts?: pulumi.InvokeOptions): Promise<GetFeedResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azuredevops:index/getFeed:getFeed", {
        "feedId": args.feedId,
        "id": args.id,
        "name": args.name,
        "projectId": args.projectId,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFeed.
 */
export interface GetFeedArgs {
    feedId?: string;
    id?: string;
    name?: string;
    projectId?: string;
    timeouts?: inputs.GetFeedTimeouts;
}

/**
 * A collection of values returned by getFeed.
 */
export interface GetFeedResult {
    readonly feedId?: string;
    readonly id: string;
    readonly name?: string;
    readonly projectId?: string;
    readonly timeouts?: outputs.GetFeedTimeouts;
}
export function getFeedOutput(args?: GetFeedOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFeedResult> {
    return pulumi.output(args).apply((a: any) => getFeed(a, opts))
}

/**
 * A collection of arguments for invoking getFeed.
 */
export interface GetFeedOutputArgs {
    feedId?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    projectId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetFeedTimeoutsArgs>;
}
