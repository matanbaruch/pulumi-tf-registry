// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ConfigOrganizationManagedRule extends pulumi.CustomResource {
    /**
     * Get an existing ConfigOrganizationManagedRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ConfigOrganizationManagedRuleState, opts?: pulumi.CustomResourceOptions): ConfigOrganizationManagedRule {
        return new ConfigOrganizationManagedRule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/configOrganizationManagedRule:ConfigOrganizationManagedRule';

    /**
     * Returns true if the given object is an instance of ConfigOrganizationManagedRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ConfigOrganizationManagedRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ConfigOrganizationManagedRule.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly excludedAccounts!: pulumi.Output<string[] | undefined>;
    public readonly inputParameters!: pulumi.Output<string | undefined>;
    public readonly maximumExecutionFrequency!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly resourceIdScope!: pulumi.Output<string | undefined>;
    public readonly resourceTypesScopes!: pulumi.Output<string[] | undefined>;
    public readonly ruleIdentifier!: pulumi.Output<string>;
    public readonly tagKeyScope!: pulumi.Output<string | undefined>;
    public readonly tagValueScope!: pulumi.Output<string | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.ConfigOrganizationManagedRuleTimeouts | undefined>;

    /**
     * Create a ConfigOrganizationManagedRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConfigOrganizationManagedRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ConfigOrganizationManagedRuleArgs | ConfigOrganizationManagedRuleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ConfigOrganizationManagedRuleState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["excludedAccounts"] = state ? state.excludedAccounts : undefined;
            resourceInputs["inputParameters"] = state ? state.inputParameters : undefined;
            resourceInputs["maximumExecutionFrequency"] = state ? state.maximumExecutionFrequency : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["resourceIdScope"] = state ? state.resourceIdScope : undefined;
            resourceInputs["resourceTypesScopes"] = state ? state.resourceTypesScopes : undefined;
            resourceInputs["ruleIdentifier"] = state ? state.ruleIdentifier : undefined;
            resourceInputs["tagKeyScope"] = state ? state.tagKeyScope : undefined;
            resourceInputs["tagValueScope"] = state ? state.tagValueScope : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ConfigOrganizationManagedRuleArgs | undefined;
            if ((!args || args.ruleIdentifier === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ruleIdentifier'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["excludedAccounts"] = args ? args.excludedAccounts : undefined;
            resourceInputs["inputParameters"] = args ? args.inputParameters : undefined;
            resourceInputs["maximumExecutionFrequency"] = args ? args.maximumExecutionFrequency : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceIdScope"] = args ? args.resourceIdScope : undefined;
            resourceInputs["resourceTypesScopes"] = args ? args.resourceTypesScopes : undefined;
            resourceInputs["ruleIdentifier"] = args ? args.ruleIdentifier : undefined;
            resourceInputs["tagKeyScope"] = args ? args.tagKeyScope : undefined;
            resourceInputs["tagValueScope"] = args ? args.tagValueScope : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["arn"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ConfigOrganizationManagedRule.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ConfigOrganizationManagedRule resources.
 */
export interface ConfigOrganizationManagedRuleState {
    arn?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    excludedAccounts?: pulumi.Input<pulumi.Input<string>[]>;
    inputParameters?: pulumi.Input<string>;
    maximumExecutionFrequency?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    resourceIdScope?: pulumi.Input<string>;
    resourceTypesScopes?: pulumi.Input<pulumi.Input<string>[]>;
    ruleIdentifier?: pulumi.Input<string>;
    tagKeyScope?: pulumi.Input<string>;
    tagValueScope?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ConfigOrganizationManagedRuleTimeouts>;
}

/**
 * The set of arguments for constructing a ConfigOrganizationManagedRule resource.
 */
export interface ConfigOrganizationManagedRuleArgs {
    description?: pulumi.Input<string>;
    excludedAccounts?: pulumi.Input<pulumi.Input<string>[]>;
    inputParameters?: pulumi.Input<string>;
    maximumExecutionFrequency?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    resourceIdScope?: pulumi.Input<string>;
    resourceTypesScopes?: pulumi.Input<pulumi.Input<string>[]>;
    ruleIdentifier: pulumi.Input<string>;
    tagKeyScope?: pulumi.Input<string>;
    tagValueScope?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ConfigOrganizationManagedRuleTimeouts>;
}
