// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Authenticator extends pulumi.CustomResource {
    /**
     * Get an existing Authenticator resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AuthenticatorState, opts?: pulumi.CustomResourceOptions): Authenticator {
        return new Authenticator(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'okta:index/authenticator:Authenticator';

    /**
     * Returns true if the given object is an instance of Authenticator.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Authenticator {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Authenticator.__pulumiType;
    }

    /**
     * A human-readable string that identifies the authenticator. Some authenticators are available by feature flag on the
     * organization. Possible values inclue: `duo`, `external_idp`, `google_otp`, `okta_email`, `okta_password`, `okta_verify`,
     * `onprem_mfa`, `phone_number`, `rsa_token`, `security_question`, `webauthn`
     */
    public readonly key!: pulumi.Output<string>;
    /**
     * Name does not trigger change detection (legacy behavior)
     */
    public readonly legacyIgnoreName!: pulumi.Output<boolean | undefined>;
    /**
     * Display name of the Authenticator
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The RADIUS server port (for example 1812). This is defined when the On-Prem RADIUS server is configured. Used only for
     * authenticators with type `security_key`. Conflicts with `provider_json` argument.
     */
    public readonly providerAuthPort!: pulumi.Output<number | undefined>;
    /**
     * (DUO specific) - The Duo Security API hostname. Conflicts with `provider_json` argument.
     */
    public readonly providerHost!: pulumi.Output<string | undefined>;
    /**
     * Server host name or IP address. Default is `localhost`. Used only for authenticators with type `security_key`. Conflicts
     * with `provider_json` argument.
     */
    public readonly providerHostname!: pulumi.Output<string | undefined>;
    /**
     * App Instance ID.
     */
    public /*out*/ readonly providerInstanceId!: pulumi.Output<string>;
    /**
     * (DUO specific) - The Duo Security integration key. Conflicts with `provider_json` argument.
     */
    public readonly providerIntegrationKey!: pulumi.Output<string | undefined>;
    /**
     * Provider JSON allows for expressive providervalues. This argument conflicts with the other 'provider_xxx' arguments. The
     * [CreateProvider](https://developer.okta.com/docs/reference/api/authenticators-admin/#request) illustrates detailed
     * provider values for a Duo authenticator. [Provider
     * values](https://developer.okta.com/docs/reference/api/authenticators-admin/#authenticators-administration-api-object)are
     * listed in Okta API.
     */
    public readonly providerJson!: pulumi.Output<string | undefined>;
    /**
     * (DUO specific) - The Duo Security secret key. Conflicts with `provider_json` argument.
     */
    public readonly providerSecretKey!: pulumi.Output<string | undefined>;
    /**
     * An authentication key that must be defined when the RADIUS server is configured, and must be the same on both the RADIUS
     * client and server. Used only for authenticators with type `security_key`. Conflicts with `provider_json` argument.
     */
    public readonly providerSharedSecret!: pulumi.Output<string | undefined>;
    /**
     * Provider type. Supported value for Duo: `DUO`. Supported value for Custom App: `PUSH`
     */
    public /*out*/ readonly providerType!: pulumi.Output<string>;
    /**
     * Username template expected by the provider. Used only for authenticators with type `security_key`. Conflicts with
     * `provider_json` argument.
     */
    public readonly providerUserNameTemplate!: pulumi.Output<string | undefined>;
    /**
     * Settings for the authenticator. The settings JSON contains values based on Authenticator key. It is not used for
     * authenticators with type `security_key`
     */
    public readonly settings!: pulumi.Output<string | undefined>;
    /**
     * Authenticator status: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`
     */
    public readonly status!: pulumi.Output<string | undefined>;
    /**
     * he type of Authenticator. Values include: `password`, `security_question`, `phone`, `email`, `app`, `federated`, and
     * `security_key`.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Authenticator resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AuthenticatorArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AuthenticatorArgs | AuthenticatorState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AuthenticatorState | undefined;
            resourceInputs["key"] = state ? state.key : undefined;
            resourceInputs["legacyIgnoreName"] = state ? state.legacyIgnoreName : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["providerAuthPort"] = state ? state.providerAuthPort : undefined;
            resourceInputs["providerHost"] = state ? state.providerHost : undefined;
            resourceInputs["providerHostname"] = state ? state.providerHostname : undefined;
            resourceInputs["providerInstanceId"] = state ? state.providerInstanceId : undefined;
            resourceInputs["providerIntegrationKey"] = state ? state.providerIntegrationKey : undefined;
            resourceInputs["providerJson"] = state ? state.providerJson : undefined;
            resourceInputs["providerSecretKey"] = state ? state.providerSecretKey : undefined;
            resourceInputs["providerSharedSecret"] = state ? state.providerSharedSecret : undefined;
            resourceInputs["providerType"] = state ? state.providerType : undefined;
            resourceInputs["providerUserNameTemplate"] = state ? state.providerUserNameTemplate : undefined;
            resourceInputs["settings"] = state ? state.settings : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as AuthenticatorArgs | undefined;
            if ((!args || args.key === undefined) && !opts.urn) {
                throw new Error("Missing required property 'key'");
            }
            resourceInputs["key"] = args ? args.key : undefined;
            resourceInputs["legacyIgnoreName"] = args ? args.legacyIgnoreName : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["providerAuthPort"] = args ? args.providerAuthPort : undefined;
            resourceInputs["providerHost"] = args ? args.providerHost : undefined;
            resourceInputs["providerHostname"] = args ? args.providerHostname : undefined;
            resourceInputs["providerIntegrationKey"] = args ? args.providerIntegrationKey : undefined;
            resourceInputs["providerJson"] = args ? args.providerJson : undefined;
            resourceInputs["providerSecretKey"] = args ? args.providerSecretKey : undefined;
            resourceInputs["providerSharedSecret"] = args?.providerSharedSecret ? pulumi.secret(args.providerSharedSecret) : undefined;
            resourceInputs["providerUserNameTemplate"] = args ? args.providerUserNameTemplate : undefined;
            resourceInputs["settings"] = args ? args.settings : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["providerInstanceId"] = undefined /*out*/;
            resourceInputs["providerType"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["providerSharedSecret"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(Authenticator.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Authenticator resources.
 */
export interface AuthenticatorState {
    /**
     * A human-readable string that identifies the authenticator. Some authenticators are available by feature flag on the
     * organization. Possible values inclue: `duo`, `external_idp`, `google_otp`, `okta_email`, `okta_password`, `okta_verify`,
     * `onprem_mfa`, `phone_number`, `rsa_token`, `security_question`, `webauthn`
     */
    key?: pulumi.Input<string>;
    /**
     * Name does not trigger change detection (legacy behavior)
     */
    legacyIgnoreName?: pulumi.Input<boolean>;
    /**
     * Display name of the Authenticator
     */
    name?: pulumi.Input<string>;
    /**
     * The RADIUS server port (for example 1812). This is defined when the On-Prem RADIUS server is configured. Used only for
     * authenticators with type `security_key`. Conflicts with `provider_json` argument.
     */
    providerAuthPort?: pulumi.Input<number>;
    /**
     * (DUO specific) - The Duo Security API hostname. Conflicts with `provider_json` argument.
     */
    providerHost?: pulumi.Input<string>;
    /**
     * Server host name or IP address. Default is `localhost`. Used only for authenticators with type `security_key`. Conflicts
     * with `provider_json` argument.
     */
    providerHostname?: pulumi.Input<string>;
    /**
     * App Instance ID.
     */
    providerInstanceId?: pulumi.Input<string>;
    /**
     * (DUO specific) - The Duo Security integration key. Conflicts with `provider_json` argument.
     */
    providerIntegrationKey?: pulumi.Input<string>;
    /**
     * Provider JSON allows for expressive providervalues. This argument conflicts with the other 'provider_xxx' arguments. The
     * [CreateProvider](https://developer.okta.com/docs/reference/api/authenticators-admin/#request) illustrates detailed
     * provider values for a Duo authenticator. [Provider
     * values](https://developer.okta.com/docs/reference/api/authenticators-admin/#authenticators-administration-api-object)are
     * listed in Okta API.
     */
    providerJson?: pulumi.Input<string>;
    /**
     * (DUO specific) - The Duo Security secret key. Conflicts with `provider_json` argument.
     */
    providerSecretKey?: pulumi.Input<string>;
    /**
     * An authentication key that must be defined when the RADIUS server is configured, and must be the same on both the RADIUS
     * client and server. Used only for authenticators with type `security_key`. Conflicts with `provider_json` argument.
     */
    providerSharedSecret?: pulumi.Input<string>;
    /**
     * Provider type. Supported value for Duo: `DUO`. Supported value for Custom App: `PUSH`
     */
    providerType?: pulumi.Input<string>;
    /**
     * Username template expected by the provider. Used only for authenticators with type `security_key`. Conflicts with
     * `provider_json` argument.
     */
    providerUserNameTemplate?: pulumi.Input<string>;
    /**
     * Settings for the authenticator. The settings JSON contains values based on Authenticator key. It is not used for
     * authenticators with type `security_key`
     */
    settings?: pulumi.Input<string>;
    /**
     * Authenticator status: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`
     */
    status?: pulumi.Input<string>;
    /**
     * he type of Authenticator. Values include: `password`, `security_question`, `phone`, `email`, `app`, `federated`, and
     * `security_key`.
     */
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Authenticator resource.
 */
export interface AuthenticatorArgs {
    /**
     * A human-readable string that identifies the authenticator. Some authenticators are available by feature flag on the
     * organization. Possible values inclue: `duo`, `external_idp`, `google_otp`, `okta_email`, `okta_password`, `okta_verify`,
     * `onprem_mfa`, `phone_number`, `rsa_token`, `security_question`, `webauthn`
     */
    key: pulumi.Input<string>;
    /**
     * Name does not trigger change detection (legacy behavior)
     */
    legacyIgnoreName?: pulumi.Input<boolean>;
    /**
     * Display name of the Authenticator
     */
    name?: pulumi.Input<string>;
    /**
     * The RADIUS server port (for example 1812). This is defined when the On-Prem RADIUS server is configured. Used only for
     * authenticators with type `security_key`. Conflicts with `provider_json` argument.
     */
    providerAuthPort?: pulumi.Input<number>;
    /**
     * (DUO specific) - The Duo Security API hostname. Conflicts with `provider_json` argument.
     */
    providerHost?: pulumi.Input<string>;
    /**
     * Server host name or IP address. Default is `localhost`. Used only for authenticators with type `security_key`. Conflicts
     * with `provider_json` argument.
     */
    providerHostname?: pulumi.Input<string>;
    /**
     * (DUO specific) - The Duo Security integration key. Conflicts with `provider_json` argument.
     */
    providerIntegrationKey?: pulumi.Input<string>;
    /**
     * Provider JSON allows for expressive providervalues. This argument conflicts with the other 'provider_xxx' arguments. The
     * [CreateProvider](https://developer.okta.com/docs/reference/api/authenticators-admin/#request) illustrates detailed
     * provider values for a Duo authenticator. [Provider
     * values](https://developer.okta.com/docs/reference/api/authenticators-admin/#authenticators-administration-api-object)are
     * listed in Okta API.
     */
    providerJson?: pulumi.Input<string>;
    /**
     * (DUO specific) - The Duo Security secret key. Conflicts with `provider_json` argument.
     */
    providerSecretKey?: pulumi.Input<string>;
    /**
     * An authentication key that must be defined when the RADIUS server is configured, and must be the same on both the RADIUS
     * client and server. Used only for authenticators with type `security_key`. Conflicts with `provider_json` argument.
     */
    providerSharedSecret?: pulumi.Input<string>;
    /**
     * Username template expected by the provider. Used only for authenticators with type `security_key`. Conflicts with
     * `provider_json` argument.
     */
    providerUserNameTemplate?: pulumi.Input<string>;
    /**
     * Settings for the authenticator. The settings JSON contains values based on Authenticator key. It is not used for
     * authenticators with type `security_key`
     */
    settings?: pulumi.Input<string>;
    /**
     * Authenticator status: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`
     */
    status?: pulumi.Input<string>;
}
