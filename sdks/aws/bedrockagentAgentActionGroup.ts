// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class BedrockagentAgentActionGroup extends pulumi.CustomResource {
    /**
     * Get an existing BedrockagentAgentActionGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BedrockagentAgentActionGroupState, opts?: pulumi.CustomResourceOptions): BedrockagentAgentActionGroup {
        return new BedrockagentAgentActionGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/bedrockagentAgentActionGroup:BedrockagentAgentActionGroup';

    /**
     * Returns true if the given object is an instance of BedrockagentAgentActionGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BedrockagentAgentActionGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BedrockagentAgentActionGroup.__pulumiType;
    }

    public readonly actionGroupExecutors!: pulumi.Output<outputs.BedrockagentAgentActionGroupActionGroupExecutor[] | undefined>;
    public /*out*/ readonly actionGroupId!: pulumi.Output<string>;
    public readonly actionGroupName!: pulumi.Output<string>;
    public readonly actionGroupState!: pulumi.Output<string>;
    public readonly agentId!: pulumi.Output<string>;
    public readonly agentVersion!: pulumi.Output<string>;
    public readonly apiSchemas!: pulumi.Output<outputs.BedrockagentAgentActionGroupApiSchema[] | undefined>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly functionSchemas!: pulumi.Output<outputs.BedrockagentAgentActionGroupFunctionSchema[] | undefined>;
    public readonly parentActionGroupSignature!: pulumi.Output<string | undefined>;
    public readonly skipResourceInUseCheck!: pulumi.Output<boolean>;

    /**
     * Create a BedrockagentAgentActionGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BedrockagentAgentActionGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BedrockagentAgentActionGroupArgs | BedrockagentAgentActionGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as BedrockagentAgentActionGroupState | undefined;
            resourceInputs["actionGroupExecutors"] = state ? state.actionGroupExecutors : undefined;
            resourceInputs["actionGroupId"] = state ? state.actionGroupId : undefined;
            resourceInputs["actionGroupName"] = state ? state.actionGroupName : undefined;
            resourceInputs["actionGroupState"] = state ? state.actionGroupState : undefined;
            resourceInputs["agentId"] = state ? state.agentId : undefined;
            resourceInputs["agentVersion"] = state ? state.agentVersion : undefined;
            resourceInputs["apiSchemas"] = state ? state.apiSchemas : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["functionSchemas"] = state ? state.functionSchemas : undefined;
            resourceInputs["parentActionGroupSignature"] = state ? state.parentActionGroupSignature : undefined;
            resourceInputs["skipResourceInUseCheck"] = state ? state.skipResourceInUseCheck : undefined;
        } else {
            const args = argsOrState as BedrockagentAgentActionGroupArgs | undefined;
            if ((!args || args.actionGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'actionGroupName'");
            }
            if ((!args || args.agentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'agentId'");
            }
            if ((!args || args.agentVersion === undefined) && !opts.urn) {
                throw new Error("Missing required property 'agentVersion'");
            }
            resourceInputs["actionGroupExecutors"] = args ? args.actionGroupExecutors : undefined;
            resourceInputs["actionGroupName"] = args ? args.actionGroupName : undefined;
            resourceInputs["actionGroupState"] = args ? args.actionGroupState : undefined;
            resourceInputs["agentId"] = args ? args.agentId : undefined;
            resourceInputs["agentVersion"] = args ? args.agentVersion : undefined;
            resourceInputs["apiSchemas"] = args ? args.apiSchemas : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["functionSchemas"] = args ? args.functionSchemas : undefined;
            resourceInputs["parentActionGroupSignature"] = args ? args.parentActionGroupSignature : undefined;
            resourceInputs["skipResourceInUseCheck"] = args ? args.skipResourceInUseCheck : undefined;
            resourceInputs["actionGroupId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(BedrockagentAgentActionGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering BedrockagentAgentActionGroup resources.
 */
export interface BedrockagentAgentActionGroupState {
    actionGroupExecutors?: pulumi.Input<pulumi.Input<inputs.BedrockagentAgentActionGroupActionGroupExecutor>[]>;
    actionGroupId?: pulumi.Input<string>;
    actionGroupName?: pulumi.Input<string>;
    actionGroupState?: pulumi.Input<string>;
    agentId?: pulumi.Input<string>;
    agentVersion?: pulumi.Input<string>;
    apiSchemas?: pulumi.Input<pulumi.Input<inputs.BedrockagentAgentActionGroupApiSchema>[]>;
    description?: pulumi.Input<string>;
    functionSchemas?: pulumi.Input<pulumi.Input<inputs.BedrockagentAgentActionGroupFunctionSchema>[]>;
    parentActionGroupSignature?: pulumi.Input<string>;
    skipResourceInUseCheck?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a BedrockagentAgentActionGroup resource.
 */
export interface BedrockagentAgentActionGroupArgs {
    actionGroupExecutors?: pulumi.Input<pulumi.Input<inputs.BedrockagentAgentActionGroupActionGroupExecutor>[]>;
    actionGroupName: pulumi.Input<string>;
    actionGroupState?: pulumi.Input<string>;
    agentId: pulumi.Input<string>;
    agentVersion: pulumi.Input<string>;
    apiSchemas?: pulumi.Input<pulumi.Input<inputs.BedrockagentAgentActionGroupApiSchema>[]>;
    description?: pulumi.Input<string>;
    functionSchemas?: pulumi.Input<pulumi.Input<inputs.BedrockagentAgentActionGroupFunctionSchema>[]>;
    parentActionGroupSignature?: pulumi.Input<string>;
    skipResourceInUseCheck?: pulumi.Input<boolean>;
}
