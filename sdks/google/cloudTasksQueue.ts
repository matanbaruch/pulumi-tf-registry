// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CloudTasksQueue extends pulumi.CustomResource {
    /**
     * Get an existing CloudTasksQueue resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CloudTasksQueueState, opts?: pulumi.CustomResourceOptions): CloudTasksQueue {
        return new CloudTasksQueue(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/cloudTasksQueue:CloudTasksQueue';

    /**
     * Returns true if the given object is an instance of CloudTasksQueue.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CloudTasksQueue {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CloudTasksQueue.__pulumiType;
    }

    /**
     * Overrides for task-level appEngineRouting. These settings apply only to App Engine tasks in this queue
     */
    public readonly appEngineRoutingOverride!: pulumi.Output<outputs.CloudTasksQueueAppEngineRoutingOverride | undefined>;
    /**
     * Modifies HTTP target for HTTP tasks.
     */
    public readonly httpTarget!: pulumi.Output<outputs.CloudTasksQueueHttpTarget | undefined>;
    /**
     * The location of the queue
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The queue name.
     */
    public readonly name!: pulumi.Output<string>;
    public readonly project!: pulumi.Output<string>;
    /**
     * Rate limits for task dispatches. The queue's actual dispatch rate is the result of: * Number of tasks in the queue *
     * User-specified throttling: rateLimits, retryConfig, and the queue's state. * System throttling due to 429 (Too Many
     * Requests) or 503 (Service Unavailable) responses from the worker, high error rates, or to smooth sudden large traffic
     * spikes.
     */
    public readonly rateLimits!: pulumi.Output<outputs.CloudTasksQueueRateLimits | undefined>;
    /**
     * Settings that determine the retry behavior.
     */
    public readonly retryConfig!: pulumi.Output<outputs.CloudTasksQueueRetryConfig | undefined>;
    /**
     * Configuration options for writing logs to Stackdriver Logging.
     */
    public readonly stackdriverLoggingConfig!: pulumi.Output<outputs.CloudTasksQueueStackdriverLoggingConfig | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.CloudTasksQueueTimeouts | undefined>;

    /**
     * Create a CloudTasksQueue resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CloudTasksQueueArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CloudTasksQueueArgs | CloudTasksQueueState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CloudTasksQueueState | undefined;
            resourceInputs["appEngineRoutingOverride"] = state ? state.appEngineRoutingOverride : undefined;
            resourceInputs["httpTarget"] = state ? state.httpTarget : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["rateLimits"] = state ? state.rateLimits : undefined;
            resourceInputs["retryConfig"] = state ? state.retryConfig : undefined;
            resourceInputs["stackdriverLoggingConfig"] = state ? state.stackdriverLoggingConfig : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as CloudTasksQueueArgs | undefined;
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            resourceInputs["appEngineRoutingOverride"] = args ? args.appEngineRoutingOverride : undefined;
            resourceInputs["httpTarget"] = args ? args.httpTarget : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["rateLimits"] = args ? args.rateLimits : undefined;
            resourceInputs["retryConfig"] = args ? args.retryConfig : undefined;
            resourceInputs["stackdriverLoggingConfig"] = args ? args.stackdriverLoggingConfig : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CloudTasksQueue.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CloudTasksQueue resources.
 */
export interface CloudTasksQueueState {
    /**
     * Overrides for task-level appEngineRouting. These settings apply only to App Engine tasks in this queue
     */
    appEngineRoutingOverride?: pulumi.Input<inputs.CloudTasksQueueAppEngineRoutingOverride>;
    /**
     * Modifies HTTP target for HTTP tasks.
     */
    httpTarget?: pulumi.Input<inputs.CloudTasksQueueHttpTarget>;
    /**
     * The location of the queue
     */
    location?: pulumi.Input<string>;
    /**
     * The queue name.
     */
    name?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * Rate limits for task dispatches. The queue's actual dispatch rate is the result of: * Number of tasks in the queue *
     * User-specified throttling: rateLimits, retryConfig, and the queue's state. * System throttling due to 429 (Too Many
     * Requests) or 503 (Service Unavailable) responses from the worker, high error rates, or to smooth sudden large traffic
     * spikes.
     */
    rateLimits?: pulumi.Input<inputs.CloudTasksQueueRateLimits>;
    /**
     * Settings that determine the retry behavior.
     */
    retryConfig?: pulumi.Input<inputs.CloudTasksQueueRetryConfig>;
    /**
     * Configuration options for writing logs to Stackdriver Logging.
     */
    stackdriverLoggingConfig?: pulumi.Input<inputs.CloudTasksQueueStackdriverLoggingConfig>;
    timeouts?: pulumi.Input<inputs.CloudTasksQueueTimeouts>;
}

/**
 * The set of arguments for constructing a CloudTasksQueue resource.
 */
export interface CloudTasksQueueArgs {
    /**
     * Overrides for task-level appEngineRouting. These settings apply only to App Engine tasks in this queue
     */
    appEngineRoutingOverride?: pulumi.Input<inputs.CloudTasksQueueAppEngineRoutingOverride>;
    /**
     * Modifies HTTP target for HTTP tasks.
     */
    httpTarget?: pulumi.Input<inputs.CloudTasksQueueHttpTarget>;
    /**
     * The location of the queue
     */
    location: pulumi.Input<string>;
    /**
     * The queue name.
     */
    name?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * Rate limits for task dispatches. The queue's actual dispatch rate is the result of: * Number of tasks in the queue *
     * User-specified throttling: rateLimits, retryConfig, and the queue's state. * System throttling due to 429 (Too Many
     * Requests) or 503 (Service Unavailable) responses from the worker, high error rates, or to smooth sudden large traffic
     * spikes.
     */
    rateLimits?: pulumi.Input<inputs.CloudTasksQueueRateLimits>;
    /**
     * Settings that determine the retry behavior.
     */
    retryConfig?: pulumi.Input<inputs.CloudTasksQueueRetryConfig>;
    /**
     * Configuration options for writing logs to Stackdriver Logging.
     */
    stackdriverLoggingConfig?: pulumi.Input<inputs.CloudTasksQueueStackdriverLoggingConfig>;
    timeouts?: pulumi.Input<inputs.CloudTasksQueueTimeouts>;
}
