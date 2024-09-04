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
    public static readonly __pulumiType = 'azuread:index/application:Application';

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

    public readonly api!: pulumi.Output<outputs.ApplicationApi | undefined>;
    /**
     * Mapping of app role names to UUIDs
     */
    public /*out*/ readonly appRoleIds!: pulumi.Output<{[key: string]: string}>;
    public readonly appRoles!: pulumi.Output<outputs.ApplicationAppRole[] | undefined>;
    /**
     * The Application ID (also called Client ID)
     *
     * @deprecated Deprecated
     */
    public /*out*/ readonly applicationId!: pulumi.Output<string>;
    /**
     * The Client ID (also called Application ID)
     */
    public /*out*/ readonly clientId!: pulumi.Output<string>;
    /**
     * Description of the application as shown to end users
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Specifies whether this application supports device authentication without a user.
     */
    public readonly deviceOnlyAuthEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * Whether Microsoft has disabled the registered application
     */
    public /*out*/ readonly disabledByMicrosoft!: pulumi.Output<string>;
    /**
     * The display name for the application
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * Specifies whether the application is a public client. Appropriate for apps using token grant flows that don't use a
     * redirect URI
     */
    public readonly fallbackPublicClientEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * Block of features to configure for this application using tags
     */
    public readonly featureTags!: pulumi.Output<outputs.ApplicationFeatureTag[] | undefined>;
    /**
     * Configures the `groups` claim issued in a user or OAuth 2.0 access token that the app expects
     */
    public readonly groupMembershipClaims!: pulumi.Output<string[] | undefined>;
    /**
     * The user-defined URI(s) that uniquely identify an application within its Azure AD tenant, or within a verified custom
     * domain if the application is multi-tenant
     */
    public readonly identifierUris!: pulumi.Output<string[] | undefined>;
    /**
     * Base64 encoded logo image in gif, png or jpeg format
     */
    public readonly logoImage!: pulumi.Output<string | undefined>;
    /**
     * CDN URL to the application's logo
     */
    public /*out*/ readonly logoUrl!: pulumi.Output<string>;
    /**
     * URL of the application's marketing page
     */
    public readonly marketingUrl!: pulumi.Output<string | undefined>;
    /**
     * User-specified notes relevant for the management of the application
     */
    public readonly notes!: pulumi.Output<string | undefined>;
    /**
     * Mapping of OAuth2.0 permission scope names to UUIDs
     */
    public /*out*/ readonly oauth2PermissionScopeIds!: pulumi.Output<{[key: string]: string}>;
    /**
     * Specifies whether, as part of OAuth 2.0 token requests, Azure AD allows POST requests, as opposed to GET requests.
     */
    public readonly oauth2PostResponseRequired!: pulumi.Output<boolean | undefined>;
    /**
     * The application's object ID
     */
    public /*out*/ readonly objectId!: pulumi.Output<string>;
    public readonly optionalClaims!: pulumi.Output<outputs.ApplicationOptionalClaims | undefined>;
    /**
     * A list of object IDs of principals that will be granted ownership of the application
     */
    public readonly owners!: pulumi.Output<string[] | undefined>;
    /**
     * App password definition
     */
    public readonly password!: pulumi.Output<outputs.ApplicationPassword | undefined>;
    /**
     * If `true`, will return an error if an existing application is found with the same name
     */
    public readonly preventDuplicateNames!: pulumi.Output<boolean | undefined>;
    /**
     * URL of the application's privacy statement
     */
    public readonly privacyStatementUrl!: pulumi.Output<string | undefined>;
    public readonly publicClient!: pulumi.Output<outputs.ApplicationPublicClient | undefined>;
    /**
     * The verified publisher domain for the application
     */
    public /*out*/ readonly publisherDomain!: pulumi.Output<string>;
    public readonly requiredResourceAccesses!: pulumi.Output<outputs.ApplicationRequiredResourceAccess[] | undefined>;
    /**
     * References application or service contact information from a Service or Asset Management database
     */
    public readonly serviceManagementReference!: pulumi.Output<string | undefined>;
    /**
     * The Microsoft account types that are supported for the current application
     */
    public readonly signInAudience!: pulumi.Output<string | undefined>;
    public readonly singlePageApplication!: pulumi.Output<outputs.ApplicationSinglePageApplication | undefined>;
    /**
     * URL of the application's support page
     */
    public readonly supportUrl!: pulumi.Output<string | undefined>;
    /**
     * A set of tags to apply to the application
     */
    public readonly tags!: pulumi.Output<string[]>;
    /**
     * Unique ID of the application template from which this application is created
     */
    public readonly templateId!: pulumi.Output<string>;
    /**
     * URL of the application's terms of service statement
     */
    public readonly termsOfServiceUrl!: pulumi.Output<string | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.ApplicationTimeouts | undefined>;
    public readonly web!: pulumi.Output<outputs.ApplicationWeb | undefined>;

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
            resourceInputs["api"] = state ? state.api : undefined;
            resourceInputs["appRoleIds"] = state ? state.appRoleIds : undefined;
            resourceInputs["appRoles"] = state ? state.appRoles : undefined;
            resourceInputs["applicationId"] = state ? state.applicationId : undefined;
            resourceInputs["clientId"] = state ? state.clientId : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["deviceOnlyAuthEnabled"] = state ? state.deviceOnlyAuthEnabled : undefined;
            resourceInputs["disabledByMicrosoft"] = state ? state.disabledByMicrosoft : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["fallbackPublicClientEnabled"] = state ? state.fallbackPublicClientEnabled : undefined;
            resourceInputs["featureTags"] = state ? state.featureTags : undefined;
            resourceInputs["groupMembershipClaims"] = state ? state.groupMembershipClaims : undefined;
            resourceInputs["identifierUris"] = state ? state.identifierUris : undefined;
            resourceInputs["logoImage"] = state ? state.logoImage : undefined;
            resourceInputs["logoUrl"] = state ? state.logoUrl : undefined;
            resourceInputs["marketingUrl"] = state ? state.marketingUrl : undefined;
            resourceInputs["notes"] = state ? state.notes : undefined;
            resourceInputs["oauth2PermissionScopeIds"] = state ? state.oauth2PermissionScopeIds : undefined;
            resourceInputs["oauth2PostResponseRequired"] = state ? state.oauth2PostResponseRequired : undefined;
            resourceInputs["objectId"] = state ? state.objectId : undefined;
            resourceInputs["optionalClaims"] = state ? state.optionalClaims : undefined;
            resourceInputs["owners"] = state ? state.owners : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["preventDuplicateNames"] = state ? state.preventDuplicateNames : undefined;
            resourceInputs["privacyStatementUrl"] = state ? state.privacyStatementUrl : undefined;
            resourceInputs["publicClient"] = state ? state.publicClient : undefined;
            resourceInputs["publisherDomain"] = state ? state.publisherDomain : undefined;
            resourceInputs["requiredResourceAccesses"] = state ? state.requiredResourceAccesses : undefined;
            resourceInputs["serviceManagementReference"] = state ? state.serviceManagementReference : undefined;
            resourceInputs["signInAudience"] = state ? state.signInAudience : undefined;
            resourceInputs["singlePageApplication"] = state ? state.singlePageApplication : undefined;
            resourceInputs["supportUrl"] = state ? state.supportUrl : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["templateId"] = state ? state.templateId : undefined;
            resourceInputs["termsOfServiceUrl"] = state ? state.termsOfServiceUrl : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["web"] = state ? state.web : undefined;
        } else {
            const args = argsOrState as ApplicationArgs | undefined;
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            resourceInputs["api"] = args ? args.api : undefined;
            resourceInputs["appRoles"] = args ? args.appRoles : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["deviceOnlyAuthEnabled"] = args ? args.deviceOnlyAuthEnabled : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["fallbackPublicClientEnabled"] = args ? args.fallbackPublicClientEnabled : undefined;
            resourceInputs["featureTags"] = args ? args.featureTags : undefined;
            resourceInputs["groupMembershipClaims"] = args ? args.groupMembershipClaims : undefined;
            resourceInputs["identifierUris"] = args ? args.identifierUris : undefined;
            resourceInputs["logoImage"] = args ? args.logoImage : undefined;
            resourceInputs["marketingUrl"] = args ? args.marketingUrl : undefined;
            resourceInputs["notes"] = args ? args.notes : undefined;
            resourceInputs["oauth2PostResponseRequired"] = args ? args.oauth2PostResponseRequired : undefined;
            resourceInputs["optionalClaims"] = args ? args.optionalClaims : undefined;
            resourceInputs["owners"] = args ? args.owners : undefined;
            resourceInputs["password"] = args ? args.password : undefined;
            resourceInputs["preventDuplicateNames"] = args ? args.preventDuplicateNames : undefined;
            resourceInputs["privacyStatementUrl"] = args ? args.privacyStatementUrl : undefined;
            resourceInputs["publicClient"] = args ? args.publicClient : undefined;
            resourceInputs["requiredResourceAccesses"] = args ? args.requiredResourceAccesses : undefined;
            resourceInputs["serviceManagementReference"] = args ? args.serviceManagementReference : undefined;
            resourceInputs["signInAudience"] = args ? args.signInAudience : undefined;
            resourceInputs["singlePageApplication"] = args ? args.singlePageApplication : undefined;
            resourceInputs["supportUrl"] = args ? args.supportUrl : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["templateId"] = args ? args.templateId : undefined;
            resourceInputs["termsOfServiceUrl"] = args ? args.termsOfServiceUrl : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["web"] = args ? args.web : undefined;
            resourceInputs["appRoleIds"] = undefined /*out*/;
            resourceInputs["applicationId"] = undefined /*out*/;
            resourceInputs["clientId"] = undefined /*out*/;
            resourceInputs["disabledByMicrosoft"] = undefined /*out*/;
            resourceInputs["logoUrl"] = undefined /*out*/;
            resourceInputs["oauth2PermissionScopeIds"] = undefined /*out*/;
            resourceInputs["objectId"] = undefined /*out*/;
            resourceInputs["publisherDomain"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Application.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Application resources.
 */
export interface ApplicationState {
    api?: pulumi.Input<inputs.ApplicationApi>;
    /**
     * Mapping of app role names to UUIDs
     */
    appRoleIds?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    appRoles?: pulumi.Input<pulumi.Input<inputs.ApplicationAppRole>[]>;
    /**
     * The Application ID (also called Client ID)
     *
     * @deprecated Deprecated
     */
    applicationId?: pulumi.Input<string>;
    /**
     * The Client ID (also called Application ID)
     */
    clientId?: pulumi.Input<string>;
    /**
     * Description of the application as shown to end users
     */
    description?: pulumi.Input<string>;
    /**
     * Specifies whether this application supports device authentication without a user.
     */
    deviceOnlyAuthEnabled?: pulumi.Input<boolean>;
    /**
     * Whether Microsoft has disabled the registered application
     */
    disabledByMicrosoft?: pulumi.Input<string>;
    /**
     * The display name for the application
     */
    displayName?: pulumi.Input<string>;
    /**
     * Specifies whether the application is a public client. Appropriate for apps using token grant flows that don't use a
     * redirect URI
     */
    fallbackPublicClientEnabled?: pulumi.Input<boolean>;
    /**
     * Block of features to configure for this application using tags
     */
    featureTags?: pulumi.Input<pulumi.Input<inputs.ApplicationFeatureTag>[]>;
    /**
     * Configures the `groups` claim issued in a user or OAuth 2.0 access token that the app expects
     */
    groupMembershipClaims?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The user-defined URI(s) that uniquely identify an application within its Azure AD tenant, or within a verified custom
     * domain if the application is multi-tenant
     */
    identifierUris?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Base64 encoded logo image in gif, png or jpeg format
     */
    logoImage?: pulumi.Input<string>;
    /**
     * CDN URL to the application's logo
     */
    logoUrl?: pulumi.Input<string>;
    /**
     * URL of the application's marketing page
     */
    marketingUrl?: pulumi.Input<string>;
    /**
     * User-specified notes relevant for the management of the application
     */
    notes?: pulumi.Input<string>;
    /**
     * Mapping of OAuth2.0 permission scope names to UUIDs
     */
    oauth2PermissionScopeIds?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Specifies whether, as part of OAuth 2.0 token requests, Azure AD allows POST requests, as opposed to GET requests.
     */
    oauth2PostResponseRequired?: pulumi.Input<boolean>;
    /**
     * The application's object ID
     */
    objectId?: pulumi.Input<string>;
    optionalClaims?: pulumi.Input<inputs.ApplicationOptionalClaims>;
    /**
     * A list of object IDs of principals that will be granted ownership of the application
     */
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * App password definition
     */
    password?: pulumi.Input<inputs.ApplicationPassword>;
    /**
     * If `true`, will return an error if an existing application is found with the same name
     */
    preventDuplicateNames?: pulumi.Input<boolean>;
    /**
     * URL of the application's privacy statement
     */
    privacyStatementUrl?: pulumi.Input<string>;
    publicClient?: pulumi.Input<inputs.ApplicationPublicClient>;
    /**
     * The verified publisher domain for the application
     */
    publisherDomain?: pulumi.Input<string>;
    requiredResourceAccesses?: pulumi.Input<pulumi.Input<inputs.ApplicationRequiredResourceAccess>[]>;
    /**
     * References application or service contact information from a Service or Asset Management database
     */
    serviceManagementReference?: pulumi.Input<string>;
    /**
     * The Microsoft account types that are supported for the current application
     */
    signInAudience?: pulumi.Input<string>;
    singlePageApplication?: pulumi.Input<inputs.ApplicationSinglePageApplication>;
    /**
     * URL of the application's support page
     */
    supportUrl?: pulumi.Input<string>;
    /**
     * A set of tags to apply to the application
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Unique ID of the application template from which this application is created
     */
    templateId?: pulumi.Input<string>;
    /**
     * URL of the application's terms of service statement
     */
    termsOfServiceUrl?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ApplicationTimeouts>;
    web?: pulumi.Input<inputs.ApplicationWeb>;
}

/**
 * The set of arguments for constructing a Application resource.
 */
export interface ApplicationArgs {
    api?: pulumi.Input<inputs.ApplicationApi>;
    appRoles?: pulumi.Input<pulumi.Input<inputs.ApplicationAppRole>[]>;
    /**
     * Description of the application as shown to end users
     */
    description?: pulumi.Input<string>;
    /**
     * Specifies whether this application supports device authentication without a user.
     */
    deviceOnlyAuthEnabled?: pulumi.Input<boolean>;
    /**
     * The display name for the application
     */
    displayName: pulumi.Input<string>;
    /**
     * Specifies whether the application is a public client. Appropriate for apps using token grant flows that don't use a
     * redirect URI
     */
    fallbackPublicClientEnabled?: pulumi.Input<boolean>;
    /**
     * Block of features to configure for this application using tags
     */
    featureTags?: pulumi.Input<pulumi.Input<inputs.ApplicationFeatureTag>[]>;
    /**
     * Configures the `groups` claim issued in a user or OAuth 2.0 access token that the app expects
     */
    groupMembershipClaims?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The user-defined URI(s) that uniquely identify an application within its Azure AD tenant, or within a verified custom
     * domain if the application is multi-tenant
     */
    identifierUris?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Base64 encoded logo image in gif, png or jpeg format
     */
    logoImage?: pulumi.Input<string>;
    /**
     * URL of the application's marketing page
     */
    marketingUrl?: pulumi.Input<string>;
    /**
     * User-specified notes relevant for the management of the application
     */
    notes?: pulumi.Input<string>;
    /**
     * Specifies whether, as part of OAuth 2.0 token requests, Azure AD allows POST requests, as opposed to GET requests.
     */
    oauth2PostResponseRequired?: pulumi.Input<boolean>;
    optionalClaims?: pulumi.Input<inputs.ApplicationOptionalClaims>;
    /**
     * A list of object IDs of principals that will be granted ownership of the application
     */
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * App password definition
     */
    password?: pulumi.Input<inputs.ApplicationPassword>;
    /**
     * If `true`, will return an error if an existing application is found with the same name
     */
    preventDuplicateNames?: pulumi.Input<boolean>;
    /**
     * URL of the application's privacy statement
     */
    privacyStatementUrl?: pulumi.Input<string>;
    publicClient?: pulumi.Input<inputs.ApplicationPublicClient>;
    requiredResourceAccesses?: pulumi.Input<pulumi.Input<inputs.ApplicationRequiredResourceAccess>[]>;
    /**
     * References application or service contact information from a Service or Asset Management database
     */
    serviceManagementReference?: pulumi.Input<string>;
    /**
     * The Microsoft account types that are supported for the current application
     */
    signInAudience?: pulumi.Input<string>;
    singlePageApplication?: pulumi.Input<inputs.ApplicationSinglePageApplication>;
    /**
     * URL of the application's support page
     */
    supportUrl?: pulumi.Input<string>;
    /**
     * A set of tags to apply to the application
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Unique ID of the application template from which this application is created
     */
    templateId?: pulumi.Input<string>;
    /**
     * URL of the application's terms of service statement
     */
    termsOfServiceUrl?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ApplicationTimeouts>;
    web?: pulumi.Input<inputs.ApplicationWeb>;
}
