// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CheckAlertSourceUsage extends pulumi.CustomResource {
    /**
     * Get an existing CheckAlertSourceUsage resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CheckAlertSourceUsageState, opts?: pulumi.CustomResourceOptions): CheckAlertSourceUsage {
        return new CheckAlertSourceUsage(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'opslevel:index/checkAlertSourceUsage:CheckAlertSourceUsage';

    /**
     * Returns true if the given object is an instance of CheckAlertSourceUsage.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CheckAlertSourceUsage {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CheckAlertSourceUsage.__pulumiType;
    }

    /**
     * A condition that should be satisfied. One of `contains`, `does_not_contain`, `does_not_equal`, `does_not_exist`,
     * `ends_with`, `equals`, `exists`, `greater_than_or_equal_to`, `less_than_or_equal_to`, `starts_with`,
     * `satisfies_version_constraint`, `matches_regex`, `does_not_match_regex`, `belongs_to`, `matches`, `does_not_match`,
     * `satisfies_jq_expression`
     */
    public readonly alertNamePredicate!: pulumi.Output<outputs.CheckAlertSourceUsageAlertNamePredicate | undefined>;
    /**
     * The type of the alert source. One of `pagerduty`, `datadog`, `opsgenie`, `new_relic`
     */
    public readonly alertType!: pulumi.Output<string>;
    /**
     * The id of the category the check belongs to.
     */
    public readonly category!: pulumi.Output<string>;
    /**
     * The description the check.
     */
    public /*out*/ readonly description!: pulumi.Output<string>;
    /**
     * The date when the check will be automatically enabled. If you use this field you should add both 'enabled' and
     * 'enable_on' to the lifecycle ignore_changes settings. See example in opslevel.CheckManual for proper configuration.
     */
    public readonly enableOn!: pulumi.Output<string | undefined>;
    /**
     * Whether the check is enabled or not. Do not use this field in tandem with 'enable_on'.
     */
    public readonly enabled!: pulumi.Output<boolean>;
    /**
     * The id of the filter of the check.
     */
    public readonly filter!: pulumi.Output<string | undefined>;
    /**
     * The id of the level the check belongs to.
     */
    public readonly level!: pulumi.Output<string>;
    /**
     * The display name of the check.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Additional information to display to the service owner about the check.
     */
    public readonly notes!: pulumi.Output<string | undefined>;
    /**
     * The id of the team that owns the check.
     */
    public readonly owner!: pulumi.Output<string | undefined>;

    /**
     * Create a CheckAlertSourceUsage resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CheckAlertSourceUsageArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CheckAlertSourceUsageArgs | CheckAlertSourceUsageState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CheckAlertSourceUsageState | undefined;
            resourceInputs["alertNamePredicate"] = state ? state.alertNamePredicate : undefined;
            resourceInputs["alertType"] = state ? state.alertType : undefined;
            resourceInputs["category"] = state ? state.category : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["enableOn"] = state ? state.enableOn : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["filter"] = state ? state.filter : undefined;
            resourceInputs["level"] = state ? state.level : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["notes"] = state ? state.notes : undefined;
            resourceInputs["owner"] = state ? state.owner : undefined;
        } else {
            const args = argsOrState as CheckAlertSourceUsageArgs | undefined;
            if ((!args || args.alertType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'alertType'");
            }
            if ((!args || args.category === undefined) && !opts.urn) {
                throw new Error("Missing required property 'category'");
            }
            if ((!args || args.level === undefined) && !opts.urn) {
                throw new Error("Missing required property 'level'");
            }
            resourceInputs["alertNamePredicate"] = args ? args.alertNamePredicate : undefined;
            resourceInputs["alertType"] = args ? args.alertType : undefined;
            resourceInputs["category"] = args ? args.category : undefined;
            resourceInputs["enableOn"] = args ? args.enableOn : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["filter"] = args ? args.filter : undefined;
            resourceInputs["level"] = args ? args.level : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["notes"] = args ? args.notes : undefined;
            resourceInputs["owner"] = args ? args.owner : undefined;
            resourceInputs["description"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CheckAlertSourceUsage.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CheckAlertSourceUsage resources.
 */
export interface CheckAlertSourceUsageState {
    /**
     * A condition that should be satisfied. One of `contains`, `does_not_contain`, `does_not_equal`, `does_not_exist`,
     * `ends_with`, `equals`, `exists`, `greater_than_or_equal_to`, `less_than_or_equal_to`, `starts_with`,
     * `satisfies_version_constraint`, `matches_regex`, `does_not_match_regex`, `belongs_to`, `matches`, `does_not_match`,
     * `satisfies_jq_expression`
     */
    alertNamePredicate?: pulumi.Input<inputs.CheckAlertSourceUsageAlertNamePredicate>;
    /**
     * The type of the alert source. One of `pagerduty`, `datadog`, `opsgenie`, `new_relic`
     */
    alertType?: pulumi.Input<string>;
    /**
     * The id of the category the check belongs to.
     */
    category?: pulumi.Input<string>;
    /**
     * The description the check.
     */
    description?: pulumi.Input<string>;
    /**
     * The date when the check will be automatically enabled. If you use this field you should add both 'enabled' and
     * 'enable_on' to the lifecycle ignore_changes settings. See example in opslevel.CheckManual for proper configuration.
     */
    enableOn?: pulumi.Input<string>;
    /**
     * Whether the check is enabled or not. Do not use this field in tandem with 'enable_on'.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The id of the filter of the check.
     */
    filter?: pulumi.Input<string>;
    /**
     * The id of the level the check belongs to.
     */
    level?: pulumi.Input<string>;
    /**
     * The display name of the check.
     */
    name?: pulumi.Input<string>;
    /**
     * Additional information to display to the service owner about the check.
     */
    notes?: pulumi.Input<string>;
    /**
     * The id of the team that owns the check.
     */
    owner?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CheckAlertSourceUsage resource.
 */
export interface CheckAlertSourceUsageArgs {
    /**
     * A condition that should be satisfied. One of `contains`, `does_not_contain`, `does_not_equal`, `does_not_exist`,
     * `ends_with`, `equals`, `exists`, `greater_than_or_equal_to`, `less_than_or_equal_to`, `starts_with`,
     * `satisfies_version_constraint`, `matches_regex`, `does_not_match_regex`, `belongs_to`, `matches`, `does_not_match`,
     * `satisfies_jq_expression`
     */
    alertNamePredicate?: pulumi.Input<inputs.CheckAlertSourceUsageAlertNamePredicate>;
    /**
     * The type of the alert source. One of `pagerduty`, `datadog`, `opsgenie`, `new_relic`
     */
    alertType: pulumi.Input<string>;
    /**
     * The id of the category the check belongs to.
     */
    category: pulumi.Input<string>;
    /**
     * The date when the check will be automatically enabled. If you use this field you should add both 'enabled' and
     * 'enable_on' to the lifecycle ignore_changes settings. See example in opslevel.CheckManual for proper configuration.
     */
    enableOn?: pulumi.Input<string>;
    /**
     * Whether the check is enabled or not. Do not use this field in tandem with 'enable_on'.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The id of the filter of the check.
     */
    filter?: pulumi.Input<string>;
    /**
     * The id of the level the check belongs to.
     */
    level: pulumi.Input<string>;
    /**
     * The display name of the check.
     */
    name?: pulumi.Input<string>;
    /**
     * Additional information to display to the service owner about the check.
     */
    notes?: pulumi.Input<string>;
    /**
     * The id of the team that owns the check.
     */
    owner?: pulumi.Input<string>;
}
