// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class VisibilityMonitor extends pulumi.CustomResource {
    /**
     * Get an existing VisibilityMonitor resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VisibilityMonitorState, opts?: pulumi.CustomResourceOptions): VisibilityMonitor {
        return new VisibilityMonitor(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/visibilityMonitor:VisibilityMonitor';

    /**
     * Returns true if the given object is an instance of VisibilityMonitor.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VisibilityMonitor {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VisibilityMonitor.__pulumiType;
    }

    public readonly agentLists!: pulumi.Output<outputs.VisibilityMonitorAgentList[] | undefined>;
    public readonly debugLists!: pulumi.Output<outputs.VisibilityMonitorDebugList[] | undefined>;
    public readonly deleteDebugFile!: pulumi.Output<outputs.VisibilityMonitorDeleteDebugFile | undefined>;
    /**
     * Start indexing associated sessions
     */
    public readonly indexSessions!: pulumi.Output<number | undefined>;
    /**
     * 'per-cpu': Use per cpu list;
     */
    public readonly indexSessionsType!: pulumi.Output<string | undefined>;
    /**
     * Enable topk for primary entities
     */
    public readonly monEntityTopk!: pulumi.Output<number | undefined>;
    /**
     * 'source': Monitor traffic from all sources; 'dest': Monitor traffic to any destination; 'service': Monitor traffic to
     * any service; 'source-nat-ip': Monitor traffic to all source nat IPs;
     */
    public readonly monitorKey!: pulumi.Output<string | undefined>;
    public readonly netflow!: pulumi.Output<outputs.VisibilityMonitorNetflow | undefined>;
    /**
     * 'traffic': Mointor traffic; 'xflow': Monitor xflow samples;
     */
    public readonly primaryMonitor!: pulumi.Output<string>;
    public readonly replayDebugFile!: pulumi.Output<outputs.VisibilityMonitorReplayDebugFile | undefined>;
    public readonly secondaryMonitor!: pulumi.Output<outputs.VisibilityMonitorSecondaryMonitor | undefined>;
    public readonly sflow!: pulumi.Output<outputs.VisibilityMonitorSflow | undefined>;
    /**
     * Enable topk for sources to primary-entities
     */
    public readonly sourceEntityTopk!: pulumi.Output<number | undefined>;
    public readonly template!: pulumi.Output<outputs.VisibilityMonitorTemplate | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a VisibilityMonitor resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VisibilityMonitorArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VisibilityMonitorArgs | VisibilityMonitorState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VisibilityMonitorState | undefined;
            resourceInputs["agentLists"] = state ? state.agentLists : undefined;
            resourceInputs["debugLists"] = state ? state.debugLists : undefined;
            resourceInputs["deleteDebugFile"] = state ? state.deleteDebugFile : undefined;
            resourceInputs["indexSessions"] = state ? state.indexSessions : undefined;
            resourceInputs["indexSessionsType"] = state ? state.indexSessionsType : undefined;
            resourceInputs["monEntityTopk"] = state ? state.monEntityTopk : undefined;
            resourceInputs["monitorKey"] = state ? state.monitorKey : undefined;
            resourceInputs["netflow"] = state ? state.netflow : undefined;
            resourceInputs["primaryMonitor"] = state ? state.primaryMonitor : undefined;
            resourceInputs["replayDebugFile"] = state ? state.replayDebugFile : undefined;
            resourceInputs["secondaryMonitor"] = state ? state.secondaryMonitor : undefined;
            resourceInputs["sflow"] = state ? state.sflow : undefined;
            resourceInputs["sourceEntityTopk"] = state ? state.sourceEntityTopk : undefined;
            resourceInputs["template"] = state ? state.template : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as VisibilityMonitorArgs | undefined;
            if ((!args || args.primaryMonitor === undefined) && !opts.urn) {
                throw new Error("Missing required property 'primaryMonitor'");
            }
            resourceInputs["agentLists"] = args ? args.agentLists : undefined;
            resourceInputs["debugLists"] = args ? args.debugLists : undefined;
            resourceInputs["deleteDebugFile"] = args ? args.deleteDebugFile : undefined;
            resourceInputs["indexSessions"] = args ? args.indexSessions : undefined;
            resourceInputs["indexSessionsType"] = args ? args.indexSessionsType : undefined;
            resourceInputs["monEntityTopk"] = args ? args.monEntityTopk : undefined;
            resourceInputs["monitorKey"] = args ? args.monitorKey : undefined;
            resourceInputs["netflow"] = args ? args.netflow : undefined;
            resourceInputs["primaryMonitor"] = args ? args.primaryMonitor : undefined;
            resourceInputs["replayDebugFile"] = args ? args.replayDebugFile : undefined;
            resourceInputs["secondaryMonitor"] = args ? args.secondaryMonitor : undefined;
            resourceInputs["sflow"] = args ? args.sflow : undefined;
            resourceInputs["sourceEntityTopk"] = args ? args.sourceEntityTopk : undefined;
            resourceInputs["template"] = args ? args.template : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VisibilityMonitor.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VisibilityMonitor resources.
 */
export interface VisibilityMonitorState {
    agentLists?: pulumi.Input<pulumi.Input<inputs.VisibilityMonitorAgentList>[]>;
    debugLists?: pulumi.Input<pulumi.Input<inputs.VisibilityMonitorDebugList>[]>;
    deleteDebugFile?: pulumi.Input<inputs.VisibilityMonitorDeleteDebugFile>;
    /**
     * Start indexing associated sessions
     */
    indexSessions?: pulumi.Input<number>;
    /**
     * 'per-cpu': Use per cpu list;
     */
    indexSessionsType?: pulumi.Input<string>;
    /**
     * Enable topk for primary entities
     */
    monEntityTopk?: pulumi.Input<number>;
    /**
     * 'source': Monitor traffic from all sources; 'dest': Monitor traffic to any destination; 'service': Monitor traffic to
     * any service; 'source-nat-ip': Monitor traffic to all source nat IPs;
     */
    monitorKey?: pulumi.Input<string>;
    netflow?: pulumi.Input<inputs.VisibilityMonitorNetflow>;
    /**
     * 'traffic': Mointor traffic; 'xflow': Monitor xflow samples;
     */
    primaryMonitor?: pulumi.Input<string>;
    replayDebugFile?: pulumi.Input<inputs.VisibilityMonitorReplayDebugFile>;
    secondaryMonitor?: pulumi.Input<inputs.VisibilityMonitorSecondaryMonitor>;
    sflow?: pulumi.Input<inputs.VisibilityMonitorSflow>;
    /**
     * Enable topk for sources to primary-entities
     */
    sourceEntityTopk?: pulumi.Input<number>;
    template?: pulumi.Input<inputs.VisibilityMonitorTemplate>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VisibilityMonitor resource.
 */
export interface VisibilityMonitorArgs {
    agentLists?: pulumi.Input<pulumi.Input<inputs.VisibilityMonitorAgentList>[]>;
    debugLists?: pulumi.Input<pulumi.Input<inputs.VisibilityMonitorDebugList>[]>;
    deleteDebugFile?: pulumi.Input<inputs.VisibilityMonitorDeleteDebugFile>;
    /**
     * Start indexing associated sessions
     */
    indexSessions?: pulumi.Input<number>;
    /**
     * 'per-cpu': Use per cpu list;
     */
    indexSessionsType?: pulumi.Input<string>;
    /**
     * Enable topk for primary entities
     */
    monEntityTopk?: pulumi.Input<number>;
    /**
     * 'source': Monitor traffic from all sources; 'dest': Monitor traffic to any destination; 'service': Monitor traffic to
     * any service; 'source-nat-ip': Monitor traffic to all source nat IPs;
     */
    monitorKey?: pulumi.Input<string>;
    netflow?: pulumi.Input<inputs.VisibilityMonitorNetflow>;
    /**
     * 'traffic': Mointor traffic; 'xflow': Monitor xflow samples;
     */
    primaryMonitor: pulumi.Input<string>;
    replayDebugFile?: pulumi.Input<inputs.VisibilityMonitorReplayDebugFile>;
    secondaryMonitor?: pulumi.Input<inputs.VisibilityMonitorSecondaryMonitor>;
    sflow?: pulumi.Input<inputs.VisibilityMonitorSflow>;
    /**
     * Enable topk for sources to primary-entities
     */
    sourceEntityTopk?: pulumi.Input<number>;
    template?: pulumi.Input<inputs.VisibilityMonitorTemplate>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
