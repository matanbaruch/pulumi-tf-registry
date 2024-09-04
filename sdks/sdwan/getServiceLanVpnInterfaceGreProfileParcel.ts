// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getServiceLanVpnInterfaceGreProfileParcel(args: GetServiceLanVpnInterfaceGreProfileParcelArgs, opts?: pulumi.InvokeOptions): Promise<GetServiceLanVpnInterfaceGreProfileParcelResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("sdwan:index/getServiceLanVpnInterfaceGreProfileParcel:getServiceLanVpnInterfaceGreProfileParcel", {
        "featureProfileId": args.featureProfileId,
        "id": args.id,
        "serviceLanVpnProfileParcelId": args.serviceLanVpnProfileParcelId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getServiceLanVpnInterfaceGreProfileParcel.
 */
export interface GetServiceLanVpnInterfaceGreProfileParcelArgs {
    featureProfileId: string;
    id: string;
    serviceLanVpnProfileParcelId: string;
}

/**
 * A collection of values returned by getServiceLanVpnInterfaceGreProfileParcel.
 */
export interface GetServiceLanVpnInterfaceGreProfileParcelResult {
    readonly applicationTunnelType: string;
    readonly applicationTunnelTypeVariable: string;
    readonly clearDontFragment: boolean;
    readonly clearDontFragmentVariable: string;
    readonly description: string;
    readonly featureProfileId: string;
    readonly id: string;
    readonly interfaceDescription: string;
    readonly interfaceDescriptionVariable: string;
    readonly interfaceName: string;
    readonly interfaceNameVariable: string;
    readonly ipMtu: number;
    readonly ipMtuVariable: string;
    readonly ipv4Address: string;
    readonly ipv4AddressVariable: string;
    readonly ipv4SubnetMask: string;
    readonly ipv4SubnetMaskVariable: string;
    readonly name: string;
    readonly serviceLanVpnProfileParcelId: string;
    readonly shutdown: boolean;
    readonly shutdownVariable: string;
    readonly tcpMss: number;
    readonly tcpMssVariable: string;
    readonly tunnelDestinationIpv4Address: string;
    readonly tunnelDestinationIpv4AddressVariable: string;
    readonly tunnelRouteViaLoopback: string;
    readonly tunnelRouteViaLoopbackVariable: string;
    readonly tunnelSourceInterface: string;
    readonly tunnelSourceInterfaceLoopback: string;
    readonly tunnelSourceInterfaceLoopbackVariable: string;
    readonly tunnelSourceInterfaceVariable: string;
    readonly tunnelSourceIpv4Address: string;
    readonly tunnelSourceIpv4AddressVariable: string;
    readonly version: number;
}
export function getServiceLanVpnInterfaceGreProfileParcelOutput(args: GetServiceLanVpnInterfaceGreProfileParcelOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServiceLanVpnInterfaceGreProfileParcelResult> {
    return pulumi.output(args).apply((a: any) => getServiceLanVpnInterfaceGreProfileParcel(a, opts))
}

/**
 * A collection of arguments for invoking getServiceLanVpnInterfaceGreProfileParcel.
 */
export interface GetServiceLanVpnInterfaceGreProfileParcelOutputArgs {
    featureProfileId: pulumi.Input<string>;
    id: pulumi.Input<string>;
    serviceLanVpnProfileParcelId: pulumi.Input<string>;
}
