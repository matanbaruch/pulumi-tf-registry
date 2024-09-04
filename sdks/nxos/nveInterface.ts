// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class NveInterface extends pulumi.CustomResource {
    /**
     * Get an existing NveInterface resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NveInterfaceState, opts?: pulumi.CustomResourceOptions): NveInterface {
        return new NveInterface(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'nxos:index/nveInterface:NveInterface';

    /**
     * Returns true if the given object is an instance of NveInterface.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NveInterface {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NveInterface.__pulumiType;
    }

    /**
     * Administrative state. - Choices: `enabled`, `disabled` - Default value: `disabled`
     */
    public readonly adminState!: pulumi.Output<string>;
    /**
     * Enable or disable Virtual MAC Advertisement in VPC mode. - Default value: `false`
     */
    public readonly advertiseVirtualMac!: pulumi.Output<boolean>;
    /**
     * A device name from the provider configuration.
     */
    public readonly device!: pulumi.Output<string | undefined>;
    /**
     * Hold Down Time. - Range: `1`-`1500` - Default value: `180`
     */
    public readonly holdDownTime!: pulumi.Output<number>;
    /**
     * Host Reachability Protocol. - Choices: `Flood-and-learn`, `bgp`, `controller`, `openflow`, `openflowIR` - Default value:
     * `Flood-and-learn`
     */
    public readonly hostReachabilityProtocol!: pulumi.Output<string>;
    /**
     * VxLAN Ingress Replication Protocol BGP. - Default value: `false`
     */
    public readonly ingressReplicationProtocolBgp!: pulumi.Output<boolean>;
    /**
     * Base multicast group address for L2. - Default value: `0.0.0.0`
     */
    public readonly multicastGroupL2!: pulumi.Output<string>;
    /**
     * Base multicast group address for L3. - Default value: `0.0.0.0`
     */
    public readonly multicastGroupL3!: pulumi.Output<string>;
    /**
     * Interface representing the Multisite Border Gateway. Must match first field in the output of `show int brief`. - Default
     * value: `unspecified`
     */
    public readonly multisiteSourceInterface!: pulumi.Output<string>;
    /**
     * Source Interface associated with the NVE. Must match first field in the output of `show int brief`. - Default value:
     * `unspecified`
     */
    public readonly sourceInterface!: pulumi.Output<string>;
    /**
     * Suppress ARP. - Default value: `false`
     */
    public readonly suppressArp!: pulumi.Output<boolean>;
    /**
     * Suppress MAC Route. - Default value: `false`
     */
    public readonly suppressMacRoute!: pulumi.Output<boolean>;

    /**
     * Create a NveInterface resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: NveInterfaceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NveInterfaceArgs | NveInterfaceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NveInterfaceState | undefined;
            resourceInputs["adminState"] = state ? state.adminState : undefined;
            resourceInputs["advertiseVirtualMac"] = state ? state.advertiseVirtualMac : undefined;
            resourceInputs["device"] = state ? state.device : undefined;
            resourceInputs["holdDownTime"] = state ? state.holdDownTime : undefined;
            resourceInputs["hostReachabilityProtocol"] = state ? state.hostReachabilityProtocol : undefined;
            resourceInputs["ingressReplicationProtocolBgp"] = state ? state.ingressReplicationProtocolBgp : undefined;
            resourceInputs["multicastGroupL2"] = state ? state.multicastGroupL2 : undefined;
            resourceInputs["multicastGroupL3"] = state ? state.multicastGroupL3 : undefined;
            resourceInputs["multisiteSourceInterface"] = state ? state.multisiteSourceInterface : undefined;
            resourceInputs["sourceInterface"] = state ? state.sourceInterface : undefined;
            resourceInputs["suppressArp"] = state ? state.suppressArp : undefined;
            resourceInputs["suppressMacRoute"] = state ? state.suppressMacRoute : undefined;
        } else {
            const args = argsOrState as NveInterfaceArgs | undefined;
            resourceInputs["adminState"] = args ? args.adminState : undefined;
            resourceInputs["advertiseVirtualMac"] = args ? args.advertiseVirtualMac : undefined;
            resourceInputs["device"] = args ? args.device : undefined;
            resourceInputs["holdDownTime"] = args ? args.holdDownTime : undefined;
            resourceInputs["hostReachabilityProtocol"] = args ? args.hostReachabilityProtocol : undefined;
            resourceInputs["ingressReplicationProtocolBgp"] = args ? args.ingressReplicationProtocolBgp : undefined;
            resourceInputs["multicastGroupL2"] = args ? args.multicastGroupL2 : undefined;
            resourceInputs["multicastGroupL3"] = args ? args.multicastGroupL3 : undefined;
            resourceInputs["multisiteSourceInterface"] = args ? args.multisiteSourceInterface : undefined;
            resourceInputs["sourceInterface"] = args ? args.sourceInterface : undefined;
            resourceInputs["suppressArp"] = args ? args.suppressArp : undefined;
            resourceInputs["suppressMacRoute"] = args ? args.suppressMacRoute : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NveInterface.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NveInterface resources.
 */
export interface NveInterfaceState {
    /**
     * Administrative state. - Choices: `enabled`, `disabled` - Default value: `disabled`
     */
    adminState?: pulumi.Input<string>;
    /**
     * Enable or disable Virtual MAC Advertisement in VPC mode. - Default value: `false`
     */
    advertiseVirtualMac?: pulumi.Input<boolean>;
    /**
     * A device name from the provider configuration.
     */
    device?: pulumi.Input<string>;
    /**
     * Hold Down Time. - Range: `1`-`1500` - Default value: `180`
     */
    holdDownTime?: pulumi.Input<number>;
    /**
     * Host Reachability Protocol. - Choices: `Flood-and-learn`, `bgp`, `controller`, `openflow`, `openflowIR` - Default value:
     * `Flood-and-learn`
     */
    hostReachabilityProtocol?: pulumi.Input<string>;
    /**
     * VxLAN Ingress Replication Protocol BGP. - Default value: `false`
     */
    ingressReplicationProtocolBgp?: pulumi.Input<boolean>;
    /**
     * Base multicast group address for L2. - Default value: `0.0.0.0`
     */
    multicastGroupL2?: pulumi.Input<string>;
    /**
     * Base multicast group address for L3. - Default value: `0.0.0.0`
     */
    multicastGroupL3?: pulumi.Input<string>;
    /**
     * Interface representing the Multisite Border Gateway. Must match first field in the output of `show int brief`. - Default
     * value: `unspecified`
     */
    multisiteSourceInterface?: pulumi.Input<string>;
    /**
     * Source Interface associated with the NVE. Must match first field in the output of `show int brief`. - Default value:
     * `unspecified`
     */
    sourceInterface?: pulumi.Input<string>;
    /**
     * Suppress ARP. - Default value: `false`
     */
    suppressArp?: pulumi.Input<boolean>;
    /**
     * Suppress MAC Route. - Default value: `false`
     */
    suppressMacRoute?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a NveInterface resource.
 */
export interface NveInterfaceArgs {
    /**
     * Administrative state. - Choices: `enabled`, `disabled` - Default value: `disabled`
     */
    adminState?: pulumi.Input<string>;
    /**
     * Enable or disable Virtual MAC Advertisement in VPC mode. - Default value: `false`
     */
    advertiseVirtualMac?: pulumi.Input<boolean>;
    /**
     * A device name from the provider configuration.
     */
    device?: pulumi.Input<string>;
    /**
     * Hold Down Time. - Range: `1`-`1500` - Default value: `180`
     */
    holdDownTime?: pulumi.Input<number>;
    /**
     * Host Reachability Protocol. - Choices: `Flood-and-learn`, `bgp`, `controller`, `openflow`, `openflowIR` - Default value:
     * `Flood-and-learn`
     */
    hostReachabilityProtocol?: pulumi.Input<string>;
    /**
     * VxLAN Ingress Replication Protocol BGP. - Default value: `false`
     */
    ingressReplicationProtocolBgp?: pulumi.Input<boolean>;
    /**
     * Base multicast group address for L2. - Default value: `0.0.0.0`
     */
    multicastGroupL2?: pulumi.Input<string>;
    /**
     * Base multicast group address for L3. - Default value: `0.0.0.0`
     */
    multicastGroupL3?: pulumi.Input<string>;
    /**
     * Interface representing the Multisite Border Gateway. Must match first field in the output of `show int brief`. - Default
     * value: `unspecified`
     */
    multisiteSourceInterface?: pulumi.Input<string>;
    /**
     * Source Interface associated with the NVE. Must match first field in the output of `show int brief`. - Default value:
     * `unspecified`
     */
    sourceInterface?: pulumi.Input<string>;
    /**
     * Suppress ARP. - Default value: `false`
     */
    suppressArp?: pulumi.Input<boolean>;
    /**
     * Suppress MAC Route. - Default value: `false`
     */
    suppressMacRoute?: pulumi.Input<boolean>;
}
