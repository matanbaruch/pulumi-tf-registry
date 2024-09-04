// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class MsgVpnRestDeliveryPointQueueBinding extends pulumi.CustomResource {
    /**
     * Get an existing MsgVpnRestDeliveryPointQueueBinding resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MsgVpnRestDeliveryPointQueueBindingState, opts?: pulumi.CustomResourceOptions): MsgVpnRestDeliveryPointQueueBinding {
        return new MsgVpnRestDeliveryPointQueueBinding(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'solacebrokerappliance:index/msgVpnRestDeliveryPointQueueBinding:MsgVpnRestDeliveryPointQueueBinding';

    /**
     * Returns true if the given object is an instance of MsgVpnRestDeliveryPointQueueBinding.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MsgVpnRestDeliveryPointQueueBinding {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MsgVpnRestDeliveryPointQueueBinding.__pulumiType;
    }

    /**
     * Enable or disable whether the authority for the request-target is replaced with that configured for the REST Consumer
     * remote. When enabled, the broker sends HTTP requests in absolute-form, with the request-target's authority taken from
     * the REST Consumer's remote host and port configuration. When disabled, the broker sends HTTP requests whose
     * request-target matches that of the original request message, including whether to use absolute-form or origin-form. This
     * configuration is applicable only when the Message VPN is in REST gateway mode. Changes to this attribute are
     * synchronized to HA mates and replication sites via config-sync. The default value is `false`. Available since SEMP API
     * version 2.8.
     */
    public readonly gatewayReplaceTargetAuthorityEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * The name of the Message VPN.
     */
    public readonly msgVpnName!: pulumi.Output<string>;
    /**
     * The request-target string to use when sending requests. It identifies the target resource on the far-end REST Consumer
     * upon which to apply the request. There are generally two common forms for the request-target. The origin-form is most
     * often used in practice and contains the path and query components of the target URI. If the path component is empty then
     * the client must generally send a "/" as the path. When making a request to a proxy, most often the absolute-form is
     * required. This configuration is only applicable when the Message VPN is in REST messaging mode. Changes to this
     * attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
     */
    public readonly postRequestTarget!: pulumi.Output<string | undefined>;
    /**
     * The name of a queue in the Message VPN.
     */
    public readonly queueBindingName!: pulumi.Output<string>;
    /**
     * The type of evaluation to perform on the request target. Changes to this attribute are synchronized to HA mates and
     * replication sites via config-sync. The default value is `"none"`. The allowed values and their meaning are: <pre> "none"
     * - Do not evaluate substitution expressions on the request target. "substitution-expressions" - Evaluate substitution
     * expressions on the request target. </pre> Available since SEMP API version 2.23.
     */
    public readonly requestTargetEvaluation!: pulumi.Output<string | undefined>;
    /**
     * The name of the REST Delivery Point.
     */
    public readonly restDeliveryPointName!: pulumi.Output<string>;

    /**
     * Create a MsgVpnRestDeliveryPointQueueBinding resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MsgVpnRestDeliveryPointQueueBindingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MsgVpnRestDeliveryPointQueueBindingArgs | MsgVpnRestDeliveryPointQueueBindingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MsgVpnRestDeliveryPointQueueBindingState | undefined;
            resourceInputs["gatewayReplaceTargetAuthorityEnabled"] = state ? state.gatewayReplaceTargetAuthorityEnabled : undefined;
            resourceInputs["msgVpnName"] = state ? state.msgVpnName : undefined;
            resourceInputs["postRequestTarget"] = state ? state.postRequestTarget : undefined;
            resourceInputs["queueBindingName"] = state ? state.queueBindingName : undefined;
            resourceInputs["requestTargetEvaluation"] = state ? state.requestTargetEvaluation : undefined;
            resourceInputs["restDeliveryPointName"] = state ? state.restDeliveryPointName : undefined;
        } else {
            const args = argsOrState as MsgVpnRestDeliveryPointQueueBindingArgs | undefined;
            if ((!args || args.msgVpnName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'msgVpnName'");
            }
            if ((!args || args.queueBindingName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'queueBindingName'");
            }
            if ((!args || args.restDeliveryPointName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'restDeliveryPointName'");
            }
            resourceInputs["gatewayReplaceTargetAuthorityEnabled"] = args ? args.gatewayReplaceTargetAuthorityEnabled : undefined;
            resourceInputs["msgVpnName"] = args ? args.msgVpnName : undefined;
            resourceInputs["postRequestTarget"] = args ? args.postRequestTarget : undefined;
            resourceInputs["queueBindingName"] = args ? args.queueBindingName : undefined;
            resourceInputs["requestTargetEvaluation"] = args ? args.requestTargetEvaluation : undefined;
            resourceInputs["restDeliveryPointName"] = args ? args.restDeliveryPointName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MsgVpnRestDeliveryPointQueueBinding.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MsgVpnRestDeliveryPointQueueBinding resources.
 */
export interface MsgVpnRestDeliveryPointQueueBindingState {
    /**
     * Enable or disable whether the authority for the request-target is replaced with that configured for the REST Consumer
     * remote. When enabled, the broker sends HTTP requests in absolute-form, with the request-target's authority taken from
     * the REST Consumer's remote host and port configuration. When disabled, the broker sends HTTP requests whose
     * request-target matches that of the original request message, including whether to use absolute-form or origin-form. This
     * configuration is applicable only when the Message VPN is in REST gateway mode. Changes to this attribute are
     * synchronized to HA mates and replication sites via config-sync. The default value is `false`. Available since SEMP API
     * version 2.8.
     */
    gatewayReplaceTargetAuthorityEnabled?: pulumi.Input<boolean>;
    /**
     * The name of the Message VPN.
     */
    msgVpnName?: pulumi.Input<string>;
    /**
     * The request-target string to use when sending requests. It identifies the target resource on the far-end REST Consumer
     * upon which to apply the request. There are generally two common forms for the request-target. The origin-form is most
     * often used in practice and contains the path and query components of the target URI. If the path component is empty then
     * the client must generally send a "/" as the path. When making a request to a proxy, most often the absolute-form is
     * required. This configuration is only applicable when the Message VPN is in REST messaging mode. Changes to this
     * attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
     */
    postRequestTarget?: pulumi.Input<string>;
    /**
     * The name of a queue in the Message VPN.
     */
    queueBindingName?: pulumi.Input<string>;
    /**
     * The type of evaluation to perform on the request target. Changes to this attribute are synchronized to HA mates and
     * replication sites via config-sync. The default value is `"none"`. The allowed values and their meaning are: <pre> "none"
     * - Do not evaluate substitution expressions on the request target. "substitution-expressions" - Evaluate substitution
     * expressions on the request target. </pre> Available since SEMP API version 2.23.
     */
    requestTargetEvaluation?: pulumi.Input<string>;
    /**
     * The name of the REST Delivery Point.
     */
    restDeliveryPointName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a MsgVpnRestDeliveryPointQueueBinding resource.
 */
export interface MsgVpnRestDeliveryPointQueueBindingArgs {
    /**
     * Enable or disable whether the authority for the request-target is replaced with that configured for the REST Consumer
     * remote. When enabled, the broker sends HTTP requests in absolute-form, with the request-target's authority taken from
     * the REST Consumer's remote host and port configuration. When disabled, the broker sends HTTP requests whose
     * request-target matches that of the original request message, including whether to use absolute-form or origin-form. This
     * configuration is applicable only when the Message VPN is in REST gateway mode. Changes to this attribute are
     * synchronized to HA mates and replication sites via config-sync. The default value is `false`. Available since SEMP API
     * version 2.8.
     */
    gatewayReplaceTargetAuthorityEnabled?: pulumi.Input<boolean>;
    /**
     * The name of the Message VPN.
     */
    msgVpnName: pulumi.Input<string>;
    /**
     * The request-target string to use when sending requests. It identifies the target resource on the far-end REST Consumer
     * upon which to apply the request. There are generally two common forms for the request-target. The origin-form is most
     * often used in practice and contains the path and query components of the target URI. If the path component is empty then
     * the client must generally send a "/" as the path. When making a request to a proxy, most often the absolute-form is
     * required. This configuration is only applicable when the Message VPN is in REST messaging mode. Changes to this
     * attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
     */
    postRequestTarget?: pulumi.Input<string>;
    /**
     * The name of a queue in the Message VPN.
     */
    queueBindingName: pulumi.Input<string>;
    /**
     * The type of evaluation to perform on the request target. Changes to this attribute are synchronized to HA mates and
     * replication sites via config-sync. The default value is `"none"`. The allowed values and their meaning are: <pre> "none"
     * - Do not evaluate substitution expressions on the request target. "substitution-expressions" - Evaluate substitution
     * expressions on the request target. </pre> Available since SEMP API version 2.23.
     */
    requestTargetEvaluation?: pulumi.Input<string>;
    /**
     * The name of the REST Delivery Point.
     */
    restDeliveryPointName: pulumi.Input<string>;
}
