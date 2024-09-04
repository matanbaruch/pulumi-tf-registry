// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Address extends pulumi.CustomResource {
    /**
     * Get an existing Address resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AddressState, opts?: pulumi.CustomResourceOptions): Address {
        return new Address(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'b1ddi:index/address:Address';

    /**
     * Returns true if the given object is an instance of Address.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Address {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Address.__pulumiType;
    }

    /**
     * The address in the form 'a.b.c.d'.
     */
    public readonly address!: pulumi.Output<string>;
    /**
     * The description for the address object. May contain 0 to 1024 characters. Can include UTF-8.
     */
    public readonly comment!: pulumi.Output<string | undefined>;
    /**
     * Time when the object has been created.
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * The DHCP information associated with this object.
     */
    public /*out*/ readonly dhcpInfos!: pulumi.Output<outputs.AddressDhcpInfo[]>;
    /**
     * The resource identifier.
     */
    public readonly host!: pulumi.Output<string | undefined>;
    /**
     * The hardware address associated with this IP address.
     */
    public readonly hwaddr!: pulumi.Output<string | undefined>;
    /**
     * The name of the network interface card (NIC) associated with the address, if any.
     */
    public readonly interface!: pulumi.Output<string | undefined>;
    /**
     * The list of all names associated with this address.
     */
    public readonly names!: pulumi.Output<outputs.AddressName[] | undefined>;
    /**
     * The resource ID in the form "ipam/[address_block|subnet|range]/<UUID>". This will create the next available resource in
     * the given container
     */
    public readonly nextAvailableId!: pulumi.Output<string>;
    /**
     * The resource identifier. Can be used to allocate the next available ip for the address object.
     */
    public /*out*/ readonly parent!: pulumi.Output<string>;
    /**
     * The type of protocol (_ipv4_ or _ipv6_).
     */
    public /*out*/ readonly protocol!: pulumi.Output<string>;
    /**
     * The resource identifier.
     */
    public /*out*/ readonly range!: pulumi.Output<string>;
    /**
     * The resource identifier.
     */
    public readonly space!: pulumi.Output<string>;
    /**
     * The state of the address (_used_ or _free_).
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * The tags for this address in JSON format.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Time when the object has been updated. Equals to _created_at_ if not updated after creation.
     */
    public /*out*/ readonly updatedAt!: pulumi.Output<string>;
    /**
     * The usage is a combination of indicators, each tracking a specific associated use. Listed below are usage indicators
     * with their meaning: usage indicator | description ---------------------- | -------------------------------- _IPAM_ |
     * Address was created by the IPAM component. _IPAM_, _RESERVED_ | Address was created by the API call _ipam/address_ or
     * _ipam/host_. _IPAM_, _NETWORK_ | Address was automatically created by the IPAM component and is the network address of
     * the parent subnet. _IPAM_, _BROADCAST_ | Address was automatically created by the IPAM component and is the broadcast
     * address of the parent subnet. _DHCP_ | Address was created by the DHCP component. _DHCP_, _FIXEDADDRESS_ | Address was
     * created by the API call _dhcp/fixed_address_. _DHCP_, _LEASED_ | An active lease for that address was issued by a DHCP
     * server. _DNS_ | Address is used by one or more DNS records.
     */
    public /*out*/ readonly usages!: pulumi.Output<string[]>;

    /**
     * Create a Address resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AddressArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AddressArgs | AddressState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AddressState | undefined;
            resourceInputs["address"] = state ? state.address : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["createdAt"] = state ? state.createdAt : undefined;
            resourceInputs["dhcpInfos"] = state ? state.dhcpInfos : undefined;
            resourceInputs["host"] = state ? state.host : undefined;
            resourceInputs["hwaddr"] = state ? state.hwaddr : undefined;
            resourceInputs["interface"] = state ? state.interface : undefined;
            resourceInputs["names"] = state ? state.names : undefined;
            resourceInputs["nextAvailableId"] = state ? state.nextAvailableId : undefined;
            resourceInputs["parent"] = state ? state.parent : undefined;
            resourceInputs["protocol"] = state ? state.protocol : undefined;
            resourceInputs["range"] = state ? state.range : undefined;
            resourceInputs["space"] = state ? state.space : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["updatedAt"] = state ? state.updatedAt : undefined;
            resourceInputs["usages"] = state ? state.usages : undefined;
        } else {
            const args = argsOrState as AddressArgs | undefined;
            if ((!args || args.space === undefined) && !opts.urn) {
                throw new Error("Missing required property 'space'");
            }
            resourceInputs["address"] = args ? args.address : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["host"] = args ? args.host : undefined;
            resourceInputs["hwaddr"] = args ? args.hwaddr : undefined;
            resourceInputs["interface"] = args ? args.interface : undefined;
            resourceInputs["names"] = args ? args.names : undefined;
            resourceInputs["nextAvailableId"] = args ? args.nextAvailableId : undefined;
            resourceInputs["space"] = args ? args.space : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["dhcpInfos"] = undefined /*out*/;
            resourceInputs["parent"] = undefined /*out*/;
            resourceInputs["protocol"] = undefined /*out*/;
            resourceInputs["range"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["updatedAt"] = undefined /*out*/;
            resourceInputs["usages"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Address.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Address resources.
 */
export interface AddressState {
    /**
     * The address in the form 'a.b.c.d'.
     */
    address?: pulumi.Input<string>;
    /**
     * The description for the address object. May contain 0 to 1024 characters. Can include UTF-8.
     */
    comment?: pulumi.Input<string>;
    /**
     * Time when the object has been created.
     */
    createdAt?: pulumi.Input<string>;
    /**
     * The DHCP information associated with this object.
     */
    dhcpInfos?: pulumi.Input<pulumi.Input<inputs.AddressDhcpInfo>[]>;
    /**
     * The resource identifier.
     */
    host?: pulumi.Input<string>;
    /**
     * The hardware address associated with this IP address.
     */
    hwaddr?: pulumi.Input<string>;
    /**
     * The name of the network interface card (NIC) associated with the address, if any.
     */
    interface?: pulumi.Input<string>;
    /**
     * The list of all names associated with this address.
     */
    names?: pulumi.Input<pulumi.Input<inputs.AddressName>[]>;
    /**
     * The resource ID in the form "ipam/[address_block|subnet|range]/<UUID>". This will create the next available resource in
     * the given container
     */
    nextAvailableId?: pulumi.Input<string>;
    /**
     * The resource identifier. Can be used to allocate the next available ip for the address object.
     */
    parent?: pulumi.Input<string>;
    /**
     * The type of protocol (_ipv4_ or _ipv6_).
     */
    protocol?: pulumi.Input<string>;
    /**
     * The resource identifier.
     */
    range?: pulumi.Input<string>;
    /**
     * The resource identifier.
     */
    space?: pulumi.Input<string>;
    /**
     * The state of the address (_used_ or _free_).
     */
    state?: pulumi.Input<string>;
    /**
     * The tags for this address in JSON format.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Time when the object has been updated. Equals to _created_at_ if not updated after creation.
     */
    updatedAt?: pulumi.Input<string>;
    /**
     * The usage is a combination of indicators, each tracking a specific associated use. Listed below are usage indicators
     * with their meaning: usage indicator | description ---------------------- | -------------------------------- _IPAM_ |
     * Address was created by the IPAM component. _IPAM_, _RESERVED_ | Address was created by the API call _ipam/address_ or
     * _ipam/host_. _IPAM_, _NETWORK_ | Address was automatically created by the IPAM component and is the network address of
     * the parent subnet. _IPAM_, _BROADCAST_ | Address was automatically created by the IPAM component and is the broadcast
     * address of the parent subnet. _DHCP_ | Address was created by the DHCP component. _DHCP_, _FIXEDADDRESS_ | Address was
     * created by the API call _dhcp/fixed_address_. _DHCP_, _LEASED_ | An active lease for that address was issued by a DHCP
     * server. _DNS_ | Address is used by one or more DNS records.
     */
    usages?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a Address resource.
 */
export interface AddressArgs {
    /**
     * The address in the form 'a.b.c.d'.
     */
    address?: pulumi.Input<string>;
    /**
     * The description for the address object. May contain 0 to 1024 characters. Can include UTF-8.
     */
    comment?: pulumi.Input<string>;
    /**
     * The resource identifier.
     */
    host?: pulumi.Input<string>;
    /**
     * The hardware address associated with this IP address.
     */
    hwaddr?: pulumi.Input<string>;
    /**
     * The name of the network interface card (NIC) associated with the address, if any.
     */
    interface?: pulumi.Input<string>;
    /**
     * The list of all names associated with this address.
     */
    names?: pulumi.Input<pulumi.Input<inputs.AddressName>[]>;
    /**
     * The resource ID in the form "ipam/[address_block|subnet|range]/<UUID>". This will create the next available resource in
     * the given container
     */
    nextAvailableId?: pulumi.Input<string>;
    /**
     * The resource identifier.
     */
    space: pulumi.Input<string>;
    /**
     * The tags for this address in JSON format.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
