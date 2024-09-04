// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getGatewayInterface(args: GetGatewayInterfaceArgs, opts?: pulumi.InvokeOptions): Promise<GetGatewayInterfaceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("netskopebwan:index/getGatewayInterface:getGatewayInterface", {
        "8021xMab": args.8021xMab,
        "addresses": args.addresses,
        "allowedVlans": args.allowedVlans,
        "bridgeMembers": args.bridgeMembers,
        "dhcpRelayServerSetting": args.dhcpRelayServerSetting,
        "dhcpServerSetting": args.dhcpServerSetting,
        "doAdvertise": args.doAdvertise,
        "enableNat": args.enableNat,
        "gatewayId": args.gatewayId,
        "id": args.id,
        "isDisabled": args.isDisabled,
        "lteProps": args.lteProps,
        "macAddr": args.macAddr,
        "mode": args.mode,
        "mtu": args.mtu,
        "mtuDiscovery": args.mtuDiscovery,
        "name": args.name,
        "overlaySetting": args.overlaySetting,
        "proxyArpSettings": args.proxyArpSettings,
        "radii": args.radii,
        "type": args.type,
        "vlan": args.vlan,
        "vrrp": args.vrrp,
        "wifiProps": args.wifiProps,
        "zone": args.zone,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getGatewayInterface.
 */
export interface GetGatewayInterfaceArgs {
    8021xMab?: boolean;
    addresses?: inputs.GetGatewayInterfaceAddress[];
    allowedVlans?: number[];
    bridgeMembers?: string[];
    dhcpRelayServerSetting?: inputs.GetGatewayInterfaceDhcpRelayServerSetting;
    dhcpServerSetting?: inputs.GetGatewayInterfaceDhcpServerSetting;
    doAdvertise?: boolean;
    enableNat?: boolean;
    gatewayId: string;
    id?: string;
    isDisabled?: boolean;
    lteProps?: inputs.GetGatewayInterfaceLteProps;
    macAddr?: string;
    mode?: string;
    mtu?: number;
    mtuDiscovery?: string;
    name: string;
    overlaySetting?: inputs.GetGatewayInterfaceOverlaySetting;
    proxyArpSettings?: inputs.GetGatewayInterfaceProxyArpSetting[];
    radii?: inputs.GetGatewayInterfaceRadius[];
    type?: string;
    vlan?: number;
    vrrp?: inputs.GetGatewayInterfaceVrrp;
    wifiProps?: inputs.GetGatewayInterfaceWifiProps;
    zone?: string;
}

/**
 * A collection of values returned by getGatewayInterface.
 */
export interface GetGatewayInterfaceResult {
    readonly 8021xMab: boolean;
    readonly addresses?: outputs.GetGatewayInterfaceAddress[];
    readonly allowedVlans: number[];
    readonly bridgeMembers: string[];
    readonly dhcpRelayServerSetting?: outputs.GetGatewayInterfaceDhcpRelayServerSetting;
    readonly dhcpServerSetting?: outputs.GetGatewayInterfaceDhcpServerSetting;
    readonly doAdvertise: boolean;
    readonly enableNat: boolean;
    readonly gatewayId: string;
    readonly id: string;
    readonly isDisabled: boolean;
    readonly lteProps?: outputs.GetGatewayInterfaceLteProps;
    readonly macAddr: string;
    readonly mode: string;
    readonly mtu: number;
    readonly mtuDiscovery: string;
    readonly name: string;
    readonly overlaySetting?: outputs.GetGatewayInterfaceOverlaySetting;
    readonly proxyArpSettings?: outputs.GetGatewayInterfaceProxyArpSetting[];
    readonly radii?: outputs.GetGatewayInterfaceRadius[];
    readonly type: string;
    readonly vlan: number;
    readonly vrrp?: outputs.GetGatewayInterfaceVrrp;
    readonly wifiProps?: outputs.GetGatewayInterfaceWifiProps;
    readonly zone: string;
}
export function getGatewayInterfaceOutput(args: GetGatewayInterfaceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGatewayInterfaceResult> {
    return pulumi.output(args).apply((a: any) => getGatewayInterface(a, opts))
}

/**
 * A collection of arguments for invoking getGatewayInterface.
 */
export interface GetGatewayInterfaceOutputArgs {
    8021xMab?: pulumi.Input<boolean>;
    addresses?: pulumi.Input<pulumi.Input<inputs.GetGatewayInterfaceAddressArgs>[]>;
    allowedVlans?: pulumi.Input<pulumi.Input<number>[]>;
    bridgeMembers?: pulumi.Input<pulumi.Input<string>[]>;
    dhcpRelayServerSetting?: pulumi.Input<inputs.GetGatewayInterfaceDhcpRelayServerSettingArgs>;
    dhcpServerSetting?: pulumi.Input<inputs.GetGatewayInterfaceDhcpServerSettingArgs>;
    doAdvertise?: pulumi.Input<boolean>;
    enableNat?: pulumi.Input<boolean>;
    gatewayId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    isDisabled?: pulumi.Input<boolean>;
    lteProps?: pulumi.Input<inputs.GetGatewayInterfaceLtePropsArgs>;
    macAddr?: pulumi.Input<string>;
    mode?: pulumi.Input<string>;
    mtu?: pulumi.Input<number>;
    mtuDiscovery?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    overlaySetting?: pulumi.Input<inputs.GetGatewayInterfaceOverlaySettingArgs>;
    proxyArpSettings?: pulumi.Input<pulumi.Input<inputs.GetGatewayInterfaceProxyArpSettingArgs>[]>;
    radii?: pulumi.Input<pulumi.Input<inputs.GetGatewayInterfaceRadiusArgs>[]>;
    type?: pulumi.Input<string>;
    vlan?: pulumi.Input<number>;
    vrrp?: pulumi.Input<inputs.GetGatewayInterfaceVrrpArgs>;
    wifiProps?: pulumi.Input<inputs.GetGatewayInterfaceWifiPropsArgs>;
    zone?: pulumi.Input<string>;
}
