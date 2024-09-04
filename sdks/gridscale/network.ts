// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Network extends pulumi.CustomResource {
    /**
     * Get an existing Network resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetworkState, opts?: pulumi.CustomResourceOptions): Network {
        return new Network(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'gridscale:index/network:Network';

    /**
     * Returns true if the given object is an instance of Network.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Network {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Network.__pulumiType;
    }

    /**
     * A list of server UUIDs with the corresponding IPs that are designated by the DHCP server.
     */
    public /*out*/ readonly autoAssignedServers!: pulumi.Output<outputs.NetworkAutoAssignedServer[]>;
    /**
     * The date and time of the last object change
     */
    public /*out*/ readonly changeTime!: pulumi.Output<string>;
    /**
     * The date and time the object was initially created
     */
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    /**
     * If deleting this network is allowed
     */
    public /*out*/ readonly deleteBlock!: pulumi.Output<boolean>;
    /**
     * Enable DHCP.
     */
    public readonly dhcpActive!: pulumi.Output<boolean | undefined>;
    /**
     * DHCP DNS.
     */
    public readonly dhcpDns!: pulumi.Output<string | undefined>;
    /**
     * The IP address reserved and communicated by the dhcp service to be the default gateway.
     */
    public readonly dhcpGateway!: pulumi.Output<string | undefined>;
    /**
     * The general IP Range configured for this network (/24 for private networks). If it is not set, gridscale internal
     * default range is used. If it is not set and DHCP is enabled, dhcp_range will be set by the backend automatically.
     */
    public readonly dhcpRange!: pulumi.Output<string>;
    /**
     * Subrange within the IP range.
     */
    public readonly dhcpReservedSubnets!: pulumi.Output<string[] | undefined>;
    /**
     * MAC spoofing protection - filters layer2 and ARP traffic based on source MAC
     */
    public readonly l2security!: pulumi.Output<boolean | undefined>;
    /**
     * List of labels.
     */
    public readonly labels!: pulumi.Output<string[] | undefined>;
    /**
     * Two digit country code (ISO 3166-2) of the location where this object is placed.
     */
    public /*out*/ readonly locationCountry!: pulumi.Output<string>;
    /**
     * Uses IATA airport code, which works as a location identifier
     */
    public /*out*/ readonly locationIata!: pulumi.Output<string>;
    /**
     * The human-readable name of the location. It supports the full UTF-8 character set, with a maximum of 64 characters
     */
    public /*out*/ readonly locationName!: pulumi.Output<string>;
    /**
     * The location this object is placed.
     */
    public /*out*/ readonly locationUuid!: pulumi.Output<string>;
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The type of this network, can be mpls, breakout or network.
     */
    public /*out*/ readonly networkType!: pulumi.Output<string>;
    /**
     * A list of server UUIDs with the corresponding IPs that are designated by the user.
     */
    public /*out*/ readonly pinnedServers!: pulumi.Output<outputs.NetworkPinnedServer[]>;
    /**
     * status indicates the status of the object.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.NetworkTimeouts | undefined>;

    /**
     * Create a Network resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: NetworkArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NetworkArgs | NetworkState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NetworkState | undefined;
            resourceInputs["autoAssignedServers"] = state ? state.autoAssignedServers : undefined;
            resourceInputs["changeTime"] = state ? state.changeTime : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["deleteBlock"] = state ? state.deleteBlock : undefined;
            resourceInputs["dhcpActive"] = state ? state.dhcpActive : undefined;
            resourceInputs["dhcpDns"] = state ? state.dhcpDns : undefined;
            resourceInputs["dhcpGateway"] = state ? state.dhcpGateway : undefined;
            resourceInputs["dhcpRange"] = state ? state.dhcpRange : undefined;
            resourceInputs["dhcpReservedSubnets"] = state ? state.dhcpReservedSubnets : undefined;
            resourceInputs["l2security"] = state ? state.l2security : undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["locationCountry"] = state ? state.locationCountry : undefined;
            resourceInputs["locationIata"] = state ? state.locationIata : undefined;
            resourceInputs["locationName"] = state ? state.locationName : undefined;
            resourceInputs["locationUuid"] = state ? state.locationUuid : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["networkType"] = state ? state.networkType : undefined;
            resourceInputs["pinnedServers"] = state ? state.pinnedServers : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as NetworkArgs | undefined;
            resourceInputs["dhcpActive"] = args ? args.dhcpActive : undefined;
            resourceInputs["dhcpDns"] = args ? args.dhcpDns : undefined;
            resourceInputs["dhcpGateway"] = args ? args.dhcpGateway : undefined;
            resourceInputs["dhcpRange"] = args ? args.dhcpRange : undefined;
            resourceInputs["dhcpReservedSubnets"] = args ? args.dhcpReservedSubnets : undefined;
            resourceInputs["l2security"] = args ? args.l2security : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["autoAssignedServers"] = undefined /*out*/;
            resourceInputs["changeTime"] = undefined /*out*/;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["deleteBlock"] = undefined /*out*/;
            resourceInputs["locationCountry"] = undefined /*out*/;
            resourceInputs["locationIata"] = undefined /*out*/;
            resourceInputs["locationName"] = undefined /*out*/;
            resourceInputs["locationUuid"] = undefined /*out*/;
            resourceInputs["networkType"] = undefined /*out*/;
            resourceInputs["pinnedServers"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Network.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Network resources.
 */
export interface NetworkState {
    /**
     * A list of server UUIDs with the corresponding IPs that are designated by the DHCP server.
     */
    autoAssignedServers?: pulumi.Input<pulumi.Input<inputs.NetworkAutoAssignedServer>[]>;
    /**
     * The date and time of the last object change
     */
    changeTime?: pulumi.Input<string>;
    /**
     * The date and time the object was initially created
     */
    createTime?: pulumi.Input<string>;
    /**
     * If deleting this network is allowed
     */
    deleteBlock?: pulumi.Input<boolean>;
    /**
     * Enable DHCP.
     */
    dhcpActive?: pulumi.Input<boolean>;
    /**
     * DHCP DNS.
     */
    dhcpDns?: pulumi.Input<string>;
    /**
     * The IP address reserved and communicated by the dhcp service to be the default gateway.
     */
    dhcpGateway?: pulumi.Input<string>;
    /**
     * The general IP Range configured for this network (/24 for private networks). If it is not set, gridscale internal
     * default range is used. If it is not set and DHCP is enabled, dhcp_range will be set by the backend automatically.
     */
    dhcpRange?: pulumi.Input<string>;
    /**
     * Subrange within the IP range.
     */
    dhcpReservedSubnets?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * MAC spoofing protection - filters layer2 and ARP traffic based on source MAC
     */
    l2security?: pulumi.Input<boolean>;
    /**
     * List of labels.
     */
    labels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Two digit country code (ISO 3166-2) of the location where this object is placed.
     */
    locationCountry?: pulumi.Input<string>;
    /**
     * Uses IATA airport code, which works as a location identifier
     */
    locationIata?: pulumi.Input<string>;
    /**
     * The human-readable name of the location. It supports the full UTF-8 character set, with a maximum of 64 characters
     */
    locationName?: pulumi.Input<string>;
    /**
     * The location this object is placed.
     */
    locationUuid?: pulumi.Input<string>;
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    name?: pulumi.Input<string>;
    /**
     * The type of this network, can be mpls, breakout or network.
     */
    networkType?: pulumi.Input<string>;
    /**
     * A list of server UUIDs with the corresponding IPs that are designated by the user.
     */
    pinnedServers?: pulumi.Input<pulumi.Input<inputs.NetworkPinnedServer>[]>;
    /**
     * status indicates the status of the object.
     */
    status?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.NetworkTimeouts>;
}

/**
 * The set of arguments for constructing a Network resource.
 */
export interface NetworkArgs {
    /**
     * Enable DHCP.
     */
    dhcpActive?: pulumi.Input<boolean>;
    /**
     * DHCP DNS.
     */
    dhcpDns?: pulumi.Input<string>;
    /**
     * The IP address reserved and communicated by the dhcp service to be the default gateway.
     */
    dhcpGateway?: pulumi.Input<string>;
    /**
     * The general IP Range configured for this network (/24 for private networks). If it is not set, gridscale internal
     * default range is used. If it is not set and DHCP is enabled, dhcp_range will be set by the backend automatically.
     */
    dhcpRange?: pulumi.Input<string>;
    /**
     * Subrange within the IP range.
     */
    dhcpReservedSubnets?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * MAC spoofing protection - filters layer2 and ARP traffic based on source MAC
     */
    l2security?: pulumi.Input<boolean>;
    /**
     * List of labels.
     */
    labels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
     */
    name?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.NetworkTimeouts>;
}
