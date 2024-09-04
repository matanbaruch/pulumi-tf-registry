// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRate extends pulumi.CustomResource {
    /**
     * Get an existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRateState, opts?: pulumi.CustomResourceOptions): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRate {
        return new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRate(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRate:VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRate';

    /**
     * Returns true if the given object is an instance of VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRate.__pulumiType;
    }

    /**
     * Time in seconds to look for the anomaly, default is 60
     */
    public readonly duration!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Entry Creation Failure
     */
    public readonly errEntryCreateFailed!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Entry Creation Out of Memory
     */
    public readonly errEntryCreateOom!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Entry Insert Failed
     */
    public readonly errEntryInsertFailed!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Error allocating L4 session for probe
     */
    public readonly errL4SessAlloc!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Error in initiating TCP connection for probe
     */
    public readonly errProbeTcpConnSend!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Error creating Smart NAT Instance
     */
    public readonly errSmartNatAlloc!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Error obtaining Smart NAT source port
     */
    public readonly errSmartNatPortAlloc!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Probe Template Creation Failure
     */
    public readonly errTmplProbeCreateFailed!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Probe Template Creation Out of Memory
     */
    public readonly errTmplProbeCreateOom!: pulumi.Output<number | undefined>;
    /**
     * Name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
     */
    public readonly thresholdExceededBy!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Total HTTP responses not matching probe template config
     */
    public readonly totalHttpResponseBad!: pulumi.Output<number | undefined>;
    /**
     * Enable automatic packet-capture for Total TCP errors in probes sent out
     */
    public readonly totalTcpErr!: pulumi.Output<number | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRateArgs | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRateState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRateState | undefined;
            resourceInputs["duration"] = state ? state.duration : undefined;
            resourceInputs["errEntryCreateFailed"] = state ? state.errEntryCreateFailed : undefined;
            resourceInputs["errEntryCreateOom"] = state ? state.errEntryCreateOom : undefined;
            resourceInputs["errEntryInsertFailed"] = state ? state.errEntryInsertFailed : undefined;
            resourceInputs["errL4SessAlloc"] = state ? state.errL4SessAlloc : undefined;
            resourceInputs["errProbeTcpConnSend"] = state ? state.errProbeTcpConnSend : undefined;
            resourceInputs["errSmartNatAlloc"] = state ? state.errSmartNatAlloc : undefined;
            resourceInputs["errSmartNatPortAlloc"] = state ? state.errSmartNatPortAlloc : undefined;
            resourceInputs["errTmplProbeCreateFailed"] = state ? state.errTmplProbeCreateFailed : undefined;
            resourceInputs["errTmplProbeCreateOom"] = state ? state.errTmplProbeCreateOom : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["thresholdExceededBy"] = state ? state.thresholdExceededBy : undefined;
            resourceInputs["totalHttpResponseBad"] = state ? state.totalHttpResponseBad : undefined;
            resourceInputs["totalTcpErr"] = state ? state.totalTcpErr : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRateArgs | undefined;
            resourceInputs["duration"] = args ? args.duration : undefined;
            resourceInputs["errEntryCreateFailed"] = args ? args.errEntryCreateFailed : undefined;
            resourceInputs["errEntryCreateOom"] = args ? args.errEntryCreateOom : undefined;
            resourceInputs["errEntryInsertFailed"] = args ? args.errEntryInsertFailed : undefined;
            resourceInputs["errL4SessAlloc"] = args ? args.errL4SessAlloc : undefined;
            resourceInputs["errProbeTcpConnSend"] = args ? args.errProbeTcpConnSend : undefined;
            resourceInputs["errSmartNatAlloc"] = args ? args.errSmartNatAlloc : undefined;
            resourceInputs["errSmartNatPortAlloc"] = args ? args.errSmartNatPortAlloc : undefined;
            resourceInputs["errTmplProbeCreateFailed"] = args ? args.errTmplProbeCreateFailed : undefined;
            resourceInputs["errTmplProbeCreateOom"] = args ? args.errTmplProbeCreateOom : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["thresholdExceededBy"] = args ? args.thresholdExceededBy : undefined;
            resourceInputs["totalHttpResponseBad"] = args ? args.totalHttpResponseBad : undefined;
            resourceInputs["totalTcpErr"] = args ? args.totalTcpErr : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRate.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRate resources.
 */
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRateState {
    /**
     * Time in seconds to look for the anomaly, default is 60
     */
    duration?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Entry Creation Failure
     */
    errEntryCreateFailed?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Entry Creation Out of Memory
     */
    errEntryCreateOom?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Entry Insert Failed
     */
    errEntryInsertFailed?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Error allocating L4 session for probe
     */
    errL4SessAlloc?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Error in initiating TCP connection for probe
     */
    errProbeTcpConnSend?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Error creating Smart NAT Instance
     */
    errSmartNatAlloc?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Error obtaining Smart NAT source port
     */
    errSmartNatPortAlloc?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Probe Template Creation Failure
     */
    errTmplProbeCreateFailed?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Probe Template Creation Out of Memory
     */
    errTmplProbeCreateOom?: pulumi.Input<number>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
     */
    thresholdExceededBy?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Total HTTP responses not matching probe template config
     */
    totalHttpResponseBad?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Total TCP errors in probes sent out
     */
    totalTcpErr?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRate resource.
 */
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbLinkProbeTriggerStatsRateArgs {
    /**
     * Time in seconds to look for the anomaly, default is 60
     */
    duration?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Entry Creation Failure
     */
    errEntryCreateFailed?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Entry Creation Out of Memory
     */
    errEntryCreateOom?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Entry Insert Failed
     */
    errEntryInsertFailed?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Error allocating L4 session for probe
     */
    errL4SessAlloc?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Error in initiating TCP connection for probe
     */
    errProbeTcpConnSend?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Error creating Smart NAT Instance
     */
    errSmartNatAlloc?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Error obtaining Smart NAT source port
     */
    errSmartNatPortAlloc?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Probe Template Creation Failure
     */
    errTmplProbeCreateFailed?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Probe Template Creation Out of Memory
     */
    errTmplProbeCreateOom?: pulumi.Input<number>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
     */
    thresholdExceededBy?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Total HTTP responses not matching probe template config
     */
    totalHttpResponseBad?: pulumi.Input<number>;
    /**
     * Enable automatic packet-capture for Total TCP errors in probes sent out
     */
    totalTcpErr?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
