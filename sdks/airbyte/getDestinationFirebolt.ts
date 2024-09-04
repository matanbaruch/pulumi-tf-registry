// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDestinationFirebolt(args: GetDestinationFireboltArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationFireboltResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getDestinationFirebolt:getDestinationFirebolt", {
        "destinationId": args.destinationId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDestinationFirebolt.
 */
export interface GetDestinationFireboltArgs {
    destinationId: string;
}

/**
 * A collection of values returned by getDestinationFirebolt.
 */
export interface GetDestinationFireboltResult {
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
export function getDestinationFireboltOutput(args: GetDestinationFireboltOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDestinationFireboltResult> {
    return pulumi.output(args).apply((a: any) => getDestinationFirebolt(a, opts))
}

/**
 * A collection of arguments for invoking getDestinationFirebolt.
 */
export interface GetDestinationFireboltOutputArgs {
    destinationId: pulumi.Input<string>;
}
