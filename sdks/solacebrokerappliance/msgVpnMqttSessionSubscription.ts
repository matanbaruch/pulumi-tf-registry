// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class MsgVpnMqttSessionSubscription extends pulumi.CustomResource {
    /**
     * Get an existing MsgVpnMqttSessionSubscription resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MsgVpnMqttSessionSubscriptionState, opts?: pulumi.CustomResourceOptions): MsgVpnMqttSessionSubscription {
        return new MsgVpnMqttSessionSubscription(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'solacebrokerappliance:index/msgVpnMqttSessionSubscription:MsgVpnMqttSessionSubscription';

    /**
     * Returns true if the given object is an instance of MsgVpnMqttSessionSubscription.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MsgVpnMqttSessionSubscription {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MsgVpnMqttSessionSubscription.__pulumiType;
    }

    /**
     * The Client ID of the MQTT Session, which corresponds to the ClientId provided in the MQTT CONNECT packet.
     */
    public readonly mqttSessionClientId!: pulumi.Output<string>;
    /**
     * The virtual router of the MQTT Session. The allowed values and their meaning are: <pre> "primary" - The MQTT Session
     * belongs to the primary virtual router. "backup" - The MQTT Session belongs to the backup virtual router. "auto" - The
     * MQTT Session is automatically assigned a virtual router at creation, depending on the broker's active-standby role.
     * </pre>
     */
    public readonly mqttSessionVirtualRouter!: pulumi.Output<string>;
    /**
     * The name of the Message VPN.
     */
    public readonly msgVpnName!: pulumi.Output<string>;
    /**
     * The quality of service (QoS) for the subscription as either 0 (deliver at most once) or 1 (deliver at least once). QoS 2
     * is not supported, but QoS 2 messages attracted by QoS 0 or QoS 1 subscriptions are accepted and delivered accordingly.
     * Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`.
     */
    public readonly subscriptionQos!: pulumi.Output<number | undefined>;
    /**
     * The MQTT subscription topic.
     */
    public readonly subscriptionTopic!: pulumi.Output<string>;

    /**
     * Create a MsgVpnMqttSessionSubscription resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MsgVpnMqttSessionSubscriptionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MsgVpnMqttSessionSubscriptionArgs | MsgVpnMqttSessionSubscriptionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MsgVpnMqttSessionSubscriptionState | undefined;
            resourceInputs["mqttSessionClientId"] = state ? state.mqttSessionClientId : undefined;
            resourceInputs["mqttSessionVirtualRouter"] = state ? state.mqttSessionVirtualRouter : undefined;
            resourceInputs["msgVpnName"] = state ? state.msgVpnName : undefined;
            resourceInputs["subscriptionQos"] = state ? state.subscriptionQos : undefined;
            resourceInputs["subscriptionTopic"] = state ? state.subscriptionTopic : undefined;
        } else {
            const args = argsOrState as MsgVpnMqttSessionSubscriptionArgs | undefined;
            if ((!args || args.mqttSessionClientId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mqttSessionClientId'");
            }
            if ((!args || args.mqttSessionVirtualRouter === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mqttSessionVirtualRouter'");
            }
            if ((!args || args.msgVpnName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'msgVpnName'");
            }
            if ((!args || args.subscriptionTopic === undefined) && !opts.urn) {
                throw new Error("Missing required property 'subscriptionTopic'");
            }
            resourceInputs["mqttSessionClientId"] = args ? args.mqttSessionClientId : undefined;
            resourceInputs["mqttSessionVirtualRouter"] = args ? args.mqttSessionVirtualRouter : undefined;
            resourceInputs["msgVpnName"] = args ? args.msgVpnName : undefined;
            resourceInputs["subscriptionQos"] = args ? args.subscriptionQos : undefined;
            resourceInputs["subscriptionTopic"] = args ? args.subscriptionTopic : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MsgVpnMqttSessionSubscription.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MsgVpnMqttSessionSubscription resources.
 */
export interface MsgVpnMqttSessionSubscriptionState {
    /**
     * The Client ID of the MQTT Session, which corresponds to the ClientId provided in the MQTT CONNECT packet.
     */
    mqttSessionClientId?: pulumi.Input<string>;
    /**
     * The virtual router of the MQTT Session. The allowed values and their meaning are: <pre> "primary" - The MQTT Session
     * belongs to the primary virtual router. "backup" - The MQTT Session belongs to the backup virtual router. "auto" - The
     * MQTT Session is automatically assigned a virtual router at creation, depending on the broker's active-standby role.
     * </pre>
     */
    mqttSessionVirtualRouter?: pulumi.Input<string>;
    /**
     * The name of the Message VPN.
     */
    msgVpnName?: pulumi.Input<string>;
    /**
     * The quality of service (QoS) for the subscription as either 0 (deliver at most once) or 1 (deliver at least once). QoS 2
     * is not supported, but QoS 2 messages attracted by QoS 0 or QoS 1 subscriptions are accepted and delivered accordingly.
     * Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`.
     */
    subscriptionQos?: pulumi.Input<number>;
    /**
     * The MQTT subscription topic.
     */
    subscriptionTopic?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a MsgVpnMqttSessionSubscription resource.
 */
export interface MsgVpnMqttSessionSubscriptionArgs {
    /**
     * The Client ID of the MQTT Session, which corresponds to the ClientId provided in the MQTT CONNECT packet.
     */
    mqttSessionClientId: pulumi.Input<string>;
    /**
     * The virtual router of the MQTT Session. The allowed values and their meaning are: <pre> "primary" - The MQTT Session
     * belongs to the primary virtual router. "backup" - The MQTT Session belongs to the backup virtual router. "auto" - The
     * MQTT Session is automatically assigned a virtual router at creation, depending on the broker's active-standby role.
     * </pre>
     */
    mqttSessionVirtualRouter: pulumi.Input<string>;
    /**
     * The name of the Message VPN.
     */
    msgVpnName: pulumi.Input<string>;
    /**
     * The quality of service (QoS) for the subscription as either 0 (deliver at most once) or 1 (deliver at least once). QoS 2
     * is not supported, but QoS 2 messages attracted by QoS 0 or QoS 1 subscriptions are accepted and delivered accordingly.
     * Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`.
     */
    subscriptionQos?: pulumi.Input<number>;
    /**
     * The MQTT subscription topic.
     */
    subscriptionTopic: pulumi.Input<string>;
}
