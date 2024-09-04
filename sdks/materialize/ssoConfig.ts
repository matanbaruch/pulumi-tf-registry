// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SsoConfig extends pulumi.CustomResource {
    /**
     * Get an existing SsoConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SsoConfigState, opts?: pulumi.CustomResourceOptions): SsoConfig {
        return new SsoConfig(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'materialize:index/ssoConfig:SsoConfig';

    /**
     * Returns true if the given object is an instance of SsoConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SsoConfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SsoConfig.__pulumiType;
    }

    /**
     * Whether SSO is enabled or not. If enabled, users will be redirected to the SSO endpoint for authentication. The
     * configuration needs to be valid for SSO to work.
     */
    public readonly enabled!: pulumi.Output<boolean>;
    /**
     * The client ID of the OIDC application. This is used to identify the application to the OIDC service. This is required if
     * the type is OIDC.
     */
    public readonly oidcClientId!: pulumi.Output<string | undefined>;
    /**
     * The client secret of the OIDC application. This is used to authenticate the application to the OIDC service. This is
     * required if the type is OIDC.
     */
    public readonly oidcSecret!: pulumi.Output<string | undefined>;
    /**
     * The public certificate of the SSO service. This is used to verify the SSO response. The certificate must be in PEM
     * format. The certificate must be accessible from the browser. If the certificate is not accessible from the browser, you
     * can use the public certificate of the Identity Provider (IdP) instead.
     */
    public readonly publicCertificate!: pulumi.Output<string>;
    /**
     * Indicates whether the SSO request needs to be digitally signed.
     */
    public readonly signRequest!: pulumi.Output<boolean>;
    /**
     * The URL endpoint for the SSO service. This is the URL that users will be redirected to for authentication. The URL must
     * be accessible from the browser.
     */
    public readonly ssoEndpoint!: pulumi.Output<string>;
    /**
     * Defines the type of SSO protocol being used (e.g., saml, oidc).
     */
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a SsoConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SsoConfigArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SsoConfigArgs | SsoConfigState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SsoConfigState | undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["oidcClientId"] = state ? state.oidcClientId : undefined;
            resourceInputs["oidcSecret"] = state ? state.oidcSecret : undefined;
            resourceInputs["publicCertificate"] = state ? state.publicCertificate : undefined;
            resourceInputs["signRequest"] = state ? state.signRequest : undefined;
            resourceInputs["ssoEndpoint"] = state ? state.ssoEndpoint : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as SsoConfigArgs | undefined;
            if ((!args || args.enabled === undefined) && !opts.urn) {
                throw new Error("Missing required property 'enabled'");
            }
            if ((!args || args.publicCertificate === undefined) && !opts.urn) {
                throw new Error("Missing required property 'publicCertificate'");
            }
            if ((!args || args.signRequest === undefined) && !opts.urn) {
                throw new Error("Missing required property 'signRequest'");
            }
            if ((!args || args.ssoEndpoint === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ssoEndpoint'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["oidcClientId"] = args ? args.oidcClientId : undefined;
            resourceInputs["oidcSecret"] = args ? args.oidcSecret : undefined;
            resourceInputs["publicCertificate"] = args ? args.publicCertificate : undefined;
            resourceInputs["signRequest"] = args ? args.signRequest : undefined;
            resourceInputs["ssoEndpoint"] = args ? args.ssoEndpoint : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SsoConfig.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SsoConfig resources.
 */
export interface SsoConfigState {
    /**
     * Whether SSO is enabled or not. If enabled, users will be redirected to the SSO endpoint for authentication. The
     * configuration needs to be valid for SSO to work.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The client ID of the OIDC application. This is used to identify the application to the OIDC service. This is required if
     * the type is OIDC.
     */
    oidcClientId?: pulumi.Input<string>;
    /**
     * The client secret of the OIDC application. This is used to authenticate the application to the OIDC service. This is
     * required if the type is OIDC.
     */
    oidcSecret?: pulumi.Input<string>;
    /**
     * The public certificate of the SSO service. This is used to verify the SSO response. The certificate must be in PEM
     * format. The certificate must be accessible from the browser. If the certificate is not accessible from the browser, you
     * can use the public certificate of the Identity Provider (IdP) instead.
     */
    publicCertificate?: pulumi.Input<string>;
    /**
     * Indicates whether the SSO request needs to be digitally signed.
     */
    signRequest?: pulumi.Input<boolean>;
    /**
     * The URL endpoint for the SSO service. This is the URL that users will be redirected to for authentication. The URL must
     * be accessible from the browser.
     */
    ssoEndpoint?: pulumi.Input<string>;
    /**
     * Defines the type of SSO protocol being used (e.g., saml, oidc).
     */
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SsoConfig resource.
 */
export interface SsoConfigArgs {
    /**
     * Whether SSO is enabled or not. If enabled, users will be redirected to the SSO endpoint for authentication. The
     * configuration needs to be valid for SSO to work.
     */
    enabled: pulumi.Input<boolean>;
    /**
     * The client ID of the OIDC application. This is used to identify the application to the OIDC service. This is required if
     * the type is OIDC.
     */
    oidcClientId?: pulumi.Input<string>;
    /**
     * The client secret of the OIDC application. This is used to authenticate the application to the OIDC service. This is
     * required if the type is OIDC.
     */
    oidcSecret?: pulumi.Input<string>;
    /**
     * The public certificate of the SSO service. This is used to verify the SSO response. The certificate must be in PEM
     * format. The certificate must be accessible from the browser. If the certificate is not accessible from the browser, you
     * can use the public certificate of the Identity Provider (IdP) instead.
     */
    publicCertificate: pulumi.Input<string>;
    /**
     * Indicates whether the SSO request needs to be digitally signed.
     */
    signRequest: pulumi.Input<boolean>;
    /**
     * The URL endpoint for the SSO service. This is the URL that users will be redirected to for authentication. The URL must
     * be accessible from the browser.
     */
    ssoEndpoint: pulumi.Input<string>;
    /**
     * Defines the type of SSO protocol being used (e.g., saml, oidc).
     */
    type: pulumi.Input<string>;
}
