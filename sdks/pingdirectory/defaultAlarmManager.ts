// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DefaultAlarmManager extends pulumi.CustomResource {
    /**
     * Get an existing DefaultAlarmManager resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DefaultAlarmManagerState, opts?: pulumi.CustomResourceOptions): DefaultAlarmManager {
        return new DefaultAlarmManager(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pingdirectory:index/defaultAlarmManager:DefaultAlarmManager';

    /**
     * Returns true if the given object is an instance of DefaultAlarmManager.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DefaultAlarmManager {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DefaultAlarmManager.__pulumiType;
    }

    /**
     * Specifies the level at which alerts are sent for alarms raised by the Alarm Manager.
     */
    public readonly defaultGaugeAlertLevel!: pulumi.Output<string>;
    /**
     * Indicates what kind of alert types should be generated.
     */
    public readonly generatedAlertTypes!: pulumi.Output<string[]>;
    /**
     * Notifications returned by the PingDirectory Configuration API.
     */
    public /*out*/ readonly notifications!: pulumi.Output<string[]>;
    /**
     * Required actions returned by the PingDirectory Configuration API.
     */
    public /*out*/ readonly requiredActions!: pulumi.Output<outputs.DefaultAlarmManagerRequiredAction[]>;
    /**
     * Specifies the names of the alarm alert types that should be suppressed. If the condition that triggers an alarm in this
     * list occurs, then the alarm will not be raised and no alerts will be generated. Only a subset of alarms can be
     * suppressed in this way. Alarms triggered by a gauge can be disabled by disabling the gauge.
     */
    public readonly suppressedAlarms!: pulumi.Output<string[]>;
    /**
     * The type of Alarm Manager resource. Options are ['alarm-manager']
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DefaultAlarmManager resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: DefaultAlarmManagerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DefaultAlarmManagerArgs | DefaultAlarmManagerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DefaultAlarmManagerState | undefined;
            resourceInputs["defaultGaugeAlertLevel"] = state ? state.defaultGaugeAlertLevel : undefined;
            resourceInputs["generatedAlertTypes"] = state ? state.generatedAlertTypes : undefined;
            resourceInputs["notifications"] = state ? state.notifications : undefined;
            resourceInputs["requiredActions"] = state ? state.requiredActions : undefined;
            resourceInputs["suppressedAlarms"] = state ? state.suppressedAlarms : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as DefaultAlarmManagerArgs | undefined;
            resourceInputs["defaultGaugeAlertLevel"] = args ? args.defaultGaugeAlertLevel : undefined;
            resourceInputs["generatedAlertTypes"] = args ? args.generatedAlertTypes : undefined;
            resourceInputs["suppressedAlarms"] = args ? args.suppressedAlarms : undefined;
            resourceInputs["notifications"] = undefined /*out*/;
            resourceInputs["requiredActions"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DefaultAlarmManager.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DefaultAlarmManager resources.
 */
export interface DefaultAlarmManagerState {
    /**
     * Specifies the level at which alerts are sent for alarms raised by the Alarm Manager.
     */
    defaultGaugeAlertLevel?: pulumi.Input<string>;
    /**
     * Indicates what kind of alert types should be generated.
     */
    generatedAlertTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Notifications returned by the PingDirectory Configuration API.
     */
    notifications?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Required actions returned by the PingDirectory Configuration API.
     */
    requiredActions?: pulumi.Input<pulumi.Input<inputs.DefaultAlarmManagerRequiredAction>[]>;
    /**
     * Specifies the names of the alarm alert types that should be suppressed. If the condition that triggers an alarm in this
     * list occurs, then the alarm will not be raised and no alerts will be generated. Only a subset of alarms can be
     * suppressed in this way. Alarms triggered by a gauge can be disabled by disabling the gauge.
     */
    suppressedAlarms?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The type of Alarm Manager resource. Options are ['alarm-manager']
     */
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DefaultAlarmManager resource.
 */
export interface DefaultAlarmManagerArgs {
    /**
     * Specifies the level at which alerts are sent for alarms raised by the Alarm Manager.
     */
    defaultGaugeAlertLevel?: pulumi.Input<string>;
    /**
     * Indicates what kind of alert types should be generated.
     */
    generatedAlertTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the names of the alarm alert types that should be suppressed. If the condition that triggers an alarm in this
     * list occurs, then the alarm will not be raised and no alerts will be generated. Only a subset of alarms can be
     * suppressed in this way. Alarms triggered by a gauge can be disabled by disabling the gauge.
     */
    suppressedAlarms?: pulumi.Input<pulumi.Input<string>[]>;
}
