// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DataFactoryPipeline extends pulumi.CustomResource {
    /**
     * Get an existing DataFactoryPipeline resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DataFactoryPipelineState, opts?: pulumi.CustomResourceOptions): DataFactoryPipeline {
        return new DataFactoryPipeline(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/dataFactoryPipeline:DataFactoryPipeline';

    /**
     * Returns true if the given object is an instance of DataFactoryPipeline.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DataFactoryPipeline {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DataFactoryPipeline.__pulumiType;
    }

    public readonly activitiesJson!: pulumi.Output<string | undefined>;
    public readonly annotations!: pulumi.Output<string[] | undefined>;
    public readonly concurrency!: pulumi.Output<number | undefined>;
    public readonly dataFactoryId!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly folder!: pulumi.Output<string | undefined>;
    public readonly moniterMetricsAfterDuration!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly parameters!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.DataFactoryPipelineTimeouts | undefined>;
    public readonly variables!: pulumi.Output<{[key: string]: string} | undefined>;

    /**
     * Create a DataFactoryPipeline resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DataFactoryPipelineArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DataFactoryPipelineArgs | DataFactoryPipelineState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DataFactoryPipelineState | undefined;
            resourceInputs["activitiesJson"] = state ? state.activitiesJson : undefined;
            resourceInputs["annotations"] = state ? state.annotations : undefined;
            resourceInputs["concurrency"] = state ? state.concurrency : undefined;
            resourceInputs["dataFactoryId"] = state ? state.dataFactoryId : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["folder"] = state ? state.folder : undefined;
            resourceInputs["moniterMetricsAfterDuration"] = state ? state.moniterMetricsAfterDuration : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["parameters"] = state ? state.parameters : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["variables"] = state ? state.variables : undefined;
        } else {
            const args = argsOrState as DataFactoryPipelineArgs | undefined;
            if ((!args || args.dataFactoryId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dataFactoryId'");
            }
            resourceInputs["activitiesJson"] = args ? args.activitiesJson : undefined;
            resourceInputs["annotations"] = args ? args.annotations : undefined;
            resourceInputs["concurrency"] = args ? args.concurrency : undefined;
            resourceInputs["dataFactoryId"] = args ? args.dataFactoryId : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["folder"] = args ? args.folder : undefined;
            resourceInputs["moniterMetricsAfterDuration"] = args ? args.moniterMetricsAfterDuration : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["parameters"] = args ? args.parameters : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["variables"] = args ? args.variables : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DataFactoryPipeline.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DataFactoryPipeline resources.
 */
export interface DataFactoryPipelineState {
    activitiesJson?: pulumi.Input<string>;
    annotations?: pulumi.Input<pulumi.Input<string>[]>;
    concurrency?: pulumi.Input<number>;
    dataFactoryId?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    folder?: pulumi.Input<string>;
    moniterMetricsAfterDuration?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.DataFactoryPipelineTimeouts>;
    variables?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The set of arguments for constructing a DataFactoryPipeline resource.
 */
export interface DataFactoryPipelineArgs {
    activitiesJson?: pulumi.Input<string>;
    annotations?: pulumi.Input<pulumi.Input<string>[]>;
    concurrency?: pulumi.Input<number>;
    dataFactoryId: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    folder?: pulumi.Input<string>;
    moniterMetricsAfterDuration?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.DataFactoryPipelineTimeouts>;
    variables?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
