// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDataflowPrivateEndpoint(args: GetDataflowPrivateEndpointArgs, opts?: pulumi.InvokeOptions): Promise<GetDataflowPrivateEndpointResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDataflowPrivateEndpoint:getDataflowPrivateEndpoint", {
        "privateEndpointId": args.privateEndpointId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDataflowPrivateEndpoint.
 */
export interface GetDataflowPrivateEndpointArgs {
    privateEndpointId: string;
}

/**
 * A collection of values returned by getDataflowPrivateEndpoint.
 */
export interface GetDataflowPrivateEndpointResult {
    readonly compartmentId: string;
    readonly definedTags: {[key: string]: string};
    readonly description: string;
    readonly displayName: string;
    readonly dnsZones: string[];
    readonly freeformTags: {[key: string]: string};
    readonly id: string;
    readonly lifecycleDetails: string;
    readonly maxHostCount: number;
    readonly nsgIds: string[];
    readonly ownerPrincipalId: string;
    readonly ownerUserName: string;
    readonly privateEndpointId: string;
    readonly scanDetails: outputs.GetDataflowPrivateEndpointScanDetail[];
    readonly state: string;
    readonly subnetId: string;
    readonly timeCreated: string;
    readonly timeUpdated: string;
}
export function getDataflowPrivateEndpointOutput(args: GetDataflowPrivateEndpointOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDataflowPrivateEndpointResult> {
    return pulumi.output(args).apply((a: any) => getDataflowPrivateEndpoint(a, opts))
}

/**
 * A collection of arguments for invoking getDataflowPrivateEndpoint.
 */
export interface GetDataflowPrivateEndpointOutputArgs {
    privateEndpointId: pulumi.Input<string>;
}
