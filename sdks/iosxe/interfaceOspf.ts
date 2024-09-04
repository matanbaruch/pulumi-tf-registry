// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class InterfaceOspf extends pulumi.CustomResource {
    /**
     * Get an existing InterfaceOspf resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InterfaceOspfState, opts?: pulumi.CustomResourceOptions): InterfaceOspf {
        return new InterfaceOspf(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'iosxe:index/interfaceOspf:InterfaceOspf';

    /**
     * Returns true if the given object is an instance of InterfaceOspf.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is InterfaceOspf {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === InterfaceOspf.__pulumiType;
    }

    /**
     * Route cost of this interface - Range: `1`-`65535`
     */
    public readonly cost!: pulumi.Output<number | undefined>;
    /**
     * Interval after which a neighbor is declared dead - Range: `1`-`65535`
     */
    public readonly deadInterval!: pulumi.Output<number | undefined>;
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
     * Time between HELLO packets - Range: `1`-`65535`
     */
    public readonly helloInterval!: pulumi.Output<number | undefined>;
    /**
     * Message digest authentication password (key)
     */
    public readonly messageDigestKeys!: pulumi.Output<outputs.InterfaceOspfMessageDigestKey[] | undefined>;
    /**
     * Ignores the MTU in DBD packets
     */
    public readonly mtuIgnore!: pulumi.Output<boolean | undefined>;
    public readonly name!: pulumi.Output<string>;
    /**
     * Specify OSPF broadcast multi-access network
     */
    public readonly networkTypeBroadcast!: pulumi.Output<boolean | undefined>;
    /**
     * Specify OSPF NBMA network
     */
    public readonly networkTypeNonBroadcast!: pulumi.Output<boolean | undefined>;
    /**
     * Specify OSPF point-to-multipoint network
     */
    public readonly networkTypePointToMultipoint!: pulumi.Output<boolean | undefined>;
    /**
     * Specify OSPF point-to-point network
     */
    public readonly networkTypePointToPoint!: pulumi.Output<boolean | undefined>;
    /**
     * Router priority - Range: `0`-`255`
     */
    public readonly priority!: pulumi.Output<number | undefined>;
    public readonly processIds!: pulumi.Output<outputs.InterfaceOspfProcessId[] | undefined>;
    /**
     * IP hops - Range: `1`-`254`
     */
    public readonly ttlSecurityHops!: pulumi.Output<number | undefined>;
    /**
     * Interface type - Choices: `GigabitEthernet`, `TwoGigabitEthernet`, `FiveGigabitEthernet`, `TenGigabitEthernet`,
     * `TwentyFiveGigE`, `FortyGigabitEthernet`, `HundredGigE`, `TwoHundredGigE`, `FourHundredGigE`, `Loopback`, `Vlan`,
     * `Port-channel`, `Tunnel`
     */
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a InterfaceOspf resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InterfaceOspfArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: InterfaceOspfArgs | InterfaceOspfState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as InterfaceOspfState | undefined;
            resourceInputs["cost"] = state ? state.cost : undefined;
            resourceInputs["deadInterval"] = state ? state.deadInterval : undefined;
            resourceInputs["deleteMode"] = state ? state.deleteMode : undefined;
            resourceInputs["device"] = state ? state.device : undefined;
            resourceInputs["helloInterval"] = state ? state.helloInterval : undefined;
            resourceInputs["messageDigestKeys"] = state ? state.messageDigestKeys : undefined;
            resourceInputs["mtuIgnore"] = state ? state.mtuIgnore : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["networkTypeBroadcast"] = state ? state.networkTypeBroadcast : undefined;
            resourceInputs["networkTypeNonBroadcast"] = state ? state.networkTypeNonBroadcast : undefined;
            resourceInputs["networkTypePointToMultipoint"] = state ? state.networkTypePointToMultipoint : undefined;
            resourceInputs["networkTypePointToPoint"] = state ? state.networkTypePointToPoint : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["processIds"] = state ? state.processIds : undefined;
            resourceInputs["ttlSecurityHops"] = state ? state.ttlSecurityHops : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as InterfaceOspfArgs | undefined;
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["cost"] = args ? args.cost : undefined;
            resourceInputs["deadInterval"] = args ? args.deadInterval : undefined;
            resourceInputs["deleteMode"] = args ? args.deleteMode : undefined;
            resourceInputs["device"] = args ? args.device : undefined;
            resourceInputs["helloInterval"] = args ? args.helloInterval : undefined;
            resourceInputs["messageDigestKeys"] = args ? args.messageDigestKeys : undefined;
            resourceInputs["mtuIgnore"] = args ? args.mtuIgnore : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["networkTypeBroadcast"] = args ? args.networkTypeBroadcast : undefined;
            resourceInputs["networkTypeNonBroadcast"] = args ? args.networkTypeNonBroadcast : undefined;
            resourceInputs["networkTypePointToMultipoint"] = args ? args.networkTypePointToMultipoint : undefined;
            resourceInputs["networkTypePointToPoint"] = args ? args.networkTypePointToPoint : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["processIds"] = args ? args.processIds : undefined;
            resourceInputs["ttlSecurityHops"] = args ? args.ttlSecurityHops : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(InterfaceOspf.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering InterfaceOspf resources.
 */
export interface InterfaceOspfState {
    /**
     * Route cost of this interface - Range: `1`-`65535`
     */
    cost?: pulumi.Input<number>;
    /**
     * Interval after which a neighbor is declared dead - Range: `1`-`65535`
     */
    deadInterval?: pulumi.Input<number>;
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
     * Time between HELLO packets - Range: `1`-`65535`
     */
    helloInterval?: pulumi.Input<number>;
    /**
     * Message digest authentication password (key)
     */
    messageDigestKeys?: pulumi.Input<pulumi.Input<inputs.InterfaceOspfMessageDigestKey>[]>;
    /**
     * Ignores the MTU in DBD packets
     */
    mtuIgnore?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    /**
     * Specify OSPF broadcast multi-access network
     */
    networkTypeBroadcast?: pulumi.Input<boolean>;
    /**
     * Specify OSPF NBMA network
     */
    networkTypeNonBroadcast?: pulumi.Input<boolean>;
    /**
     * Specify OSPF point-to-multipoint network
     */
    networkTypePointToMultipoint?: pulumi.Input<boolean>;
    /**
     * Specify OSPF point-to-point network
     */
    networkTypePointToPoint?: pulumi.Input<boolean>;
    /**
     * Router priority - Range: `0`-`255`
     */
    priority?: pulumi.Input<number>;
    processIds?: pulumi.Input<pulumi.Input<inputs.InterfaceOspfProcessId>[]>;
    /**
     * IP hops - Range: `1`-`254`
     */
    ttlSecurityHops?: pulumi.Input<number>;
    /**
     * Interface type - Choices: `GigabitEthernet`, `TwoGigabitEthernet`, `FiveGigabitEthernet`, `TenGigabitEthernet`,
     * `TwentyFiveGigE`, `FortyGigabitEthernet`, `HundredGigE`, `TwoHundredGigE`, `FourHundredGigE`, `Loopback`, `Vlan`,
     * `Port-channel`, `Tunnel`
     */
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a InterfaceOspf resource.
 */
export interface InterfaceOspfArgs {
    /**
     * Route cost of this interface - Range: `1`-`65535`
     */
    cost?: pulumi.Input<number>;
    /**
     * Interval after which a neighbor is declared dead - Range: `1`-`65535`
     */
    deadInterval?: pulumi.Input<number>;
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
     * Time between HELLO packets - Range: `1`-`65535`
     */
    helloInterval?: pulumi.Input<number>;
    /**
     * Message digest authentication password (key)
     */
    messageDigestKeys?: pulumi.Input<pulumi.Input<inputs.InterfaceOspfMessageDigestKey>[]>;
    /**
     * Ignores the MTU in DBD packets
     */
    mtuIgnore?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    /**
     * Specify OSPF broadcast multi-access network
     */
    networkTypeBroadcast?: pulumi.Input<boolean>;
    /**
     * Specify OSPF NBMA network
     */
    networkTypeNonBroadcast?: pulumi.Input<boolean>;
    /**
     * Specify OSPF point-to-multipoint network
     */
    networkTypePointToMultipoint?: pulumi.Input<boolean>;
    /**
     * Specify OSPF point-to-point network
     */
    networkTypePointToPoint?: pulumi.Input<boolean>;
    /**
     * Router priority - Range: `0`-`255`
     */
    priority?: pulumi.Input<number>;
    processIds?: pulumi.Input<pulumi.Input<inputs.InterfaceOspfProcessId>[]>;
    /**
     * IP hops - Range: `1`-`254`
     */
    ttlSecurityHops?: pulumi.Input<number>;
    /**
     * Interface type - Choices: `GigabitEthernet`, `TwoGigabitEthernet`, `FiveGigabitEthernet`, `TenGigabitEthernet`,
     * `TwentyFiveGigE`, `FortyGigabitEthernet`, `HundredGigE`, `TwoHundredGigE`, `FourHundredGigE`, `Loopback`, `Vlan`,
     * `Port-channel`, `Tunnel`
     */
    type: pulumi.Input<string>;
}
