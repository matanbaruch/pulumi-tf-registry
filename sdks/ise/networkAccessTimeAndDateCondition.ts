// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class NetworkAccessTimeAndDateCondition extends pulumi.CustomResource {
    /**
     * Get an existing NetworkAccessTimeAndDateCondition resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetworkAccessTimeAndDateConditionState, opts?: pulumi.CustomResourceOptions): NetworkAccessTimeAndDateCondition {
        return new NetworkAccessTimeAndDateCondition(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ise:index/networkAccessTimeAndDateCondition:NetworkAccessTimeAndDateCondition';

    /**
     * Returns true if the given object is an instance of NetworkAccessTimeAndDateCondition.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkAccessTimeAndDateCondition {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkAccessTimeAndDateCondition.__pulumiType;
    }

    /**
     * Condition description
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * End date
     */
    public readonly endDate!: pulumi.Output<string | undefined>;
    /**
     * End time
     */
    public readonly endTime!: pulumi.Output<string | undefined>;
    /**
     * Exception end date
     */
    public readonly exceptionEndDate!: pulumi.Output<string | undefined>;
    /**
     * Exception end time
     */
    public readonly exceptionEndTime!: pulumi.Output<string | undefined>;
    /**
     * Exception start date
     */
    public readonly exceptionStartDate!: pulumi.Output<string | undefined>;
    /**
     * Exception start time
     */
    public readonly exceptionStartTime!: pulumi.Output<string | undefined>;
    /**
     * Indicates whereas this condition is in negate mode
     */
    public readonly isNegate!: pulumi.Output<boolean | undefined>;
    /**
     * Condition name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Start date
     */
    public readonly startDate!: pulumi.Output<string | undefined>;
    /**
     * Start time
     */
    public readonly startTime!: pulumi.Output<string | undefined>;
    /**
     * Defines for which days this condition will be matched. List of weekdays - `Monday`, `Tuesday`, `Wednesday`, `Thursday`,
     * `Friday`, `Saturday`, `Sunday`. Default - List of all week days.
     */
    public readonly weekDays!: pulumi.Output<string[] | undefined>;
    /**
     * Defines for which days this condition will NOT be matched. List of weekdays - `Monday`, `Tuesday`, `Wednesday`,
     * `Thursday`, `Friday`, `Saturday`, `Sunday`.
     */
    public readonly weekDaysExceptions!: pulumi.Output<string[] | undefined>;

    /**
     * Create a NetworkAccessTimeAndDateCondition resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: NetworkAccessTimeAndDateConditionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NetworkAccessTimeAndDateConditionArgs | NetworkAccessTimeAndDateConditionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NetworkAccessTimeAndDateConditionState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["endDate"] = state ? state.endDate : undefined;
            resourceInputs["endTime"] = state ? state.endTime : undefined;
            resourceInputs["exceptionEndDate"] = state ? state.exceptionEndDate : undefined;
            resourceInputs["exceptionEndTime"] = state ? state.exceptionEndTime : undefined;
            resourceInputs["exceptionStartDate"] = state ? state.exceptionStartDate : undefined;
            resourceInputs["exceptionStartTime"] = state ? state.exceptionStartTime : undefined;
            resourceInputs["isNegate"] = state ? state.isNegate : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["startDate"] = state ? state.startDate : undefined;
            resourceInputs["startTime"] = state ? state.startTime : undefined;
            resourceInputs["weekDays"] = state ? state.weekDays : undefined;
            resourceInputs["weekDaysExceptions"] = state ? state.weekDaysExceptions : undefined;
        } else {
            const args = argsOrState as NetworkAccessTimeAndDateConditionArgs | undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["endDate"] = args ? args.endDate : undefined;
            resourceInputs["endTime"] = args ? args.endTime : undefined;
            resourceInputs["exceptionEndDate"] = args ? args.exceptionEndDate : undefined;
            resourceInputs["exceptionEndTime"] = args ? args.exceptionEndTime : undefined;
            resourceInputs["exceptionStartDate"] = args ? args.exceptionStartDate : undefined;
            resourceInputs["exceptionStartTime"] = args ? args.exceptionStartTime : undefined;
            resourceInputs["isNegate"] = args ? args.isNegate : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["startDate"] = args ? args.startDate : undefined;
            resourceInputs["startTime"] = args ? args.startTime : undefined;
            resourceInputs["weekDays"] = args ? args.weekDays : undefined;
            resourceInputs["weekDaysExceptions"] = args ? args.weekDaysExceptions : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NetworkAccessTimeAndDateCondition.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NetworkAccessTimeAndDateCondition resources.
 */
export interface NetworkAccessTimeAndDateConditionState {
    /**
     * Condition description
     */
    description?: pulumi.Input<string>;
    /**
     * End date
     */
    endDate?: pulumi.Input<string>;
    /**
     * End time
     */
    endTime?: pulumi.Input<string>;
    /**
     * Exception end date
     */
    exceptionEndDate?: pulumi.Input<string>;
    /**
     * Exception end time
     */
    exceptionEndTime?: pulumi.Input<string>;
    /**
     * Exception start date
     */
    exceptionStartDate?: pulumi.Input<string>;
    /**
     * Exception start time
     */
    exceptionStartTime?: pulumi.Input<string>;
    /**
     * Indicates whereas this condition is in negate mode
     */
    isNegate?: pulumi.Input<boolean>;
    /**
     * Condition name
     */
    name?: pulumi.Input<string>;
    /**
     * Start date
     */
    startDate?: pulumi.Input<string>;
    /**
     * Start time
     */
    startTime?: pulumi.Input<string>;
    /**
     * Defines for which days this condition will be matched. List of weekdays - `Monday`, `Tuesday`, `Wednesday`, `Thursday`,
     * `Friday`, `Saturday`, `Sunday`. Default - List of all week days.
     */
    weekDays?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Defines for which days this condition will NOT be matched. List of weekdays - `Monday`, `Tuesday`, `Wednesday`,
     * `Thursday`, `Friday`, `Saturday`, `Sunday`.
     */
    weekDaysExceptions?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a NetworkAccessTimeAndDateCondition resource.
 */
export interface NetworkAccessTimeAndDateConditionArgs {
    /**
     * Condition description
     */
    description?: pulumi.Input<string>;
    /**
     * End date
     */
    endDate?: pulumi.Input<string>;
    /**
     * End time
     */
    endTime?: pulumi.Input<string>;
    /**
     * Exception end date
     */
    exceptionEndDate?: pulumi.Input<string>;
    /**
     * Exception end time
     */
    exceptionEndTime?: pulumi.Input<string>;
    /**
     * Exception start date
     */
    exceptionStartDate?: pulumi.Input<string>;
    /**
     * Exception start time
     */
    exceptionStartTime?: pulumi.Input<string>;
    /**
     * Indicates whereas this condition is in negate mode
     */
    isNegate?: pulumi.Input<boolean>;
    /**
     * Condition name
     */
    name?: pulumi.Input<string>;
    /**
     * Start date
     */
    startDate?: pulumi.Input<string>;
    /**
     * Start time
     */
    startTime?: pulumi.Input<string>;
    /**
     * Defines for which days this condition will be matched. List of weekdays - `Monday`, `Tuesday`, `Wednesday`, `Thursday`,
     * `Friday`, `Saturday`, `Sunday`. Default - List of all week days.
     */
    weekDays?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Defines for which days this condition will NOT be matched. List of weekdays - `Monday`, `Tuesday`, `Wednesday`,
     * `Thursday`, `Friday`, `Saturday`, `Sunday`.
     */
    weekDaysExceptions?: pulumi.Input<pulumi.Input<string>[]>;
}
