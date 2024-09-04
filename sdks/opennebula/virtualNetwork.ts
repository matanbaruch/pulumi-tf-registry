// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class VirtualNetwork extends pulumi.CustomResource {
    /**
     * Get an existing VirtualNetwork resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VirtualNetworkState, opts?: pulumi.CustomResourceOptions): VirtualNetwork {
        return new VirtualNetwork(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'opennebula:index/virtualNetwork:VirtualNetwork';

    /**
     * Returns true if the given object is an instance of VirtualNetwork.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualNetwork {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualNetwork.__pulumiType;
    }

    /**
     * List of Address Ranges to be part of the Virtual Network
     *
     * @deprecated Deprecated
     */
    public readonly ars!: pulumi.Output<outputs.VirtualNetworkAr[] | undefined>;
    /**
     * If set, let OpenNebula to attribute VLAN ID
     */
    public readonly automaticVlanId!: pulumi.Output<boolean>;
    /**
     * Name of the bridge interface to which the vnet should be associated
     */
    public readonly bridge!: pulumi.Output<string>;
    /**
     * List of cluster IDs hosting the virtual Network
     */
    public readonly clusterIds!: pulumi.Output<number[] | undefined>;
    /**
     * Default tags defined in the provider configuration
     */
    public /*out*/ readonly defaultTags!: pulumi.Output<{[key: string]: string}>;
    /**
     * Description of the vnet
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * DNS IP if necessary
     */
    public readonly dns!: pulumi.Output<string | undefined>;
    /**
     * Gateway IP if necessary
     */
    public readonly gateway!: pulumi.Output<string | undefined>;
    /**
     * ID of the group that will own the vnet
     */
    public /*out*/ readonly gid!: pulumi.Output<number>;
    /**
     * Name of the group that will own the vnet
     */
    public /*out*/ readonly gname!: pulumi.Output<string>;
    /**
     * Name of the Group that onws the Virtual Network, If empty, it uses caller group
     */
    public readonly group!: pulumi.Output<string | undefined>;
    /**
     * MTU of the Guest interface. Must be lower or equal to 'mtu' (defaut: 1500)
     */
    public readonly guestMtu!: pulumi.Output<number | undefined>;
    /**
     * List of IPs to be held the VNET
     *
     * @deprecated Deprecated
     */
    public readonly holdIps!: pulumi.Output<string[] | undefined>;
    /**
     * Lock level of the new resource: USE, MANAGE, ADMIN, ALL, UNLOCK
     */
    public readonly lock!: pulumi.Output<string | undefined>;
    /**
     * MTU of the vnet (defaut: 1500)
     */
    public readonly mtu!: pulumi.Output<number | undefined>;
    /**
     * Name of the vnet
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Network Address
     */
    public readonly networkAddress!: pulumi.Output<string | undefined>;
    /**
     * Network Mask
     */
    public readonly networkMask!: pulumi.Output<string | undefined>;
    /**
     * Permissions for the vnet (in Unix format, owner-group-other, use-manage-admin)
     */
    public readonly permissions!: pulumi.Output<string>;
    /**
     * Name of the physical device to which the vnet should be associated
     */
    public readonly physicalDevice!: pulumi.Output<string>;
    /**
     * Address Range ID to be used for the reservation
     */
    public readonly reservationArId!: pulumi.Output<number | undefined>;
    /**
     * First IP of the reservation
     */
    public readonly reservationFirstIp!: pulumi.Output<string | undefined>;
    /**
     * Reserve this many IPs from reservation_vnet
     */
    public readonly reservationSize!: pulumi.Output<number | undefined>;
    /**
     * Create a reservation from this VNET ID
     */
    public readonly reservationVnet!: pulumi.Output<number | undefined>;
    /**
     * Search Domain
     */
    public readonly searchDomain!: pulumi.Output<string | undefined>;
    /**
     * List of Security Group IDs to be applied to the VNET
     */
    public readonly securityGroups!: pulumi.Output<number[]>;
    /**
     * Add custom tags to the resource
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Result of the applied default_tags and resource tags
     */
    public /*out*/ readonly tagsAll!: pulumi.Output<{[key: string]: string}>;
    /**
     * Add custom section to the resource
     */
    public readonly templateSections!: pulumi.Output<outputs.VirtualNetworkTemplateSection[] | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.VirtualNetworkTimeouts | undefined>;
    /**
     * Type of the Virtual Network: dummy, bridge, fw, ebtables, 802.1Q, vxlan, ovswitch. Default is 'bridge'
     */
    public readonly type!: pulumi.Output<string | undefined>;
    /**
     * ID of the user that will own the vnet
     */
    public /*out*/ readonly uid!: pulumi.Output<number>;
    /**
     * Name of the user that will own the vnet
     */
    public /*out*/ readonly uname!: pulumi.Output<string>;
    /**
     * VLAN ID. Only if 'Type' is : 802.1Q, vxlan or ovswich and if 'automatic_vlan_id' is not set
     */
    public readonly vlanId!: pulumi.Output<string>;

    /**
     * Create a VirtualNetwork resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: VirtualNetworkArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VirtualNetworkArgs | VirtualNetworkState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VirtualNetworkState | undefined;
            resourceInputs["ars"] = state ? state.ars : undefined;
            resourceInputs["automaticVlanId"] = state ? state.automaticVlanId : undefined;
            resourceInputs["bridge"] = state ? state.bridge : undefined;
            resourceInputs["clusterIds"] = state ? state.clusterIds : undefined;
            resourceInputs["defaultTags"] = state ? state.defaultTags : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["dns"] = state ? state.dns : undefined;
            resourceInputs["gateway"] = state ? state.gateway : undefined;
            resourceInputs["gid"] = state ? state.gid : undefined;
            resourceInputs["gname"] = state ? state.gname : undefined;
            resourceInputs["group"] = state ? state.group : undefined;
            resourceInputs["guestMtu"] = state ? state.guestMtu : undefined;
            resourceInputs["holdIps"] = state ? state.holdIps : undefined;
            resourceInputs["lock"] = state ? state.lock : undefined;
            resourceInputs["mtu"] = state ? state.mtu : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["networkAddress"] = state ? state.networkAddress : undefined;
            resourceInputs["networkMask"] = state ? state.networkMask : undefined;
            resourceInputs["permissions"] = state ? state.permissions : undefined;
            resourceInputs["physicalDevice"] = state ? state.physicalDevice : undefined;
            resourceInputs["reservationArId"] = state ? state.reservationArId : undefined;
            resourceInputs["reservationFirstIp"] = state ? state.reservationFirstIp : undefined;
            resourceInputs["reservationSize"] = state ? state.reservationSize : undefined;
            resourceInputs["reservationVnet"] = state ? state.reservationVnet : undefined;
            resourceInputs["searchDomain"] = state ? state.searchDomain : undefined;
            resourceInputs["securityGroups"] = state ? state.securityGroups : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
            resourceInputs["templateSections"] = state ? state.templateSections : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["uid"] = state ? state.uid : undefined;
            resourceInputs["uname"] = state ? state.uname : undefined;
            resourceInputs["vlanId"] = state ? state.vlanId : undefined;
        } else {
            const args = argsOrState as VirtualNetworkArgs | undefined;
            resourceInputs["ars"] = args ? args.ars : undefined;
            resourceInputs["automaticVlanId"] = args ? args.automaticVlanId : undefined;
            resourceInputs["bridge"] = args ? args.bridge : undefined;
            resourceInputs["clusterIds"] = args ? args.clusterIds : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["dns"] = args ? args.dns : undefined;
            resourceInputs["gateway"] = args ? args.gateway : undefined;
            resourceInputs["group"] = args ? args.group : undefined;
            resourceInputs["guestMtu"] = args ? args.guestMtu : undefined;
            resourceInputs["holdIps"] = args ? args.holdIps : undefined;
            resourceInputs["lock"] = args ? args.lock : undefined;
            resourceInputs["mtu"] = args ? args.mtu : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["networkAddress"] = args ? args.networkAddress : undefined;
            resourceInputs["networkMask"] = args ? args.networkMask : undefined;
            resourceInputs["permissions"] = args ? args.permissions : undefined;
            resourceInputs["physicalDevice"] = args ? args.physicalDevice : undefined;
            resourceInputs["reservationArId"] = args ? args.reservationArId : undefined;
            resourceInputs["reservationFirstIp"] = args ? args.reservationFirstIp : undefined;
            resourceInputs["reservationSize"] = args ? args.reservationSize : undefined;
            resourceInputs["reservationVnet"] = args ? args.reservationVnet : undefined;
            resourceInputs["searchDomain"] = args ? args.searchDomain : undefined;
            resourceInputs["securityGroups"] = args ? args.securityGroups : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["templateSections"] = args ? args.templateSections : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["vlanId"] = args ? args.vlanId : undefined;
            resourceInputs["defaultTags"] = undefined /*out*/;
            resourceInputs["gid"] = undefined /*out*/;
            resourceInputs["gname"] = undefined /*out*/;
            resourceInputs["tagsAll"] = undefined /*out*/;
            resourceInputs["uid"] = undefined /*out*/;
            resourceInputs["uname"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VirtualNetwork.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VirtualNetwork resources.
 */
export interface VirtualNetworkState {
    /**
     * List of Address Ranges to be part of the Virtual Network
     *
     * @deprecated Deprecated
     */
    ars?: pulumi.Input<pulumi.Input<inputs.VirtualNetworkAr>[]>;
    /**
     * If set, let OpenNebula to attribute VLAN ID
     */
    automaticVlanId?: pulumi.Input<boolean>;
    /**
     * Name of the bridge interface to which the vnet should be associated
     */
    bridge?: pulumi.Input<string>;
    /**
     * List of cluster IDs hosting the virtual Network
     */
    clusterIds?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Default tags defined in the provider configuration
     */
    defaultTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Description of the vnet
     */
    description?: pulumi.Input<string>;
    /**
     * DNS IP if necessary
     */
    dns?: pulumi.Input<string>;
    /**
     * Gateway IP if necessary
     */
    gateway?: pulumi.Input<string>;
    /**
     * ID of the group that will own the vnet
     */
    gid?: pulumi.Input<number>;
    /**
     * Name of the group that will own the vnet
     */
    gname?: pulumi.Input<string>;
    /**
     * Name of the Group that onws the Virtual Network, If empty, it uses caller group
     */
    group?: pulumi.Input<string>;
    /**
     * MTU of the Guest interface. Must be lower or equal to 'mtu' (defaut: 1500)
     */
    guestMtu?: pulumi.Input<number>;
    /**
     * List of IPs to be held the VNET
     *
     * @deprecated Deprecated
     */
    holdIps?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Lock level of the new resource: USE, MANAGE, ADMIN, ALL, UNLOCK
     */
    lock?: pulumi.Input<string>;
    /**
     * MTU of the vnet (defaut: 1500)
     */
    mtu?: pulumi.Input<number>;
    /**
     * Name of the vnet
     */
    name?: pulumi.Input<string>;
    /**
     * Network Address
     */
    networkAddress?: pulumi.Input<string>;
    /**
     * Network Mask
     */
    networkMask?: pulumi.Input<string>;
    /**
     * Permissions for the vnet (in Unix format, owner-group-other, use-manage-admin)
     */
    permissions?: pulumi.Input<string>;
    /**
     * Name of the physical device to which the vnet should be associated
     */
    physicalDevice?: pulumi.Input<string>;
    /**
     * Address Range ID to be used for the reservation
     */
    reservationArId?: pulumi.Input<number>;
    /**
     * First IP of the reservation
     */
    reservationFirstIp?: pulumi.Input<string>;
    /**
     * Reserve this many IPs from reservation_vnet
     */
    reservationSize?: pulumi.Input<number>;
    /**
     * Create a reservation from this VNET ID
     */
    reservationVnet?: pulumi.Input<number>;
    /**
     * Search Domain
     */
    searchDomain?: pulumi.Input<string>;
    /**
     * List of Security Group IDs to be applied to the VNET
     */
    securityGroups?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Add custom tags to the resource
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Result of the applied default_tags and resource tags
     */
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Add custom section to the resource
     */
    templateSections?: pulumi.Input<pulumi.Input<inputs.VirtualNetworkTemplateSection>[]>;
    timeouts?: pulumi.Input<inputs.VirtualNetworkTimeouts>;
    /**
     * Type of the Virtual Network: dummy, bridge, fw, ebtables, 802.1Q, vxlan, ovswitch. Default is 'bridge'
     */
    type?: pulumi.Input<string>;
    /**
     * ID of the user that will own the vnet
     */
    uid?: pulumi.Input<number>;
    /**
     * Name of the user that will own the vnet
     */
    uname?: pulumi.Input<string>;
    /**
     * VLAN ID. Only if 'Type' is : 802.1Q, vxlan or ovswich and if 'automatic_vlan_id' is not set
     */
    vlanId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VirtualNetwork resource.
 */
export interface VirtualNetworkArgs {
    /**
     * List of Address Ranges to be part of the Virtual Network
     *
     * @deprecated Deprecated
     */
    ars?: pulumi.Input<pulumi.Input<inputs.VirtualNetworkAr>[]>;
    /**
     * If set, let OpenNebula to attribute VLAN ID
     */
    automaticVlanId?: pulumi.Input<boolean>;
    /**
     * Name of the bridge interface to which the vnet should be associated
     */
    bridge?: pulumi.Input<string>;
    /**
     * List of cluster IDs hosting the virtual Network
     */
    clusterIds?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Description of the vnet
     */
    description?: pulumi.Input<string>;
    /**
     * DNS IP if necessary
     */
    dns?: pulumi.Input<string>;
    /**
     * Gateway IP if necessary
     */
    gateway?: pulumi.Input<string>;
    /**
     * Name of the Group that onws the Virtual Network, If empty, it uses caller group
     */
    group?: pulumi.Input<string>;
    /**
     * MTU of the Guest interface. Must be lower or equal to 'mtu' (defaut: 1500)
     */
    guestMtu?: pulumi.Input<number>;
    /**
     * List of IPs to be held the VNET
     *
     * @deprecated Deprecated
     */
    holdIps?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Lock level of the new resource: USE, MANAGE, ADMIN, ALL, UNLOCK
     */
    lock?: pulumi.Input<string>;
    /**
     * MTU of the vnet (defaut: 1500)
     */
    mtu?: pulumi.Input<number>;
    /**
     * Name of the vnet
     */
    name?: pulumi.Input<string>;
    /**
     * Network Address
     */
    networkAddress?: pulumi.Input<string>;
    /**
     * Network Mask
     */
    networkMask?: pulumi.Input<string>;
    /**
     * Permissions for the vnet (in Unix format, owner-group-other, use-manage-admin)
     */
    permissions?: pulumi.Input<string>;
    /**
     * Name of the physical device to which the vnet should be associated
     */
    physicalDevice?: pulumi.Input<string>;
    /**
     * Address Range ID to be used for the reservation
     */
    reservationArId?: pulumi.Input<number>;
    /**
     * First IP of the reservation
     */
    reservationFirstIp?: pulumi.Input<string>;
    /**
     * Reserve this many IPs from reservation_vnet
     */
    reservationSize?: pulumi.Input<number>;
    /**
     * Create a reservation from this VNET ID
     */
    reservationVnet?: pulumi.Input<number>;
    /**
     * Search Domain
     */
    searchDomain?: pulumi.Input<string>;
    /**
     * List of Security Group IDs to be applied to the VNET
     */
    securityGroups?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Add custom tags to the resource
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Add custom section to the resource
     */
    templateSections?: pulumi.Input<pulumi.Input<inputs.VirtualNetworkTemplateSection>[]>;
    timeouts?: pulumi.Input<inputs.VirtualNetworkTimeouts>;
    /**
     * Type of the Virtual Network: dummy, bridge, fw, ebtables, 802.1Q, vxlan, ovswitch. Default is 'bridge'
     */
    type?: pulumi.Input<string>;
    /**
     * VLAN ID. Only if 'Type' is : 802.1Q, vxlan or ovswich and if 'automatic_vlan_id' is not set
     */
    vlanId?: pulumi.Input<string>;
}
