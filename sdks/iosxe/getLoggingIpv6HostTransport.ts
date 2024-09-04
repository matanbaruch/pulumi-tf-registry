// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getLoggingIpv6HostTransport(args: GetLoggingIpv6HostTransportArgs, opts?: pulumi.InvokeOptions): Promise<GetLoggingIpv6HostTransportResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("iosxe:index/getLoggingIpv6HostTransport:getLoggingIpv6HostTransport", {
        "device": args.device,
        "ipv6Host": args.ipv6Host,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLoggingIpv6HostTransport.
 */
export interface GetLoggingIpv6HostTransportArgs {
    device?: string;
    ipv6Host: string;
}

/**
 * A collection of values returned by getLoggingIpv6HostTransport.
 */
export interface GetLoggingIpv6HostTransportResult {
    readonly device?: string;
    readonly id: string;
    readonly ipv6Host: string;
    readonly transportTcpPorts: outputs.GetLoggingIpv6HostTransportTransportTcpPort[];
    readonly transportTlsPorts: outputs.GetLoggingIpv6HostTransportTransportTlsPort[];
    readonly transportUdpPorts: outputs.GetLoggingIpv6HostTransportTransportUdpPort[];
}
export function getLoggingIpv6HostTransportOutput(args: GetLoggingIpv6HostTransportOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLoggingIpv6HostTransportResult> {
    return pulumi.output(args).apply((a: any) => getLoggingIpv6HostTransport(a, opts))
}

/**
 * A collection of arguments for invoking getLoggingIpv6HostTransport.
 */
export interface GetLoggingIpv6HostTransportOutputArgs {
    device?: pulumi.Input<string>;
    ipv6Host: pulumi.Input<string>;
}
