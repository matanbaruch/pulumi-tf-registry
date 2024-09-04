// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AccountIdp extends pulumi.CustomResource {
    /**
     * Get an existing AccountIdp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AccountIdpState, opts?: pulumi.CustomResourceOptions): AccountIdp {
        return new AccountIdp(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'codefresh:index/accountIdp:AccountIdp';

    /**
     * Returns true if the given object is an instance of AccountIdp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AccountIdp {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AccountIdp.__pulumiType;
    }

    /**
     * Settings for Auth0 IDP
     */
    public readonly auth0!: pulumi.Output<outputs.AccountIdpAuth0 | undefined>;
    /**
     * Settings for Azure IDP
     */
    public readonly azure!: pulumi.Output<outputs.AccountIdpAzure | undefined>;
    /**
     * Type of the IDP. Derived from idp specific config object (github, gitlab etc)
     */
    public /*out*/ readonly clientType!: pulumi.Output<string>;
    /**
     * The display name for the IDP.
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * Settings for GitHub IDP
     */
    public readonly github!: pulumi.Output<outputs.AccountIdpGithub | undefined>;
    /**
     * Settings for GitLab IDP
     */
    public readonly gitlab!: pulumi.Output<outputs.AccountIdpGitlab | undefined>;
    /**
     * Settings for Google IDP
     */
    public readonly google!: pulumi.Output<outputs.AccountIdpGoogle | undefined>;
    /**
     * Settings for Keycloak IDP
     */
    public readonly keycloak!: pulumi.Output<outputs.AccountIdpKeycloak | undefined>;
    /**
     * Settings for Keycloak IDP
     */
    public readonly ldap!: pulumi.Output<outputs.AccountIdpLdap | undefined>;
    /**
     * Login url using the IDP to Codefresh
     */
    public /*out*/ readonly loginUrl!: pulumi.Output<string>;
    /**
     * Name of the IDP, will be generated if not set
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Settings for Okta IDP
     */
    public readonly okta!: pulumi.Output<outputs.AccountIdpOkta | undefined>;
    /**
     * Settings for onelogin IDP
     */
    public readonly onelogin!: pulumi.Output<outputs.AccountIdpOnelogin | undefined>;
    /**
     * UI Callback url for the identity provider
     */
    public /*out*/ readonly redirectUiUrl!: pulumi.Output<string>;
    /**
     * API Callback url for the identity provider
     */
    public /*out*/ readonly redirectUrl!: pulumi.Output<string>;
    /**
     * Settings for SAML IDP
     */
    public readonly saml!: pulumi.Output<outputs.AccountIdpSaml | undefined>;

    /**
     * Create a AccountIdp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AccountIdpArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AccountIdpArgs | AccountIdpState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AccountIdpState | undefined;
            resourceInputs["auth0"] = state ? state.auth0 : undefined;
            resourceInputs["azure"] = state ? state.azure : undefined;
            resourceInputs["clientType"] = state ? state.clientType : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["github"] = state ? state.github : undefined;
            resourceInputs["gitlab"] = state ? state.gitlab : undefined;
            resourceInputs["google"] = state ? state.google : undefined;
            resourceInputs["keycloak"] = state ? state.keycloak : undefined;
            resourceInputs["ldap"] = state ? state.ldap : undefined;
            resourceInputs["loginUrl"] = state ? state.loginUrl : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["okta"] = state ? state.okta : undefined;
            resourceInputs["onelogin"] = state ? state.onelogin : undefined;
            resourceInputs["redirectUiUrl"] = state ? state.redirectUiUrl : undefined;
            resourceInputs["redirectUrl"] = state ? state.redirectUrl : undefined;
            resourceInputs["saml"] = state ? state.saml : undefined;
        } else {
            const args = argsOrState as AccountIdpArgs | undefined;
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            resourceInputs["auth0"] = args ? args.auth0 : undefined;
            resourceInputs["azure"] = args ? args.azure : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["github"] = args ? args.github : undefined;
            resourceInputs["gitlab"] = args ? args.gitlab : undefined;
            resourceInputs["google"] = args ? args.google : undefined;
            resourceInputs["keycloak"] = args ? args.keycloak : undefined;
            resourceInputs["ldap"] = args ? args.ldap : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["okta"] = args ? args.okta : undefined;
            resourceInputs["onelogin"] = args ? args.onelogin : undefined;
            resourceInputs["saml"] = args ? args.saml : undefined;
            resourceInputs["clientType"] = undefined /*out*/;
            resourceInputs["loginUrl"] = undefined /*out*/;
            resourceInputs["redirectUiUrl"] = undefined /*out*/;
            resourceInputs["redirectUrl"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AccountIdp.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AccountIdp resources.
 */
export interface AccountIdpState {
    /**
     * Settings for Auth0 IDP
     */
    auth0?: pulumi.Input<inputs.AccountIdpAuth0>;
    /**
     * Settings for Azure IDP
     */
    azure?: pulumi.Input<inputs.AccountIdpAzure>;
    /**
     * Type of the IDP. Derived from idp specific config object (github, gitlab etc)
     */
    clientType?: pulumi.Input<string>;
    /**
     * The display name for the IDP.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Settings for GitHub IDP
     */
    github?: pulumi.Input<inputs.AccountIdpGithub>;
    /**
     * Settings for GitLab IDP
     */
    gitlab?: pulumi.Input<inputs.AccountIdpGitlab>;
    /**
     * Settings for Google IDP
     */
    google?: pulumi.Input<inputs.AccountIdpGoogle>;
    /**
     * Settings for Keycloak IDP
     */
    keycloak?: pulumi.Input<inputs.AccountIdpKeycloak>;
    /**
     * Settings for Keycloak IDP
     */
    ldap?: pulumi.Input<inputs.AccountIdpLdap>;
    /**
     * Login url using the IDP to Codefresh
     */
    loginUrl?: pulumi.Input<string>;
    /**
     * Name of the IDP, will be generated if not set
     */
    name?: pulumi.Input<string>;
    /**
     * Settings for Okta IDP
     */
    okta?: pulumi.Input<inputs.AccountIdpOkta>;
    /**
     * Settings for onelogin IDP
     */
    onelogin?: pulumi.Input<inputs.AccountIdpOnelogin>;
    /**
     * UI Callback url for the identity provider
     */
    redirectUiUrl?: pulumi.Input<string>;
    /**
     * API Callback url for the identity provider
     */
    redirectUrl?: pulumi.Input<string>;
    /**
     * Settings for SAML IDP
     */
    saml?: pulumi.Input<inputs.AccountIdpSaml>;
}

/**
 * The set of arguments for constructing a AccountIdp resource.
 */
export interface AccountIdpArgs {
    /**
     * Settings for Auth0 IDP
     */
    auth0?: pulumi.Input<inputs.AccountIdpAuth0>;
    /**
     * Settings for Azure IDP
     */
    azure?: pulumi.Input<inputs.AccountIdpAzure>;
    /**
     * The display name for the IDP.
     */
    displayName: pulumi.Input<string>;
    /**
     * Settings for GitHub IDP
     */
    github?: pulumi.Input<inputs.AccountIdpGithub>;
    /**
     * Settings for GitLab IDP
     */
    gitlab?: pulumi.Input<inputs.AccountIdpGitlab>;
    /**
     * Settings for Google IDP
     */
    google?: pulumi.Input<inputs.AccountIdpGoogle>;
    /**
     * Settings for Keycloak IDP
     */
    keycloak?: pulumi.Input<inputs.AccountIdpKeycloak>;
    /**
     * Settings for Keycloak IDP
     */
    ldap?: pulumi.Input<inputs.AccountIdpLdap>;
    /**
     * Name of the IDP, will be generated if not set
     */
    name?: pulumi.Input<string>;
    /**
     * Settings for Okta IDP
     */
    okta?: pulumi.Input<inputs.AccountIdpOkta>;
    /**
     * Settings for onelogin IDP
     */
    onelogin?: pulumi.Input<inputs.AccountIdpOnelogin>;
    /**
     * Settings for SAML IDP
     */
    saml?: pulumi.Input<inputs.AccountIdpSaml>;
}
