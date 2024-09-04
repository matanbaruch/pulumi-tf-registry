// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class RdsEventSubscription extends pulumi.CustomResource {
    /**
     * Get an existing RdsEventSubscription resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RdsEventSubscriptionState, opts?: pulumi.CustomResourceOptions): RdsEventSubscription {
        return new RdsEventSubscription(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/rdsEventSubscription:RdsEventSubscription';

    /**
     * Returns true if the given object is an instance of RdsEventSubscription.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RdsEventSubscription {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RdsEventSubscription.__pulumiType;
    }

    /**
     * Specifies whether to activate the subscription. If the event notification subscription isn't activated, the subscription
     * is created but not active.
     */
    public readonly enabled!: pulumi.Output<boolean>;
    /**
     * A list of event categories for a particular source type (``SourceType``) that you want to subscribe to. You can see a
     * list of the categories for a given source type in the "Amazon RDS event categories and event messages" section of the
     * [Amazon RDS User Guide](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.Messages.html) or the [Amazon
     * Aurora User Guide](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Events.Messages.html). You can also
     * see this list by using the ``DescribeEventCategories`` operation.
     */
    public readonly eventCategories!: pulumi.Output<string[]>;
    /**
     * The Amazon Resource Name (ARN) of the SNS topic created for event notification. SNS automatically creates the ARN when
     * you create a topic and subscribe to it. RDS doesn't support FIFO (first in, first out) topics. For more information, see
     * [Message ordering and deduplication (FIFO topics)](https://docs.aws.amazon.com/sns/latest/dg/sns-fifo-topics.html) in
     * the *Amazon Simple Notification Service Developer Guide*.
     */
    public readonly snsTopicArn!: pulumi.Output<string>;
    /**
     * The list of identifiers of the event sources for which events are returned. If not specified, then all sources are
     * included in the response. An identifier must begin with a letter and must contain only ASCII letters, digits, and
     * hyphens. It can't end with a hyphen or contain two consecutive hyphens. Constraints: + If ``SourceIds`` are supplied,
     * ``SourceType`` must also be provided. + If the source type is a DB instance, a ``DBInstanceIdentifier`` value must be
     * supplied. + If the source type is a DB cluster, a ``DBClusterIdentifier`` value must be supplied. + If the source type
     * is a DB parameter group, a ``DBParameterGroupName`` value must be supplied. + If the source type is a DB security group,
     * a ``DBSecurityGroupName`` value must be supplied. + If the source type is a DB snapshot, a ``DBSnapshotIdentifier``
     * value must be supplied. + If the source type is a DB cluster snapshot, a ``DBClusterSnapshotIdentifier`` value must be
     * supplied. + If the source type is an RDS Proxy, a ``DBProxyName`` value must be supplied.
     */
    public readonly sourceIds!: pulumi.Output<string[]>;
    /**
     * The type of source that is generating the events. For example, if you want to be notified of events generated by a DB
     * instance, you set this parameter to ``db-instance``. For RDS Proxy events, specify ``db-proxy``. If this value isn't
     * specified, all events are returned. Valid Values:``db-instance | db-cluster | db-parameter-group | db-security-group |
     * db-snapshot | db-cluster-snapshot | db-proxy | zero-etl | custom-engine-version | blue-green-deployment``
     */
    public readonly sourceType!: pulumi.Output<string>;
    /**
     * The name of the subscription. Constraints: The name must be less than 255 characters.
     */
    public readonly subscriptionName!: pulumi.Output<string>;
    /**
     * An optional array of key-value pairs to apply to this subscription.
     */
    public readonly tags!: pulumi.Output<outputs.RdsEventSubscriptionTag[]>;

    /**
     * Create a RdsEventSubscription resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RdsEventSubscriptionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RdsEventSubscriptionArgs | RdsEventSubscriptionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RdsEventSubscriptionState | undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["eventCategories"] = state ? state.eventCategories : undefined;
            resourceInputs["snsTopicArn"] = state ? state.snsTopicArn : undefined;
            resourceInputs["sourceIds"] = state ? state.sourceIds : undefined;
            resourceInputs["sourceType"] = state ? state.sourceType : undefined;
            resourceInputs["subscriptionName"] = state ? state.subscriptionName : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as RdsEventSubscriptionArgs | undefined;
            if ((!args || args.snsTopicArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'snsTopicArn'");
            }
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["eventCategories"] = args ? args.eventCategories : undefined;
            resourceInputs["snsTopicArn"] = args ? args.snsTopicArn : undefined;
            resourceInputs["sourceIds"] = args ? args.sourceIds : undefined;
            resourceInputs["sourceType"] = args ? args.sourceType : undefined;
            resourceInputs["subscriptionName"] = args ? args.subscriptionName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RdsEventSubscription.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RdsEventSubscription resources.
 */
export interface RdsEventSubscriptionState {
    /**
     * Specifies whether to activate the subscription. If the event notification subscription isn't activated, the subscription
     * is created but not active.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * A list of event categories for a particular source type (``SourceType``) that you want to subscribe to. You can see a
     * list of the categories for a given source type in the "Amazon RDS event categories and event messages" section of the
     * [Amazon RDS User Guide](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.Messages.html) or the [Amazon
     * Aurora User Guide](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Events.Messages.html). You can also
     * see this list by using the ``DescribeEventCategories`` operation.
     */
    eventCategories?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Amazon Resource Name (ARN) of the SNS topic created for event notification. SNS automatically creates the ARN when
     * you create a topic and subscribe to it. RDS doesn't support FIFO (first in, first out) topics. For more information, see
     * [Message ordering and deduplication (FIFO topics)](https://docs.aws.amazon.com/sns/latest/dg/sns-fifo-topics.html) in
     * the *Amazon Simple Notification Service Developer Guide*.
     */
    snsTopicArn?: pulumi.Input<string>;
    /**
     * The list of identifiers of the event sources for which events are returned. If not specified, then all sources are
     * included in the response. An identifier must begin with a letter and must contain only ASCII letters, digits, and
     * hyphens. It can't end with a hyphen or contain two consecutive hyphens. Constraints: + If ``SourceIds`` are supplied,
     * ``SourceType`` must also be provided. + If the source type is a DB instance, a ``DBInstanceIdentifier`` value must be
     * supplied. + If the source type is a DB cluster, a ``DBClusterIdentifier`` value must be supplied. + If the source type
     * is a DB parameter group, a ``DBParameterGroupName`` value must be supplied. + If the source type is a DB security group,
     * a ``DBSecurityGroupName`` value must be supplied. + If the source type is a DB snapshot, a ``DBSnapshotIdentifier``
     * value must be supplied. + If the source type is a DB cluster snapshot, a ``DBClusterSnapshotIdentifier`` value must be
     * supplied. + If the source type is an RDS Proxy, a ``DBProxyName`` value must be supplied.
     */
    sourceIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The type of source that is generating the events. For example, if you want to be notified of events generated by a DB
     * instance, you set this parameter to ``db-instance``. For RDS Proxy events, specify ``db-proxy``. If this value isn't
     * specified, all events are returned. Valid Values:``db-instance | db-cluster | db-parameter-group | db-security-group |
     * db-snapshot | db-cluster-snapshot | db-proxy | zero-etl | custom-engine-version | blue-green-deployment``
     */
    sourceType?: pulumi.Input<string>;
    /**
     * The name of the subscription. Constraints: The name must be less than 255 characters.
     */
    subscriptionName?: pulumi.Input<string>;
    /**
     * An optional array of key-value pairs to apply to this subscription.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.RdsEventSubscriptionTag>[]>;
}

/**
 * The set of arguments for constructing a RdsEventSubscription resource.
 */
export interface RdsEventSubscriptionArgs {
    /**
     * Specifies whether to activate the subscription. If the event notification subscription isn't activated, the subscription
     * is created but not active.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * A list of event categories for a particular source type (``SourceType``) that you want to subscribe to. You can see a
     * list of the categories for a given source type in the "Amazon RDS event categories and event messages" section of the
     * [Amazon RDS User Guide](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.Messages.html) or the [Amazon
     * Aurora User Guide](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Events.Messages.html). You can also
     * see this list by using the ``DescribeEventCategories`` operation.
     */
    eventCategories?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Amazon Resource Name (ARN) of the SNS topic created for event notification. SNS automatically creates the ARN when
     * you create a topic and subscribe to it. RDS doesn't support FIFO (first in, first out) topics. For more information, see
     * [Message ordering and deduplication (FIFO topics)](https://docs.aws.amazon.com/sns/latest/dg/sns-fifo-topics.html) in
     * the *Amazon Simple Notification Service Developer Guide*.
     */
    snsTopicArn: pulumi.Input<string>;
    /**
     * The list of identifiers of the event sources for which events are returned. If not specified, then all sources are
     * included in the response. An identifier must begin with a letter and must contain only ASCII letters, digits, and
     * hyphens. It can't end with a hyphen or contain two consecutive hyphens. Constraints: + If ``SourceIds`` are supplied,
     * ``SourceType`` must also be provided. + If the source type is a DB instance, a ``DBInstanceIdentifier`` value must be
     * supplied. + If the source type is a DB cluster, a ``DBClusterIdentifier`` value must be supplied. + If the source type
     * is a DB parameter group, a ``DBParameterGroupName`` value must be supplied. + If the source type is a DB security group,
     * a ``DBSecurityGroupName`` value must be supplied. + If the source type is a DB snapshot, a ``DBSnapshotIdentifier``
     * value must be supplied. + If the source type is a DB cluster snapshot, a ``DBClusterSnapshotIdentifier`` value must be
     * supplied. + If the source type is an RDS Proxy, a ``DBProxyName`` value must be supplied.
     */
    sourceIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The type of source that is generating the events. For example, if you want to be notified of events generated by a DB
     * instance, you set this parameter to ``db-instance``. For RDS Proxy events, specify ``db-proxy``. If this value isn't
     * specified, all events are returned. Valid Values:``db-instance | db-cluster | db-parameter-group | db-security-group |
     * db-snapshot | db-cluster-snapshot | db-proxy | zero-etl | custom-engine-version | blue-green-deployment``
     */
    sourceType?: pulumi.Input<string>;
    /**
     * The name of the subscription. Constraints: The name must be less than 255 characters.
     */
    subscriptionName?: pulumi.Input<string>;
    /**
     * An optional array of key-value pairs to apply to this subscription.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.RdsEventSubscriptionTag>[]>;
}
