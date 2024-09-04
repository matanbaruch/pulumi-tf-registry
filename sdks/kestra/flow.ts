// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Flow extends pulumi.CustomResource {
    /**
     * Get an existing Flow resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FlowState, opts?: pulumi.CustomResourceOptions): Flow {
        return new Flow(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'kestra:index/flow:Flow';

    /**
     * Returns true if the given object is an instance of Flow.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Flow {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Flow.__pulumiType;
    }

    /**
     * The flow full content in yaml string.
     */
    public readonly content!: pulumi.Output<string>;
    /**
     * The flow id.
     */
    public readonly flowId!: pulumi.Output<string>;
    /**
     * The flow namespace.
     */
    public readonly namespace!: pulumi.Output<string>;
    /**
     * The flow revision.
     */
    public /*out*/ readonly revision!: pulumi.Output<number>;
    /**
     * The tenant id.
     */
    public /*out*/ readonly tenantId!: pulumi.Output<string>;

    /**
     * Create a Flow resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FlowArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FlowArgs | FlowState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FlowState | undefined;
            resourceInputs["content"] = state ? state.content : undefined;
            resourceInputs["flowId"] = state ? state.flowId : undefined;
            resourceInputs["namespace"] = state ? state.namespace : undefined;
            resourceInputs["revision"] = state ? state.revision : undefined;
            resourceInputs["tenantId"] = state ? state.tenantId : undefined;
        } else {
            const args = argsOrState as FlowArgs | undefined;
            if ((!args || args.content === undefined) && !opts.urn) {
                throw new Error("Missing required property 'content'");
            }
            if ((!args || args.flowId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'flowId'");
            }
            if ((!args || args.namespace === undefined) && !opts.urn) {
                throw new Error("Missing required property 'namespace'");
            }
            resourceInputs["content"] = args ? args.content : undefined;
            resourceInputs["flowId"] = args ? args.flowId : undefined;
            resourceInputs["namespace"] = args ? args.namespace : undefined;
            resourceInputs["revision"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Flow.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Flow resources.
 */
export interface FlowState {
    /**
     * The flow full content in yaml string.
     */
    content?: pulumi.Input<string>;
    /**
     * The flow id.
     */
    flowId?: pulumi.Input<string>;
    /**
     * The flow namespace.
     */
    namespace?: pulumi.Input<string>;
    /**
     * The flow revision.
     */
    revision?: pulumi.Input<number>;
    /**
     * The tenant id.
     */
    tenantId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Flow resource.
 */
export interface FlowArgs {
    /**
     * The flow full content in yaml string.
     */
    content: pulumi.Input<string>;
    /**
     * The flow id.
     */
    flowId: pulumi.Input<string>;
    /**
     * The flow namespace.
     */
    namespace: pulumi.Input<string>;
}
