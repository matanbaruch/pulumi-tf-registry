// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class MonitorSilenceRule extends pulumi.CustomResource {
    /**
     * Get an existing MonitorSilenceRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MonitorSilenceRuleState, opts?: pulumi.CustomResourceOptions): MonitorSilenceRule {
        return new MonitorSilenceRule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'sysdig:index/monitorSilenceRule:MonitorSilenceRule';

    /**
     * Returns true if the given object is an instance of MonitorSilenceRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MonitorSilenceRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MonitorSilenceRule.__pulumiType;
    }

    public readonly alertIds!: pulumi.Output<number[] | undefined>;
    public readonly durationSeconds!: pulumi.Output<number>;
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly notificationChannelIds!: pulumi.Output<number[] | undefined>;
    public readonly scope!: pulumi.Output<string | undefined>;
    public readonly startTs!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.MonitorSilenceRuleTimeouts | undefined>;
    public /*out*/ readonly version!: pulumi.Output<number>;

    /**
     * Create a MonitorSilenceRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MonitorSilenceRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MonitorSilenceRuleArgs | MonitorSilenceRuleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MonitorSilenceRuleState | undefined;
            resourceInputs["alertIds"] = state ? state.alertIds : undefined;
            resourceInputs["durationSeconds"] = state ? state.durationSeconds : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["notificationChannelIds"] = state ? state.notificationChannelIds : undefined;
            resourceInputs["scope"] = state ? state.scope : undefined;
            resourceInputs["startTs"] = state ? state.startTs : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as MonitorSilenceRuleArgs | undefined;
            if ((!args || args.durationSeconds === undefined) && !opts.urn) {
                throw new Error("Missing required property 'durationSeconds'");
            }
            if ((!args || args.startTs === undefined) && !opts.urn) {
                throw new Error("Missing required property 'startTs'");
            }
            resourceInputs["alertIds"] = args ? args.alertIds : undefined;
            resourceInputs["durationSeconds"] = args ? args.durationSeconds : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["notificationChannelIds"] = args ? args.notificationChannelIds : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["startTs"] = args ? args.startTs : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MonitorSilenceRule.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MonitorSilenceRule resources.
 */
export interface MonitorSilenceRuleState {
    alertIds?: pulumi.Input<pulumi.Input<number>[]>;
    durationSeconds?: pulumi.Input<number>;
    enabled?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    notificationChannelIds?: pulumi.Input<pulumi.Input<number>[]>;
    scope?: pulumi.Input<string>;
    startTs?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.MonitorSilenceRuleTimeouts>;
    version?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a MonitorSilenceRule resource.
 */
export interface MonitorSilenceRuleArgs {
    alertIds?: pulumi.Input<pulumi.Input<number>[]>;
    durationSeconds: pulumi.Input<number>;
    enabled?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    notificationChannelIds?: pulumi.Input<pulumi.Input<number>[]>;
    scope?: pulumi.Input<string>;
    startTs: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.MonitorSilenceRuleTimeouts>;
}
