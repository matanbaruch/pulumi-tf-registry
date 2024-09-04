// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class MsgVpnDmrBridge extends pulumi.CustomResource {
    /**
     * Get an existing MsgVpnDmrBridge resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MsgVpnDmrBridgeState, opts?: pulumi.CustomResourceOptions): MsgVpnDmrBridge {
        return new MsgVpnDmrBridge(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'solacebrokerappliance:index/msgVpnDmrBridge:MsgVpnDmrBridge';

    /**
     * Returns true if the given object is an instance of MsgVpnDmrBridge.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MsgVpnDmrBridge {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MsgVpnDmrBridge.__pulumiType;
    }

    /**
     * The name of the Message VPN.
     */
    public readonly msgVpnName!: pulumi.Output<string>;
    /**
     * The remote Message VPN of the DMR Bridge. Changes to this attribute are synchronized to HA mates and replication sites
     * via config-sync. The default value is `""`.
     */
    public readonly remoteMsgVpnName!: pulumi.Output<string | undefined>;
    /**
     * The name of the node at the remote end of the DMR Bridge.
     */
    public readonly remoteNodeName!: pulumi.Output<string>;

    /**
     * Create a MsgVpnDmrBridge resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MsgVpnDmrBridgeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MsgVpnDmrBridgeArgs | MsgVpnDmrBridgeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MsgVpnDmrBridgeState | undefined;
            resourceInputs["msgVpnName"] = state ? state.msgVpnName : undefined;
            resourceInputs["remoteMsgVpnName"] = state ? state.remoteMsgVpnName : undefined;
            resourceInputs["remoteNodeName"] = state ? state.remoteNodeName : undefined;
        } else {
            const args = argsOrState as MsgVpnDmrBridgeArgs | undefined;
            if ((!args || args.msgVpnName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'msgVpnName'");
            }
            if ((!args || args.remoteNodeName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'remoteNodeName'");
            }
            resourceInputs["msgVpnName"] = args ? args.msgVpnName : undefined;
            resourceInputs["remoteMsgVpnName"] = args ? args.remoteMsgVpnName : undefined;
            resourceInputs["remoteNodeName"] = args ? args.remoteNodeName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MsgVpnDmrBridge.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MsgVpnDmrBridge resources.
 */
export interface MsgVpnDmrBridgeState {
    /**
     * The name of the Message VPN.
     */
    msgVpnName?: pulumi.Input<string>;
    /**
     * The remote Message VPN of the DMR Bridge. Changes to this attribute are synchronized to HA mates and replication sites
     * via config-sync. The default value is `""`.
     */
    remoteMsgVpnName?: pulumi.Input<string>;
    /**
     * The name of the node at the remote end of the DMR Bridge.
     */
    remoteNodeName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a MsgVpnDmrBridge resource.
 */
export interface MsgVpnDmrBridgeArgs {
    /**
     * The name of the Message VPN.
     */
    msgVpnName: pulumi.Input<string>;
    /**
     * The remote Message VPN of the DMR Bridge. Changes to this attribute are synchronized to HA mates and replication sites
     * via config-sync. The default value is `""`.
     */
    remoteMsgVpnName?: pulumi.Input<string>;
    /**
     * The name of the node at the remote end of the DMR Bridge.
     */
    remoteNodeName: pulumi.Input<string>;
}
