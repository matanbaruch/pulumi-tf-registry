// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DatapipelinePipeline extends pulumi.CustomResource {
    /**
     * Get an existing DatapipelinePipeline resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DatapipelinePipelineState, opts?: pulumi.CustomResourceOptions): DatapipelinePipeline {
        return new DatapipelinePipeline(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/datapipelinePipeline:DatapipelinePipeline';

    /**
     * Returns true if the given object is an instance of DatapipelinePipeline.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DatapipelinePipeline {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DatapipelinePipeline.__pulumiType;
    }

    /**
     * Indicates whether to validate and start the pipeline or stop an active pipeline. By default, the value is set to true.
     */
    public readonly activate!: pulumi.Output<boolean>;
    /**
     * A description of the pipeline.
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * The name of the pipeline.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The parameter objects used with the pipeline.
     */
    public readonly parameterObjects!: pulumi.Output<outputs.DatapipelinePipelineParameterObject[]>;
    /**
     * The parameter values used with the pipeline.
     */
    public readonly parameterValues!: pulumi.Output<outputs.DatapipelinePipelineParameterValue[]>;
    public /*out*/ readonly pipelineId!: pulumi.Output<string>;
    /**
     * The objects that define the pipeline. These objects overwrite the existing pipeline definition. Not all objects, fields,
     * and values can be updated. For information about restrictions, see Editing Your Pipeline in the AWS Data Pipeline
     * Developer Guide.
     */
    public readonly pipelineObjects!: pulumi.Output<outputs.DatapipelinePipelinePipelineObject[]>;
    /**
     * A list of arbitrary tags (key-value pairs) to associate with the pipeline, which you can use to control permissions. For
     * more information, see Controlling Access to Pipelines and Resources in the AWS Data Pipeline Developer Guide.
     */
    public readonly pipelineTags!: pulumi.Output<outputs.DatapipelinePipelinePipelineTag[]>;

    /**
     * Create a DatapipelinePipeline resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: DatapipelinePipelineArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DatapipelinePipelineArgs | DatapipelinePipelineState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DatapipelinePipelineState | undefined;
            resourceInputs["activate"] = state ? state.activate : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["parameterObjects"] = state ? state.parameterObjects : undefined;
            resourceInputs["parameterValues"] = state ? state.parameterValues : undefined;
            resourceInputs["pipelineId"] = state ? state.pipelineId : undefined;
            resourceInputs["pipelineObjects"] = state ? state.pipelineObjects : undefined;
            resourceInputs["pipelineTags"] = state ? state.pipelineTags : undefined;
        } else {
            const args = argsOrState as DatapipelinePipelineArgs | undefined;
            resourceInputs["activate"] = args ? args.activate : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["parameterObjects"] = args ? args.parameterObjects : undefined;
            resourceInputs["parameterValues"] = args ? args.parameterValues : undefined;
            resourceInputs["pipelineObjects"] = args ? args.pipelineObjects : undefined;
            resourceInputs["pipelineTags"] = args ? args.pipelineTags : undefined;
            resourceInputs["pipelineId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DatapipelinePipeline.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DatapipelinePipeline resources.
 */
export interface DatapipelinePipelineState {
    /**
     * Indicates whether to validate and start the pipeline or stop an active pipeline. By default, the value is set to true.
     */
    activate?: pulumi.Input<boolean>;
    /**
     * A description of the pipeline.
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the pipeline.
     */
    name?: pulumi.Input<string>;
    /**
     * The parameter objects used with the pipeline.
     */
    parameterObjects?: pulumi.Input<pulumi.Input<inputs.DatapipelinePipelineParameterObject>[]>;
    /**
     * The parameter values used with the pipeline.
     */
    parameterValues?: pulumi.Input<pulumi.Input<inputs.DatapipelinePipelineParameterValue>[]>;
    pipelineId?: pulumi.Input<string>;
    /**
     * The objects that define the pipeline. These objects overwrite the existing pipeline definition. Not all objects, fields,
     * and values can be updated. For information about restrictions, see Editing Your Pipeline in the AWS Data Pipeline
     * Developer Guide.
     */
    pipelineObjects?: pulumi.Input<pulumi.Input<inputs.DatapipelinePipelinePipelineObject>[]>;
    /**
     * A list of arbitrary tags (key-value pairs) to associate with the pipeline, which you can use to control permissions. For
     * more information, see Controlling Access to Pipelines and Resources in the AWS Data Pipeline Developer Guide.
     */
    pipelineTags?: pulumi.Input<pulumi.Input<inputs.DatapipelinePipelinePipelineTag>[]>;
}

/**
 * The set of arguments for constructing a DatapipelinePipeline resource.
 */
export interface DatapipelinePipelineArgs {
    /**
     * Indicates whether to validate and start the pipeline or stop an active pipeline. By default, the value is set to true.
     */
    activate?: pulumi.Input<boolean>;
    /**
     * A description of the pipeline.
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the pipeline.
     */
    name?: pulumi.Input<string>;
    /**
     * The parameter objects used with the pipeline.
     */
    parameterObjects?: pulumi.Input<pulumi.Input<inputs.DatapipelinePipelineParameterObject>[]>;
    /**
     * The parameter values used with the pipeline.
     */
    parameterValues?: pulumi.Input<pulumi.Input<inputs.DatapipelinePipelineParameterValue>[]>;
    /**
     * The objects that define the pipeline. These objects overwrite the existing pipeline definition. Not all objects, fields,
     * and values can be updated. For information about restrictions, see Editing Your Pipeline in the AWS Data Pipeline
     * Developer Guide.
     */
    pipelineObjects?: pulumi.Input<pulumi.Input<inputs.DatapipelinePipelinePipelineObject>[]>;
    /**
     * A list of arbitrary tags (key-value pairs) to associate with the pipeline, which you can use to control permissions. For
     * more information, see Controlling Access to Pipelines and Resources in the AWS Data Pipeline Developer Guide.
     */
    pipelineTags?: pulumi.Input<pulumi.Input<inputs.DatapipelinePipelinePipelineTag>[]>;
}
