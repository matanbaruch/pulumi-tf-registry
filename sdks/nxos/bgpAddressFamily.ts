// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class BgpAddressFamily extends pulumi.CustomResource {
    /**
     * Get an existing BgpAddressFamily resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BgpAddressFamilyState, opts?: pulumi.CustomResourceOptions): BgpAddressFamily {
        return new BgpAddressFamily(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'nxos:index/bgpAddressFamily:BgpAddressFamily';

    /**
     * Returns true if the given object is an instance of BgpAddressFamily.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BgpAddressFamily {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BgpAddressFamily.__pulumiType;
    }

    /**
     * Address Family. - Choices: `ipv4-ucast`, `ipv4-mcast`, `vpnv4-ucast`, `ipv6-ucast`, `ipv6-mcast`, `vpnv6-ucast`,
     * `vpnv6-mcast`, `l2vpn-evpn`, `ipv4-lucast`, `ipv6-lucast`, `lnkstate`, `ipv4-mvpn`, `ipv6-mvpn`, `l2vpn-vpls`,
     * `ipv4-mdt` - Default value: `ipv4-ucast`
     */
    public readonly addressFamily!: pulumi.Output<string>;
    /**
     * Autonomous system number.
     */
    public readonly asn!: pulumi.Output<string>;
    /**
     * The next-hop address tracking delay timer for critical next-hop reachability routes. - Range: `1`-`4294967295` - Default
     * value: `3000`
     */
    public readonly criticalNexthopTimeout!: pulumi.Output<number>;
    /**
     * A device name from the provider configuration.
     */
    public readonly device!: pulumi.Output<string | undefined>;
    /**
     * The next-hop address tracking delay timer for non-critical next-hop reachability routes. - Range: `1`-`4294967295` -
     * Default value: `10000`
     */
    public readonly nonCriticalNexthopTimeout!: pulumi.Output<number>;
    /**
     * VRF name.
     */
    public readonly vrf!: pulumi.Output<string>;

    /**
     * Create a BgpAddressFamily resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BgpAddressFamilyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BgpAddressFamilyArgs | BgpAddressFamilyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as BgpAddressFamilyState | undefined;
            resourceInputs["addressFamily"] = state ? state.addressFamily : undefined;
            resourceInputs["asn"] = state ? state.asn : undefined;
            resourceInputs["criticalNexthopTimeout"] = state ? state.criticalNexthopTimeout : undefined;
            resourceInputs["device"] = state ? state.device : undefined;
            resourceInputs["nonCriticalNexthopTimeout"] = state ? state.nonCriticalNexthopTimeout : undefined;
            resourceInputs["vrf"] = state ? state.vrf : undefined;
        } else {
            const args = argsOrState as BgpAddressFamilyArgs | undefined;
            if ((!args || args.addressFamily === undefined) && !opts.urn) {
                throw new Error("Missing required property 'addressFamily'");
            }
            if ((!args || args.asn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'asn'");
            }
            if ((!args || args.vrf === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vrf'");
            }
            resourceInputs["addressFamily"] = args ? args.addressFamily : undefined;
            resourceInputs["asn"] = args ? args.asn : undefined;
            resourceInputs["criticalNexthopTimeout"] = args ? args.criticalNexthopTimeout : undefined;
            resourceInputs["device"] = args ? args.device : undefined;
            resourceInputs["nonCriticalNexthopTimeout"] = args ? args.nonCriticalNexthopTimeout : undefined;
            resourceInputs["vrf"] = args ? args.vrf : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(BgpAddressFamily.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering BgpAddressFamily resources.
 */
export interface BgpAddressFamilyState {
    /**
     * Address Family. - Choices: `ipv4-ucast`, `ipv4-mcast`, `vpnv4-ucast`, `ipv6-ucast`, `ipv6-mcast`, `vpnv6-ucast`,
     * `vpnv6-mcast`, `l2vpn-evpn`, `ipv4-lucast`, `ipv6-lucast`, `lnkstate`, `ipv4-mvpn`, `ipv6-mvpn`, `l2vpn-vpls`,
     * `ipv4-mdt` - Default value: `ipv4-ucast`
     */
    addressFamily?: pulumi.Input<string>;
    /**
     * Autonomous system number.
     */
    asn?: pulumi.Input<string>;
    /**
     * The next-hop address tracking delay timer for critical next-hop reachability routes. - Range: `1`-`4294967295` - Default
     * value: `3000`
     */
    criticalNexthopTimeout?: pulumi.Input<number>;
    /**
     * A device name from the provider configuration.
     */
    device?: pulumi.Input<string>;
    /**
     * The next-hop address tracking delay timer for non-critical next-hop reachability routes. - Range: `1`-`4294967295` -
     * Default value: `10000`
     */
    nonCriticalNexthopTimeout?: pulumi.Input<number>;
    /**
     * VRF name.
     */
    vrf?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a BgpAddressFamily resource.
 */
export interface BgpAddressFamilyArgs {
    /**
     * Address Family. - Choices: `ipv4-ucast`, `ipv4-mcast`, `vpnv4-ucast`, `ipv6-ucast`, `ipv6-mcast`, `vpnv6-ucast`,
     * `vpnv6-mcast`, `l2vpn-evpn`, `ipv4-lucast`, `ipv6-lucast`, `lnkstate`, `ipv4-mvpn`, `ipv6-mvpn`, `l2vpn-vpls`,
     * `ipv4-mdt` - Default value: `ipv4-ucast`
     */
    addressFamily: pulumi.Input<string>;
    /**
     * Autonomous system number.
     */
    asn: pulumi.Input<string>;
    /**
     * The next-hop address tracking delay timer for critical next-hop reachability routes. - Range: `1`-`4294967295` - Default
     * value: `3000`
     */
    criticalNexthopTimeout?: pulumi.Input<number>;
    /**
     * A device name from the provider configuration.
     */
    device?: pulumi.Input<string>;
    /**
     * The next-hop address tracking delay timer for non-critical next-hop reachability routes. - Range: `1`-`4294967295` -
     * Default value: `10000`
     */
    nonCriticalNexthopTimeout?: pulumi.Input<number>;
    /**
     * VRF name.
     */
    vrf: pulumi.Input<string>;
}
