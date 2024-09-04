// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getOdaOdaPrivateEndpoint(args: GetOdaOdaPrivateEndpointArgs, opts?: pulumi.InvokeOptions): Promise<GetOdaOdaPrivateEndpointResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getOdaOdaPrivateEndpoint:getOdaOdaPrivateEndpoint", {
        "odaPrivateEndpointId": args.odaPrivateEndpointId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getOdaOdaPrivateEndpoint.
 */
export interface GetOdaOdaPrivateEndpointArgs {
    odaPrivateEndpointId: string;
}

/**
 * A collection of values returned by getOdaOdaPrivateEndpoint.
 */
export interface GetOdaOdaPrivateEndpointResult {
    readonly compartmentId: string;
    readonly definedTags: {[key: string]: string};
    readonly description: string;
    readonly displayName: string;
    readonly freeformTags: {[key: string]: string};
    readonly id: string;
    readonly nsgIds: string[];
    readonly odaPrivateEndpointId: string;
    readonly state: string;
    readonly subnetId: string;
    readonly timeCreated: string;
    readonly timeUpdated: string;
}
export function getOdaOdaPrivateEndpointOutput(args: GetOdaOdaPrivateEndpointOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOdaOdaPrivateEndpointResult> {
    return pulumi.output(args).apply((a: any) => getOdaOdaPrivateEndpoint(a, opts))
}

/**
 * A collection of arguments for invoking getOdaOdaPrivateEndpoint.
 */
export interface GetOdaOdaPrivateEndpointOutputArgs {
    odaPrivateEndpointId: pulumi.Input<string>;
}
