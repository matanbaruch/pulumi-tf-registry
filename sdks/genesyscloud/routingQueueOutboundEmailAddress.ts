// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class RoutingQueueOutboundEmailAddress extends pulumi.CustomResource {
    /**
     * Get an existing RoutingQueueOutboundEmailAddress resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RoutingQueueOutboundEmailAddressState, opts?: pulumi.CustomResourceOptions): RoutingQueueOutboundEmailAddress {
        return new RoutingQueueOutboundEmailAddress(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'genesyscloud:index/routingQueueOutboundEmailAddress:RoutingQueueOutboundEmailAddress';

    /**
     * Returns true if the given object is an instance of RoutingQueueOutboundEmailAddress.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RoutingQueueOutboundEmailAddress {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RoutingQueueOutboundEmailAddress.__pulumiType;
    }

    /**
     * Unique ID of the email domain. e.g. "test.example.com"
     */
    public readonly domainId!: pulumi.Output<string>;
    /**
     * The routing queue to which the outbound email address is for.
     */
    public readonly queueId!: pulumi.Output<string>;
    /**
     * Unique ID of the email route.
     */
    public readonly routeId!: pulumi.Output<string>;

    /**
     * Create a RoutingQueueOutboundEmailAddress resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RoutingQueueOutboundEmailAddressArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RoutingQueueOutboundEmailAddressArgs | RoutingQueueOutboundEmailAddressState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RoutingQueueOutboundEmailAddressState | undefined;
            resourceInputs["domainId"] = state ? state.domainId : undefined;
            resourceInputs["queueId"] = state ? state.queueId : undefined;
            resourceInputs["routeId"] = state ? state.routeId : undefined;
        } else {
            const args = argsOrState as RoutingQueueOutboundEmailAddressArgs | undefined;
            if ((!args || args.domainId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'domainId'");
            }
            if ((!args || args.queueId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'queueId'");
            }
            if ((!args || args.routeId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'routeId'");
            }
            resourceInputs["domainId"] = args ? args.domainId : undefined;
            resourceInputs["queueId"] = args ? args.queueId : undefined;
            resourceInputs["routeId"] = args ? args.routeId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RoutingQueueOutboundEmailAddress.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RoutingQueueOutboundEmailAddress resources.
 */
export interface RoutingQueueOutboundEmailAddressState {
    /**
     * Unique ID of the email domain. e.g. "test.example.com"
     */
    domainId?: pulumi.Input<string>;
    /**
     * The routing queue to which the outbound email address is for.
     */
    queueId?: pulumi.Input<string>;
    /**
     * Unique ID of the email route.
     */
    routeId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a RoutingQueueOutboundEmailAddress resource.
 */
export interface RoutingQueueOutboundEmailAddressArgs {
    /**
     * Unique ID of the email domain. e.g. "test.example.com"
     */
    domainId: pulumi.Input<string>;
    /**
     * The routing queue to which the outbound email address is for.
     */
    queueId: pulumi.Input<string>;
    /**
     * Unique ID of the email route.
     */
    routeId: pulumi.Input<string>;
}
