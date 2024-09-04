// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDestinationPinecone(args: GetDestinationPineconeArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationPineconeResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getDestinationPinecone:getDestinationPinecone", {
        "destinationId": args.destinationId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDestinationPinecone.
 */
export interface GetDestinationPineconeArgs {
    destinationId: string;
}

/**
 * A collection of values returned by getDestinationPinecone.
 */
export interface GetDestinationPineconeResult {
    readonly configuration: string;
    readonly destinationId: string;
    readonly destinationType: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly workspaceId: string;
}
export function getDestinationPineconeOutput(args: GetDestinationPineconeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDestinationPineconeResult> {
    return pulumi.output(args).apply((a: any) => getDestinationPinecone(a, opts))
}

/**
 * A collection of arguments for invoking getDestinationPinecone.
 */
export interface GetDestinationPineconeOutputArgs {
    destinationId: pulumi.Input<string>;
}
