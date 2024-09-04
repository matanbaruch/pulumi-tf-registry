// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SentinelAlertRuleAnomalyBuiltIn extends pulumi.CustomResource {
    /**
     * Get an existing SentinelAlertRuleAnomalyBuiltIn resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SentinelAlertRuleAnomalyBuiltInState, opts?: pulumi.CustomResourceOptions): SentinelAlertRuleAnomalyBuiltIn {
        return new SentinelAlertRuleAnomalyBuiltIn(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/sentinelAlertRuleAnomalyBuiltIn:SentinelAlertRuleAnomalyBuiltIn';

    /**
     * Returns true if the given object is an instance of SentinelAlertRuleAnomalyBuiltIn.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SentinelAlertRuleAnomalyBuiltIn {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SentinelAlertRuleAnomalyBuiltIn.__pulumiType;
    }

    public /*out*/ readonly anomalySettingsVersion!: pulumi.Output<number>;
    public /*out*/ readonly anomalyVersion!: pulumi.Output<string>;
    public /*out*/ readonly description!: pulumi.Output<string>;
    public readonly displayName!: pulumi.Output<string>;
    public readonly enabled!: pulumi.Output<boolean>;
    public /*out*/ readonly frequency!: pulumi.Output<string>;
    public readonly logAnalyticsWorkspaceId!: pulumi.Output<string>;
    public readonly mode!: pulumi.Output<string>;
    public /*out*/ readonly multiSelectObservations!: pulumi.Output<outputs.SentinelAlertRuleAnomalyBuiltInMultiSelectObservation[]>;
    public readonly name!: pulumi.Output<string>;
    public /*out*/ readonly prioritizedExcludeObservations!: pulumi.Output<outputs.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservation[]>;
    public /*out*/ readonly requiredDataConnectors!: pulumi.Output<outputs.SentinelAlertRuleAnomalyBuiltInRequiredDataConnector[]>;
    public /*out*/ readonly settingsDefinitionId!: pulumi.Output<string>;
    public /*out*/ readonly singleSelectObservations!: pulumi.Output<outputs.SentinelAlertRuleAnomalyBuiltInSingleSelectObservation[]>;
    public /*out*/ readonly tactics!: pulumi.Output<string[]>;
    public /*out*/ readonly techniques!: pulumi.Output<string[]>;
    public /*out*/ readonly thresholdObservations!: pulumi.Output<outputs.SentinelAlertRuleAnomalyBuiltInThresholdObservation[]>;
    public readonly timeouts!: pulumi.Output<outputs.SentinelAlertRuleAnomalyBuiltInTimeouts | undefined>;

    /**
     * Create a SentinelAlertRuleAnomalyBuiltIn resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SentinelAlertRuleAnomalyBuiltInArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SentinelAlertRuleAnomalyBuiltInArgs | SentinelAlertRuleAnomalyBuiltInState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SentinelAlertRuleAnomalyBuiltInState | undefined;
            resourceInputs["anomalySettingsVersion"] = state ? state.anomalySettingsVersion : undefined;
            resourceInputs["anomalyVersion"] = state ? state.anomalyVersion : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["frequency"] = state ? state.frequency : undefined;
            resourceInputs["logAnalyticsWorkspaceId"] = state ? state.logAnalyticsWorkspaceId : undefined;
            resourceInputs["mode"] = state ? state.mode : undefined;
            resourceInputs["multiSelectObservations"] = state ? state.multiSelectObservations : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["prioritizedExcludeObservations"] = state ? state.prioritizedExcludeObservations : undefined;
            resourceInputs["requiredDataConnectors"] = state ? state.requiredDataConnectors : undefined;
            resourceInputs["settingsDefinitionId"] = state ? state.settingsDefinitionId : undefined;
            resourceInputs["singleSelectObservations"] = state ? state.singleSelectObservations : undefined;
            resourceInputs["tactics"] = state ? state.tactics : undefined;
            resourceInputs["techniques"] = state ? state.techniques : undefined;
            resourceInputs["thresholdObservations"] = state ? state.thresholdObservations : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as SentinelAlertRuleAnomalyBuiltInArgs | undefined;
            if ((!args || args.enabled === undefined) && !opts.urn) {
                throw new Error("Missing required property 'enabled'");
            }
            if ((!args || args.logAnalyticsWorkspaceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'logAnalyticsWorkspaceId'");
            }
            if ((!args || args.mode === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mode'");
            }
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["logAnalyticsWorkspaceId"] = args ? args.logAnalyticsWorkspaceId : undefined;
            resourceInputs["mode"] = args ? args.mode : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["anomalySettingsVersion"] = undefined /*out*/;
            resourceInputs["anomalyVersion"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["frequency"] = undefined /*out*/;
            resourceInputs["multiSelectObservations"] = undefined /*out*/;
            resourceInputs["prioritizedExcludeObservations"] = undefined /*out*/;
            resourceInputs["requiredDataConnectors"] = undefined /*out*/;
            resourceInputs["settingsDefinitionId"] = undefined /*out*/;
            resourceInputs["singleSelectObservations"] = undefined /*out*/;
            resourceInputs["tactics"] = undefined /*out*/;
            resourceInputs["techniques"] = undefined /*out*/;
            resourceInputs["thresholdObservations"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SentinelAlertRuleAnomalyBuiltIn.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SentinelAlertRuleAnomalyBuiltIn resources.
 */
export interface SentinelAlertRuleAnomalyBuiltInState {
    anomalySettingsVersion?: pulumi.Input<number>;
    anomalyVersion?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    enabled?: pulumi.Input<boolean>;
    frequency?: pulumi.Input<string>;
    logAnalyticsWorkspaceId?: pulumi.Input<string>;
    mode?: pulumi.Input<string>;
    multiSelectObservations?: pulumi.Input<pulumi.Input<inputs.SentinelAlertRuleAnomalyBuiltInMultiSelectObservation>[]>;
    name?: pulumi.Input<string>;
    prioritizedExcludeObservations?: pulumi.Input<pulumi.Input<inputs.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservation>[]>;
    requiredDataConnectors?: pulumi.Input<pulumi.Input<inputs.SentinelAlertRuleAnomalyBuiltInRequiredDataConnector>[]>;
    settingsDefinitionId?: pulumi.Input<string>;
    singleSelectObservations?: pulumi.Input<pulumi.Input<inputs.SentinelAlertRuleAnomalyBuiltInSingleSelectObservation>[]>;
    tactics?: pulumi.Input<pulumi.Input<string>[]>;
    techniques?: pulumi.Input<pulumi.Input<string>[]>;
    thresholdObservations?: pulumi.Input<pulumi.Input<inputs.SentinelAlertRuleAnomalyBuiltInThresholdObservation>[]>;
    timeouts?: pulumi.Input<inputs.SentinelAlertRuleAnomalyBuiltInTimeouts>;
}

/**
 * The set of arguments for constructing a SentinelAlertRuleAnomalyBuiltIn resource.
 */
export interface SentinelAlertRuleAnomalyBuiltInArgs {
    displayName?: pulumi.Input<string>;
    enabled: pulumi.Input<boolean>;
    logAnalyticsWorkspaceId: pulumi.Input<string>;
    mode: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.SentinelAlertRuleAnomalyBuiltInTimeouts>;
}
