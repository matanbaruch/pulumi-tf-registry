// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Alarm extends pulumi.CustomResource {
    /**
     * Get an existing Alarm resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AlarmState, opts?: pulumi.CustomResourceOptions): Alarm {
        return new Alarm(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'shoreline:index/alarm:Alarm';

    /**
     * Returns true if the given object is an instance of Alarm.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Alarm {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Alarm.__pulumiType;
    }

    /**
     * Defaults to `1`.
     */
    public readonly checkIntervalSec!: pulumi.Output<string | undefined>;
    /**
     * The Alarm's resolution condition.
     */
    public readonly clearQuery!: pulumi.Output<string | undefined>;
    /**
     * If the Alarm can be effectively optimized. Defaults to `true`.
     */
    public readonly compileEligible!: pulumi.Output<boolean | undefined>;
    /**
     * Kind of check in an Alarm (e.g. above or below) vs a threshold for a Metric.
     */
    public readonly conditionType!: pulumi.Output<string | undefined>;
    /**
     * Switching value (threshold) for a Metric in an Alarm.
     */
    public readonly conditionValue!: pulumi.Output<string | undefined>;
    /**
     * A user-friendly explanation of an object.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * If the object is currently enabled or disabled. Defaults to `false`.
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * General class for an Action or Bot (e.g., custom, standard, metric, or system check). Defaults to `custom`.
     */
    public readonly family!: pulumi.Output<string | undefined>;
    /**
     * The long description of the Alarm's triggering condition.
     */
    public readonly fireLongTemplate!: pulumi.Output<string | undefined>;
    /**
     * The trigger condition for an Alarm (general expression) or the TimeTrigger (e.g. 'every 5m').
     */
    public readonly fireQuery!: pulumi.Output<string>;
    /**
     * The short description of the Alarm's triggering condition.
     */
    public readonly fireShortTemplate!: pulumi.Output<string | undefined>;
    /**
     * UI title of the Alarm's triggering condition.
     */
    public readonly fireTitleTemplate!: pulumi.Output<string | undefined>;
    /**
     * The Alarm's triggering Metric.
     */
    public readonly metricName!: pulumi.Output<string | undefined>;
    /**
     * The Alarm's mute condition.
     */
    public readonly muteQuery!: pulumi.Output<string | undefined>;
    /**
     * The name/symbol for the object within Shoreline and the op language (must be unique, only alphanumeric/underscore).
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Where an Alarm is raised (e.g., local to a resource, or global to the system). Defaults to `local`.
     */
    public readonly raiseFor!: pulumi.Output<string | undefined>;
    /**
     * The long description of the Alarm's resolution.
     */
    public readonly resolveLongTemplate!: pulumi.Output<string | undefined>;
    /**
     * The short description of the Alarm's resolution.
     */
    public readonly resolveShortTemplate!: pulumi.Output<string | undefined>;
    /**
     * UI title of the Alarm's' resolution.
     */
    public readonly resolveTitleTemplate!: pulumi.Output<string | undefined>;
    /**
     * A set of Resources (e.g. host, pod, container), optionally filtered on tags or dynamic conditions.
     */
    public readonly resourceQuery!: pulumi.Output<string | undefined>;
    public readonly resourceType!: pulumi.Output<string | undefined>;
    /**
     * The type of object (i.e., Alarm, Action, Bot, Metric, Resource, or File).
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Alarm resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AlarmArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AlarmArgs | AlarmState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AlarmState | undefined;
            resourceInputs["checkIntervalSec"] = state ? state.checkIntervalSec : undefined;
            resourceInputs["clearQuery"] = state ? state.clearQuery : undefined;
            resourceInputs["compileEligible"] = state ? state.compileEligible : undefined;
            resourceInputs["conditionType"] = state ? state.conditionType : undefined;
            resourceInputs["conditionValue"] = state ? state.conditionValue : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["family"] = state ? state.family : undefined;
            resourceInputs["fireLongTemplate"] = state ? state.fireLongTemplate : undefined;
            resourceInputs["fireQuery"] = state ? state.fireQuery : undefined;
            resourceInputs["fireShortTemplate"] = state ? state.fireShortTemplate : undefined;
            resourceInputs["fireTitleTemplate"] = state ? state.fireTitleTemplate : undefined;
            resourceInputs["metricName"] = state ? state.metricName : undefined;
            resourceInputs["muteQuery"] = state ? state.muteQuery : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["raiseFor"] = state ? state.raiseFor : undefined;
            resourceInputs["resolveLongTemplate"] = state ? state.resolveLongTemplate : undefined;
            resourceInputs["resolveShortTemplate"] = state ? state.resolveShortTemplate : undefined;
            resourceInputs["resolveTitleTemplate"] = state ? state.resolveTitleTemplate : undefined;
            resourceInputs["resourceQuery"] = state ? state.resourceQuery : undefined;
            resourceInputs["resourceType"] = state ? state.resourceType : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as AlarmArgs | undefined;
            if ((!args || args.fireQuery === undefined) && !opts.urn) {
                throw new Error("Missing required property 'fireQuery'");
            }
            resourceInputs["checkIntervalSec"] = args ? args.checkIntervalSec : undefined;
            resourceInputs["clearQuery"] = args ? args.clearQuery : undefined;
            resourceInputs["compileEligible"] = args ? args.compileEligible : undefined;
            resourceInputs["conditionType"] = args ? args.conditionType : undefined;
            resourceInputs["conditionValue"] = args ? args.conditionValue : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["family"] = args ? args.family : undefined;
            resourceInputs["fireLongTemplate"] = args ? args.fireLongTemplate : undefined;
            resourceInputs["fireQuery"] = args ? args.fireQuery : undefined;
            resourceInputs["fireShortTemplate"] = args ? args.fireShortTemplate : undefined;
            resourceInputs["fireTitleTemplate"] = args ? args.fireTitleTemplate : undefined;
            resourceInputs["metricName"] = args ? args.metricName : undefined;
            resourceInputs["muteQuery"] = args ? args.muteQuery : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["raiseFor"] = args ? args.raiseFor : undefined;
            resourceInputs["resolveLongTemplate"] = args ? args.resolveLongTemplate : undefined;
            resourceInputs["resolveShortTemplate"] = args ? args.resolveShortTemplate : undefined;
            resourceInputs["resolveTitleTemplate"] = args ? args.resolveTitleTemplate : undefined;
            resourceInputs["resourceQuery"] = args ? args.resourceQuery : undefined;
            resourceInputs["resourceType"] = args ? args.resourceType : undefined;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Alarm.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Alarm resources.
 */
export interface AlarmState {
    /**
     * Defaults to `1`.
     */
    checkIntervalSec?: pulumi.Input<string>;
    /**
     * The Alarm's resolution condition.
     */
    clearQuery?: pulumi.Input<string>;
    /**
     * If the Alarm can be effectively optimized. Defaults to `true`.
     */
    compileEligible?: pulumi.Input<boolean>;
    /**
     * Kind of check in an Alarm (e.g. above or below) vs a threshold for a Metric.
     */
    conditionType?: pulumi.Input<string>;
    /**
     * Switching value (threshold) for a Metric in an Alarm.
     */
    conditionValue?: pulumi.Input<string>;
    /**
     * A user-friendly explanation of an object.
     */
    description?: pulumi.Input<string>;
    /**
     * If the object is currently enabled or disabled. Defaults to `false`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * General class for an Action or Bot (e.g., custom, standard, metric, or system check). Defaults to `custom`.
     */
    family?: pulumi.Input<string>;
    /**
     * The long description of the Alarm's triggering condition.
     */
    fireLongTemplate?: pulumi.Input<string>;
    /**
     * The trigger condition for an Alarm (general expression) or the TimeTrigger (e.g. 'every 5m').
     */
    fireQuery?: pulumi.Input<string>;
    /**
     * The short description of the Alarm's triggering condition.
     */
    fireShortTemplate?: pulumi.Input<string>;
    /**
     * UI title of the Alarm's triggering condition.
     */
    fireTitleTemplate?: pulumi.Input<string>;
    /**
     * The Alarm's triggering Metric.
     */
    metricName?: pulumi.Input<string>;
    /**
     * The Alarm's mute condition.
     */
    muteQuery?: pulumi.Input<string>;
    /**
     * The name/symbol for the object within Shoreline and the op language (must be unique, only alphanumeric/underscore).
     */
    name?: pulumi.Input<string>;
    /**
     * Where an Alarm is raised (e.g., local to a resource, or global to the system). Defaults to `local`.
     */
    raiseFor?: pulumi.Input<string>;
    /**
     * The long description of the Alarm's resolution.
     */
    resolveLongTemplate?: pulumi.Input<string>;
    /**
     * The short description of the Alarm's resolution.
     */
    resolveShortTemplate?: pulumi.Input<string>;
    /**
     * UI title of the Alarm's' resolution.
     */
    resolveTitleTemplate?: pulumi.Input<string>;
    /**
     * A set of Resources (e.g. host, pod, container), optionally filtered on tags or dynamic conditions.
     */
    resourceQuery?: pulumi.Input<string>;
    resourceType?: pulumi.Input<string>;
    /**
     * The type of object (i.e., Alarm, Action, Bot, Metric, Resource, or File).
     */
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Alarm resource.
 */
export interface AlarmArgs {
    /**
     * Defaults to `1`.
     */
    checkIntervalSec?: pulumi.Input<string>;
    /**
     * The Alarm's resolution condition.
     */
    clearQuery?: pulumi.Input<string>;
    /**
     * If the Alarm can be effectively optimized. Defaults to `true`.
     */
    compileEligible?: pulumi.Input<boolean>;
    /**
     * Kind of check in an Alarm (e.g. above or below) vs a threshold for a Metric.
     */
    conditionType?: pulumi.Input<string>;
    /**
     * Switching value (threshold) for a Metric in an Alarm.
     */
    conditionValue?: pulumi.Input<string>;
    /**
     * A user-friendly explanation of an object.
     */
    description?: pulumi.Input<string>;
    /**
     * If the object is currently enabled or disabled. Defaults to `false`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * General class for an Action or Bot (e.g., custom, standard, metric, or system check). Defaults to `custom`.
     */
    family?: pulumi.Input<string>;
    /**
     * The long description of the Alarm's triggering condition.
     */
    fireLongTemplate?: pulumi.Input<string>;
    /**
     * The trigger condition for an Alarm (general expression) or the TimeTrigger (e.g. 'every 5m').
     */
    fireQuery: pulumi.Input<string>;
    /**
     * The short description of the Alarm's triggering condition.
     */
    fireShortTemplate?: pulumi.Input<string>;
    /**
     * UI title of the Alarm's triggering condition.
     */
    fireTitleTemplate?: pulumi.Input<string>;
    /**
     * The Alarm's triggering Metric.
     */
    metricName?: pulumi.Input<string>;
    /**
     * The Alarm's mute condition.
     */
    muteQuery?: pulumi.Input<string>;
    /**
     * The name/symbol for the object within Shoreline and the op language (must be unique, only alphanumeric/underscore).
     */
    name?: pulumi.Input<string>;
    /**
     * Where an Alarm is raised (e.g., local to a resource, or global to the system). Defaults to `local`.
     */
    raiseFor?: pulumi.Input<string>;
    /**
     * The long description of the Alarm's resolution.
     */
    resolveLongTemplate?: pulumi.Input<string>;
    /**
     * The short description of the Alarm's resolution.
     */
    resolveShortTemplate?: pulumi.Input<string>;
    /**
     * UI title of the Alarm's' resolution.
     */
    resolveTitleTemplate?: pulumi.Input<string>;
    /**
     * A set of Resources (e.g. host, pod, container), optionally filtered on tags or dynamic conditions.
     */
    resourceQuery?: pulumi.Input<string>;
    resourceType?: pulumi.Input<string>;
}
