// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class InterfaceSwitchport extends pulumi.CustomResource {
    /**
     * Get an existing InterfaceSwitchport resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InterfaceSwitchportState, opts?: pulumi.CustomResourceOptions): InterfaceSwitchport {
        return new InterfaceSwitchport(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'iosxe:index/interfaceSwitchport:InterfaceSwitchport';

    /**
     * Returns true if the given object is an instance of InterfaceSwitchport.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is InterfaceSwitchport {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === InterfaceSwitchport.__pulumiType;
    }

    public readonly accessVlan!: pulumi.Output<string | undefined>;
    /**
     * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being
     * managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is.
     * Default value is `all`. - Choices: `all`, `attributes`
     */
    public readonly deleteMode!: pulumi.Output<string | undefined>;
    /**
     * A device name from the provider configuration.
     */
    public readonly device!: pulumi.Output<string | undefined>;
    /**
     * Set port host
     */
    public readonly host!: pulumi.Output<boolean | undefined>;
    /**
     * Set trunking mode to ACCESS unconditionally
     */
    public readonly modeAccess!: pulumi.Output<boolean | undefined>;
    /**
     * set trunking mode to TUNNEL unconditionally
     */
    public readonly modeDot1qTunnel!: pulumi.Output<boolean | undefined>;
    /**
     * Set the mode to private-vlan host
     */
    public readonly modePrivateVlanHost!: pulumi.Output<boolean | undefined>;
    /**
     * Set the mode to private-vlan promiscuous
     */
    public readonly modePrivateVlanPromiscuous!: pulumi.Output<boolean | undefined>;
    /**
     * Set the mode to private-vlan trunk
     */
    public readonly modePrivateVlanTrunk!: pulumi.Output<boolean | undefined>;
    /**
     * Set trunking mode to TRUNK unconditionally
     */
    public readonly modeTrunk!: pulumi.Output<boolean | undefined>;
    public readonly name!: pulumi.Output<string>;
    /**
     * Device will not engage in negotiation protocol on this interface
     */
    public readonly nonegotiate!: pulumi.Output<boolean | undefined>;
    public readonly trunkAllowedVlans!: pulumi.Output<string | undefined>;
    /**
     * no VLANs
     */
    public readonly trunkAllowedVlansNone!: pulumi.Output<boolean | undefined>;
    /**
     * - Range: `1`-`4094`
     */
    public readonly trunkNativeVlan!: pulumi.Output<number | undefined>;
    public readonly trunkNativeVlanTag!: pulumi.Output<boolean | undefined>;
    /**
     * Interface type - Choices: `GigabitEthernet`, `TwoGigabitEthernet`, `FiveGigabitEthernet`, `TenGigabitEthernet`,
     * `TwentyFiveGigE`, `FortyGigabitEthernet`, `HundredGigE`, `TwoHundredGigE`, `FourHundredGigE`, `Port-channel`
     */
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a InterfaceSwitchport resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InterfaceSwitchportArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: InterfaceSwitchportArgs | InterfaceSwitchportState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as InterfaceSwitchportState | undefined;
            resourceInputs["accessVlan"] = state ? state.accessVlan : undefined;
            resourceInputs["deleteMode"] = state ? state.deleteMode : undefined;
            resourceInputs["device"] = state ? state.device : undefined;
            resourceInputs["host"] = state ? state.host : undefined;
            resourceInputs["modeAccess"] = state ? state.modeAccess : undefined;
            resourceInputs["modeDot1qTunnel"] = state ? state.modeDot1qTunnel : undefined;
            resourceInputs["modePrivateVlanHost"] = state ? state.modePrivateVlanHost : undefined;
            resourceInputs["modePrivateVlanPromiscuous"] = state ? state.modePrivateVlanPromiscuous : undefined;
            resourceInputs["modePrivateVlanTrunk"] = state ? state.modePrivateVlanTrunk : undefined;
            resourceInputs["modeTrunk"] = state ? state.modeTrunk : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nonegotiate"] = state ? state.nonegotiate : undefined;
            resourceInputs["trunkAllowedVlans"] = state ? state.trunkAllowedVlans : undefined;
            resourceInputs["trunkAllowedVlansNone"] = state ? state.trunkAllowedVlansNone : undefined;
            resourceInputs["trunkNativeVlan"] = state ? state.trunkNativeVlan : undefined;
            resourceInputs["trunkNativeVlanTag"] = state ? state.trunkNativeVlanTag : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as InterfaceSwitchportArgs | undefined;
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["accessVlan"] = args ? args.accessVlan : undefined;
            resourceInputs["deleteMode"] = args ? args.deleteMode : undefined;
            resourceInputs["device"] = args ? args.device : undefined;
            resourceInputs["host"] = args ? args.host : undefined;
            resourceInputs["modeAccess"] = args ? args.modeAccess : undefined;
            resourceInputs["modeDot1qTunnel"] = args ? args.modeDot1qTunnel : undefined;
            resourceInputs["modePrivateVlanHost"] = args ? args.modePrivateVlanHost : undefined;
            resourceInputs["modePrivateVlanPromiscuous"] = args ? args.modePrivateVlanPromiscuous : undefined;
            resourceInputs["modePrivateVlanTrunk"] = args ? args.modePrivateVlanTrunk : undefined;
            resourceInputs["modeTrunk"] = args ? args.modeTrunk : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nonegotiate"] = args ? args.nonegotiate : undefined;
            resourceInputs["trunkAllowedVlans"] = args ? args.trunkAllowedVlans : undefined;
            resourceInputs["trunkAllowedVlansNone"] = args ? args.trunkAllowedVlansNone : undefined;
            resourceInputs["trunkNativeVlan"] = args ? args.trunkNativeVlan : undefined;
            resourceInputs["trunkNativeVlanTag"] = args ? args.trunkNativeVlanTag : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(InterfaceSwitchport.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering InterfaceSwitchport resources.
 */
export interface InterfaceSwitchportState {
    accessVlan?: pulumi.Input<string>;
    /**
     * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being
     * managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is.
     * Default value is `all`. - Choices: `all`, `attributes`
     */
    deleteMode?: pulumi.Input<string>;
    /**
     * A device name from the provider configuration.
     */
    device?: pulumi.Input<string>;
    /**
     * Set port host
     */
    host?: pulumi.Input<boolean>;
    /**
     * Set trunking mode to ACCESS unconditionally
     */
    modeAccess?: pulumi.Input<boolean>;
    /**
     * set trunking mode to TUNNEL unconditionally
     */
    modeDot1qTunnel?: pulumi.Input<boolean>;
    /**
     * Set the mode to private-vlan host
     */
    modePrivateVlanHost?: pulumi.Input<boolean>;
    /**
     * Set the mode to private-vlan promiscuous
     */
    modePrivateVlanPromiscuous?: pulumi.Input<boolean>;
    /**
     * Set the mode to private-vlan trunk
     */
    modePrivateVlanTrunk?: pulumi.Input<boolean>;
    /**
     * Set trunking mode to TRUNK unconditionally
     */
    modeTrunk?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    /**
     * Device will not engage in negotiation protocol on this interface
     */
    nonegotiate?: pulumi.Input<boolean>;
    trunkAllowedVlans?: pulumi.Input<string>;
    /**
     * no VLANs
     */
    trunkAllowedVlansNone?: pulumi.Input<boolean>;
    /**
     * - Range: `1`-`4094`
     */
    trunkNativeVlan?: pulumi.Input<number>;
    trunkNativeVlanTag?: pulumi.Input<boolean>;
    /**
     * Interface type - Choices: `GigabitEthernet`, `TwoGigabitEthernet`, `FiveGigabitEthernet`, `TenGigabitEthernet`,
     * `TwentyFiveGigE`, `FortyGigabitEthernet`, `HundredGigE`, `TwoHundredGigE`, `FourHundredGigE`, `Port-channel`
     */
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a InterfaceSwitchport resource.
 */
export interface InterfaceSwitchportArgs {
    accessVlan?: pulumi.Input<string>;
    /**
     * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being
     * managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is.
     * Default value is `all`. - Choices: `all`, `attributes`
     */
    deleteMode?: pulumi.Input<string>;
    /**
     * A device name from the provider configuration.
     */
    device?: pulumi.Input<string>;
    /**
     * Set port host
     */
    host?: pulumi.Input<boolean>;
    /**
     * Set trunking mode to ACCESS unconditionally
     */
    modeAccess?: pulumi.Input<boolean>;
    /**
     * set trunking mode to TUNNEL unconditionally
     */
    modeDot1qTunnel?: pulumi.Input<boolean>;
    /**
     * Set the mode to private-vlan host
     */
    modePrivateVlanHost?: pulumi.Input<boolean>;
    /**
     * Set the mode to private-vlan promiscuous
     */
    modePrivateVlanPromiscuous?: pulumi.Input<boolean>;
    /**
     * Set the mode to private-vlan trunk
     */
    modePrivateVlanTrunk?: pulumi.Input<boolean>;
    /**
     * Set trunking mode to TRUNK unconditionally
     */
    modeTrunk?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    /**
     * Device will not engage in negotiation protocol on this interface
     */
    nonegotiate?: pulumi.Input<boolean>;
    trunkAllowedVlans?: pulumi.Input<string>;
    /**
     * no VLANs
     */
    trunkAllowedVlansNone?: pulumi.Input<boolean>;
    /**
     * - Range: `1`-`4094`
     */
    trunkNativeVlan?: pulumi.Input<number>;
    trunkNativeVlanTag?: pulumi.Input<boolean>;
    /**
     * Interface type - Choices: `GigabitEthernet`, `TwoGigabitEthernet`, `FiveGigabitEthernet`, `TenGigabitEthernet`,
     * `TwentyFiveGigE`, `FortyGigabitEthernet`, `HundredGigE`, `TwoHundredGigE`, `FourHundredGigE`, `Port-channel`
     */
    type: pulumi.Input<string>;
}
