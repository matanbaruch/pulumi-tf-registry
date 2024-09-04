// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class MsgVpnJndiQueue extends pulumi.CustomResource {
    /**
     * Get an existing MsgVpnJndiQueue resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MsgVpnJndiQueueState, opts?: pulumi.CustomResourceOptions): MsgVpnJndiQueue {
        return new MsgVpnJndiQueue(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'solacebroker:index/msgVpnJndiQueue:MsgVpnJndiQueue';

    /**
     * Returns true if the given object is an instance of MsgVpnJndiQueue.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MsgVpnJndiQueue {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MsgVpnJndiQueue.__pulumiType;
    }

    /**
     * The name of the Message VPN.
     */
    public readonly msgVpnName!: pulumi.Output<string>;
    /**
     * The physical name of the JMS Queue. Changes to this attribute are synchronized to HA mates and replication sites via
     * config-sync. The default value is `""`.
     */
    public readonly physicalName!: pulumi.Output<string | undefined>;
    /**
     * The JNDI name of the JMS Queue.
     */
    public readonly queueName!: pulumi.Output<string>;

    /**
     * Create a MsgVpnJndiQueue resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MsgVpnJndiQueueArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MsgVpnJndiQueueArgs | MsgVpnJndiQueueState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MsgVpnJndiQueueState | undefined;
            resourceInputs["msgVpnName"] = state ? state.msgVpnName : undefined;
            resourceInputs["physicalName"] = state ? state.physicalName : undefined;
            resourceInputs["queueName"] = state ? state.queueName : undefined;
        } else {
            const args = argsOrState as MsgVpnJndiQueueArgs | undefined;
            if ((!args || args.msgVpnName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'msgVpnName'");
            }
            if ((!args || args.queueName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'queueName'");
            }
            resourceInputs["msgVpnName"] = args ? args.msgVpnName : undefined;
            resourceInputs["physicalName"] = args ? args.physicalName : undefined;
            resourceInputs["queueName"] = args ? args.queueName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MsgVpnJndiQueue.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MsgVpnJndiQueue resources.
 */
export interface MsgVpnJndiQueueState {
    /**
     * The name of the Message VPN.
     */
    msgVpnName?: pulumi.Input<string>;
    /**
     * The physical name of the JMS Queue. Changes to this attribute are synchronized to HA mates and replication sites via
     * config-sync. The default value is `""`.
     */
    physicalName?: pulumi.Input<string>;
    /**
     * The JNDI name of the JMS Queue.
     */
    queueName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a MsgVpnJndiQueue resource.
 */
export interface MsgVpnJndiQueueArgs {
    /**
     * The name of the Message VPN.
     */
    msgVpnName: pulumi.Input<string>;
    /**
     * The physical name of the JMS Queue. Changes to this attribute are synchronized to HA mates and replication sites via
     * config-sync. The default value is `""`.
     */
    physicalName?: pulumi.Input<string>;
    /**
     * The JNDI name of the JMS Queue.
     */
    queueName: pulumi.Input<string>;
}
