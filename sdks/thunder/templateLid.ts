// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class TemplateLid extends pulumi.CustomResource {
    /**
     * Get an existing TemplateLid resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TemplateLidState, opts?: pulumi.CustomResourceOptions): TemplateLid {
        return new TemplateLid(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/templateLid:TemplateLid';

    /**
     * Returns true if the given object is an instance of TemplateLid.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TemplateLid {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TemplateLid.__pulumiType;
    }

    /**
     * Enable DDoS Protection (Multiplier of the downlink PPS)
     */
    public readonly ddosProtectionFactor!: pulumi.Output<number | undefined>;
    /**
     * Downlink PPS limit (Number of Packets per second)
     */
    public readonly downlinkPps!: pulumi.Output<number | undefined>;
    /**
     * Downlink Throughput limit (Mega Bits per second)
     */
    public readonly downlinkThroughput!: pulumi.Output<number | undefined>;
    /**
     * Lid Number
     */
    public readonly lidNumber!: pulumi.Output<number>;
    /**
     * Enable Connections Per Second Rate Limit (Number of Connections per second)
     */
    public readonly limitCps!: pulumi.Output<number | undefined>;
    /**
     * 'limit-pps': Enable Packets Per Second Rate Limit; 'limit-throughput': Enable Throughput Rate Limit;
     */
    public readonly limitRate!: pulumi.Output<string | undefined>;
    /**
     * Use the user's source MAC for the next hop rather than the routing table (default:off)
     */
    public readonly respondToUserMac!: pulumi.Output<number | undefined>;
    public readonly srcIp!: pulumi.Output<outputs.TemplateLidSrcIp | undefined>;
    /**
     * Total PPS limit (Number of Packets per second)
     */
    public readonly totalPps!: pulumi.Output<number | undefined>;
    /**
     * Total Throughput limit (Mega Bits per second)
     */
    public readonly totalThroughput!: pulumi.Output<number | undefined>;
    /**
     * Uplink PPS limit (Number of Packets per second)
     */
    public readonly uplinkPps!: pulumi.Output<number | undefined>;
    /**
     * Uplink Throughput limit (Mega Bits per second)
     */
    public readonly uplinkThroughput!: pulumi.Output<number | undefined>;
    /**
     * Customized tag
     */
    public readonly userTag!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a TemplateLid resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TemplateLidArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TemplateLidArgs | TemplateLidState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TemplateLidState | undefined;
            resourceInputs["ddosProtectionFactor"] = state ? state.ddosProtectionFactor : undefined;
            resourceInputs["downlinkPps"] = state ? state.downlinkPps : undefined;
            resourceInputs["downlinkThroughput"] = state ? state.downlinkThroughput : undefined;
            resourceInputs["lidNumber"] = state ? state.lidNumber : undefined;
            resourceInputs["limitCps"] = state ? state.limitCps : undefined;
            resourceInputs["limitRate"] = state ? state.limitRate : undefined;
            resourceInputs["respondToUserMac"] = state ? state.respondToUserMac : undefined;
            resourceInputs["srcIp"] = state ? state.srcIp : undefined;
            resourceInputs["totalPps"] = state ? state.totalPps : undefined;
            resourceInputs["totalThroughput"] = state ? state.totalThroughput : undefined;
            resourceInputs["uplinkPps"] = state ? state.uplinkPps : undefined;
            resourceInputs["uplinkThroughput"] = state ? state.uplinkThroughput : undefined;
            resourceInputs["userTag"] = state ? state.userTag : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as TemplateLidArgs | undefined;
            if ((!args || args.lidNumber === undefined) && !opts.urn) {
                throw new Error("Missing required property 'lidNumber'");
            }
            resourceInputs["ddosProtectionFactor"] = args ? args.ddosProtectionFactor : undefined;
            resourceInputs["downlinkPps"] = args ? args.downlinkPps : undefined;
            resourceInputs["downlinkThroughput"] = args ? args.downlinkThroughput : undefined;
            resourceInputs["lidNumber"] = args ? args.lidNumber : undefined;
            resourceInputs["limitCps"] = args ? args.limitCps : undefined;
            resourceInputs["limitRate"] = args ? args.limitRate : undefined;
            resourceInputs["respondToUserMac"] = args ? args.respondToUserMac : undefined;
            resourceInputs["srcIp"] = args ? args.srcIp : undefined;
            resourceInputs["totalPps"] = args ? args.totalPps : undefined;
            resourceInputs["totalThroughput"] = args ? args.totalThroughput : undefined;
            resourceInputs["uplinkPps"] = args ? args.uplinkPps : undefined;
            resourceInputs["uplinkThroughput"] = args ? args.uplinkThroughput : undefined;
            resourceInputs["userTag"] = args ? args.userTag : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(TemplateLid.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering TemplateLid resources.
 */
export interface TemplateLidState {
    /**
     * Enable DDoS Protection (Multiplier of the downlink PPS)
     */
    ddosProtectionFactor?: pulumi.Input<number>;
    /**
     * Downlink PPS limit (Number of Packets per second)
     */
    downlinkPps?: pulumi.Input<number>;
    /**
     * Downlink Throughput limit (Mega Bits per second)
     */
    downlinkThroughput?: pulumi.Input<number>;
    /**
     * Lid Number
     */
    lidNumber?: pulumi.Input<number>;
    /**
     * Enable Connections Per Second Rate Limit (Number of Connections per second)
     */
    limitCps?: pulumi.Input<number>;
    /**
     * 'limit-pps': Enable Packets Per Second Rate Limit; 'limit-throughput': Enable Throughput Rate Limit;
     */
    limitRate?: pulumi.Input<string>;
    /**
     * Use the user's source MAC for the next hop rather than the routing table (default:off)
     */
    respondToUserMac?: pulumi.Input<number>;
    srcIp?: pulumi.Input<inputs.TemplateLidSrcIp>;
    /**
     * Total PPS limit (Number of Packets per second)
     */
    totalPps?: pulumi.Input<number>;
    /**
     * Total Throughput limit (Mega Bits per second)
     */
    totalThroughput?: pulumi.Input<number>;
    /**
     * Uplink PPS limit (Number of Packets per second)
     */
    uplinkPps?: pulumi.Input<number>;
    /**
     * Uplink Throughput limit (Mega Bits per second)
     */
    uplinkThroughput?: pulumi.Input<number>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a TemplateLid resource.
 */
export interface TemplateLidArgs {
    /**
     * Enable DDoS Protection (Multiplier of the downlink PPS)
     */
    ddosProtectionFactor?: pulumi.Input<number>;
    /**
     * Downlink PPS limit (Number of Packets per second)
     */
    downlinkPps?: pulumi.Input<number>;
    /**
     * Downlink Throughput limit (Mega Bits per second)
     */
    downlinkThroughput?: pulumi.Input<number>;
    /**
     * Lid Number
     */
    lidNumber: pulumi.Input<number>;
    /**
     * Enable Connections Per Second Rate Limit (Number of Connections per second)
     */
    limitCps?: pulumi.Input<number>;
    /**
     * 'limit-pps': Enable Packets Per Second Rate Limit; 'limit-throughput': Enable Throughput Rate Limit;
     */
    limitRate?: pulumi.Input<string>;
    /**
     * Use the user's source MAC for the next hop rather than the routing table (default:off)
     */
    respondToUserMac?: pulumi.Input<number>;
    srcIp?: pulumi.Input<inputs.TemplateLidSrcIp>;
    /**
     * Total PPS limit (Number of Packets per second)
     */
    totalPps?: pulumi.Input<number>;
    /**
     * Total Throughput limit (Mega Bits per second)
     */
    totalThroughput?: pulumi.Input<number>;
    /**
     * Uplink PPS limit (Number of Packets per second)
     */
    uplinkPps?: pulumi.Input<number>;
    /**
     * Uplink Throughput limit (Mega Bits per second)
     */
    uplinkThroughput?: pulumi.Input<number>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
