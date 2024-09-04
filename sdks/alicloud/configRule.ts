// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ConfigRule extends pulumi.CustomResource {
    /**
     * Get an existing ConfigRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ConfigRuleState, opts?: pulumi.CustomResourceOptions): ConfigRule {
        return new ConfigRule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/configRule:ConfigRule';

    /**
     * Returns true if the given object is an instance of ConfigRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ConfigRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ConfigRule.__pulumiType;
    }

    public /*out*/ readonly accountId!: pulumi.Output<number>;
    public /*out*/ readonly compliancePackId!: pulumi.Output<string>;
    public /*out*/ readonly compliances!: pulumi.Output<outputs.ConfigRuleCompliance[]>;
    public /*out*/ readonly configRuleArn!: pulumi.Output<string>;
    public /*out*/ readonly configRuleId!: pulumi.Output<string>;
    public readonly configRuleTriggerTypes!: pulumi.Output<string>;
    public /*out*/ readonly createTime!: pulumi.Output<number>;
    public readonly description!: pulumi.Output<string | undefined>;
    public /*out*/ readonly eventSource!: pulumi.Output<string>;
    public readonly excludeResourceIdsScope!: pulumi.Output<string | undefined>;
    public readonly inputParameters!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly maximumExecutionFrequency!: pulumi.Output<string>;
    public /*out*/ readonly modifiedTimestamp!: pulumi.Output<number>;
    public readonly regionIdsScope!: pulumi.Output<string | undefined>;
    public readonly resourceGroupIdsScope!: pulumi.Output<string | undefined>;
    public readonly resourceTypesScopes!: pulumi.Output<string[]>;
    public readonly riskLevel!: pulumi.Output<number>;
    public readonly ruleName!: pulumi.Output<string>;
    /**
     * @deprecated Deprecated
     */
    public readonly scopeComplianceResourceTypes!: pulumi.Output<string>;
    /**
     * @deprecated Deprecated
     */
    public readonly sourceDetailMessageType!: pulumi.Output<string>;
    public readonly sourceIdentifier!: pulumi.Output<string>;
    /**
     * @deprecated Deprecated
     */
    public readonly sourceMaximumExecutionFrequency!: pulumi.Output<string>;
    public readonly sourceOwner!: pulumi.Output<string>;
    public readonly status!: pulumi.Output<string>;
    public readonly tagKeyScope!: pulumi.Output<string | undefined>;
    public readonly tagValueScope!: pulumi.Output<string | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.ConfigRuleTimeouts | undefined>;

    /**
     * Create a ConfigRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConfigRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ConfigRuleArgs | ConfigRuleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ConfigRuleState | undefined;
            resourceInputs["accountId"] = state ? state.accountId : undefined;
            resourceInputs["compliancePackId"] = state ? state.compliancePackId : undefined;
            resourceInputs["compliances"] = state ? state.compliances : undefined;
            resourceInputs["configRuleArn"] = state ? state.configRuleArn : undefined;
            resourceInputs["configRuleId"] = state ? state.configRuleId : undefined;
            resourceInputs["configRuleTriggerTypes"] = state ? state.configRuleTriggerTypes : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["eventSource"] = state ? state.eventSource : undefined;
            resourceInputs["excludeResourceIdsScope"] = state ? state.excludeResourceIdsScope : undefined;
            resourceInputs["inputParameters"] = state ? state.inputParameters : undefined;
            resourceInputs["maximumExecutionFrequency"] = state ? state.maximumExecutionFrequency : undefined;
            resourceInputs["modifiedTimestamp"] = state ? state.modifiedTimestamp : undefined;
            resourceInputs["regionIdsScope"] = state ? state.regionIdsScope : undefined;
            resourceInputs["resourceGroupIdsScope"] = state ? state.resourceGroupIdsScope : undefined;
            resourceInputs["resourceTypesScopes"] = state ? state.resourceTypesScopes : undefined;
            resourceInputs["riskLevel"] = state ? state.riskLevel : undefined;
            resourceInputs["ruleName"] = state ? state.ruleName : undefined;
            resourceInputs["scopeComplianceResourceTypes"] = state ? state.scopeComplianceResourceTypes : undefined;
            resourceInputs["sourceDetailMessageType"] = state ? state.sourceDetailMessageType : undefined;
            resourceInputs["sourceIdentifier"] = state ? state.sourceIdentifier : undefined;
            resourceInputs["sourceMaximumExecutionFrequency"] = state ? state.sourceMaximumExecutionFrequency : undefined;
            resourceInputs["sourceOwner"] = state ? state.sourceOwner : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["tagKeyScope"] = state ? state.tagKeyScope : undefined;
            resourceInputs["tagValueScope"] = state ? state.tagValueScope : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ConfigRuleArgs | undefined;
            if ((!args || args.riskLevel === undefined) && !opts.urn) {
                throw new Error("Missing required property 'riskLevel'");
            }
            if ((!args || args.ruleName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ruleName'");
            }
            if ((!args || args.sourceIdentifier === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sourceIdentifier'");
            }
            if ((!args || args.sourceOwner === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sourceOwner'");
            }
            resourceInputs["configRuleTriggerTypes"] = args ? args.configRuleTriggerTypes : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["excludeResourceIdsScope"] = args ? args.excludeResourceIdsScope : undefined;
            resourceInputs["inputParameters"] = args ? args.inputParameters : undefined;
            resourceInputs["maximumExecutionFrequency"] = args ? args.maximumExecutionFrequency : undefined;
            resourceInputs["regionIdsScope"] = args ? args.regionIdsScope : undefined;
            resourceInputs["resourceGroupIdsScope"] = args ? args.resourceGroupIdsScope : undefined;
            resourceInputs["resourceTypesScopes"] = args ? args.resourceTypesScopes : undefined;
            resourceInputs["riskLevel"] = args ? args.riskLevel : undefined;
            resourceInputs["ruleName"] = args ? args.ruleName : undefined;
            resourceInputs["scopeComplianceResourceTypes"] = args ? args.scopeComplianceResourceTypes : undefined;
            resourceInputs["sourceDetailMessageType"] = args ? args.sourceDetailMessageType : undefined;
            resourceInputs["sourceIdentifier"] = args ? args.sourceIdentifier : undefined;
            resourceInputs["sourceMaximumExecutionFrequency"] = args ? args.sourceMaximumExecutionFrequency : undefined;
            resourceInputs["sourceOwner"] = args ? args.sourceOwner : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["tagKeyScope"] = args ? args.tagKeyScope : undefined;
            resourceInputs["tagValueScope"] = args ? args.tagValueScope : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["accountId"] = undefined /*out*/;
            resourceInputs["compliancePackId"] = undefined /*out*/;
            resourceInputs["compliances"] = undefined /*out*/;
            resourceInputs["configRuleArn"] = undefined /*out*/;
            resourceInputs["configRuleId"] = undefined /*out*/;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["eventSource"] = undefined /*out*/;
            resourceInputs["modifiedTimestamp"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ConfigRule.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ConfigRule resources.
 */
export interface ConfigRuleState {
    accountId?: pulumi.Input<number>;
    compliancePackId?: pulumi.Input<string>;
    compliances?: pulumi.Input<pulumi.Input<inputs.ConfigRuleCompliance>[]>;
    configRuleArn?: pulumi.Input<string>;
    configRuleId?: pulumi.Input<string>;
    configRuleTriggerTypes?: pulumi.Input<string>;
    createTime?: pulumi.Input<number>;
    description?: pulumi.Input<string>;
    eventSource?: pulumi.Input<string>;
    excludeResourceIdsScope?: pulumi.Input<string>;
    inputParameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    maximumExecutionFrequency?: pulumi.Input<string>;
    modifiedTimestamp?: pulumi.Input<number>;
    regionIdsScope?: pulumi.Input<string>;
    resourceGroupIdsScope?: pulumi.Input<string>;
    resourceTypesScopes?: pulumi.Input<pulumi.Input<string>[]>;
    riskLevel?: pulumi.Input<number>;
    ruleName?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    scopeComplianceResourceTypes?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    sourceDetailMessageType?: pulumi.Input<string>;
    sourceIdentifier?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    sourceMaximumExecutionFrequency?: pulumi.Input<string>;
    sourceOwner?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    tagKeyScope?: pulumi.Input<string>;
    tagValueScope?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ConfigRuleTimeouts>;
}

/**
 * The set of arguments for constructing a ConfigRule resource.
 */
export interface ConfigRuleArgs {
    configRuleTriggerTypes?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    excludeResourceIdsScope?: pulumi.Input<string>;
    inputParameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    maximumExecutionFrequency?: pulumi.Input<string>;
    regionIdsScope?: pulumi.Input<string>;
    resourceGroupIdsScope?: pulumi.Input<string>;
    resourceTypesScopes?: pulumi.Input<pulumi.Input<string>[]>;
    riskLevel: pulumi.Input<number>;
    ruleName: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    scopeComplianceResourceTypes?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    sourceDetailMessageType?: pulumi.Input<string>;
    sourceIdentifier: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    sourceMaximumExecutionFrequency?: pulumi.Input<string>;
    sourceOwner: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    tagKeyScope?: pulumi.Input<string>;
    tagValueScope?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ConfigRuleTimeouts>;
}
