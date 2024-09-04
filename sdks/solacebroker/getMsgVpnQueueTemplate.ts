// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getMsgVpnQueueTemplate(args: GetMsgVpnQueueTemplateArgs, opts?: pulumi.InvokeOptions): Promise<GetMsgVpnQueueTemplateResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("solacebroker:index/getMsgVpnQueueTemplate:getMsgVpnQueueTemplate", {
        "msgVpnName": args.msgVpnName,
        "queueTemplateName": args.queueTemplateName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMsgVpnQueueTemplate.
 */
export interface GetMsgVpnQueueTemplateArgs {
    msgVpnName: string;
    queueTemplateName: string;
}

/**
 * A collection of values returned by getMsgVpnQueueTemplate.
 */
export interface GetMsgVpnQueueTemplateResult {
    readonly accessType: string;
    readonly consumerAckPropagationEnabled: boolean;
    readonly deadMsgQueue: string;
    readonly deliveryDelay: number;
    readonly durabilityOverride: string;
    readonly eventBindCountThreshold: outputs.GetMsgVpnQueueTemplateEventBindCountThreshold;
    readonly eventMsgSpoolUsageThreshold: outputs.GetMsgVpnQueueTemplateEventMsgSpoolUsageThreshold;
    readonly eventRejectLowPriorityMsgLimitThreshold: outputs.GetMsgVpnQueueTemplateEventRejectLowPriorityMsgLimitThreshold;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly maxBindCount: number;
    readonly maxDeliveredUnackedMsgsPerFlow: number;
    readonly maxMsgSize: number;
    readonly maxMsgSpoolUsage: number;
    readonly maxRedeliveryCount: number;
    readonly maxTtl: number;
    readonly msgVpnName: string;
    readonly permission: string;
    readonly queueNameFilter: string;
    readonly queueTemplateName: string;
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
}
export function getMsgVpnQueueTemplateOutput(args: GetMsgVpnQueueTemplateOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMsgVpnQueueTemplateResult> {
    return pulumi.output(args).apply((a: any) => getMsgVpnQueueTemplate(a, opts))
}

/**
 * A collection of arguments for invoking getMsgVpnQueueTemplate.
 */
export interface GetMsgVpnQueueTemplateOutputArgs {
    msgVpnName: pulumi.Input<string>;
    queueTemplateName: pulumi.Input<string>;
}
