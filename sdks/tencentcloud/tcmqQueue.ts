// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class TcmqQueue extends pulumi.CustomResource {
    /**
     * Get an existing TcmqQueue resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TcmqQueueState, opts?: pulumi.CustomResourceOptions): TcmqQueue {
        return new TcmqQueue(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/tcmqQueue:TcmqQueue';

    /**
     * Returns true if the given object is an instance of TcmqQueue.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TcmqQueue {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TcmqQueue.__pulumiType;
    }

    /**
     * Dead letter queue name.
     */
    public readonly deadLetterQueueName!: pulumi.Output<string | undefined>;
    /**
     * First lookback interval.
     */
    public readonly firstQueryInterval!: pulumi.Output<number | undefined>;
    /**
     * Maximum number of heaped messages. The value range is 1,000,000-10,000,000 during the beta test and can be
     * 1,000,000-1,000,000,000 after the product is officially released. The default value is 10,000,000 during the beta test
     * and will be 100,000,000 after the product is officially released.
     */
    public readonly maxMsgHeapNum!: pulumi.Output<number | undefined>;
    /**
     * Maximum message length. Value range: 1024-65536 bytes (i.e., 1-64 KB). Default value: 65536.
     */
    public readonly maxMsgSize!: pulumi.Output<number | undefined>;
    /**
     * Maximum number of lookbacks.
     */
    public readonly maxQueryCount!: pulumi.Output<number | undefined>;
    /**
     * Maximum receipt times. Value range: 1-1000.
     */
    public readonly maxReceiveCount!: pulumi.Output<number | undefined>;
    /**
     * Maximum period in seconds before an unconsumed message expires, which is required if `policy` is 1. Value range:
     * 300-43200. This value should be smaller than `msgRetentionSeconds` (maximum message retention period).
     */
    public readonly maxTimeToLive!: pulumi.Output<number | undefined>;
    /**
     * The max period during which a message is retained before it is automatically acknowledged. Value range: 30-43,200
     * seconds (30 seconds to 12 hours). Default value: 3600 seconds (1 hour).
     */
    public readonly msgRetentionSeconds!: pulumi.Output<number | undefined>;
    /**
     * Dead letter policy. 0: message has been consumed multiple times but not deleted; 1: `Time-To-Live` has elapsed.
     */
    public readonly policy!: pulumi.Output<number | undefined>;
    /**
     * Long polling wait time for message reception. Value range: 0-30 seconds. Default value: 0.
     */
    public readonly pollingWaitSeconds!: pulumi.Output<number | undefined>;
    /**
     * Queue name, which must be unique under the same account in the same region. It can contain up to 64 letters, digits, and
     * hyphens and must begin with a letter.
     */
    public readonly queueName!: pulumi.Output<string>;
    /**
     * Queue storage space configured for message rewind. Value range: 10,240-512,000 MB (if message rewind is enabled). The
     * value `0` indicates that message rewind is not enabled.
     */
    public readonly retentionSizeInMb!: pulumi.Output<number | undefined>;
    /**
     * Rewindable time of messages in the queue. Value range: 0-1,296,000s (if message rewind is enabled). The value `0`
     * indicates that message rewind is not enabled.
     */
    public readonly rewindSeconds!: pulumi.Output<number | undefined>;
    /**
     * Whether to enable message trace. true: yes; false: no. If this field is not configured, the feature will not be enabled.
     */
    public readonly trace!: pulumi.Output<boolean | undefined>;
    /**
     * 1: transaction queue; 0: general queue.
     */
    public readonly transaction!: pulumi.Output<number | undefined>;
    /**
     * Message visibility timeout period. Value range: 1-43200 seconds (i.e., 12 hours). Default value: 30.
     */
    public readonly visibilityTimeout!: pulumi.Output<number | undefined>;

    /**
     * Create a TcmqQueue resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TcmqQueueArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TcmqQueueArgs | TcmqQueueState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TcmqQueueState | undefined;
            resourceInputs["deadLetterQueueName"] = state ? state.deadLetterQueueName : undefined;
            resourceInputs["firstQueryInterval"] = state ? state.firstQueryInterval : undefined;
            resourceInputs["maxMsgHeapNum"] = state ? state.maxMsgHeapNum : undefined;
            resourceInputs["maxMsgSize"] = state ? state.maxMsgSize : undefined;
            resourceInputs["maxQueryCount"] = state ? state.maxQueryCount : undefined;
            resourceInputs["maxReceiveCount"] = state ? state.maxReceiveCount : undefined;
            resourceInputs["maxTimeToLive"] = state ? state.maxTimeToLive : undefined;
            resourceInputs["msgRetentionSeconds"] = state ? state.msgRetentionSeconds : undefined;
            resourceInputs["policy"] = state ? state.policy : undefined;
            resourceInputs["pollingWaitSeconds"] = state ? state.pollingWaitSeconds : undefined;
            resourceInputs["queueName"] = state ? state.queueName : undefined;
            resourceInputs["retentionSizeInMb"] = state ? state.retentionSizeInMb : undefined;
            resourceInputs["rewindSeconds"] = state ? state.rewindSeconds : undefined;
            resourceInputs["trace"] = state ? state.trace : undefined;
            resourceInputs["transaction"] = state ? state.transaction : undefined;
            resourceInputs["visibilityTimeout"] = state ? state.visibilityTimeout : undefined;
        } else {
            const args = argsOrState as TcmqQueueArgs | undefined;
            if ((!args || args.queueName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'queueName'");
            }
            resourceInputs["deadLetterQueueName"] = args ? args.deadLetterQueueName : undefined;
            resourceInputs["firstQueryInterval"] = args ? args.firstQueryInterval : undefined;
            resourceInputs["maxMsgHeapNum"] = args ? args.maxMsgHeapNum : undefined;
            resourceInputs["maxMsgSize"] = args ? args.maxMsgSize : undefined;
            resourceInputs["maxQueryCount"] = args ? args.maxQueryCount : undefined;
            resourceInputs["maxReceiveCount"] = args ? args.maxReceiveCount : undefined;
            resourceInputs["maxTimeToLive"] = args ? args.maxTimeToLive : undefined;
            resourceInputs["msgRetentionSeconds"] = args ? args.msgRetentionSeconds : undefined;
            resourceInputs["policy"] = args ? args.policy : undefined;
            resourceInputs["pollingWaitSeconds"] = args ? args.pollingWaitSeconds : undefined;
            resourceInputs["queueName"] = args ? args.queueName : undefined;
            resourceInputs["retentionSizeInMb"] = args ? args.retentionSizeInMb : undefined;
            resourceInputs["rewindSeconds"] = args ? args.rewindSeconds : undefined;
            resourceInputs["trace"] = args ? args.trace : undefined;
            resourceInputs["transaction"] = args ? args.transaction : undefined;
            resourceInputs["visibilityTimeout"] = args ? args.visibilityTimeout : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(TcmqQueue.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering TcmqQueue resources.
 */
export interface TcmqQueueState {
    /**
     * Dead letter queue name.
     */
    deadLetterQueueName?: pulumi.Input<string>;
    /**
     * First lookback interval.
     */
    firstQueryInterval?: pulumi.Input<number>;
    /**
     * Maximum number of heaped messages. The value range is 1,000,000-10,000,000 during the beta test and can be
     * 1,000,000-1,000,000,000 after the product is officially released. The default value is 10,000,000 during the beta test
     * and will be 100,000,000 after the product is officially released.
     */
    maxMsgHeapNum?: pulumi.Input<number>;
    /**
     * Maximum message length. Value range: 1024-65536 bytes (i.e., 1-64 KB). Default value: 65536.
     */
    maxMsgSize?: pulumi.Input<number>;
    /**
     * Maximum number of lookbacks.
     */
    maxQueryCount?: pulumi.Input<number>;
    /**
     * Maximum receipt times. Value range: 1-1000.
     */
    maxReceiveCount?: pulumi.Input<number>;
    /**
     * Maximum period in seconds before an unconsumed message expires, which is required if `policy` is 1. Value range:
     * 300-43200. This value should be smaller than `msgRetentionSeconds` (maximum message retention period).
     */
    maxTimeToLive?: pulumi.Input<number>;
    /**
     * The max period during which a message is retained before it is automatically acknowledged. Value range: 30-43,200
     * seconds (30 seconds to 12 hours). Default value: 3600 seconds (1 hour).
     */
    msgRetentionSeconds?: pulumi.Input<number>;
    /**
     * Dead letter policy. 0: message has been consumed multiple times but not deleted; 1: `Time-To-Live` has elapsed.
     */
    policy?: pulumi.Input<number>;
    /**
     * Long polling wait time for message reception. Value range: 0-30 seconds. Default value: 0.
     */
    pollingWaitSeconds?: pulumi.Input<number>;
    /**
     * Queue name, which must be unique under the same account in the same region. It can contain up to 64 letters, digits, and
     * hyphens and must begin with a letter.
     */
    queueName?: pulumi.Input<string>;
    /**
     * Queue storage space configured for message rewind. Value range: 10,240-512,000 MB (if message rewind is enabled). The
     * value `0` indicates that message rewind is not enabled.
     */
    retentionSizeInMb?: pulumi.Input<number>;
    /**
     * Rewindable time of messages in the queue. Value range: 0-1,296,000s (if message rewind is enabled). The value `0`
     * indicates that message rewind is not enabled.
     */
    rewindSeconds?: pulumi.Input<number>;
    /**
     * Whether to enable message trace. true: yes; false: no. If this field is not configured, the feature will not be enabled.
     */
    trace?: pulumi.Input<boolean>;
    /**
     * 1: transaction queue; 0: general queue.
     */
    transaction?: pulumi.Input<number>;
    /**
     * Message visibility timeout period. Value range: 1-43200 seconds (i.e., 12 hours). Default value: 30.
     */
    visibilityTimeout?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a TcmqQueue resource.
 */
export interface TcmqQueueArgs {
    /**
     * Dead letter queue name.
     */
    deadLetterQueueName?: pulumi.Input<string>;
    /**
     * First lookback interval.
     */
    firstQueryInterval?: pulumi.Input<number>;
    /**
     * Maximum number of heaped messages. The value range is 1,000,000-10,000,000 during the beta test and can be
     * 1,000,000-1,000,000,000 after the product is officially released. The default value is 10,000,000 during the beta test
     * and will be 100,000,000 after the product is officially released.
     */
    maxMsgHeapNum?: pulumi.Input<number>;
    /**
     * Maximum message length. Value range: 1024-65536 bytes (i.e., 1-64 KB). Default value: 65536.
     */
    maxMsgSize?: pulumi.Input<number>;
    /**
     * Maximum number of lookbacks.
     */
    maxQueryCount?: pulumi.Input<number>;
    /**
     * Maximum receipt times. Value range: 1-1000.
     */
    maxReceiveCount?: pulumi.Input<number>;
    /**
     * Maximum period in seconds before an unconsumed message expires, which is required if `policy` is 1. Value range:
     * 300-43200. This value should be smaller than `msgRetentionSeconds` (maximum message retention period).
     */
    maxTimeToLive?: pulumi.Input<number>;
    /**
     * The max period during which a message is retained before it is automatically acknowledged. Value range: 30-43,200
     * seconds (30 seconds to 12 hours). Default value: 3600 seconds (1 hour).
     */
    msgRetentionSeconds?: pulumi.Input<number>;
    /**
     * Dead letter policy. 0: message has been consumed multiple times but not deleted; 1: `Time-To-Live` has elapsed.
     */
    policy?: pulumi.Input<number>;
    /**
     * Long polling wait time for message reception. Value range: 0-30 seconds. Default value: 0.
     */
    pollingWaitSeconds?: pulumi.Input<number>;
    /**
     * Queue name, which must be unique under the same account in the same region. It can contain up to 64 letters, digits, and
     * hyphens and must begin with a letter.
     */
    queueName: pulumi.Input<string>;
    /**
     * Queue storage space configured for message rewind. Value range: 10,240-512,000 MB (if message rewind is enabled). The
     * value `0` indicates that message rewind is not enabled.
     */
    retentionSizeInMb?: pulumi.Input<number>;
    /**
     * Rewindable time of messages in the queue. Value range: 0-1,296,000s (if message rewind is enabled). The value `0`
     * indicates that message rewind is not enabled.
     */
    rewindSeconds?: pulumi.Input<number>;
    /**
     * Whether to enable message trace. true: yes; false: no. If this field is not configured, the feature will not be enabled.
     */
    trace?: pulumi.Input<boolean>;
    /**
     * 1: transaction queue; 0: general queue.
     */
    transaction?: pulumi.Input<number>;
    /**
     * Message visibility timeout period. Value range: 1-43200 seconds (i.e., 12 hours). Default value: 30.
     */
    visibilityTimeout?: pulumi.Input<number>;
}
