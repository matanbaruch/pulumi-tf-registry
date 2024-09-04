// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSourceGnews(args: GetSourceGnewsArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceGnewsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceGnews:getSourceGnews", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceGnews.
 */
export interface GetSourceGnewsArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceGnews.
 */
export interface GetSourceGnewsResult {
    readonly configuration: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly sourceId: string;
    readonly sourceType: string;
    readonly workspaceId: string;
}
export function getSourceGnewsOutput(args: GetSourceGnewsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSourceGnewsResult> {
    return pulumi.output(args).apply((a: any) => getSourceGnews(a, opts))
}

/**
 * A collection of arguments for invoking getSourceGnews.
 */
export interface GetSourceGnewsOutputArgs {
    sourceId: pulumi.Input<string>;
}
