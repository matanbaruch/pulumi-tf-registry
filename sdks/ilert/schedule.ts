// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Schedule extends pulumi.CustomResource {
    /**
     * Get an existing Schedule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ScheduleState, opts?: pulumi.CustomResourceOptions): Schedule {
        return new Schedule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ilert:index/schedule:Schedule';

    /**
     * Returns true if the given object is an instance of Schedule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Schedule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Schedule.__pulumiType;
    }

    public readonly currentShift!: pulumi.Output<outputs.ScheduleCurrentShift | undefined>;
    public readonly defaultShiftDuration!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly nextShift!: pulumi.Output<outputs.ScheduleNextShift | undefined>;
    public readonly scheduleLayers!: pulumi.Output<outputs.ScheduleScheduleLayer[] | undefined>;
    public readonly shifts!: pulumi.Output<outputs.ScheduleShift[] | undefined>;
    public readonly showGaps!: pulumi.Output<boolean | undefined>;
    public readonly teams!: pulumi.Output<outputs.ScheduleTeam[] | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.ScheduleTimeouts | undefined>;
    public readonly timezone!: pulumi.Output<string>;
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a Schedule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ScheduleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ScheduleArgs | ScheduleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ScheduleState | undefined;
            resourceInputs["currentShift"] = state ? state.currentShift : undefined;
            resourceInputs["defaultShiftDuration"] = state ? state.defaultShiftDuration : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nextShift"] = state ? state.nextShift : undefined;
            resourceInputs["scheduleLayers"] = state ? state.scheduleLayers : undefined;
            resourceInputs["shifts"] = state ? state.shifts : undefined;
            resourceInputs["showGaps"] = state ? state.showGaps : undefined;
            resourceInputs["teams"] = state ? state.teams : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["timezone"] = state ? state.timezone : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as ScheduleArgs | undefined;
            if ((!args || args.timezone === undefined) && !opts.urn) {
                throw new Error("Missing required property 'timezone'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["currentShift"] = args ? args.currentShift : undefined;
            resourceInputs["defaultShiftDuration"] = args ? args.defaultShiftDuration : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nextShift"] = args ? args.nextShift : undefined;
            resourceInputs["scheduleLayers"] = args ? args.scheduleLayers : undefined;
            resourceInputs["shifts"] = args ? args.shifts : undefined;
            resourceInputs["showGaps"] = args ? args.showGaps : undefined;
            resourceInputs["teams"] = args ? args.teams : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["timezone"] = args ? args.timezone : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Schedule.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Schedule resources.
 */
export interface ScheduleState {
    currentShift?: pulumi.Input<inputs.ScheduleCurrentShift>;
    defaultShiftDuration?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nextShift?: pulumi.Input<inputs.ScheduleNextShift>;
    scheduleLayers?: pulumi.Input<pulumi.Input<inputs.ScheduleScheduleLayer>[]>;
    shifts?: pulumi.Input<pulumi.Input<inputs.ScheduleShift>[]>;
    showGaps?: pulumi.Input<boolean>;
    teams?: pulumi.Input<pulumi.Input<inputs.ScheduleTeam>[]>;
    timeouts?: pulumi.Input<inputs.ScheduleTimeouts>;
    timezone?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Schedule resource.
 */
export interface ScheduleArgs {
    currentShift?: pulumi.Input<inputs.ScheduleCurrentShift>;
    defaultShiftDuration?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nextShift?: pulumi.Input<inputs.ScheduleNextShift>;
    scheduleLayers?: pulumi.Input<pulumi.Input<inputs.ScheduleScheduleLayer>[]>;
    shifts?: pulumi.Input<pulumi.Input<inputs.ScheduleShift>[]>;
    showGaps?: pulumi.Input<boolean>;
    teams?: pulumi.Input<pulumi.Input<inputs.ScheduleTeam>[]>;
    timeouts?: pulumi.Input<inputs.ScheduleTimeouts>;
    timezone: pulumi.Input<string>;
    type: pulumi.Input<string>;
}
