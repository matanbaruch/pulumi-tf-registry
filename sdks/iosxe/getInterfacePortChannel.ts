// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getInterfacePortChannel(args: GetInterfacePortChannelArgs, opts?: pulumi.InvokeOptions): Promise<GetInterfacePortChannelResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("iosxe:index/getInterfacePortChannel:getInterfacePortChannel", {
        "device": args.device,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getInterfacePortChannel.
 */
export interface GetInterfacePortChannelArgs {
    device?: string;
    name: number;
}

/**
 * A collection of values returned by getInterfacePortChannel.
 */
export interface GetInterfacePortChannelResult {
    readonly arpTimeout: number;
    readonly autoQosClassify: boolean;
    readonly autoQosClassifyPolice: boolean;
    readonly autoQosTrust: boolean;
    readonly autoQosTrustCos: boolean;
    readonly autoQosTrustDscp: boolean;
    readonly autoQosVideoCts: boolean;
    readonly autoQosVideoIpCamera: boolean;
    readonly autoQosVideoMediaPlayer: boolean;
    readonly autoQosVoip: boolean;
    readonly autoQosVoipCiscoPhone: boolean;
    readonly autoQosVoipCiscoSoftphone: boolean;
    readonly autoQosVoipTrust: boolean;
    readonly bfdEcho: boolean;
    readonly bfdEnable: boolean;
    readonly bfdInterval: number;
    readonly bfdIntervalMinRx: number;
    readonly bfdIntervalMultiplier: number;
    readonly bfdLocalAddress: string;
    readonly bfdTemplate: string;
    readonly description: string;
    readonly device?: string;
    readonly helperAddresses: outputs.GetInterfacePortChannelHelperAddress[];
    readonly id: string;
    readonly ipAccessGroupIn: string;
    readonly ipAccessGroupInEnable: boolean;
    readonly ipAccessGroupOut: string;
    readonly ipAccessGroupOutEnable: boolean;
    readonly ipArpInspectionLimitRate: number;
    readonly ipArpInspectionTrust: boolean;
    readonly ipDhcpRelaySourceInterface: string;
    readonly ipDhcpSnoopingTrust: boolean;
    readonly ipProxyArp: boolean;
    readonly ipRedirects: boolean;
    readonly ipUnreachables: boolean;
    readonly ipv4Address: string;
    readonly ipv4AddressMask: string;
    readonly ipv6AddressAutoconfigDefault: boolean;
    readonly ipv6AddressDhcp: boolean;
    readonly ipv6Addresses: outputs.GetInterfacePortChannelIpv6Address[];
    readonly ipv6Enable: boolean;
    readonly ipv6LinkLocalAddresses: outputs.GetInterfacePortChannelIpv6LinkLocalAddress[];
    readonly ipv6Mtu: number;
    readonly ipv6NdRaSuppressAll: boolean;
    readonly loadInterval: number;
    readonly loggingEventLinkStatusEnable: boolean;
    readonly name: number;
    readonly shutdown: boolean;
    readonly snmpTrapLinkStatus: boolean;
    readonly spanningTreeGuard: string;
    readonly spanningTreeLinkType: string;
    readonly switchport: boolean;
    readonly trustDevice: string;
    readonly vrfForwarding: string;
}
export function getInterfacePortChannelOutput(args: GetInterfacePortChannelOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetInterfacePortChannelResult> {
    return pulumi.output(args).apply((a: any) => getInterfacePortChannel(a, opts))
}

/**
 * A collection of arguments for invoking getInterfacePortChannel.
 */
export interface GetInterfacePortChannelOutputArgs {
    device?: pulumi.Input<string>;
    name: pulumi.Input<number>;
}
