// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class OperationalRiskPolicy extends pulumi.CustomResource {
    /**
     * Get an existing OperationalRiskPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OperationalRiskPolicyState, opts?: pulumi.CustomResourceOptions): OperationalRiskPolicy {
        return new OperationalRiskPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'xray:index/operationalRiskPolicy:OperationalRiskPolicy';

    /**
     * Returns true if the given object is an instance of OperationalRiskPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OperationalRiskPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OperationalRiskPolicy.__pulumiType;
    }

    /**
     * User, who created the policy
     */
    public /*out*/ readonly author!: pulumi.Output<string>;
    /**
     * Creation timestamp
     */
    public /*out*/ readonly created!: pulumi.Output<string>;
    /**
     * More verbose description of the policy
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Modification timestamp
     */
    public /*out*/ readonly modified!: pulumi.Output<string>;
    /**
     * Name of the policy (must be unique)
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Project key for assigning this resource to. Must be 2 - 10 lowercase alphanumeric and hyphen characters.
     */
    public readonly projectKey!: pulumi.Output<string | undefined>;
    /**
     * A list of user-defined rules allowing you to trigger violations for specific vulnerability or license breaches by
     * setting a license or security criteria, with a corresponding set of automatic actions according to your needs. Rules are
     * processed according to the ascending order in which they are placed in the Rules list on the Policy. If a rule is met,
     * the subsequent rules in the list will not be applied.
     */
    public readonly rules!: pulumi.Output<outputs.OperationalRiskPolicyRule[]>;
    /**
     * Type of the policy
     */
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a OperationalRiskPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OperationalRiskPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: OperationalRiskPolicyArgs | OperationalRiskPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as OperationalRiskPolicyState | undefined;
            resourceInputs["author"] = state ? state.author : undefined;
            resourceInputs["created"] = state ? state.created : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["modified"] = state ? state.modified : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["projectKey"] = state ? state.projectKey : undefined;
            resourceInputs["rules"] = state ? state.rules : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as OperationalRiskPolicyArgs | undefined;
            if ((!args || args.rules === undefined) && !opts.urn) {
                throw new Error("Missing required property 'rules'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["projectKey"] = args ? args.projectKey : undefined;
            resourceInputs["rules"] = args ? args.rules : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["author"] = undefined /*out*/;
            resourceInputs["created"] = undefined /*out*/;
            resourceInputs["modified"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(OperationalRiskPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering OperationalRiskPolicy resources.
 */
export interface OperationalRiskPolicyState {
    /**
     * User, who created the policy
     */
    author?: pulumi.Input<string>;
    /**
     * Creation timestamp
     */
    created?: pulumi.Input<string>;
    /**
     * More verbose description of the policy
     */
    description?: pulumi.Input<string>;
    /**
     * Modification timestamp
     */
    modified?: pulumi.Input<string>;
    /**
     * Name of the policy (must be unique)
     */
    name?: pulumi.Input<string>;
    /**
     * Project key for assigning this resource to. Must be 2 - 10 lowercase alphanumeric and hyphen characters.
     */
    projectKey?: pulumi.Input<string>;
    /**
     * A list of user-defined rules allowing you to trigger violations for specific vulnerability or license breaches by
     * setting a license or security criteria, with a corresponding set of automatic actions according to your needs. Rules are
     * processed according to the ascending order in which they are placed in the Rules list on the Policy. If a rule is met,
     * the subsequent rules in the list will not be applied.
     */
    rules?: pulumi.Input<pulumi.Input<inputs.OperationalRiskPolicyRule>[]>;
    /**
     * Type of the policy
     */
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a OperationalRiskPolicy resource.
 */
export interface OperationalRiskPolicyArgs {
    /**
     * More verbose description of the policy
     */
    description?: pulumi.Input<string>;
    /**
     * Name of the policy (must be unique)
     */
    name?: pulumi.Input<string>;
    /**
     * Project key for assigning this resource to. Must be 2 - 10 lowercase alphanumeric and hyphen characters.
     */
    projectKey?: pulumi.Input<string>;
    /**
     * A list of user-defined rules allowing you to trigger violations for specific vulnerability or license breaches by
     * setting a license or security criteria, with a corresponding set of automatic actions according to your needs. Rules are
     * processed according to the ascending order in which they are placed in the Rules list on the Policy. If a rule is met,
     * the subsequent rules in the list will not be applied.
     */
    rules: pulumi.Input<pulumi.Input<inputs.OperationalRiskPolicyRule>[]>;
    /**
     * Type of the policy
     */
    type: pulumi.Input<string>;
}
