// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class RestApiTransactionMonitor extends pulumi.CustomResource {
    /**
     * Get an existing RestApiTransactionMonitor resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RestApiTransactionMonitorState, opts?: pulumi.CustomResourceOptions): RestApiTransactionMonitor {
        return new RestApiTransactionMonitor(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'site24x7:index/restApiTransactionMonitor:RestApiTransactionMonitor';

    /**
     * Returns true if the given object is an instance of RestApiTransactionMonitor.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RestApiTransactionMonitor {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RestApiTransactionMonitor.__pulumiType;
    }

    /**
     * Action to be performed on monitor IT Automation templates.
     */
    public readonly actions!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Interval at which your RESRAPI has to be monitored. Default value is 5 minute.
     */
    public readonly checkFrequency!: pulumi.Output<string | undefined>;
    /**
     * List of dependent resource IDs. Suppress alert when dependent monitor(s) is down.
     */
    public readonly dependencyResourceIds!: pulumi.Output<string[] | undefined>;
    /**
     * Display Name for the monitor.
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * Location profile to be associated with the monitor.
     */
    public readonly locationProfileId!: pulumi.Output<string>;
    /**
     * Name of the location profile to be associated with the monitor.
     */
    public readonly locationProfileName!: pulumi.Output<string>;
    /**
     * List of monitor groups to which the monitor has to be associated.
     */
    public readonly monitorGroups!: pulumi.Output<string[] | undefined>;
    /**
     * Notification profile to be associated with the monitor.
     */
    public readonly notificationProfileId!: pulumi.Output<string>;
    /**
     * Name of the notification profile to be associated with the monitor.
     */
    public readonly notificationProfileName!: pulumi.Output<string | undefined>;
    public readonly steps!: pulumi.Output<outputs.RestApiTransactionMonitorStep[] | undefined>;
    /**
     * List of tag IDs to be associated to the monitor.
     */
    public readonly tagIds!: pulumi.Output<string[]>;
    /**
     * List of tag names to be associated to the monitor.
     */
    public readonly tagNames!: pulumi.Output<string[] | undefined>;
    /**
     * List of Third Party Service IDs to be associated to the monitor.
     */
    public readonly thirdPartyServiceIds!: pulumi.Output<string[] | undefined>;
    /**
     * Threshold profile to be associated with the monitor.
     */
    public readonly thresholdProfileId!: pulumi.Output<string>;
    /**
     * List of user groups to be notified when the monitor is down.
     */
    public readonly userGroupIds!: pulumi.Output<string[]>;
    /**
     * Name of the user groups to be associated with the monitor.
     */
    public readonly userGroupNames!: pulumi.Output<string[] | undefined>;

    /**
     * Create a RestApiTransactionMonitor resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RestApiTransactionMonitorArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RestApiTransactionMonitorArgs | RestApiTransactionMonitorState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RestApiTransactionMonitorState | undefined;
            resourceInputs["actions"] = state ? state.actions : undefined;
            resourceInputs["checkFrequency"] = state ? state.checkFrequency : undefined;
            resourceInputs["dependencyResourceIds"] = state ? state.dependencyResourceIds : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["locationProfileId"] = state ? state.locationProfileId : undefined;
            resourceInputs["locationProfileName"] = state ? state.locationProfileName : undefined;
            resourceInputs["monitorGroups"] = state ? state.monitorGroups : undefined;
            resourceInputs["notificationProfileId"] = state ? state.notificationProfileId : undefined;
            resourceInputs["notificationProfileName"] = state ? state.notificationProfileName : undefined;
            resourceInputs["steps"] = state ? state.steps : undefined;
            resourceInputs["tagIds"] = state ? state.tagIds : undefined;
            resourceInputs["tagNames"] = state ? state.tagNames : undefined;
            resourceInputs["thirdPartyServiceIds"] = state ? state.thirdPartyServiceIds : undefined;
            resourceInputs["thresholdProfileId"] = state ? state.thresholdProfileId : undefined;
            resourceInputs["userGroupIds"] = state ? state.userGroupIds : undefined;
            resourceInputs["userGroupNames"] = state ? state.userGroupNames : undefined;
        } else {
            const args = argsOrState as RestApiTransactionMonitorArgs | undefined;
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            resourceInputs["actions"] = args ? args.actions : undefined;
            resourceInputs["checkFrequency"] = args ? args.checkFrequency : undefined;
            resourceInputs["dependencyResourceIds"] = args ? args.dependencyResourceIds : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["locationProfileId"] = args ? args.locationProfileId : undefined;
            resourceInputs["locationProfileName"] = args ? args.locationProfileName : undefined;
            resourceInputs["monitorGroups"] = args ? args.monitorGroups : undefined;
            resourceInputs["notificationProfileId"] = args ? args.notificationProfileId : undefined;
            resourceInputs["notificationProfileName"] = args ? args.notificationProfileName : undefined;
            resourceInputs["steps"] = args ? args.steps : undefined;
            resourceInputs["tagIds"] = args ? args.tagIds : undefined;
            resourceInputs["tagNames"] = args ? args.tagNames : undefined;
            resourceInputs["thirdPartyServiceIds"] = args ? args.thirdPartyServiceIds : undefined;
            resourceInputs["thresholdProfileId"] = args ? args.thresholdProfileId : undefined;
            resourceInputs["userGroupIds"] = args ? args.userGroupIds : undefined;
            resourceInputs["userGroupNames"] = args ? args.userGroupNames : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RestApiTransactionMonitor.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RestApiTransactionMonitor resources.
 */
export interface RestApiTransactionMonitorState {
    /**
     * Action to be performed on monitor IT Automation templates.
     */
    actions?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Interval at which your RESRAPI has to be monitored. Default value is 5 minute.
     */
    checkFrequency?: pulumi.Input<string>;
    /**
     * List of dependent resource IDs. Suppress alert when dependent monitor(s) is down.
     */
    dependencyResourceIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Display Name for the monitor.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Location profile to be associated with the monitor.
     */
    locationProfileId?: pulumi.Input<string>;
    /**
     * Name of the location profile to be associated with the monitor.
     */
    locationProfileName?: pulumi.Input<string>;
    /**
     * List of monitor groups to which the monitor has to be associated.
     */
    monitorGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Notification profile to be associated with the monitor.
     */
    notificationProfileId?: pulumi.Input<string>;
    /**
     * Name of the notification profile to be associated with the monitor.
     */
    notificationProfileName?: pulumi.Input<string>;
    steps?: pulumi.Input<pulumi.Input<inputs.RestApiTransactionMonitorStep>[]>;
    /**
     * List of tag IDs to be associated to the monitor.
     */
    tagIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of tag names to be associated to the monitor.
     */
    tagNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of Third Party Service IDs to be associated to the monitor.
     */
    thirdPartyServiceIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Threshold profile to be associated with the monitor.
     */
    thresholdProfileId?: pulumi.Input<string>;
    /**
     * List of user groups to be notified when the monitor is down.
     */
    userGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of the user groups to be associated with the monitor.
     */
    userGroupNames?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a RestApiTransactionMonitor resource.
 */
export interface RestApiTransactionMonitorArgs {
    /**
     * Action to be performed on monitor IT Automation templates.
     */
    actions?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Interval at which your RESRAPI has to be monitored. Default value is 5 minute.
     */
    checkFrequency?: pulumi.Input<string>;
    /**
     * List of dependent resource IDs. Suppress alert when dependent monitor(s) is down.
     */
    dependencyResourceIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Display Name for the monitor.
     */
    displayName: pulumi.Input<string>;
    /**
     * Location profile to be associated with the monitor.
     */
    locationProfileId?: pulumi.Input<string>;
    /**
     * Name of the location profile to be associated with the monitor.
     */
    locationProfileName?: pulumi.Input<string>;
    /**
     * List of monitor groups to which the monitor has to be associated.
     */
    monitorGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Notification profile to be associated with the monitor.
     */
    notificationProfileId?: pulumi.Input<string>;
    /**
     * Name of the notification profile to be associated with the monitor.
     */
    notificationProfileName?: pulumi.Input<string>;
    steps?: pulumi.Input<pulumi.Input<inputs.RestApiTransactionMonitorStep>[]>;
    /**
     * List of tag IDs to be associated to the monitor.
     */
    tagIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of tag names to be associated to the monitor.
     */
    tagNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of Third Party Service IDs to be associated to the monitor.
     */
    thirdPartyServiceIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Threshold profile to be associated with the monitor.
     */
    thresholdProfileId?: pulumi.Input<string>;
    /**
     * List of user groups to be notified when the monitor is down.
     */
    userGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of the user groups to be associated with the monitor.
     */
    userGroupNames?: pulumi.Input<pulumi.Input<string>[]>;
}
