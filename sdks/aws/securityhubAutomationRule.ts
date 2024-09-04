// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SecurityhubAutomationRule extends pulumi.CustomResource {
    /**
     * Get an existing SecurityhubAutomationRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SecurityhubAutomationRuleState, opts?: pulumi.CustomResourceOptions): SecurityhubAutomationRule {
        return new SecurityhubAutomationRule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/securityhubAutomationRule:SecurityhubAutomationRule';

    /**
     * Returns true if the given object is an instance of SecurityhubAutomationRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SecurityhubAutomationRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SecurityhubAutomationRule.__pulumiType;
    }

    public readonly actions!: pulumi.Output<outputs.SecurityhubAutomationRuleAction[] | undefined>;
    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly criterias!: pulumi.Output<outputs.SecurityhubAutomationRuleCriteria[] | undefined>;
    public readonly description!: pulumi.Output<string>;
    public readonly isTerminal!: pulumi.Output<boolean>;
    public readonly ruleName!: pulumi.Output<string>;
    public readonly ruleOrder!: pulumi.Output<number>;
    public readonly ruleStatus!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public /*out*/ readonly tagsAll!: pulumi.Output<{[key: string]: string}>;

    /**
     * Create a SecurityhubAutomationRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SecurityhubAutomationRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SecurityhubAutomationRuleArgs | SecurityhubAutomationRuleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SecurityhubAutomationRuleState | undefined;
            resourceInputs["actions"] = state ? state.actions : undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["criterias"] = state ? state.criterias : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["isTerminal"] = state ? state.isTerminal : undefined;
            resourceInputs["ruleName"] = state ? state.ruleName : undefined;
            resourceInputs["ruleOrder"] = state ? state.ruleOrder : undefined;
            resourceInputs["ruleStatus"] = state ? state.ruleStatus : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
        } else {
            const args = argsOrState as SecurityhubAutomationRuleArgs | undefined;
            if ((!args || args.description === undefined) && !opts.urn) {
                throw new Error("Missing required property 'description'");
            }
            if ((!args || args.ruleName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ruleName'");
            }
            if ((!args || args.ruleOrder === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ruleOrder'");
            }
            resourceInputs["actions"] = args ? args.actions : undefined;
            resourceInputs["criterias"] = args ? args.criterias : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["isTerminal"] = args ? args.isTerminal : undefined;
            resourceInputs["ruleName"] = args ? args.ruleName : undefined;
            resourceInputs["ruleOrder"] = args ? args.ruleOrder : undefined;
            resourceInputs["ruleStatus"] = args ? args.ruleStatus : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["tagsAll"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SecurityhubAutomationRule.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SecurityhubAutomationRule resources.
 */
export interface SecurityhubAutomationRuleState {
    actions?: pulumi.Input<pulumi.Input<inputs.SecurityhubAutomationRuleAction>[]>;
    arn?: pulumi.Input<string>;
    criterias?: pulumi.Input<pulumi.Input<inputs.SecurityhubAutomationRuleCriteria>[]>;
    description?: pulumi.Input<string>;
    isTerminal?: pulumi.Input<boolean>;
    ruleName?: pulumi.Input<string>;
    ruleOrder?: pulumi.Input<number>;
    ruleStatus?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The set of arguments for constructing a SecurityhubAutomationRule resource.
 */
export interface SecurityhubAutomationRuleArgs {
    actions?: pulumi.Input<pulumi.Input<inputs.SecurityhubAutomationRuleAction>[]>;
    criterias?: pulumi.Input<pulumi.Input<inputs.SecurityhubAutomationRuleCriteria>[]>;
    description: pulumi.Input<string>;
    isTerminal?: pulumi.Input<boolean>;
    ruleName: pulumi.Input<string>;
    ruleOrder: pulumi.Input<number>;
    ruleStatus?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
