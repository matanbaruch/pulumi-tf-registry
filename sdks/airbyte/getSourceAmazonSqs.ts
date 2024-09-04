// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSourceAmazonSqs(args: GetSourceAmazonSqsArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceAmazonSqsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getSourceAmazonSqs:getSourceAmazonSqs", {
        "sourceId": args.sourceId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSourceAmazonSqs.
 */
export interface GetSourceAmazonSqsArgs {
    sourceId: string;
}

/**
 * A collection of values returned by getSourceAmazonSqs.
 */
export interface GetSourceAmazonSqsResult {
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
export function getSourceAmazonSqsOutput(args: GetSourceAmazonSqsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSourceAmazonSqsResult> {
    return pulumi.output(args).apply((a: any) => getSourceAmazonSqs(a, opts))
}

/**
 * A collection of arguments for invoking getSourceAmazonSqs.
 */
export interface GetSourceAmazonSqsOutputArgs {
    sourceId: pulumi.Input<string>;
}
