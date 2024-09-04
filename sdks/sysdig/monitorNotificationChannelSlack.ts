// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class MonitorNotificationChannelSlack extends pulumi.CustomResource {
    /**
     * Get an existing MonitorNotificationChannelSlack resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MonitorNotificationChannelSlackState, opts?: pulumi.CustomResourceOptions): MonitorNotificationChannelSlack {
        return new MonitorNotificationChannelSlack(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'sysdig:index/monitorNotificationChannelSlack:MonitorNotificationChannelSlack';

    /**
     * Returns true if the given object is an instance of MonitorNotificationChannelSlack.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MonitorNotificationChannelSlack {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MonitorNotificationChannelSlack.__pulumiType;
    }

    public readonly channel!: pulumi.Output<string>;
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly notifyWhenOk!: pulumi.Output<boolean | undefined>;
    public readonly notifyWhenResolved!: pulumi.Output<boolean | undefined>;
    public readonly sendTestNotification!: pulumi.Output<boolean | undefined>;
    public readonly shareWithCurrentTeam!: pulumi.Output<boolean | undefined>;
    public readonly showSectionAlertDetails!: pulumi.Output<boolean | undefined>;
    public readonly showSectionCapturingInformation!: pulumi.Output<boolean | undefined>;
    public readonly showSectionDashboardLinks!: pulumi.Output<boolean | undefined>;
    public readonly showSectionEventDetails!: pulumi.Output<boolean | undefined>;
    public readonly showSectionNotificationChart!: pulumi.Output<boolean | undefined>;
    public readonly showSectionRunbookLinks!: pulumi.Output<boolean | undefined>;
    public readonly showSectionUserDefinedContent!: pulumi.Output<boolean | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.MonitorNotificationChannelSlackTimeouts | undefined>;
    public readonly url!: pulumi.Output<string>;
    public /*out*/ readonly version!: pulumi.Output<number>;

    /**
     * Create a MonitorNotificationChannelSlack resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MonitorNotificationChannelSlackArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MonitorNotificationChannelSlackArgs | MonitorNotificationChannelSlackState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MonitorNotificationChannelSlackState | undefined;
            resourceInputs["channel"] = state ? state.channel : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["notifyWhenOk"] = state ? state.notifyWhenOk : undefined;
            resourceInputs["notifyWhenResolved"] = state ? state.notifyWhenResolved : undefined;
            resourceInputs["sendTestNotification"] = state ? state.sendTestNotification : undefined;
            resourceInputs["shareWithCurrentTeam"] = state ? state.shareWithCurrentTeam : undefined;
            resourceInputs["showSectionAlertDetails"] = state ? state.showSectionAlertDetails : undefined;
            resourceInputs["showSectionCapturingInformation"] = state ? state.showSectionCapturingInformation : undefined;
            resourceInputs["showSectionDashboardLinks"] = state ? state.showSectionDashboardLinks : undefined;
            resourceInputs["showSectionEventDetails"] = state ? state.showSectionEventDetails : undefined;
            resourceInputs["showSectionNotificationChart"] = state ? state.showSectionNotificationChart : undefined;
            resourceInputs["showSectionRunbookLinks"] = state ? state.showSectionRunbookLinks : undefined;
            resourceInputs["showSectionUserDefinedContent"] = state ? state.showSectionUserDefinedContent : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["url"] = state ? state.url : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as MonitorNotificationChannelSlackArgs | undefined;
            if ((!args || args.channel === undefined) && !opts.urn) {
                throw new Error("Missing required property 'channel'");
            }
            if ((!args || args.url === undefined) && !opts.urn) {
                throw new Error("Missing required property 'url'");
            }
            resourceInputs["channel"] = args ? args.channel : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["notifyWhenOk"] = args ? args.notifyWhenOk : undefined;
            resourceInputs["notifyWhenResolved"] = args ? args.notifyWhenResolved : undefined;
            resourceInputs["sendTestNotification"] = args ? args.sendTestNotification : undefined;
            resourceInputs["shareWithCurrentTeam"] = args ? args.shareWithCurrentTeam : undefined;
            resourceInputs["showSectionAlertDetails"] = args ? args.showSectionAlertDetails : undefined;
            resourceInputs["showSectionCapturingInformation"] = args ? args.showSectionCapturingInformation : undefined;
            resourceInputs["showSectionDashboardLinks"] = args ? args.showSectionDashboardLinks : undefined;
            resourceInputs["showSectionEventDetails"] = args ? args.showSectionEventDetails : undefined;
            resourceInputs["showSectionNotificationChart"] = args ? args.showSectionNotificationChart : undefined;
            resourceInputs["showSectionRunbookLinks"] = args ? args.showSectionRunbookLinks : undefined;
            resourceInputs["showSectionUserDefinedContent"] = args ? args.showSectionUserDefinedContent : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["url"] = args ? args.url : undefined;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MonitorNotificationChannelSlack.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MonitorNotificationChannelSlack resources.
 */
export interface MonitorNotificationChannelSlackState {
    channel?: pulumi.Input<string>;
    enabled?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    notifyWhenOk?: pulumi.Input<boolean>;
    notifyWhenResolved?: pulumi.Input<boolean>;
    sendTestNotification?: pulumi.Input<boolean>;
    shareWithCurrentTeam?: pulumi.Input<boolean>;
    showSectionAlertDetails?: pulumi.Input<boolean>;
    showSectionCapturingInformation?: pulumi.Input<boolean>;
    showSectionDashboardLinks?: pulumi.Input<boolean>;
    showSectionEventDetails?: pulumi.Input<boolean>;
    showSectionNotificationChart?: pulumi.Input<boolean>;
    showSectionRunbookLinks?: pulumi.Input<boolean>;
    showSectionUserDefinedContent?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.MonitorNotificationChannelSlackTimeouts>;
    url?: pulumi.Input<string>;
    version?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a MonitorNotificationChannelSlack resource.
 */
export interface MonitorNotificationChannelSlackArgs {
    channel: pulumi.Input<string>;
    enabled?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    notifyWhenOk?: pulumi.Input<boolean>;
    notifyWhenResolved?: pulumi.Input<boolean>;
    sendTestNotification?: pulumi.Input<boolean>;
    shareWithCurrentTeam?: pulumi.Input<boolean>;
    showSectionAlertDetails?: pulumi.Input<boolean>;
    showSectionCapturingInformation?: pulumi.Input<boolean>;
    showSectionDashboardLinks?: pulumi.Input<boolean>;
    showSectionEventDetails?: pulumi.Input<boolean>;
    showSectionNotificationChart?: pulumi.Input<boolean>;
    showSectionRunbookLinks?: pulumi.Input<boolean>;
    showSectionUserDefinedContent?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.MonitorNotificationChannelSlackTimeouts>;
    url: pulumi.Input<string>;
}
