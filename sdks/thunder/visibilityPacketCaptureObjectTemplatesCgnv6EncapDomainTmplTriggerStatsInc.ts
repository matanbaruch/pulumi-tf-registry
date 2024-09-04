// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class VisibilityPacketCaptureObjectTemplatesCgnv6EncapDomainTmplTriggerStatsInc extends pulumi.CustomResource {
    /**
     * Get an existing VisibilityPacketCaptureObjectTemplatesCgnv6EncapDomainTmplTriggerStatsInc resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VisibilityPacketCaptureObjectTemplatesCgnv6EncapDomainTmplTriggerStatsIncState, opts?: pulumi.CustomResourceOptions): VisibilityPacketCaptureObjectTemplatesCgnv6EncapDomainTmplTriggerStatsInc {
        return new VisibilityPacketCaptureObjectTemplatesCgnv6EncapDomainTmplTriggerStatsInc(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/visibilityPacketCaptureObjectTemplatesCgnv6EncapDomainTmplTriggerStatsInc:VisibilityPacketCaptureObjectTemplatesCgnv6EncapDomainTmplTriggerStatsInc';

    /**
     * Returns true if the given object is an instance of VisibilityPacketCaptureObjectTemplatesCgnv6EncapDomainTmplTriggerStatsInc.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VisibilityPacketCaptureObjectTemplatesCgnv6EncapDomainTmplTriggerStatsInc {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VisibilityPacketCaptureObjectTemplatesCgnv6EncapDomainTmplTriggerStatsInc.__pulumiType;
    }

    /**
     * Enable automatic packet-capture for Inbound IPv4 Destination Address Port Validation Failed
     */
    public readonly inboundAddrPortValidationFailed!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Inbound IPv6 Destination Address Unreachable
     */
    public readonly inboundDestUnreachable!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Inbound IPv4 Reverse Route Lookup Failed
     */
    public readonly inboundRevLookupFailed!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Interfaces not Configured Dropped
     */
    public readonly interfaceNotConfigured!: pulumi.Output<number | undefined>;
    /**
     * Name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Enable automatic packet-capture for Outbound IPv6 Source Address Validation Failed
     */
    public readonly outboundAddrValidationFailed!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Outbound IPv4 Destination Address Unreachable
     */
    public readonly outboundDestUnreachable!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Outbound IPv6 Reverse Route Lookup Failed
     */
    public readonly outboundRevLookupFailed!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Packet Exceeded MTU
     */
    public readonly packetMtuExceeded!: pulumi.Output<number | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a VisibilityPacketCaptureObjectTemplatesCgnv6EncapDomainTmplTriggerStatsInc resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: VisibilityPacketCaptureObjectTemplatesCgnv6EncapDomainTmplTriggerStatsIncArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VisibilityPacketCaptureObjectTemplatesCgnv6EncapDomainTmplTriggerStatsIncArgs | VisibilityPacketCaptureObjectTemplatesCgnv6EncapDomainTmplTriggerStatsIncState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VisibilityPacketCaptureObjectTemplatesCgnv6EncapDomainTmplTriggerStatsIncState | undefined;
            resourceInputs["inboundAddrPortValidationFailed"] = state ? state.inboundAddrPortValidationFailed : undefined;
            resourceInputs["inboundDestUnreachable"] = state ? state.inboundDestUnreachable : undefined;
            resourceInputs["inboundRevLookupFailed"] = state ? state.inboundRevLookupFailed : undefined;
            resourceInputs["interfaceNotConfigured"] = state ? state.interfaceNotConfigured : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["outboundAddrValidationFailed"] = state ? state.outboundAddrValidationFailed : undefined;
            resourceInputs["outboundDestUnreachable"] = state ? state.outboundDestUnreachable : undefined;
            resourceInputs["outboundRevLookupFailed"] = state ? state.outboundRevLookupFailed : undefined;
            resourceInputs["packetMtuExceeded"] = state ? state.packetMtuExceeded : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as VisibilityPacketCaptureObjectTemplatesCgnv6EncapDomainTmplTriggerStatsIncArgs | undefined;
            resourceInputs["inboundAddrPortValidationFailed"] = args ? args.inboundAddrPortValidationFailed : undefined;
            resourceInputs["inboundDestUnreachable"] = args ? args.inboundDestUnreachable : undefined;
            resourceInputs["inboundRevLookupFailed"] = args ? args.inboundRevLookupFailed : undefined;
            resourceInputs["interfaceNotConfigured"] = args ? args.interfaceNotConfigured : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["outboundAddrValidationFailed"] = args ? args.outboundAddrValidationFailed : undefined;
            resourceInputs["outboundDestUnreachable"] = args ? args.outboundDestUnreachable : undefined;
            resourceInputs["outboundRevLookupFailed"] = args ? args.outboundRevLookupFailed : undefined;
            resourceInputs["packetMtuExceeded"] = args ? args.packetMtuExceeded : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VisibilityPacketCaptureObjectTemplatesCgnv6EncapDomainTmplTriggerStatsInc.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VisibilityPacketCaptureObjectTemplatesCgnv6EncapDomainTmplTriggerStatsInc resources.
 */
export interface VisibilityPacketCaptureObjectTemplatesCgnv6EncapDomainTmplTriggerStatsIncState {
    /**
     * Enable automatic packet-capture for Inbound IPv4 Destination Address Port Validation Failed
     */
    inboundAddrPortValidationFailed?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Inbound IPv6 Destination Address Unreachable
     */
    inboundDestUnreachable?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Inbound IPv4 Reverse Route Lookup Failed
     */
    inboundRevLookupFailed?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Interfaces not Configured Dropped
     */
    interfaceNotConfigured?: pulumi.Input<number>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * Enable automatic packet-capture for Outbound IPv6 Source Address Validation Failed
     */
    outboundAddrValidationFailed?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Outbound IPv4 Destination Address Unreachable
     */
    outboundDestUnreachable?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Outbound IPv6 Reverse Route Lookup Failed
     */
    outboundRevLookupFailed?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Packet Exceeded MTU
     */
    packetMtuExceeded?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VisibilityPacketCaptureObjectTemplatesCgnv6EncapDomainTmplTriggerStatsInc resource.
 */
export interface VisibilityPacketCaptureObjectTemplatesCgnv6EncapDomainTmplTriggerStatsIncArgs {
    /**
     * Enable automatic packet-capture for Inbound IPv4 Destination Address Port Validation Failed
     */
    inboundAddrPortValidationFailed?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Inbound IPv6 Destination Address Unreachable
     */
    inboundDestUnreachable?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Inbound IPv4 Reverse Route Lookup Failed
     */
    inboundRevLookupFailed?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Interfaces not Configured Dropped
     */
    interfaceNotConfigured?: pulumi.Input<number>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * Enable automatic packet-capture for Outbound IPv6 Source Address Validation Failed
     */
    outboundAddrValidationFailed?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Outbound IPv4 Destination Address Unreachable
     */
    outboundDestUnreachable?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Outbound IPv6 Reverse Route Lookup Failed
     */
    outboundRevLookupFailed?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Packet Exceeded MTU
     */
    packetMtuExceeded?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
