// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class MonitoringUptimeCheckConfig extends pulumi.CustomResource {
    /**
     * Get an existing MonitoringUptimeCheckConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MonitoringUptimeCheckConfigState, opts?: pulumi.CustomResourceOptions): MonitoringUptimeCheckConfig {
        return new MonitoringUptimeCheckConfig(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/monitoringUptimeCheckConfig:MonitoringUptimeCheckConfig';

    /**
     * Returns true if the given object is an instance of MonitoringUptimeCheckConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MonitoringUptimeCheckConfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MonitoringUptimeCheckConfig.__pulumiType;
    }

    /**
     * The checker type to use for the check. If the monitored resource type is 'servicedirectory_service', 'checker_type' must
     * be set to 'VPC_CHECKERS'. Possible values: ["STATIC_IP_CHECKERS", "VPC_CHECKERS"]
     */
    public readonly checkerType!: pulumi.Output<string>;
    /**
     * The expected content on the page the check is run against. Currently, only the first entry in the list is supported, and
     * other entries will be ignored. The server will look for an exact match of the string in the page response's content.
     * This field is optional and should only be specified if a content match is required.
     */
    public readonly contentMatchers!: pulumi.Output<outputs.MonitoringUptimeCheckConfigContentMatcher[] | undefined>;
    /**
     * A human-friendly name for the uptime check configuration. The display name should be unique within a Stackdriver
     * Workspace in order to make it easier to identify; however, uniqueness is not enforced.
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * Contains information needed to make an HTTP or HTTPS check.
     */
    public readonly httpCheck!: pulumi.Output<outputs.MonitoringUptimeCheckConfigHttpCheck | undefined>;
    /**
     * The [monitored resource] (https://cloud.google.com/monitoring/api/resources) associated with the configuration. The
     * following monitored resource types are supported for uptime checks: * 'aws_ec2_instance' * 'aws_elb_load_balancer' *
     * 'gae_app' * 'gce_instance' * 'k8s_service' * 'servicedirectory_service' * 'uptime_url'
     */
    public readonly monitoredResource!: pulumi.Output<outputs.MonitoringUptimeCheckConfigMonitoredResource | undefined>;
    /**
     * A unique resource name for this UptimeCheckConfig. The format is
     * 'projects/[PROJECT_ID]/uptimeCheckConfigs/[UPTIME_CHECK_ID]'.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * How often, in seconds, the uptime check is performed. Currently, the only supported values are 60s (1 minute), 300s (5
     * minutes), 600s (10 minutes), and 900s (15 minutes). Optional, defaults to 300s.
     */
    public readonly period!: pulumi.Output<string | undefined>;
    public readonly project!: pulumi.Output<string>;
    /**
     * The group resource associated with the configuration.
     */
    public readonly resourceGroup!: pulumi.Output<outputs.MonitoringUptimeCheckConfigResourceGroup | undefined>;
    /**
     * The list of regions from which the check will be run. Some regions contain one location, and others contain more than
     * one. If this field is specified, enough regions to include a minimum of 3 locations must be provided, or an error
     * message is returned. Not specifying this field will result in uptime checks running from all regions.
     */
    public readonly selectedRegions!: pulumi.Output<string[] | undefined>;
    /**
     * A Synthetic Monitor deployed to a Cloud Functions V2 instance.
     */
    public readonly syntheticMonitor!: pulumi.Output<outputs.MonitoringUptimeCheckConfigSyntheticMonitor | undefined>;
    /**
     * Contains information needed to make a TCP check.
     */
    public readonly tcpCheck!: pulumi.Output<outputs.MonitoringUptimeCheckConfigTcpCheck | undefined>;
    /**
     * The maximum amount of time to wait for the request to complete (must be between 1 and 60 seconds). See the accepted
     * formats
     */
    public readonly timeout!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.MonitoringUptimeCheckConfigTimeouts | undefined>;
    /**
     * The id of the uptime check
     */
    public /*out*/ readonly uptimeCheckId!: pulumi.Output<string>;
    /**
     * User-supplied key/value data to be used for organizing and identifying the 'UptimeCheckConfig' objects. The field can
     * contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller.
     * Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.
     */
    public readonly userLabels!: pulumi.Output<{[key: string]: string} | undefined>;

    /**
     * Create a MonitoringUptimeCheckConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MonitoringUptimeCheckConfigArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MonitoringUptimeCheckConfigArgs | MonitoringUptimeCheckConfigState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MonitoringUptimeCheckConfigState | undefined;
            resourceInputs["checkerType"] = state ? state.checkerType : undefined;
            resourceInputs["contentMatchers"] = state ? state.contentMatchers : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["httpCheck"] = state ? state.httpCheck : undefined;
            resourceInputs["monitoredResource"] = state ? state.monitoredResource : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["period"] = state ? state.period : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["resourceGroup"] = state ? state.resourceGroup : undefined;
            resourceInputs["selectedRegions"] = state ? state.selectedRegions : undefined;
            resourceInputs["syntheticMonitor"] = state ? state.syntheticMonitor : undefined;
            resourceInputs["tcpCheck"] = state ? state.tcpCheck : undefined;
            resourceInputs["timeout"] = state ? state.timeout : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["uptimeCheckId"] = state ? state.uptimeCheckId : undefined;
            resourceInputs["userLabels"] = state ? state.userLabels : undefined;
        } else {
            const args = argsOrState as MonitoringUptimeCheckConfigArgs | undefined;
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.timeout === undefined) && !opts.urn) {
                throw new Error("Missing required property 'timeout'");
            }
            resourceInputs["checkerType"] = args ? args.checkerType : undefined;
            resourceInputs["contentMatchers"] = args ? args.contentMatchers : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["httpCheck"] = args ? args.httpCheck : undefined;
            resourceInputs["monitoredResource"] = args ? args.monitoredResource : undefined;
            resourceInputs["period"] = args ? args.period : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["resourceGroup"] = args ? args.resourceGroup : undefined;
            resourceInputs["selectedRegions"] = args ? args.selectedRegions : undefined;
            resourceInputs["syntheticMonitor"] = args ? args.syntheticMonitor : undefined;
            resourceInputs["tcpCheck"] = args ? args.tcpCheck : undefined;
            resourceInputs["timeout"] = args ? args.timeout : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["userLabels"] = args ? args.userLabels : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["uptimeCheckId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MonitoringUptimeCheckConfig.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MonitoringUptimeCheckConfig resources.
 */
export interface MonitoringUptimeCheckConfigState {
    /**
     * The checker type to use for the check. If the monitored resource type is 'servicedirectory_service', 'checker_type' must
     * be set to 'VPC_CHECKERS'. Possible values: ["STATIC_IP_CHECKERS", "VPC_CHECKERS"]
     */
    checkerType?: pulumi.Input<string>;
    /**
     * The expected content on the page the check is run against. Currently, only the first entry in the list is supported, and
     * other entries will be ignored. The server will look for an exact match of the string in the page response's content.
     * This field is optional and should only be specified if a content match is required.
     */
    contentMatchers?: pulumi.Input<pulumi.Input<inputs.MonitoringUptimeCheckConfigContentMatcher>[]>;
    /**
     * A human-friendly name for the uptime check configuration. The display name should be unique within a Stackdriver
     * Workspace in order to make it easier to identify; however, uniqueness is not enforced.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Contains information needed to make an HTTP or HTTPS check.
     */
    httpCheck?: pulumi.Input<inputs.MonitoringUptimeCheckConfigHttpCheck>;
    /**
     * The [monitored resource] (https://cloud.google.com/monitoring/api/resources) associated with the configuration. The
     * following monitored resource types are supported for uptime checks: * 'aws_ec2_instance' * 'aws_elb_load_balancer' *
     * 'gae_app' * 'gce_instance' * 'k8s_service' * 'servicedirectory_service' * 'uptime_url'
     */
    monitoredResource?: pulumi.Input<inputs.MonitoringUptimeCheckConfigMonitoredResource>;
    /**
     * A unique resource name for this UptimeCheckConfig. The format is
     * 'projects/[PROJECT_ID]/uptimeCheckConfigs/[UPTIME_CHECK_ID]'.
     */
    name?: pulumi.Input<string>;
    /**
     * How often, in seconds, the uptime check is performed. Currently, the only supported values are 60s (1 minute), 300s (5
     * minutes), 600s (10 minutes), and 900s (15 minutes). Optional, defaults to 300s.
     */
    period?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * The group resource associated with the configuration.
     */
    resourceGroup?: pulumi.Input<inputs.MonitoringUptimeCheckConfigResourceGroup>;
    /**
     * The list of regions from which the check will be run. Some regions contain one location, and others contain more than
     * one. If this field is specified, enough regions to include a minimum of 3 locations must be provided, or an error
     * message is returned. Not specifying this field will result in uptime checks running from all regions.
     */
    selectedRegions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A Synthetic Monitor deployed to a Cloud Functions V2 instance.
     */
    syntheticMonitor?: pulumi.Input<inputs.MonitoringUptimeCheckConfigSyntheticMonitor>;
    /**
     * Contains information needed to make a TCP check.
     */
    tcpCheck?: pulumi.Input<inputs.MonitoringUptimeCheckConfigTcpCheck>;
    /**
     * The maximum amount of time to wait for the request to complete (must be between 1 and 60 seconds). See the accepted
     * formats
     */
    timeout?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.MonitoringUptimeCheckConfigTimeouts>;
    /**
     * The id of the uptime check
     */
    uptimeCheckId?: pulumi.Input<string>;
    /**
     * User-supplied key/value data to be used for organizing and identifying the 'UptimeCheckConfig' objects. The field can
     * contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller.
     * Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.
     */
    userLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The set of arguments for constructing a MonitoringUptimeCheckConfig resource.
 */
export interface MonitoringUptimeCheckConfigArgs {
    /**
     * The checker type to use for the check. If the monitored resource type is 'servicedirectory_service', 'checker_type' must
     * be set to 'VPC_CHECKERS'. Possible values: ["STATIC_IP_CHECKERS", "VPC_CHECKERS"]
     */
    checkerType?: pulumi.Input<string>;
    /**
     * The expected content on the page the check is run against. Currently, only the first entry in the list is supported, and
     * other entries will be ignored. The server will look for an exact match of the string in the page response's content.
     * This field is optional and should only be specified if a content match is required.
     */
    contentMatchers?: pulumi.Input<pulumi.Input<inputs.MonitoringUptimeCheckConfigContentMatcher>[]>;
    /**
     * A human-friendly name for the uptime check configuration. The display name should be unique within a Stackdriver
     * Workspace in order to make it easier to identify; however, uniqueness is not enforced.
     */
    displayName: pulumi.Input<string>;
    /**
     * Contains information needed to make an HTTP or HTTPS check.
     */
    httpCheck?: pulumi.Input<inputs.MonitoringUptimeCheckConfigHttpCheck>;
    /**
     * The [monitored resource] (https://cloud.google.com/monitoring/api/resources) associated with the configuration. The
     * following monitored resource types are supported for uptime checks: * 'aws_ec2_instance' * 'aws_elb_load_balancer' *
     * 'gae_app' * 'gce_instance' * 'k8s_service' * 'servicedirectory_service' * 'uptime_url'
     */
    monitoredResource?: pulumi.Input<inputs.MonitoringUptimeCheckConfigMonitoredResource>;
    /**
     * How often, in seconds, the uptime check is performed. Currently, the only supported values are 60s (1 minute), 300s (5
     * minutes), 600s (10 minutes), and 900s (15 minutes). Optional, defaults to 300s.
     */
    period?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * The group resource associated with the configuration.
     */
    resourceGroup?: pulumi.Input<inputs.MonitoringUptimeCheckConfigResourceGroup>;
    /**
     * The list of regions from which the check will be run. Some regions contain one location, and others contain more than
     * one. If this field is specified, enough regions to include a minimum of 3 locations must be provided, or an error
     * message is returned. Not specifying this field will result in uptime checks running from all regions.
     */
    selectedRegions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A Synthetic Monitor deployed to a Cloud Functions V2 instance.
     */
    syntheticMonitor?: pulumi.Input<inputs.MonitoringUptimeCheckConfigSyntheticMonitor>;
    /**
     * Contains information needed to make a TCP check.
     */
    tcpCheck?: pulumi.Input<inputs.MonitoringUptimeCheckConfigTcpCheck>;
    /**
     * The maximum amount of time to wait for the request to complete (must be between 1 and 60 seconds). See the accepted
     * formats
     */
    timeout: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.MonitoringUptimeCheckConfigTimeouts>;
    /**
     * User-supplied key/value data to be used for organizing and identifying the 'UptimeCheckConfig' objects. The field can
     * contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller.
     * Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.
     */
    userLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
