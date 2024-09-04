// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRate extends pulumi.CustomResource {
    /**
     * Get an existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRateState, opts?: pulumi.CustomResourceOptions): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRate {
        return new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRate(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRate:VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRate';

    /**
     * Returns true if the given object is an instance of VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRate.__pulumiType;
    }

    /**
     * Time in seconds to look for the anomaly, default is 60
     */
    public readonly duration!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for HA Standby Dropped
     */
    public readonly haStandbyDropped!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Radius Request has Invalid Key Field
     */
    public readonly invalidKey!: pulumi.Output<number | undefined>;
    /**
     * Name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Enable automatic packet-capture for RADIUS Request Dropped (Malformed Packet)
     */
    public readonly radiusRequestDropped!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for RADIUS Request Dropped (Table Full)
     */
    public readonly radiusTableFull!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for RADIUS Request Bad Secret Dropped
     */
    public readonly requestBadSecretDropped!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for RADIUS Request Ignored
     */
    public readonly requestIgnored!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for RADIUS Request Malformed Dropped
     */
    public readonly requestMalformedDropped!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for RADIUS Request No Key Attribute Dropped
     */
    public readonly requestNoKeyVapDropped!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for RADIUS Secret Not Configured Dropped
     */
    public readonly secretNotConfiguredDropped!: pulumi.Output<number | undefined>;
    /**
     * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
     */
    public readonly thresholdExceededBy!: pulumi.Output<number | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRateArgs | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRateState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRateState | undefined;
            resourceInputs["duration"] = state ? state.duration : undefined;
            resourceInputs["haStandbyDropped"] = state ? state.haStandbyDropped : undefined;
            resourceInputs["invalidKey"] = state ? state.invalidKey : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["radiusRequestDropped"] = state ? state.radiusRequestDropped : undefined;
            resourceInputs["radiusTableFull"] = state ? state.radiusTableFull : undefined;
            resourceInputs["requestBadSecretDropped"] = state ? state.requestBadSecretDropped : undefined;
            resourceInputs["requestIgnored"] = state ? state.requestIgnored : undefined;
            resourceInputs["requestMalformedDropped"] = state ? state.requestMalformedDropped : undefined;
            resourceInputs["requestNoKeyVapDropped"] = state ? state.requestNoKeyVapDropped : undefined;
            resourceInputs["secretNotConfiguredDropped"] = state ? state.secretNotConfiguredDropped : undefined;
            resourceInputs["thresholdExceededBy"] = state ? state.thresholdExceededBy : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRateArgs | undefined;
            resourceInputs["duration"] = args ? args.duration : undefined;
            resourceInputs["haStandbyDropped"] = args ? args.haStandbyDropped : undefined;
            resourceInputs["invalidKey"] = args ? args.invalidKey : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["radiusRequestDropped"] = args ? args.radiusRequestDropped : undefined;
            resourceInputs["radiusTableFull"] = args ? args.radiusTableFull : undefined;
            resourceInputs["requestBadSecretDropped"] = args ? args.requestBadSecretDropped : undefined;
            resourceInputs["requestIgnored"] = args ? args.requestIgnored : undefined;
            resourceInputs["requestMalformedDropped"] = args ? args.requestMalformedDropped : undefined;
            resourceInputs["requestNoKeyVapDropped"] = args ? args.requestNoKeyVapDropped : undefined;
            resourceInputs["secretNotConfiguredDropped"] = args ? args.secretNotConfiguredDropped : undefined;
            resourceInputs["thresholdExceededBy"] = args ? args.thresholdExceededBy : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRate.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRate resources.
 */
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRateState {
    /**
     * Time in seconds to look for the anomaly, default is 60
     */
    duration?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for HA Standby Dropped
     */
    haStandbyDropped?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Radius Request has Invalid Key Field
     */
    invalidKey?: pulumi.Input<number>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * Enable automatic packet-capture for RADIUS Request Dropped (Malformed Packet)
     */
    radiusRequestDropped?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for RADIUS Request Dropped (Table Full)
     */
    radiusTableFull?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for RADIUS Request Bad Secret Dropped
     */
    requestBadSecretDropped?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for RADIUS Request Ignored
     */
    requestIgnored?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for RADIUS Request Malformed Dropped
     */
    requestMalformedDropped?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for RADIUS Request No Key Attribute Dropped
     */
    requestNoKeyVapDropped?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for RADIUS Secret Not Configured Dropped
     */
    secretNotConfiguredDropped?: pulumi.Input<number>;
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
 * The set of arguments for constructing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRate resource.
 */
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnRadiusTriggerStatsRateArgs {
    /**
     * Time in seconds to look for the anomaly, default is 60
     */
    duration?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for HA Standby Dropped
     */
    haStandbyDropped?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Radius Request has Invalid Key Field
     */
    invalidKey?: pulumi.Input<number>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * Enable automatic packet-capture for RADIUS Request Dropped (Malformed Packet)
     */
    radiusRequestDropped?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for RADIUS Request Dropped (Table Full)
     */
    radiusTableFull?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for RADIUS Request Bad Secret Dropped
     */
    requestBadSecretDropped?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for RADIUS Request Ignored
     */
    requestIgnored?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for RADIUS Request Malformed Dropped
     */
    requestMalformedDropped?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for RADIUS Request No Key Attribute Dropped
     */
    requestNoKeyVapDropped?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for RADIUS Secret Not Configured Dropped
     */
    secretNotConfiguredDropped?: pulumi.Input<number>;
    /**
     * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
     */
    thresholdExceededBy?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
