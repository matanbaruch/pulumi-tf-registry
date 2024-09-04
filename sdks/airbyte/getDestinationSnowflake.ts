// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDestinationSnowflake(args: GetDestinationSnowflakeArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationSnowflakeResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("airbyte:index/getDestinationSnowflake:getDestinationSnowflake", {
        "destinationId": args.destinationId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDestinationSnowflake.
 */
export interface GetDestinationSnowflakeArgs {
    destinationId: string;
}

/**
 * A collection of values returned by getDestinationSnowflake.
 */
export interface GetDestinationSnowflakeResult {
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
export function getDestinationSnowflakeOutput(args: GetDestinationSnowflakeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDestinationSnowflakeResult> {
    return pulumi.output(args).apply((a: any) => getDestinationSnowflake(a, opts))
}

/**
 * A collection of arguments for invoking getDestinationSnowflake.
 */
export interface GetDestinationSnowflakeOutputArgs {
    destinationId: pulumi.Input<string>;
}
