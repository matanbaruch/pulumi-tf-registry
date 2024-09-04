// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Heartbeat extends pulumi.CustomResource {
    /**
     * Get an existing Heartbeat resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: HeartbeatState, opts?: pulumi.CustomResourceOptions): Heartbeat {
        return new Heartbeat(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'better-uptime:index/heartbeat:Heartbeat';

    /**
     * Returns true if the given object is an instance of Heartbeat.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Heartbeat {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Heartbeat.__pulumiType;
    }

    /**
     * Should we call the on-call person?
     */
    public readonly call!: pulumi.Output<boolean>;
    /**
     * The time when this heartbeat was created.
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * Should we send an email to the on-call person?
     */
    public readonly email!: pulumi.Output<boolean>;
    /**
     * Heartbeats can fluctuate; specify this value to control what is still acceptable. Minimum value: 0 seconds. We recommend
     * setting this to approx. 20% of period
     */
    public readonly grace!: pulumi.Output<number>;
    /**
     * Set this attribute if you want to add this heartbeat to a heartbeat group..
     */
    public readonly heartbeatGroupId!: pulumi.Output<number>;
    /**
     * An array of maintenance days to set. If a maintenance window is overnight both affected days should be set. Allowed
     * values are ["mon", "tue", "wed", "thu", "fri", "sat", "sun"] or any subset of these days.
     */
    public readonly maintenanceDays!: pulumi.Output<string[]>;
    /**
     * Start of the maintenance window each day. We won't create incidents during this window. Example: "01:00:00"
     */
    public readonly maintenanceFrom!: pulumi.Output<string>;
    /**
     * The timezone to use for the maintenance window each day. Defaults to UTC. The accepted values can be found in the Rails
     * TimeZone documentation. https://api.rubyonrails.org/classes/ActiveSupport/TimeZone.html
     */
    public readonly maintenanceTimezone!: pulumi.Output<string>;
    /**
     * End of the maintenance window each day. Example: "03:00:00"
     */
    public readonly maintenanceTo!: pulumi.Output<string>;
    /**
     * A name of the service for this heartbeat.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Set to true to pause monitoring — we won't notify you about downtime. Set to false to resume monitoring.
     */
    public readonly paused!: pulumi.Output<boolean>;
    /**
     * The time when this heartbeat was paused.
     */
    public /*out*/ readonly pausedAt!: pulumi.Output<string>;
    /**
     * How often should we expect this heartbeat? In seconds. Minimum value: 30 seconds
     */
    public readonly period!: pulumi.Output<number>;
    /**
     * Set the escalation policy for the heartbeat.
     */
    public readonly policyId!: pulumi.Output<string>;
    /**
     * Should we send a push notification to the on-call person?
     */
    public readonly push!: pulumi.Output<boolean>;
    /**
     * Should we send an SMS to the on-call person?
     */
    public readonly sms!: pulumi.Output<boolean>;
    /**
     * An index controlling the position of a heartbeat in the heartbeat group.
     */
    public readonly sortIndex!: pulumi.Output<number>;
    /**
     * The status of this heartbeat.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * Used to specify the team the resource should be created in when using global tokens.
     */
    public readonly teamName!: pulumi.Output<string | undefined>;
    /**
     * How long to wait before escalating the incident alert to the team. Leave blank to disable escalating to the entire team.
     */
    public readonly teamWait!: pulumi.Output<number>;
    /**
     * The time when this heartbeat was updated.
     */
    public /*out*/ readonly updatedAt!: pulumi.Output<string>;
    /**
     * The url of this heartbeat.
     */
    public /*out*/ readonly url!: pulumi.Output<string>;

    /**
     * Create a Heartbeat resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HeartbeatArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: HeartbeatArgs | HeartbeatState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as HeartbeatState | undefined;
            resourceInputs["call"] = state ? state.call : undefined;
            resourceInputs["createdAt"] = state ? state.createdAt : undefined;
            resourceInputs["email"] = state ? state.email : undefined;
            resourceInputs["grace"] = state ? state.grace : undefined;
            resourceInputs["heartbeatGroupId"] = state ? state.heartbeatGroupId : undefined;
            resourceInputs["maintenanceDays"] = state ? state.maintenanceDays : undefined;
            resourceInputs["maintenanceFrom"] = state ? state.maintenanceFrom : undefined;
            resourceInputs["maintenanceTimezone"] = state ? state.maintenanceTimezone : undefined;
            resourceInputs["maintenanceTo"] = state ? state.maintenanceTo : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["paused"] = state ? state.paused : undefined;
            resourceInputs["pausedAt"] = state ? state.pausedAt : undefined;
            resourceInputs["period"] = state ? state.period : undefined;
            resourceInputs["policyId"] = state ? state.policyId : undefined;
            resourceInputs["push"] = state ? state.push : undefined;
            resourceInputs["sms"] = state ? state.sms : undefined;
            resourceInputs["sortIndex"] = state ? state.sortIndex : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["teamName"] = state ? state.teamName : undefined;
            resourceInputs["teamWait"] = state ? state.teamWait : undefined;
            resourceInputs["updatedAt"] = state ? state.updatedAt : undefined;
            resourceInputs["url"] = state ? state.url : undefined;
        } else {
            const args = argsOrState as HeartbeatArgs | undefined;
            if ((!args || args.grace === undefined) && !opts.urn) {
                throw new Error("Missing required property 'grace'");
            }
            if ((!args || args.period === undefined) && !opts.urn) {
                throw new Error("Missing required property 'period'");
            }
            resourceInputs["call"] = args ? args.call : undefined;
            resourceInputs["email"] = args ? args.email : undefined;
            resourceInputs["grace"] = args ? args.grace : undefined;
            resourceInputs["heartbeatGroupId"] = args ? args.heartbeatGroupId : undefined;
            resourceInputs["maintenanceDays"] = args ? args.maintenanceDays : undefined;
            resourceInputs["maintenanceFrom"] = args ? args.maintenanceFrom : undefined;
            resourceInputs["maintenanceTimezone"] = args ? args.maintenanceTimezone : undefined;
            resourceInputs["maintenanceTo"] = args ? args.maintenanceTo : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["paused"] = args ? args.paused : undefined;
            resourceInputs["period"] = args ? args.period : undefined;
            resourceInputs["policyId"] = args ? args.policyId : undefined;
            resourceInputs["push"] = args ? args.push : undefined;
            resourceInputs["sms"] = args ? args.sms : undefined;
            resourceInputs["sortIndex"] = args ? args.sortIndex : undefined;
            resourceInputs["teamName"] = args ? args.teamName : undefined;
            resourceInputs["teamWait"] = args ? args.teamWait : undefined;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["pausedAt"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["updatedAt"] = undefined /*out*/;
            resourceInputs["url"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Heartbeat.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Heartbeat resources.
 */
export interface HeartbeatState {
    /**
     * Should we call the on-call person?
     */
    call?: pulumi.Input<boolean>;
    /**
     * The time when this heartbeat was created.
     */
    createdAt?: pulumi.Input<string>;
    /**
     * Should we send an email to the on-call person?
     */
    email?: pulumi.Input<boolean>;
    /**
     * Heartbeats can fluctuate; specify this value to control what is still acceptable. Minimum value: 0 seconds. We recommend
     * setting this to approx. 20% of period
     */
    grace?: pulumi.Input<number>;
    /**
     * Set this attribute if you want to add this heartbeat to a heartbeat group..
     */
    heartbeatGroupId?: pulumi.Input<number>;
    /**
     * An array of maintenance days to set. If a maintenance window is overnight both affected days should be set. Allowed
     * values are ["mon", "tue", "wed", "thu", "fri", "sat", "sun"] or any subset of these days.
     */
    maintenanceDays?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Start of the maintenance window each day. We won't create incidents during this window. Example: "01:00:00"
     */
    maintenanceFrom?: pulumi.Input<string>;
    /**
     * The timezone to use for the maintenance window each day. Defaults to UTC. The accepted values can be found in the Rails
     * TimeZone documentation. https://api.rubyonrails.org/classes/ActiveSupport/TimeZone.html
     */
    maintenanceTimezone?: pulumi.Input<string>;
    /**
     * End of the maintenance window each day. Example: "03:00:00"
     */
    maintenanceTo?: pulumi.Input<string>;
    /**
     * A name of the service for this heartbeat.
     */
    name?: pulumi.Input<string>;
    /**
     * Set to true to pause monitoring — we won't notify you about downtime. Set to false to resume monitoring.
     */
    paused?: pulumi.Input<boolean>;
    /**
     * The time when this heartbeat was paused.
     */
    pausedAt?: pulumi.Input<string>;
    /**
     * How often should we expect this heartbeat? In seconds. Minimum value: 30 seconds
     */
    period?: pulumi.Input<number>;
    /**
     * Set the escalation policy for the heartbeat.
     */
    policyId?: pulumi.Input<string>;
    /**
     * Should we send a push notification to the on-call person?
     */
    push?: pulumi.Input<boolean>;
    /**
     * Should we send an SMS to the on-call person?
     */
    sms?: pulumi.Input<boolean>;
    /**
     * An index controlling the position of a heartbeat in the heartbeat group.
     */
    sortIndex?: pulumi.Input<number>;
    /**
     * The status of this heartbeat.
     */
    status?: pulumi.Input<string>;
    /**
     * Used to specify the team the resource should be created in when using global tokens.
     */
    teamName?: pulumi.Input<string>;
    /**
     * How long to wait before escalating the incident alert to the team. Leave blank to disable escalating to the entire team.
     */
    teamWait?: pulumi.Input<number>;
    /**
     * The time when this heartbeat was updated.
     */
    updatedAt?: pulumi.Input<string>;
    /**
     * The url of this heartbeat.
     */
    url?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Heartbeat resource.
 */
export interface HeartbeatArgs {
    /**
     * Should we call the on-call person?
     */
    call?: pulumi.Input<boolean>;
    /**
     * Should we send an email to the on-call person?
     */
    email?: pulumi.Input<boolean>;
    /**
     * Heartbeats can fluctuate; specify this value to control what is still acceptable. Minimum value: 0 seconds. We recommend
     * setting this to approx. 20% of period
     */
    grace: pulumi.Input<number>;
    /**
     * Set this attribute if you want to add this heartbeat to a heartbeat group..
     */
    heartbeatGroupId?: pulumi.Input<number>;
    /**
     * An array of maintenance days to set. If a maintenance window is overnight both affected days should be set. Allowed
     * values are ["mon", "tue", "wed", "thu", "fri", "sat", "sun"] or any subset of these days.
     */
    maintenanceDays?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Start of the maintenance window each day. We won't create incidents during this window. Example: "01:00:00"
     */
    maintenanceFrom?: pulumi.Input<string>;
    /**
     * The timezone to use for the maintenance window each day. Defaults to UTC. The accepted values can be found in the Rails
     * TimeZone documentation. https://api.rubyonrails.org/classes/ActiveSupport/TimeZone.html
     */
    maintenanceTimezone?: pulumi.Input<string>;
    /**
     * End of the maintenance window each day. Example: "03:00:00"
     */
    maintenanceTo?: pulumi.Input<string>;
    /**
     * A name of the service for this heartbeat.
     */
    name?: pulumi.Input<string>;
    /**
     * Set to true to pause monitoring — we won't notify you about downtime. Set to false to resume monitoring.
     */
    paused?: pulumi.Input<boolean>;
    /**
     * How often should we expect this heartbeat? In seconds. Minimum value: 30 seconds
     */
    period: pulumi.Input<number>;
    /**
     * Set the escalation policy for the heartbeat.
     */
    policyId?: pulumi.Input<string>;
    /**
     * Should we send a push notification to the on-call person?
     */
    push?: pulumi.Input<boolean>;
    /**
     * Should we send an SMS to the on-call person?
     */
    sms?: pulumi.Input<boolean>;
    /**
     * An index controlling the position of a heartbeat in the heartbeat group.
     */
    sortIndex?: pulumi.Input<number>;
    /**
     * Used to specify the team the resource should be created in when using global tokens.
     */
    teamName?: pulumi.Input<string>;
    /**
     * How long to wait before escalating the incident alert to the team. Leave blank to disable escalating to the entire team.
     */
    teamWait?: pulumi.Input<number>;
}
