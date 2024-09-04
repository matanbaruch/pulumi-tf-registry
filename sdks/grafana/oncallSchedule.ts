// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class OncallSchedule extends pulumi.CustomResource {
    /**
     * Get an existing OncallSchedule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OncallScheduleState, opts?: pulumi.CustomResourceOptions): OncallSchedule {
        return new OncallSchedule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'grafana:index/oncallSchedule:OncallSchedule';

    /**
     * Returns true if the given object is an instance of OncallSchedule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OncallSchedule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OncallSchedule.__pulumiType;
    }

    /**
     * Enable overrides via web UI (it will ignore ical_url_overrides).
     */
    public readonly enableWebOverrides!: pulumi.Output<boolean | undefined>;
    /**
     * The URL of external iCal calendar which override primary events.
     */
    public readonly icalUrlOverrides!: pulumi.Output<string | undefined>;
    /**
     * The URL of the external calendar iCal file.
     */
    public readonly icalUrlPrimary!: pulumi.Output<string | undefined>;
    /**
     * The schedule's name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The list of ID's of on-call shifts.
     */
    public readonly shifts!: pulumi.Output<string[] | undefined>;
    /**
     * The Slack-specific settings for a schedule.
     */
    public readonly slack!: pulumi.Output<outputs.OncallScheduleSlack | undefined>;
    /**
     * The ID of the OnCall team. To get one, create a team in Grafana, and navigate to the OnCall plugin (to sync the team
     * with OnCall). You can then get the ID using the `grafana.getOncallTeam` datasource.
     */
    public readonly teamId!: pulumi.Output<string | undefined>;
    /**
     * The schedule's time zone.
     */
    public readonly timeZone!: pulumi.Output<string | undefined>;
    /**
     * The schedule's type. Valid values are `ical`, `calendar`.
     */
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a OncallSchedule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OncallScheduleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: OncallScheduleArgs | OncallScheduleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as OncallScheduleState | undefined;
            resourceInputs["enableWebOverrides"] = state ? state.enableWebOverrides : undefined;
            resourceInputs["icalUrlOverrides"] = state ? state.icalUrlOverrides : undefined;
            resourceInputs["icalUrlPrimary"] = state ? state.icalUrlPrimary : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["shifts"] = state ? state.shifts : undefined;
            resourceInputs["slack"] = state ? state.slack : undefined;
            resourceInputs["teamId"] = state ? state.teamId : undefined;
            resourceInputs["timeZone"] = state ? state.timeZone : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as OncallScheduleArgs | undefined;
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["enableWebOverrides"] = args ? args.enableWebOverrides : undefined;
            resourceInputs["icalUrlOverrides"] = args ? args.icalUrlOverrides : undefined;
            resourceInputs["icalUrlPrimary"] = args ? args.icalUrlPrimary : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["shifts"] = args ? args.shifts : undefined;
            resourceInputs["slack"] = args ? args.slack : undefined;
            resourceInputs["teamId"] = args ? args.teamId : undefined;
            resourceInputs["timeZone"] = args ? args.timeZone : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(OncallSchedule.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering OncallSchedule resources.
 */
export interface OncallScheduleState {
    /**
     * Enable overrides via web UI (it will ignore ical_url_overrides).
     */
    enableWebOverrides?: pulumi.Input<boolean>;
    /**
     * The URL of external iCal calendar which override primary events.
     */
    icalUrlOverrides?: pulumi.Input<string>;
    /**
     * The URL of the external calendar iCal file.
     */
    icalUrlPrimary?: pulumi.Input<string>;
    /**
     * The schedule's name.
     */
    name?: pulumi.Input<string>;
    /**
     * The list of ID's of on-call shifts.
     */
    shifts?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Slack-specific settings for a schedule.
     */
    slack?: pulumi.Input<inputs.OncallScheduleSlack>;
    /**
     * The ID of the OnCall team. To get one, create a team in Grafana, and navigate to the OnCall plugin (to sync the team
     * with OnCall). You can then get the ID using the `grafana.getOncallTeam` datasource.
     */
    teamId?: pulumi.Input<string>;
    /**
     * The schedule's time zone.
     */
    timeZone?: pulumi.Input<string>;
    /**
     * The schedule's type. Valid values are `ical`, `calendar`.
     */
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a OncallSchedule resource.
 */
export interface OncallScheduleArgs {
    /**
     * Enable overrides via web UI (it will ignore ical_url_overrides).
     */
    enableWebOverrides?: pulumi.Input<boolean>;
    /**
     * The URL of external iCal calendar which override primary events.
     */
    icalUrlOverrides?: pulumi.Input<string>;
    /**
     * The URL of the external calendar iCal file.
     */
    icalUrlPrimary?: pulumi.Input<string>;
    /**
     * The schedule's name.
     */
    name?: pulumi.Input<string>;
    /**
     * The list of ID's of on-call shifts.
     */
    shifts?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Slack-specific settings for a schedule.
     */
    slack?: pulumi.Input<inputs.OncallScheduleSlack>;
    /**
     * The ID of the OnCall team. To get one, create a team in Grafana, and navigate to the OnCall plugin (to sync the team
     * with OnCall). You can then get the ID using the `grafana.getOncallTeam` datasource.
     */
    teamId?: pulumi.Input<string>;
    /**
     * The schedule's time zone.
     */
    timeZone?: pulumi.Input<string>;
    /**
     * The schedule's type. Valid values are `ical`, `calendar`.
     */
    type: pulumi.Input<string>;
}
