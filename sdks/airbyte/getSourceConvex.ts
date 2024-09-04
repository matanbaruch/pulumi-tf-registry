// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSourceConvex(args: GetSourceConvexArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceConvexResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceConvex:getSourceConvex", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceConvex.
 */
export interface GetSourceConvexArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceConvex.
 */
export interface GetSourceConvexResult {
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
export function getSourceConvexOutput(args: GetSourceConvexOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSourceConvexResult> {
    return pulumi.output(args).apply((a: any) => getSourceConvex(a, opts))
}

/**
 * A collection of arguments for invoking getSourceConvex.
 */
export interface GetSourceConvexOutputArgs {
    sourceId: pulumi.Input<string>;
}
