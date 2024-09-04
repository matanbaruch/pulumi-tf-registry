// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class PolicyForwardingRule extends pulumi.CustomResource {
    /**
     * Get an existing PolicyForwardingRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PolicyForwardingRuleState, opts?: pulumi.CustomResourceOptions): PolicyForwardingRule {
        return new PolicyForwardingRule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'zpa:index/policyForwardingRule:PolicyForwardingRule';

    /**
     * Returns true if the given object is an instance of PolicyForwardingRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PolicyForwardingRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PolicyForwardingRule.__pulumiType;
    }

    /**
     * This is for providing the rule action.
     */
    public readonly action!: pulumi.Output<string | undefined>;
    /**
     * This field defines the description of the server.
     */
    public readonly actionId!: pulumi.Output<string | undefined>;
    public readonly bypassDefaultRule!: pulumi.Output<boolean | undefined>;
    /**
     * This is for proviidng the set of conditions for the policy.
     */
    public readonly conditions!: pulumi.Output<outputs.PolicyForwardingRuleCondition[] | undefined>;
    /**
     * This is for providing a customer message for the user.
     */
    public readonly customMsg!: pulumi.Output<string | undefined>;
    /**
     * This is for providing a customer message for the user.
     */
    public readonly defaultRule!: pulumi.Output<boolean | undefined>;
    /**
     * This is the description of the access policy.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly lssDefaultRule!: pulumi.Output<boolean | undefined>;
    public readonly microtenantId!: pulumi.Output<string>;
    /**
     * This is the name of the policy.
     */
    public readonly name!: pulumi.Output<string>;
    public readonly operator!: pulumi.Output<string>;
    public readonly policySetId!: pulumi.Output<string>;
    public readonly policyType!: pulumi.Output<string>;
    public readonly priority!: pulumi.Output<string>;
    public readonly reauthDefaultRule!: pulumi.Output<boolean | undefined>;
    public readonly reauthIdleTimeout!: pulumi.Output<string | undefined>;
    public readonly reauthTimeout!: pulumi.Output<string | undefined>;
    /**
     * @deprecated Deprecated
     */
    public readonly ruleOrder!: pulumi.Output<string>;
    public readonly zpnCbiProfileId!: pulumi.Output<string>;
    public readonly zpnInspectionProfileId!: pulumi.Output<string>;
    public readonly zpnIsolationProfileId!: pulumi.Output<string>;

    /**
     * Create a PolicyForwardingRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: PolicyForwardingRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PolicyForwardingRuleArgs | PolicyForwardingRuleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PolicyForwardingRuleState | undefined;
            resourceInputs["action"] = state ? state.action : undefined;
            resourceInputs["actionId"] = state ? state.actionId : undefined;
            resourceInputs["bypassDefaultRule"] = state ? state.bypassDefaultRule : undefined;
            resourceInputs["conditions"] = state ? state.conditions : undefined;
            resourceInputs["customMsg"] = state ? state.customMsg : undefined;
            resourceInputs["defaultRule"] = state ? state.defaultRule : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["lssDefaultRule"] = state ? state.lssDefaultRule : undefined;
            resourceInputs["microtenantId"] = state ? state.microtenantId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["operator"] = state ? state.operator : undefined;
            resourceInputs["policySetId"] = state ? state.policySetId : undefined;
            resourceInputs["policyType"] = state ? state.policyType : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["reauthDefaultRule"] = state ? state.reauthDefaultRule : undefined;
            resourceInputs["reauthIdleTimeout"] = state ? state.reauthIdleTimeout : undefined;
            resourceInputs["reauthTimeout"] = state ? state.reauthTimeout : undefined;
            resourceInputs["ruleOrder"] = state ? state.ruleOrder : undefined;
            resourceInputs["zpnCbiProfileId"] = state ? state.zpnCbiProfileId : undefined;
            resourceInputs["zpnInspectionProfileId"] = state ? state.zpnInspectionProfileId : undefined;
            resourceInputs["zpnIsolationProfileId"] = state ? state.zpnIsolationProfileId : undefined;
        } else {
            const args = argsOrState as PolicyForwardingRuleArgs | undefined;
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["actionId"] = args ? args.actionId : undefined;
            resourceInputs["bypassDefaultRule"] = args ? args.bypassDefaultRule : undefined;
            resourceInputs["conditions"] = args ? args.conditions : undefined;
            resourceInputs["customMsg"] = args ? args.customMsg : undefined;
            resourceInputs["defaultRule"] = args ? args.defaultRule : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["lssDefaultRule"] = args ? args.lssDefaultRule : undefined;
            resourceInputs["microtenantId"] = args ? args.microtenantId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["operator"] = args ? args.operator : undefined;
            resourceInputs["policySetId"] = args ? args.policySetId : undefined;
            resourceInputs["policyType"] = args ? args.policyType : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["reauthDefaultRule"] = args ? args.reauthDefaultRule : undefined;
            resourceInputs["reauthIdleTimeout"] = args ? args.reauthIdleTimeout : undefined;
            resourceInputs["reauthTimeout"] = args ? args.reauthTimeout : undefined;
            resourceInputs["ruleOrder"] = args ? args.ruleOrder : undefined;
            resourceInputs["zpnCbiProfileId"] = args ? args.zpnCbiProfileId : undefined;
            resourceInputs["zpnInspectionProfileId"] = args ? args.zpnInspectionProfileId : undefined;
            resourceInputs["zpnIsolationProfileId"] = args ? args.zpnIsolationProfileId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PolicyForwardingRule.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PolicyForwardingRule resources.
 */
export interface PolicyForwardingRuleState {
    /**
     * This is for providing the rule action.
     */
    action?: pulumi.Input<string>;
    /**
     * This field defines the description of the server.
     */
    actionId?: pulumi.Input<string>;
    bypassDefaultRule?: pulumi.Input<boolean>;
    /**
     * This is for proviidng the set of conditions for the policy.
     */
    conditions?: pulumi.Input<pulumi.Input<inputs.PolicyForwardingRuleCondition>[]>;
    /**
     * This is for providing a customer message for the user.
     */
    customMsg?: pulumi.Input<string>;
    /**
     * This is for providing a customer message for the user.
     */
    defaultRule?: pulumi.Input<boolean>;
    /**
     * This is the description of the access policy.
     */
    description?: pulumi.Input<string>;
    lssDefaultRule?: pulumi.Input<boolean>;
    microtenantId?: pulumi.Input<string>;
    /**
     * This is the name of the policy.
     */
    name?: pulumi.Input<string>;
    operator?: pulumi.Input<string>;
    policySetId?: pulumi.Input<string>;
    policyType?: pulumi.Input<string>;
    priority?: pulumi.Input<string>;
    reauthDefaultRule?: pulumi.Input<boolean>;
    reauthIdleTimeout?: pulumi.Input<string>;
    reauthTimeout?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    ruleOrder?: pulumi.Input<string>;
    zpnCbiProfileId?: pulumi.Input<string>;
    zpnInspectionProfileId?: pulumi.Input<string>;
    zpnIsolationProfileId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PolicyForwardingRule resource.
 */
export interface PolicyForwardingRuleArgs {
    /**
     * This is for providing the rule action.
     */
    action?: pulumi.Input<string>;
    /**
     * This field defines the description of the server.
     */
    actionId?: pulumi.Input<string>;
    bypassDefaultRule?: pulumi.Input<boolean>;
    /**
     * This is for proviidng the set of conditions for the policy.
     */
    conditions?: pulumi.Input<pulumi.Input<inputs.PolicyForwardingRuleCondition>[]>;
    /**
     * This is for providing a customer message for the user.
     */
    customMsg?: pulumi.Input<string>;
    /**
     * This is for providing a customer message for the user.
     */
    defaultRule?: pulumi.Input<boolean>;
    /**
     * This is the description of the access policy.
     */
    description?: pulumi.Input<string>;
    lssDefaultRule?: pulumi.Input<boolean>;
    microtenantId?: pulumi.Input<string>;
    /**
     * This is the name of the policy.
     */
    name?: pulumi.Input<string>;
    operator?: pulumi.Input<string>;
    policySetId?: pulumi.Input<string>;
    policyType?: pulumi.Input<string>;
    priority?: pulumi.Input<string>;
    reauthDefaultRule?: pulumi.Input<boolean>;
    reauthIdleTimeout?: pulumi.Input<string>;
    reauthTimeout?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    ruleOrder?: pulumi.Input<string>;
    zpnCbiProfileId?: pulumi.Input<string>;
    zpnInspectionProfileId?: pulumi.Input<string>;
    zpnIsolationProfileId?: pulumi.Input<string>;
}
