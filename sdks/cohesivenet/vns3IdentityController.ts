// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Vns3IdentityController extends pulumi.CustomResource {
    /**
     * Get an existing Vns3IdentityController resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Vns3IdentityControllerState, opts?: pulumi.CustomResourceOptions): Vns3IdentityController {
        return new Vns3IdentityController(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'cohesivenet:index/vns3IdentityController:Vns3IdentityController';

    /**
     * Returns true if the given object is an instance of Vns3IdentityController.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Vns3IdentityController {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Vns3IdentityController.__pulumiType;
    }

    /**
     * Authorization Endpoint
     */
    public readonly authorizationEndpoint!: pulumi.Output<string | undefined>;
    /**
     * The bind DN
     */
    public readonly binddn!: pulumi.Output<string | undefined>;
    /**
     * The bind password
     */
    public readonly bindpw!: pulumi.Output<string | undefined>;
    /**
     * Enabled
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * Whether to encrypt LDAP communication
     */
    public readonly encrypt!: pulumi.Output<boolean | undefined>;
    /**
     * Whether to encrypt auth
     */
    public readonly encryptAuth!: pulumi.Output<boolean | undefined>;
    /**
     * Whether to encrypt auth cert
     */
    public readonly encryptAuthCert!: pulumi.Output<boolean | undefined>;
    /**
     * The auth cert data
     */
    public readonly encryptAuthCertData!: pulumi.Output<string | undefined>;
    /**
     * The auth cert filename
     */
    public readonly encryptAuthCertFilename!: pulumi.Output<string | undefined>;
    /**
     * Whether to encrypt auth key
     */
    public readonly encryptAuthKey!: pulumi.Output<boolean | undefined>;
    /**
     * The auth key data
     */
    public readonly encryptAuthKeyData!: pulumi.Output<string | undefined>;
    /**
     * The auth key filename
     */
    public readonly encryptAuthKeyFilename!: pulumi.Output<string | undefined>;
    /**
     * Whether to encrypt CA cert
     */
    public readonly encryptCaCert!: pulumi.Output<boolean | undefined>;
    /**
     * The CA cert data
     */
    public readonly encryptCaCertData!: pulumi.Output<string | undefined>;
    /**
     * The CA cert filename
     */
    public readonly encryptCaCertFilename!: pulumi.Output<string | undefined>;
    /**
     * Whether to encrypt LDAPS communication
     */
    public readonly encryptLdaps!: pulumi.Output<boolean | undefined>;
    /**
     * Whether to encrypt verify CA
     */
    public readonly encryptVerifyCa!: pulumi.Output<boolean | undefined>;
    /**
     * The group base DN
     */
    public readonly groupBase!: pulumi.Output<string | undefined>;
    /**
     * The group ID attribute
     */
    public readonly groupIdAttribute!: pulumi.Output<string | undefined>;
    /**
     * The group list filter
     */
    public readonly groupListFilter!: pulumi.Output<string | undefined>;
    /**
     * The group member attribute
     */
    public readonly groupMemberAttrFormat!: pulumi.Output<string | undefined>;
    /**
     * The group member attribute
     */
    public readonly groupMemberAttribute!: pulumi.Output<string | undefined>;
    /**
     * The group list filter
     */
    public readonly groupSearchScope!: pulumi.Output<string | undefined>;
    /**
     * Host
     */
    public readonly host!: pulumi.Output<string | undefined>;
    /**
     * Identifier
     */
    public readonly identifier!: pulumi.Output<string | undefined>;
    /**
     * Identity provider
     */
    public readonly identityProvider!: pulumi.Output<string | undefined>;
    /**
     * Issuer
     */
    public readonly issuer!: pulumi.Output<string | undefined>;
    /**
     * Jwks Uri
     */
    public readonly jwksUri!: pulumi.Output<string | undefined>;
    public readonly lastUpdated!: pulumi.Output<string>;
    /**
     * The group member attribute
     */
    public readonly otp!: pulumi.Output<boolean | undefined>;
    /**
     * The group member attribute
     */
    public readonly otpUrl!: pulumi.Output<string | undefined>;
    /**
     * The LDAP port
     */
    public readonly port!: pulumi.Output<number | undefined>;
    /**
     * Provider Url
     */
    public readonly providerUrl!: pulumi.Output<string | undefined>;
    /**
     * Redirect Hostname
     */
    public readonly redirectHostname!: pulumi.Output<string | undefined>;
    /**
     * Redirect Uri
     */
    public readonly redirectUri!: pulumi.Output<string | undefined>;
    /**
     * Secret
     */
    public readonly secret!: pulumi.Output<string | undefined>;
    /**
     * Token Endpoint
     */
    public readonly tokenEndpoint!: pulumi.Output<string | undefined>;
    /**
     * The user base DN
     */
    public readonly userBase!: pulumi.Output<string | undefined>;
    /**
     * The user ID attribute
     */
    public readonly userIdAttribute!: pulumi.Output<string | undefined>;
    /**
     * The user list filter
     */
    public readonly userListFilter!: pulumi.Output<string | undefined>;
    /**
     * Userinfo Endpoint
     */
    public readonly userinfoEndpoint!: pulumi.Output<string | undefined>;
    public readonly vns3!: pulumi.Output<outputs.Vns3IdentityControllerVns3 | undefined>;

    /**
     * Create a Vns3IdentityController resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: Vns3IdentityControllerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Vns3IdentityControllerArgs | Vns3IdentityControllerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Vns3IdentityControllerState | undefined;
            resourceInputs["authorizationEndpoint"] = state ? state.authorizationEndpoint : undefined;
            resourceInputs["binddn"] = state ? state.binddn : undefined;
            resourceInputs["bindpw"] = state ? state.bindpw : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["encrypt"] = state ? state.encrypt : undefined;
            resourceInputs["encryptAuth"] = state ? state.encryptAuth : undefined;
            resourceInputs["encryptAuthCert"] = state ? state.encryptAuthCert : undefined;
            resourceInputs["encryptAuthCertData"] = state ? state.encryptAuthCertData : undefined;
            resourceInputs["encryptAuthCertFilename"] = state ? state.encryptAuthCertFilename : undefined;
            resourceInputs["encryptAuthKey"] = state ? state.encryptAuthKey : undefined;
            resourceInputs["encryptAuthKeyData"] = state ? state.encryptAuthKeyData : undefined;
            resourceInputs["encryptAuthKeyFilename"] = state ? state.encryptAuthKeyFilename : undefined;
            resourceInputs["encryptCaCert"] = state ? state.encryptCaCert : undefined;
            resourceInputs["encryptCaCertData"] = state ? state.encryptCaCertData : undefined;
            resourceInputs["encryptCaCertFilename"] = state ? state.encryptCaCertFilename : undefined;
            resourceInputs["encryptLdaps"] = state ? state.encryptLdaps : undefined;
            resourceInputs["encryptVerifyCa"] = state ? state.encryptVerifyCa : undefined;
            resourceInputs["groupBase"] = state ? state.groupBase : undefined;
            resourceInputs["groupIdAttribute"] = state ? state.groupIdAttribute : undefined;
            resourceInputs["groupListFilter"] = state ? state.groupListFilter : undefined;
            resourceInputs["groupMemberAttrFormat"] = state ? state.groupMemberAttrFormat : undefined;
            resourceInputs["groupMemberAttribute"] = state ? state.groupMemberAttribute : undefined;
            resourceInputs["groupSearchScope"] = state ? state.groupSearchScope : undefined;
            resourceInputs["host"] = state ? state.host : undefined;
            resourceInputs["identifier"] = state ? state.identifier : undefined;
            resourceInputs["identityProvider"] = state ? state.identityProvider : undefined;
            resourceInputs["issuer"] = state ? state.issuer : undefined;
            resourceInputs["jwksUri"] = state ? state.jwksUri : undefined;
            resourceInputs["lastUpdated"] = state ? state.lastUpdated : undefined;
            resourceInputs["otp"] = state ? state.otp : undefined;
            resourceInputs["otpUrl"] = state ? state.otpUrl : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["providerUrl"] = state ? state.providerUrl : undefined;
            resourceInputs["redirectHostname"] = state ? state.redirectHostname : undefined;
            resourceInputs["redirectUri"] = state ? state.redirectUri : undefined;
            resourceInputs["secret"] = state ? state.secret : undefined;
            resourceInputs["tokenEndpoint"] = state ? state.tokenEndpoint : undefined;
            resourceInputs["userBase"] = state ? state.userBase : undefined;
            resourceInputs["userIdAttribute"] = state ? state.userIdAttribute : undefined;
            resourceInputs["userListFilter"] = state ? state.userListFilter : undefined;
            resourceInputs["userinfoEndpoint"] = state ? state.userinfoEndpoint : undefined;
            resourceInputs["vns3"] = state ? state.vns3 : undefined;
        } else {
            const args = argsOrState as Vns3IdentityControllerArgs | undefined;
            resourceInputs["authorizationEndpoint"] = args ? args.authorizationEndpoint : undefined;
            resourceInputs["binddn"] = args ? args.binddn : undefined;
            resourceInputs["bindpw"] = args ? args.bindpw : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["encrypt"] = args ? args.encrypt : undefined;
            resourceInputs["encryptAuth"] = args ? args.encryptAuth : undefined;
            resourceInputs["encryptAuthCert"] = args ? args.encryptAuthCert : undefined;
            resourceInputs["encryptAuthCertData"] = args ? args.encryptAuthCertData : undefined;
            resourceInputs["encryptAuthCertFilename"] = args ? args.encryptAuthCertFilename : undefined;
            resourceInputs["encryptAuthKey"] = args ? args.encryptAuthKey : undefined;
            resourceInputs["encryptAuthKeyData"] = args ? args.encryptAuthKeyData : undefined;
            resourceInputs["encryptAuthKeyFilename"] = args ? args.encryptAuthKeyFilename : undefined;
            resourceInputs["encryptCaCert"] = args ? args.encryptCaCert : undefined;
            resourceInputs["encryptCaCertData"] = args ? args.encryptCaCertData : undefined;
            resourceInputs["encryptCaCertFilename"] = args ? args.encryptCaCertFilename : undefined;
            resourceInputs["encryptLdaps"] = args ? args.encryptLdaps : undefined;
            resourceInputs["encryptVerifyCa"] = args ? args.encryptVerifyCa : undefined;
            resourceInputs["groupBase"] = args ? args.groupBase : undefined;
            resourceInputs["groupIdAttribute"] = args ? args.groupIdAttribute : undefined;
            resourceInputs["groupListFilter"] = args ? args.groupListFilter : undefined;
            resourceInputs["groupMemberAttrFormat"] = args ? args.groupMemberAttrFormat : undefined;
            resourceInputs["groupMemberAttribute"] = args ? args.groupMemberAttribute : undefined;
            resourceInputs["groupSearchScope"] = args ? args.groupSearchScope : undefined;
            resourceInputs["host"] = args ? args.host : undefined;
            resourceInputs["identifier"] = args ? args.identifier : undefined;
            resourceInputs["identityProvider"] = args ? args.identityProvider : undefined;
            resourceInputs["issuer"] = args ? args.issuer : undefined;
            resourceInputs["jwksUri"] = args ? args.jwksUri : undefined;
            resourceInputs["lastUpdated"] = args ? args.lastUpdated : undefined;
            resourceInputs["otp"] = args ? args.otp : undefined;
            resourceInputs["otpUrl"] = args ? args.otpUrl : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["providerUrl"] = args ? args.providerUrl : undefined;
            resourceInputs["redirectHostname"] = args ? args.redirectHostname : undefined;
            resourceInputs["redirectUri"] = args ? args.redirectUri : undefined;
            resourceInputs["secret"] = args ? args.secret : undefined;
            resourceInputs["tokenEndpoint"] = args ? args.tokenEndpoint : undefined;
            resourceInputs["userBase"] = args ? args.userBase : undefined;
            resourceInputs["userIdAttribute"] = args ? args.userIdAttribute : undefined;
            resourceInputs["userListFilter"] = args ? args.userListFilter : undefined;
            resourceInputs["userinfoEndpoint"] = args ? args.userinfoEndpoint : undefined;
            resourceInputs["vns3"] = args ? args.vns3 : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Vns3IdentityController.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Vns3IdentityController resources.
 */
export interface Vns3IdentityControllerState {
    /**
     * Authorization Endpoint
     */
    authorizationEndpoint?: pulumi.Input<string>;
    /**
     * The bind DN
     */
    binddn?: pulumi.Input<string>;
    /**
     * The bind password
     */
    bindpw?: pulumi.Input<string>;
    /**
     * Enabled
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Whether to encrypt LDAP communication
     */
    encrypt?: pulumi.Input<boolean>;
    /**
     * Whether to encrypt auth
     */
    encryptAuth?: pulumi.Input<boolean>;
    /**
     * Whether to encrypt auth cert
     */
    encryptAuthCert?: pulumi.Input<boolean>;
    /**
     * The auth cert data
     */
    encryptAuthCertData?: pulumi.Input<string>;
    /**
     * The auth cert filename
     */
    encryptAuthCertFilename?: pulumi.Input<string>;
    /**
     * Whether to encrypt auth key
     */
    encryptAuthKey?: pulumi.Input<boolean>;
    /**
     * The auth key data
     */
    encryptAuthKeyData?: pulumi.Input<string>;
    /**
     * The auth key filename
     */
    encryptAuthKeyFilename?: pulumi.Input<string>;
    /**
     * Whether to encrypt CA cert
     */
    encryptCaCert?: pulumi.Input<boolean>;
    /**
     * The CA cert data
     */
    encryptCaCertData?: pulumi.Input<string>;
    /**
     * The CA cert filename
     */
    encryptCaCertFilename?: pulumi.Input<string>;
    /**
     * Whether to encrypt LDAPS communication
     */
    encryptLdaps?: pulumi.Input<boolean>;
    /**
     * Whether to encrypt verify CA
     */
    encryptVerifyCa?: pulumi.Input<boolean>;
    /**
     * The group base DN
     */
    groupBase?: pulumi.Input<string>;
    /**
     * The group ID attribute
     */
    groupIdAttribute?: pulumi.Input<string>;
    /**
     * The group list filter
     */
    groupListFilter?: pulumi.Input<string>;
    /**
     * The group member attribute
     */
    groupMemberAttrFormat?: pulumi.Input<string>;
    /**
     * The group member attribute
     */
    groupMemberAttribute?: pulumi.Input<string>;
    /**
     * The group list filter
     */
    groupSearchScope?: pulumi.Input<string>;
    /**
     * Host
     */
    host?: pulumi.Input<string>;
    /**
     * Identifier
     */
    identifier?: pulumi.Input<string>;
    /**
     * Identity provider
     */
    identityProvider?: pulumi.Input<string>;
    /**
     * Issuer
     */
    issuer?: pulumi.Input<string>;
    /**
     * Jwks Uri
     */
    jwksUri?: pulumi.Input<string>;
    lastUpdated?: pulumi.Input<string>;
    /**
     * The group member attribute
     */
    otp?: pulumi.Input<boolean>;
    /**
     * The group member attribute
     */
    otpUrl?: pulumi.Input<string>;
    /**
     * The LDAP port
     */
    port?: pulumi.Input<number>;
    /**
     * Provider Url
     */
    providerUrl?: pulumi.Input<string>;
    /**
     * Redirect Hostname
     */
    redirectHostname?: pulumi.Input<string>;
    /**
     * Redirect Uri
     */
    redirectUri?: pulumi.Input<string>;
    /**
     * Secret
     */
    secret?: pulumi.Input<string>;
    /**
     * Token Endpoint
     */
    tokenEndpoint?: pulumi.Input<string>;
    /**
     * The user base DN
     */
    userBase?: pulumi.Input<string>;
    /**
     * The user ID attribute
     */
    userIdAttribute?: pulumi.Input<string>;
    /**
     * The user list filter
     */
    userListFilter?: pulumi.Input<string>;
    /**
     * Userinfo Endpoint
     */
    userinfoEndpoint?: pulumi.Input<string>;
    vns3?: pulumi.Input<inputs.Vns3IdentityControllerVns3>;
}

/**
 * The set of arguments for constructing a Vns3IdentityController resource.
 */
export interface Vns3IdentityControllerArgs {
    /**
     * Authorization Endpoint
     */
    authorizationEndpoint?: pulumi.Input<string>;
    /**
     * The bind DN
     */
    binddn?: pulumi.Input<string>;
    /**
     * The bind password
     */
    bindpw?: pulumi.Input<string>;
    /**
     * Enabled
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Whether to encrypt LDAP communication
     */
    encrypt?: pulumi.Input<boolean>;
    /**
     * Whether to encrypt auth
     */
    encryptAuth?: pulumi.Input<boolean>;
    /**
     * Whether to encrypt auth cert
     */
    encryptAuthCert?: pulumi.Input<boolean>;
    /**
     * The auth cert data
     */
    encryptAuthCertData?: pulumi.Input<string>;
    /**
     * The auth cert filename
     */
    encryptAuthCertFilename?: pulumi.Input<string>;
    /**
     * Whether to encrypt auth key
     */
    encryptAuthKey?: pulumi.Input<boolean>;
    /**
     * The auth key data
     */
    encryptAuthKeyData?: pulumi.Input<string>;
    /**
     * The auth key filename
     */
    encryptAuthKeyFilename?: pulumi.Input<string>;
    /**
     * Whether to encrypt CA cert
     */
    encryptCaCert?: pulumi.Input<boolean>;
    /**
     * The CA cert data
     */
    encryptCaCertData?: pulumi.Input<string>;
    /**
     * The CA cert filename
     */
    encryptCaCertFilename?: pulumi.Input<string>;
    /**
     * Whether to encrypt LDAPS communication
     */
    encryptLdaps?: pulumi.Input<boolean>;
    /**
     * Whether to encrypt verify CA
     */
    encryptVerifyCa?: pulumi.Input<boolean>;
    /**
     * The group base DN
     */
    groupBase?: pulumi.Input<string>;
    /**
     * The group ID attribute
     */
    groupIdAttribute?: pulumi.Input<string>;
    /**
     * The group list filter
     */
    groupListFilter?: pulumi.Input<string>;
    /**
     * The group member attribute
     */
    groupMemberAttrFormat?: pulumi.Input<string>;
    /**
     * The group member attribute
     */
    groupMemberAttribute?: pulumi.Input<string>;
    /**
     * The group list filter
     */
    groupSearchScope?: pulumi.Input<string>;
    /**
     * Host
     */
    host?: pulumi.Input<string>;
    /**
     * Identifier
     */
    identifier?: pulumi.Input<string>;
    /**
     * Identity provider
     */
    identityProvider?: pulumi.Input<string>;
    /**
     * Issuer
     */
    issuer?: pulumi.Input<string>;
    /**
     * Jwks Uri
     */
    jwksUri?: pulumi.Input<string>;
    lastUpdated?: pulumi.Input<string>;
    /**
     * The group member attribute
     */
    otp?: pulumi.Input<boolean>;
    /**
     * The group member attribute
     */
    otpUrl?: pulumi.Input<string>;
    /**
     * The LDAP port
     */
    port?: pulumi.Input<number>;
    /**
     * Provider Url
     */
    providerUrl?: pulumi.Input<string>;
    /**
     * Redirect Hostname
     */
    redirectHostname?: pulumi.Input<string>;
    /**
     * Redirect Uri
     */
    redirectUri?: pulumi.Input<string>;
    /**
     * Secret
     */
    secret?: pulumi.Input<string>;
    /**
     * Token Endpoint
     */
    tokenEndpoint?: pulumi.Input<string>;
    /**
     * The user base DN
     */
    userBase?: pulumi.Input<string>;
    /**
     * The user ID attribute
     */
    userIdAttribute?: pulumi.Input<string>;
    /**
     * The user list filter
     */
    userListFilter?: pulumi.Input<string>;
    /**
     * Userinfo Endpoint
     */
    userinfoEndpoint?: pulumi.Input<string>;
    vns3?: pulumi.Input<inputs.Vns3IdentityControllerVns3>;
}
