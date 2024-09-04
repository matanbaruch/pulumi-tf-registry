// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ComputeNodeTemplate extends pulumi.CustomResource {
    /**
     * Get an existing ComputeNodeTemplate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ComputeNodeTemplateState, opts?: pulumi.CustomResourceOptions): ComputeNodeTemplate {
        return new ComputeNodeTemplate(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/computeNodeTemplate:ComputeNodeTemplate';

    /**
     * Returns true if the given object is an instance of ComputeNodeTemplate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ComputeNodeTemplate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ComputeNodeTemplate.__pulumiType;
    }

    /**
     * List of the type and count of accelerator cards attached to the node template
     */
    public readonly accelerators!: pulumi.Output<outputs.ComputeNodeTemplateAccelerator[] | undefined>;
    /**
     * CPU overcommit. Default value: "NONE" Possible values: ["ENABLED", "NONE"]
     */
    public readonly cpuOvercommitType!: pulumi.Output<string | undefined>;
    /**
     * Creation timestamp in RFC3339 text format.
     */
    public /*out*/ readonly creationTimestamp!: pulumi.Output<string>;
    /**
     * An optional textual description of the resource.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Name of the resource.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Labels to use for node affinity, which will be used in instance scheduling.
     */
    public readonly nodeAffinityLabels!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Node type to use for nodes group that are created from this template. Only one of nodeTypeFlexibility and nodeType can
     * be specified.
     */
    public readonly nodeType!: pulumi.Output<string | undefined>;
    /**
     * Flexible properties for the desired node type. Node groups that use this node template will create nodes of a type that
     * matches these properties. Only one of nodeTypeFlexibility and nodeType can be specified.
     */
    public readonly nodeTypeFlexibility!: pulumi.Output<outputs.ComputeNodeTemplateNodeTypeFlexibility | undefined>;
    public readonly project!: pulumi.Output<string>;
    /**
     * Region where nodes using the node template will be created. If it is not provided, the provider region is used.
     */
    public readonly region!: pulumi.Output<string>;
    public /*out*/ readonly selfLink!: pulumi.Output<string>;
    /**
     * The server binding policy for nodes using this template. Determines where the nodes should restart following a
     * maintenance event.
     */
    public readonly serverBinding!: pulumi.Output<outputs.ComputeNodeTemplateServerBinding | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.ComputeNodeTemplateTimeouts | undefined>;

    /**
     * Create a ComputeNodeTemplate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ComputeNodeTemplateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ComputeNodeTemplateArgs | ComputeNodeTemplateState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ComputeNodeTemplateState | undefined;
            resourceInputs["accelerators"] = state ? state.accelerators : undefined;
            resourceInputs["cpuOvercommitType"] = state ? state.cpuOvercommitType : undefined;
            resourceInputs["creationTimestamp"] = state ? state.creationTimestamp : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nodeAffinityLabels"] = state ? state.nodeAffinityLabels : undefined;
            resourceInputs["nodeType"] = state ? state.nodeType : undefined;
            resourceInputs["nodeTypeFlexibility"] = state ? state.nodeTypeFlexibility : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["selfLink"] = state ? state.selfLink : undefined;
            resourceInputs["serverBinding"] = state ? state.serverBinding : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ComputeNodeTemplateArgs | undefined;
            resourceInputs["accelerators"] = args ? args.accelerators : undefined;
            resourceInputs["cpuOvercommitType"] = args ? args.cpuOvercommitType : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nodeAffinityLabels"] = args ? args.nodeAffinityLabels : undefined;
            resourceInputs["nodeType"] = args ? args.nodeType : undefined;
            resourceInputs["nodeTypeFlexibility"] = args ? args.nodeTypeFlexibility : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["serverBinding"] = args ? args.serverBinding : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["creationTimestamp"] = undefined /*out*/;
            resourceInputs["selfLink"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ComputeNodeTemplate.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ComputeNodeTemplate resources.
 */
export interface ComputeNodeTemplateState {
    /**
     * List of the type and count of accelerator cards attached to the node template
     */
    accelerators?: pulumi.Input<pulumi.Input<inputs.ComputeNodeTemplateAccelerator>[]>;
    /**
     * CPU overcommit. Default value: "NONE" Possible values: ["ENABLED", "NONE"]
     */
    cpuOvercommitType?: pulumi.Input<string>;
    /**
     * Creation timestamp in RFC3339 text format.
     */
    creationTimestamp?: pulumi.Input<string>;
    /**
     * An optional textual description of the resource.
     */
    description?: pulumi.Input<string>;
    /**
     * Name of the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * Labels to use for node affinity, which will be used in instance scheduling.
     */
    nodeAffinityLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Node type to use for nodes group that are created from this template. Only one of nodeTypeFlexibility and nodeType can
     * be specified.
     */
    nodeType?: pulumi.Input<string>;
    /**
     * Flexible properties for the desired node type. Node groups that use this node template will create nodes of a type that
     * matches these properties. Only one of nodeTypeFlexibility and nodeType can be specified.
     */
    nodeTypeFlexibility?: pulumi.Input<inputs.ComputeNodeTemplateNodeTypeFlexibility>;
    project?: pulumi.Input<string>;
    /**
     * Region where nodes using the node template will be created. If it is not provided, the provider region is used.
     */
    region?: pulumi.Input<string>;
    selfLink?: pulumi.Input<string>;
    /**
     * The server binding policy for nodes using this template. Determines where the nodes should restart following a
     * maintenance event.
     */
    serverBinding?: pulumi.Input<inputs.ComputeNodeTemplateServerBinding>;
    timeouts?: pulumi.Input<inputs.ComputeNodeTemplateTimeouts>;
}

/**
 * The set of arguments for constructing a ComputeNodeTemplate resource.
 */
export interface ComputeNodeTemplateArgs {
    /**
     * List of the type and count of accelerator cards attached to the node template
     */
    accelerators?: pulumi.Input<pulumi.Input<inputs.ComputeNodeTemplateAccelerator>[]>;
    /**
     * CPU overcommit. Default value: "NONE" Possible values: ["ENABLED", "NONE"]
     */
    cpuOvercommitType?: pulumi.Input<string>;
    /**
     * An optional textual description of the resource.
     */
    description?: pulumi.Input<string>;
    /**
     * Name of the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * Labels to use for node affinity, which will be used in instance scheduling.
     */
    nodeAffinityLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Node type to use for nodes group that are created from this template. Only one of nodeTypeFlexibility and nodeType can
     * be specified.
     */
    nodeType?: pulumi.Input<string>;
    /**
     * Flexible properties for the desired node type. Node groups that use this node template will create nodes of a type that
     * matches these properties. Only one of nodeTypeFlexibility and nodeType can be specified.
     */
    nodeTypeFlexibility?: pulumi.Input<inputs.ComputeNodeTemplateNodeTypeFlexibility>;
    project?: pulumi.Input<string>;
    /**
     * Region where nodes using the node template will be created. If it is not provided, the provider region is used.
     */
    region?: pulumi.Input<string>;
    /**
     * The server binding policy for nodes using this template. Determines where the nodes should restart following a
     * maintenance event.
     */
    serverBinding?: pulumi.Input<inputs.ComputeNodeTemplateServerBinding>;
    timeouts?: pulumi.Input<inputs.ComputeNodeTemplateTimeouts>;
}
