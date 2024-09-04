// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getResourcetier(args?: GetResourcetierArgs, opts?: pulumi.InvokeOptions): Promise<GetResourcetierResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("ecloud:index/getResourcetier:getResourcetier", {
        "availabilityZoneId": args.availabilityZoneId,
        "id": args.id,
        "name": args.name,
        "resourceTierId": args.resourceTierId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getResourcetier.
 */
export interface GetResourcetierArgs {
    availabilityZoneId?: string;
    id?: string;
    name?: string;
    resourceTierId?: string;
}

/**
 * A collection of values returned by getResourcetier.
 */
export interface GetResourcetierResult {
    readonly availabilityZoneId?: string;
    readonly id: string;
    readonly name?: string;
    readonly resourceTierId?: string;
}
export function getResourcetierOutput(args?: GetResourcetierOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetResourcetierResult> {
    return pulumi.output(args).apply((a: any) => getResourcetier(a, opts))
}

/**
 * A collection of arguments for invoking getResourcetier.
 */
export interface GetResourcetierOutputArgs {
    availabilityZoneId?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    resourceTierId?: pulumi.Input<string>;
}
