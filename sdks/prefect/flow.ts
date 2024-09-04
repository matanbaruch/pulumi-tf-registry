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
    public static readonly __pulumiType = 'prefect:index/flow:Flow';

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
     * Account ID (UUID), defaults to the account set in the provider
     */
    public readonly accountId!: pulumi.Output<string | undefined>;
    /**
     * Timestamp of when the resource was created (RFC3339)
     */
    public /*out*/ readonly created!: pulumi.Output<string>;
    /**
     * Name of the flow
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Tags associated with the flow
     */
    public readonly tags!: pulumi.Output<string[]>;
    /**
     * Timestamp of when the resource was updated (RFC3339)
     */
    public /*out*/ readonly updated!: pulumi.Output<string>;
    /**
     * Workspace ID (UUID)
     */
    public readonly workspaceId!: pulumi.Output<string | undefined>;

    /**
     * Create a Flow resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: FlowArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FlowArgs | FlowState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FlowState | undefined;
            resourceInputs["accountId"] = state ? state.accountId : undefined;
            resourceInputs["created"] = state ? state.created : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["updated"] = state ? state.updated : undefined;
            resourceInputs["workspaceId"] = state ? state.workspaceId : undefined;
        } else {
            const args = argsOrState as FlowArgs | undefined;
            resourceInputs["accountId"] = args ? args.accountId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["workspaceId"] = args ? args.workspaceId : undefined;
            resourceInputs["created"] = undefined /*out*/;
            resourceInputs["updated"] = undefined /*out*/;
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
     * Account ID (UUID), defaults to the account set in the provider
     */
    accountId?: pulumi.Input<string>;
    /**
     * Timestamp of when the resource was created (RFC3339)
     */
    created?: pulumi.Input<string>;
    /**
     * Name of the flow
     */
    name?: pulumi.Input<string>;
    /**
     * Tags associated with the flow
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Timestamp of when the resource was updated (RFC3339)
     */
    updated?: pulumi.Input<string>;
    /**
     * Workspace ID (UUID)
     */
    workspaceId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Flow resource.
 */
export interface FlowArgs {
    /**
     * Account ID (UUID), defaults to the account set in the provider
     */
    accountId?: pulumi.Input<string>;
    /**
     * Name of the flow
     */
    name?: pulumi.Input<string>;
    /**
     * Tags associated with the flow
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Workspace ID (UUID)
     */
    workspaceId?: pulumi.Input<string>;
}
