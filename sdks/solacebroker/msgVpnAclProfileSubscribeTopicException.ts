// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class MsgVpnAclProfileSubscribeTopicException extends pulumi.CustomResource {
    /**
     * Get an existing MsgVpnAclProfileSubscribeTopicException resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MsgVpnAclProfileSubscribeTopicExceptionState, opts?: pulumi.CustomResourceOptions): MsgVpnAclProfileSubscribeTopicException {
        return new MsgVpnAclProfileSubscribeTopicException(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'solacebroker:index/msgVpnAclProfileSubscribeTopicException:MsgVpnAclProfileSubscribeTopicException';

    /**
     * Returns true if the given object is an instance of MsgVpnAclProfileSubscribeTopicException.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MsgVpnAclProfileSubscribeTopicException {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MsgVpnAclProfileSubscribeTopicException.__pulumiType;
    }

    /**
     * The name of the ACL Profile.
     */
    public readonly aclProfileName!: pulumi.Output<string>;
    /**
     * The name of the Message VPN.
     */
    public readonly msgVpnName!: pulumi.Output<string>;
    /**
     * The topic for the exception to the default action taken. May include wildcard characters.
     */
    public readonly subscribeTopicException!: pulumi.Output<string>;
    /**
     * The syntax of the topic for the exception to the default action taken. The allowed values and their meaning are: <pre>
     * "smf" - Topic uses SMF syntax. "mqtt" - Topic uses MQTT syntax. </pre>
     */
    public readonly subscribeTopicExceptionSyntax!: pulumi.Output<string>;

    /**
     * Create a MsgVpnAclProfileSubscribeTopicException resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MsgVpnAclProfileSubscribeTopicExceptionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MsgVpnAclProfileSubscribeTopicExceptionArgs | MsgVpnAclProfileSubscribeTopicExceptionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MsgVpnAclProfileSubscribeTopicExceptionState | undefined;
            resourceInputs["aclProfileName"] = state ? state.aclProfileName : undefined;
            resourceInputs["msgVpnName"] = state ? state.msgVpnName : undefined;
            resourceInputs["subscribeTopicException"] = state ? state.subscribeTopicException : undefined;
            resourceInputs["subscribeTopicExceptionSyntax"] = state ? state.subscribeTopicExceptionSyntax : undefined;
        } else {
            const args = argsOrState as MsgVpnAclProfileSubscribeTopicExceptionArgs | undefined;
            if ((!args || args.aclProfileName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'aclProfileName'");
            }
            if ((!args || args.msgVpnName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'msgVpnName'");
            }
            if ((!args || args.subscribeTopicException === undefined) && !opts.urn) {
                throw new Error("Missing required property 'subscribeTopicException'");
            }
            if ((!args || args.subscribeTopicExceptionSyntax === undefined) && !opts.urn) {
                throw new Error("Missing required property 'subscribeTopicExceptionSyntax'");
            }
            resourceInputs["aclProfileName"] = args ? args.aclProfileName : undefined;
            resourceInputs["msgVpnName"] = args ? args.msgVpnName : undefined;
            resourceInputs["subscribeTopicException"] = args ? args.subscribeTopicException : undefined;
            resourceInputs["subscribeTopicExceptionSyntax"] = args ? args.subscribeTopicExceptionSyntax : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MsgVpnAclProfileSubscribeTopicException.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MsgVpnAclProfileSubscribeTopicException resources.
 */
export interface MsgVpnAclProfileSubscribeTopicExceptionState {
    /**
     * The name of the ACL Profile.
     */
    aclProfileName?: pulumi.Input<string>;
    /**
     * The name of the Message VPN.
     */
    msgVpnName?: pulumi.Input<string>;
    /**
     * The topic for the exception to the default action taken. May include wildcard characters.
     */
    subscribeTopicException?: pulumi.Input<string>;
    /**
     * The syntax of the topic for the exception to the default action taken. The allowed values and their meaning are: <pre>
     * "smf" - Topic uses SMF syntax. "mqtt" - Topic uses MQTT syntax. </pre>
     */
    subscribeTopicExceptionSyntax?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a MsgVpnAclProfileSubscribeTopicException resource.
 */
export interface MsgVpnAclProfileSubscribeTopicExceptionArgs {
    /**
     * The name of the ACL Profile.
     */
    aclProfileName: pulumi.Input<string>;
    /**
     * The name of the Message VPN.
     */
    msgVpnName: pulumi.Input<string>;
    /**
     * The topic for the exception to the default action taken. May include wildcard characters.
     */
    subscribeTopicException: pulumi.Input<string>;
    /**
     * The syntax of the topic for the exception to the default action taken. The allowed values and their meaning are: <pre>
     * "smf" - Topic uses SMF syntax. "mqtt" - Topic uses MQTT syntax. </pre>
     */
    subscribeTopicExceptionSyntax: pulumi.Input<string>;
}
