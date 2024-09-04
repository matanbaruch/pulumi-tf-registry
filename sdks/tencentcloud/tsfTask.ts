// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class TsfTask extends pulumi.CustomResource {
    /**
     * Get an existing TsfTask resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TsfTaskState, opts?: pulumi.CustomResourceOptions): TsfTask {
        return new TsfTask(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/tsfTask:TsfTask';

    /**
     * Returns true if the given object is an instance of TsfTask.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TsfTask {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TsfTask.__pulumiType;
    }

    /**
     * advanced settings.
     */
    public readonly advanceSettings!: pulumi.Output<outputs.TsfTaskAdvanceSettings | undefined>;
    /**
     * ID of the workflow to which it belongs.
     */
    public /*out*/ readonly belongFlowIds!: pulumi.Output<string[]>;
    /**
     * execution type, unicast/broadcast.
     */
    public readonly executeType!: pulumi.Output<string>;
    /**
     * deployment group ID.
     */
    public readonly groupId!: pulumi.Output<string>;
    /**
     * Program id list.
     */
    public readonly programIdLists!: pulumi.Output<string[] | undefined>;
    /**
     * number of retries, 0 &amp;lt;= RetryCount&amp;lt;= 10.
     */
    public readonly retryCount!: pulumi.Output<number>;
    /**
     * retry interval, 0 &amp;lt;= RetryInterval &amp;lt;= 600000, time unit ms.
     */
    public readonly retryInterval!: pulumi.Output<number>;
    /**
     * Fragmentation parameters.
     */
    public readonly shardArguments!: pulumi.Output<outputs.TsfTaskShardArgument[] | undefined>;
    /**
     * number of shards.
     */
    public readonly shardCount!: pulumi.Output<number>;
    /**
     * the operator to judge the success of the task.
     */
    public readonly successOperator!: pulumi.Output<string>;
    /**
     * The threshold for judging the success rate of the task, such as 100.
     */
    public readonly successRatio!: pulumi.Output<string>;
    /**
     * task parameters, the length limit is 10000 characters.
     */
    public readonly taskArgument!: pulumi.Output<string>;
    /**
     * task content, length limit 65536 bytes.
     */
    public readonly taskContent!: pulumi.Output<string>;
    /**
     * task ID.
     */
    public /*out*/ readonly taskId!: pulumi.Output<string>;
    /**
     * task history ID.
     */
    public /*out*/ readonly taskLogId!: pulumi.Output<string>;
    /**
     * task name, task length 64 characters.
     */
    public readonly taskName!: pulumi.Output<string>;
    /**
     * trigger rule.
     */
    public readonly taskRule!: pulumi.Output<outputs.TsfTaskTaskRule | undefined>;
    /**
     * Whether to enable the task, ENABLED/DISABLED.
     */
    public /*out*/ readonly taskState!: pulumi.Output<string>;
    /**
     * task type, java.
     */
    public readonly taskType!: pulumi.Output<string>;
    /**
     * task timeout, time unit ms.
     */
    public readonly timeOut!: pulumi.Output<number>;
    /**
     * trigger type.
     */
    public /*out*/ readonly triggerType!: pulumi.Output<string>;

    /**
     * Create a TsfTask resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TsfTaskArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TsfTaskArgs | TsfTaskState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TsfTaskState | undefined;
            resourceInputs["advanceSettings"] = state ? state.advanceSettings : undefined;
            resourceInputs["belongFlowIds"] = state ? state.belongFlowIds : undefined;
            resourceInputs["executeType"] = state ? state.executeType : undefined;
            resourceInputs["groupId"] = state ? state.groupId : undefined;
            resourceInputs["programIdLists"] = state ? state.programIdLists : undefined;
            resourceInputs["retryCount"] = state ? state.retryCount : undefined;
            resourceInputs["retryInterval"] = state ? state.retryInterval : undefined;
            resourceInputs["shardArguments"] = state ? state.shardArguments : undefined;
            resourceInputs["shardCount"] = state ? state.shardCount : undefined;
            resourceInputs["successOperator"] = state ? state.successOperator : undefined;
            resourceInputs["successRatio"] = state ? state.successRatio : undefined;
            resourceInputs["taskArgument"] = state ? state.taskArgument : undefined;
            resourceInputs["taskContent"] = state ? state.taskContent : undefined;
            resourceInputs["taskId"] = state ? state.taskId : undefined;
            resourceInputs["taskLogId"] = state ? state.taskLogId : undefined;
            resourceInputs["taskName"] = state ? state.taskName : undefined;
            resourceInputs["taskRule"] = state ? state.taskRule : undefined;
            resourceInputs["taskState"] = state ? state.taskState : undefined;
            resourceInputs["taskType"] = state ? state.taskType : undefined;
            resourceInputs["timeOut"] = state ? state.timeOut : undefined;
            resourceInputs["triggerType"] = state ? state.triggerType : undefined;
        } else {
            const args = argsOrState as TsfTaskArgs | undefined;
            if ((!args || args.executeType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'executeType'");
            }
            if ((!args || args.groupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'groupId'");
            }
            if ((!args || args.taskContent === undefined) && !opts.urn) {
                throw new Error("Missing required property 'taskContent'");
            }
            if ((!args || args.taskName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'taskName'");
            }
            if ((!args || args.taskType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'taskType'");
            }
            if ((!args || args.timeOut === undefined) && !opts.urn) {
                throw new Error("Missing required property 'timeOut'");
            }
            resourceInputs["advanceSettings"] = args ? args.advanceSettings : undefined;
            resourceInputs["executeType"] = args ? args.executeType : undefined;
            resourceInputs["groupId"] = args ? args.groupId : undefined;
            resourceInputs["programIdLists"] = args ? args.programIdLists : undefined;
            resourceInputs["retryCount"] = args ? args.retryCount : undefined;
            resourceInputs["retryInterval"] = args ? args.retryInterval : undefined;
            resourceInputs["shardArguments"] = args ? args.shardArguments : undefined;
            resourceInputs["shardCount"] = args ? args.shardCount : undefined;
            resourceInputs["successOperator"] = args ? args.successOperator : undefined;
            resourceInputs["successRatio"] = args ? args.successRatio : undefined;
            resourceInputs["taskArgument"] = args ? args.taskArgument : undefined;
            resourceInputs["taskContent"] = args ? args.taskContent : undefined;
            resourceInputs["taskName"] = args ? args.taskName : undefined;
            resourceInputs["taskRule"] = args ? args.taskRule : undefined;
            resourceInputs["taskType"] = args ? args.taskType : undefined;
            resourceInputs["timeOut"] = args ? args.timeOut : undefined;
            resourceInputs["belongFlowIds"] = undefined /*out*/;
            resourceInputs["taskId"] = undefined /*out*/;
            resourceInputs["taskLogId"] = undefined /*out*/;
            resourceInputs["taskState"] = undefined /*out*/;
            resourceInputs["triggerType"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(TsfTask.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering TsfTask resources.
 */
export interface TsfTaskState {
    /**
     * advanced settings.
     */
    advanceSettings?: pulumi.Input<inputs.TsfTaskAdvanceSettings>;
    /**
     * ID of the workflow to which it belongs.
     */
    belongFlowIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * execution type, unicast/broadcast.
     */
    executeType?: pulumi.Input<string>;
    /**
     * deployment group ID.
     */
    groupId?: pulumi.Input<string>;
    /**
     * Program id list.
     */
    programIdLists?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * number of retries, 0 &amp;lt;= RetryCount&amp;lt;= 10.
     */
    retryCount?: pulumi.Input<number>;
    /**
     * retry interval, 0 &amp;lt;= RetryInterval &amp;lt;= 600000, time unit ms.
     */
    retryInterval?: pulumi.Input<number>;
    /**
     * Fragmentation parameters.
     */
    shardArguments?: pulumi.Input<pulumi.Input<inputs.TsfTaskShardArgument>[]>;
    /**
     * number of shards.
     */
    shardCount?: pulumi.Input<number>;
    /**
     * the operator to judge the success of the task.
     */
    successOperator?: pulumi.Input<string>;
    /**
     * The threshold for judging the success rate of the task, such as 100.
     */
    successRatio?: pulumi.Input<string>;
    /**
     * task parameters, the length limit is 10000 characters.
     */
    taskArgument?: pulumi.Input<string>;
    /**
     * task content, length limit 65536 bytes.
     */
    taskContent?: pulumi.Input<string>;
    /**
     * task ID.
     */
    taskId?: pulumi.Input<string>;
    /**
     * task history ID.
     */
    taskLogId?: pulumi.Input<string>;
    /**
     * task name, task length 64 characters.
     */
    taskName?: pulumi.Input<string>;
    /**
     * trigger rule.
     */
    taskRule?: pulumi.Input<inputs.TsfTaskTaskRule>;
    /**
     * Whether to enable the task, ENABLED/DISABLED.
     */
    taskState?: pulumi.Input<string>;
    /**
     * task type, java.
     */
    taskType?: pulumi.Input<string>;
    /**
     * task timeout, time unit ms.
     */
    timeOut?: pulumi.Input<number>;
    /**
     * trigger type.
     */
    triggerType?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a TsfTask resource.
 */
export interface TsfTaskArgs {
    /**
     * advanced settings.
     */
    advanceSettings?: pulumi.Input<inputs.TsfTaskAdvanceSettings>;
    /**
     * execution type, unicast/broadcast.
     */
    executeType: pulumi.Input<string>;
    /**
     * deployment group ID.
     */
    groupId: pulumi.Input<string>;
    /**
     * Program id list.
     */
    programIdLists?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * number of retries, 0 &amp;lt;= RetryCount&amp;lt;= 10.
     */
    retryCount?: pulumi.Input<number>;
    /**
     * retry interval, 0 &amp;lt;= RetryInterval &amp;lt;= 600000, time unit ms.
     */
    retryInterval?: pulumi.Input<number>;
    /**
     * Fragmentation parameters.
     */
    shardArguments?: pulumi.Input<pulumi.Input<inputs.TsfTaskShardArgument>[]>;
    /**
     * number of shards.
     */
    shardCount?: pulumi.Input<number>;
    /**
     * the operator to judge the success of the task.
     */
    successOperator?: pulumi.Input<string>;
    /**
     * The threshold for judging the success rate of the task, such as 100.
     */
    successRatio?: pulumi.Input<string>;
    /**
     * task parameters, the length limit is 10000 characters.
     */
    taskArgument?: pulumi.Input<string>;
    /**
     * task content, length limit 65536 bytes.
     */
    taskContent: pulumi.Input<string>;
    /**
     * task name, task length 64 characters.
     */
    taskName: pulumi.Input<string>;
    /**
     * trigger rule.
     */
    taskRule?: pulumi.Input<inputs.TsfTaskTaskRule>;
    /**
     * task type, java.
     */
    taskType: pulumi.Input<string>;
    /**
     * task timeout, time unit ms.
     */
    timeOut: pulumi.Input<number>;
}
