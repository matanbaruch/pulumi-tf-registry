// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Discovery extends pulumi.CustomResource {
    /**
     * Get an existing Discovery resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DiscoveryState, opts?: pulumi.CustomResourceOptions): Discovery {
        return new Discovery(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ome:index/discovery:Discovery';

    /**
     * Returns true if the given object is an instance of Discovery.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Discovery {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Discovery.__pulumiType;
    }

    /**
     * Provide a cron expression based on Quartz cron format
     */
    public readonly cron!: pulumi.Output<string>;
    /**
     * - Provide the list of discovery targets. - Each discovery target is a set of "network_address_detail", "device_types",
     * and one or more protocol credentials.
     */
    public readonly discoveryConfigTargets!: pulumi.Output<outputs.DiscoveryDiscoveryConfigTarget[]>;
    /**
     * - Enter the email address to which notifications are to be sent about the discovery job status. - Configure the SMTP
     * settings to allow sending notifications to an email address.
     */
    public readonly emailRecipient!: pulumi.Output<string | undefined>;
    /**
     * - Enable the use of SNMP community strings to receive SNMP traps using Application Settings in OpenManage Enterprise. -
     * This option is available only for the discovered iDRAC servers and MX7000 chassis.
     */
    public readonly enableCommunityStrings!: pulumi.Output<boolean>;
    /**
     * Provides the option to ignore partial failures. Partial failures occur when there is a combination of both discovered
     * and undiscovered IPs with Schedule is set to `RunNow`. If `partial_failure` is set `false` then partial_failure is not
     * ignored, and module will error out.If `partial_failure` is set `true` then partial_failure is ignored, and module will
     * not error out.
     */
    public readonly ignorePartialFailure!: pulumi.Output<boolean | undefined>;
    /**
     * Discovery Job ID.
     */
    public /*out*/ readonly jobId!: pulumi.Output<number>;
    /**
     * Discovery Job Tracking Info Captured When Schedule is set to `RunNow`
     */
    public /*out*/ readonly jobTracking!: pulumi.Output<outputs.DiscoveryJobTracking>;
    /**
     * Name of the discovery configuration job
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Provides the option to schedule the discovery job. If `RunLater` is selected, then attribute `cron` must be specified.
     * If `RunNow` is selected, then attribute `timeout` must be specified.
     */
    public readonly schedule!: pulumi.Output<string>;
    /**
     * Provide a timeout in minute to track the job
     */
    public readonly timeout!: pulumi.Output<number | undefined>;
    /**
     * - Enable OpenManage Enterprise to receive the incoming SNMP traps from the discovered devices. - This is effective only
     * for servers discovered by using their iDRAC interface.
     */
    public readonly trapDestination!: pulumi.Output<boolean>;

    /**
     * Create a Discovery resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DiscoveryArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DiscoveryArgs | DiscoveryState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DiscoveryState | undefined;
            resourceInputs["cron"] = state ? state.cron : undefined;
            resourceInputs["discoveryConfigTargets"] = state ? state.discoveryConfigTargets : undefined;
            resourceInputs["emailRecipient"] = state ? state.emailRecipient : undefined;
            resourceInputs["enableCommunityStrings"] = state ? state.enableCommunityStrings : undefined;
            resourceInputs["ignorePartialFailure"] = state ? state.ignorePartialFailure : undefined;
            resourceInputs["jobId"] = state ? state.jobId : undefined;
            resourceInputs["jobTracking"] = state ? state.jobTracking : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["schedule"] = state ? state.schedule : undefined;
            resourceInputs["timeout"] = state ? state.timeout : undefined;
            resourceInputs["trapDestination"] = state ? state.trapDestination : undefined;
        } else {
            const args = argsOrState as DiscoveryArgs | undefined;
            if ((!args || args.discoveryConfigTargets === undefined) && !opts.urn) {
                throw new Error("Missing required property 'discoveryConfigTargets'");
            }
            if ((!args || args.schedule === undefined) && !opts.urn) {
                throw new Error("Missing required property 'schedule'");
            }
            resourceInputs["cron"] = args ? args.cron : undefined;
            resourceInputs["discoveryConfigTargets"] = args ? args.discoveryConfigTargets : undefined;
            resourceInputs["emailRecipient"] = args ? args.emailRecipient : undefined;
            resourceInputs["enableCommunityStrings"] = args ? args.enableCommunityStrings : undefined;
            resourceInputs["ignorePartialFailure"] = args ? args.ignorePartialFailure : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["schedule"] = args ? args.schedule : undefined;
            resourceInputs["timeout"] = args ? args.timeout : undefined;
            resourceInputs["trapDestination"] = args ? args.trapDestination : undefined;
            resourceInputs["jobId"] = undefined /*out*/;
            resourceInputs["jobTracking"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Discovery.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Discovery resources.
 */
export interface DiscoveryState {
    /**
     * Provide a cron expression based on Quartz cron format
     */
    cron?: pulumi.Input<string>;
    /**
     * - Provide the list of discovery targets. - Each discovery target is a set of "network_address_detail", "device_types",
     * and one or more protocol credentials.
     */
    discoveryConfigTargets?: pulumi.Input<pulumi.Input<inputs.DiscoveryDiscoveryConfigTarget>[]>;
    /**
     * - Enter the email address to which notifications are to be sent about the discovery job status. - Configure the SMTP
     * settings to allow sending notifications to an email address.
     */
    emailRecipient?: pulumi.Input<string>;
    /**
     * - Enable the use of SNMP community strings to receive SNMP traps using Application Settings in OpenManage Enterprise. -
     * This option is available only for the discovered iDRAC servers and MX7000 chassis.
     */
    enableCommunityStrings?: pulumi.Input<boolean>;
    /**
     * Provides the option to ignore partial failures. Partial failures occur when there is a combination of both discovered
     * and undiscovered IPs with Schedule is set to `RunNow`. If `partial_failure` is set `false` then partial_failure is not
     * ignored, and module will error out.If `partial_failure` is set `true` then partial_failure is ignored, and module will
     * not error out.
     */
    ignorePartialFailure?: pulumi.Input<boolean>;
    /**
     * Discovery Job ID.
     */
    jobId?: pulumi.Input<number>;
    /**
     * Discovery Job Tracking Info Captured When Schedule is set to `RunNow`
     */
    jobTracking?: pulumi.Input<inputs.DiscoveryJobTracking>;
    /**
     * Name of the discovery configuration job
     */
    name?: pulumi.Input<string>;
    /**
     * Provides the option to schedule the discovery job. If `RunLater` is selected, then attribute `cron` must be specified.
     * If `RunNow` is selected, then attribute `timeout` must be specified.
     */
    schedule?: pulumi.Input<string>;
    /**
     * Provide a timeout in minute to track the job
     */
    timeout?: pulumi.Input<number>;
    /**
     * - Enable OpenManage Enterprise to receive the incoming SNMP traps from the discovered devices. - This is effective only
     * for servers discovered by using their iDRAC interface.
     */
    trapDestination?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a Discovery resource.
 */
export interface DiscoveryArgs {
    /**
     * Provide a cron expression based on Quartz cron format
     */
    cron?: pulumi.Input<string>;
    /**
     * - Provide the list of discovery targets. - Each discovery target is a set of "network_address_detail", "device_types",
     * and one or more protocol credentials.
     */
    discoveryConfigTargets: pulumi.Input<pulumi.Input<inputs.DiscoveryDiscoveryConfigTarget>[]>;
    /**
     * - Enter the email address to which notifications are to be sent about the discovery job status. - Configure the SMTP
     * settings to allow sending notifications to an email address.
     */
    emailRecipient?: pulumi.Input<string>;
    /**
     * - Enable the use of SNMP community strings to receive SNMP traps using Application Settings in OpenManage Enterprise. -
     * This option is available only for the discovered iDRAC servers and MX7000 chassis.
     */
    enableCommunityStrings?: pulumi.Input<boolean>;
    /**
     * Provides the option to ignore partial failures. Partial failures occur when there is a combination of both discovered
     * and undiscovered IPs with Schedule is set to `RunNow`. If `partial_failure` is set `false` then partial_failure is not
     * ignored, and module will error out.If `partial_failure` is set `true` then partial_failure is ignored, and module will
     * not error out.
     */
    ignorePartialFailure?: pulumi.Input<boolean>;
    /**
     * Name of the discovery configuration job
     */
    name?: pulumi.Input<string>;
    /**
     * Provides the option to schedule the discovery job. If `RunLater` is selected, then attribute `cron` must be specified.
     * If `RunNow` is selected, then attribute `timeout` must be specified.
     */
    schedule: pulumi.Input<string>;
    /**
     * Provide a timeout in minute to track the job
     */
    timeout?: pulumi.Input<number>;
    /**
     * - Enable OpenManage Enterprise to receive the incoming SNMP traps from the discovered devices. - This is effective only
     * for servers discovered by using their iDRAC interface.
     */
    trapDestination?: pulumi.Input<boolean>;
}
