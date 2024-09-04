// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class WorkspacePipeline extends pulumi.CustomResource {
    /**
     * Get an existing WorkspacePipeline resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WorkspacePipelineState, opts?: pulumi.CustomResourceOptions): WorkspacePipeline {
        return new WorkspacePipeline(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'steampipecloud:index/workspacePipeline:WorkspacePipeline';

    /**
     * Returns true if the given object is an instance of WorkspacePipeline.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WorkspacePipeline {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WorkspacePipeline.__pulumiType;
    }

    public readonly args!: pulumi.Output<string>;
    public readonly createdAt!: pulumi.Output<string>;
    public readonly createdBy!: pulumi.Output<string>;
    public readonly frequency!: pulumi.Output<string>;
    public readonly lastProcessId!: pulumi.Output<string>;
    public readonly organization!: pulumi.Output<string>;
    public readonly pipeline!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<string | undefined>;
    public readonly title!: pulumi.Output<string>;
    public readonly updatedAt!: pulumi.Output<string>;
    public readonly updatedBy!: pulumi.Output<string>;
    public /*out*/ readonly versionId!: pulumi.Output<number>;
    public readonly workspace!: pulumi.Output<string>;
    public /*out*/ readonly workspaceId!: pulumi.Output<string>;
    public /*out*/ readonly workspacePipelineId!: pulumi.Output<string>;

    /**
     * Create a WorkspacePipeline resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkspacePipelineArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WorkspacePipelineArgs | WorkspacePipelineState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WorkspacePipelineState | undefined;
            resourceInputs["args"] = state ? state.args : undefined;
            resourceInputs["createdAt"] = state ? state.createdAt : undefined;
            resourceInputs["createdBy"] = state ? state.createdBy : undefined;
            resourceInputs["frequency"] = state ? state.frequency : undefined;
            resourceInputs["lastProcessId"] = state ? state.lastProcessId : undefined;
            resourceInputs["organization"] = state ? state.organization : undefined;
            resourceInputs["pipeline"] = state ? state.pipeline : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["title"] = state ? state.title : undefined;
            resourceInputs["updatedAt"] = state ? state.updatedAt : undefined;
            resourceInputs["updatedBy"] = state ? state.updatedBy : undefined;
            resourceInputs["versionId"] = state ? state.versionId : undefined;
            resourceInputs["workspace"] = state ? state.workspace : undefined;
            resourceInputs["workspaceId"] = state ? state.workspaceId : undefined;
            resourceInputs["workspacePipelineId"] = state ? state.workspacePipelineId : undefined;
        } else {
            const args = argsOrState as WorkspacePipelineArgs | undefined;
            if ((!args || args.args === undefined) && !opts.urn) {
                throw new Error("Missing required property 'args'");
            }
            if ((!args || args.frequency === undefined) && !opts.urn) {
                throw new Error("Missing required property 'frequency'");
            }
            if ((!args || args.pipeline === undefined) && !opts.urn) {
                throw new Error("Missing required property 'pipeline'");
            }
            if ((!args || args.title === undefined) && !opts.urn) {
                throw new Error("Missing required property 'title'");
            }
            if ((!args || args.workspace === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspace'");
            }
            resourceInputs["args"] = args ? args.args : undefined;
            resourceInputs["createdAt"] = args ? args.createdAt : undefined;
            resourceInputs["createdBy"] = args ? args.createdBy : undefined;
            resourceInputs["frequency"] = args ? args.frequency : undefined;
            resourceInputs["lastProcessId"] = args ? args.lastProcessId : undefined;
            resourceInputs["organization"] = args ? args.organization : undefined;
            resourceInputs["pipeline"] = args ? args.pipeline : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["title"] = args ? args.title : undefined;
            resourceInputs["updatedAt"] = args ? args.updatedAt : undefined;
            resourceInputs["updatedBy"] = args ? args.updatedBy : undefined;
            resourceInputs["workspace"] = args ? args.workspace : undefined;
            resourceInputs["versionId"] = undefined /*out*/;
            resourceInputs["workspaceId"] = undefined /*out*/;
            resourceInputs["workspacePipelineId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(WorkspacePipeline.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering WorkspacePipeline resources.
 */
export interface WorkspacePipelineState {
    args?: pulumi.Input<string>;
    createdAt?: pulumi.Input<string>;
    createdBy?: pulumi.Input<string>;
    frequency?: pulumi.Input<string>;
    lastProcessId?: pulumi.Input<string>;
    organization?: pulumi.Input<string>;
    pipeline?: pulumi.Input<string>;
    tags?: pulumi.Input<string>;
    title?: pulumi.Input<string>;
    updatedAt?: pulumi.Input<string>;
    updatedBy?: pulumi.Input<string>;
    versionId?: pulumi.Input<number>;
    workspace?: pulumi.Input<string>;
    workspaceId?: pulumi.Input<string>;
    workspacePipelineId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a WorkspacePipeline resource.
 */
export interface WorkspacePipelineArgs {
    args: pulumi.Input<string>;
    createdAt?: pulumi.Input<string>;
    createdBy?: pulumi.Input<string>;
    frequency: pulumi.Input<string>;
    lastProcessId?: pulumi.Input<string>;
    organization?: pulumi.Input<string>;
    pipeline: pulumi.Input<string>;
    tags?: pulumi.Input<string>;
    title: pulumi.Input<string>;
    updatedAt?: pulumi.Input<string>;
    updatedBy?: pulumi.Input<string>;
    workspace: pulumi.Input<string>;
}
