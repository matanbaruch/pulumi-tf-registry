// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getRelease(args: GetReleaseArgs, opts?: pulumi.InvokeOptions): Promise<GetReleaseResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("gitlab:index/getRelease:getRelease", {
        "assets": args.assets,
        "projectId": args.projectId,
        "tagName": args.tagName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRelease.
 */
export interface GetReleaseArgs {
    assets?: inputs.GetReleaseAssets;
    projectId: string;
    tagName: string;
}

/**
 * A collection of values returned by getRelease.
 */
export interface GetReleaseResult {
    readonly assets?: outputs.GetReleaseAssets;
    readonly createdAt: string;
    readonly description: string;
    readonly id: string;
    readonly name: string;
    readonly projectId: string;
    readonly releasedAt: string;
    readonly tagName: string;
}
export function getReleaseOutput(args: GetReleaseOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetReleaseResult> {
    return pulumi.output(args).apply((a: any) => getRelease(a, opts))
}

/**
 * A collection of arguments for invoking getRelease.
 */
export interface GetReleaseOutputArgs {
    assets?: pulumi.Input<inputs.GetReleaseAssetsArgs>;
    projectId: pulumi.Input<string>;
    tagName: pulumi.Input<string>;
}
