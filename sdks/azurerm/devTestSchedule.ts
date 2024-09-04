// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DevTestSchedule extends pulumi.CustomResource {
    /**
     * Get an existing DevTestSchedule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DevTestScheduleState, opts?: pulumi.CustomResourceOptions): DevTestSchedule {
        return new DevTestSchedule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/devTestSchedule:DevTestSchedule';

    /**
     * Returns true if the given object is an instance of DevTestSchedule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DevTestSchedule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DevTestSchedule.__pulumiType;
    }

    public readonly dailyRecurrence!: pulumi.Output<outputs.DevTestScheduleDailyRecurrence | undefined>;
    public readonly hourlyRecurrence!: pulumi.Output<outputs.DevTestScheduleHourlyRecurrence | undefined>;
    public readonly labName!: pulumi.Output<string>;
    public readonly location!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly notificationSettings!: pulumi.Output<outputs.DevTestScheduleNotificationSettings>;
    public readonly resourceGroupName!: pulumi.Output<string>;
    public readonly status!: pulumi.Output<string | undefined>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly taskType!: pulumi.Output<string>;
    public readonly timeZoneId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.DevTestScheduleTimeouts | undefined>;
    public readonly weeklyRecurrence!: pulumi.Output<outputs.DevTestScheduleWeeklyRecurrence | undefined>;

    /**
     * Create a DevTestSchedule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DevTestScheduleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DevTestScheduleArgs | DevTestScheduleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DevTestScheduleState | undefined;
            resourceInputs["dailyRecurrence"] = state ? state.dailyRecurrence : undefined;
            resourceInputs["hourlyRecurrence"] = state ? state.hourlyRecurrence : undefined;
            resourceInputs["labName"] = state ? state.labName : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["notificationSettings"] = state ? state.notificationSettings : undefined;
            resourceInputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["taskType"] = state ? state.taskType : undefined;
            resourceInputs["timeZoneId"] = state ? state.timeZoneId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["weeklyRecurrence"] = state ? state.weeklyRecurrence : undefined;
        } else {
            const args = argsOrState as DevTestScheduleArgs | undefined;
            if ((!args || args.labName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'labName'");
            }
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.notificationSettings === undefined) && !opts.urn) {
                throw new Error("Missing required property 'notificationSettings'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.taskType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'taskType'");
            }
            if ((!args || args.timeZoneId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'timeZoneId'");
            }
            resourceInputs["dailyRecurrence"] = args ? args.dailyRecurrence : undefined;
            resourceInputs["hourlyRecurrence"] = args ? args.hourlyRecurrence : undefined;
            resourceInputs["labName"] = args ? args.labName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["notificationSettings"] = args ? args.notificationSettings : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["taskType"] = args ? args.taskType : undefined;
            resourceInputs["timeZoneId"] = args ? args.timeZoneId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["weeklyRecurrence"] = args ? args.weeklyRecurrence : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DevTestSchedule.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DevTestSchedule resources.
 */
export interface DevTestScheduleState {
    dailyRecurrence?: pulumi.Input<inputs.DevTestScheduleDailyRecurrence>;
    hourlyRecurrence?: pulumi.Input<inputs.DevTestScheduleHourlyRecurrence>;
    labName?: pulumi.Input<string>;
    location?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    notificationSettings?: pulumi.Input<inputs.DevTestScheduleNotificationSettings>;
    resourceGroupName?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    taskType?: pulumi.Input<string>;
    timeZoneId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DevTestScheduleTimeouts>;
    weeklyRecurrence?: pulumi.Input<inputs.DevTestScheduleWeeklyRecurrence>;
}

/**
 * The set of arguments for constructing a DevTestSchedule resource.
 */
export interface DevTestScheduleArgs {
    dailyRecurrence?: pulumi.Input<inputs.DevTestScheduleDailyRecurrence>;
    hourlyRecurrence?: pulumi.Input<inputs.DevTestScheduleHourlyRecurrence>;
    labName: pulumi.Input<string>;
    location: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    notificationSettings: pulumi.Input<inputs.DevTestScheduleNotificationSettings>;
    resourceGroupName: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    taskType: pulumi.Input<string>;
    timeZoneId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DevTestScheduleTimeouts>;
    weeklyRecurrence?: pulumi.Input<inputs.DevTestScheduleWeeklyRecurrence>;
}
