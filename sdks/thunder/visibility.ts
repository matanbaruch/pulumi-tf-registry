// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Visibility extends pulumi.CustomResource {
    /**
     * Get an existing Visibility resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VisibilityState, opts?: pulumi.CustomResourceOptions): Visibility {
        return new Visibility(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/visibility:Visibility';

    /**
     * Returns true if the given object is an instance of Visibility.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Visibility {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Visibility.__pulumiType;
    }

    public readonly anomalyDetection!: pulumi.Output<outputs.VisibilityAnomalyDetection | undefined>;
    public readonly debugFiles!: pulumi.Output<outputs.VisibilityDebugFiles | undefined>;
    public readonly file!: pulumi.Output<outputs.VisibilityFile | undefined>;
    public readonly flowCollector!: pulumi.Output<outputs.VisibilityFlowCollector | undefined>;
    /**
     * Granularity for rate based calculations in seconds (default 5)
     */
    public readonly granularity!: pulumi.Output<number | undefined>;
    /**
     * Initial learning interval (in hours) before processing
     */
    public readonly initialLearningInterval!: pulumi.Output<number | undefined>;
    public readonly monEntityTelemetryData!: pulumi.Output<outputs.VisibilityMonEntityTelemetryData | undefined>;
    public readonly monTopk!: pulumi.Output<outputs.VisibilityMonTopk | undefined>;
    public readonly monitor!: pulumi.Output<outputs.VisibilityMonitor | undefined>;
    public readonly monitoredEntity!: pulumi.Output<outputs.VisibilityMonitoredEntity | undefined>;
    public readonly packetCapture!: pulumi.Output<outputs.VisibilityPacketCapture | undefined>;
    public readonly pingSweepDetection!: pulumi.Output<outputs.VisibilityPingSweepDetection | undefined>;
    public readonly portScanDetection!: pulumi.Output<outputs.VisibilityPortScanDetection | undefined>;
    public readonly reporting!: pulumi.Output<outputs.VisibilityReporting | undefined>;
    public readonly resourceUsage!: pulumi.Output<outputs.VisibilityResourceUsage | undefined>;
    public readonly samplingEnables!: pulumi.Output<outputs.VisibilitySamplingEnable[] | undefined>;
    /**
     * Enable monitoring entity topk for sources
     */
    public readonly sourceEntityTopk!: pulumi.Output<number | undefined>;
    public readonly topn!: pulumi.Output<outputs.VisibilityTopn | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;
    public readonly zbar!: pulumi.Output<outputs.VisibilityZbar | undefined>;

    /**
     * Create a Visibility resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: VisibilityArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VisibilityArgs | VisibilityState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VisibilityState | undefined;
            resourceInputs["anomalyDetection"] = state ? state.anomalyDetection : undefined;
            resourceInputs["debugFiles"] = state ? state.debugFiles : undefined;
            resourceInputs["file"] = state ? state.file : undefined;
            resourceInputs["flowCollector"] = state ? state.flowCollector : undefined;
            resourceInputs["granularity"] = state ? state.granularity : undefined;
            resourceInputs["initialLearningInterval"] = state ? state.initialLearningInterval : undefined;
            resourceInputs["monEntityTelemetryData"] = state ? state.monEntityTelemetryData : undefined;
            resourceInputs["monTopk"] = state ? state.monTopk : undefined;
            resourceInputs["monitor"] = state ? state.monitor : undefined;
            resourceInputs["monitoredEntity"] = state ? state.monitoredEntity : undefined;
            resourceInputs["packetCapture"] = state ? state.packetCapture : undefined;
            resourceInputs["pingSweepDetection"] = state ? state.pingSweepDetection : undefined;
            resourceInputs["portScanDetection"] = state ? state.portScanDetection : undefined;
            resourceInputs["reporting"] = state ? state.reporting : undefined;
            resourceInputs["resourceUsage"] = state ? state.resourceUsage : undefined;
            resourceInputs["samplingEnables"] = state ? state.samplingEnables : undefined;
            resourceInputs["sourceEntityTopk"] = state ? state.sourceEntityTopk : undefined;
            resourceInputs["topn"] = state ? state.topn : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
            resourceInputs["zbar"] = state ? state.zbar : undefined;
        } else {
            const args = argsOrState as VisibilityArgs | undefined;
            resourceInputs["anomalyDetection"] = args ? args.anomalyDetection : undefined;
            resourceInputs["debugFiles"] = args ? args.debugFiles : undefined;
            resourceInputs["file"] = args ? args.file : undefined;
            resourceInputs["flowCollector"] = args ? args.flowCollector : undefined;
            resourceInputs["granularity"] = args ? args.granularity : undefined;
            resourceInputs["initialLearningInterval"] = args ? args.initialLearningInterval : undefined;
            resourceInputs["monEntityTelemetryData"] = args ? args.monEntityTelemetryData : undefined;
            resourceInputs["monTopk"] = args ? args.monTopk : undefined;
            resourceInputs["monitor"] = args ? args.monitor : undefined;
            resourceInputs["monitoredEntity"] = args ? args.monitoredEntity : undefined;
            resourceInputs["packetCapture"] = args ? args.packetCapture : undefined;
            resourceInputs["pingSweepDetection"] = args ? args.pingSweepDetection : undefined;
            resourceInputs["portScanDetection"] = args ? args.portScanDetection : undefined;
            resourceInputs["reporting"] = args ? args.reporting : undefined;
            resourceInputs["resourceUsage"] = args ? args.resourceUsage : undefined;
            resourceInputs["samplingEnables"] = args ? args.samplingEnables : undefined;
            resourceInputs["sourceEntityTopk"] = args ? args.sourceEntityTopk : undefined;
            resourceInputs["topn"] = args ? args.topn : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
            resourceInputs["zbar"] = args ? args.zbar : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Visibility.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Visibility resources.
 */
export interface VisibilityState {
    anomalyDetection?: pulumi.Input<inputs.VisibilityAnomalyDetection>;
    debugFiles?: pulumi.Input<inputs.VisibilityDebugFiles>;
    file?: pulumi.Input<inputs.VisibilityFile>;
    flowCollector?: pulumi.Input<inputs.VisibilityFlowCollector>;
    /**
     * Granularity for rate based calculations in seconds (default 5)
     */
    granularity?: pulumi.Input<number>;
    /**
     * Initial learning interval (in hours) before processing
     */
    initialLearningInterval?: pulumi.Input<number>;
    monEntityTelemetryData?: pulumi.Input<inputs.VisibilityMonEntityTelemetryData>;
    monTopk?: pulumi.Input<inputs.VisibilityMonTopk>;
    monitor?: pulumi.Input<inputs.VisibilityMonitor>;
    monitoredEntity?: pulumi.Input<inputs.VisibilityMonitoredEntity>;
    packetCapture?: pulumi.Input<inputs.VisibilityPacketCapture>;
    pingSweepDetection?: pulumi.Input<inputs.VisibilityPingSweepDetection>;
    portScanDetection?: pulumi.Input<inputs.VisibilityPortScanDetection>;
    reporting?: pulumi.Input<inputs.VisibilityReporting>;
    resourceUsage?: pulumi.Input<inputs.VisibilityResourceUsage>;
    samplingEnables?: pulumi.Input<pulumi.Input<inputs.VisibilitySamplingEnable>[]>;
    /**
     * Enable monitoring entity topk for sources
     */
    sourceEntityTopk?: pulumi.Input<number>;
    topn?: pulumi.Input<inputs.VisibilityTopn>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    zbar?: pulumi.Input<inputs.VisibilityZbar>;
}

/**
 * The set of arguments for constructing a Visibility resource.
 */
export interface VisibilityArgs {
    anomalyDetection?: pulumi.Input<inputs.VisibilityAnomalyDetection>;
    debugFiles?: pulumi.Input<inputs.VisibilityDebugFiles>;
    file?: pulumi.Input<inputs.VisibilityFile>;
    flowCollector?: pulumi.Input<inputs.VisibilityFlowCollector>;
    /**
     * Granularity for rate based calculations in seconds (default 5)
     */
    granularity?: pulumi.Input<number>;
    /**
     * Initial learning interval (in hours) before processing
     */
    initialLearningInterval?: pulumi.Input<number>;
    monEntityTelemetryData?: pulumi.Input<inputs.VisibilityMonEntityTelemetryData>;
    monTopk?: pulumi.Input<inputs.VisibilityMonTopk>;
    monitor?: pulumi.Input<inputs.VisibilityMonitor>;
    monitoredEntity?: pulumi.Input<inputs.VisibilityMonitoredEntity>;
    packetCapture?: pulumi.Input<inputs.VisibilityPacketCapture>;
    pingSweepDetection?: pulumi.Input<inputs.VisibilityPingSweepDetection>;
    portScanDetection?: pulumi.Input<inputs.VisibilityPortScanDetection>;
    reporting?: pulumi.Input<inputs.VisibilityReporting>;
    resourceUsage?: pulumi.Input<inputs.VisibilityResourceUsage>;
    samplingEnables?: pulumi.Input<pulumi.Input<inputs.VisibilitySamplingEnable>[]>;
    /**
     * Enable monitoring entity topk for sources
     */
    sourceEntityTopk?: pulumi.Input<number>;
    topn?: pulumi.Input<inputs.VisibilityTopn>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    zbar?: pulumi.Input<inputs.VisibilityZbar>;
}
