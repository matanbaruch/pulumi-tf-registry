// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Pipeline extends pulumi.CustomResource {
    /**
     * Get an existing Pipeline resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PipelineState, opts?: pulumi.CustomResourceOptions): Pipeline {
        return new Pipeline(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'rafay:index/pipeline:Pipeline';

    /**
     * Returns true if the given object is an instance of Pipeline.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Pipeline {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Pipeline.__pulumiType;
    }

    /**
     * impersonate user
     */
    public readonly impersonate!: pulumi.Output<string | undefined>;
    /**
     * Metadata of the pipeline resource
     */
    public readonly metadata!: pulumi.Output<outputs.PipelineMetadata | undefined>;
    /**
     * Specification of the pipeline resource
     */
    public readonly spec!: pulumi.Output<outputs.PipelineSpec | undefined>;
    /**
     * pipeline status
     */
    public readonly statuses!: pulumi.Output<outputs.PipelineStatus[] | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.PipelineTimeouts | undefined>;

    /**
     * Create a Pipeline resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: PipelineArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PipelineArgs | PipelineState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PipelineState | undefined;
            resourceInputs["impersonate"] = state ? state.impersonate : undefined;
            resourceInputs["metadata"] = state ? state.metadata : undefined;
            resourceInputs["spec"] = state ? state.spec : undefined;
            resourceInputs["statuses"] = state ? state.statuses : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as PipelineArgs | undefined;
            resourceInputs["impersonate"] = args ? args.impersonate : undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["spec"] = args ? args.spec : undefined;
            resourceInputs["statuses"] = args ? args.statuses : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Pipeline.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Pipeline resources.
 */
export interface PipelineState {
    /**
     * impersonate user
     */
    impersonate?: pulumi.Input<string>;
    /**
     * Metadata of the pipeline resource
     */
    metadata?: pulumi.Input<inputs.PipelineMetadata>;
    /**
     * Specification of the pipeline resource
     */
    spec?: pulumi.Input<inputs.PipelineSpec>;
    /**
     * pipeline status
     */
    statuses?: pulumi.Input<pulumi.Input<inputs.PipelineStatus>[]>;
    timeouts?: pulumi.Input<inputs.PipelineTimeouts>;
}

/**
 * The set of arguments for constructing a Pipeline resource.
 */
export interface PipelineArgs {
    /**
     * impersonate user
     */
    impersonate?: pulumi.Input<string>;
    /**
     * Metadata of the pipeline resource
     */
    metadata?: pulumi.Input<inputs.PipelineMetadata>;
    /**
     * Specification of the pipeline resource
     */
    spec?: pulumi.Input<inputs.PipelineSpec>;
    /**
     * pipeline status
     */
    statuses?: pulumi.Input<pulumi.Input<inputs.PipelineStatus>[]>;
    timeouts?: pulumi.Input<inputs.PipelineTimeouts>;
}
