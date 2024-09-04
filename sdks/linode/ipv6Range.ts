// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Ipv6Range extends pulumi.CustomResource {
    /**
     * Get an existing Ipv6Range resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Ipv6RangeState, opts?: pulumi.CustomResourceOptions): Ipv6Range {
        return new Ipv6Range(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'linode:index/ipv6Range:Ipv6Range';

    /**
     * Returns true if the given object is an instance of Ipv6Range.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Ipv6Range {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Ipv6Range.__pulumiType;
    }

    /**
     * Whether this IPv6 range is shared.
     */
    public /*out*/ readonly isBgp!: pulumi.Output<boolean>;
    /**
     * The ID of the Linode to assign this range to.
     */
    public readonly linodeId!: pulumi.Output<number | undefined>;
    /**
     * A list of Linodes targeted by this IPv6 range.Includes Linodes with IP sharing.
     */
    public /*out*/ readonly linodes!: pulumi.Output<number[]>;
    /**
     * The prefix length of the IPv6 range.
     */
    public readonly prefixLength!: pulumi.Output<number>;
    /**
     * The IPv6 range of addresses in this pool.
     */
    public /*out*/ readonly range!: pulumi.Output<string>;
    /**
     * The region for this range of IPv6 addresses.
     */
    public /*out*/ readonly region!: pulumi.Output<string>;
    /**
     * The IPv6 SLAAC address to assign this range to.
     */
    public readonly routeTarget!: pulumi.Output<string>;

    /**
     * Create a Ipv6Range resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: Ipv6RangeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Ipv6RangeArgs | Ipv6RangeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Ipv6RangeState | undefined;
            resourceInputs["isBgp"] = state ? state.isBgp : undefined;
            resourceInputs["linodeId"] = state ? state.linodeId : undefined;
            resourceInputs["linodes"] = state ? state.linodes : undefined;
            resourceInputs["prefixLength"] = state ? state.prefixLength : undefined;
            resourceInputs["range"] = state ? state.range : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["routeTarget"] = state ? state.routeTarget : undefined;
        } else {
            const args = argsOrState as Ipv6RangeArgs | undefined;
            if ((!args || args.prefixLength === undefined) && !opts.urn) {
                throw new Error("Missing required property 'prefixLength'");
            }
            resourceInputs["linodeId"] = args ? args.linodeId : undefined;
            resourceInputs["prefixLength"] = args ? args.prefixLength : undefined;
            resourceInputs["routeTarget"] = args ? args.routeTarget : undefined;
            resourceInputs["isBgp"] = undefined /*out*/;
            resourceInputs["linodes"] = undefined /*out*/;
            resourceInputs["range"] = undefined /*out*/;
            resourceInputs["region"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Ipv6Range.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Ipv6Range resources.
 */
export interface Ipv6RangeState {
    /**
     * Whether this IPv6 range is shared.
     */
    isBgp?: pulumi.Input<boolean>;
    /**
     * The ID of the Linode to assign this range to.
     */
    linodeId?: pulumi.Input<number>;
    /**
     * A list of Linodes targeted by this IPv6 range.Includes Linodes with IP sharing.
     */
    linodes?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * The prefix length of the IPv6 range.
     */
    prefixLength?: pulumi.Input<number>;
    /**
     * The IPv6 range of addresses in this pool.
     */
    range?: pulumi.Input<string>;
    /**
     * The region for this range of IPv6 addresses.
     */
    region?: pulumi.Input<string>;
    /**
     * The IPv6 SLAAC address to assign this range to.
     */
    routeTarget?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Ipv6Range resource.
 */
export interface Ipv6RangeArgs {
    /**
     * The ID of the Linode to assign this range to.
     */
    linodeId?: pulumi.Input<number>;
    /**
     * The prefix length of the IPv6 range.
     */
    prefixLength: pulumi.Input<number>;
    /**
     * The IPv6 SLAAC address to assign this range to.
     */
    routeTarget?: pulumi.Input<string>;
}
