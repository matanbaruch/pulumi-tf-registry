// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class WebTransactionBrowserMonitor extends pulumi.CustomResource {
    /**
     * Get an existing WebTransactionBrowserMonitor resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WebTransactionBrowserMonitorState, opts?: pulumi.CustomResourceOptions): WebTransactionBrowserMonitor {
        return new WebTransactionBrowserMonitor(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'site24x7:index/webTransactionBrowserMonitor:WebTransactionBrowserMonitor';

    /**
     * Returns true if the given object is an instance of WebTransactionBrowserMonitor.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebTransactionBrowserMonitor {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebTransactionBrowserMonitor.__pulumiType;
    }

    /**
     * Action to be performed on monitor IT Automation templates.
     */
    public readonly actions!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * When asynchronous data collection is enabled, polling will be carried out from all the locations at the same time. If it
     * is disabled, polling will be done consecutively from the selected locations.
     */
    public readonly asyncDcEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * Check for the auth details in the website response.
     */
    public readonly authDetails!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * BaseURL of the transaction
     */
    public readonly baseUrl!: pulumi.Output<string>;
    /**
     * Choose the browser type.
     */
    public readonly browserType!: pulumi.Output<number | undefined>;
    /**
     * Choose the browser version
     */
    public readonly browserVersion!: pulumi.Output<number | undefined>;
    /**
     * Check interval for monitoring.
     */
    public readonly checkFrequency!: pulumi.Output<string | undefined>;
    /**
     * A Map of cookies name and value.
     */
    public readonly cookies!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * A Map of Header name and value.
     */
    public readonly customHeaders!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * List of dependent resource IDs. Suppress alert when dependent monitor(s) is down.
     */
    public readonly dependencyResourceIds!: pulumi.Output<string[] | undefined>;
    /**
     * Name for the monitor
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * Enter true or false to Trust the Server SSL Certificate. Default value is true.
     */
    public readonly ignoreCertErr!: pulumi.Output<boolean | undefined>;
    /**
     * IP Type for monitor.
     */
    public readonly ipType!: pulumi.Output<number | undefined>;
    /**
     * Location profile to be associated with the monitor
     */
    public readonly locationProfileId!: pulumi.Output<string>;
    /**
     * Name of the location profile to be associated with the monitor
     */
    public readonly locationProfileName!: pulumi.Output<string>;
    /**
     * List of monitor groups to which the monitor has to be associated
     */
    public readonly monitorGroups!: pulumi.Output<string[] | undefined>;
    /**
     * Notification profile to be associated with the monitor
     */
    public readonly notificationProfileId!: pulumi.Output<string>;
    /**
     * Name of the notification profile to be associated with the monitor
     */
    public readonly notificationProfileName!: pulumi.Output<string | undefined>;
    /**
     * A new On Call schedule to be associated with monitors when user group id is not chosen
     */
    public readonly onCallScheduleId!: pulumi.Output<string | undefined>;
    /**
     * Timeout for page load.
     */
    public readonly pageLoadTime!: pulumi.Output<number | undefined>;
    /**
     * To perform automation or not
     */
    public readonly performAutomation!: pulumi.Output<boolean | undefined>;
    /**
     * Check for the proxy in the website response.
     */
    public readonly proxyDetails!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Screen resolution for running the script.
     */
    public readonly resolution!: pulumi.Output<string | undefined>;
    /**
     * Recorded transaction script type.(txt , side)
     */
    public readonly scriptType!: pulumi.Output<string | undefined>;
    /**
     * Recorded Trasanction script to create a monitor
     */
    public readonly seleniumScript!: pulumi.Output<string | undefined>;
    /**
     * List of tag IDs to be associated to the monitor
     */
    public readonly tagIds!: pulumi.Output<string[]>;
    /**
     * List of tag names to be associated to the monitor
     */
    public readonly tagNames!: pulumi.Output<string[] | undefined>;
    /**
     * Think time between each steps
     */
    public readonly thinkTime!: pulumi.Output<number | undefined>;
    /**
     * List of Third Party Service IDs to be associated to the monitor
     */
    public readonly thirdPartyServiceIds!: pulumi.Output<string[] | undefined>;
    /**
     * Threshold profile to be associated with the monitor.
     */
    public readonly thresholdProfileId!: pulumi.Output<string>;
    /**
     * User Agent to be used while monitoring the website.
     */
    public readonly userAgent!: pulumi.Output<string | undefined>;
    /**
     * List of user groups to be notified when the monitor is down
     */
    public readonly userGroupIds!: pulumi.Output<string[]>;
    /**
     * Name of the user groups to be associated with the monitor
     */
    public readonly userGroupNames!: pulumi.Output<string[] | undefined>;

    /**
     * Create a WebTransactionBrowserMonitor resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebTransactionBrowserMonitorArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WebTransactionBrowserMonitorArgs | WebTransactionBrowserMonitorState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WebTransactionBrowserMonitorState | undefined;
            resourceInputs["actions"] = state ? state.actions : undefined;
            resourceInputs["asyncDcEnabled"] = state ? state.asyncDcEnabled : undefined;
            resourceInputs["authDetails"] = state ? state.authDetails : undefined;
            resourceInputs["baseUrl"] = state ? state.baseUrl : undefined;
            resourceInputs["browserType"] = state ? state.browserType : undefined;
            resourceInputs["browserVersion"] = state ? state.browserVersion : undefined;
            resourceInputs["checkFrequency"] = state ? state.checkFrequency : undefined;
            resourceInputs["cookies"] = state ? state.cookies : undefined;
            resourceInputs["customHeaders"] = state ? state.customHeaders : undefined;
            resourceInputs["dependencyResourceIds"] = state ? state.dependencyResourceIds : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["ignoreCertErr"] = state ? state.ignoreCertErr : undefined;
            resourceInputs["ipType"] = state ? state.ipType : undefined;
            resourceInputs["locationProfileId"] = state ? state.locationProfileId : undefined;
            resourceInputs["locationProfileName"] = state ? state.locationProfileName : undefined;
            resourceInputs["monitorGroups"] = state ? state.monitorGroups : undefined;
            resourceInputs["notificationProfileId"] = state ? state.notificationProfileId : undefined;
            resourceInputs["notificationProfileName"] = state ? state.notificationProfileName : undefined;
            resourceInputs["onCallScheduleId"] = state ? state.onCallScheduleId : undefined;
            resourceInputs["pageLoadTime"] = state ? state.pageLoadTime : undefined;
            resourceInputs["performAutomation"] = state ? state.performAutomation : undefined;
            resourceInputs["proxyDetails"] = state ? state.proxyDetails : undefined;
            resourceInputs["resolution"] = state ? state.resolution : undefined;
            resourceInputs["scriptType"] = state ? state.scriptType : undefined;
            resourceInputs["seleniumScript"] = state ? state.seleniumScript : undefined;
            resourceInputs["tagIds"] = state ? state.tagIds : undefined;
            resourceInputs["tagNames"] = state ? state.tagNames : undefined;
            resourceInputs["thinkTime"] = state ? state.thinkTime : undefined;
            resourceInputs["thirdPartyServiceIds"] = state ? state.thirdPartyServiceIds : undefined;
            resourceInputs["thresholdProfileId"] = state ? state.thresholdProfileId : undefined;
            resourceInputs["userAgent"] = state ? state.userAgent : undefined;
            resourceInputs["userGroupIds"] = state ? state.userGroupIds : undefined;
            resourceInputs["userGroupNames"] = state ? state.userGroupNames : undefined;
        } else {
            const args = argsOrState as WebTransactionBrowserMonitorArgs | undefined;
            if ((!args || args.baseUrl === undefined) && !opts.urn) {
                throw new Error("Missing required property 'baseUrl'");
            }
            resourceInputs["actions"] = args ? args.actions : undefined;
            resourceInputs["asyncDcEnabled"] = args ? args.asyncDcEnabled : undefined;
            resourceInputs["authDetails"] = args ? args.authDetails : undefined;
            resourceInputs["baseUrl"] = args ? args.baseUrl : undefined;
            resourceInputs["browserType"] = args ? args.browserType : undefined;
            resourceInputs["browserVersion"] = args ? args.browserVersion : undefined;
            resourceInputs["checkFrequency"] = args ? args.checkFrequency : undefined;
            resourceInputs["cookies"] = args ? args.cookies : undefined;
            resourceInputs["customHeaders"] = args ? args.customHeaders : undefined;
            resourceInputs["dependencyResourceIds"] = args ? args.dependencyResourceIds : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["ignoreCertErr"] = args ? args.ignoreCertErr : undefined;
            resourceInputs["ipType"] = args ? args.ipType : undefined;
            resourceInputs["locationProfileId"] = args ? args.locationProfileId : undefined;
            resourceInputs["locationProfileName"] = args ? args.locationProfileName : undefined;
            resourceInputs["monitorGroups"] = args ? args.monitorGroups : undefined;
            resourceInputs["notificationProfileId"] = args ? args.notificationProfileId : undefined;
            resourceInputs["notificationProfileName"] = args ? args.notificationProfileName : undefined;
            resourceInputs["onCallScheduleId"] = args ? args.onCallScheduleId : undefined;
            resourceInputs["pageLoadTime"] = args ? args.pageLoadTime : undefined;
            resourceInputs["performAutomation"] = args ? args.performAutomation : undefined;
            resourceInputs["proxyDetails"] = args ? args.proxyDetails : undefined;
            resourceInputs["resolution"] = args ? args.resolution : undefined;
            resourceInputs["scriptType"] = args ? args.scriptType : undefined;
            resourceInputs["seleniumScript"] = args ? args.seleniumScript : undefined;
            resourceInputs["tagIds"] = args ? args.tagIds : undefined;
            resourceInputs["tagNames"] = args ? args.tagNames : undefined;
            resourceInputs["thinkTime"] = args ? args.thinkTime : undefined;
            resourceInputs["thirdPartyServiceIds"] = args ? args.thirdPartyServiceIds : undefined;
            resourceInputs["thresholdProfileId"] = args ? args.thresholdProfileId : undefined;
            resourceInputs["userAgent"] = args ? args.userAgent : undefined;
            resourceInputs["userGroupIds"] = args ? args.userGroupIds : undefined;
            resourceInputs["userGroupNames"] = args ? args.userGroupNames : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(WebTransactionBrowserMonitor.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering WebTransactionBrowserMonitor resources.
 */
export interface WebTransactionBrowserMonitorState {
    /**
     * Action to be performed on monitor IT Automation templates.
     */
    actions?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * When asynchronous data collection is enabled, polling will be carried out from all the locations at the same time. If it
     * is disabled, polling will be done consecutively from the selected locations.
     */
    asyncDcEnabled?: pulumi.Input<boolean>;
    /**
     * Check for the auth details in the website response.
     */
    authDetails?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * BaseURL of the transaction
     */
    baseUrl?: pulumi.Input<string>;
    /**
     * Choose the browser type.
     */
    browserType?: pulumi.Input<number>;
    /**
     * Choose the browser version
     */
    browserVersion?: pulumi.Input<number>;
    /**
     * Check interval for monitoring.
     */
    checkFrequency?: pulumi.Input<string>;
    /**
     * A Map of cookies name and value.
     */
    cookies?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A Map of Header name and value.
     */
    customHeaders?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * List of dependent resource IDs. Suppress alert when dependent monitor(s) is down.
     */
    dependencyResourceIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name for the monitor
     */
    displayName?: pulumi.Input<string>;
    /**
     * Enter true or false to Trust the Server SSL Certificate. Default value is true.
     */
    ignoreCertErr?: pulumi.Input<boolean>;
    /**
     * IP Type for monitor.
     */
    ipType?: pulumi.Input<number>;
    /**
     * Location profile to be associated with the monitor
     */
    locationProfileId?: pulumi.Input<string>;
    /**
     * Name of the location profile to be associated with the monitor
     */
    locationProfileName?: pulumi.Input<string>;
    /**
     * List of monitor groups to which the monitor has to be associated
     */
    monitorGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Notification profile to be associated with the monitor
     */
    notificationProfileId?: pulumi.Input<string>;
    /**
     * Name of the notification profile to be associated with the monitor
     */
    notificationProfileName?: pulumi.Input<string>;
    /**
     * A new On Call schedule to be associated with monitors when user group id is not chosen
     */
    onCallScheduleId?: pulumi.Input<string>;
    /**
     * Timeout for page load.
     */
    pageLoadTime?: pulumi.Input<number>;
    /**
     * To perform automation or not
     */
    performAutomation?: pulumi.Input<boolean>;
    /**
     * Check for the proxy in the website response.
     */
    proxyDetails?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Screen resolution for running the script.
     */
    resolution?: pulumi.Input<string>;
    /**
     * Recorded transaction script type.(txt , side)
     */
    scriptType?: pulumi.Input<string>;
    /**
     * Recorded Trasanction script to create a monitor
     */
    seleniumScript?: pulumi.Input<string>;
    /**
     * List of tag IDs to be associated to the monitor
     */
    tagIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of tag names to be associated to the monitor
     */
    tagNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Think time between each steps
     */
    thinkTime?: pulumi.Input<number>;
    /**
     * List of Third Party Service IDs to be associated to the monitor
     */
    thirdPartyServiceIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Threshold profile to be associated with the monitor.
     */
    thresholdProfileId?: pulumi.Input<string>;
    /**
     * User Agent to be used while monitoring the website.
     */
    userAgent?: pulumi.Input<string>;
    /**
     * List of user groups to be notified when the monitor is down
     */
    userGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of the user groups to be associated with the monitor
     */
    userGroupNames?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a WebTransactionBrowserMonitor resource.
 */
export interface WebTransactionBrowserMonitorArgs {
    /**
     * Action to be performed on monitor IT Automation templates.
     */
    actions?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * When asynchronous data collection is enabled, polling will be carried out from all the locations at the same time. If it
     * is disabled, polling will be done consecutively from the selected locations.
     */
    asyncDcEnabled?: pulumi.Input<boolean>;
    /**
     * Check for the auth details in the website response.
     */
    authDetails?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * BaseURL of the transaction
     */
    baseUrl: pulumi.Input<string>;
    /**
     * Choose the browser type.
     */
    browserType?: pulumi.Input<number>;
    /**
     * Choose the browser version
     */
    browserVersion?: pulumi.Input<number>;
    /**
     * Check interval for monitoring.
     */
    checkFrequency?: pulumi.Input<string>;
    /**
     * A Map of cookies name and value.
     */
    cookies?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A Map of Header name and value.
     */
    customHeaders?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * List of dependent resource IDs. Suppress alert when dependent monitor(s) is down.
     */
    dependencyResourceIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name for the monitor
     */
    displayName?: pulumi.Input<string>;
    /**
     * Enter true or false to Trust the Server SSL Certificate. Default value is true.
     */
    ignoreCertErr?: pulumi.Input<boolean>;
    /**
     * IP Type for monitor.
     */
    ipType?: pulumi.Input<number>;
    /**
     * Location profile to be associated with the monitor
     */
    locationProfileId?: pulumi.Input<string>;
    /**
     * Name of the location profile to be associated with the monitor
     */
    locationProfileName?: pulumi.Input<string>;
    /**
     * List of monitor groups to which the monitor has to be associated
     */
    monitorGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Notification profile to be associated with the monitor
     */
    notificationProfileId?: pulumi.Input<string>;
    /**
     * Name of the notification profile to be associated with the monitor
     */
    notificationProfileName?: pulumi.Input<string>;
    /**
     * A new On Call schedule to be associated with monitors when user group id is not chosen
     */
    onCallScheduleId?: pulumi.Input<string>;
    /**
     * Timeout for page load.
     */
    pageLoadTime?: pulumi.Input<number>;
    /**
     * To perform automation or not
     */
    performAutomation?: pulumi.Input<boolean>;
    /**
     * Check for the proxy in the website response.
     */
    proxyDetails?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Screen resolution for running the script.
     */
    resolution?: pulumi.Input<string>;
    /**
     * Recorded transaction script type.(txt , side)
     */
    scriptType?: pulumi.Input<string>;
    /**
     * Recorded Trasanction script to create a monitor
     */
    seleniumScript?: pulumi.Input<string>;
    /**
     * List of tag IDs to be associated to the monitor
     */
    tagIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of tag names to be associated to the monitor
     */
    tagNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Think time between each steps
     */
    thinkTime?: pulumi.Input<number>;
    /**
     * List of Third Party Service IDs to be associated to the monitor
     */
    thirdPartyServiceIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Threshold profile to be associated with the monitor.
     */
    thresholdProfileId?: pulumi.Input<string>;
    /**
     * User Agent to be used while monitoring the website.
     */
    userAgent?: pulumi.Input<string>;
    /**
     * List of user groups to be notified when the monitor is down
     */
    userGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of the user groups to be associated with the monitor
     */
    userGroupNames?: pulumi.Input<pulumi.Input<string>[]>;
}
