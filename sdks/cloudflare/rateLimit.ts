// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class RateLimit extends pulumi.CustomResource {
    /**
     * Get an existing RateLimit resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RateLimitState, opts?: pulumi.CustomResourceOptions): RateLimit {
        return new RateLimit(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'cloudflare:index/rateLimit:RateLimit';

    /**
     * Returns true if the given object is an instance of RateLimit.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RateLimit {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RateLimit.__pulumiType;
    }

    /**
     * The action to be performed when the threshold of matched traffic within the period defined is exceeded.
     */
    public readonly action!: pulumi.Output<outputs.RateLimitAction>;
    public readonly bypassUrlPatterns!: pulumi.Output<string[] | undefined>;
    /**
     * Determines how rate limiting is applied. By default if not specified, rate limiting applies to the clients IP address.
     */
    public readonly correlate!: pulumi.Output<outputs.RateLimitCorrelate | undefined>;
    /**
     * A note that you can use to describe the reason for a rate limit. This value is sanitized and all tags are removed.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Whether this ratelimit is currently disabled. Defaults to `false`.
     */
    public readonly disabled!: pulumi.Output<boolean | undefined>;
    /**
     * Determines which traffic the rate limit counts towards the threshold. By default matches all traffic in the zone.
     */
    public readonly match!: pulumi.Output<outputs.RateLimitMatch | undefined>;
    /**
     * The time in seconds to count matching traffic. If the count exceeds threshold within this period the action will be
     * performed.
     */
    public readonly period!: pulumi.Output<number>;
    /**
     * The threshold that triggers the rate limit mitigations, combine with period.
     */
    public readonly threshold!: pulumi.Output<number>;
    /**
     * The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**
     */
    public readonly zoneId!: pulumi.Output<string>;

    /**
     * Create a RateLimit resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RateLimitArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RateLimitArgs | RateLimitState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RateLimitState | undefined;
            resourceInputs["action"] = state ? state.action : undefined;
            resourceInputs["bypassUrlPatterns"] = state ? state.bypassUrlPatterns : undefined;
            resourceInputs["correlate"] = state ? state.correlate : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["match"] = state ? state.match : undefined;
            resourceInputs["period"] = state ? state.period : undefined;
            resourceInputs["threshold"] = state ? state.threshold : undefined;
            resourceInputs["zoneId"] = state ? state.zoneId : undefined;
        } else {
            const args = argsOrState as RateLimitArgs | undefined;
            if ((!args || args.action === undefined) && !opts.urn) {
                throw new Error("Missing required property 'action'");
            }
            if ((!args || args.period === undefined) && !opts.urn) {
                throw new Error("Missing required property 'period'");
            }
            if ((!args || args.threshold === undefined) && !opts.urn) {
                throw new Error("Missing required property 'threshold'");
            }
            if ((!args || args.zoneId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'zoneId'");
            }
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["bypassUrlPatterns"] = args ? args.bypassUrlPatterns : undefined;
            resourceInputs["correlate"] = args ? args.correlate : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["match"] = args ? args.match : undefined;
            resourceInputs["period"] = args ? args.period : undefined;
            resourceInputs["threshold"] = args ? args.threshold : undefined;
            resourceInputs["zoneId"] = args ? args.zoneId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RateLimit.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RateLimit resources.
 */
export interface RateLimitState {
    /**
     * The action to be performed when the threshold of matched traffic within the period defined is exceeded.
     */
    action?: pulumi.Input<inputs.RateLimitAction>;
    bypassUrlPatterns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Determines how rate limiting is applied. By default if not specified, rate limiting applies to the clients IP address.
     */
    correlate?: pulumi.Input<inputs.RateLimitCorrelate>;
    /**
     * A note that you can use to describe the reason for a rate limit. This value is sanitized and all tags are removed.
     */
    description?: pulumi.Input<string>;
    /**
     * Whether this ratelimit is currently disabled. Defaults to `false`.
     */
    disabled?: pulumi.Input<boolean>;
    /**
     * Determines which traffic the rate limit counts towards the threshold. By default matches all traffic in the zone.
     */
    match?: pulumi.Input<inputs.RateLimitMatch>;
    /**
     * The time in seconds to count matching traffic. If the count exceeds threshold within this period the action will be
     * performed.
     */
    period?: pulumi.Input<number>;
    /**
     * The threshold that triggers the rate limit mitigations, combine with period.
     */
    threshold?: pulumi.Input<number>;
    /**
     * The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**
     */
    zoneId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a RateLimit resource.
 */
export interface RateLimitArgs {
    /**
     * The action to be performed when the threshold of matched traffic within the period defined is exceeded.
     */
    action: pulumi.Input<inputs.RateLimitAction>;
    bypassUrlPatterns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Determines how rate limiting is applied. By default if not specified, rate limiting applies to the clients IP address.
     */
    correlate?: pulumi.Input<inputs.RateLimitCorrelate>;
    /**
     * A note that you can use to describe the reason for a rate limit. This value is sanitized and all tags are removed.
     */
    description?: pulumi.Input<string>;
    /**
     * Whether this ratelimit is currently disabled. Defaults to `false`.
     */
    disabled?: pulumi.Input<boolean>;
    /**
     * Determines which traffic the rate limit counts towards the threshold. By default matches all traffic in the zone.
     */
    match?: pulumi.Input<inputs.RateLimitMatch>;
    /**
     * The time in seconds to count matching traffic. If the count exceeds threshold within this period the action will be
     * performed.
     */
    period: pulumi.Input<number>;
    /**
     * The threshold that triggers the rate limit mitigations, combine with period.
     */
    threshold: pulumi.Input<number>;
    /**
     * The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**
     */
    zoneId: pulumi.Input<string>;
}
