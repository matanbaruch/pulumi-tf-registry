// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getLocationTracker(args: GetLocationTrackerArgs, opts?: pulumi.InvokeOptions): Promise<GetLocationTrackerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getLocationTracker:getLocationTracker", {
        "id": args.id,
        "tags": args.tags,
        "trackerName": args.trackerName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLocationTracker.
 */
export interface GetLocationTrackerArgs {
    id?: string;
    tags?: {[key: string]: string};
    trackerName: string;
}

/**
 * A collection of values returned by getLocationTracker.
 */
export interface GetLocationTrackerResult {
    readonly createTime: string;
    readonly description: string;
    readonly id: string;
    readonly kmsKeyId: string;
    readonly positionFiltering: string;
    readonly tags: {[key: string]: string};
    readonly trackerArn: string;
    readonly trackerName: string;
    readonly updateTime: string;
}
export function getLocationTrackerOutput(args: GetLocationTrackerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLocationTrackerResult> {
    return pulumi.output(args).apply((a: any) => getLocationTracker(a, opts))
}

/**
 * A collection of arguments for invoking getLocationTracker.
 */
export interface GetLocationTrackerOutputArgs {
    id?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    trackerName: pulumi.Input<string>;
}
