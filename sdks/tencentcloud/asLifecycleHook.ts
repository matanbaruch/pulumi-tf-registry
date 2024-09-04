// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AsLifecycleHook extends pulumi.CustomResource {
    /**
     * Get an existing AsLifecycleHook resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AsLifecycleHookState, opts?: pulumi.CustomResourceOptions): AsLifecycleHook {
        return new AsLifecycleHook(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/asLifecycleHook:AsLifecycleHook';

    /**
     * Returns true if the given object is an instance of AsLifecycleHook.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AsLifecycleHook {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AsLifecycleHook.__pulumiType;
    }

    /**
     * Defines the action the AS group should take when the lifecycle hook timeout elapses or if an unexpected failure occurs.
     * Valid values: `CONTINUE` and `ABANDON`. The default value is `CONTINUE`.
     */
    public readonly defaultResult!: pulumi.Output<string | undefined>;
    /**
     * Defines the amount of time, in seconds, that can elapse before the lifecycle hook times out. Valid value ranges:
     * (30~7200). and default value is `300`.
     */
    public readonly heartbeatTimeout!: pulumi.Output<number | undefined>;
    /**
     * Remote command execution object. `NotificationTarget` and `LifecycleCommand` cannot be specified at the same time.
     */
    public readonly lifecycleCommand!: pulumi.Output<outputs.AsLifecycleHookLifecycleCommand | undefined>;
    /**
     * The name of the lifecycle hook.
     */
    public readonly lifecycleHookName!: pulumi.Output<string>;
    /**
     * The instance state to which you want to attach the lifecycle hook. Valid values: `INSTANCE_LAUNCHING` and
     * `INSTANCE_TERMINATING`.
     */
    public readonly lifecycleTransition!: pulumi.Output<string>;
    /**
     * Contains additional information that you want to include any time AS sends a message to the notification target.
     */
    public readonly notificationMetadata!: pulumi.Output<string | undefined>;
    /**
     * For CMQ_QUEUE type, a name of queue must be set.
     */
    public readonly notificationQueueName!: pulumi.Output<string | undefined>;
    /**
     * Target type. Valid values: `CMQ_QUEUE`, `CMQ_TOPIC`, `TDMQ_CMQ_QUEUE`, `TDMQ_CMQ_TOPIC`.
     */
    public readonly notificationTargetType!: pulumi.Output<string | undefined>;
    /**
     * For CMQ_TOPIC type, a name of topic must be set.
     */
    public readonly notificationTopicName!: pulumi.Output<string | undefined>;
    /**
     * ID of a scaling group.
     */
    public readonly scalingGroupId!: pulumi.Output<string>;

    /**
     * Create a AsLifecycleHook resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AsLifecycleHookArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AsLifecycleHookArgs | AsLifecycleHookState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AsLifecycleHookState | undefined;
            resourceInputs["defaultResult"] = state ? state.defaultResult : undefined;
            resourceInputs["heartbeatTimeout"] = state ? state.heartbeatTimeout : undefined;
            resourceInputs["lifecycleCommand"] = state ? state.lifecycleCommand : undefined;
            resourceInputs["lifecycleHookName"] = state ? state.lifecycleHookName : undefined;
            resourceInputs["lifecycleTransition"] = state ? state.lifecycleTransition : undefined;
            resourceInputs["notificationMetadata"] = state ? state.notificationMetadata : undefined;
            resourceInputs["notificationQueueName"] = state ? state.notificationQueueName : undefined;
            resourceInputs["notificationTargetType"] = state ? state.notificationTargetType : undefined;
            resourceInputs["notificationTopicName"] = state ? state.notificationTopicName : undefined;
            resourceInputs["scalingGroupId"] = state ? state.scalingGroupId : undefined;
        } else {
            const args = argsOrState as AsLifecycleHookArgs | undefined;
            if ((!args || args.lifecycleHookName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'lifecycleHookName'");
            }
            if ((!args || args.lifecycleTransition === undefined) && !opts.urn) {
                throw new Error("Missing required property 'lifecycleTransition'");
            }
            if ((!args || args.scalingGroupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scalingGroupId'");
            }
            resourceInputs["defaultResult"] = args ? args.defaultResult : undefined;
            resourceInputs["heartbeatTimeout"] = args ? args.heartbeatTimeout : undefined;
            resourceInputs["lifecycleCommand"] = args ? args.lifecycleCommand : undefined;
            resourceInputs["lifecycleHookName"] = args ? args.lifecycleHookName : undefined;
            resourceInputs["lifecycleTransition"] = args ? args.lifecycleTransition : undefined;
            resourceInputs["notificationMetadata"] = args ? args.notificationMetadata : undefined;
            resourceInputs["notificationQueueName"] = args ? args.notificationQueueName : undefined;
            resourceInputs["notificationTargetType"] = args ? args.notificationTargetType : undefined;
            resourceInputs["notificationTopicName"] = args ? args.notificationTopicName : undefined;
            resourceInputs["scalingGroupId"] = args ? args.scalingGroupId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AsLifecycleHook.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AsLifecycleHook resources.
 */
export interface AsLifecycleHookState {
    /**
     * Defines the action the AS group should take when the lifecycle hook timeout elapses or if an unexpected failure occurs.
     * Valid values: `CONTINUE` and `ABANDON`. The default value is `CONTINUE`.
     */
    defaultResult?: pulumi.Input<string>;
    /**
     * Defines the amount of time, in seconds, that can elapse before the lifecycle hook times out. Valid value ranges:
     * (30~7200). and default value is `300`.
     */
    heartbeatTimeout?: pulumi.Input<number>;
    /**
     * Remote command execution object. `NotificationTarget` and `LifecycleCommand` cannot be specified at the same time.
     */
    lifecycleCommand?: pulumi.Input<inputs.AsLifecycleHookLifecycleCommand>;
    /**
     * The name of the lifecycle hook.
     */
    lifecycleHookName?: pulumi.Input<string>;
    /**
     * The instance state to which you want to attach the lifecycle hook. Valid values: `INSTANCE_LAUNCHING` and
     * `INSTANCE_TERMINATING`.
     */
    lifecycleTransition?: pulumi.Input<string>;
    /**
     * Contains additional information that you want to include any time AS sends a message to the notification target.
     */
    notificationMetadata?: pulumi.Input<string>;
    /**
     * For CMQ_QUEUE type, a name of queue must be set.
     */
    notificationQueueName?: pulumi.Input<string>;
    /**
     * Target type. Valid values: `CMQ_QUEUE`, `CMQ_TOPIC`, `TDMQ_CMQ_QUEUE`, `TDMQ_CMQ_TOPIC`.
     */
    notificationTargetType?: pulumi.Input<string>;
    /**
     * For CMQ_TOPIC type, a name of topic must be set.
     */
    notificationTopicName?: pulumi.Input<string>;
    /**
     * ID of a scaling group.
     */
    scalingGroupId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AsLifecycleHook resource.
 */
export interface AsLifecycleHookArgs {
    /**
     * Defines the action the AS group should take when the lifecycle hook timeout elapses or if an unexpected failure occurs.
     * Valid values: `CONTINUE` and `ABANDON`. The default value is `CONTINUE`.
     */
    defaultResult?: pulumi.Input<string>;
    /**
     * Defines the amount of time, in seconds, that can elapse before the lifecycle hook times out. Valid value ranges:
     * (30~7200). and default value is `300`.
     */
    heartbeatTimeout?: pulumi.Input<number>;
    /**
     * Remote command execution object. `NotificationTarget` and `LifecycleCommand` cannot be specified at the same time.
     */
    lifecycleCommand?: pulumi.Input<inputs.AsLifecycleHookLifecycleCommand>;
    /**
     * The name of the lifecycle hook.
     */
    lifecycleHookName: pulumi.Input<string>;
    /**
     * The instance state to which you want to attach the lifecycle hook. Valid values: `INSTANCE_LAUNCHING` and
     * `INSTANCE_TERMINATING`.
     */
    lifecycleTransition: pulumi.Input<string>;
    /**
     * Contains additional information that you want to include any time AS sends a message to the notification target.
     */
    notificationMetadata?: pulumi.Input<string>;
    /**
     * For CMQ_QUEUE type, a name of queue must be set.
     */
    notificationQueueName?: pulumi.Input<string>;
    /**
     * Target type. Valid values: `CMQ_QUEUE`, `CMQ_TOPIC`, `TDMQ_CMQ_QUEUE`, `TDMQ_CMQ_TOPIC`.
     */
    notificationTargetType?: pulumi.Input<string>;
    /**
     * For CMQ_TOPIC type, a name of topic must be set.
     */
    notificationTopicName?: pulumi.Input<string>;
    /**
     * ID of a scaling group.
     */
    scalingGroupId: pulumi.Input<string>;
}
