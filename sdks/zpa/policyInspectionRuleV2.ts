// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class PolicyInspectionRuleV2 extends pulumi.CustomResource {
    /**
     * Get an existing PolicyInspectionRuleV2 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PolicyInspectionRuleV2State, opts?: pulumi.CustomResourceOptions): PolicyInspectionRuleV2 {
        return new PolicyInspectionRuleV2(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'zpa:index/policyInspectionRuleV2:PolicyInspectionRuleV2';

    /**
     * Returns true if the given object is an instance of PolicyInspectionRuleV2.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PolicyInspectionRuleV2 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PolicyInspectionRuleV2.__pulumiType;
    }

    /**
     * This is for providing the rule action.
     */
    public readonly action!: pulumi.Output<string | undefined>;
    /**
     * This is for proviidng the set of conditions for the policy.
     */
    public readonly conditions!: pulumi.Output<outputs.PolicyInspectionRuleV2Condition[] | undefined>;
    /**
     * This is the description of the access policy.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly microtenantId!: pulumi.Output<string>;
    /**
     * This is the name of the policy.
     */
    public readonly name!: pulumi.Output<string>;
    public /*out*/ readonly policySetId!: pulumi.Output<string>;
    public readonly zpnInspectionProfileId!: pulumi.Output<string>;

    /**
     * Create a PolicyInspectionRuleV2 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: PolicyInspectionRuleV2Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PolicyInspectionRuleV2Args | PolicyInspectionRuleV2State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PolicyInspectionRuleV2State | undefined;
            resourceInputs["action"] = state ? state.action : undefined;
            resourceInputs["conditions"] = state ? state.conditions : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["microtenantId"] = state ? state.microtenantId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["policySetId"] = state ? state.policySetId : undefined;
            resourceInputs["zpnInspectionProfileId"] = state ? state.zpnInspectionProfileId : undefined;
        } else {
            const args = argsOrState as PolicyInspectionRuleV2Args | undefined;
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["conditions"] = args ? args.conditions : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["microtenantId"] = args ? args.microtenantId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["zpnInspectionProfileId"] = args ? args.zpnInspectionProfileId : undefined;
            resourceInputs["policySetId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PolicyInspectionRuleV2.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PolicyInspectionRuleV2 resources.
 */
export interface PolicyInspectionRuleV2State {
    /**
     * This is for providing the rule action.
     */
    action?: pulumi.Input<string>;
    /**
     * This is for proviidng the set of conditions for the policy.
     */
    conditions?: pulumi.Input<pulumi.Input<inputs.PolicyInspectionRuleV2Condition>[]>;
    /**
     * This is the description of the access policy.
     */
    description?: pulumi.Input<string>;
    microtenantId?: pulumi.Input<string>;
    /**
     * This is the name of the policy.
     */
    name?: pulumi.Input<string>;
    policySetId?: pulumi.Input<string>;
    zpnInspectionProfileId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PolicyInspectionRuleV2 resource.
 */
export interface PolicyInspectionRuleV2Args {
    /**
     * This is for providing the rule action.
     */
    action?: pulumi.Input<string>;
    /**
     * This is for proviidng the set of conditions for the policy.
     */
    conditions?: pulumi.Input<pulumi.Input<inputs.PolicyInspectionRuleV2Condition>[]>;
    /**
     * This is the description of the access policy.
     */
    description?: pulumi.Input<string>;
    microtenantId?: pulumi.Input<string>;
    /**
     * This is the name of the policy.
     */
    name?: pulumi.Input<string>;
    zpnInspectionProfileId?: pulumi.Input<string>;
}
