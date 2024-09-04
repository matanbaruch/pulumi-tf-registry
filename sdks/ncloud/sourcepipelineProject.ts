// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SourcepipelineProject extends pulumi.CustomResource {
    /**
     * Get an existing SourcepipelineProject resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SourcepipelineProjectState, opts?: pulumi.CustomResourceOptions): SourcepipelineProject {
        return new SourcepipelineProject(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ncloud:index/sourcepipelineProject:SourcepipelineProject';

    /**
     * Returns true if the given object is an instance of SourcepipelineProject.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SourcepipelineProject {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SourcepipelineProject.__pulumiType;
    }

    public readonly description!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly tasks!: pulumi.Output<outputs.SourcepipelineProjectTask[]>;
    public readonly timeouts!: pulumi.Output<outputs.SourcepipelineProjectTimeouts | undefined>;
    public readonly triggers!: pulumi.Output<outputs.SourcepipelineProjectTriggers | undefined>;

    /**
     * Create a SourcepipelineProject resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SourcepipelineProjectArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SourcepipelineProjectArgs | SourcepipelineProjectState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SourcepipelineProjectState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["tasks"] = state ? state.tasks : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["triggers"] = state ? state.triggers : undefined;
        } else {
            const args = argsOrState as SourcepipelineProjectArgs | undefined;
            if ((!args || args.tasks === undefined) && !opts.urn) {
                throw new Error("Missing required property 'tasks'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["tasks"] = args ? args.tasks : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["triggers"] = args ? args.triggers : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SourcepipelineProject.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SourcepipelineProject resources.
 */
export interface SourcepipelineProjectState {
    description?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    tasks?: pulumi.Input<pulumi.Input<inputs.SourcepipelineProjectTask>[]>;
    timeouts?: pulumi.Input<inputs.SourcepipelineProjectTimeouts>;
    triggers?: pulumi.Input<inputs.SourcepipelineProjectTriggers>;
}

/**
 * The set of arguments for constructing a SourcepipelineProject resource.
 */
export interface SourcepipelineProjectArgs {
    description?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    tasks: pulumi.Input<pulumi.Input<inputs.SourcepipelineProjectTask>[]>;
    timeouts?: pulumi.Input<inputs.SourcepipelineProjectTimeouts>;
    triggers?: pulumi.Input<inputs.SourcepipelineProjectTriggers>;
}
