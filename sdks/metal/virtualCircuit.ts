// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class VirtualCircuit extends pulumi.CustomResource {
    /**
     * Get an existing VirtualCircuit resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VirtualCircuitState, opts?: pulumi.CustomResourceOptions): VirtualCircuit {
        return new VirtualCircuit(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'metal:index/virtualCircuit:VirtualCircuit';

    /**
     * Returns true if the given object is an instance of VirtualCircuit.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualCircuit {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualCircuit.__pulumiType;
    }

    /**
     * UUID of Connection where the VC is scoped to
     */
    public readonly connectionId!: pulumi.Output<string>;
    /**
     * The Customer IP address which the CSR switch will peer with. Will default to the other usable IP in the subnet.
     */
    public readonly customerIp!: pulumi.Output<string | undefined>;
    /**
     * Description of the Virtual Circuit resource
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The password that can be set for the VRF BGP peer
     */
    public readonly md5!: pulumi.Output<string | undefined>;
    /**
     * The Metal IP address for the SVI (Switch Virtual Interface) of the VirtualCircuit. Will default to the first usable IP
     * in the subnet.
     */
    public readonly metalIp!: pulumi.Output<string | undefined>;
    /**
     * Name of the Virtual Circuit resource
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Equinix Metal network-to-network VLAN ID (optional when the connection has mode=tunnel)
     */
    public readonly nniVlan!: pulumi.Output<number | undefined>;
    /**
     * Nni VLAN ID parameter, see https://metal.equinix.com/developers/docs/networking/fabric/
     */
    public /*out*/ readonly nniVnid!: pulumi.Output<number>;
    /**
     * The BGP ASN of the peer. The same ASN may be the used across several VCs, but it cannot be the same as the local_asn of
     * the VRF.
     */
    public readonly peerAsn!: pulumi.Output<number | undefined>;
    /**
     * UUID of the Connection Port where the VC is scoped to
     */
    public readonly portId!: pulumi.Output<string>;
    /**
     * UUID of the Project where the VC is scoped to
     */
    public readonly projectId!: pulumi.Output<string>;
    /**
     * Description of the Virtual Circuit speed. This is for information purposes and is computed when the connection type is
     * shared.
     */
    public readonly speed!: pulumi.Output<string>;
    /**
     * Status of the virtual circuit resource
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * A subnet from one of the IP blocks associated with the VRF that we will help create an IP reservation for. Can only be
     * either a /30 or /31. * For a /31 block, it will only have two IP addresses, which will be used for the metal_ip and
     * customer_ip. * For a /30 block, it will have four IP addresses, but the first and last IP addresses are not usable. We
     * will default to the first usable IP address for the metal_ip.
     */
    public readonly subnet!: pulumi.Output<string | undefined>;
    /**
     * Tags attached to the virtual circuit
     */
    public readonly tags!: pulumi.Output<string[] | undefined>;
    /**
     * UUID of the VLAN to associate
     */
    public readonly vlanId!: pulumi.Output<string | undefined>;
    /**
     * VNID VLAN parameter, see https://metal.equinix.com/developers/docs/networking/fabric/
     */
    public /*out*/ readonly vnid!: pulumi.Output<number>;
    /**
     * UUID of the VRF to associate
     */
    public readonly vrfId!: pulumi.Output<string | undefined>;

    /**
     * Create a VirtualCircuit resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualCircuitArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VirtualCircuitArgs | VirtualCircuitState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VirtualCircuitState | undefined;
            resourceInputs["connectionId"] = state ? state.connectionId : undefined;
            resourceInputs["customerIp"] = state ? state.customerIp : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["md5"] = state ? state.md5 : undefined;
            resourceInputs["metalIp"] = state ? state.metalIp : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nniVlan"] = state ? state.nniVlan : undefined;
            resourceInputs["nniVnid"] = state ? state.nniVnid : undefined;
            resourceInputs["peerAsn"] = state ? state.peerAsn : undefined;
            resourceInputs["portId"] = state ? state.portId : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["speed"] = state ? state.speed : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["subnet"] = state ? state.subnet : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["vlanId"] = state ? state.vlanId : undefined;
            resourceInputs["vnid"] = state ? state.vnid : undefined;
            resourceInputs["vrfId"] = state ? state.vrfId : undefined;
        } else {
            const args = argsOrState as VirtualCircuitArgs | undefined;
            if ((!args || args.connectionId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'connectionId'");
            }
            if ((!args || args.portId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'portId'");
            }
            if ((!args || args.projectId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'projectId'");
            }
            resourceInputs["connectionId"] = args ? args.connectionId : undefined;
            resourceInputs["customerIp"] = args ? args.customerIp : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["md5"] = args?.md5 ? pulumi.secret(args.md5) : undefined;
            resourceInputs["metalIp"] = args ? args.metalIp : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nniVlan"] = args ? args.nniVlan : undefined;
            resourceInputs["peerAsn"] = args ? args.peerAsn : undefined;
            resourceInputs["portId"] = args ? args.portId : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["speed"] = args ? args.speed : undefined;
            resourceInputs["subnet"] = args ? args.subnet : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vlanId"] = args ? args.vlanId : undefined;
            resourceInputs["vrfId"] = args ? args.vrfId : undefined;
            resourceInputs["nniVnid"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["vnid"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["md5"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(VirtualCircuit.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VirtualCircuit resources.
 */
export interface VirtualCircuitState {
    /**
     * UUID of Connection where the VC is scoped to
     */
    connectionId?: pulumi.Input<string>;
    /**
     * The Customer IP address which the CSR switch will peer with. Will default to the other usable IP in the subnet.
     */
    customerIp?: pulumi.Input<string>;
    /**
     * Description of the Virtual Circuit resource
     */
    description?: pulumi.Input<string>;
    /**
     * The password that can be set for the VRF BGP peer
     */
    md5?: pulumi.Input<string>;
    /**
     * The Metal IP address for the SVI (Switch Virtual Interface) of the VirtualCircuit. Will default to the first usable IP
     * in the subnet.
     */
    metalIp?: pulumi.Input<string>;
    /**
     * Name of the Virtual Circuit resource
     */
    name?: pulumi.Input<string>;
    /**
     * Equinix Metal network-to-network VLAN ID (optional when the connection has mode=tunnel)
     */
    nniVlan?: pulumi.Input<number>;
    /**
     * Nni VLAN ID parameter, see https://metal.equinix.com/developers/docs/networking/fabric/
     */
    nniVnid?: pulumi.Input<number>;
    /**
     * The BGP ASN of the peer. The same ASN may be the used across several VCs, but it cannot be the same as the local_asn of
     * the VRF.
     */
    peerAsn?: pulumi.Input<number>;
    /**
     * UUID of the Connection Port where the VC is scoped to
     */
    portId?: pulumi.Input<string>;
    /**
     * UUID of the Project where the VC is scoped to
     */
    projectId?: pulumi.Input<string>;
    /**
     * Description of the Virtual Circuit speed. This is for information purposes and is computed when the connection type is
     * shared.
     */
    speed?: pulumi.Input<string>;
    /**
     * Status of the virtual circuit resource
     */
    status?: pulumi.Input<string>;
    /**
     * A subnet from one of the IP blocks associated with the VRF that we will help create an IP reservation for. Can only be
     * either a /30 or /31. * For a /31 block, it will only have two IP addresses, which will be used for the metal_ip and
     * customer_ip. * For a /30 block, it will have four IP addresses, but the first and last IP addresses are not usable. We
     * will default to the first usable IP address for the metal_ip.
     */
    subnet?: pulumi.Input<string>;
    /**
     * Tags attached to the virtual circuit
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * UUID of the VLAN to associate
     */
    vlanId?: pulumi.Input<string>;
    /**
     * VNID VLAN parameter, see https://metal.equinix.com/developers/docs/networking/fabric/
     */
    vnid?: pulumi.Input<number>;
    /**
     * UUID of the VRF to associate
     */
    vrfId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VirtualCircuit resource.
 */
export interface VirtualCircuitArgs {
    /**
     * UUID of Connection where the VC is scoped to
     */
    connectionId: pulumi.Input<string>;
    /**
     * The Customer IP address which the CSR switch will peer with. Will default to the other usable IP in the subnet.
     */
    customerIp?: pulumi.Input<string>;
    /**
     * Description of the Virtual Circuit resource
     */
    description?: pulumi.Input<string>;
    /**
     * The password that can be set for the VRF BGP peer
     */
    md5?: pulumi.Input<string>;
    /**
     * The Metal IP address for the SVI (Switch Virtual Interface) of the VirtualCircuit. Will default to the first usable IP
     * in the subnet.
     */
    metalIp?: pulumi.Input<string>;
    /**
     * Name of the Virtual Circuit resource
     */
    name?: pulumi.Input<string>;
    /**
     * Equinix Metal network-to-network VLAN ID (optional when the connection has mode=tunnel)
     */
    nniVlan?: pulumi.Input<number>;
    /**
     * The BGP ASN of the peer. The same ASN may be the used across several VCs, but it cannot be the same as the local_asn of
     * the VRF.
     */
    peerAsn?: pulumi.Input<number>;
    /**
     * UUID of the Connection Port where the VC is scoped to
     */
    portId: pulumi.Input<string>;
    /**
     * UUID of the Project where the VC is scoped to
     */
    projectId: pulumi.Input<string>;
    /**
     * Description of the Virtual Circuit speed. This is for information purposes and is computed when the connection type is
     * shared.
     */
    speed?: pulumi.Input<string>;
    /**
     * A subnet from one of the IP blocks associated with the VRF that we will help create an IP reservation for. Can only be
     * either a /30 or /31. * For a /31 block, it will only have two IP addresses, which will be used for the metal_ip and
     * customer_ip. * For a /30 block, it will have four IP addresses, but the first and last IP addresses are not usable. We
     * will default to the first usable IP address for the metal_ip.
     */
    subnet?: pulumi.Input<string>;
    /**
     * Tags attached to the virtual circuit
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * UUID of the VLAN to associate
     */
    vlanId?: pulumi.Input<string>;
    /**
     * UUID of the VRF to associate
     */
    vrfId?: pulumi.Input<string>;
}
