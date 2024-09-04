// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class IpNatRangeList extends pulumi.CustomResource {
    /**
     * Get an existing IpNatRangeList resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IpNatRangeListState, opts?: pulumi.CustomResourceOptions): IpNatRangeList {
        return new IpNatRangeList(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/ipNatRangeList:IpNatRangeList';

    /**
     * Returns true if the given object is an instance of IpNatRangeList.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IpNatRangeList {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IpNatRangeList.__pulumiType;
    }

    /**
     * Mask for this Address range
     */
    public readonly globalNetmaskv4!: pulumi.Output<string | undefined>;
    /**
     * Global Start IPv4 Address of this list
     */
    public readonly globalStartIpv4Addr!: pulumi.Output<string | undefined>;
    /**
     * Global Start IPv6 Address of this list
     */
    public readonly globalStartIpv6Addr!: pulumi.Output<string | undefined>;
    /**
     * Mask for this Address range
     */
    public readonly localNetmaskv4!: pulumi.Output<string | undefined>;
    /**
     * Local Start IPv4 Address of this list
     */
    public readonly localStartIpv4Addr!: pulumi.Output<string | undefined>;
    /**
     * Local Start IPv6 Address of this list
     */
    public readonly localStartIpv6Addr!: pulumi.Output<string | undefined>;
    /**
     * Name for this Static List
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;
    /**
     * Access list ID
     */
    public readonly v4AclId!: pulumi.Output<number | undefined>;
    /**
     * Access list name
     */
    public readonly v4AclName!: pulumi.Output<string | undefined>;
    /**
     * Number of addresses to be translated in this range
     */
    public readonly v4Count!: pulumi.Output<number | undefined>;
    /**
     * VRRP-A vrid (Specify ha VRRP-A vrid)
     */
    public readonly v4Vrid!: pulumi.Output<number | undefined>;
    /**
     * Access list name
     */
    public readonly v6AclName!: pulumi.Output<string | undefined>;
    /**
     * Number of addresses to be translated in this range
     */
    public readonly v6Count!: pulumi.Output<number | undefined>;
    /**
     * VRRP-A vrid (Specify ha VRRP-A vrid)
     */
    public readonly v6Vrid!: pulumi.Output<number | undefined>;

    /**
     * Create a IpNatRangeList resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: IpNatRangeListArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IpNatRangeListArgs | IpNatRangeListState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IpNatRangeListState | undefined;
            resourceInputs["globalNetmaskv4"] = state ? state.globalNetmaskv4 : undefined;
            resourceInputs["globalStartIpv4Addr"] = state ? state.globalStartIpv4Addr : undefined;
            resourceInputs["globalStartIpv6Addr"] = state ? state.globalStartIpv6Addr : undefined;
            resourceInputs["localNetmaskv4"] = state ? state.localNetmaskv4 : undefined;
            resourceInputs["localStartIpv4Addr"] = state ? state.localStartIpv4Addr : undefined;
            resourceInputs["localStartIpv6Addr"] = state ? state.localStartIpv6Addr : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
            resourceInputs["v4AclId"] = state ? state.v4AclId : undefined;
            resourceInputs["v4AclName"] = state ? state.v4AclName : undefined;
            resourceInputs["v4Count"] = state ? state.v4Count : undefined;
            resourceInputs["v4Vrid"] = state ? state.v4Vrid : undefined;
            resourceInputs["v6AclName"] = state ? state.v6AclName : undefined;
            resourceInputs["v6Count"] = state ? state.v6Count : undefined;
            resourceInputs["v6Vrid"] = state ? state.v6Vrid : undefined;
        } else {
            const args = argsOrState as IpNatRangeListArgs | undefined;
            resourceInputs["globalNetmaskv4"] = args ? args.globalNetmaskv4 : undefined;
            resourceInputs["globalStartIpv4Addr"] = args ? args.globalStartIpv4Addr : undefined;
            resourceInputs["globalStartIpv6Addr"] = args ? args.globalStartIpv6Addr : undefined;
            resourceInputs["localNetmaskv4"] = args ? args.localNetmaskv4 : undefined;
            resourceInputs["localStartIpv4Addr"] = args ? args.localStartIpv4Addr : undefined;
            resourceInputs["localStartIpv6Addr"] = args ? args.localStartIpv6Addr : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
            resourceInputs["v4AclId"] = args ? args.v4AclId : undefined;
            resourceInputs["v4AclName"] = args ? args.v4AclName : undefined;
            resourceInputs["v4Count"] = args ? args.v4Count : undefined;
            resourceInputs["v4Vrid"] = args ? args.v4Vrid : undefined;
            resourceInputs["v6AclName"] = args ? args.v6AclName : undefined;
            resourceInputs["v6Count"] = args ? args.v6Count : undefined;
            resourceInputs["v6Vrid"] = args ? args.v6Vrid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IpNatRangeList.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IpNatRangeList resources.
 */
export interface IpNatRangeListState {
    /**
     * Mask for this Address range
     */
    globalNetmaskv4?: pulumi.Input<string>;
    /**
     * Global Start IPv4 Address of this list
     */
    globalStartIpv4Addr?: pulumi.Input<string>;
    /**
     * Global Start IPv6 Address of this list
     */
    globalStartIpv6Addr?: pulumi.Input<string>;
    /**
     * Mask for this Address range
     */
    localNetmaskv4?: pulumi.Input<string>;
    /**
     * Local Start IPv4 Address of this list
     */
    localStartIpv4Addr?: pulumi.Input<string>;
    /**
     * Local Start IPv6 Address of this list
     */
    localStartIpv6Addr?: pulumi.Input<string>;
    /**
     * Name for this Static List
     */
    name?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    /**
     * Access list ID
     */
    v4AclId?: pulumi.Input<number>;
    /**
     * Access list name
     */
    v4AclName?: pulumi.Input<string>;
    /**
     * Number of addresses to be translated in this range
     */
    v4Count?: pulumi.Input<number>;
    /**
     * VRRP-A vrid (Specify ha VRRP-A vrid)
     */
    v4Vrid?: pulumi.Input<number>;
    /**
     * Access list name
     */
    v6AclName?: pulumi.Input<string>;
    /**
     * Number of addresses to be translated in this range
     */
    v6Count?: pulumi.Input<number>;
    /**
     * VRRP-A vrid (Specify ha VRRP-A vrid)
     */
    v6Vrid?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a IpNatRangeList resource.
 */
export interface IpNatRangeListArgs {
    /**
     * Mask for this Address range
     */
    globalNetmaskv4?: pulumi.Input<string>;
    /**
     * Global Start IPv4 Address of this list
     */
    globalStartIpv4Addr?: pulumi.Input<string>;
    /**
     * Global Start IPv6 Address of this list
     */
    globalStartIpv6Addr?: pulumi.Input<string>;
    /**
     * Mask for this Address range
     */
    localNetmaskv4?: pulumi.Input<string>;
    /**
     * Local Start IPv4 Address of this list
     */
    localStartIpv4Addr?: pulumi.Input<string>;
    /**
     * Local Start IPv6 Address of this list
     */
    localStartIpv6Addr?: pulumi.Input<string>;
    /**
     * Name for this Static List
     */
    name?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    /**
     * Access list ID
     */
    v4AclId?: pulumi.Input<number>;
    /**
     * Access list name
     */
    v4AclName?: pulumi.Input<string>;
    /**
     * Number of addresses to be translated in this range
     */
    v4Count?: pulumi.Input<number>;
    /**
     * VRRP-A vrid (Specify ha VRRP-A vrid)
     */
    v4Vrid?: pulumi.Input<number>;
    /**
     * Access list name
     */
    v6AclName?: pulumi.Input<string>;
    /**
     * Number of addresses to be translated in this range
     */
    v6Count?: pulumi.Input<number>;
    /**
     * VRRP-A vrid (Specify ha VRRP-A vrid)
     */
    v6Vrid?: pulumi.Input<number>;
}
