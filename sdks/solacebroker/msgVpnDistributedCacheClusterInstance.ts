// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class MsgVpnDistributedCacheClusterInstance extends pulumi.CustomResource {
    /**
     * Get an existing MsgVpnDistributedCacheClusterInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MsgVpnDistributedCacheClusterInstanceState, opts?: pulumi.CustomResourceOptions): MsgVpnDistributedCacheClusterInstance {
        return new MsgVpnDistributedCacheClusterInstance(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'solacebroker:index/msgVpnDistributedCacheClusterInstance:MsgVpnDistributedCacheClusterInstance';

    /**
     * Returns true if the given object is an instance of MsgVpnDistributedCacheClusterInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MsgVpnDistributedCacheClusterInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MsgVpnDistributedCacheClusterInstance.__pulumiType;
    }

    /**
     * Enable or disable auto-start for the Cache Instance. When enabled, the Cache Instance will automatically attempt to
     * transition from the Stopped operational state to Up whenever it restarts or reconnects to the message broker. Changes to
     * this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
     */
    public readonly autoStartEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * The name of the Distributed Cache.
     */
    public readonly cacheName!: pulumi.Output<string>;
    /**
     * The name of the Cache Cluster.
     */
    public readonly clusterName!: pulumi.Output<string>;
    /**
     * Enable or disable the Cache Instance. Changes to this attribute are synchronized to HA mates and replication sites via
     * config-sync. The default value is `false`.
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * The name of the Cache Instance.
     */
    public readonly instanceName!: pulumi.Output<string>;
    /**
     * The name of the Message VPN.
     */
    public readonly msgVpnName!: pulumi.Output<string>;
    /**
     * Enable or disable stop-on-lost-message for the Cache Instance. When enabled, the Cache Instance will transition to the
     * stopped operational state upon losing a message. When stopped, it cannot accept or respond to cache requests, but
     * continues to cache messages. Changes to this attribute are synchronized to HA mates and replication sites via
     * config-sync. The default value is `true`.
     */
    public readonly stopOnLostMsgEnabled!: pulumi.Output<boolean | undefined>;

    /**
     * Create a MsgVpnDistributedCacheClusterInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MsgVpnDistributedCacheClusterInstanceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MsgVpnDistributedCacheClusterInstanceArgs | MsgVpnDistributedCacheClusterInstanceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MsgVpnDistributedCacheClusterInstanceState | undefined;
            resourceInputs["autoStartEnabled"] = state ? state.autoStartEnabled : undefined;
            resourceInputs["cacheName"] = state ? state.cacheName : undefined;
            resourceInputs["clusterName"] = state ? state.clusterName : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["instanceName"] = state ? state.instanceName : undefined;
            resourceInputs["msgVpnName"] = state ? state.msgVpnName : undefined;
            resourceInputs["stopOnLostMsgEnabled"] = state ? state.stopOnLostMsgEnabled : undefined;
        } else {
            const args = argsOrState as MsgVpnDistributedCacheClusterInstanceArgs | undefined;
            if ((!args || args.cacheName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cacheName'");
            }
            if ((!args || args.clusterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterName'");
            }
            if ((!args || args.instanceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceName'");
            }
            if ((!args || args.msgVpnName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'msgVpnName'");
            }
            resourceInputs["autoStartEnabled"] = args ? args.autoStartEnabled : undefined;
            resourceInputs["cacheName"] = args ? args.cacheName : undefined;
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["instanceName"] = args ? args.instanceName : undefined;
            resourceInputs["msgVpnName"] = args ? args.msgVpnName : undefined;
            resourceInputs["stopOnLostMsgEnabled"] = args ? args.stopOnLostMsgEnabled : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MsgVpnDistributedCacheClusterInstance.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MsgVpnDistributedCacheClusterInstance resources.
 */
export interface MsgVpnDistributedCacheClusterInstanceState {
    /**
     * Enable or disable auto-start for the Cache Instance. When enabled, the Cache Instance will automatically attempt to
     * transition from the Stopped operational state to Up whenever it restarts or reconnects to the message broker. Changes to
     * this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
     */
    autoStartEnabled?: pulumi.Input<boolean>;
    /**
     * The name of the Distributed Cache.
     */
    cacheName?: pulumi.Input<string>;
    /**
     * The name of the Cache Cluster.
     */
    clusterName?: pulumi.Input<string>;
    /**
     * Enable or disable the Cache Instance. Changes to this attribute are synchronized to HA mates and replication sites via
     * config-sync. The default value is `false`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The name of the Cache Instance.
     */
    instanceName?: pulumi.Input<string>;
    /**
     * The name of the Message VPN.
     */
    msgVpnName?: pulumi.Input<string>;
    /**
     * Enable or disable stop-on-lost-message for the Cache Instance. When enabled, the Cache Instance will transition to the
     * stopped operational state upon losing a message. When stopped, it cannot accept or respond to cache requests, but
     * continues to cache messages. Changes to this attribute are synchronized to HA mates and replication sites via
     * config-sync. The default value is `true`.
     */
    stopOnLostMsgEnabled?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a MsgVpnDistributedCacheClusterInstance resource.
 */
export interface MsgVpnDistributedCacheClusterInstanceArgs {
    /**
     * Enable or disable auto-start for the Cache Instance. When enabled, the Cache Instance will automatically attempt to
     * transition from the Stopped operational state to Up whenever it restarts or reconnects to the message broker. Changes to
     * this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
     */
    autoStartEnabled?: pulumi.Input<boolean>;
    /**
     * The name of the Distributed Cache.
     */
    cacheName: pulumi.Input<string>;
    /**
     * The name of the Cache Cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * Enable or disable the Cache Instance. Changes to this attribute are synchronized to HA mates and replication sites via
     * config-sync. The default value is `false`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The name of the Cache Instance.
     */
    instanceName: pulumi.Input<string>;
    /**
     * The name of the Message VPN.
     */
    msgVpnName: pulumi.Input<string>;
    /**
     * Enable or disable stop-on-lost-message for the Cache Instance. When enabled, the Cache Instance will transition to the
     * stopped operational state upon losing a message. When stopped, it cannot accept or respond to cache requests, but
     * continues to cache messages. Changes to this attribute are synchronized to HA mates and replication sites via
     * config-sync. The default value is `true`.
     */
    stopOnLostMsgEnabled?: pulumi.Input<boolean>;
}
