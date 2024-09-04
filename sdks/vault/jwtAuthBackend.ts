// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class JwtAuthBackend extends pulumi.CustomResource {
    /**
     * Get an existing JwtAuthBackend resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: JwtAuthBackendState, opts?: pulumi.CustomResourceOptions): JwtAuthBackend {
        return new JwtAuthBackend(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'vault:index/jwtAuthBackend:JwtAuthBackend';

    /**
     * Returns true if the given object is an instance of JwtAuthBackend.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is JwtAuthBackend {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === JwtAuthBackend.__pulumiType;
    }

    /**
     * The accessor of the JWT auth backend
     */
    public /*out*/ readonly accessor!: pulumi.Output<string>;
    /**
     * The value against which to match the iss claim in a JWT
     */
    public readonly boundIssuer!: pulumi.Output<string | undefined>;
    /**
     * The default role to use if none is provided during login
     */
    public readonly defaultRole!: pulumi.Output<string | undefined>;
    /**
     * The description of the auth backend
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * If set, opts out of mount migration on path updates.
     */
    public readonly disableRemount!: pulumi.Output<boolean | undefined>;
    /**
     * The CA certificate or chain of certificates, in PEM format, to use to validate connections to the JWKS URL. If not set,
     * system certificates are used.
     */
    public readonly jwksCaPem!: pulumi.Output<string | undefined>;
    /**
     * JWKS URL to use to authenticate signatures. Cannot be used with 'oidc_discovery_url' or 'jwt_validation_pubkeys'.
     */
    public readonly jwksUrl!: pulumi.Output<string | undefined>;
    /**
     * A list of supported signing algorithms. Defaults to [RS256]
     */
    public readonly jwtSupportedAlgs!: pulumi.Output<string[] | undefined>;
    /**
     * A list of PEM-encoded public keys to use to authenticate signatures locally. Cannot be used with 'jwks_url' or
     * 'oidc_discovery_url'.
     */
    public readonly jwtValidationPubkeys!: pulumi.Output<string[] | undefined>;
    /**
     * Specifies if the auth method is local only
     */
    public readonly local!: pulumi.Output<boolean | undefined>;
    /**
     * Target namespace. (requires Enterprise)
     */
    public readonly namespace!: pulumi.Output<string | undefined>;
    /**
     * Pass namespace in the OIDC state parameter instead of as a separate query parameter. With this setting, the allowed
     * redirect URL(s) in Vault and on the provider side should not contain a namespace query parameter. This means only one
     * redirect URL entry needs to be maintained on the OIDC provider side for all vault namespaces that will be authenticating
     * against it. Defaults to true for new configs.
     */
    public readonly namespaceInState!: pulumi.Output<boolean | undefined>;
    /**
     * Client ID used for OIDC
     */
    public readonly oidcClientId!: pulumi.Output<string | undefined>;
    /**
     * Client Secret used for OIDC
     */
    public readonly oidcClientSecret!: pulumi.Output<string | undefined>;
    /**
     * The CA certificate or chain of certificates, in PEM format, to use to validate connections to the OIDC Discovery URL. If
     * not set, system certificates are used
     */
    public readonly oidcDiscoveryCaPem!: pulumi.Output<string | undefined>;
    /**
     * The OIDC Discovery URL, without any .well-known component (base path). Cannot be used with 'jwks_url' or
     * 'jwt_validation_pubkeys'.
     */
    public readonly oidcDiscoveryUrl!: pulumi.Output<string | undefined>;
    /**
     * The response mode to be used in the OAuth2 request. Allowed values are 'query' and 'form_post'. Defaults to 'query'. If
     * using Vault namespaces, and oidc_response_mode is 'form_post', then 'namespace_in_state' should be set to false.
     */
    public readonly oidcResponseMode!: pulumi.Output<string | undefined>;
    /**
     * The response types to request. Allowed values are 'code' and 'id_token'. Defaults to 'code'. Note: 'id_token' may only
     * be used if 'oidc_response_mode' is set to 'form_post'.
     */
    public readonly oidcResponseTypes!: pulumi.Output<string[] | undefined>;
    /**
     * path to mount the backend
     */
    public readonly path!: pulumi.Output<string | undefined>;
    /**
     * Provider specific handling configuration
     */
    public readonly providerConfig!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tunes!: pulumi.Output<outputs.JwtAuthBackendTune[]>;
    /**
     * Type of backend. Can be either 'jwt' or 'oidc'
     */
    public readonly type!: pulumi.Output<string | undefined>;

    /**
     * Create a JwtAuthBackend resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: JwtAuthBackendArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: JwtAuthBackendArgs | JwtAuthBackendState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as JwtAuthBackendState | undefined;
            resourceInputs["accessor"] = state ? state.accessor : undefined;
            resourceInputs["boundIssuer"] = state ? state.boundIssuer : undefined;
            resourceInputs["defaultRole"] = state ? state.defaultRole : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["disableRemount"] = state ? state.disableRemount : undefined;
            resourceInputs["jwksCaPem"] = state ? state.jwksCaPem : undefined;
            resourceInputs["jwksUrl"] = state ? state.jwksUrl : undefined;
            resourceInputs["jwtSupportedAlgs"] = state ? state.jwtSupportedAlgs : undefined;
            resourceInputs["jwtValidationPubkeys"] = state ? state.jwtValidationPubkeys : undefined;
            resourceInputs["local"] = state ? state.local : undefined;
            resourceInputs["namespace"] = state ? state.namespace : undefined;
            resourceInputs["namespaceInState"] = state ? state.namespaceInState : undefined;
            resourceInputs["oidcClientId"] = state ? state.oidcClientId : undefined;
            resourceInputs["oidcClientSecret"] = state ? state.oidcClientSecret : undefined;
            resourceInputs["oidcDiscoveryCaPem"] = state ? state.oidcDiscoveryCaPem : undefined;
            resourceInputs["oidcDiscoveryUrl"] = state ? state.oidcDiscoveryUrl : undefined;
            resourceInputs["oidcResponseMode"] = state ? state.oidcResponseMode : undefined;
            resourceInputs["oidcResponseTypes"] = state ? state.oidcResponseTypes : undefined;
            resourceInputs["path"] = state ? state.path : undefined;
            resourceInputs["providerConfig"] = state ? state.providerConfig : undefined;
            resourceInputs["tunes"] = state ? state.tunes : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as JwtAuthBackendArgs | undefined;
            resourceInputs["boundIssuer"] = args ? args.boundIssuer : undefined;
            resourceInputs["defaultRole"] = args ? args.defaultRole : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["disableRemount"] = args ? args.disableRemount : undefined;
            resourceInputs["jwksCaPem"] = args ? args.jwksCaPem : undefined;
            resourceInputs["jwksUrl"] = args ? args.jwksUrl : undefined;
            resourceInputs["jwtSupportedAlgs"] = args ? args.jwtSupportedAlgs : undefined;
            resourceInputs["jwtValidationPubkeys"] = args ? args.jwtValidationPubkeys : undefined;
            resourceInputs["local"] = args ? args.local : undefined;
            resourceInputs["namespace"] = args ? args.namespace : undefined;
            resourceInputs["namespaceInState"] = args ? args.namespaceInState : undefined;
            resourceInputs["oidcClientId"] = args ? args.oidcClientId : undefined;
            resourceInputs["oidcClientSecret"] = args?.oidcClientSecret ? pulumi.secret(args.oidcClientSecret) : undefined;
            resourceInputs["oidcDiscoveryCaPem"] = args ? args.oidcDiscoveryCaPem : undefined;
            resourceInputs["oidcDiscoveryUrl"] = args ? args.oidcDiscoveryUrl : undefined;
            resourceInputs["oidcResponseMode"] = args ? args.oidcResponseMode : undefined;
            resourceInputs["oidcResponseTypes"] = args ? args.oidcResponseTypes : undefined;
            resourceInputs["path"] = args ? args.path : undefined;
            resourceInputs["providerConfig"] = args ? args.providerConfig : undefined;
            resourceInputs["tunes"] = args ? args.tunes : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["accessor"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["oidcClientSecret"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(JwtAuthBackend.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering JwtAuthBackend resources.
 */
export interface JwtAuthBackendState {
    /**
     * The accessor of the JWT auth backend
     */
    accessor?: pulumi.Input<string>;
    /**
     * The value against which to match the iss claim in a JWT
     */
    boundIssuer?: pulumi.Input<string>;
    /**
     * The default role to use if none is provided during login
     */
    defaultRole?: pulumi.Input<string>;
    /**
     * The description of the auth backend
     */
    description?: pulumi.Input<string>;
    /**
     * If set, opts out of mount migration on path updates.
     */
    disableRemount?: pulumi.Input<boolean>;
    /**
     * The CA certificate or chain of certificates, in PEM format, to use to validate connections to the JWKS URL. If not set,
     * system certificates are used.
     */
    jwksCaPem?: pulumi.Input<string>;
    /**
     * JWKS URL to use to authenticate signatures. Cannot be used with 'oidc_discovery_url' or 'jwt_validation_pubkeys'.
     */
    jwksUrl?: pulumi.Input<string>;
    /**
     * A list of supported signing algorithms. Defaults to [RS256]
     */
    jwtSupportedAlgs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A list of PEM-encoded public keys to use to authenticate signatures locally. Cannot be used with 'jwks_url' or
     * 'oidc_discovery_url'.
     */
    jwtValidationPubkeys?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies if the auth method is local only
     */
    local?: pulumi.Input<boolean>;
    /**
     * Target namespace. (requires Enterprise)
     */
    namespace?: pulumi.Input<string>;
    /**
     * Pass namespace in the OIDC state parameter instead of as a separate query parameter. With this setting, the allowed
     * redirect URL(s) in Vault and on the provider side should not contain a namespace query parameter. This means only one
     * redirect URL entry needs to be maintained on the OIDC provider side for all vault namespaces that will be authenticating
     * against it. Defaults to true for new configs.
     */
    namespaceInState?: pulumi.Input<boolean>;
    /**
     * Client ID used for OIDC
     */
    oidcClientId?: pulumi.Input<string>;
    /**
     * Client Secret used for OIDC
     */
    oidcClientSecret?: pulumi.Input<string>;
    /**
     * The CA certificate or chain of certificates, in PEM format, to use to validate connections to the OIDC Discovery URL. If
     * not set, system certificates are used
     */
    oidcDiscoveryCaPem?: pulumi.Input<string>;
    /**
     * The OIDC Discovery URL, without any .well-known component (base path). Cannot be used with 'jwks_url' or
     * 'jwt_validation_pubkeys'.
     */
    oidcDiscoveryUrl?: pulumi.Input<string>;
    /**
     * The response mode to be used in the OAuth2 request. Allowed values are 'query' and 'form_post'. Defaults to 'query'. If
     * using Vault namespaces, and oidc_response_mode is 'form_post', then 'namespace_in_state' should be set to false.
     */
    oidcResponseMode?: pulumi.Input<string>;
    /**
     * The response types to request. Allowed values are 'code' and 'id_token'. Defaults to 'code'. Note: 'id_token' may only
     * be used if 'oidc_response_mode' is set to 'form_post'.
     */
    oidcResponseTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * path to mount the backend
     */
    path?: pulumi.Input<string>;
    /**
     * Provider specific handling configuration
     */
    providerConfig?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tunes?: pulumi.Input<pulumi.Input<inputs.JwtAuthBackendTune>[]>;
    /**
     * Type of backend. Can be either 'jwt' or 'oidc'
     */
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a JwtAuthBackend resource.
 */
export interface JwtAuthBackendArgs {
    /**
     * The value against which to match the iss claim in a JWT
     */
    boundIssuer?: pulumi.Input<string>;
    /**
     * The default role to use if none is provided during login
     */
    defaultRole?: pulumi.Input<string>;
    /**
     * The description of the auth backend
     */
    description?: pulumi.Input<string>;
    /**
     * If set, opts out of mount migration on path updates.
     */
    disableRemount?: pulumi.Input<boolean>;
    /**
     * The CA certificate or chain of certificates, in PEM format, to use to validate connections to the JWKS URL. If not set,
     * system certificates are used.
     */
    jwksCaPem?: pulumi.Input<string>;
    /**
     * JWKS URL to use to authenticate signatures. Cannot be used with 'oidc_discovery_url' or 'jwt_validation_pubkeys'.
     */
    jwksUrl?: pulumi.Input<string>;
    /**
     * A list of supported signing algorithms. Defaults to [RS256]
     */
    jwtSupportedAlgs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A list of PEM-encoded public keys to use to authenticate signatures locally. Cannot be used with 'jwks_url' or
     * 'oidc_discovery_url'.
     */
    jwtValidationPubkeys?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies if the auth method is local only
     */
    local?: pulumi.Input<boolean>;
    /**
     * Target namespace. (requires Enterprise)
     */
    namespace?: pulumi.Input<string>;
    /**
     * Pass namespace in the OIDC state parameter instead of as a separate query parameter. With this setting, the allowed
     * redirect URL(s) in Vault and on the provider side should not contain a namespace query parameter. This means only one
     * redirect URL entry needs to be maintained on the OIDC provider side for all vault namespaces that will be authenticating
     * against it. Defaults to true for new configs.
     */
    namespaceInState?: pulumi.Input<boolean>;
    /**
     * Client ID used for OIDC
     */
    oidcClientId?: pulumi.Input<string>;
    /**
     * Client Secret used for OIDC
     */
    oidcClientSecret?: pulumi.Input<string>;
    /**
     * The CA certificate or chain of certificates, in PEM format, to use to validate connections to the OIDC Discovery URL. If
     * not set, system certificates are used
     */
    oidcDiscoveryCaPem?: pulumi.Input<string>;
    /**
     * The OIDC Discovery URL, without any .well-known component (base path). Cannot be used with 'jwks_url' or
     * 'jwt_validation_pubkeys'.
     */
    oidcDiscoveryUrl?: pulumi.Input<string>;
    /**
     * The response mode to be used in the OAuth2 request. Allowed values are 'query' and 'form_post'. Defaults to 'query'. If
     * using Vault namespaces, and oidc_response_mode is 'form_post', then 'namespace_in_state' should be set to false.
     */
    oidcResponseMode?: pulumi.Input<string>;
    /**
     * The response types to request. Allowed values are 'code' and 'id_token'. Defaults to 'code'. Note: 'id_token' may only
     * be used if 'oidc_response_mode' is set to 'form_post'.
     */
    oidcResponseTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * path to mount the backend
     */
    path?: pulumi.Input<string>;
    /**
     * Provider specific handling configuration
     */
    providerConfig?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tunes?: pulumi.Input<pulumi.Input<inputs.JwtAuthBackendTune>[]>;
    /**
     * Type of backend. Can be either 'jwt' or 'oidc'
     */
    type?: pulumi.Input<string>;
}
