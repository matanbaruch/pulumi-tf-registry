// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DavisAnomalyDetectors extends pulumi.CustomResource {
    /**
     * Get an existing DavisAnomalyDetectors resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DavisAnomalyDetectorsState, opts?: pulumi.CustomResourceOptions): DavisAnomalyDetectors {
        return new DavisAnomalyDetectors(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'dynatrace:index/davisAnomalyDetectors:DavisAnomalyDetectors';

    /**
     * Returns true if the given object is an instance of DavisAnomalyDetectors.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DavisAnomalyDetectors {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DavisAnomalyDetectors.__pulumiType;
    }

    /**
     * Analyzer input
     */
    public readonly analyzer!: pulumi.Output<outputs.DavisAnomalyDetectorsAnalyzer>;
    /**
     * The description of the anomaly detector
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * This setting is enabled (`true`) or disabled (`false`)
     */
    public readonly enabled!: pulumi.Output<boolean>;
    /**
     * Event template
     */
    public readonly eventTemplate!: pulumi.Output<outputs.DavisAnomalyDetectorsEventTemplate>;
    /**
     * Execution settings
     */
    public readonly executionSettings!: pulumi.Output<outputs.DavisAnomalyDetectorsExecutionSettings>;
    /**
     * Source
     */
    public readonly source!: pulumi.Output<string>;
    /**
     * The title of the anomaly detector
     */
    public readonly title!: pulumi.Output<string>;

    /**
     * Create a DavisAnomalyDetectors resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DavisAnomalyDetectorsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DavisAnomalyDetectorsArgs | DavisAnomalyDetectorsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DavisAnomalyDetectorsState | undefined;
            resourceInputs["analyzer"] = state ? state.analyzer : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["eventTemplate"] = state ? state.eventTemplate : undefined;
            resourceInputs["executionSettings"] = state ? state.executionSettings : undefined;
            resourceInputs["source"] = state ? state.source : undefined;
            resourceInputs["title"] = state ? state.title : undefined;
        } else {
            const args = argsOrState as DavisAnomalyDetectorsArgs | undefined;
            if ((!args || args.analyzer === undefined) && !opts.urn) {
                throw new Error("Missing required property 'analyzer'");
            }
            if ((!args || args.description === undefined) && !opts.urn) {
                throw new Error("Missing required property 'description'");
            }
            if ((!args || args.enabled === undefined) && !opts.urn) {
                throw new Error("Missing required property 'enabled'");
            }
            if ((!args || args.eventTemplate === undefined) && !opts.urn) {
                throw new Error("Missing required property 'eventTemplate'");
            }
            if ((!args || args.executionSettings === undefined) && !opts.urn) {
                throw new Error("Missing required property 'executionSettings'");
            }
            if ((!args || args.source === undefined) && !opts.urn) {
                throw new Error("Missing required property 'source'");
            }
            if ((!args || args.title === undefined) && !opts.urn) {
                throw new Error("Missing required property 'title'");
            }
            resourceInputs["analyzer"] = args ? args.analyzer : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["eventTemplate"] = args ? args.eventTemplate : undefined;
            resourceInputs["executionSettings"] = args ? args.executionSettings : undefined;
            resourceInputs["source"] = args ? args.source : undefined;
            resourceInputs["title"] = args ? args.title : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DavisAnomalyDetectors.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DavisAnomalyDetectors resources.
 */
export interface DavisAnomalyDetectorsState {
    /**
     * Analyzer input
     */
    analyzer?: pulumi.Input<inputs.DavisAnomalyDetectorsAnalyzer>;
    /**
     * The description of the anomaly detector
     */
    description?: pulumi.Input<string>;
    /**
     * This setting is enabled (`true`) or disabled (`false`)
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Event template
     */
    eventTemplate?: pulumi.Input<inputs.DavisAnomalyDetectorsEventTemplate>;
    /**
     * Execution settings
     */
    executionSettings?: pulumi.Input<inputs.DavisAnomalyDetectorsExecutionSettings>;
    /**
     * Source
     */
    source?: pulumi.Input<string>;
    /**
     * The title of the anomaly detector
     */
    title?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DavisAnomalyDetectors resource.
 */
export interface DavisAnomalyDetectorsArgs {
    /**
     * Analyzer input
     */
    analyzer: pulumi.Input<inputs.DavisAnomalyDetectorsAnalyzer>;
    /**
     * The description of the anomaly detector
     */
    description: pulumi.Input<string>;
    /**
     * This setting is enabled (`true`) or disabled (`false`)
     */
    enabled: pulumi.Input<boolean>;
    /**
     * Event template
     */
    eventTemplate: pulumi.Input<inputs.DavisAnomalyDetectorsEventTemplate>;
    /**
     * Execution settings
     */
    executionSettings: pulumi.Input<inputs.DavisAnomalyDetectorsExecutionSettings>;
    /**
     * Source
     */
    source: pulumi.Input<string>;
    /**
     * The title of the anomaly detector
     */
    title: pulumi.Input<string>;
}
