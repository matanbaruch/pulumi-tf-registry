// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class JourneyActionMap extends pulumi.CustomResource {
    /**
     * Get an existing JourneyActionMap resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: JourneyActionMapState, opts?: pulumi.CustomResourceOptions): JourneyActionMap {
        return new JourneyActionMap(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'genesyscloud:index/journeyActionMap:JourneyActionMap';

    /**
     * Returns true if the given object is an instance of JourneyActionMap.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is JourneyActionMap {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === JourneyActionMap.__pulumiType;
    }

    /**
     * The action that will be executed if this action map is triggered.
     */
    public readonly action!: pulumi.Output<outputs.JourneyActionMapAction>;
    /**
     * The action map's associated schedule groups.
     */
    public readonly actionMapScheduleGroups!: pulumi.Output<outputs.JourneyActionMapActionMapScheduleGroups | undefined>;
    /**
     * Type of activation.
     */
    public readonly activation!: pulumi.Output<outputs.JourneyActionMapActivation>;
    /**
     * Display name of the action map.
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * Timestamp at which the action map is scheduled to stop firing. Date time is represented as an ISO-8601 string without a
     * timezone. For example: 2006-01-02T15:04:05.000000.
     */
    public readonly endDate!: pulumi.Output<string | undefined>;
    /**
     * Override organization-level frequency cap and always offer web engagements from this action map. Defaults to `false`.
     */
    public readonly ignoreFrequencyCap!: pulumi.Output<boolean | undefined>;
    /**
     * Whether the action map is active. Defaults to `true`.
     */
    public readonly isActive!: pulumi.Output<boolean | undefined>;
    /**
     * URL conditions that a page must match for web actions to be displayable.
     */
    public readonly pageUrlConditions!: pulumi.Output<outputs.JourneyActionMapPageUrlCondition[] | undefined>;
    /**
     * Timestamp at which the action map is scheduled to start firing. Date time is represented as an ISO-8601 string without a
     * timezone. For example: 2006-01-02T15:04:05.000000.
     */
    public readonly startDate!: pulumi.Output<string>;
    /**
     * List of event conditions that must be satisfied to trigger the action map.
     */
    public readonly triggerWithEventConditions!: pulumi.Output<outputs.JourneyActionMapTriggerWithEventCondition[] | undefined>;
    /**
     * Probability conditions for outcomes that must be satisfied to trigger the action map.
     *
     * @deprecated Deprecated
     */
    public readonly triggerWithOutcomeProbabilityConditions!: pulumi.Output<outputs.JourneyActionMapTriggerWithOutcomeProbabilityCondition[] | undefined>;
    /**
     * Quantile conditions for outcomes that must be satisfied to trigger the action map.
     */
    public readonly triggerWithOutcomeQuantileConditions!: pulumi.Output<outputs.JourneyActionMapTriggerWithOutcomeQuantileCondition[] | undefined>;
    /**
     * Trigger action map if any segment in the list is assigned to a given customer.
     */
    public readonly triggerWithSegments!: pulumi.Output<string[] | undefined>;
    /**
     * Weight of the action map with higher number denoting higher weight. Low=1, Medium=2, High=3. Defaults to `2`.
     */
    public readonly weight!: pulumi.Output<number | undefined>;

    /**
     * Create a JourneyActionMap resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: JourneyActionMapArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: JourneyActionMapArgs | JourneyActionMapState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as JourneyActionMapState | undefined;
            resourceInputs["action"] = state ? state.action : undefined;
            resourceInputs["actionMapScheduleGroups"] = state ? state.actionMapScheduleGroups : undefined;
            resourceInputs["activation"] = state ? state.activation : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["endDate"] = state ? state.endDate : undefined;
            resourceInputs["ignoreFrequencyCap"] = state ? state.ignoreFrequencyCap : undefined;
            resourceInputs["isActive"] = state ? state.isActive : undefined;
            resourceInputs["pageUrlConditions"] = state ? state.pageUrlConditions : undefined;
            resourceInputs["startDate"] = state ? state.startDate : undefined;
            resourceInputs["triggerWithEventConditions"] = state ? state.triggerWithEventConditions : undefined;
            resourceInputs["triggerWithOutcomeProbabilityConditions"] = state ? state.triggerWithOutcomeProbabilityConditions : undefined;
            resourceInputs["triggerWithOutcomeQuantileConditions"] = state ? state.triggerWithOutcomeQuantileConditions : undefined;
            resourceInputs["triggerWithSegments"] = state ? state.triggerWithSegments : undefined;
            resourceInputs["weight"] = state ? state.weight : undefined;
        } else {
            const args = argsOrState as JourneyActionMapArgs | undefined;
            if ((!args || args.action === undefined) && !opts.urn) {
                throw new Error("Missing required property 'action'");
            }
            if ((!args || args.activation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'activation'");
            }
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.startDate === undefined) && !opts.urn) {
                throw new Error("Missing required property 'startDate'");
            }
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["actionMapScheduleGroups"] = args ? args.actionMapScheduleGroups : undefined;
            resourceInputs["activation"] = args ? args.activation : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["endDate"] = args ? args.endDate : undefined;
            resourceInputs["ignoreFrequencyCap"] = args ? args.ignoreFrequencyCap : undefined;
            resourceInputs["isActive"] = args ? args.isActive : undefined;
            resourceInputs["pageUrlConditions"] = args ? args.pageUrlConditions : undefined;
            resourceInputs["startDate"] = args ? args.startDate : undefined;
            resourceInputs["triggerWithEventConditions"] = args ? args.triggerWithEventConditions : undefined;
            resourceInputs["triggerWithOutcomeProbabilityConditions"] = args ? args.triggerWithOutcomeProbabilityConditions : undefined;
            resourceInputs["triggerWithOutcomeQuantileConditions"] = args ? args.triggerWithOutcomeQuantileConditions : undefined;
            resourceInputs["triggerWithSegments"] = args ? args.triggerWithSegments : undefined;
            resourceInputs["weight"] = args ? args.weight : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(JourneyActionMap.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering JourneyActionMap resources.
 */
export interface JourneyActionMapState {
    /**
     * The action that will be executed if this action map is triggered.
     */
    action?: pulumi.Input<inputs.JourneyActionMapAction>;
    /**
     * The action map's associated schedule groups.
     */
    actionMapScheduleGroups?: pulumi.Input<inputs.JourneyActionMapActionMapScheduleGroups>;
    /**
     * Type of activation.
     */
    activation?: pulumi.Input<inputs.JourneyActionMapActivation>;
    /**
     * Display name of the action map.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Timestamp at which the action map is scheduled to stop firing. Date time is represented as an ISO-8601 string without a
     * timezone. For example: 2006-01-02T15:04:05.000000.
     */
    endDate?: pulumi.Input<string>;
    /**
     * Override organization-level frequency cap and always offer web engagements from this action map. Defaults to `false`.
     */
    ignoreFrequencyCap?: pulumi.Input<boolean>;
    /**
     * Whether the action map is active. Defaults to `true`.
     */
    isActive?: pulumi.Input<boolean>;
    /**
     * URL conditions that a page must match for web actions to be displayable.
     */
    pageUrlConditions?: pulumi.Input<pulumi.Input<inputs.JourneyActionMapPageUrlCondition>[]>;
    /**
     * Timestamp at which the action map is scheduled to start firing. Date time is represented as an ISO-8601 string without a
     * timezone. For example: 2006-01-02T15:04:05.000000.
     */
    startDate?: pulumi.Input<string>;
    /**
     * List of event conditions that must be satisfied to trigger the action map.
     */
    triggerWithEventConditions?: pulumi.Input<pulumi.Input<inputs.JourneyActionMapTriggerWithEventCondition>[]>;
    /**
     * Probability conditions for outcomes that must be satisfied to trigger the action map.
     *
     * @deprecated Deprecated
     */
    triggerWithOutcomeProbabilityConditions?: pulumi.Input<pulumi.Input<inputs.JourneyActionMapTriggerWithOutcomeProbabilityCondition>[]>;
    /**
     * Quantile conditions for outcomes that must be satisfied to trigger the action map.
     */
    triggerWithOutcomeQuantileConditions?: pulumi.Input<pulumi.Input<inputs.JourneyActionMapTriggerWithOutcomeQuantileCondition>[]>;
    /**
     * Trigger action map if any segment in the list is assigned to a given customer.
     */
    triggerWithSegments?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Weight of the action map with higher number denoting higher weight. Low=1, Medium=2, High=3. Defaults to `2`.
     */
    weight?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a JourneyActionMap resource.
 */
export interface JourneyActionMapArgs {
    /**
     * The action that will be executed if this action map is triggered.
     */
    action: pulumi.Input<inputs.JourneyActionMapAction>;
    /**
     * The action map's associated schedule groups.
     */
    actionMapScheduleGroups?: pulumi.Input<inputs.JourneyActionMapActionMapScheduleGroups>;
    /**
     * Type of activation.
     */
    activation: pulumi.Input<inputs.JourneyActionMapActivation>;
    /**
     * Display name of the action map.
     */
    displayName: pulumi.Input<string>;
    /**
     * Timestamp at which the action map is scheduled to stop firing. Date time is represented as an ISO-8601 string without a
     * timezone. For example: 2006-01-02T15:04:05.000000.
     */
    endDate?: pulumi.Input<string>;
    /**
     * Override organization-level frequency cap and always offer web engagements from this action map. Defaults to `false`.
     */
    ignoreFrequencyCap?: pulumi.Input<boolean>;
    /**
     * Whether the action map is active. Defaults to `true`.
     */
    isActive?: pulumi.Input<boolean>;
    /**
     * URL conditions that a page must match for web actions to be displayable.
     */
    pageUrlConditions?: pulumi.Input<pulumi.Input<inputs.JourneyActionMapPageUrlCondition>[]>;
    /**
     * Timestamp at which the action map is scheduled to start firing. Date time is represented as an ISO-8601 string without a
     * timezone. For example: 2006-01-02T15:04:05.000000.
     */
    startDate: pulumi.Input<string>;
    /**
     * List of event conditions that must be satisfied to trigger the action map.
     */
    triggerWithEventConditions?: pulumi.Input<pulumi.Input<inputs.JourneyActionMapTriggerWithEventCondition>[]>;
    /**
     * Probability conditions for outcomes that must be satisfied to trigger the action map.
     *
     * @deprecated Deprecated
     */
    triggerWithOutcomeProbabilityConditions?: pulumi.Input<pulumi.Input<inputs.JourneyActionMapTriggerWithOutcomeProbabilityCondition>[]>;
    /**
     * Quantile conditions for outcomes that must be satisfied to trigger the action map.
     */
    triggerWithOutcomeQuantileConditions?: pulumi.Input<pulumi.Input<inputs.JourneyActionMapTriggerWithOutcomeQuantileCondition>[]>;
    /**
     * Trigger action map if any segment in the list is assigned to a given customer.
     */
    triggerWithSegments?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Weight of the action map with higher number denoting higher weight. Low=1, Medium=2, High=3. Defaults to `2`.
     */
    weight?: pulumi.Input<number>;
}
