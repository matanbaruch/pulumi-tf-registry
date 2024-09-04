// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Graph extends pulumi.CustomResource {
    /**
     * Get an existing Graph resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GraphState, opts?: pulumi.CustomResourceOptions): Graph {
        return new Graph(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'circonus:index/graph:Graph';

    /**
     * Returns true if the given object is an instance of Graph.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Graph {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Graph.__pulumiType;
    }

    public readonly description!: pulumi.Output<string | undefined>;
    public readonly graphStyle!: pulumi.Output<string | undefined>;
    public readonly guides!: pulumi.Output<outputs.GraphGuide[] | undefined>;
    public readonly left!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * How the line should change between point. A string containing either 'stepped', 'interpolated' or null.
     */
    public readonly lineStyle!: pulumi.Output<string | undefined>;
    public readonly metricClusters!: pulumi.Output<outputs.GraphMetricCluster[] | undefined>;
    public readonly metrics!: pulumi.Output<outputs.GraphMetric[] | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly notes!: pulumi.Output<string | undefined>;
    public readonly right!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tags!: pulumi.Output<string[] | undefined>;

    /**
     * Create a Graph resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: GraphArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GraphArgs | GraphState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GraphState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["graphStyle"] = state ? state.graphStyle : undefined;
            resourceInputs["guides"] = state ? state.guides : undefined;
            resourceInputs["left"] = state ? state.left : undefined;
            resourceInputs["lineStyle"] = state ? state.lineStyle : undefined;
            resourceInputs["metricClusters"] = state ? state.metricClusters : undefined;
            resourceInputs["metrics"] = state ? state.metrics : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["notes"] = state ? state.notes : undefined;
            resourceInputs["right"] = state ? state.right : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as GraphArgs | undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["graphStyle"] = args ? args.graphStyle : undefined;
            resourceInputs["guides"] = args ? args.guides : undefined;
            resourceInputs["left"] = args ? args.left : undefined;
            resourceInputs["lineStyle"] = args ? args.lineStyle : undefined;
            resourceInputs["metricClusters"] = args ? args.metricClusters : undefined;
            resourceInputs["metrics"] = args ? args.metrics : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["notes"] = args ? args.notes : undefined;
            resourceInputs["right"] = args ? args.right : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Graph.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Graph resources.
 */
export interface GraphState {
    description?: pulumi.Input<string>;
    graphStyle?: pulumi.Input<string>;
    guides?: pulumi.Input<pulumi.Input<inputs.GraphGuide>[]>;
    left?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * How the line should change between point. A string containing either 'stepped', 'interpolated' or null.
     */
    lineStyle?: pulumi.Input<string>;
    metricClusters?: pulumi.Input<pulumi.Input<inputs.GraphMetricCluster>[]>;
    metrics?: pulumi.Input<pulumi.Input<inputs.GraphMetric>[]>;
    name?: pulumi.Input<string>;
    notes?: pulumi.Input<string>;
    right?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a Graph resource.
 */
export interface GraphArgs {
    description?: pulumi.Input<string>;
    graphStyle?: pulumi.Input<string>;
    guides?: pulumi.Input<pulumi.Input<inputs.GraphGuide>[]>;
    left?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * How the line should change between point. A string containing either 'stepped', 'interpolated' or null.
     */
    lineStyle?: pulumi.Input<string>;
    metricClusters?: pulumi.Input<pulumi.Input<inputs.GraphMetricCluster>[]>;
    metrics?: pulumi.Input<pulumi.Input<inputs.GraphMetric>[]>;
    name?: pulumi.Input<string>;
    notes?: pulumi.Input<string>;
    right?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}
