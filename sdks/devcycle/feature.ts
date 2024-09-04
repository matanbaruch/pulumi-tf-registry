// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Feature extends pulumi.CustomResource {
    /**
     * Get an existing Feature resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FeatureState, opts?: pulumi.CustomResourceOptions): Feature {
        return new Feature(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'devcycle:index/feature:Feature';

    /**
     * Returns true if the given object is an instance of Feature.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Feature {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Feature.__pulumiType;
    }

    /**
     * Feature description
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * Feature key
     */
    public readonly key!: pulumi.Output<string>;
    /**
     * Feature name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Project ID that the feature belongs to
     */
    public readonly projectId!: pulumi.Output<string>;
    /**
     * Source of Feature creation
     */
    public /*out*/ readonly source!: pulumi.Output<string>;
    /**
     * Feature tags
     */
    public readonly tags!: pulumi.Output<string[] | undefined>;
    /**
     * Feature Type
     */
    public readonly type!: pulumi.Output<string>;
    /**
     * Feature variables
     */
    public readonly variables!: pulumi.Output<outputs.FeatureVariable[] | undefined>;
    /**
     * Feature variations
     */
    public readonly variations!: pulumi.Output<outputs.FeatureVariation[] | undefined>;

    /**
     * Create a Feature resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FeatureArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FeatureArgs | FeatureState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FeatureState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["key"] = state ? state.key : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["source"] = state ? state.source : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["variables"] = state ? state.variables : undefined;
            resourceInputs["variations"] = state ? state.variations : undefined;
        } else {
            const args = argsOrState as FeatureArgs | undefined;
            if ((!args || args.description === undefined) && !opts.urn) {
                throw new Error("Missing required property 'description'");
            }
            if ((!args || args.key === undefined) && !opts.urn) {
                throw new Error("Missing required property 'key'");
            }
            if ((!args || args.projectId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'projectId'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["key"] = args ? args.key : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["variables"] = args ? args.variables : undefined;
            resourceInputs["variations"] = args ? args.variations : undefined;
            resourceInputs["source"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Feature.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Feature resources.
 */
export interface FeatureState {
    /**
     * Feature description
     */
    description?: pulumi.Input<string>;
    /**
     * Feature key
     */
    key?: pulumi.Input<string>;
    /**
     * Feature name
     */
    name?: pulumi.Input<string>;
    /**
     * Project ID that the feature belongs to
     */
    projectId?: pulumi.Input<string>;
    /**
     * Source of Feature creation
     */
    source?: pulumi.Input<string>;
    /**
     * Feature tags
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Feature Type
     */
    type?: pulumi.Input<string>;
    /**
     * Feature variables
     */
    variables?: pulumi.Input<pulumi.Input<inputs.FeatureVariable>[]>;
    /**
     * Feature variations
     */
    variations?: pulumi.Input<pulumi.Input<inputs.FeatureVariation>[]>;
}

/**
 * The set of arguments for constructing a Feature resource.
 */
export interface FeatureArgs {
    /**
     * Feature description
     */
    description: pulumi.Input<string>;
    /**
     * Feature key
     */
    key: pulumi.Input<string>;
    /**
     * Feature name
     */
    name?: pulumi.Input<string>;
    /**
     * Project ID that the feature belongs to
     */
    projectId: pulumi.Input<string>;
    /**
     * Feature tags
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Feature Type
     */
    type: pulumi.Input<string>;
    /**
     * Feature variables
     */
    variables?: pulumi.Input<pulumi.Input<inputs.FeatureVariable>[]>;
    /**
     * Feature variations
     */
    variations?: pulumi.Input<pulumi.Input<inputs.FeatureVariation>[]>;
}
