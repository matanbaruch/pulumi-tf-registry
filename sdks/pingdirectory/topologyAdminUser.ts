// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class TopologyAdminUser extends pulumi.CustomResource {
    /**
     * Get an existing TopologyAdminUser resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TopologyAdminUserState, opts?: pulumi.CustomResourceOptions): TopologyAdminUser {
        return new TopologyAdminUser(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pingdirectory:index/topologyAdminUser:TopologyAdminUser';

    /**
     * Returns true if the given object is an instance of TopologyAdminUser.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TopologyAdminUser {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TopologyAdminUser.__pulumiType;
    }

    /**
     * Specifies the time, in generalized time format (e.g., '20160101070000Z'), that the root user account should become
     * active. If an activation time is specified, the user will not be permitted to authenticate, nor can the account be used
     * as an authorization identity, until the activation time has arrived. This is stored in the
     * ds-pwp-account-activation-time LDAP attribute.
     */
    public readonly accountActivationTime!: pulumi.Output<string | undefined>;
    /**
     * Specifies the time, in generalized time format (e.g., '20240101070000Z'), that the root user account should expire. If
     * an expiration time is specified, the user will not be permitted to authenticate, nor can the account be used as an
     * authorization identity, after this time has passed. This is stored in the ds-pwp-account-expiration-time LDAP attribute.
     */
    public readonly accountExpirationTime!: pulumi.Output<string | undefined>;
    /**
     * An IPv4 or IPv6 address mask that controls the set of IP addresses from which this User can authenticate to the server.
     * For instance a value of 127.0.0.1 (or ::1 in IPv6) would restricted access only to localhost connections, whereas
     * 10.6.1.* would restrict access to servers on the 10.6.1.* subnet.
     */
    public readonly allowedAuthenticationIpAddresses!: pulumi.Output<string[]>;
    /**
     * Indicates that User should only be allowed to authenticate in certain ways. Allowed values include "simple" (to indicate
     * that the user should be allowed to bind using simple authentication) or "sasl {mech}" (to indicate that the user should
     * be allowed to bind using the specified SASL mechanism, like "sasl PLAIN"). The list of available SASL mechanisms can be
     * retrieved by running "dsconfig --advanced list-sasl-mechanism-handlers".
     */
    public readonly allowedAuthenticationTypes!: pulumi.Output<string[]>;
    /**
     * Specifies one or more alternate DNs that can be used to bind to the server as this User.
     */
    public readonly alternateBindDns!: pulumi.Output<string[]>;
    /**
     * A description for this User.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Specifies whether the root user account should be disabled. A disabled account is not permitted to authenticate, nor can
     * it be used as an authorization identity. This is stored in the ds-pwp-account-disabled LDAP attribute.
     */
    public readonly disabled!: pulumi.Output<boolean>;
    /**
     * Specifies the user's email address. This is stored in the mail LDAP attribute.
     */
    public readonly emailAddresses!: pulumi.Output<string[]>;
    /**
     * Specifies the user's first name. This is stored in the givenName LDAP attribute.
     */
    public readonly firstNames!: pulumi.Output<string[]>;
    /**
     * Specifies the user's home telephone number. This is stored in the homePhone LDAP attribute.
     */
    public readonly homeTelephoneNumbers!: pulumi.Output<string[]>;
    /**
     * Specifies the maximum length of time (in seconds) that a connection authenticated as this user may remain established
     * without issuing any requests. A value of 0 indicates no limit should be enforced. This is stored in the
     * ds-rlim-idle-time-limit LDAP attribute.
     */
    public readonly idleTimeLimitSeconds!: pulumi.Output<number>;
    /**
     * Indicates whether this User should be automatically granted the set of privileges defined in the
     * default-root-privilege-name property of the Root DN configuration object.
     */
    public readonly inheritDefaultRootPrivileges!: pulumi.Output<boolean>;
    /**
     * This can be used to indicate whether the User can be used as an alternate authorization identity (using the proxied
     * authorization v1 or v2 control, the intermediate client control, or a SASL mechanism that allows specifying an alternate
     * authorization identity).
     */
    public readonly isProxyable!: pulumi.Output<string>;
    /**
     * Specifies the DNs of accounts that can proxy as this User using the proxied authorization v1 or v2 control, the
     * intermediate client control, or a SASL mechanism that allows specifying an alternate authorization identity. This
     * property is only applicable if is-proxyable is set to "allowed" or "required".
     */
    public readonly isProxyableByDns!: pulumi.Output<string[]>;
    /**
     * Specifies the DNs of groups whose members can proxy as this User using the proxied authorization v1 or v2 control, the
     * intermediate client control, or a SASL mechanism that allows specifying an alternate authorization identity. This
     * property is only applicable if is-proxyable is set to "allowed" or "required".
     */
    public readonly isProxyableByGroups!: pulumi.Output<string[]>;
    /**
     * Specifies LDAP URLs of accounts that can proxy as this User using the proxied authorization v1 or v2 control, the
     * intermediate client control, or a SASL mechanism that allows specifying an alternate authorization identity. This
     * property is only applicable if is-proxyable is set to "allowed" or "required".
     */
    public readonly isProxyableByUrls!: pulumi.Output<string[]>;
    /**
     * Specifies the user's last name. This is stored in the sn LDAP attribute.
     */
    public readonly lastNames!: pulumi.Output<string[]>;
    /**
     * Specifies the maximum number of candidate entries that the server may examine in the course of processing any single
     * search request. A value of 0 indicates no limit should be enforced. This is stored in the ds-rlim-lookthrough-limit LDAP
     * attribute.
     */
    public readonly lookThroughEntryLimit!: pulumi.Output<number>;
    /**
     * This restricts the set of accounts that this User can proxy as to entries with the specified DNs.
     */
    public readonly mayProxyAsDns!: pulumi.Output<string[]>;
    /**
     * This restricts the set of accounts that this User can proxy as to entries that are in the group with the specified DN.
     */
    public readonly mayProxyAsGroups!: pulumi.Output<string[]>;
    /**
     * This restricts the set of accounts that this User can proxy as to entries that are matched by the specified LDAP URL.
     */
    public readonly mayProxyAsUrls!: pulumi.Output<string[]>;
    /**
     * Specifies the user's mobile telephone number. This is stored in the mobile LDAP attribute.
     */
    public readonly mobileTelephoneNumbers!: pulumi.Output<string[]>;
    /**
     * Name of this config object.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Notifications returned by the PingDirectory Configuration API.
     */
    public /*out*/ readonly notifications!: pulumi.Output<string[]>;
    /**
     * Specifies the user's pager telephone number. This is stored in the pager LDAP attribute.
     */
    public readonly pagerTelephoneNumbers!: pulumi.Output<string[]>;
    /**
     * Specifies the user's password. This is stored in the userPassword LDAP attribute. To set a pre-hashed value, the account
     * making the change must have the bypass-pw-policy privilege.
     */
    public readonly password!: pulumi.Output<string | undefined>;
    /**
     * Specifies the password policy for the user. This is stored in the ds-pwp-password-policy-dn LDAP attribute.
     */
    public readonly passwordPolicy!: pulumi.Output<string>;
    /**
     * Overrides the default settings for the mechanisms (e.g., email or SMS) that are used to deliver one time passwords to
     * Users.
     */
    public readonly preferredOtpDeliveryMechanisms!: pulumi.Output<string[]>;
    /**
     * Privileges that are either explicitly granted or revoked from the root user. Privileges can be revoked by including a
     * minus sign (-) before the privilege name. This is stored in the ds-privilege-name LDAP attribute.
     */
    public readonly privileges!: pulumi.Output<string[]>;
    /**
     * Indicates whether this User must authenticate in a secure manner. When set to "true", the User will only be allowed to
     * authenticate over a secure connection or using a mechanism that does not expose user credentials (e.g., the CRAM-MD5,
     * DIGEST-MD5, and GSSAPI SASL mechanisms).
     */
    public readonly requireSecureAuthentication!: pulumi.Output<boolean>;
    /**
     * Indicates whether this User must be required to communicate with the server over a secure connection. When set to
     * "true", the User will only be allowed to communicate with the server over a secure connection (i.e., using TLS or the
     * StartTLS extended operation).
     */
    public readonly requireSecureConnections!: pulumi.Output<boolean>;
    /**
     * Required actions returned by the PingDirectory Configuration API.
     */
    public /*out*/ readonly requiredActions!: pulumi.Output<outputs.TopologyAdminUserRequiredAction[]>;
    /**
     * Specifies the maximum number of entries that the server may return to the user in response to any single search request.
     * A value of 0 indicates no limit should be enforced. This is stored in the ds-rlim-size-limit LDAP attribute.
     */
    public readonly searchResultEntryLimit!: pulumi.Output<number>;
    /**
     * Specifies the maximum length of time (in seconds) that the server may spend processing any single search request. A
     * value of 0 indicates no limit should be enforced. This is stored in the ds-rlim-time-limit LDAP attribute.
     */
    public readonly timeLimitSeconds!: pulumi.Output<number>;
    /**
     * The type of Topology Admin User resource. Options are ['topology-admin-user']
     */
    public readonly type!: pulumi.Output<string>;
    /**
     * Specifies the user's user ID. This is stored in the uid LDAP attribute.
     */
    public readonly userId!: pulumi.Output<string | undefined>;
    /**
     * Specifies the user's work telephone number. This is stored in the telephoneNumber LDAP attribute.
     */
    public readonly workTelephoneNumbers!: pulumi.Output<string[]>;

    /**
     * Create a TopologyAdminUser resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: TopologyAdminUserArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TopologyAdminUserArgs | TopologyAdminUserState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TopologyAdminUserState | undefined;
            resourceInputs["accountActivationTime"] = state ? state.accountActivationTime : undefined;
            resourceInputs["accountExpirationTime"] = state ? state.accountExpirationTime : undefined;
            resourceInputs["allowedAuthenticationIpAddresses"] = state ? state.allowedAuthenticationIpAddresses : undefined;
            resourceInputs["allowedAuthenticationTypes"] = state ? state.allowedAuthenticationTypes : undefined;
            resourceInputs["alternateBindDns"] = state ? state.alternateBindDns : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["emailAddresses"] = state ? state.emailAddresses : undefined;
            resourceInputs["firstNames"] = state ? state.firstNames : undefined;
            resourceInputs["homeTelephoneNumbers"] = state ? state.homeTelephoneNumbers : undefined;
            resourceInputs["idleTimeLimitSeconds"] = state ? state.idleTimeLimitSeconds : undefined;
            resourceInputs["inheritDefaultRootPrivileges"] = state ? state.inheritDefaultRootPrivileges : undefined;
            resourceInputs["isProxyable"] = state ? state.isProxyable : undefined;
            resourceInputs["isProxyableByDns"] = state ? state.isProxyableByDns : undefined;
            resourceInputs["isProxyableByGroups"] = state ? state.isProxyableByGroups : undefined;
            resourceInputs["isProxyableByUrls"] = state ? state.isProxyableByUrls : undefined;
            resourceInputs["lastNames"] = state ? state.lastNames : undefined;
            resourceInputs["lookThroughEntryLimit"] = state ? state.lookThroughEntryLimit : undefined;
            resourceInputs["mayProxyAsDns"] = state ? state.mayProxyAsDns : undefined;
            resourceInputs["mayProxyAsGroups"] = state ? state.mayProxyAsGroups : undefined;
            resourceInputs["mayProxyAsUrls"] = state ? state.mayProxyAsUrls : undefined;
            resourceInputs["mobileTelephoneNumbers"] = state ? state.mobileTelephoneNumbers : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["notifications"] = state ? state.notifications : undefined;
            resourceInputs["pagerTelephoneNumbers"] = state ? state.pagerTelephoneNumbers : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["passwordPolicy"] = state ? state.passwordPolicy : undefined;
            resourceInputs["preferredOtpDeliveryMechanisms"] = state ? state.preferredOtpDeliveryMechanisms : undefined;
            resourceInputs["privileges"] = state ? state.privileges : undefined;
            resourceInputs["requireSecureAuthentication"] = state ? state.requireSecureAuthentication : undefined;
            resourceInputs["requireSecureConnections"] = state ? state.requireSecureConnections : undefined;
            resourceInputs["requiredActions"] = state ? state.requiredActions : undefined;
            resourceInputs["searchResultEntryLimit"] = state ? state.searchResultEntryLimit : undefined;
            resourceInputs["timeLimitSeconds"] = state ? state.timeLimitSeconds : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["userId"] = state ? state.userId : undefined;
            resourceInputs["workTelephoneNumbers"] = state ? state.workTelephoneNumbers : undefined;
        } else {
            const args = argsOrState as TopologyAdminUserArgs | undefined;
            resourceInputs["accountActivationTime"] = args ? args.accountActivationTime : undefined;
            resourceInputs["accountExpirationTime"] = args ? args.accountExpirationTime : undefined;
            resourceInputs["allowedAuthenticationIpAddresses"] = args ? args.allowedAuthenticationIpAddresses : undefined;
            resourceInputs["allowedAuthenticationTypes"] = args ? args.allowedAuthenticationTypes : undefined;
            resourceInputs["alternateBindDns"] = args ? args.alternateBindDns : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["emailAddresses"] = args ? args.emailAddresses : undefined;
            resourceInputs["firstNames"] = args ? args.firstNames : undefined;
            resourceInputs["homeTelephoneNumbers"] = args ? args.homeTelephoneNumbers : undefined;
            resourceInputs["idleTimeLimitSeconds"] = args ? args.idleTimeLimitSeconds : undefined;
            resourceInputs["inheritDefaultRootPrivileges"] = args ? args.inheritDefaultRootPrivileges : undefined;
            resourceInputs["isProxyable"] = args ? args.isProxyable : undefined;
            resourceInputs["isProxyableByDns"] = args ? args.isProxyableByDns : undefined;
            resourceInputs["isProxyableByGroups"] = args ? args.isProxyableByGroups : undefined;
            resourceInputs["isProxyableByUrls"] = args ? args.isProxyableByUrls : undefined;
            resourceInputs["lastNames"] = args ? args.lastNames : undefined;
            resourceInputs["lookThroughEntryLimit"] = args ? args.lookThroughEntryLimit : undefined;
            resourceInputs["mayProxyAsDns"] = args ? args.mayProxyAsDns : undefined;
            resourceInputs["mayProxyAsGroups"] = args ? args.mayProxyAsGroups : undefined;
            resourceInputs["mayProxyAsUrls"] = args ? args.mayProxyAsUrls : undefined;
            resourceInputs["mobileTelephoneNumbers"] = args ? args.mobileTelephoneNumbers : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["pagerTelephoneNumbers"] = args ? args.pagerTelephoneNumbers : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["passwordPolicy"] = args ? args.passwordPolicy : undefined;
            resourceInputs["preferredOtpDeliveryMechanisms"] = args ? args.preferredOtpDeliveryMechanisms : undefined;
            resourceInputs["privileges"] = args ? args.privileges : undefined;
            resourceInputs["requireSecureAuthentication"] = args ? args.requireSecureAuthentication : undefined;
            resourceInputs["requireSecureConnections"] = args ? args.requireSecureConnections : undefined;
            resourceInputs["searchResultEntryLimit"] = args ? args.searchResultEntryLimit : undefined;
            resourceInputs["timeLimitSeconds"] = args ? args.timeLimitSeconds : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["userId"] = args ? args.userId : undefined;
            resourceInputs["workTelephoneNumbers"] = args ? args.workTelephoneNumbers : undefined;
            resourceInputs["notifications"] = undefined /*out*/;
            resourceInputs["requiredActions"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(TopologyAdminUser.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering TopologyAdminUser resources.
 */
export interface TopologyAdminUserState {
    /**
     * Specifies the time, in generalized time format (e.g., '20160101070000Z'), that the root user account should become
     * active. If an activation time is specified, the user will not be permitted to authenticate, nor can the account be used
     * as an authorization identity, until the activation time has arrived. This is stored in the
     * ds-pwp-account-activation-time LDAP attribute.
     */
    accountActivationTime?: pulumi.Input<string>;
    /**
     * Specifies the time, in generalized time format (e.g., '20240101070000Z'), that the root user account should expire. If
     * an expiration time is specified, the user will not be permitted to authenticate, nor can the account be used as an
     * authorization identity, after this time has passed. This is stored in the ds-pwp-account-expiration-time LDAP attribute.
     */
    accountExpirationTime?: pulumi.Input<string>;
    /**
     * An IPv4 or IPv6 address mask that controls the set of IP addresses from which this User can authenticate to the server.
     * For instance a value of 127.0.0.1 (or ::1 in IPv6) would restricted access only to localhost connections, whereas
     * 10.6.1.* would restrict access to servers on the 10.6.1.* subnet.
     */
    allowedAuthenticationIpAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Indicates that User should only be allowed to authenticate in certain ways. Allowed values include "simple" (to indicate
     * that the user should be allowed to bind using simple authentication) or "sasl {mech}" (to indicate that the user should
     * be allowed to bind using the specified SASL mechanism, like "sasl PLAIN"). The list of available SASL mechanisms can be
     * retrieved by running "dsconfig --advanced list-sasl-mechanism-handlers".
     */
    allowedAuthenticationTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies one or more alternate DNs that can be used to bind to the server as this User.
     */
    alternateBindDns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A description for this User.
     */
    description?: pulumi.Input<string>;
    /**
     * Specifies whether the root user account should be disabled. A disabled account is not permitted to authenticate, nor can
     * it be used as an authorization identity. This is stored in the ds-pwp-account-disabled LDAP attribute.
     */
    disabled?: pulumi.Input<boolean>;
    /**
     * Specifies the user's email address. This is stored in the mail LDAP attribute.
     */
    emailAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the user's first name. This is stored in the givenName LDAP attribute.
     */
    firstNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the user's home telephone number. This is stored in the homePhone LDAP attribute.
     */
    homeTelephoneNumbers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the maximum length of time (in seconds) that a connection authenticated as this user may remain established
     * without issuing any requests. A value of 0 indicates no limit should be enforced. This is stored in the
     * ds-rlim-idle-time-limit LDAP attribute.
     */
    idleTimeLimitSeconds?: pulumi.Input<number>;
    /**
     * Indicates whether this User should be automatically granted the set of privileges defined in the
     * default-root-privilege-name property of the Root DN configuration object.
     */
    inheritDefaultRootPrivileges?: pulumi.Input<boolean>;
    /**
     * This can be used to indicate whether the User can be used as an alternate authorization identity (using the proxied
     * authorization v1 or v2 control, the intermediate client control, or a SASL mechanism that allows specifying an alternate
     * authorization identity).
     */
    isProxyable?: pulumi.Input<string>;
    /**
     * Specifies the DNs of accounts that can proxy as this User using the proxied authorization v1 or v2 control, the
     * intermediate client control, or a SASL mechanism that allows specifying an alternate authorization identity. This
     * property is only applicable if is-proxyable is set to "allowed" or "required".
     */
    isProxyableByDns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the DNs of groups whose members can proxy as this User using the proxied authorization v1 or v2 control, the
     * intermediate client control, or a SASL mechanism that allows specifying an alternate authorization identity. This
     * property is only applicable if is-proxyable is set to "allowed" or "required".
     */
    isProxyableByGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies LDAP URLs of accounts that can proxy as this User using the proxied authorization v1 or v2 control, the
     * intermediate client control, or a SASL mechanism that allows specifying an alternate authorization identity. This
     * property is only applicable if is-proxyable is set to "allowed" or "required".
     */
    isProxyableByUrls?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the user's last name. This is stored in the sn LDAP attribute.
     */
    lastNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the maximum number of candidate entries that the server may examine in the course of processing any single
     * search request. A value of 0 indicates no limit should be enforced. This is stored in the ds-rlim-lookthrough-limit LDAP
     * attribute.
     */
    lookThroughEntryLimit?: pulumi.Input<number>;
    /**
     * This restricts the set of accounts that this User can proxy as to entries with the specified DNs.
     */
    mayProxyAsDns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * This restricts the set of accounts that this User can proxy as to entries that are in the group with the specified DN.
     */
    mayProxyAsGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * This restricts the set of accounts that this User can proxy as to entries that are matched by the specified LDAP URL.
     */
    mayProxyAsUrls?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the user's mobile telephone number. This is stored in the mobile LDAP attribute.
     */
    mobileTelephoneNumbers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of this config object.
     */
    name?: pulumi.Input<string>;
    /**
     * Notifications returned by the PingDirectory Configuration API.
     */
    notifications?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the user's pager telephone number. This is stored in the pager LDAP attribute.
     */
    pagerTelephoneNumbers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the user's password. This is stored in the userPassword LDAP attribute. To set a pre-hashed value, the account
     * making the change must have the bypass-pw-policy privilege.
     */
    password?: pulumi.Input<string>;
    /**
     * Specifies the password policy for the user. This is stored in the ds-pwp-password-policy-dn LDAP attribute.
     */
    passwordPolicy?: pulumi.Input<string>;
    /**
     * Overrides the default settings for the mechanisms (e.g., email or SMS) that are used to deliver one time passwords to
     * Users.
     */
    preferredOtpDeliveryMechanisms?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Privileges that are either explicitly granted or revoked from the root user. Privileges can be revoked by including a
     * minus sign (-) before the privilege name. This is stored in the ds-privilege-name LDAP attribute.
     */
    privileges?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Indicates whether this User must authenticate in a secure manner. When set to "true", the User will only be allowed to
     * authenticate over a secure connection or using a mechanism that does not expose user credentials (e.g., the CRAM-MD5,
     * DIGEST-MD5, and GSSAPI SASL mechanisms).
     */
    requireSecureAuthentication?: pulumi.Input<boolean>;
    /**
     * Indicates whether this User must be required to communicate with the server over a secure connection. When set to
     * "true", the User will only be allowed to communicate with the server over a secure connection (i.e., using TLS or the
     * StartTLS extended operation).
     */
    requireSecureConnections?: pulumi.Input<boolean>;
    /**
     * Required actions returned by the PingDirectory Configuration API.
     */
    requiredActions?: pulumi.Input<pulumi.Input<inputs.TopologyAdminUserRequiredAction>[]>;
    /**
     * Specifies the maximum number of entries that the server may return to the user in response to any single search request.
     * A value of 0 indicates no limit should be enforced. This is stored in the ds-rlim-size-limit LDAP attribute.
     */
    searchResultEntryLimit?: pulumi.Input<number>;
    /**
     * Specifies the maximum length of time (in seconds) that the server may spend processing any single search request. A
     * value of 0 indicates no limit should be enforced. This is stored in the ds-rlim-time-limit LDAP attribute.
     */
    timeLimitSeconds?: pulumi.Input<number>;
    /**
     * The type of Topology Admin User resource. Options are ['topology-admin-user']
     */
    type?: pulumi.Input<string>;
    /**
     * Specifies the user's user ID. This is stored in the uid LDAP attribute.
     */
    userId?: pulumi.Input<string>;
    /**
     * Specifies the user's work telephone number. This is stored in the telephoneNumber LDAP attribute.
     */
    workTelephoneNumbers?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a TopologyAdminUser resource.
 */
export interface TopologyAdminUserArgs {
    /**
     * Specifies the time, in generalized time format (e.g., '20160101070000Z'), that the root user account should become
     * active. If an activation time is specified, the user will not be permitted to authenticate, nor can the account be used
     * as an authorization identity, until the activation time has arrived. This is stored in the
     * ds-pwp-account-activation-time LDAP attribute.
     */
    accountActivationTime?: pulumi.Input<string>;
    /**
     * Specifies the time, in generalized time format (e.g., '20240101070000Z'), that the root user account should expire. If
     * an expiration time is specified, the user will not be permitted to authenticate, nor can the account be used as an
     * authorization identity, after this time has passed. This is stored in the ds-pwp-account-expiration-time LDAP attribute.
     */
    accountExpirationTime?: pulumi.Input<string>;
    /**
     * An IPv4 or IPv6 address mask that controls the set of IP addresses from which this User can authenticate to the server.
     * For instance a value of 127.0.0.1 (or ::1 in IPv6) would restricted access only to localhost connections, whereas
     * 10.6.1.* would restrict access to servers on the 10.6.1.* subnet.
     */
    allowedAuthenticationIpAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Indicates that User should only be allowed to authenticate in certain ways. Allowed values include "simple" (to indicate
     * that the user should be allowed to bind using simple authentication) or "sasl {mech}" (to indicate that the user should
     * be allowed to bind using the specified SASL mechanism, like "sasl PLAIN"). The list of available SASL mechanisms can be
     * retrieved by running "dsconfig --advanced list-sasl-mechanism-handlers".
     */
    allowedAuthenticationTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies one or more alternate DNs that can be used to bind to the server as this User.
     */
    alternateBindDns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A description for this User.
     */
    description?: pulumi.Input<string>;
    /**
     * Specifies whether the root user account should be disabled. A disabled account is not permitted to authenticate, nor can
     * it be used as an authorization identity. This is stored in the ds-pwp-account-disabled LDAP attribute.
     */
    disabled?: pulumi.Input<boolean>;
    /**
     * Specifies the user's email address. This is stored in the mail LDAP attribute.
     */
    emailAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the user's first name. This is stored in the givenName LDAP attribute.
     */
    firstNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the user's home telephone number. This is stored in the homePhone LDAP attribute.
     */
    homeTelephoneNumbers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the maximum length of time (in seconds) that a connection authenticated as this user may remain established
     * without issuing any requests. A value of 0 indicates no limit should be enforced. This is stored in the
     * ds-rlim-idle-time-limit LDAP attribute.
     */
    idleTimeLimitSeconds?: pulumi.Input<number>;
    /**
     * Indicates whether this User should be automatically granted the set of privileges defined in the
     * default-root-privilege-name property of the Root DN configuration object.
     */
    inheritDefaultRootPrivileges?: pulumi.Input<boolean>;
    /**
     * This can be used to indicate whether the User can be used as an alternate authorization identity (using the proxied
     * authorization v1 or v2 control, the intermediate client control, or a SASL mechanism that allows specifying an alternate
     * authorization identity).
     */
    isProxyable?: pulumi.Input<string>;
    /**
     * Specifies the DNs of accounts that can proxy as this User using the proxied authorization v1 or v2 control, the
     * intermediate client control, or a SASL mechanism that allows specifying an alternate authorization identity. This
     * property is only applicable if is-proxyable is set to "allowed" or "required".
     */
    isProxyableByDns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the DNs of groups whose members can proxy as this User using the proxied authorization v1 or v2 control, the
     * intermediate client control, or a SASL mechanism that allows specifying an alternate authorization identity. This
     * property is only applicable if is-proxyable is set to "allowed" or "required".
     */
    isProxyableByGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies LDAP URLs of accounts that can proxy as this User using the proxied authorization v1 or v2 control, the
     * intermediate client control, or a SASL mechanism that allows specifying an alternate authorization identity. This
     * property is only applicable if is-proxyable is set to "allowed" or "required".
     */
    isProxyableByUrls?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the user's last name. This is stored in the sn LDAP attribute.
     */
    lastNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the maximum number of candidate entries that the server may examine in the course of processing any single
     * search request. A value of 0 indicates no limit should be enforced. This is stored in the ds-rlim-lookthrough-limit LDAP
     * attribute.
     */
    lookThroughEntryLimit?: pulumi.Input<number>;
    /**
     * This restricts the set of accounts that this User can proxy as to entries with the specified DNs.
     */
    mayProxyAsDns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * This restricts the set of accounts that this User can proxy as to entries that are in the group with the specified DN.
     */
    mayProxyAsGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * This restricts the set of accounts that this User can proxy as to entries that are matched by the specified LDAP URL.
     */
    mayProxyAsUrls?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the user's mobile telephone number. This is stored in the mobile LDAP attribute.
     */
    mobileTelephoneNumbers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of this config object.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the user's pager telephone number. This is stored in the pager LDAP attribute.
     */
    pagerTelephoneNumbers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the user's password. This is stored in the userPassword LDAP attribute. To set a pre-hashed value, the account
     * making the change must have the bypass-pw-policy privilege.
     */
    password?: pulumi.Input<string>;
    /**
     * Specifies the password policy for the user. This is stored in the ds-pwp-password-policy-dn LDAP attribute.
     */
    passwordPolicy?: pulumi.Input<string>;
    /**
     * Overrides the default settings for the mechanisms (e.g., email or SMS) that are used to deliver one time passwords to
     * Users.
     */
    preferredOtpDeliveryMechanisms?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Privileges that are either explicitly granted or revoked from the root user. Privileges can be revoked by including a
     * minus sign (-) before the privilege name. This is stored in the ds-privilege-name LDAP attribute.
     */
    privileges?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Indicates whether this User must authenticate in a secure manner. When set to "true", the User will only be allowed to
     * authenticate over a secure connection or using a mechanism that does not expose user credentials (e.g., the CRAM-MD5,
     * DIGEST-MD5, and GSSAPI SASL mechanisms).
     */
    requireSecureAuthentication?: pulumi.Input<boolean>;
    /**
     * Indicates whether this User must be required to communicate with the server over a secure connection. When set to
     * "true", the User will only be allowed to communicate with the server over a secure connection (i.e., using TLS or the
     * StartTLS extended operation).
     */
    requireSecureConnections?: pulumi.Input<boolean>;
    /**
     * Specifies the maximum number of entries that the server may return to the user in response to any single search request.
     * A value of 0 indicates no limit should be enforced. This is stored in the ds-rlim-size-limit LDAP attribute.
     */
    searchResultEntryLimit?: pulumi.Input<number>;
    /**
     * Specifies the maximum length of time (in seconds) that the server may spend processing any single search request. A
     * value of 0 indicates no limit should be enforced. This is stored in the ds-rlim-time-limit LDAP attribute.
     */
    timeLimitSeconds?: pulumi.Input<number>;
    /**
     * The type of Topology Admin User resource. Options are ['topology-admin-user']
     */
    type?: pulumi.Input<string>;
    /**
     * Specifies the user's user ID. This is stored in the uid LDAP attribute.
     */
    userId?: pulumi.Input<string>;
    /**
     * Specifies the user's work telephone number. This is stored in the telephoneNumber LDAP attribute.
     */
    workTelephoneNumbers?: pulumi.Input<pulumi.Input<string>[]>;
}
