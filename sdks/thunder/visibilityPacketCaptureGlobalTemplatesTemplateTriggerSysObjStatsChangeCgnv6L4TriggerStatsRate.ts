// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6L4TriggerStatsRate extends pulumi.CustomResource {
    /**
     * Get an existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6L4TriggerStatsRate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6L4TriggerStatsRateState, opts?: pulumi.CustomResourceOptions): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6L4TriggerStatsRate {
        return new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6L4TriggerStatsRate(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6L4TriggerStatsRate:VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6L4TriggerStatsRate';

    /**
     * Returns true if the given object is an instance of VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6L4TriggerStatsRate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6L4TriggerStatsRate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6L4TriggerStatsRate.__pulumiType;
    }

    /**
     * Time in seconds to look for the anomaly, default is 60
     */
    public readonly duration!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for ICMP Host Unreachable Sent
     */
    public readonly icmpHostUnreachableSent!: pulumi.Output<number | undefined>;
    /**
     * Name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Enable automatic packet-capture for Out of Session Memory
     */
    public readonly outOfSessionMemory!: pulumi.Output<number | undefined>;
    /**
     * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
     */
    public readonly thresholdExceededBy!: pulumi.Output<number | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6L4TriggerStatsRate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6L4TriggerStatsRateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6L4TriggerStatsRateArgs | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6L4TriggerStatsRateState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6L4TriggerStatsRateState | undefined;
            resourceInputs["duration"] = state ? state.duration : undefined;
            resourceInputs["icmpHostUnreachableSent"] = state ? state.icmpHostUnreachableSent : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["outOfSessionMemory"] = state ? state.outOfSessionMemory : undefined;
            resourceInputs["thresholdExceededBy"] = state ? state.thresholdExceededBy : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6L4TriggerStatsRateArgs | undefined;
            resourceInputs["duration"] = args ? args.duration : undefined;
            resourceInputs["icmpHostUnreachableSent"] = args ? args.icmpHostUnreachableSent : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["outOfSessionMemory"] = args ? args.outOfSessionMemory : undefined;
            resourceInputs["thresholdExceededBy"] = args ? args.thresholdExceededBy : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6L4TriggerStatsRate.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6L4TriggerStatsRate resources.
 */
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6L4TriggerStatsRateState {
    /**
     * Time in seconds to look for the anomaly, default is 60
     */
    duration?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for ICMP Host Unreachable Sent
     */
    icmpHostUnreachableSent?: pulumi.Input<number>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * Enable automatic packet-capture for Out of Session Memory
     */
    outOfSessionMemory?: pulumi.Input<number>;
    /**
     * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
     */
    thresholdExceededBy?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6L4TriggerStatsRate resource.
 */
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6L4TriggerStatsRateArgs {
    /**
     * Time in seconds to look for the anomaly, default is 60
     */
    duration?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for ICMP Host Unreachable Sent
     */
    icmpHostUnreachableSent?: pulumi.Input<number>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * Enable automatic packet-capture for Out of Session Memory
     */
    outOfSessionMemory?: pulumi.Input<number>;
    /**
     * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
     */
    thresholdExceededBy?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
