// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class VisibilityPacketCaptureObjectTemplatesRuleSetTmplTriggerStatsRate extends pulumi.CustomResource {
    /**
     * Get an existing VisibilityPacketCaptureObjectTemplatesRuleSetTmplTriggerStatsRate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VisibilityPacketCaptureObjectTemplatesRuleSetTmplTriggerStatsRateState, opts?: pulumi.CustomResourceOptions): VisibilityPacketCaptureObjectTemplatesRuleSetTmplTriggerStatsRate {
        return new VisibilityPacketCaptureObjectTemplatesRuleSetTmplTriggerStatsRate(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/visibilityPacketCaptureObjectTemplatesRuleSetTmplTriggerStatsRate:VisibilityPacketCaptureObjectTemplatesRuleSetTmplTriggerStatsRate';

    /**
     * Returns true if the given object is an instance of VisibilityPacketCaptureObjectTemplatesRuleSetTmplTriggerStatsRate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VisibilityPacketCaptureObjectTemplatesRuleSetTmplTriggerStatsRate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VisibilityPacketCaptureObjectTemplatesRuleSetTmplTriggerStatsRate.__pulumiType;
    }

    /**
     * Enable automatic packet-capture for Denied counter
     */
    public readonly deny!: pulumi.Output<number | undefined>;
    /**
     * Time in seconds to look for the anomaly, default is 60
     */
    public readonly duration!: pulumi.Output<number | undefined>;
    /**
     * Name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Enable automatic packet-capture for Reset counter
     */
    public readonly reset!: pulumi.Output<number | undefined>;
    /**
     * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
     */
    public readonly thresholdExceededBy!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Unmatched drops counter
     */
    public readonly unmatchedDrops!: pulumi.Output<number | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a VisibilityPacketCaptureObjectTemplatesRuleSetTmplTriggerStatsRate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: VisibilityPacketCaptureObjectTemplatesRuleSetTmplTriggerStatsRateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VisibilityPacketCaptureObjectTemplatesRuleSetTmplTriggerStatsRateArgs | VisibilityPacketCaptureObjectTemplatesRuleSetTmplTriggerStatsRateState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VisibilityPacketCaptureObjectTemplatesRuleSetTmplTriggerStatsRateState | undefined;
            resourceInputs["deny"] = state ? state.deny : undefined;
            resourceInputs["duration"] = state ? state.duration : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["reset"] = state ? state.reset : undefined;
            resourceInputs["thresholdExceededBy"] = state ? state.thresholdExceededBy : undefined;
            resourceInputs["unmatchedDrops"] = state ? state.unmatchedDrops : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as VisibilityPacketCaptureObjectTemplatesRuleSetTmplTriggerStatsRateArgs | undefined;
            resourceInputs["deny"] = args ? args.deny : undefined;
            resourceInputs["duration"] = args ? args.duration : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["reset"] = args ? args.reset : undefined;
            resourceInputs["thresholdExceededBy"] = args ? args.thresholdExceededBy : undefined;
            resourceInputs["unmatchedDrops"] = args ? args.unmatchedDrops : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VisibilityPacketCaptureObjectTemplatesRuleSetTmplTriggerStatsRate.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VisibilityPacketCaptureObjectTemplatesRuleSetTmplTriggerStatsRate resources.
 */
export interface VisibilityPacketCaptureObjectTemplatesRuleSetTmplTriggerStatsRateState {
    /**
     * Enable automatic packet-capture for Denied counter
     */
    deny?: pulumi.Input<number>;
    /**
     * Time in seconds to look for the anomaly, default is 60
     */
    duration?: pulumi.Input<number>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * Enable automatic packet-capture for Reset counter
     */
    reset?: pulumi.Input<number>;
    /**
     * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
     */
    thresholdExceededBy?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Unmatched drops counter
     */
    unmatchedDrops?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VisibilityPacketCaptureObjectTemplatesRuleSetTmplTriggerStatsRate resource.
 */
export interface VisibilityPacketCaptureObjectTemplatesRuleSetTmplTriggerStatsRateArgs {
    /**
     * Enable automatic packet-capture for Denied counter
     */
    deny?: pulumi.Input<number>;
    /**
     * Time in seconds to look for the anomaly, default is 60
     */
    duration?: pulumi.Input<number>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * Enable automatic packet-capture for Reset counter
     */
    reset?: pulumi.Input<number>;
    /**
     * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
     */
    thresholdExceededBy?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Unmatched drops counter
     */
    unmatchedDrops?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
