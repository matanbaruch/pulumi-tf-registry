// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class PolicySet extends pulumi.CustomResource {
    /**
     * Get an existing PolicySet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PolicySetState, opts?: pulumi.CustomResourceOptions): PolicySet {
        return new PolicySet(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrix:index/policySet:PolicySet';

    /**
     * Returns true if the given object is an instance of PolicySet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PolicySet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PolicySet.__pulumiType;
    }

    /**
     * Indicate whether the policy set is being assigned to delivery groups.
     */
    public /*out*/ readonly assigned!: pulumi.Output<boolean>;
    /**
     * Description of the policy set.
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * Name of the policy set.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Ordered list of policies. > **Note** The order of policies in the list determines the priority of the policies.
     */
    public readonly policies!: pulumi.Output<outputs.PolicySetPolicy[]>;
    /**
     * The IDs of the scopes for the policy set to be a part of.
     */
    public readonly scopes!: pulumi.Output<string[]>;
    /**
     * Type of the policy set. Type can be one of `SitePolicies`, `DeliveryGroupPolicies`, `SiteTemplates`, or
     * `CustomTemplates`.
     */
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a PolicySet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PolicySetArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PolicySetArgs | PolicySetState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PolicySetState | undefined;
            resourceInputs["assigned"] = state ? state.assigned : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["policies"] = state ? state.policies : undefined;
            resourceInputs["scopes"] = state ? state.scopes : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as PolicySetArgs | undefined;
            if ((!args || args.policies === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policies'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["policies"] = args ? args.policies : undefined;
            resourceInputs["scopes"] = args ? args.scopes : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["assigned"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PolicySet.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PolicySet resources.
 */
export interface PolicySetState {
    /**
     * Indicate whether the policy set is being assigned to delivery groups.
     */
    assigned?: pulumi.Input<boolean>;
    /**
     * Description of the policy set.
     */
    description?: pulumi.Input<string>;
    /**
     * Name of the policy set.
     */
    name?: pulumi.Input<string>;
    /**
     * Ordered list of policies. > **Note** The order of policies in the list determines the priority of the policies.
     */
    policies?: pulumi.Input<pulumi.Input<inputs.PolicySetPolicy>[]>;
    /**
     * The IDs of the scopes for the policy set to be a part of.
     */
    scopes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Type of the policy set. Type can be one of `SitePolicies`, `DeliveryGroupPolicies`, `SiteTemplates`, or
     * `CustomTemplates`.
     */
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PolicySet resource.
 */
export interface PolicySetArgs {
    /**
     * Description of the policy set.
     */
    description?: pulumi.Input<string>;
    /**
     * Name of the policy set.
     */
    name?: pulumi.Input<string>;
    /**
     * Ordered list of policies. > **Note** The order of policies in the list determines the priority of the policies.
     */
    policies: pulumi.Input<pulumi.Input<inputs.PolicySetPolicy>[]>;
    /**
     * The IDs of the scopes for the policy set to be a part of.
     */
    scopes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Type of the policy set. Type can be one of `SitePolicies`, `DeliveryGroupPolicies`, `SiteTemplates`, or
     * `CustomTemplates`.
     */
    type?: pulumi.Input<string>;
}
