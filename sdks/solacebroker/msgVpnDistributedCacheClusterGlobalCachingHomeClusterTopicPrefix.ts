// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefix extends pulumi.CustomResource {
    /**
     * Get an existing MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefix resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixState, opts?: pulumi.CustomResourceOptions): MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefix {
        return new MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefix(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'solacebroker:index/msgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefix:MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefix';

    /**
     * Returns true if the given object is an instance of MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefix.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefix {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefix.__pulumiType;
    }

    /**
     * The name of the Distributed Cache.
     */
    public readonly cacheName!: pulumi.Output<string>;
    /**
     * The name of the Cache Cluster.
     */
    public readonly clusterName!: pulumi.Output<string>;
    /**
     * The name of the remote Home Cache Cluster.
     */
    public readonly homeClusterName!: pulumi.Output<string>;
    /**
     * The name of the Message VPN.
     */
    public readonly msgVpnName!: pulumi.Output<string>;
    /**
     * A topic prefix for global topics available from the remote Home Cache Cluster. A wildcard (/&gt;) is implied at the end
     * of the prefix.
     */
    public readonly topicPrefix!: pulumi.Output<string>;

    /**
     * Create a MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefix resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixArgs | MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixState | undefined;
            resourceInputs["cacheName"] = state ? state.cacheName : undefined;
            resourceInputs["clusterName"] = state ? state.clusterName : undefined;
            resourceInputs["homeClusterName"] = state ? state.homeClusterName : undefined;
            resourceInputs["msgVpnName"] = state ? state.msgVpnName : undefined;
            resourceInputs["topicPrefix"] = state ? state.topicPrefix : undefined;
        } else {
            const args = argsOrState as MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixArgs | undefined;
            if ((!args || args.cacheName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cacheName'");
            }
            if ((!args || args.clusterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterName'");
            }
            if ((!args || args.homeClusterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'homeClusterName'");
            }
            if ((!args || args.msgVpnName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'msgVpnName'");
            }
            if ((!args || args.topicPrefix === undefined) && !opts.urn) {
                throw new Error("Missing required property 'topicPrefix'");
            }
            resourceInputs["cacheName"] = args ? args.cacheName : undefined;
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["homeClusterName"] = args ? args.homeClusterName : undefined;
            resourceInputs["msgVpnName"] = args ? args.msgVpnName : undefined;
            resourceInputs["topicPrefix"] = args ? args.topicPrefix : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefix.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefix resources.
 */
export interface MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixState {
    /**
     * The name of the Distributed Cache.
     */
    cacheName?: pulumi.Input<string>;
    /**
     * The name of the Cache Cluster.
     */
    clusterName?: pulumi.Input<string>;
    /**
     * The name of the remote Home Cache Cluster.
     */
    homeClusterName?: pulumi.Input<string>;
    /**
     * The name of the Message VPN.
     */
    msgVpnName?: pulumi.Input<string>;
    /**
     * A topic prefix for global topics available from the remote Home Cache Cluster. A wildcard (/&gt;) is implied at the end
     * of the prefix.
     */
    topicPrefix?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefix resource.
 */
export interface MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixArgs {
    /**
     * The name of the Distributed Cache.
     */
    cacheName: pulumi.Input<string>;
    /**
     * The name of the Cache Cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the remote Home Cache Cluster.
     */
    homeClusterName: pulumi.Input<string>;
    /**
     * The name of the Message VPN.
     */
    msgVpnName: pulumi.Input<string>;
    /**
     * A topic prefix for global topics available from the remote Home Cache Cluster. A wildcard (/&gt;) is implied at the end
     * of the prefix.
     */
    topicPrefix: pulumi.Input<string>;
}
