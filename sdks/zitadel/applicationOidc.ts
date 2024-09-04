// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ApplicationOidc extends pulumi.CustomResource {
    /**
     * Get an existing ApplicationOidc resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApplicationOidcState, opts?: pulumi.CustomResourceOptions): ApplicationOidc {
        return new ApplicationOidc(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'zitadel:index/applicationOidc:ApplicationOidc';

    /**
     * Returns true if the given object is an instance of ApplicationOidc.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApplicationOidc {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApplicationOidc.__pulumiType;
    }

    /**
     * Access token role assertion
     */
    public readonly accessTokenRoleAssertion!: pulumi.Output<boolean | undefined>;
    /**
     * Access token type, supported values: OIDC_TOKEN_TYPE_BEARER, OIDC_TOKEN_TYPE_JWT
     */
    public readonly accessTokenType!: pulumi.Output<string | undefined>;
    /**
     * Additional origins
     */
    public readonly additionalOrigins!: pulumi.Output<string[] | undefined>;
    /**
     * App type, supported values: OIDC_APP_TYPE_WEB, OIDC_APP_TYPE_USER_AGENT, OIDC_APP_TYPE_NATIVE
     */
    public readonly appType!: pulumi.Output<string | undefined>;
    /**
     * Auth method type, supported values: OIDC_AUTH_METHOD_TYPE_BASIC, OIDC_AUTH_METHOD_TYPE_POST, OIDC_AUTH_METHOD_TYPE_NONE,
     * OIDC_AUTH_METHOD_TYPE_PRIVATE_KEY_JWT
     */
    public readonly authMethodType!: pulumi.Output<string | undefined>;
    /**
     * generated ID for this config
     */
    public /*out*/ readonly clientId!: pulumi.Output<string>;
    /**
     * generated secret for this config
     */
    public /*out*/ readonly clientSecret!: pulumi.Output<string>;
    /**
     * Clockskew
     */
    public readonly clockSkew!: pulumi.Output<string | undefined>;
    /**
     * Dev mode
     */
    public readonly devMode!: pulumi.Output<boolean | undefined>;
    /**
     * Grant types, supported values: OIDC_GRANT_TYPE_AUTHORIZATION_CODE, OIDC_GRANT_TYPE_IMPLICIT,
     * OIDC_GRANT_TYPE_REFRESH_TOKEN, OIDC_GRANT_TYPE_DEVICE_CODE, OIDC_GRANT_TYPE_TOKEN_EXCHANGE
     */
    public readonly grantTypes!: pulumi.Output<string[]>;
    /**
     * ID token role assertion
     */
    public readonly idTokenRoleAssertion!: pulumi.Output<boolean | undefined>;
    /**
     * Token userinfo assertion
     */
    public readonly idTokenUserinfoAssertion!: pulumi.Output<boolean | undefined>;
    /**
     * Name of the application
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * ID of the organization
     */
    public readonly orgId!: pulumi.Output<string | undefined>;
    /**
     * Post logout redirect URIs
     */
    public readonly postLogoutRedirectUris!: pulumi.Output<string[] | undefined>;
    /**
     * ID of the project
     */
    public readonly projectId!: pulumi.Output<string>;
    /**
     * RedirectURIs
     */
    public readonly redirectUris!: pulumi.Output<string[]>;
    /**
     * Response type, supported values: OIDC_RESPONSE_TYPE_CODE, OIDC_RESPONSE_TYPE_ID_TOKEN, OIDC_RESPONSE_TYPE_ID_TOKEN_TOKEN
     */
    public readonly responseTypes!: pulumi.Output<string[]>;
    /**
     * Version, supported values: OIDC_VERSION_1_0
     */
    public readonly version!: pulumi.Output<string | undefined>;

    /**
     * Create a ApplicationOidc resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApplicationOidcArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ApplicationOidcArgs | ApplicationOidcState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ApplicationOidcState | undefined;
            resourceInputs["accessTokenRoleAssertion"] = state ? state.accessTokenRoleAssertion : undefined;
            resourceInputs["accessTokenType"] = state ? state.accessTokenType : undefined;
            resourceInputs["additionalOrigins"] = state ? state.additionalOrigins : undefined;
            resourceInputs["appType"] = state ? state.appType : undefined;
            resourceInputs["authMethodType"] = state ? state.authMethodType : undefined;
            resourceInputs["clientId"] = state ? state.clientId : undefined;
            resourceInputs["clientSecret"] = state ? state.clientSecret : undefined;
            resourceInputs["clockSkew"] = state ? state.clockSkew : undefined;
            resourceInputs["devMode"] = state ? state.devMode : undefined;
            resourceInputs["grantTypes"] = state ? state.grantTypes : undefined;
            resourceInputs["idTokenRoleAssertion"] = state ? state.idTokenRoleAssertion : undefined;
            resourceInputs["idTokenUserinfoAssertion"] = state ? state.idTokenUserinfoAssertion : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["orgId"] = state ? state.orgId : undefined;
            resourceInputs["postLogoutRedirectUris"] = state ? state.postLogoutRedirectUris : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["redirectUris"] = state ? state.redirectUris : undefined;
            resourceInputs["responseTypes"] = state ? state.responseTypes : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as ApplicationOidcArgs | undefined;
            if ((!args || args.grantTypes === undefined) && !opts.urn) {
                throw new Error("Missing required property 'grantTypes'");
            }
            if ((!args || args.projectId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'projectId'");
            }
            if ((!args || args.redirectUris === undefined) && !opts.urn) {
                throw new Error("Missing required property 'redirectUris'");
            }
            if ((!args || args.responseTypes === undefined) && !opts.urn) {
                throw new Error("Missing required property 'responseTypes'");
            }
            resourceInputs["accessTokenRoleAssertion"] = args ? args.accessTokenRoleAssertion : undefined;
            resourceInputs["accessTokenType"] = args ? args.accessTokenType : undefined;
            resourceInputs["additionalOrigins"] = args ? args.additionalOrigins : undefined;
            resourceInputs["appType"] = args ? args.appType : undefined;
            resourceInputs["authMethodType"] = args ? args.authMethodType : undefined;
            resourceInputs["clockSkew"] = args ? args.clockSkew : undefined;
            resourceInputs["devMode"] = args ? args.devMode : undefined;
            resourceInputs["grantTypes"] = args ? args.grantTypes : undefined;
            resourceInputs["idTokenRoleAssertion"] = args ? args.idTokenRoleAssertion : undefined;
            resourceInputs["idTokenUserinfoAssertion"] = args ? args.idTokenUserinfoAssertion : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["orgId"] = args ? args.orgId : undefined;
            resourceInputs["postLogoutRedirectUris"] = args ? args.postLogoutRedirectUris : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["redirectUris"] = args ? args.redirectUris : undefined;
            resourceInputs["responseTypes"] = args ? args.responseTypes : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["clientId"] = undefined /*out*/;
            resourceInputs["clientSecret"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["clientId", "clientSecret"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(ApplicationOidc.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ApplicationOidc resources.
 */
export interface ApplicationOidcState {
    /**
     * Access token role assertion
     */
    accessTokenRoleAssertion?: pulumi.Input<boolean>;
    /**
     * Access token type, supported values: OIDC_TOKEN_TYPE_BEARER, OIDC_TOKEN_TYPE_JWT
     */
    accessTokenType?: pulumi.Input<string>;
    /**
     * Additional origins
     */
    additionalOrigins?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * App type, supported values: OIDC_APP_TYPE_WEB, OIDC_APP_TYPE_USER_AGENT, OIDC_APP_TYPE_NATIVE
     */
    appType?: pulumi.Input<string>;
    /**
     * Auth method type, supported values: OIDC_AUTH_METHOD_TYPE_BASIC, OIDC_AUTH_METHOD_TYPE_POST, OIDC_AUTH_METHOD_TYPE_NONE,
     * OIDC_AUTH_METHOD_TYPE_PRIVATE_KEY_JWT
     */
    authMethodType?: pulumi.Input<string>;
    /**
     * generated ID for this config
     */
    clientId?: pulumi.Input<string>;
    /**
     * generated secret for this config
     */
    clientSecret?: pulumi.Input<string>;
    /**
     * Clockskew
     */
    clockSkew?: pulumi.Input<string>;
    /**
     * Dev mode
     */
    devMode?: pulumi.Input<boolean>;
    /**
     * Grant types, supported values: OIDC_GRANT_TYPE_AUTHORIZATION_CODE, OIDC_GRANT_TYPE_IMPLICIT,
     * OIDC_GRANT_TYPE_REFRESH_TOKEN, OIDC_GRANT_TYPE_DEVICE_CODE, OIDC_GRANT_TYPE_TOKEN_EXCHANGE
     */
    grantTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * ID token role assertion
     */
    idTokenRoleAssertion?: pulumi.Input<boolean>;
    /**
     * Token userinfo assertion
     */
    idTokenUserinfoAssertion?: pulumi.Input<boolean>;
    /**
     * Name of the application
     */
    name?: pulumi.Input<string>;
    /**
     * ID of the organization
     */
    orgId?: pulumi.Input<string>;
    /**
     * Post logout redirect URIs
     */
    postLogoutRedirectUris?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * ID of the project
     */
    projectId?: pulumi.Input<string>;
    /**
     * RedirectURIs
     */
    redirectUris?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Response type, supported values: OIDC_RESPONSE_TYPE_CODE, OIDC_RESPONSE_TYPE_ID_TOKEN, OIDC_RESPONSE_TYPE_ID_TOKEN_TOKEN
     */
    responseTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Version, supported values: OIDC_VERSION_1_0
     */
    version?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ApplicationOidc resource.
 */
export interface ApplicationOidcArgs {
    /**
     * Access token role assertion
     */
    accessTokenRoleAssertion?: pulumi.Input<boolean>;
    /**
     * Access token type, supported values: OIDC_TOKEN_TYPE_BEARER, OIDC_TOKEN_TYPE_JWT
     */
    accessTokenType?: pulumi.Input<string>;
    /**
     * Additional origins
     */
    additionalOrigins?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * App type, supported values: OIDC_APP_TYPE_WEB, OIDC_APP_TYPE_USER_AGENT, OIDC_APP_TYPE_NATIVE
     */
    appType?: pulumi.Input<string>;
    /**
     * Auth method type, supported values: OIDC_AUTH_METHOD_TYPE_BASIC, OIDC_AUTH_METHOD_TYPE_POST, OIDC_AUTH_METHOD_TYPE_NONE,
     * OIDC_AUTH_METHOD_TYPE_PRIVATE_KEY_JWT
     */
    authMethodType?: pulumi.Input<string>;
    /**
     * Clockskew
     */
    clockSkew?: pulumi.Input<string>;
    /**
     * Dev mode
     */
    devMode?: pulumi.Input<boolean>;
    /**
     * Grant types, supported values: OIDC_GRANT_TYPE_AUTHORIZATION_CODE, OIDC_GRANT_TYPE_IMPLICIT,
     * OIDC_GRANT_TYPE_REFRESH_TOKEN, OIDC_GRANT_TYPE_DEVICE_CODE, OIDC_GRANT_TYPE_TOKEN_EXCHANGE
     */
    grantTypes: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * ID token role assertion
     */
    idTokenRoleAssertion?: pulumi.Input<boolean>;
    /**
     * Token userinfo assertion
     */
    idTokenUserinfoAssertion?: pulumi.Input<boolean>;
    /**
     * Name of the application
     */
    name?: pulumi.Input<string>;
    /**
     * ID of the organization
     */
    orgId?: pulumi.Input<string>;
    /**
     * Post logout redirect URIs
     */
    postLogoutRedirectUris?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * ID of the project
     */
    projectId: pulumi.Input<string>;
    /**
     * RedirectURIs
     */
    redirectUris: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Response type, supported values: OIDC_RESPONSE_TYPE_CODE, OIDC_RESPONSE_TYPE_ID_TOKEN, OIDC_RESPONSE_TYPE_ID_TOKEN_TOKEN
     */
    responseTypes: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Version, supported values: OIDC_VERSION_1_0
     */
    version?: pulumi.Input<string>;
}
