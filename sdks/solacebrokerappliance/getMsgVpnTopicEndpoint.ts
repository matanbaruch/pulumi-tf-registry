// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getMsgVpnTopicEndpoint(args: GetMsgVpnTopicEndpointArgs, opts?: pulumi.InvokeOptions): Promise<GetMsgVpnTopicEndpointResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("solacebrokerappliance:index/getMsgVpnTopicEndpoint:getMsgVpnTopicEndpoint", {
        "msgVpnName": args.msgVpnName,
        "topicEndpointName": args.topicEndpointName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMsgVpnTopicEndpoint.
 */
export interface GetMsgVpnTopicEndpointArgs {
    msgVpnName: string;
    topicEndpointName: string;
}

/**
 * A collection of values returned by getMsgVpnTopicEndpoint.
 */
export interface GetMsgVpnTopicEndpointResult {
    readonly accessType: string;
    readonly consumerAckPropagationEnabled: boolean;
    readonly deadMsgQueue: string;
    readonly deliveryCountEnabled: boolean;
    readonly deliveryDelay: number;
    readonly egressEnabled: boolean;
    readonly eventBindCountThreshold: outputs.GetMsgVpnTopicEndpointEventBindCountThreshold;
    readonly eventRejectLowPriorityMsgLimitThreshold: outputs.GetMsgVpnTopicEndpointEventRejectLowPriorityMsgLimitThreshold;
    readonly eventSpoolUsageThreshold: outputs.GetMsgVpnTopicEndpointEventSpoolUsageThreshold;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly ingressEnabled: boolean;
    readonly maxBindCount: number;
    readonly maxDeliveredUnackedMsgsPerFlow: number;
    readonly maxMsgSize: number;
    readonly maxRedeliveryCount: number;
    readonly maxSpoolUsage: number;
    readonly maxTtl: number;
    readonly msgVpnName: string;
    readonly owner: string;
    readonly permission: string;
    readonly redeliveryDelayEnabled: boolean;
    readonly redeliveryDelayInitialInterval: number;
    readonly redeliveryDelayMaxInterval: number;
    readonly redeliveryDelayMultiplier: number;
    readonly redeliveryEnabled: boolean;
    readonly rejectLowPriorityMsgEnabled: boolean;
    readonly rejectLowPriorityMsgLimit: number;
    readonly rejectMsgToSenderOnDiscardBehavior: string;
    readonly respectMsgPriorityEnabled: boolean;
    readonly respectTtlEnabled: boolean;
    readonly topicEndpointName: string;
}
export function getMsgVpnTopicEndpointOutput(args: GetMsgVpnTopicEndpointOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMsgVpnTopicEndpointResult> {
    return pulumi.output(args).apply((a: any) => getMsgVpnTopicEndpoint(a, opts))
}

/**
 * A collection of arguments for invoking getMsgVpnTopicEndpoint.
 */
export interface GetMsgVpnTopicEndpointOutputArgs {
    msgVpnName: pulumi.Input<string>;
    topicEndpointName: pulumi.Input<string>;
}
