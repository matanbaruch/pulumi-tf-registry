// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class TemplateGtpRateLimitPolicy extends pulumi.CustomResource {
    /**
     * Get an existing TemplateGtpRateLimitPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TemplateGtpRateLimitPolicyState, opts?: pulumi.CustomResourceOptions): TemplateGtpRateLimitPolicy {
        return new TemplateGtpRateLimitPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/templateGtpRateLimitPolicy:TemplateGtpRateLimitPolicy';

    /**
     * Returns true if the given object is an instance of TemplateGtpRateLimitPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TemplateGtpRateLimitPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TemplateGtpRateLimitPolicy.__pulumiType;
    }

    /**
     * Maximum allowed of rate of GTP-U bytes in downlink direction
     */
    public readonly gtpUDownlinkByteRate!: pulumi.Output<number | undefined>;
    /**
     * Maximum allowed of rate of GTP-U packets in downlink direction
     */
    public readonly gtpUDownlinkPacketRate!: pulumi.Output<number | undefined>;
    /**
     * Maximum allowed GTP-U tunnels per Peer/APN Filter
     */
    public readonly gtpUMaxConcurrentTunnels!: pulumi.Output<number | undefined>;
    /**
     * Maximum allowed of rate of GTP-U bytes total in both directions
     */
    public readonly gtpUTotalByteRate!: pulumi.Output<number | undefined>;
    /**
     * Maximum allowed of rate of GTP-U packets total in both directions
     */
    public readonly gtpUTotalPacketRate!: pulumi.Output<number | undefined>;
    /**
     * Maximum allowed of rate of GTP-U tunnels
     */
    public readonly gtpUTunnelCreateRate!: pulumi.Output<number | undefined>;
    /**
     * Maximum allowed of rate of GTP-U bytes in uplink direction
     */
    public readonly gtpUUplinkByteRate!: pulumi.Output<number | undefined>;
    /**
     * Maximum allowed of rate of GTP-U packets in uplink direction
     */
    public readonly gtpUUplinkPacketRate!: pulumi.Output<number | undefined>;
    /**
     * Lockout traffic from the source for a certain time period after rate exceeded (Lockout duration in minutes)
     */
    public readonly lockout!: pulumi.Output<number | undefined>;
    /**
     * Specify name of the GTP Rate Limit Policy
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * 'monitor': Forward packet exceeding limit; 'drop': drop packet exceeding limit(default);
     */
    public readonly rateLimitAction!: pulumi.Output<string | undefined>;
    /**
     * Customized tag
     */
    public readonly userTag!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;
    /**
     * Maximum allowed GTPv0-C message rate of all types
     */
    public readonly v0AggMessageTypeRate!: pulumi.Output<number | undefined>;
    /**
     * Maximum allowed GTPv1-C message rate of all types
     */
    public readonly v1AggMessageTypeRate!: pulumi.Output<number | undefined>;
    /**
     * Maximum allowed rate of GTPv1-C Create PDP Request message type
     */
    public readonly v1CreatePdpRequestRate!: pulumi.Output<number | undefined>;
    /**
     * Maximum allowed rate of GTPv1-C Update PDP Request message type
     */
    public readonly v1UpdatePdpRequestRate!: pulumi.Output<number | undefined>;
    /**
     * Maximum allowed GTPv2-C message rate of all types
     */
    public readonly v2AggMessageTypeRate!: pulumi.Output<number | undefined>;
    /**
     * Maximum allowed rate of GTPv2-C Create Session Request message type
     */
    public readonly v2CreateSessionRequestRate!: pulumi.Output<number | undefined>;
    /**
     * Maximum allowed rate of GTPv2-C Modify Bearer Request message type
     */
    public readonly v2ModifyBearerRequestRate!: pulumi.Output<number | undefined>;

    /**
     * Create a TemplateGtpRateLimitPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: TemplateGtpRateLimitPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TemplateGtpRateLimitPolicyArgs | TemplateGtpRateLimitPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TemplateGtpRateLimitPolicyState | undefined;
            resourceInputs["gtpUDownlinkByteRate"] = state ? state.gtpUDownlinkByteRate : undefined;
            resourceInputs["gtpUDownlinkPacketRate"] = state ? state.gtpUDownlinkPacketRate : undefined;
            resourceInputs["gtpUMaxConcurrentTunnels"] = state ? state.gtpUMaxConcurrentTunnels : undefined;
            resourceInputs["gtpUTotalByteRate"] = state ? state.gtpUTotalByteRate : undefined;
            resourceInputs["gtpUTotalPacketRate"] = state ? state.gtpUTotalPacketRate : undefined;
            resourceInputs["gtpUTunnelCreateRate"] = state ? state.gtpUTunnelCreateRate : undefined;
            resourceInputs["gtpUUplinkByteRate"] = state ? state.gtpUUplinkByteRate : undefined;
            resourceInputs["gtpUUplinkPacketRate"] = state ? state.gtpUUplinkPacketRate : undefined;
            resourceInputs["lockout"] = state ? state.lockout : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["rateLimitAction"] = state ? state.rateLimitAction : undefined;
            resourceInputs["userTag"] = state ? state.userTag : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
            resourceInputs["v0AggMessageTypeRate"] = state ? state.v0AggMessageTypeRate : undefined;
            resourceInputs["v1AggMessageTypeRate"] = state ? state.v1AggMessageTypeRate : undefined;
            resourceInputs["v1CreatePdpRequestRate"] = state ? state.v1CreatePdpRequestRate : undefined;
            resourceInputs["v1UpdatePdpRequestRate"] = state ? state.v1UpdatePdpRequestRate : undefined;
            resourceInputs["v2AggMessageTypeRate"] = state ? state.v2AggMessageTypeRate : undefined;
            resourceInputs["v2CreateSessionRequestRate"] = state ? state.v2CreateSessionRequestRate : undefined;
            resourceInputs["v2ModifyBearerRequestRate"] = state ? state.v2ModifyBearerRequestRate : undefined;
        } else {
            const args = argsOrState as TemplateGtpRateLimitPolicyArgs | undefined;
            resourceInputs["gtpUDownlinkByteRate"] = args ? args.gtpUDownlinkByteRate : undefined;
            resourceInputs["gtpUDownlinkPacketRate"] = args ? args.gtpUDownlinkPacketRate : undefined;
            resourceInputs["gtpUMaxConcurrentTunnels"] = args ? args.gtpUMaxConcurrentTunnels : undefined;
            resourceInputs["gtpUTotalByteRate"] = args ? args.gtpUTotalByteRate : undefined;
            resourceInputs["gtpUTotalPacketRate"] = args ? args.gtpUTotalPacketRate : undefined;
            resourceInputs["gtpUTunnelCreateRate"] = args ? args.gtpUTunnelCreateRate : undefined;
            resourceInputs["gtpUUplinkByteRate"] = args ? args.gtpUUplinkByteRate : undefined;
            resourceInputs["gtpUUplinkPacketRate"] = args ? args.gtpUUplinkPacketRate : undefined;
            resourceInputs["lockout"] = args ? args.lockout : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["rateLimitAction"] = args ? args.rateLimitAction : undefined;
            resourceInputs["userTag"] = args ? args.userTag : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
            resourceInputs["v0AggMessageTypeRate"] = args ? args.v0AggMessageTypeRate : undefined;
            resourceInputs["v1AggMessageTypeRate"] = args ? args.v1AggMessageTypeRate : undefined;
            resourceInputs["v1CreatePdpRequestRate"] = args ? args.v1CreatePdpRequestRate : undefined;
            resourceInputs["v1UpdatePdpRequestRate"] = args ? args.v1UpdatePdpRequestRate : undefined;
            resourceInputs["v2AggMessageTypeRate"] = args ? args.v2AggMessageTypeRate : undefined;
            resourceInputs["v2CreateSessionRequestRate"] = args ? args.v2CreateSessionRequestRate : undefined;
            resourceInputs["v2ModifyBearerRequestRate"] = args ? args.v2ModifyBearerRequestRate : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(TemplateGtpRateLimitPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering TemplateGtpRateLimitPolicy resources.
 */
export interface TemplateGtpRateLimitPolicyState {
    /**
     * Maximum allowed of rate of GTP-U bytes in downlink direction
     */
    gtpUDownlinkByteRate?: pulumi.Input<number>;
    /**
     * Maximum allowed of rate of GTP-U packets in downlink direction
     */
    gtpUDownlinkPacketRate?: pulumi.Input<number>;
    /**
     * Maximum allowed GTP-U tunnels per Peer/APN Filter
     */
    gtpUMaxConcurrentTunnels?: pulumi.Input<number>;
    /**
     * Maximum allowed of rate of GTP-U bytes total in both directions
     */
    gtpUTotalByteRate?: pulumi.Input<number>;
    /**
     * Maximum allowed of rate of GTP-U packets total in both directions
     */
    gtpUTotalPacketRate?: pulumi.Input<number>;
    /**
     * Maximum allowed of rate of GTP-U tunnels
     */
    gtpUTunnelCreateRate?: pulumi.Input<number>;
    /**
     * Maximum allowed of rate of GTP-U bytes in uplink direction
     */
    gtpUUplinkByteRate?: pulumi.Input<number>;
    /**
     * Maximum allowed of rate of GTP-U packets in uplink direction
     */
    gtpUUplinkPacketRate?: pulumi.Input<number>;
    /**
     * Lockout traffic from the source for a certain time period after rate exceeded (Lockout duration in minutes)
     */
    lockout?: pulumi.Input<number>;
    /**
     * Specify name of the GTP Rate Limit Policy
     */
    name?: pulumi.Input<string>;
    /**
     * 'monitor': Forward packet exceeding limit; 'drop': drop packet exceeding limit(default);
     */
    rateLimitAction?: pulumi.Input<string>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    /**
     * Maximum allowed GTPv0-C message rate of all types
     */
    v0AggMessageTypeRate?: pulumi.Input<number>;
    /**
     * Maximum allowed GTPv1-C message rate of all types
     */
    v1AggMessageTypeRate?: pulumi.Input<number>;
    /**
     * Maximum allowed rate of GTPv1-C Create PDP Request message type
     */
    v1CreatePdpRequestRate?: pulumi.Input<number>;
    /**
     * Maximum allowed rate of GTPv1-C Update PDP Request message type
     */
    v1UpdatePdpRequestRate?: pulumi.Input<number>;
    /**
     * Maximum allowed GTPv2-C message rate of all types
     */
    v2AggMessageTypeRate?: pulumi.Input<number>;
    /**
     * Maximum allowed rate of GTPv2-C Create Session Request message type
     */
    v2CreateSessionRequestRate?: pulumi.Input<number>;
    /**
     * Maximum allowed rate of GTPv2-C Modify Bearer Request message type
     */
    v2ModifyBearerRequestRate?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a TemplateGtpRateLimitPolicy resource.
 */
export interface TemplateGtpRateLimitPolicyArgs {
    /**
     * Maximum allowed of rate of GTP-U bytes in downlink direction
     */
    gtpUDownlinkByteRate?: pulumi.Input<number>;
    /**
     * Maximum allowed of rate of GTP-U packets in downlink direction
     */
    gtpUDownlinkPacketRate?: pulumi.Input<number>;
    /**
     * Maximum allowed GTP-U tunnels per Peer/APN Filter
     */
    gtpUMaxConcurrentTunnels?: pulumi.Input<number>;
    /**
     * Maximum allowed of rate of GTP-U bytes total in both directions
     */
    gtpUTotalByteRate?: pulumi.Input<number>;
    /**
     * Maximum allowed of rate of GTP-U packets total in both directions
     */
    gtpUTotalPacketRate?: pulumi.Input<number>;
    /**
     * Maximum allowed of rate of GTP-U tunnels
     */
    gtpUTunnelCreateRate?: pulumi.Input<number>;
    /**
     * Maximum allowed of rate of GTP-U bytes in uplink direction
     */
    gtpUUplinkByteRate?: pulumi.Input<number>;
    /**
     * Maximum allowed of rate of GTP-U packets in uplink direction
     */
    gtpUUplinkPacketRate?: pulumi.Input<number>;
    /**
     * Lockout traffic from the source for a certain time period after rate exceeded (Lockout duration in minutes)
     */
    lockout?: pulumi.Input<number>;
    /**
     * Specify name of the GTP Rate Limit Policy
     */
    name?: pulumi.Input<string>;
    /**
     * 'monitor': Forward packet exceeding limit; 'drop': drop packet exceeding limit(default);
     */
    rateLimitAction?: pulumi.Input<string>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    /**
     * Maximum allowed GTPv0-C message rate of all types
     */
    v0AggMessageTypeRate?: pulumi.Input<number>;
    /**
     * Maximum allowed GTPv1-C message rate of all types
     */
    v1AggMessageTypeRate?: pulumi.Input<number>;
    /**
     * Maximum allowed rate of GTPv1-C Create PDP Request message type
     */
    v1CreatePdpRequestRate?: pulumi.Input<number>;
    /**
     * Maximum allowed rate of GTPv1-C Update PDP Request message type
     */
    v1UpdatePdpRequestRate?: pulumi.Input<number>;
    /**
     * Maximum allowed GTPv2-C message rate of all types
     */
    v2AggMessageTypeRate?: pulumi.Input<number>;
    /**
     * Maximum allowed rate of GTPv2-C Create Session Request message type
     */
    v2CreateSessionRequestRate?: pulumi.Input<number>;
    /**
     * Maximum allowed rate of GTPv2-C Modify Bearer Request message type
     */
    v2ModifyBearerRequestRate?: pulumi.Input<number>;
}
