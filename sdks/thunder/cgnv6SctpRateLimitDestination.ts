// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Cgnv6SctpRateLimitDestination extends pulumi.CustomResource {
    /**
     * Get an existing Cgnv6SctpRateLimitDestination resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Cgnv6SctpRateLimitDestinationState, opts?: pulumi.CustomResourceOptions): Cgnv6SctpRateLimitDestination {
        return new Cgnv6SctpRateLimitDestination(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/cgnv6SctpRateLimitDestination:Cgnv6SctpRateLimitDestination';

    /**
     * Returns true if the given object is an instance of Cgnv6SctpRateLimitDestination.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Cgnv6SctpRateLimitDestination {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Cgnv6SctpRateLimitDestination.__pulumiType;
    }

    /**
     * IP address
     */
    public readonly ip!: pulumi.Output<string>;
    /**
     * Rate limit in packets per second
     */
    public readonly rateLimit!: pulumi.Output<number | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a Cgnv6SctpRateLimitDestination resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: Cgnv6SctpRateLimitDestinationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Cgnv6SctpRateLimitDestinationArgs | Cgnv6SctpRateLimitDestinationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Cgnv6SctpRateLimitDestinationState | undefined;
            resourceInputs["ip"] = state ? state.ip : undefined;
            resourceInputs["rateLimit"] = state ? state.rateLimit : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as Cgnv6SctpRateLimitDestinationArgs | undefined;
            if ((!args || args.ip === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ip'");
            }
            resourceInputs["ip"] = args ? args.ip : undefined;
            resourceInputs["rateLimit"] = args ? args.rateLimit : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Cgnv6SctpRateLimitDestination.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Cgnv6SctpRateLimitDestination resources.
 */
export interface Cgnv6SctpRateLimitDestinationState {
    /**
     * IP address
     */
    ip?: pulumi.Input<string>;
    /**
     * Rate limit in packets per second
     */
    rateLimit?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Cgnv6SctpRateLimitDestination resource.
 */
export interface Cgnv6SctpRateLimitDestinationArgs {
    /**
     * IP address
     */
    ip: pulumi.Input<string>;
    /**
     * Rate limit in packets per second
     */
    rateLimit?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
