// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class MsgVpnMqttRetainCache extends pulumi.CustomResource {
    /**
     * Get an existing MsgVpnMqttRetainCache resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MsgVpnMqttRetainCacheState, opts?: pulumi.CustomResourceOptions): MsgVpnMqttRetainCache {
        return new MsgVpnMqttRetainCache(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'solacebroker:index/msgVpnMqttRetainCache:MsgVpnMqttRetainCache';

    /**
     * Returns true if the given object is an instance of MsgVpnMqttRetainCache.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MsgVpnMqttRetainCache {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MsgVpnMqttRetainCache.__pulumiType;
    }

    /**
     * The name of the MQTT Retain Cache.
     */
    public readonly cacheName!: pulumi.Output<string>;
    /**
     * Enable or disable this MQTT Retain Cache. When the cache is disabled, neither retain messages nor retain requests will
     * be delivered by the cache. However, live retain messages will continue to be delivered to currently connected MQTT
     * clients. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value
     * is `false`.
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * The message lifetime, in seconds. If a message remains cached for the duration of its lifetime, the cache will remove
     * the message. A lifetime of 0 results in the message being retained indefinitely, otherwise it must be 3 seconds or more.
     * Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`.
     */
    public readonly msgLifetime!: pulumi.Output<number | undefined>;
    /**
     * The name of the Message VPN.
     */
    public readonly msgVpnName!: pulumi.Output<string>;

    /**
     * Create a MsgVpnMqttRetainCache resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MsgVpnMqttRetainCacheArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MsgVpnMqttRetainCacheArgs | MsgVpnMqttRetainCacheState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MsgVpnMqttRetainCacheState | undefined;
            resourceInputs["cacheName"] = state ? state.cacheName : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["msgLifetime"] = state ? state.msgLifetime : undefined;
            resourceInputs["msgVpnName"] = state ? state.msgVpnName : undefined;
        } else {
            const args = argsOrState as MsgVpnMqttRetainCacheArgs | undefined;
            if ((!args || args.cacheName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cacheName'");
            }
            if ((!args || args.msgVpnName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'msgVpnName'");
            }
            resourceInputs["cacheName"] = args ? args.cacheName : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["msgLifetime"] = args ? args.msgLifetime : undefined;
            resourceInputs["msgVpnName"] = args ? args.msgVpnName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MsgVpnMqttRetainCache.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MsgVpnMqttRetainCache resources.
 */
export interface MsgVpnMqttRetainCacheState {
    /**
     * The name of the MQTT Retain Cache.
     */
    cacheName?: pulumi.Input<string>;
    /**
     * Enable or disable this MQTT Retain Cache. When the cache is disabled, neither retain messages nor retain requests will
     * be delivered by the cache. However, live retain messages will continue to be delivered to currently connected MQTT
     * clients. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value
     * is `false`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The message lifetime, in seconds. If a message remains cached for the duration of its lifetime, the cache will remove
     * the message. A lifetime of 0 results in the message being retained indefinitely, otherwise it must be 3 seconds or more.
     * Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`.
     */
    msgLifetime?: pulumi.Input<number>;
    /**
     * The name of the Message VPN.
     */
    msgVpnName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a MsgVpnMqttRetainCache resource.
 */
export interface MsgVpnMqttRetainCacheArgs {
    /**
     * The name of the MQTT Retain Cache.
     */
    cacheName: pulumi.Input<string>;
    /**
     * Enable or disable this MQTT Retain Cache. When the cache is disabled, neither retain messages nor retain requests will
     * be delivered by the cache. However, live retain messages will continue to be delivered to currently connected MQTT
     * clients. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value
     * is `false`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The message lifetime, in seconds. If a message remains cached for the duration of its lifetime, the cache will remove
     * the message. A lifetime of 0 results in the message being retained indefinitely, otherwise it must be 3 seconds or more.
     * Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`.
     */
    msgLifetime?: pulumi.Input<number>;
    /**
     * The name of the Message VPN.
     */
    msgVpnName: pulumi.Input<string>;
}
