// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getMsgVpnDistributedCacheClusterTopic(args: GetMsgVpnDistributedCacheClusterTopicArgs, opts?: pulumi.InvokeOptions): Promise<GetMsgVpnDistributedCacheClusterTopicResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("solacebrokerappliance:index/getMsgVpnDistributedCacheClusterTopic:getMsgVpnDistributedCacheClusterTopic", {
        "cacheName": args.cacheName,
        "clusterName": args.clusterName,
        "msgVpnName": args.msgVpnName,
        "topic": args.topic,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMsgVpnDistributedCacheClusterTopic.
 */
export interface GetMsgVpnDistributedCacheClusterTopicArgs {
    cacheName: string;
    clusterName: string;
    msgVpnName: string;
    topic: string;
}

/**
 * A collection of values returned by getMsgVpnDistributedCacheClusterTopic.
 */
export interface GetMsgVpnDistributedCacheClusterTopicResult {
    readonly cacheName: string;
    readonly clusterName: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly msgVpnName: string;
    readonly topic: string;
}
export function getMsgVpnDistributedCacheClusterTopicOutput(args: GetMsgVpnDistributedCacheClusterTopicOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMsgVpnDistributedCacheClusterTopicResult> {
    return pulumi.output(args).apply((a: any) => getMsgVpnDistributedCacheClusterTopic(a, opts))
}

/**
 * A collection of arguments for invoking getMsgVpnDistributedCacheClusterTopic.
 */
export interface GetMsgVpnDistributedCacheClusterTopicOutputArgs {
    cacheName: pulumi.Input<string>;
    clusterName: pulumi.Input<string>;
    msgVpnName: pulumi.Input<string>;
    topic: pulumi.Input<string>;
}
