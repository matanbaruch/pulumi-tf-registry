// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class MsgVpnTelemetryProfile extends pulumi.CustomResource {
    /**
     * Get an existing MsgVpnTelemetryProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MsgVpnTelemetryProfileState, opts?: pulumi.CustomResourceOptions): MsgVpnTelemetryProfile {
        return new MsgVpnTelemetryProfile(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'solacebroker:index/msgVpnTelemetryProfile:MsgVpnTelemetryProfile';

    /**
     * Returns true if the given object is an instance of MsgVpnTelemetryProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MsgVpnTelemetryProfile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MsgVpnTelemetryProfile.__pulumiType;
    }

    /**
     * The name of the Message VPN.
     */
    public readonly msgVpnName!: pulumi.Output<string>;
    /**
     * The thresholds for the Queue consumer flows event, relative to `queue_max_bind_count`.
     */
    public readonly queueEventBindCountThreshold!: pulumi.Output<outputs.MsgVpnTelemetryProfileQueueEventBindCountThreshold | undefined>;
    /**
     * The thresholds for the message spool usage event of the Queue, relative to `queue_max_msg_spool_usage`.
     */
    public readonly queueEventMsgSpoolUsageThreshold!: pulumi.Output<outputs.MsgVpnTelemetryProfileQueueEventMsgSpoolUsageThreshold | undefined>;
    /**
     * The maximum number of consumer flows that can bind to the Queue. Changes to this attribute are synchronized to HA mates
     * and replication sites via config-sync. The default value is `1000`.
     */
    public readonly queueMaxBindCount!: pulumi.Output<number | undefined>;
    /**
     * The maximum message spool usage allowed by the Queue, in megabytes (MB). Changes to this attribute are synchronized to
     * HA mates and replication sites via config-sync. The default value is `800000`.
     */
    public readonly queueMaxMsgSpoolUsage!: pulumi.Output<number | undefined>;
    /**
     * The default action to take when a receiver client connects to the broker. Changes to this attribute are synchronized to
     * HA mates and replication sites via config-sync. The default value is `"disallow"`. The allowed values and their meaning
     * are: <pre> "allow" - Allow client connection unless an exception is found for it. "disallow" - Disallow client
     * connection unless an exception is found for it. </pre>
     */
    public readonly receiverAclConnectDefaultAction!: pulumi.Output<string | undefined>;
    /**
     * Enable or disable the ability for receiver clients to consume from the #telemetry queue. Changes to this attribute are
     * synchronized to HA mates and replication sites via config-sync. The default value is `false`.
     */
    public readonly receiverEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * The thresholds for the receiver connection count event, relative to `receiver_max_connection_count_per_client_username`.
     */
    public readonly receiverEventConnectionCountPerClientUsernameThreshold!: pulumi.Output<outputs.MsgVpnTelemetryProfileReceiverEventConnectionCountPerClientUsernameThreshold | undefined>;
    /**
     * The maximum number of receiver connections per Client Username. Changes to this attribute are synchronized to HA mates
     * and replication sites via config-sync. The default is the maximum value supported by the platform.
     */
    public readonly receiverMaxConnectionCountPerClientUsername!: pulumi.Output<number | undefined>;
    /**
     * The TCP initial congestion window size for clients using the Client Profile, in multiples of the TCP Maximum Segment
     * Size (MSS). Changing the value from its default of 2 results in non-compliance with RFC 2581. Contact support before
     * changing this value. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The
     * default value is `2`.
     */
    public readonly receiverTcpCongestionWindowSize!: pulumi.Output<number | undefined>;
    /**
     * The number of TCP keepalive retransmissions to a client using the Client Profile before declaring that it is not
     * available. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default
     * value is `5`.
     */
    public readonly receiverTcpKeepaliveCount!: pulumi.Output<number | undefined>;
    /**
     * The amount of time a client connection using the Client Profile must remain idle before TCP begins sending keepalive
     * probes, in seconds. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The
     * default value is `3`.
     */
    public readonly receiverTcpKeepaliveIdleTime!: pulumi.Output<number | undefined>;
    /**
     * The amount of time between TCP keepalive retransmissions to a client using the Client Profile when no acknowledgment is
     * received, in seconds. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The
     * default value is `1`.
     */
    public readonly receiverTcpKeepaliveInterval!: pulumi.Output<number | undefined>;
    /**
     * The TCP maximum segment size for clients using the Client Profile, in bytes. Changes are applied to all existing
     * connections. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default
     * value is `1460`.
     */
    public readonly receiverTcpMaxSegmentSize!: pulumi.Output<number | undefined>;
    /**
     * The TCP maximum window size for clients using the Client Profile, in kilobytes. Changes are applied to all existing
     * connections. This setting is ignored on the software broker. Changes to this attribute are synchronized to HA mates and
     * replication sites via config-sync. The default value is `256`.
     */
    public readonly receiverTcpMaxWindowSize!: pulumi.Output<number | undefined>;
    /**
     * The name of the Telemetry Profile.
     */
    public readonly telemetryProfileName!: pulumi.Output<string>;
    /**
     * Enable or disable generation of all trace span data messages. When enabled, the state of configured trace filters
     * control which messages get traced. When disabled, trace span data messages are never generated, regardless of the state
     * of trace filters. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The
     * default value is `false`.
     */
    public readonly traceEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * Enable or disable generation of send spans. For the most complete view of broker message processing, this should be
     * enabled. If the information provided by send spans are not needed, send spans can be disabled to reduce the performance
     * impact of tracing. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The
     * default value is `true`. Available since SEMP API version 2.36.
     */
    public readonly traceSendSpanGenerationEnabled!: pulumi.Output<boolean | undefined>;

    /**
     * Create a MsgVpnTelemetryProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MsgVpnTelemetryProfileArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MsgVpnTelemetryProfileArgs | MsgVpnTelemetryProfileState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MsgVpnTelemetryProfileState | undefined;
            resourceInputs["msgVpnName"] = state ? state.msgVpnName : undefined;
            resourceInputs["queueEventBindCountThreshold"] = state ? state.queueEventBindCountThreshold : undefined;
            resourceInputs["queueEventMsgSpoolUsageThreshold"] = state ? state.queueEventMsgSpoolUsageThreshold : undefined;
            resourceInputs["queueMaxBindCount"] = state ? state.queueMaxBindCount : undefined;
            resourceInputs["queueMaxMsgSpoolUsage"] = state ? state.queueMaxMsgSpoolUsage : undefined;
            resourceInputs["receiverAclConnectDefaultAction"] = state ? state.receiverAclConnectDefaultAction : undefined;
            resourceInputs["receiverEnabled"] = state ? state.receiverEnabled : undefined;
            resourceInputs["receiverEventConnectionCountPerClientUsernameThreshold"] = state ? state.receiverEventConnectionCountPerClientUsernameThreshold : undefined;
            resourceInputs["receiverMaxConnectionCountPerClientUsername"] = state ? state.receiverMaxConnectionCountPerClientUsername : undefined;
            resourceInputs["receiverTcpCongestionWindowSize"] = state ? state.receiverTcpCongestionWindowSize : undefined;
            resourceInputs["receiverTcpKeepaliveCount"] = state ? state.receiverTcpKeepaliveCount : undefined;
            resourceInputs["receiverTcpKeepaliveIdleTime"] = state ? state.receiverTcpKeepaliveIdleTime : undefined;
            resourceInputs["receiverTcpKeepaliveInterval"] = state ? state.receiverTcpKeepaliveInterval : undefined;
            resourceInputs["receiverTcpMaxSegmentSize"] = state ? state.receiverTcpMaxSegmentSize : undefined;
            resourceInputs["receiverTcpMaxWindowSize"] = state ? state.receiverTcpMaxWindowSize : undefined;
            resourceInputs["telemetryProfileName"] = state ? state.telemetryProfileName : undefined;
            resourceInputs["traceEnabled"] = state ? state.traceEnabled : undefined;
            resourceInputs["traceSendSpanGenerationEnabled"] = state ? state.traceSendSpanGenerationEnabled : undefined;
        } else {
            const args = argsOrState as MsgVpnTelemetryProfileArgs | undefined;
            if ((!args || args.msgVpnName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'msgVpnName'");
            }
            if ((!args || args.telemetryProfileName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'telemetryProfileName'");
            }
            resourceInputs["msgVpnName"] = args ? args.msgVpnName : undefined;
            resourceInputs["queueEventBindCountThreshold"] = args ? args.queueEventBindCountThreshold : undefined;
            resourceInputs["queueEventMsgSpoolUsageThreshold"] = args ? args.queueEventMsgSpoolUsageThreshold : undefined;
            resourceInputs["queueMaxBindCount"] = args ? args.queueMaxBindCount : undefined;
            resourceInputs["queueMaxMsgSpoolUsage"] = args ? args.queueMaxMsgSpoolUsage : undefined;
            resourceInputs["receiverAclConnectDefaultAction"] = args ? args.receiverAclConnectDefaultAction : undefined;
            resourceInputs["receiverEnabled"] = args ? args.receiverEnabled : undefined;
            resourceInputs["receiverEventConnectionCountPerClientUsernameThreshold"] = args ? args.receiverEventConnectionCountPerClientUsernameThreshold : undefined;
            resourceInputs["receiverMaxConnectionCountPerClientUsername"] = args ? args.receiverMaxConnectionCountPerClientUsername : undefined;
            resourceInputs["receiverTcpCongestionWindowSize"] = args ? args.receiverTcpCongestionWindowSize : undefined;
            resourceInputs["receiverTcpKeepaliveCount"] = args ? args.receiverTcpKeepaliveCount : undefined;
            resourceInputs["receiverTcpKeepaliveIdleTime"] = args ? args.receiverTcpKeepaliveIdleTime : undefined;
            resourceInputs["receiverTcpKeepaliveInterval"] = args ? args.receiverTcpKeepaliveInterval : undefined;
            resourceInputs["receiverTcpMaxSegmentSize"] = args ? args.receiverTcpMaxSegmentSize : undefined;
            resourceInputs["receiverTcpMaxWindowSize"] = args ? args.receiverTcpMaxWindowSize : undefined;
            resourceInputs["telemetryProfileName"] = args ? args.telemetryProfileName : undefined;
            resourceInputs["traceEnabled"] = args ? args.traceEnabled : undefined;
            resourceInputs["traceSendSpanGenerationEnabled"] = args ? args.traceSendSpanGenerationEnabled : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MsgVpnTelemetryProfile.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MsgVpnTelemetryProfile resources.
 */
export interface MsgVpnTelemetryProfileState {
    /**
     * The name of the Message VPN.
     */
    msgVpnName?: pulumi.Input<string>;
    /**
     * The thresholds for the Queue consumer flows event, relative to `queue_max_bind_count`.
     */
    queueEventBindCountThreshold?: pulumi.Input<inputs.MsgVpnTelemetryProfileQueueEventBindCountThreshold>;
    /**
     * The thresholds for the message spool usage event of the Queue, relative to `queue_max_msg_spool_usage`.
     */
    queueEventMsgSpoolUsageThreshold?: pulumi.Input<inputs.MsgVpnTelemetryProfileQueueEventMsgSpoolUsageThreshold>;
    /**
     * The maximum number of consumer flows that can bind to the Queue. Changes to this attribute are synchronized to HA mates
     * and replication sites via config-sync. The default value is `1000`.
     */
    queueMaxBindCount?: pulumi.Input<number>;
    /**
     * The maximum message spool usage allowed by the Queue, in megabytes (MB). Changes to this attribute are synchronized to
     * HA mates and replication sites via config-sync. The default value is `800000`.
     */
    queueMaxMsgSpoolUsage?: pulumi.Input<number>;
    /**
     * The default action to take when a receiver client connects to the broker. Changes to this attribute are synchronized to
     * HA mates and replication sites via config-sync. The default value is `"disallow"`. The allowed values and their meaning
     * are: <pre> "allow" - Allow client connection unless an exception is found for it. "disallow" - Disallow client
     * connection unless an exception is found for it. </pre>
     */
    receiverAclConnectDefaultAction?: pulumi.Input<string>;
    /**
     * Enable or disable the ability for receiver clients to consume from the #telemetry queue. Changes to this attribute are
     * synchronized to HA mates and replication sites via config-sync. The default value is `false`.
     */
    receiverEnabled?: pulumi.Input<boolean>;
    /**
     * The thresholds for the receiver connection count event, relative to `receiver_max_connection_count_per_client_username`.
     */
    receiverEventConnectionCountPerClientUsernameThreshold?: pulumi.Input<inputs.MsgVpnTelemetryProfileReceiverEventConnectionCountPerClientUsernameThreshold>;
    /**
     * The maximum number of receiver connections per Client Username. Changes to this attribute are synchronized to HA mates
     * and replication sites via config-sync. The default is the maximum value supported by the platform.
     */
    receiverMaxConnectionCountPerClientUsername?: pulumi.Input<number>;
    /**
     * The TCP initial congestion window size for clients using the Client Profile, in multiples of the TCP Maximum Segment
     * Size (MSS). Changing the value from its default of 2 results in non-compliance with RFC 2581. Contact support before
     * changing this value. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The
     * default value is `2`.
     */
    receiverTcpCongestionWindowSize?: pulumi.Input<number>;
    /**
     * The number of TCP keepalive retransmissions to a client using the Client Profile before declaring that it is not
     * available. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default
     * value is `5`.
     */
    receiverTcpKeepaliveCount?: pulumi.Input<number>;
    /**
     * The amount of time a client connection using the Client Profile must remain idle before TCP begins sending keepalive
     * probes, in seconds. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The
     * default value is `3`.
     */
    receiverTcpKeepaliveIdleTime?: pulumi.Input<number>;
    /**
     * The amount of time between TCP keepalive retransmissions to a client using the Client Profile when no acknowledgment is
     * received, in seconds. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The
     * default value is `1`.
     */
    receiverTcpKeepaliveInterval?: pulumi.Input<number>;
    /**
     * The TCP maximum segment size for clients using the Client Profile, in bytes. Changes are applied to all existing
     * connections. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default
     * value is `1460`.
     */
    receiverTcpMaxSegmentSize?: pulumi.Input<number>;
    /**
     * The TCP maximum window size for clients using the Client Profile, in kilobytes. Changes are applied to all existing
     * connections. This setting is ignored on the software broker. Changes to this attribute are synchronized to HA mates and
     * replication sites via config-sync. The default value is `256`.
     */
    receiverTcpMaxWindowSize?: pulumi.Input<number>;
    /**
     * The name of the Telemetry Profile.
     */
    telemetryProfileName?: pulumi.Input<string>;
    /**
     * Enable or disable generation of all trace span data messages. When enabled, the state of configured trace filters
     * control which messages get traced. When disabled, trace span data messages are never generated, regardless of the state
     * of trace filters. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The
     * default value is `false`.
     */
    traceEnabled?: pulumi.Input<boolean>;
    /**
     * Enable or disable generation of send spans. For the most complete view of broker message processing, this should be
     * enabled. If the information provided by send spans are not needed, send spans can be disabled to reduce the performance
     * impact of tracing. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The
     * default value is `true`. Available since SEMP API version 2.36.
     */
    traceSendSpanGenerationEnabled?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a MsgVpnTelemetryProfile resource.
 */
export interface MsgVpnTelemetryProfileArgs {
    /**
     * The name of the Message VPN.
     */
    msgVpnName: pulumi.Input<string>;
    /**
     * The thresholds for the Queue consumer flows event, relative to `queue_max_bind_count`.
     */
    queueEventBindCountThreshold?: pulumi.Input<inputs.MsgVpnTelemetryProfileQueueEventBindCountThreshold>;
    /**
     * The thresholds for the message spool usage event of the Queue, relative to `queue_max_msg_spool_usage`.
     */
    queueEventMsgSpoolUsageThreshold?: pulumi.Input<inputs.MsgVpnTelemetryProfileQueueEventMsgSpoolUsageThreshold>;
    /**
     * The maximum number of consumer flows that can bind to the Queue. Changes to this attribute are synchronized to HA mates
     * and replication sites via config-sync. The default value is `1000`.
     */
    queueMaxBindCount?: pulumi.Input<number>;
    /**
     * The maximum message spool usage allowed by the Queue, in megabytes (MB). Changes to this attribute are synchronized to
     * HA mates and replication sites via config-sync. The default value is `800000`.
     */
    queueMaxMsgSpoolUsage?: pulumi.Input<number>;
    /**
     * The default action to take when a receiver client connects to the broker. Changes to this attribute are synchronized to
     * HA mates and replication sites via config-sync. The default value is `"disallow"`. The allowed values and their meaning
     * are: <pre> "allow" - Allow client connection unless an exception is found for it. "disallow" - Disallow client
     * connection unless an exception is found for it. </pre>
     */
    receiverAclConnectDefaultAction?: pulumi.Input<string>;
    /**
     * Enable or disable the ability for receiver clients to consume from the #telemetry queue. Changes to this attribute are
     * synchronized to HA mates and replication sites via config-sync. The default value is `false`.
     */
    receiverEnabled?: pulumi.Input<boolean>;
    /**
     * The thresholds for the receiver connection count event, relative to `receiver_max_connection_count_per_client_username`.
     */
    receiverEventConnectionCountPerClientUsernameThreshold?: pulumi.Input<inputs.MsgVpnTelemetryProfileReceiverEventConnectionCountPerClientUsernameThreshold>;
    /**
     * The maximum number of receiver connections per Client Username. Changes to this attribute are synchronized to HA mates
     * and replication sites via config-sync. The default is the maximum value supported by the platform.
     */
    receiverMaxConnectionCountPerClientUsername?: pulumi.Input<number>;
    /**
     * The TCP initial congestion window size for clients using the Client Profile, in multiples of the TCP Maximum Segment
     * Size (MSS). Changing the value from its default of 2 results in non-compliance with RFC 2581. Contact support before
     * changing this value. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The
     * default value is `2`.
     */
    receiverTcpCongestionWindowSize?: pulumi.Input<number>;
    /**
     * The number of TCP keepalive retransmissions to a client using the Client Profile before declaring that it is not
     * available. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default
     * value is `5`.
     */
    receiverTcpKeepaliveCount?: pulumi.Input<number>;
    /**
     * The amount of time a client connection using the Client Profile must remain idle before TCP begins sending keepalive
     * probes, in seconds. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The
     * default value is `3`.
     */
    receiverTcpKeepaliveIdleTime?: pulumi.Input<number>;
    /**
     * The amount of time between TCP keepalive retransmissions to a client using the Client Profile when no acknowledgment is
     * received, in seconds. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The
     * default value is `1`.
     */
    receiverTcpKeepaliveInterval?: pulumi.Input<number>;
    /**
     * The TCP maximum segment size for clients using the Client Profile, in bytes. Changes are applied to all existing
     * connections. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default
     * value is `1460`.
     */
    receiverTcpMaxSegmentSize?: pulumi.Input<number>;
    /**
     * The TCP maximum window size for clients using the Client Profile, in kilobytes. Changes are applied to all existing
     * connections. This setting is ignored on the software broker. Changes to this attribute are synchronized to HA mates and
     * replication sites via config-sync. The default value is `256`.
     */
    receiverTcpMaxWindowSize?: pulumi.Input<number>;
    /**
     * The name of the Telemetry Profile.
     */
    telemetryProfileName: pulumi.Input<string>;
    /**
     * Enable or disable generation of all trace span data messages. When enabled, the state of configured trace filters
     * control which messages get traced. When disabled, trace span data messages are never generated, regardless of the state
     * of trace filters. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The
     * default value is `false`.
     */
    traceEnabled?: pulumi.Input<boolean>;
    /**
     * Enable or disable generation of send spans. For the most complete view of broker message processing, this should be
     * enabled. If the information provided by send spans are not needed, send spans can be disabled to reduce the performance
     * impact of tracing. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The
     * default value is `true`. Available since SEMP API version 2.36.
     */
    traceSendSpanGenerationEnabled?: pulumi.Input<boolean>;
}
