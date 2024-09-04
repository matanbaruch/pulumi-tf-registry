// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class PlatformIacmDefaultPipeline extends pulumi.CustomResource {
    /**
     * Get an existing PlatformIacmDefaultPipeline resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PlatformIacmDefaultPipelineState, opts?: pulumi.CustomResourceOptions): PlatformIacmDefaultPipeline {
        return new PlatformIacmDefaultPipeline(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'harness:index/platformIacmDefaultPipeline:PlatformIacmDefaultPipeline';

    /**
     * Returns true if the given object is an instance of PlatformIacmDefaultPipeline.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PlatformIacmDefaultPipeline {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PlatformIacmDefaultPipeline.__pulumiType;
    }

    /**
     * The operation associated with this default.
     */
    public readonly operation!: pulumi.Output<string>;
    /**
     * Organization identifier of the organization the default pipelines resides in.
     */
    public readonly orgId!: pulumi.Output<string>;
    /**
     * The pipeline associated with this default.
     */
    public readonly pipeline!: pulumi.Output<string>;
    /**
     * Project identifier of the project the default pipelines resides in.
     */
    public readonly projectId!: pulumi.Output<string>;
    /**
     * The provisioner associated with this default.
     */
    public readonly provisionerType!: pulumi.Output<string>;

    /**
     * Create a PlatformIacmDefaultPipeline resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PlatformIacmDefaultPipelineArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PlatformIacmDefaultPipelineArgs | PlatformIacmDefaultPipelineState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PlatformIacmDefaultPipelineState | undefined;
            resourceInputs["operation"] = state ? state.operation : undefined;
            resourceInputs["orgId"] = state ? state.orgId : undefined;
            resourceInputs["pipeline"] = state ? state.pipeline : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["provisionerType"] = state ? state.provisionerType : undefined;
        } else {
            const args = argsOrState as PlatformIacmDefaultPipelineArgs | undefined;
            if ((!args || args.operation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'operation'");
            }
            if ((!args || args.orgId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'orgId'");
            }
            if ((!args || args.pipeline === undefined) && !opts.urn) {
                throw new Error("Missing required property 'pipeline'");
            }
            if ((!args || args.projectId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'projectId'");
            }
            if ((!args || args.provisionerType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'provisionerType'");
            }
            resourceInputs["operation"] = args ? args.operation : undefined;
            resourceInputs["orgId"] = args ? args.orgId : undefined;
            resourceInputs["pipeline"] = args ? args.pipeline : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["provisionerType"] = args ? args.provisionerType : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PlatformIacmDefaultPipeline.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PlatformIacmDefaultPipeline resources.
 */
export interface PlatformIacmDefaultPipelineState {
    /**
     * The operation associated with this default.
     */
    operation?: pulumi.Input<string>;
    /**
     * Organization identifier of the organization the default pipelines resides in.
     */
    orgId?: pulumi.Input<string>;
    /**
     * The pipeline associated with this default.
     */
    pipeline?: pulumi.Input<string>;
    /**
     * Project identifier of the project the default pipelines resides in.
     */
    projectId?: pulumi.Input<string>;
    /**
     * The provisioner associated with this default.
     */
    provisionerType?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PlatformIacmDefaultPipeline resource.
 */
export interface PlatformIacmDefaultPipelineArgs {
    /**
     * The operation associated with this default.
     */
    operation: pulumi.Input<string>;
    /**
     * Organization identifier of the organization the default pipelines resides in.
     */
    orgId: pulumi.Input<string>;
    /**
     * The pipeline associated with this default.
     */
    pipeline: pulumi.Input<string>;
    /**
     * Project identifier of the project the default pipelines resides in.
     */
    projectId: pulumi.Input<string>;
    /**
     * The provisioner associated with this default.
     */
    provisionerType: pulumi.Input<string>;
}
