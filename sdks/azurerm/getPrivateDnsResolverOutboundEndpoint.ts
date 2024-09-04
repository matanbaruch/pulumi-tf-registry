// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getPrivateDnsResolverOutboundEndpoint(args: GetPrivateDnsResolverOutboundEndpointArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateDnsResolverOutboundEndpointResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azurerm:index/getPrivateDnsResolverOutboundEndpoint:getPrivateDnsResolverOutboundEndpoint", {
        "id": args.id,
        "name": args.name,
        "privateDnsResolverId": args.privateDnsResolverId,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getPrivateDnsResolverOutboundEndpoint.
 */
export interface GetPrivateDnsResolverOutboundEndpointArgs {
    id?: string;
    name: string;
    privateDnsResolverId: string;
    timeouts?: inputs.GetPrivateDnsResolverOutboundEndpointTimeouts;
}

/**
 * A collection of values returned by getPrivateDnsResolverOutboundEndpoint.
 */
export interface GetPrivateDnsResolverOutboundEndpointResult {
    readonly id: string;
    readonly location: string;
    readonly name: string;
    readonly privateDnsResolverId: string;
    readonly subnetId: string;
    readonly tags: {[key: string]: string};
    readonly timeouts?: outputs.GetPrivateDnsResolverOutboundEndpointTimeouts;
}
export function getPrivateDnsResolverOutboundEndpointOutput(args: GetPrivateDnsResolverOutboundEndpointOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPrivateDnsResolverOutboundEndpointResult> {
    return pulumi.output(args).apply((a: any) => getPrivateDnsResolverOutboundEndpoint(a, opts))
}

/**
 * A collection of arguments for invoking getPrivateDnsResolverOutboundEndpoint.
 */
export interface GetPrivateDnsResolverOutboundEndpointOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    privateDnsResolverId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetPrivateDnsResolverOutboundEndpointTimeoutsArgs>;
}
