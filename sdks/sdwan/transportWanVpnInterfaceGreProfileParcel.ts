// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class TransportWanVpnInterfaceGreProfileParcel extends pulumi.CustomResource {
    /**
     * Get an existing TransportWanVpnInterfaceGreProfileParcel resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TransportWanVpnInterfaceGreProfileParcelState, opts?: pulumi.CustomResourceOptions): TransportWanVpnInterfaceGreProfileParcel {
        return new TransportWanVpnInterfaceGreProfileParcel(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'sdwan:index/transportWanVpnInterfaceGreProfileParcel:TransportWanVpnInterfaceGreProfileParcel';

    /**
     * Returns true if the given object is an instance of TransportWanVpnInterfaceGreProfileParcel.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TransportWanVpnInterfaceGreProfileParcel {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TransportWanVpnInterfaceGreProfileParcel.__pulumiType;
    }

    /**
     * Enable Application Tunnel Type - Choices: `none`, `sig`
     */
    public readonly applicationTunnelType!: pulumi.Output<string | undefined>;
    /**
     * Variable name
     */
    public readonly applicationTunnelTypeVariable!: pulumi.Output<string | undefined>;
    /**
     * Enable clear dont fragment (Currently Only SDWAN Tunnel Interface) - Default value: `false`
     */
    public readonly clearDontFragment!: pulumi.Output<boolean | undefined>;
    /**
     * Variable name
     */
    public readonly clearDontFragmentVariable!: pulumi.Output<string | undefined>;
    /**
     * The description of the profile parcel
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Feature Profile ID
     */
    public readonly featureProfileId!: pulumi.Output<string>;
    /**
     * Interface description
     */
    public readonly interfaceDescription!: pulumi.Output<string | undefined>;
    /**
     * Variable name
     */
    public readonly interfaceDescriptionVariable!: pulumi.Output<string | undefined>;
    /**
     * Interface name (1..255)
     */
    public readonly interfaceName!: pulumi.Output<string>;
    /**
     * Variable name
     */
    public readonly interfaceNameVariable!: pulumi.Output<string | undefined>;
    /**
     * Interface MTU <576..9976>, in bytes - Range: `576`-`9976` - Default value: `1500`
     */
    public readonly ipMtu!: pulumi.Output<number | undefined>;
    /**
     * Variable name
     */
    public readonly ipMtuVariable!: pulumi.Output<string | undefined>;
    public readonly ipv4Address!: pulumi.Output<string>;
    /**
     * Variable name
     */
    public readonly ipv4AddressVariable!: pulumi.Output<string | undefined>;
    /**
     * - Choices: `255.255.255.255`, `255.255.255.254`, `255.255.255.252`, `255.255.255.248`, `255.255.255.240`,
     * `255.255.255.224`, `255.255.255.192`, `255.255.255.128`, `255.255.255.0`, `255.255.254.0`, `255.255.252.0`,
     * `255.255.248.0`, `255.255.240.0`, `255.255.224.0`, `255.255.192.0`, `255.255.128.0`, `255.255.0.0`, `255.254.0.0`,
     * `255.252.0.0`, `255.240.0.0`, `255.224.0.0`, `255.192.0.0`, `255.128.0.0`, `255.0.0.0`, `254.0.0.0`, `252.0.0.0`,
     * `248.0.0.0`, `240.0.0.0`, `224.0.0.0`, `192.0.0.0`, `128.0.0.0`, `0.0.0.0`
     */
    public readonly ipv4SubnetMask!: pulumi.Output<string>;
    /**
     * Variable name
     */
    public readonly ipv4SubnetMaskVariable!: pulumi.Output<string | undefined>;
    /**
     * The name of the profile parcel
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Administrative state - Default value: `false`
     */
    public readonly shutdown!: pulumi.Output<boolean | undefined>;
    /**
     * Variable name
     */
    public readonly shutdownVariable!: pulumi.Output<string | undefined>;
    /**
     * TCP MSS on SYN packets, in bytes - Range: `500`-`1460`
     */
    public readonly tcpMss!: pulumi.Output<number | undefined>;
    /**
     * Variable name
     */
    public readonly tcpMssVariable!: pulumi.Output<string | undefined>;
    /**
     * Transport WAN VPN Profile Parcel ID
     */
    public readonly transportWanVpnProfileParcelId!: pulumi.Output<string | undefined>;
    /**
     * Tunnel destination IP Address
     */
    public readonly tunnelDestinationIpv4Address!: pulumi.Output<string>;
    /**
     * Variable name
     */
    public readonly tunnelDestinationIpv4AddressVariable!: pulumi.Output<string | undefined>;
    /**
     * <1..32 characters> Interface name, can't be Loopback interface
     */
    public readonly tunnelRouteViaLoopback!: pulumi.Output<string | undefined>;
    /**
     * Variable name
     */
    public readonly tunnelRouteViaLoopbackVariable!: pulumi.Output<string | undefined>;
    /**
     * <1..32 characters> Interface name
     */
    public readonly tunnelSourceInterface!: pulumi.Output<string | undefined>;
    /**
     * <1..32 characters> Interface name
     */
    public readonly tunnelSourceInterfaceLoopback!: pulumi.Output<string | undefined>;
    /**
     * Variable name
     */
    public readonly tunnelSourceInterfaceLoopbackVariable!: pulumi.Output<string | undefined>;
    /**
     * Variable name
     */
    public readonly tunnelSourceInterfaceVariable!: pulumi.Output<string | undefined>;
    /**
     * Tunnel source IP Address
     */
    public readonly tunnelSourceIpv4Address!: pulumi.Output<string | undefined>;
    /**
     * Variable name
     */
    public readonly tunnelSourceIpv4AddressVariable!: pulumi.Output<string | undefined>;
    /**
     * The version of the profile parcel
     */
    public /*out*/ readonly version!: pulumi.Output<number>;

    /**
     * Create a TransportWanVpnInterfaceGreProfileParcel resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TransportWanVpnInterfaceGreProfileParcelArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TransportWanVpnInterfaceGreProfileParcelArgs | TransportWanVpnInterfaceGreProfileParcelState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TransportWanVpnInterfaceGreProfileParcelState | undefined;
            resourceInputs["applicationTunnelType"] = state ? state.applicationTunnelType : undefined;
            resourceInputs["applicationTunnelTypeVariable"] = state ? state.applicationTunnelTypeVariable : undefined;
            resourceInputs["clearDontFragment"] = state ? state.clearDontFragment : undefined;
            resourceInputs["clearDontFragmentVariable"] = state ? state.clearDontFragmentVariable : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["featureProfileId"] = state ? state.featureProfileId : undefined;
            resourceInputs["interfaceDescription"] = state ? state.interfaceDescription : undefined;
            resourceInputs["interfaceDescriptionVariable"] = state ? state.interfaceDescriptionVariable : undefined;
            resourceInputs["interfaceName"] = state ? state.interfaceName : undefined;
            resourceInputs["interfaceNameVariable"] = state ? state.interfaceNameVariable : undefined;
            resourceInputs["ipMtu"] = state ? state.ipMtu : undefined;
            resourceInputs["ipMtuVariable"] = state ? state.ipMtuVariable : undefined;
            resourceInputs["ipv4Address"] = state ? state.ipv4Address : undefined;
            resourceInputs["ipv4AddressVariable"] = state ? state.ipv4AddressVariable : undefined;
            resourceInputs["ipv4SubnetMask"] = state ? state.ipv4SubnetMask : undefined;
            resourceInputs["ipv4SubnetMaskVariable"] = state ? state.ipv4SubnetMaskVariable : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["shutdown"] = state ? state.shutdown : undefined;
            resourceInputs["shutdownVariable"] = state ? state.shutdownVariable : undefined;
            resourceInputs["tcpMss"] = state ? state.tcpMss : undefined;
            resourceInputs["tcpMssVariable"] = state ? state.tcpMssVariable : undefined;
            resourceInputs["transportWanVpnProfileParcelId"] = state ? state.transportWanVpnProfileParcelId : undefined;
            resourceInputs["tunnelDestinationIpv4Address"] = state ? state.tunnelDestinationIpv4Address : undefined;
            resourceInputs["tunnelDestinationIpv4AddressVariable"] = state ? state.tunnelDestinationIpv4AddressVariable : undefined;
            resourceInputs["tunnelRouteViaLoopback"] = state ? state.tunnelRouteViaLoopback : undefined;
            resourceInputs["tunnelRouteViaLoopbackVariable"] = state ? state.tunnelRouteViaLoopbackVariable : undefined;
            resourceInputs["tunnelSourceInterface"] = state ? state.tunnelSourceInterface : undefined;
            resourceInputs["tunnelSourceInterfaceLoopback"] = state ? state.tunnelSourceInterfaceLoopback : undefined;
            resourceInputs["tunnelSourceInterfaceLoopbackVariable"] = state ? state.tunnelSourceInterfaceLoopbackVariable : undefined;
            resourceInputs["tunnelSourceInterfaceVariable"] = state ? state.tunnelSourceInterfaceVariable : undefined;
            resourceInputs["tunnelSourceIpv4Address"] = state ? state.tunnelSourceIpv4Address : undefined;
            resourceInputs["tunnelSourceIpv4AddressVariable"] = state ? state.tunnelSourceIpv4AddressVariable : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as TransportWanVpnInterfaceGreProfileParcelArgs | undefined;
            if ((!args || args.featureProfileId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'featureProfileId'");
            }
            if ((!args || args.interfaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'interfaceName'");
            }
            if ((!args || args.ipv4Address === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ipv4Address'");
            }
            if ((!args || args.ipv4SubnetMask === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ipv4SubnetMask'");
            }
            if ((!args || args.tunnelDestinationIpv4Address === undefined) && !opts.urn) {
                throw new Error("Missing required property 'tunnelDestinationIpv4Address'");
            }
            resourceInputs["applicationTunnelType"] = args ? args.applicationTunnelType : undefined;
            resourceInputs["applicationTunnelTypeVariable"] = args ? args.applicationTunnelTypeVariable : undefined;
            resourceInputs["clearDontFragment"] = args ? args.clearDontFragment : undefined;
            resourceInputs["clearDontFragmentVariable"] = args ? args.clearDontFragmentVariable : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["featureProfileId"] = args ? args.featureProfileId : undefined;
            resourceInputs["interfaceDescription"] = args ? args.interfaceDescription : undefined;
            resourceInputs["interfaceDescriptionVariable"] = args ? args.interfaceDescriptionVariable : undefined;
            resourceInputs["interfaceName"] = args ? args.interfaceName : undefined;
            resourceInputs["interfaceNameVariable"] = args ? args.interfaceNameVariable : undefined;
            resourceInputs["ipMtu"] = args ? args.ipMtu : undefined;
            resourceInputs["ipMtuVariable"] = args ? args.ipMtuVariable : undefined;
            resourceInputs["ipv4Address"] = args ? args.ipv4Address : undefined;
            resourceInputs["ipv4AddressVariable"] = args ? args.ipv4AddressVariable : undefined;
            resourceInputs["ipv4SubnetMask"] = args ? args.ipv4SubnetMask : undefined;
            resourceInputs["ipv4SubnetMaskVariable"] = args ? args.ipv4SubnetMaskVariable : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["shutdown"] = args ? args.shutdown : undefined;
            resourceInputs["shutdownVariable"] = args ? args.shutdownVariable : undefined;
            resourceInputs["tcpMss"] = args ? args.tcpMss : undefined;
            resourceInputs["tcpMssVariable"] = args ? args.tcpMssVariable : undefined;
            resourceInputs["transportWanVpnProfileParcelId"] = args ? args.transportWanVpnProfileParcelId : undefined;
            resourceInputs["tunnelDestinationIpv4Address"] = args ? args.tunnelDestinationIpv4Address : undefined;
            resourceInputs["tunnelDestinationIpv4AddressVariable"] = args ? args.tunnelDestinationIpv4AddressVariable : undefined;
            resourceInputs["tunnelRouteViaLoopback"] = args ? args.tunnelRouteViaLoopback : undefined;
            resourceInputs["tunnelRouteViaLoopbackVariable"] = args ? args.tunnelRouteViaLoopbackVariable : undefined;
            resourceInputs["tunnelSourceInterface"] = args ? args.tunnelSourceInterface : undefined;
            resourceInputs["tunnelSourceInterfaceLoopback"] = args ? args.tunnelSourceInterfaceLoopback : undefined;
            resourceInputs["tunnelSourceInterfaceLoopbackVariable"] = args ? args.tunnelSourceInterfaceLoopbackVariable : undefined;
            resourceInputs["tunnelSourceInterfaceVariable"] = args ? args.tunnelSourceInterfaceVariable : undefined;
            resourceInputs["tunnelSourceIpv4Address"] = args ? args.tunnelSourceIpv4Address : undefined;
            resourceInputs["tunnelSourceIpv4AddressVariable"] = args ? args.tunnelSourceIpv4AddressVariable : undefined;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(TransportWanVpnInterfaceGreProfileParcel.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering TransportWanVpnInterfaceGreProfileParcel resources.
 */
export interface TransportWanVpnInterfaceGreProfileParcelState {
    /**
     * Enable Application Tunnel Type - Choices: `none`, `sig`
     */
    applicationTunnelType?: pulumi.Input<string>;
    /**
     * Variable name
     */
    applicationTunnelTypeVariable?: pulumi.Input<string>;
    /**
     * Enable clear dont fragment (Currently Only SDWAN Tunnel Interface) - Default value: `false`
     */
    clearDontFragment?: pulumi.Input<boolean>;
    /**
     * Variable name
     */
    clearDontFragmentVariable?: pulumi.Input<string>;
    /**
     * The description of the profile parcel
     */
    description?: pulumi.Input<string>;
    /**
     * Feature Profile ID
     */
    featureProfileId?: pulumi.Input<string>;
    /**
     * Interface description
     */
    interfaceDescription?: pulumi.Input<string>;
    /**
     * Variable name
     */
    interfaceDescriptionVariable?: pulumi.Input<string>;
    /**
     * Interface name (1..255)
     */
    interfaceName?: pulumi.Input<string>;
    /**
     * Variable name
     */
    interfaceNameVariable?: pulumi.Input<string>;
    /**
     * Interface MTU <576..9976>, in bytes - Range: `576`-`9976` - Default value: `1500`
     */
    ipMtu?: pulumi.Input<number>;
    /**
     * Variable name
     */
    ipMtuVariable?: pulumi.Input<string>;
    ipv4Address?: pulumi.Input<string>;
    /**
     * Variable name
     */
    ipv4AddressVariable?: pulumi.Input<string>;
    /**
     * - Choices: `255.255.255.255`, `255.255.255.254`, `255.255.255.252`, `255.255.255.248`, `255.255.255.240`,
     * `255.255.255.224`, `255.255.255.192`, `255.255.255.128`, `255.255.255.0`, `255.255.254.0`, `255.255.252.0`,
     * `255.255.248.0`, `255.255.240.0`, `255.255.224.0`, `255.255.192.0`, `255.255.128.0`, `255.255.0.0`, `255.254.0.0`,
     * `255.252.0.0`, `255.240.0.0`, `255.224.0.0`, `255.192.0.0`, `255.128.0.0`, `255.0.0.0`, `254.0.0.0`, `252.0.0.0`,
     * `248.0.0.0`, `240.0.0.0`, `224.0.0.0`, `192.0.0.0`, `128.0.0.0`, `0.0.0.0`
     */
    ipv4SubnetMask?: pulumi.Input<string>;
    /**
     * Variable name
     */
    ipv4SubnetMaskVariable?: pulumi.Input<string>;
    /**
     * The name of the profile parcel
     */
    name?: pulumi.Input<string>;
    /**
     * Administrative state - Default value: `false`
     */
    shutdown?: pulumi.Input<boolean>;
    /**
     * Variable name
     */
    shutdownVariable?: pulumi.Input<string>;
    /**
     * TCP MSS on SYN packets, in bytes - Range: `500`-`1460`
     */
    tcpMss?: pulumi.Input<number>;
    /**
     * Variable name
     */
    tcpMssVariable?: pulumi.Input<string>;
    /**
     * Transport WAN VPN Profile Parcel ID
     */
    transportWanVpnProfileParcelId?: pulumi.Input<string>;
    /**
     * Tunnel destination IP Address
     */
    tunnelDestinationIpv4Address?: pulumi.Input<string>;
    /**
     * Variable name
     */
    tunnelDestinationIpv4AddressVariable?: pulumi.Input<string>;
    /**
     * <1..32 characters> Interface name, can't be Loopback interface
     */
    tunnelRouteViaLoopback?: pulumi.Input<string>;
    /**
     * Variable name
     */
    tunnelRouteViaLoopbackVariable?: pulumi.Input<string>;
    /**
     * <1..32 characters> Interface name
     */
    tunnelSourceInterface?: pulumi.Input<string>;
    /**
     * <1..32 characters> Interface name
     */
    tunnelSourceInterfaceLoopback?: pulumi.Input<string>;
    /**
     * Variable name
     */
    tunnelSourceInterfaceLoopbackVariable?: pulumi.Input<string>;
    /**
     * Variable name
     */
    tunnelSourceInterfaceVariable?: pulumi.Input<string>;
    /**
     * Tunnel source IP Address
     */
    tunnelSourceIpv4Address?: pulumi.Input<string>;
    /**
     * Variable name
     */
    tunnelSourceIpv4AddressVariable?: pulumi.Input<string>;
    /**
     * The version of the profile parcel
     */
    version?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a TransportWanVpnInterfaceGreProfileParcel resource.
 */
export interface TransportWanVpnInterfaceGreProfileParcelArgs {
    /**
     * Enable Application Tunnel Type - Choices: `none`, `sig`
     */
    applicationTunnelType?: pulumi.Input<string>;
    /**
     * Variable name
     */
    applicationTunnelTypeVariable?: pulumi.Input<string>;
    /**
     * Enable clear dont fragment (Currently Only SDWAN Tunnel Interface) - Default value: `false`
     */
    clearDontFragment?: pulumi.Input<boolean>;
    /**
     * Variable name
     */
    clearDontFragmentVariable?: pulumi.Input<string>;
    /**
     * The description of the profile parcel
     */
    description?: pulumi.Input<string>;
    /**
     * Feature Profile ID
     */
    featureProfileId: pulumi.Input<string>;
    /**
     * Interface description
     */
    interfaceDescription?: pulumi.Input<string>;
    /**
     * Variable name
     */
    interfaceDescriptionVariable?: pulumi.Input<string>;
    /**
     * Interface name (1..255)
     */
    interfaceName: pulumi.Input<string>;
    /**
     * Variable name
     */
    interfaceNameVariable?: pulumi.Input<string>;
    /**
     * Interface MTU <576..9976>, in bytes - Range: `576`-`9976` - Default value: `1500`
     */
    ipMtu?: pulumi.Input<number>;
    /**
     * Variable name
     */
    ipMtuVariable?: pulumi.Input<string>;
    ipv4Address: pulumi.Input<string>;
    /**
     * Variable name
     */
    ipv4AddressVariable?: pulumi.Input<string>;
    /**
     * - Choices: `255.255.255.255`, `255.255.255.254`, `255.255.255.252`, `255.255.255.248`, `255.255.255.240`,
     * `255.255.255.224`, `255.255.255.192`, `255.255.255.128`, `255.255.255.0`, `255.255.254.0`, `255.255.252.0`,
     * `255.255.248.0`, `255.255.240.0`, `255.255.224.0`, `255.255.192.0`, `255.255.128.0`, `255.255.0.0`, `255.254.0.0`,
     * `255.252.0.0`, `255.240.0.0`, `255.224.0.0`, `255.192.0.0`, `255.128.0.0`, `255.0.0.0`, `254.0.0.0`, `252.0.0.0`,
     * `248.0.0.0`, `240.0.0.0`, `224.0.0.0`, `192.0.0.0`, `128.0.0.0`, `0.0.0.0`
     */
    ipv4SubnetMask: pulumi.Input<string>;
    /**
     * Variable name
     */
    ipv4SubnetMaskVariable?: pulumi.Input<string>;
    /**
     * The name of the profile parcel
     */
    name?: pulumi.Input<string>;
    /**
     * Administrative state - Default value: `false`
     */
    shutdown?: pulumi.Input<boolean>;
    /**
     * Variable name
     */
    shutdownVariable?: pulumi.Input<string>;
    /**
     * TCP MSS on SYN packets, in bytes - Range: `500`-`1460`
     */
    tcpMss?: pulumi.Input<number>;
    /**
     * Variable name
     */
    tcpMssVariable?: pulumi.Input<string>;
    /**
     * Transport WAN VPN Profile Parcel ID
     */
    transportWanVpnProfileParcelId?: pulumi.Input<string>;
    /**
     * Tunnel destination IP Address
     */
    tunnelDestinationIpv4Address: pulumi.Input<string>;
    /**
     * Variable name
     */
    tunnelDestinationIpv4AddressVariable?: pulumi.Input<string>;
    /**
     * <1..32 characters> Interface name, can't be Loopback interface
     */
    tunnelRouteViaLoopback?: pulumi.Input<string>;
    /**
     * Variable name
     */
    tunnelRouteViaLoopbackVariable?: pulumi.Input<string>;
    /**
     * <1..32 characters> Interface name
     */
    tunnelSourceInterface?: pulumi.Input<string>;
    /**
     * <1..32 characters> Interface name
     */
    tunnelSourceInterfaceLoopback?: pulumi.Input<string>;
    /**
     * Variable name
     */
    tunnelSourceInterfaceLoopbackVariable?: pulumi.Input<string>;
    /**
     * Variable name
     */
    tunnelSourceInterfaceVariable?: pulumi.Input<string>;
    /**
     * Tunnel source IP Address
     */
    tunnelSourceIpv4Address?: pulumi.Input<string>;
    /**
     * Variable name
     */
    tunnelSourceIpv4AddressVariable?: pulumi.Input<string>;
}
