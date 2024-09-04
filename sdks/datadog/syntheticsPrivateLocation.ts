// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SyntheticsPrivateLocation extends pulumi.CustomResource {
    /**
     * Get an existing SyntheticsPrivateLocation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SyntheticsPrivateLocationState, opts?: pulumi.CustomResourceOptions): SyntheticsPrivateLocation {
        return new SyntheticsPrivateLocation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'datadog:index/syntheticsPrivateLocation:SyntheticsPrivateLocation';

    /**
     * Returns true if the given object is an instance of SyntheticsPrivateLocation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SyntheticsPrivateLocation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SyntheticsPrivateLocation.__pulumiType;
    }

    /**
     * Configuration skeleton for the private location. See installation instructions of the private location on how to use
     * this configuration.
     */
    public /*out*/ readonly config!: pulumi.Output<string>;
    /**
     * Description of the private location.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The private location metadata
     */
    public readonly metadata!: pulumi.Output<outputs.SyntheticsPrivateLocationMetadata | undefined>;
    /**
     * Synthetics private location name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * A list of tags to associate with your synthetics private location.
     */
    public readonly tags!: pulumi.Output<string[] | undefined>;

    /**
     * Create a SyntheticsPrivateLocation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SyntheticsPrivateLocationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SyntheticsPrivateLocationArgs | SyntheticsPrivateLocationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SyntheticsPrivateLocationState | undefined;
            resourceInputs["config"] = state ? state.config : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["metadata"] = state ? state.metadata : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as SyntheticsPrivateLocationArgs | undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["config"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["config"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(SyntheticsPrivateLocation.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SyntheticsPrivateLocation resources.
 */
export interface SyntheticsPrivateLocationState {
    /**
     * Configuration skeleton for the private location. See installation instructions of the private location on how to use
     * this configuration.
     */
    config?: pulumi.Input<string>;
    /**
     * Description of the private location.
     */
    description?: pulumi.Input<string>;
    /**
     * The private location metadata
     */
    metadata?: pulumi.Input<inputs.SyntheticsPrivateLocationMetadata>;
    /**
     * Synthetics private location name.
     */
    name?: pulumi.Input<string>;
    /**
     * A list of tags to associate with your synthetics private location.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a SyntheticsPrivateLocation resource.
 */
export interface SyntheticsPrivateLocationArgs {
    /**
     * Description of the private location.
     */
    description?: pulumi.Input<string>;
    /**
     * The private location metadata
     */
    metadata?: pulumi.Input<inputs.SyntheticsPrivateLocationMetadata>;
    /**
     * Synthetics private location name.
     */
    name?: pulumi.Input<string>;
    /**
     * A list of tags to associate with your synthetics private location.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}
