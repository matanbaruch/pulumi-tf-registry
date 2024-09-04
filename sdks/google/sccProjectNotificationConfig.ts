// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SccProjectNotificationConfig extends pulumi.CustomResource {
    /**
     * Get an existing SccProjectNotificationConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SccProjectNotificationConfigState, opts?: pulumi.CustomResourceOptions): SccProjectNotificationConfig {
        return new SccProjectNotificationConfig(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/sccProjectNotificationConfig:SccProjectNotificationConfig';

    /**
     * Returns true if the given object is an instance of SccProjectNotificationConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SccProjectNotificationConfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SccProjectNotificationConfig.__pulumiType;
    }

    /**
     * This must be unique within the organization.
     */
    public readonly configId!: pulumi.Output<string>;
    /**
     * The description of the notification config (max of 1024 characters).
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The resource name of this notification config, in the format 'projects/{{projectId}}/notificationConfigs/{{config_id}}'.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    public readonly project!: pulumi.Output<string>;
    /**
     * The Pub/Sub topic to send notifications to. Its format is "projects/[project_id]/topics/[topic]".
     */
    public readonly pubsubTopic!: pulumi.Output<string>;
    /**
     * The service account that needs "pubsub.topics.publish" permission to publish to the Pub/Sub topic.
     */
    public /*out*/ readonly serviceAccount!: pulumi.Output<string>;
    /**
     * The config for triggering streaming-based notifications.
     */
    public readonly streamingConfig!: pulumi.Output<outputs.SccProjectNotificationConfigStreamingConfig>;
    public readonly timeouts!: pulumi.Output<outputs.SccProjectNotificationConfigTimeouts | undefined>;

    /**
     * Create a SccProjectNotificationConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SccProjectNotificationConfigArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SccProjectNotificationConfigArgs | SccProjectNotificationConfigState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SccProjectNotificationConfigState | undefined;
            resourceInputs["configId"] = state ? state.configId : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["pubsubTopic"] = state ? state.pubsubTopic : undefined;
            resourceInputs["serviceAccount"] = state ? state.serviceAccount : undefined;
            resourceInputs["streamingConfig"] = state ? state.streamingConfig : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as SccProjectNotificationConfigArgs | undefined;
            if ((!args || args.configId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'configId'");
            }
            if ((!args || args.pubsubTopic === undefined) && !opts.urn) {
                throw new Error("Missing required property 'pubsubTopic'");
            }
            if ((!args || args.streamingConfig === undefined) && !opts.urn) {
                throw new Error("Missing required property 'streamingConfig'");
            }
            resourceInputs["configId"] = args ? args.configId : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["pubsubTopic"] = args ? args.pubsubTopic : undefined;
            resourceInputs["streamingConfig"] = args ? args.streamingConfig : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["serviceAccount"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SccProjectNotificationConfig.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SccProjectNotificationConfig resources.
 */
export interface SccProjectNotificationConfigState {
    /**
     * This must be unique within the organization.
     */
    configId?: pulumi.Input<string>;
    /**
     * The description of the notification config (max of 1024 characters).
     */
    description?: pulumi.Input<string>;
    /**
     * The resource name of this notification config, in the format 'projects/{{projectId}}/notificationConfigs/{{config_id}}'.
     */
    name?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * The Pub/Sub topic to send notifications to. Its format is "projects/[project_id]/topics/[topic]".
     */
    pubsubTopic?: pulumi.Input<string>;
    /**
     * The service account that needs "pubsub.topics.publish" permission to publish to the Pub/Sub topic.
     */
    serviceAccount?: pulumi.Input<string>;
    /**
     * The config for triggering streaming-based notifications.
     */
    streamingConfig?: pulumi.Input<inputs.SccProjectNotificationConfigStreamingConfig>;
    timeouts?: pulumi.Input<inputs.SccProjectNotificationConfigTimeouts>;
}

/**
 * The set of arguments for constructing a SccProjectNotificationConfig resource.
 */
export interface SccProjectNotificationConfigArgs {
    /**
     * This must be unique within the organization.
     */
    configId: pulumi.Input<string>;
    /**
     * The description of the notification config (max of 1024 characters).
     */
    description?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * The Pub/Sub topic to send notifications to. Its format is "projects/[project_id]/topics/[topic]".
     */
    pubsubTopic: pulumi.Input<string>;
    /**
     * The config for triggering streaming-based notifications.
     */
    streamingConfig: pulumi.Input<inputs.SccProjectNotificationConfigStreamingConfig>;
    timeouts?: pulumi.Input<inputs.SccProjectNotificationConfigTimeouts>;
}
