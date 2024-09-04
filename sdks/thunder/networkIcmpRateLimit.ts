// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class NetworkIcmpRateLimit extends pulumi.CustomResource {
    /**
     * Get an existing NetworkIcmpRateLimit resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetworkIcmpRateLimitState, opts?: pulumi.CustomResourceOptions): NetworkIcmpRateLimit {
        return new NetworkIcmpRateLimit(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/networkIcmpRateLimit:NetworkIcmpRateLimit';

    /**
     * Returns true if the given object is an instance of NetworkIcmpRateLimit.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkIcmpRateLimit {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkIcmpRateLimit.__pulumiType;
    }

    /**
     * Enter lockup state when ICMP rate exceeds lockup rate limit (Maximum rate limit. If exceeds this limit, drop all ICMP
     * packet for a time period)
     */
    public readonly icmpLockup!: pulumi.Output<number | undefined>;
    /**
     * Lockup period (second)
     */
    public readonly icmpLockupPeriod!: pulumi.Output<number | undefined>;
    /**
     * Normal rate limit. If exceeds this limit, drop the ICMP packet that goes over the limit
     */
    public readonly icmpNormalRateLimit!: pulumi.Output<number | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a NetworkIcmpRateLimit resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: NetworkIcmpRateLimitArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NetworkIcmpRateLimitArgs | NetworkIcmpRateLimitState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NetworkIcmpRateLimitState | undefined;
            resourceInputs["icmpLockup"] = state ? state.icmpLockup : undefined;
            resourceInputs["icmpLockupPeriod"] = state ? state.icmpLockupPeriod : undefined;
            resourceInputs["icmpNormalRateLimit"] = state ? state.icmpNormalRateLimit : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as NetworkIcmpRateLimitArgs | undefined;
            resourceInputs["icmpLockup"] = args ? args.icmpLockup : undefined;
            resourceInputs["icmpLockupPeriod"] = args ? args.icmpLockupPeriod : undefined;
            resourceInputs["icmpNormalRateLimit"] = args ? args.icmpNormalRateLimit : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NetworkIcmpRateLimit.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NetworkIcmpRateLimit resources.
 */
export interface NetworkIcmpRateLimitState {
    /**
     * Enter lockup state when ICMP rate exceeds lockup rate limit (Maximum rate limit. If exceeds this limit, drop all ICMP
     * packet for a time period)
     */
    icmpLockup?: pulumi.Input<number>;
    /**
     * Lockup period (second)
     */
    icmpLockupPeriod?: pulumi.Input<number>;
    /**
     * Normal rate limit. If exceeds this limit, drop the ICMP packet that goes over the limit
     */
    icmpNormalRateLimit?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a NetworkIcmpRateLimit resource.
 */
export interface NetworkIcmpRateLimitArgs {
    /**
     * Enter lockup state when ICMP rate exceeds lockup rate limit (Maximum rate limit. If exceeds this limit, drop all ICMP
     * packet for a time period)
     */
    icmpLockup?: pulumi.Input<number>;
    /**
     * Lockup period (second)
     */
    icmpLockupPeriod?: pulumi.Input<number>;
    /**
     * Normal rate limit. If exceeds this limit, drop the ICMP packet that goes over the limit
     */
    icmpNormalRateLimit?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
