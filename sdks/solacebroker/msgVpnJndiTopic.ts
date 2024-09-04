// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class MsgVpnJndiTopic extends pulumi.CustomResource {
    /**
     * Get an existing MsgVpnJndiTopic resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MsgVpnJndiTopicState, opts?: pulumi.CustomResourceOptions): MsgVpnJndiTopic {
        return new MsgVpnJndiTopic(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'solacebroker:index/msgVpnJndiTopic:MsgVpnJndiTopic';

    /**
     * Returns true if the given object is an instance of MsgVpnJndiTopic.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MsgVpnJndiTopic {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MsgVpnJndiTopic.__pulumiType;
    }

    /**
     * The name of the Message VPN.
     */
    public readonly msgVpnName!: pulumi.Output<string>;
    /**
     * The physical name of the JMS Topic. Changes to this attribute are synchronized to HA mates and replication sites via
     * config-sync. The default value is `""`.
     */
    public readonly physicalName!: pulumi.Output<string | undefined>;
    /**
     * The JNDI name of the JMS Topic.
     */
    public readonly topicName!: pulumi.Output<string>;

    /**
     * Create a MsgVpnJndiTopic resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MsgVpnJndiTopicArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MsgVpnJndiTopicArgs | MsgVpnJndiTopicState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MsgVpnJndiTopicState | undefined;
            resourceInputs["msgVpnName"] = state ? state.msgVpnName : undefined;
            resourceInputs["physicalName"] = state ? state.physicalName : undefined;
            resourceInputs["topicName"] = state ? state.topicName : undefined;
        } else {
            const args = argsOrState as MsgVpnJndiTopicArgs | undefined;
            if ((!args || args.msgVpnName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'msgVpnName'");
            }
            if ((!args || args.topicName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'topicName'");
            }
            resourceInputs["msgVpnName"] = args ? args.msgVpnName : undefined;
            resourceInputs["physicalName"] = args ? args.physicalName : undefined;
            resourceInputs["topicName"] = args ? args.topicName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MsgVpnJndiTopic.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MsgVpnJndiTopic resources.
 */
export interface MsgVpnJndiTopicState {
    /**
     * The name of the Message VPN.
     */
    msgVpnName?: pulumi.Input<string>;
    /**
     * The physical name of the JMS Topic. Changes to this attribute are synchronized to HA mates and replication sites via
     * config-sync. The default value is `""`.
     */
    physicalName?: pulumi.Input<string>;
    /**
     * The JNDI name of the JMS Topic.
     */
    topicName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a MsgVpnJndiTopic resource.
 */
export interface MsgVpnJndiTopicArgs {
    /**
     * The name of the Message VPN.
     */
    msgVpnName: pulumi.Input<string>;
    /**
     * The physical name of the JMS Topic. Changes to this attribute are synchronized to HA mates and replication sites via
     * config-sync. The default value is `""`.
     */
    physicalName?: pulumi.Input<string>;
    /**
     * The JNDI name of the JMS Topic.
     */
    topicName: pulumi.Input<string>;
}
