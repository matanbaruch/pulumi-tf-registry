// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeader extends pulumi.CustomResource {
    /**
     * Get an existing MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeader resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderState, opts?: pulumi.CustomResourceOptions): MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeader {
        return new MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeader(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'solacebroker:index/msgVpnRestDeliveryPointQueueBindingProtectedRequestHeader:MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeader';

    /**
     * Returns true if the given object is an instance of MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeader.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeader {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeader.__pulumiType;
    }

    /**
     * The name of the protected HTTP request header.
     */
    public readonly headerName!: pulumi.Output<string>;
    /**
     * The value of the protected HTTP request header. Unlike a non-protected request header, this value cannot be displayed
     * after it is set, and does not support substitution expressions. This attribute is absent from a GET and not updated when
     * absent in a PUT, subject to the exceptions in note 4 (refer to the `Notes` section in the SEMP API `Config reference`).
     * Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
     */
    public readonly headerValue!: pulumi.Output<string | undefined>;
    /**
     * The name of the Message VPN.
     */
    public readonly msgVpnName!: pulumi.Output<string>;
    /**
     * The name of a queue in the Message VPN.
     */
    public readonly queueBindingName!: pulumi.Output<string>;
    /**
     * The name of the REST Delivery Point.
     */
    public readonly restDeliveryPointName!: pulumi.Output<string>;

    /**
     * Create a MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeader resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderArgs | MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderState | undefined;
            resourceInputs["headerName"] = state ? state.headerName : undefined;
            resourceInputs["headerValue"] = state ? state.headerValue : undefined;
            resourceInputs["msgVpnName"] = state ? state.msgVpnName : undefined;
            resourceInputs["queueBindingName"] = state ? state.queueBindingName : undefined;
            resourceInputs["restDeliveryPointName"] = state ? state.restDeliveryPointName : undefined;
        } else {
            const args = argsOrState as MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderArgs | undefined;
            if ((!args || args.headerName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'headerName'");
            }
            if ((!args || args.msgVpnName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'msgVpnName'");
            }
            if ((!args || args.queueBindingName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'queueBindingName'");
            }
            if ((!args || args.restDeliveryPointName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'restDeliveryPointName'");
            }
            resourceInputs["headerName"] = args ? args.headerName : undefined;
            resourceInputs["headerValue"] = args?.headerValue ? pulumi.secret(args.headerValue) : undefined;
            resourceInputs["msgVpnName"] = args ? args.msgVpnName : undefined;
            resourceInputs["queueBindingName"] = args ? args.queueBindingName : undefined;
            resourceInputs["restDeliveryPointName"] = args ? args.restDeliveryPointName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["headerValue"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeader.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeader resources.
 */
export interface MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderState {
    /**
     * The name of the protected HTTP request header.
     */
    headerName?: pulumi.Input<string>;
    /**
     * The value of the protected HTTP request header. Unlike a non-protected request header, this value cannot be displayed
     * after it is set, and does not support substitution expressions. This attribute is absent from a GET and not updated when
     * absent in a PUT, subject to the exceptions in note 4 (refer to the `Notes` section in the SEMP API `Config reference`).
     * Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
     */
    headerValue?: pulumi.Input<string>;
    /**
     * The name of the Message VPN.
     */
    msgVpnName?: pulumi.Input<string>;
    /**
     * The name of a queue in the Message VPN.
     */
    queueBindingName?: pulumi.Input<string>;
    /**
     * The name of the REST Delivery Point.
     */
    restDeliveryPointName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeader resource.
 */
export interface MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderArgs {
    /**
     * The name of the protected HTTP request header.
     */
    headerName: pulumi.Input<string>;
    /**
     * The value of the protected HTTP request header. Unlike a non-protected request header, this value cannot be displayed
     * after it is set, and does not support substitution expressions. This attribute is absent from a GET and not updated when
     * absent in a PUT, subject to the exceptions in note 4 (refer to the `Notes` section in the SEMP API `Config reference`).
     * Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
     */
    headerValue?: pulumi.Input<string>;
    /**
     * The name of the Message VPN.
     */
    msgVpnName: pulumi.Input<string>;
    /**
     * The name of a queue in the Message VPN.
     */
    queueBindingName: pulumi.Input<string>;
    /**
     * The name of the REST Delivery Point.
     */
    restDeliveryPointName: pulumi.Input<string>;
}
