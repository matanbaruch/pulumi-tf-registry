// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class AgentToken extends pulumi.CustomResource {
    /**
     * Get an existing AgentToken resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AgentTokenState, opts?: pulumi.CustomResourceOptions): AgentToken {
        return new AgentToken(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tfe:index/agentToken:AgentToken';

    /**
     * Returns true if the given object is an instance of AgentToken.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AgentToken {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AgentToken.__pulumiType;
    }

    public readonly agentPoolId!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string>;
    public /*out*/ readonly token!: pulumi.Output<string>;

    /**
     * Create a AgentToken resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AgentTokenArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AgentTokenArgs | AgentTokenState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AgentTokenState | undefined;
            resourceInputs["agentPoolId"] = state ? state.agentPoolId : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["token"] = state ? state.token : undefined;
        } else {
            const args = argsOrState as AgentTokenArgs | undefined;
            if ((!args || args.agentPoolId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'agentPoolId'");
            }
            if ((!args || args.description === undefined) && !opts.urn) {
                throw new Error("Missing required property 'description'");
            }
            resourceInputs["agentPoolId"] = args ? args.agentPoolId : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["token"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["token"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(AgentToken.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AgentToken resources.
 */
export interface AgentTokenState {
    agentPoolId?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    token?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AgentToken resource.
 */
export interface AgentTokenArgs {
    agentPoolId: pulumi.Input<string>;
    description: pulumi.Input<string>;
}
