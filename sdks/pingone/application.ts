// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Application extends pulumi.CustomResource {
    /**
     * Get an existing Application resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApplicationState, opts?: pulumi.CustomResourceOptions): Application {
        return new Application(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pingone:index/application:Application';

    /**
     * Returns true if the given object is an instance of Application.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Application {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Application.__pulumiType;
    }

    /**
     * A single object that specifies group access control settings.
     */
    public readonly accessControlGroupOptions!: pulumi.Output<outputs.ApplicationAccessControlGroupOptions | undefined>;
    /**
     * A string that specifies the user role required to access the application. A user is an admin user if the user has one or
     * more admin roles assigned, such as `Organization Admin`, `Environment Admin`, `Identity Data Admin`, or `Client
     * Application Developer`. Options are `ADMIN_USERS_ONLY`.
     */
    public readonly accessControlRoleType!: pulumi.Output<string>;
    /**
     * A string that specifies the description of the application.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * A boolean that specifies whether the application is enabled in the environment. Defaults to `false`.
     */
    public readonly enabled!: pulumi.Output<boolean>;
    /**
     * The PingOne resource ID of the environment to create and manage the application in. Must be a valid PingOne resource ID.
     * This field is immutable and will trigger a replace plan if changed.
     */
    public readonly environmentId!: pulumi.Output<string>;
    /**
     * A single object that specifies External link application specific settings. Exactly one of the following must be
     * defined: `external_link_options`, `oidc_options`, `saml_options`. If this object is added or removed, a replacement plan
     * is triggered. Parameters within the object are subject to their own immutability rules.
     */
    public readonly externalLinkOptions!: pulumi.Output<outputs.ApplicationExternalLinkOptions | undefined>;
    /**
     * A boolean to specify whether the application is hidden in the application portal despite the configured group access
     * policy. Defaults to `false`.
     */
    public readonly hiddenFromAppPortal!: pulumi.Output<boolean>;
    /**
     * A single object that specifies settings for the application icon.
     */
    public readonly icon!: pulumi.Output<outputs.ApplicationIcon | undefined>;
    /**
     * A string that specifies the custom login page URL for the application. If you set the `login_page_url` property for
     * applications in an environment that sets a custom domain, the URL should include the top-level domain and at least one
     * additional domain level. **Warning** To avoid issues with third-party cookies in some browsers, a custom domain must be
     * used, giving your PingOne environment the same parent domain as your authentication application. For more information
     * about custom domains, see Custom domains. The provided URL is expected to use the `https://` schema. The `http` schema
     * is permitted where the host is `localhost` or `127.0.0.1`.
     */
    public readonly loginPageUrl!: pulumi.Output<string | undefined>;
    /**
     * A string that specifies the name of the application.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * A single object that specifies OIDC/OAuth application specific settings. Exactly one of the following must be defined:
     * `external_link_options`, `oidc_options`, `saml_options`. If this object is added or removed, a replacement plan is
     * triggered. Parameters within the object are subject to their own immutability rules.
     */
    public readonly oidcOptions!: pulumi.Output<outputs.ApplicationOidcOptions | undefined>;
    /**
     * A single object that specifies SAML application specific settings. Exactly one of the following must be defined:
     * `external_link_options`, `oidc_options`, `saml_options`. If this object is added or removed, a replacement plan is
     * triggered. Parameters within the object are subject to their own immutability rules.
     */
    public readonly samlOptions!: pulumi.Output<outputs.ApplicationSamlOptions | undefined>;
    /**
     * An array of strings that specifies the list of labels associated with the application. Options are
     * `PING_FED_CONNECTION_INTEGRATION`. Conflicts with `external_link_options`, `saml_options`.
     */
    public readonly tags!: pulumi.Output<string[] | undefined>;

    /**
     * Create a Application resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApplicationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ApplicationArgs | ApplicationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ApplicationState | undefined;
            resourceInputs["accessControlGroupOptions"] = state ? state.accessControlGroupOptions : undefined;
            resourceInputs["accessControlRoleType"] = state ? state.accessControlRoleType : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["environmentId"] = state ? state.environmentId : undefined;
            resourceInputs["externalLinkOptions"] = state ? state.externalLinkOptions : undefined;
            resourceInputs["hiddenFromAppPortal"] = state ? state.hiddenFromAppPortal : undefined;
            resourceInputs["icon"] = state ? state.icon : undefined;
            resourceInputs["loginPageUrl"] = state ? state.loginPageUrl : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["oidcOptions"] = state ? state.oidcOptions : undefined;
            resourceInputs["samlOptions"] = state ? state.samlOptions : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as ApplicationArgs | undefined;
            if ((!args || args.environmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'environmentId'");
            }
            resourceInputs["accessControlGroupOptions"] = args ? args.accessControlGroupOptions : undefined;
            resourceInputs["accessControlRoleType"] = args ? args.accessControlRoleType : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["environmentId"] = args ? args.environmentId : undefined;
            resourceInputs["externalLinkOptions"] = args ? args.externalLinkOptions : undefined;
            resourceInputs["hiddenFromAppPortal"] = args ? args.hiddenFromAppPortal : undefined;
            resourceInputs["icon"] = args ? args.icon : undefined;
            resourceInputs["loginPageUrl"] = args ? args.loginPageUrl : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["oidcOptions"] = args ? args.oidcOptions : undefined;
            resourceInputs["samlOptions"] = args ? args.samlOptions : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Application.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Application resources.
 */
export interface ApplicationState {
    /**
     * A single object that specifies group access control settings.
     */
    accessControlGroupOptions?: pulumi.Input<inputs.ApplicationAccessControlGroupOptions>;
    /**
     * A string that specifies the user role required to access the application. A user is an admin user if the user has one or
     * more admin roles assigned, such as `Organization Admin`, `Environment Admin`, `Identity Data Admin`, or `Client
     * Application Developer`. Options are `ADMIN_USERS_ONLY`.
     */
    accessControlRoleType?: pulumi.Input<string>;
    /**
     * A string that specifies the description of the application.
     */
    description?: pulumi.Input<string>;
    /**
     * A boolean that specifies whether the application is enabled in the environment. Defaults to `false`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The PingOne resource ID of the environment to create and manage the application in. Must be a valid PingOne resource ID.
     * This field is immutable and will trigger a replace plan if changed.
     */
    environmentId?: pulumi.Input<string>;
    /**
     * A single object that specifies External link application specific settings. Exactly one of the following must be
     * defined: `external_link_options`, `oidc_options`, `saml_options`. If this object is added or removed, a replacement plan
     * is triggered. Parameters within the object are subject to their own immutability rules.
     */
    externalLinkOptions?: pulumi.Input<inputs.ApplicationExternalLinkOptions>;
    /**
     * A boolean to specify whether the application is hidden in the application portal despite the configured group access
     * policy. Defaults to `false`.
     */
    hiddenFromAppPortal?: pulumi.Input<boolean>;
    /**
     * A single object that specifies settings for the application icon.
     */
    icon?: pulumi.Input<inputs.ApplicationIcon>;
    /**
     * A string that specifies the custom login page URL for the application. If you set the `login_page_url` property for
     * applications in an environment that sets a custom domain, the URL should include the top-level domain and at least one
     * additional domain level. **Warning** To avoid issues with third-party cookies in some browsers, a custom domain must be
     * used, giving your PingOne environment the same parent domain as your authentication application. For more information
     * about custom domains, see Custom domains. The provided URL is expected to use the `https://` schema. The `http` schema
     * is permitted where the host is `localhost` or `127.0.0.1`.
     */
    loginPageUrl?: pulumi.Input<string>;
    /**
     * A string that specifies the name of the application.
     */
    name?: pulumi.Input<string>;
    /**
     * A single object that specifies OIDC/OAuth application specific settings. Exactly one of the following must be defined:
     * `external_link_options`, `oidc_options`, `saml_options`. If this object is added or removed, a replacement plan is
     * triggered. Parameters within the object are subject to their own immutability rules.
     */
    oidcOptions?: pulumi.Input<inputs.ApplicationOidcOptions>;
    /**
     * A single object that specifies SAML application specific settings. Exactly one of the following must be defined:
     * `external_link_options`, `oidc_options`, `saml_options`. If this object is added or removed, a replacement plan is
     * triggered. Parameters within the object are subject to their own immutability rules.
     */
    samlOptions?: pulumi.Input<inputs.ApplicationSamlOptions>;
    /**
     * An array of strings that specifies the list of labels associated with the application. Options are
     * `PING_FED_CONNECTION_INTEGRATION`. Conflicts with `external_link_options`, `saml_options`.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a Application resource.
 */
export interface ApplicationArgs {
    /**
     * A single object that specifies group access control settings.
     */
    accessControlGroupOptions?: pulumi.Input<inputs.ApplicationAccessControlGroupOptions>;
    /**
     * A string that specifies the user role required to access the application. A user is an admin user if the user has one or
     * more admin roles assigned, such as `Organization Admin`, `Environment Admin`, `Identity Data Admin`, or `Client
     * Application Developer`. Options are `ADMIN_USERS_ONLY`.
     */
    accessControlRoleType?: pulumi.Input<string>;
    /**
     * A string that specifies the description of the application.
     */
    description?: pulumi.Input<string>;
    /**
     * A boolean that specifies whether the application is enabled in the environment. Defaults to `false`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The PingOne resource ID of the environment to create and manage the application in. Must be a valid PingOne resource ID.
     * This field is immutable and will trigger a replace plan if changed.
     */
    environmentId: pulumi.Input<string>;
    /**
     * A single object that specifies External link application specific settings. Exactly one of the following must be
     * defined: `external_link_options`, `oidc_options`, `saml_options`. If this object is added or removed, a replacement plan
     * is triggered. Parameters within the object are subject to their own immutability rules.
     */
    externalLinkOptions?: pulumi.Input<inputs.ApplicationExternalLinkOptions>;
    /**
     * A boolean to specify whether the application is hidden in the application portal despite the configured group access
     * policy. Defaults to `false`.
     */
    hiddenFromAppPortal?: pulumi.Input<boolean>;
    /**
     * A single object that specifies settings for the application icon.
     */
    icon?: pulumi.Input<inputs.ApplicationIcon>;
    /**
     * A string that specifies the custom login page URL for the application. If you set the `login_page_url` property for
     * applications in an environment that sets a custom domain, the URL should include the top-level domain and at least one
     * additional domain level. **Warning** To avoid issues with third-party cookies in some browsers, a custom domain must be
     * used, giving your PingOne environment the same parent domain as your authentication application. For more information
     * about custom domains, see Custom domains. The provided URL is expected to use the `https://` schema. The `http` schema
     * is permitted where the host is `localhost` or `127.0.0.1`.
     */
    loginPageUrl?: pulumi.Input<string>;
    /**
     * A string that specifies the name of the application.
     */
    name?: pulumi.Input<string>;
    /**
     * A single object that specifies OIDC/OAuth application specific settings. Exactly one of the following must be defined:
     * `external_link_options`, `oidc_options`, `saml_options`. If this object is added or removed, a replacement plan is
     * triggered. Parameters within the object are subject to their own immutability rules.
     */
    oidcOptions?: pulumi.Input<inputs.ApplicationOidcOptions>;
    /**
     * A single object that specifies SAML application specific settings. Exactly one of the following must be defined:
     * `external_link_options`, `oidc_options`, `saml_options`. If this object is added or removed, a replacement plan is
     * triggered. Parameters within the object are subject to their own immutability rules.
     */
    samlOptions?: pulumi.Input<inputs.ApplicationSamlOptions>;
    /**
     * An array of strings that specifies the list of labels associated with the application. Options are
     * `PING_FED_CONNECTION_INTEGRATION`. Conflicts with `external_link_options`, `saml_options`.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}
