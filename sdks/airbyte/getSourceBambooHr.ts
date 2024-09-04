// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSourceBambooHr(args: GetSourceBambooHrArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceBambooHrResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceBambooHr:getSourceBambooHr", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceBambooHr.
 */
export interface GetSourceBambooHrArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceBambooHr.
 */
export interface GetSourceBambooHrResult {
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
export function getSourceBambooHrOutput(args: GetSourceBambooHrOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSourceBambooHrResult> {
    return pulumi.output(args).apply((a: any) => getSourceBambooHr(a, opts))
}

/**
 * A collection of arguments for invoking getSourceBambooHr.
 */
export interface GetSourceBambooHrOutputArgs {
    sourceId: pulumi.Input<string>;
}
