// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SimpleMonitor extends pulumi.CustomResource {
    /**
     * Get an existing SimpleMonitor resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SimpleMonitorState, opts?: pulumi.CustomResourceOptions): SimpleMonitor {
        return new SimpleMonitor(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'sakuracloud:index/simpleMonitor:SimpleMonitor';

    /**
     * Returns true if the given object is an instance of SimpleMonitor.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SimpleMonitor {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SimpleMonitor.__pulumiType;
    }

    /**
     * The interval in seconds between checks. This must be in the range [`60`-`3600`]
     */
    public readonly delayLoop!: pulumi.Output<number | undefined>;
    /**
     * The description of the SimpleMonitor. The length of this value must be in the range [`1`-`512`]
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The flag to enable monitoring by the simple monitor
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    public readonly healthCheck!: pulumi.Output<outputs.SimpleMonitorHealthCheck>;
    /**
     * The icon id to attach to the SimpleMonitor
     */
    public readonly iconId!: pulumi.Output<string | undefined>;
    /**
     * The number of retry. This must be in the range [`1`-`10`]
     */
    public readonly maxCheckAttempts!: pulumi.Output<number>;
    /**
     * The flag to enable notification by email
     */
    public readonly notifyEmailEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * The flag to enable HTML format instead of text format
     */
    public readonly notifyEmailHtml!: pulumi.Output<boolean | undefined>;
    /**
     * The interval in hours between notification. This must be in the range [`1`-`72`]
     */
    public readonly notifyInterval!: pulumi.Output<number | undefined>;
    /**
     * The flag to enable notification by slack/discord
     */
    public readonly notifySlackEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * The webhook URL for sending notification by slack/discord
     */
    public readonly notifySlackWebhook!: pulumi.Output<string | undefined>;
    /**
     * The interval in seconds between retries. This must be in the range [`10`-`3600`]
     */
    public readonly retryInterval!: pulumi.Output<number>;
    /**
     * Any tags to assign to the SimpleMonitor
     */
    public readonly tags!: pulumi.Output<string[] | undefined>;
    /**
     * The monitoring target of the simple monitor. This must be IP address or FQDN
     */
    public readonly target!: pulumi.Output<string>;
    /**
     * The timeout in seconds for monitoring. This must be in the range [`10`-`30`]
     */
    public readonly timeout!: pulumi.Output<number>;
    public readonly timeouts!: pulumi.Output<outputs.SimpleMonitorTimeouts | undefined>;

    /**
     * Create a SimpleMonitor resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SimpleMonitorArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SimpleMonitorArgs | SimpleMonitorState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SimpleMonitorState | undefined;
            resourceInputs["delayLoop"] = state ? state.delayLoop : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["healthCheck"] = state ? state.healthCheck : undefined;
            resourceInputs["iconId"] = state ? state.iconId : undefined;
            resourceInputs["maxCheckAttempts"] = state ? state.maxCheckAttempts : undefined;
            resourceInputs["notifyEmailEnabled"] = state ? state.notifyEmailEnabled : undefined;
            resourceInputs["notifyEmailHtml"] = state ? state.notifyEmailHtml : undefined;
            resourceInputs["notifyInterval"] = state ? state.notifyInterval : undefined;
            resourceInputs["notifySlackEnabled"] = state ? state.notifySlackEnabled : undefined;
            resourceInputs["notifySlackWebhook"] = state ? state.notifySlackWebhook : undefined;
            resourceInputs["retryInterval"] = state ? state.retryInterval : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["target"] = state ? state.target : undefined;
            resourceInputs["timeout"] = state ? state.timeout : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as SimpleMonitorArgs | undefined;
            if ((!args || args.healthCheck === undefined) && !opts.urn) {
                throw new Error("Missing required property 'healthCheck'");
            }
            if ((!args || args.target === undefined) && !opts.urn) {
                throw new Error("Missing required property 'target'");
            }
            resourceInputs["delayLoop"] = args ? args.delayLoop : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["healthCheck"] = args ? args.healthCheck : undefined;
            resourceInputs["iconId"] = args ? args.iconId : undefined;
            resourceInputs["maxCheckAttempts"] = args ? args.maxCheckAttempts : undefined;
            resourceInputs["notifyEmailEnabled"] = args ? args.notifyEmailEnabled : undefined;
            resourceInputs["notifyEmailHtml"] = args ? args.notifyEmailHtml : undefined;
            resourceInputs["notifyInterval"] = args ? args.notifyInterval : undefined;
            resourceInputs["notifySlackEnabled"] = args ? args.notifySlackEnabled : undefined;
            resourceInputs["notifySlackWebhook"] = args ? args.notifySlackWebhook : undefined;
            resourceInputs["retryInterval"] = args ? args.retryInterval : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["target"] = args ? args.target : undefined;
            resourceInputs["timeout"] = args ? args.timeout : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SimpleMonitor.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SimpleMonitor resources.
 */
export interface SimpleMonitorState {
    /**
     * The interval in seconds between checks. This must be in the range [`60`-`3600`]
     */
    delayLoop?: pulumi.Input<number>;
    /**
     * The description of the SimpleMonitor. The length of this value must be in the range [`1`-`512`]
     */
    description?: pulumi.Input<string>;
    /**
     * The flag to enable monitoring by the simple monitor
     */
    enabled?: pulumi.Input<boolean>;
    healthCheck?: pulumi.Input<inputs.SimpleMonitorHealthCheck>;
    /**
     * The icon id to attach to the SimpleMonitor
     */
    iconId?: pulumi.Input<string>;
    /**
     * The number of retry. This must be in the range [`1`-`10`]
     */
    maxCheckAttempts?: pulumi.Input<number>;
    /**
     * The flag to enable notification by email
     */
    notifyEmailEnabled?: pulumi.Input<boolean>;
    /**
     * The flag to enable HTML format instead of text format
     */
    notifyEmailHtml?: pulumi.Input<boolean>;
    /**
     * The interval in hours between notification. This must be in the range [`1`-`72`]
     */
    notifyInterval?: pulumi.Input<number>;
    /**
     * The flag to enable notification by slack/discord
     */
    notifySlackEnabled?: pulumi.Input<boolean>;
    /**
     * The webhook URL for sending notification by slack/discord
     */
    notifySlackWebhook?: pulumi.Input<string>;
    /**
     * The interval in seconds between retries. This must be in the range [`10`-`3600`]
     */
    retryInterval?: pulumi.Input<number>;
    /**
     * Any tags to assign to the SimpleMonitor
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The monitoring target of the simple monitor. This must be IP address or FQDN
     */
    target?: pulumi.Input<string>;
    /**
     * The timeout in seconds for monitoring. This must be in the range [`10`-`30`]
     */
    timeout?: pulumi.Input<number>;
    timeouts?: pulumi.Input<inputs.SimpleMonitorTimeouts>;
}

/**
 * The set of arguments for constructing a SimpleMonitor resource.
 */
export interface SimpleMonitorArgs {
    /**
     * The interval in seconds between checks. This must be in the range [`60`-`3600`]
     */
    delayLoop?: pulumi.Input<number>;
    /**
     * The description of the SimpleMonitor. The length of this value must be in the range [`1`-`512`]
     */
    description?: pulumi.Input<string>;
    /**
     * The flag to enable monitoring by the simple monitor
     */
    enabled?: pulumi.Input<boolean>;
    healthCheck: pulumi.Input<inputs.SimpleMonitorHealthCheck>;
    /**
     * The icon id to attach to the SimpleMonitor
     */
    iconId?: pulumi.Input<string>;
    /**
     * The number of retry. This must be in the range [`1`-`10`]
     */
    maxCheckAttempts?: pulumi.Input<number>;
    /**
     * The flag to enable notification by email
     */
    notifyEmailEnabled?: pulumi.Input<boolean>;
    /**
     * The flag to enable HTML format instead of text format
     */
    notifyEmailHtml?: pulumi.Input<boolean>;
    /**
     * The interval in hours between notification. This must be in the range [`1`-`72`]
     */
    notifyInterval?: pulumi.Input<number>;
    /**
     * The flag to enable notification by slack/discord
     */
    notifySlackEnabled?: pulumi.Input<boolean>;
    /**
     * The webhook URL for sending notification by slack/discord
     */
    notifySlackWebhook?: pulumi.Input<string>;
    /**
     * The interval in seconds between retries. This must be in the range [`10`-`3600`]
     */
    retryInterval?: pulumi.Input<number>;
    /**
     * Any tags to assign to the SimpleMonitor
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The monitoring target of the simple monitor. This must be IP address or FQDN
     */
    target: pulumi.Input<string>;
    /**
     * The timeout in seconds for monitoring. This must be in the range [`10`-`30`]
     */
    timeout?: pulumi.Input<number>;
    timeouts?: pulumi.Input<inputs.SimpleMonitorTimeouts>;
}
