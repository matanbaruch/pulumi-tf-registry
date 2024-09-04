// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class MsgVpnClientUsername extends pulumi.CustomResource {
    /**
     * Get an existing MsgVpnClientUsername resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MsgVpnClientUsernameState, opts?: pulumi.CustomResourceOptions): MsgVpnClientUsername {
        return new MsgVpnClientUsername(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'solacebroker:index/msgVpnClientUsername:MsgVpnClientUsername';

    /**
     * Returns true if the given object is an instance of MsgVpnClientUsername.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MsgVpnClientUsername {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MsgVpnClientUsername.__pulumiType;
    }

    /**
     * The ACL Profile of the Client Username. Modifying this attribute while the object (or the relevant part of the object)
     * is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change.
     * Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is
     * `"default"`.
     */
    public readonly aclProfileName!: pulumi.Output<string | undefined>;
    /**
     * The Client Profile of the Client Username. Modifying this attribute while the object (or the relevant part of the
     * object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the
     * change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value
     * is `"default"`.
     */
    public readonly clientProfileName!: pulumi.Output<string | undefined>;
    /**
     * The name of the Client Username.
     */
    public readonly clientUsername!: pulumi.Output<string>;
    /**
     * Enable or disable the Client Username. When disabled, all clients currently connected as the Client Username are
     * disconnected. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default
     * value is `false`.
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * Enable or disable guaranteed endpoint permission override for the Client Username. When enabled all guaranteed endpoints
     * may be accessed, modified or deleted with the same permission as the owner. Changes to this attribute are synchronized
     * to HA mates and replication sites via config-sync. The default value is `false`.
     */
    public readonly guaranteedEndpointPermissionOverrideEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * The name of the Message VPN.
     */
    public readonly msgVpnName!: pulumi.Output<string>;
    /**
     * The password for the Client Username. This attribute is absent from a GET and not updated when absent in a PUT, subject
     * to the exceptions in note 4 (refer to the `Notes` section in the SEMP API `Config reference`). Changes to this attribute
     * are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
     */
    public readonly password!: pulumi.Output<string | undefined>;
    /**
     * Enable or disable the subscription management capability of the Client Username. This is the ability to manage
     * subscriptions on behalf of other Client Usernames. Changes to this attribute are synchronized to HA mates and
     * replication sites via config-sync. The default value is `false`.
     */
    public readonly subscriptionManagerEnabled!: pulumi.Output<boolean | undefined>;

    /**
     * Create a MsgVpnClientUsername resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MsgVpnClientUsernameArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MsgVpnClientUsernameArgs | MsgVpnClientUsernameState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MsgVpnClientUsernameState | undefined;
            resourceInputs["aclProfileName"] = state ? state.aclProfileName : undefined;
            resourceInputs["clientProfileName"] = state ? state.clientProfileName : undefined;
            resourceInputs["clientUsername"] = state ? state.clientUsername : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["guaranteedEndpointPermissionOverrideEnabled"] = state ? state.guaranteedEndpointPermissionOverrideEnabled : undefined;
            resourceInputs["msgVpnName"] = state ? state.msgVpnName : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["subscriptionManagerEnabled"] = state ? state.subscriptionManagerEnabled : undefined;
        } else {
            const args = argsOrState as MsgVpnClientUsernameArgs | undefined;
            if ((!args || args.clientUsername === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clientUsername'");
            }
            if ((!args || args.msgVpnName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'msgVpnName'");
            }
            resourceInputs["aclProfileName"] = args ? args.aclProfileName : undefined;
            resourceInputs["clientProfileName"] = args ? args.clientProfileName : undefined;
            resourceInputs["clientUsername"] = args ? args.clientUsername : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["guaranteedEndpointPermissionOverrideEnabled"] = args ? args.guaranteedEndpointPermissionOverrideEnabled : undefined;
            resourceInputs["msgVpnName"] = args ? args.msgVpnName : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["subscriptionManagerEnabled"] = args ? args.subscriptionManagerEnabled : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(MsgVpnClientUsername.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MsgVpnClientUsername resources.
 */
export interface MsgVpnClientUsernameState {
    /**
     * The ACL Profile of the Client Username. Modifying this attribute while the object (or the relevant part of the object)
     * is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change.
     * Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is
     * `"default"`.
     */
    aclProfileName?: pulumi.Input<string>;
    /**
     * The Client Profile of the Client Username. Modifying this attribute while the object (or the relevant part of the
     * object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the
     * change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value
     * is `"default"`.
     */
    clientProfileName?: pulumi.Input<string>;
    /**
     * The name of the Client Username.
     */
    clientUsername?: pulumi.Input<string>;
    /**
     * Enable or disable the Client Username. When disabled, all clients currently connected as the Client Username are
     * disconnected. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default
     * value is `false`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Enable or disable guaranteed endpoint permission override for the Client Username. When enabled all guaranteed endpoints
     * may be accessed, modified or deleted with the same permission as the owner. Changes to this attribute are synchronized
     * to HA mates and replication sites via config-sync. The default value is `false`.
     */
    guaranteedEndpointPermissionOverrideEnabled?: pulumi.Input<boolean>;
    /**
     * The name of the Message VPN.
     */
    msgVpnName?: pulumi.Input<string>;
    /**
     * The password for the Client Username. This attribute is absent from a GET and not updated when absent in a PUT, subject
     * to the exceptions in note 4 (refer to the `Notes` section in the SEMP API `Config reference`). Changes to this attribute
     * are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
     */
    password?: pulumi.Input<string>;
    /**
     * Enable or disable the subscription management capability of the Client Username. This is the ability to manage
     * subscriptions on behalf of other Client Usernames. Changes to this attribute are synchronized to HA mates and
     * replication sites via config-sync. The default value is `false`.
     */
    subscriptionManagerEnabled?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a MsgVpnClientUsername resource.
 */
export interface MsgVpnClientUsernameArgs {
    /**
     * The ACL Profile of the Client Username. Modifying this attribute while the object (or the relevant part of the object)
     * is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change.
     * Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is
     * `"default"`.
     */
    aclProfileName?: pulumi.Input<string>;
    /**
     * The Client Profile of the Client Username. Modifying this attribute while the object (or the relevant part of the
     * object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the
     * change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value
     * is `"default"`.
     */
    clientProfileName?: pulumi.Input<string>;
    /**
     * The name of the Client Username.
     */
    clientUsername: pulumi.Input<string>;
    /**
     * Enable or disable the Client Username. When disabled, all clients currently connected as the Client Username are
     * disconnected. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default
     * value is `false`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Enable or disable guaranteed endpoint permission override for the Client Username. When enabled all guaranteed endpoints
     * may be accessed, modified or deleted with the same permission as the owner. Changes to this attribute are synchronized
     * to HA mates and replication sites via config-sync. The default value is `false`.
     */
    guaranteedEndpointPermissionOverrideEnabled?: pulumi.Input<boolean>;
    /**
     * The name of the Message VPN.
     */
    msgVpnName: pulumi.Input<string>;
    /**
     * The password for the Client Username. This attribute is absent from a GET and not updated when absent in a PUT, subject
     * to the exceptions in note 4 (refer to the `Notes` section in the SEMP API `Config reference`). Changes to this attribute
     * are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
     */
    password?: pulumi.Input<string>;
    /**
     * Enable or disable the subscription management capability of the Client Username. This is the ability to manage
     * subscriptions on behalf of other Client Usernames. Changes to this attribute are synchronized to HA mates and
     * replication sites via config-sync. The default value is `false`.
     */
    subscriptionManagerEnabled?: pulumi.Input<boolean>;
}
