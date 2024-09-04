// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDestinationVectara(args: GetDestinationVectaraArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationVectaraResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getDestinationVectara:getDestinationVectara", {
        "destinationId": args.destinationId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDestinationVectara.
 */
export interface GetDestinationVectaraArgs {
    destinationId: string;
}

/**
 * A collection of values returned by getDestinationVectara.
 */
export interface GetDestinationVectaraResult {
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
export function getDestinationVectaraOutput(args: GetDestinationVectaraOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDestinationVectaraResult> {
    return pulumi.output(args).apply((a: any) => getDestinationVectara(a, opts))
}

/**
 * A collection of arguments for invoking getDestinationVectara.
 */
export interface GetDestinationVectaraOutputArgs {
    destinationId: pulumi.Input<string>;
}
