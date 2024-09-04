// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class MsgVpnDistributedCacheClusterGlobalCachingHomeCluster extends pulumi.CustomResource {
    /**
     * Get an existing MsgVpnDistributedCacheClusterGlobalCachingHomeCluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MsgVpnDistributedCacheClusterGlobalCachingHomeClusterState, opts?: pulumi.CustomResourceOptions): MsgVpnDistributedCacheClusterGlobalCachingHomeCluster {
        return new MsgVpnDistributedCacheClusterGlobalCachingHomeCluster(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'solacebrokerappliance:index/msgVpnDistributedCacheClusterGlobalCachingHomeCluster:MsgVpnDistributedCacheClusterGlobalCachingHomeCluster';

    /**
     * Returns true if the given object is an instance of MsgVpnDistributedCacheClusterGlobalCachingHomeCluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MsgVpnDistributedCacheClusterGlobalCachingHomeCluster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MsgVpnDistributedCacheClusterGlobalCachingHomeCluster.__pulumiType;
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
     * Create a MsgVpnDistributedCacheClusterGlobalCachingHomeCluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MsgVpnDistributedCacheClusterGlobalCachingHomeClusterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MsgVpnDistributedCacheClusterGlobalCachingHomeClusterArgs | MsgVpnDistributedCacheClusterGlobalCachingHomeClusterState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MsgVpnDistributedCacheClusterGlobalCachingHomeClusterState | undefined;
            resourceInputs["cacheName"] = state ? state.cacheName : undefined;
            resourceInputs["clusterName"] = state ? state.clusterName : undefined;
            resourceInputs["homeClusterName"] = state ? state.homeClusterName : undefined;
            resourceInputs["msgVpnName"] = state ? state.msgVpnName : undefined;
        } else {
            const args = argsOrState as MsgVpnDistributedCacheClusterGlobalCachingHomeClusterArgs | undefined;
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
            resourceInputs["cacheName"] = args ? args.cacheName : undefined;
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["homeClusterName"] = args ? args.homeClusterName : undefined;
            resourceInputs["msgVpnName"] = args ? args.msgVpnName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MsgVpnDistributedCacheClusterGlobalCachingHomeCluster.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MsgVpnDistributedCacheClusterGlobalCachingHomeCluster resources.
 */
export interface MsgVpnDistributedCacheClusterGlobalCachingHomeClusterState {
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
}

/**
 * The set of arguments for constructing a MsgVpnDistributedCacheClusterGlobalCachingHomeCluster resource.
 */
export interface MsgVpnDistributedCacheClusterGlobalCachingHomeClusterArgs {
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
}
