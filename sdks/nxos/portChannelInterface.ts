// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class PortChannelInterface extends pulumi.CustomResource {
    /**
     * Get an existing PortChannelInterface resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PortChannelInterfaceState, opts?: pulumi.CustomResourceOptions): PortChannelInterface {
        return new PortChannelInterface(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'nxos:index/portChannelInterface:PortChannelInterface';

    /**
     * Returns true if the given object is an instance of PortChannelInterface.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PortChannelInterface {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PortChannelInterface.__pulumiType;
    }

    /**
     * Access VLAN. Possible values are `unknown`, `vlan-XX` or `vxlan-XX`. - Default value: `vlan-1`
     */
    public readonly accessVlan!: pulumi.Output<string>;
    /**
     * Administrative port state. - Choices: `up`, `down` - Default value: `up`
     */
    public readonly adminState!: pulumi.Output<string>;
    /**
     * Administrative port auto-negotiation. - Choices: `on`, `off`, `25G` - Default value: `on`
     */
    public readonly autoNegotiation!: pulumi.Output<string>;
    /**
     * The bandwidth parameter for a routed interface, port channel, or subinterface. - Range: `0`-`3200000000` - Default
     * value: `0`
     */
    public readonly bandwidth!: pulumi.Output<number>;
    /**
     * The administrative port delay time. - Range: `1`-`16777215` - Default value: `1`
     */
    public readonly delay!: pulumi.Output<number>;
    /**
     * Interface description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * A device name from the provider configuration.
     */
    public readonly device!: pulumi.Output<string | undefined>;
    /**
     * Duplex. - Choices: `auto`, `full`, `half` - Default value: `auto`
     */
    public readonly duplex!: pulumi.Output<string>;
    /**
     * Must match first field in the output of `show intf brief`. Example: `po1`.
     */
    public readonly interfaceId!: pulumi.Output<string>;
    /**
     * Administrative port layer. - Choices: `Layer2`, `Layer3` - Default value: `Layer2`
     */
    public readonly layer!: pulumi.Output<string>;
    /**
     * Administrative link logging. - Choices: `default`, `enable`, `disable` - Default value: `default`
     */
    public readonly linkLogging!: pulumi.Output<string>;
    /**
     * Maximum links. - Range: `1`-`32` - Default value: `32`
     */
    public readonly maximumLinks!: pulumi.Output<number>;
    /**
     * The administrative port medium type. - Choices: `broadcast`, `p2p` - Default value: `broadcast`
     */
    public readonly medium!: pulumi.Output<string>;
    /**
     * Minimum links. - Range: `1`-`32` - Default value: `1`
     */
    public readonly minimumLinks!: pulumi.Output<number>;
    /**
     * Administrative port mode. - Choices: `access`, `trunk`, `fex-fabric`, `dot1q-tunnel`, `promiscuous`, `host`,
     * `trunk_secondary`, `trunk_promiscuous`, `vntag` - Default value: `access`
     */
    public readonly mode!: pulumi.Output<string>;
    /**
     * Administrative port MTU. - Range: `576`-`9216` - Default value: `1500`
     */
    public readonly mtu!: pulumi.Output<number>;
    /**
     * Native VLAN. Possible values are `unknown`, `vlan-XX` or `vxlan-XX`. - Default value: `vlan-1`
     */
    public readonly nativeVlan!: pulumi.Output<string>;
    /**
     * The aggregated interface protocol channel mode. - Choices: `on`, `static`, `active`, `passive`, `mac-pin` - Default
     * value: `on`
     */
    public readonly portChannelMode!: pulumi.Output<string>;
    /**
     * Administrative port speed. - Choices: `unknown`, `100M`, `1G`, `10G`, `40G`, `auto`, `auto 100M`, `auto 100M 1G`,
     * `100G`, `25G`, `10M`, `50G`, `200G`, `400G`, `2.5G`, `5G`, `auto 2.5G 5G 10G`, `auto 100M 1G 2.5G 5G` - Default value:
     * `auto`
     */
    public readonly speed!: pulumi.Output<string>;
    /**
     * Suspend Individual Port. - Choices: `enable`, `disable` - Default value: `enable`
     */
    public readonly suspendIndividual!: pulumi.Output<string>;
    /**
     * List of trunk VLANs. - Default value: `1-4094`
     */
    public readonly trunkVlans!: pulumi.Output<string>;
    /**
     * Port User Config Flags.
     */
    public readonly userConfiguredFlags!: pulumi.Output<string | undefined>;

    /**
     * Create a PortChannelInterface resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PortChannelInterfaceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PortChannelInterfaceArgs | PortChannelInterfaceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PortChannelInterfaceState | undefined;
            resourceInputs["accessVlan"] = state ? state.accessVlan : undefined;
            resourceInputs["adminState"] = state ? state.adminState : undefined;
            resourceInputs["autoNegotiation"] = state ? state.autoNegotiation : undefined;
            resourceInputs["bandwidth"] = state ? state.bandwidth : undefined;
            resourceInputs["delay"] = state ? state.delay : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["device"] = state ? state.device : undefined;
            resourceInputs["duplex"] = state ? state.duplex : undefined;
            resourceInputs["interfaceId"] = state ? state.interfaceId : undefined;
            resourceInputs["layer"] = state ? state.layer : undefined;
            resourceInputs["linkLogging"] = state ? state.linkLogging : undefined;
            resourceInputs["maximumLinks"] = state ? state.maximumLinks : undefined;
            resourceInputs["medium"] = state ? state.medium : undefined;
            resourceInputs["minimumLinks"] = state ? state.minimumLinks : undefined;
            resourceInputs["mode"] = state ? state.mode : undefined;
            resourceInputs["mtu"] = state ? state.mtu : undefined;
            resourceInputs["nativeVlan"] = state ? state.nativeVlan : undefined;
            resourceInputs["portChannelMode"] = state ? state.portChannelMode : undefined;
            resourceInputs["speed"] = state ? state.speed : undefined;
            resourceInputs["suspendIndividual"] = state ? state.suspendIndividual : undefined;
            resourceInputs["trunkVlans"] = state ? state.trunkVlans : undefined;
            resourceInputs["userConfiguredFlags"] = state ? state.userConfiguredFlags : undefined;
        } else {
            const args = argsOrState as PortChannelInterfaceArgs | undefined;
            if ((!args || args.interfaceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'interfaceId'");
            }
            resourceInputs["accessVlan"] = args ? args.accessVlan : undefined;
            resourceInputs["adminState"] = args ? args.adminState : undefined;
            resourceInputs["autoNegotiation"] = args ? args.autoNegotiation : undefined;
            resourceInputs["bandwidth"] = args ? args.bandwidth : undefined;
            resourceInputs["delay"] = args ? args.delay : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["device"] = args ? args.device : undefined;
            resourceInputs["duplex"] = args ? args.duplex : undefined;
            resourceInputs["interfaceId"] = args ? args.interfaceId : undefined;
            resourceInputs["layer"] = args ? args.layer : undefined;
            resourceInputs["linkLogging"] = args ? args.linkLogging : undefined;
            resourceInputs["maximumLinks"] = args ? args.maximumLinks : undefined;
            resourceInputs["medium"] = args ? args.medium : undefined;
            resourceInputs["minimumLinks"] = args ? args.minimumLinks : undefined;
            resourceInputs["mode"] = args ? args.mode : undefined;
            resourceInputs["mtu"] = args ? args.mtu : undefined;
            resourceInputs["nativeVlan"] = args ? args.nativeVlan : undefined;
            resourceInputs["portChannelMode"] = args ? args.portChannelMode : undefined;
            resourceInputs["speed"] = args ? args.speed : undefined;
            resourceInputs["suspendIndividual"] = args ? args.suspendIndividual : undefined;
            resourceInputs["trunkVlans"] = args ? args.trunkVlans : undefined;
            resourceInputs["userConfiguredFlags"] = args ? args.userConfiguredFlags : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PortChannelInterface.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PortChannelInterface resources.
 */
export interface PortChannelInterfaceState {
    /**
     * Access VLAN. Possible values are `unknown`, `vlan-XX` or `vxlan-XX`. - Default value: `vlan-1`
     */
    accessVlan?: pulumi.Input<string>;
    /**
     * Administrative port state. - Choices: `up`, `down` - Default value: `up`
     */
    adminState?: pulumi.Input<string>;
    /**
     * Administrative port auto-negotiation. - Choices: `on`, `off`, `25G` - Default value: `on`
     */
    autoNegotiation?: pulumi.Input<string>;
    /**
     * The bandwidth parameter for a routed interface, port channel, or subinterface. - Range: `0`-`3200000000` - Default
     * value: `0`
     */
    bandwidth?: pulumi.Input<number>;
    /**
     * The administrative port delay time. - Range: `1`-`16777215` - Default value: `1`
     */
    delay?: pulumi.Input<number>;
    /**
     * Interface description.
     */
    description?: pulumi.Input<string>;
    /**
     * A device name from the provider configuration.
     */
    device?: pulumi.Input<string>;
    /**
     * Duplex. - Choices: `auto`, `full`, `half` - Default value: `auto`
     */
    duplex?: pulumi.Input<string>;
    /**
     * Must match first field in the output of `show intf brief`. Example: `po1`.
     */
    interfaceId?: pulumi.Input<string>;
    /**
     * Administrative port layer. - Choices: `Layer2`, `Layer3` - Default value: `Layer2`
     */
    layer?: pulumi.Input<string>;
    /**
     * Administrative link logging. - Choices: `default`, `enable`, `disable` - Default value: `default`
     */
    linkLogging?: pulumi.Input<string>;
    /**
     * Maximum links. - Range: `1`-`32` - Default value: `32`
     */
    maximumLinks?: pulumi.Input<number>;
    /**
     * The administrative port medium type. - Choices: `broadcast`, `p2p` - Default value: `broadcast`
     */
    medium?: pulumi.Input<string>;
    /**
     * Minimum links. - Range: `1`-`32` - Default value: `1`
     */
    minimumLinks?: pulumi.Input<number>;
    /**
     * Administrative port mode. - Choices: `access`, `trunk`, `fex-fabric`, `dot1q-tunnel`, `promiscuous`, `host`,
     * `trunk_secondary`, `trunk_promiscuous`, `vntag` - Default value: `access`
     */
    mode?: pulumi.Input<string>;
    /**
     * Administrative port MTU. - Range: `576`-`9216` - Default value: `1500`
     */
    mtu?: pulumi.Input<number>;
    /**
     * Native VLAN. Possible values are `unknown`, `vlan-XX` or `vxlan-XX`. - Default value: `vlan-1`
     */
    nativeVlan?: pulumi.Input<string>;
    /**
     * The aggregated interface protocol channel mode. - Choices: `on`, `static`, `active`, `passive`, `mac-pin` - Default
     * value: `on`
     */
    portChannelMode?: pulumi.Input<string>;
    /**
     * Administrative port speed. - Choices: `unknown`, `100M`, `1G`, `10G`, `40G`, `auto`, `auto 100M`, `auto 100M 1G`,
     * `100G`, `25G`, `10M`, `50G`, `200G`, `400G`, `2.5G`, `5G`, `auto 2.5G 5G 10G`, `auto 100M 1G 2.5G 5G` - Default value:
     * `auto`
     */
    speed?: pulumi.Input<string>;
    /**
     * Suspend Individual Port. - Choices: `enable`, `disable` - Default value: `enable`
     */
    suspendIndividual?: pulumi.Input<string>;
    /**
     * List of trunk VLANs. - Default value: `1-4094`
     */
    trunkVlans?: pulumi.Input<string>;
    /**
     * Port User Config Flags.
     */
    userConfiguredFlags?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PortChannelInterface resource.
 */
export interface PortChannelInterfaceArgs {
    /**
     * Access VLAN. Possible values are `unknown`, `vlan-XX` or `vxlan-XX`. - Default value: `vlan-1`
     */
    accessVlan?: pulumi.Input<string>;
    /**
     * Administrative port state. - Choices: `up`, `down` - Default value: `up`
     */
    adminState?: pulumi.Input<string>;
    /**
     * Administrative port auto-negotiation. - Choices: `on`, `off`, `25G` - Default value: `on`
     */
    autoNegotiation?: pulumi.Input<string>;
    /**
     * The bandwidth parameter for a routed interface, port channel, or subinterface. - Range: `0`-`3200000000` - Default
     * value: `0`
     */
    bandwidth?: pulumi.Input<number>;
    /**
     * The administrative port delay time. - Range: `1`-`16777215` - Default value: `1`
     */
    delay?: pulumi.Input<number>;
    /**
     * Interface description.
     */
    description?: pulumi.Input<string>;
    /**
     * A device name from the provider configuration.
     */
    device?: pulumi.Input<string>;
    /**
     * Duplex. - Choices: `auto`, `full`, `half` - Default value: `auto`
     */
    duplex?: pulumi.Input<string>;
    /**
     * Must match first field in the output of `show intf brief`. Example: `po1`.
     */
    interfaceId: pulumi.Input<string>;
    /**
     * Administrative port layer. - Choices: `Layer2`, `Layer3` - Default value: `Layer2`
     */
    layer?: pulumi.Input<string>;
    /**
     * Administrative link logging. - Choices: `default`, `enable`, `disable` - Default value: `default`
     */
    linkLogging?: pulumi.Input<string>;
    /**
     * Maximum links. - Range: `1`-`32` - Default value: `32`
     */
    maximumLinks?: pulumi.Input<number>;
    /**
     * The administrative port medium type. - Choices: `broadcast`, `p2p` - Default value: `broadcast`
     */
    medium?: pulumi.Input<string>;
    /**
     * Minimum links. - Range: `1`-`32` - Default value: `1`
     */
    minimumLinks?: pulumi.Input<number>;
    /**
     * Administrative port mode. - Choices: `access`, `trunk`, `fex-fabric`, `dot1q-tunnel`, `promiscuous`, `host`,
     * `trunk_secondary`, `trunk_promiscuous`, `vntag` - Default value: `access`
     */
    mode?: pulumi.Input<string>;
    /**
     * Administrative port MTU. - Range: `576`-`9216` - Default value: `1500`
     */
    mtu?: pulumi.Input<number>;
    /**
     * Native VLAN. Possible values are `unknown`, `vlan-XX` or `vxlan-XX`. - Default value: `vlan-1`
     */
    nativeVlan?: pulumi.Input<string>;
    /**
     * The aggregated interface protocol channel mode. - Choices: `on`, `static`, `active`, `passive`, `mac-pin` - Default
     * value: `on`
     */
    portChannelMode?: pulumi.Input<string>;
    /**
     * Administrative port speed. - Choices: `unknown`, `100M`, `1G`, `10G`, `40G`, `auto`, `auto 100M`, `auto 100M 1G`,
     * `100G`, `25G`, `10M`, `50G`, `200G`, `400G`, `2.5G`, `5G`, `auto 2.5G 5G 10G`, `auto 100M 1G 2.5G 5G` - Default value:
     * `auto`
     */
    speed?: pulumi.Input<string>;
    /**
     * Suspend Individual Port. - Choices: `enable`, `disable` - Default value: `enable`
     */
    suspendIndividual?: pulumi.Input<string>;
    /**
     * List of trunk VLANs. - Default value: `1-4094`
     */
    trunkVlans?: pulumi.Input<string>;
    /**
     * Port User Config Flags.
     */
    userConfiguredFlags?: pulumi.Input<string>;
}
