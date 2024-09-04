// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDatacenterCtBgpPeeringIpEndpoint(args?: GetDatacenterCtBgpPeeringIpEndpointArgs, opts?: pulumi.InvokeOptions): Promise<GetDatacenterCtBgpPeeringIpEndpointResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("apstra:index/getDatacenterCtBgpPeeringIpEndpoint:getDatacenterCtBgpPeeringIpEndpoint", {
        "bfdEnabled": args.bfdEnabled,
        "childPrimitives": args.childPrimitives,
        "holdTime": args.holdTime,
        "ipv4Address": args.ipv4Address,
        "ipv6Address": args.ipv6Address,
        "keepaliveTime": args.keepaliveTime,
        "localAsn": args.localAsn,
        "name": args.name,
        "neighborAsn": args.neighborAsn,
        "password": args.password,
        "ttl": args.ttl,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatacenterCtBgpPeeringIpEndpoint.
 */
export interface GetDatacenterCtBgpPeeringIpEndpointArgs {
    bfdEnabled?: boolean;
    childPrimitives?: string[];
    holdTime?: number;
    ipv4Address?: string;
    ipv6Address?: string;
    keepaliveTime?: number;
    localAsn?: number;
    name?: string;
    neighborAsn?: number;
    password?: string;
    ttl?: number;
}

/**
 * A collection of values returned by getDatacenterCtBgpPeeringIpEndpoint.
 */
export interface GetDatacenterCtBgpPeeringIpEndpointResult {
    readonly bfdEnabled?: boolean;
    readonly childPrimitives?: string[];
    readonly holdTime?: number;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly ipv4Address?: string;
    readonly ipv6Address?: string;
    readonly keepaliveTime?: number;
    readonly localAsn?: number;
    readonly name?: string;
    readonly neighborAsn?: number;
    readonly password?: string;
    readonly primitive: string;
    readonly ttl?: number;
}
export function getDatacenterCtBgpPeeringIpEndpointOutput(args?: GetDatacenterCtBgpPeeringIpEndpointOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatacenterCtBgpPeeringIpEndpointResult> {
    return pulumi.output(args).apply((a: any) => getDatacenterCtBgpPeeringIpEndpoint(a, opts))
}

/**
 * A collection of arguments for invoking getDatacenterCtBgpPeeringIpEndpoint.
 */
export interface GetDatacenterCtBgpPeeringIpEndpointOutputArgs {
    bfdEnabled?: pulumi.Input<boolean>;
    childPrimitives?: pulumi.Input<pulumi.Input<string>[]>;
    holdTime?: pulumi.Input<number>;
    ipv4Address?: pulumi.Input<string>;
    ipv6Address?: pulumi.Input<string>;
    keepaliveTime?: pulumi.Input<number>;
    localAsn?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    neighborAsn?: pulumi.Input<number>;
    password?: pulumi.Input<string>;
    ttl?: pulumi.Input<number>;
}
