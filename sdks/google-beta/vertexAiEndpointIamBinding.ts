// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class VertexAiEndpointIamBinding extends pulumi.CustomResource {
    /**
     * Get an existing VertexAiEndpointIamBinding resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VertexAiEndpointIamBindingState, opts?: pulumi.CustomResourceOptions): VertexAiEndpointIamBinding {
        return new VertexAiEndpointIamBinding(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/vertexAiEndpointIamBinding:VertexAiEndpointIamBinding';

    /**
     * Returns true if the given object is an instance of VertexAiEndpointIamBinding.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VertexAiEndpointIamBinding {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VertexAiEndpointIamBinding.__pulumiType;
    }

    public readonly condition!: pulumi.Output<outputs.VertexAiEndpointIamBindingCondition | undefined>;
    public readonly endpoint!: pulumi.Output<string>;
    public /*out*/ readonly etag!: pulumi.Output<string>;
    public readonly location!: pulumi.Output<string>;
    public readonly members!: pulumi.Output<string[]>;
    public readonly project!: pulumi.Output<string>;
    public readonly role!: pulumi.Output<string>;

    /**
     * Create a VertexAiEndpointIamBinding resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VertexAiEndpointIamBindingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VertexAiEndpointIamBindingArgs | VertexAiEndpointIamBindingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VertexAiEndpointIamBindingState | undefined;
            resourceInputs["condition"] = state ? state.condition : undefined;
            resourceInputs["endpoint"] = state ? state.endpoint : undefined;
            resourceInputs["etag"] = state ? state.etag : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["members"] = state ? state.members : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["role"] = state ? state.role : undefined;
        } else {
            const args = argsOrState as VertexAiEndpointIamBindingArgs | undefined;
            if ((!args || args.endpoint === undefined) && !opts.urn) {
                throw new Error("Missing required property 'endpoint'");
            }
            if ((!args || args.members === undefined) && !opts.urn) {
                throw new Error("Missing required property 'members'");
            }
            if ((!args || args.role === undefined) && !opts.urn) {
                throw new Error("Missing required property 'role'");
            }
            resourceInputs["condition"] = args ? args.condition : undefined;
            resourceInputs["endpoint"] = args ? args.endpoint : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["members"] = args ? args.members : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["role"] = args ? args.role : undefined;
            resourceInputs["etag"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VertexAiEndpointIamBinding.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VertexAiEndpointIamBinding resources.
 */
export interface VertexAiEndpointIamBindingState {
    condition?: pulumi.Input<inputs.VertexAiEndpointIamBindingCondition>;
    endpoint?: pulumi.Input<string>;
    etag?: pulumi.Input<string>;
    location?: pulumi.Input<string>;
    members?: pulumi.Input<pulumi.Input<string>[]>;
    project?: pulumi.Input<string>;
    role?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VertexAiEndpointIamBinding resource.
 */
export interface VertexAiEndpointIamBindingArgs {
    condition?: pulumi.Input<inputs.VertexAiEndpointIamBindingCondition>;
    endpoint: pulumi.Input<string>;
    location?: pulumi.Input<string>;
    members: pulumi.Input<pulumi.Input<string>[]>;
    project?: pulumi.Input<string>;
    role: pulumi.Input<string>;
}
