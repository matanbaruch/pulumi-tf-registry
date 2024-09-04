// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDestinationPubsub(args: GetDestinationPubsubArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationPubsubResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getDestinationPubsub:getDestinationPubsub", {
        "destinationId": args.destinationId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDestinationPubsub.
 */
export interface GetDestinationPubsubArgs {
    destinationId: string;
}

/**
 * A collection of values returned by getDestinationPubsub.
 */
export interface GetDestinationPubsubResult {
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
export function getDestinationPubsubOutput(args: GetDestinationPubsubOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDestinationPubsubResult> {
    return pulumi.output(args).apply((a: any) => getDestinationPubsub(a, opts))
}

/**
 * A collection of arguments for invoking getDestinationPubsub.
 */
export interface GetDestinationPubsubOutputArgs {
    destinationId: pulumi.Input<string>;
}
