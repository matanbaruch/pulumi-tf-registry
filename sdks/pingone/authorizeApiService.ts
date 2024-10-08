// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AuthorizeApiService extends pulumi.CustomResource {
    /**
     * Get an existing AuthorizeApiService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AuthorizeApiServiceState, opts?: pulumi.CustomResourceOptions): AuthorizeApiService {
        return new AuthorizeApiService(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pingone:index/authorizeApiService:AuthorizeApiService';

    /**
     * Returns true if the given object is an instance of AuthorizeApiService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AuthorizeApiService {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AuthorizeApiService.__pulumiType;
    }

    /**
     * A single object that specifies properties related to access control settings of the API service.
     */
    public readonly accessControl!: pulumi.Output<outputs.AuthorizeApiServiceAccessControl>;
    /**
     * A single object that specifies properties related to the authorization server that will issue access tokens used to
     * access the APIs.
     */
    public readonly authorizationServer!: pulumi.Output<outputs.AuthorizeApiServiceAuthorizationServer>;
    /**
     * A set of strings that specifies the possible base URLs that an end-user will use to access the APIs hosted on the
     * customer's API service. Multiple base URLs may be specified to support cases where the same API may be available from
     * multiple URLs (for example, from a user-friendly domain URL and an internal domain URL). Base URLs must be valid
     * absolute URLs with the `https` or `http` scheme. If the path component is non-empty, it must not end in a trailing
     * slash. The path must not contain empty backslash, dot, or double-dot segments. It must not have a query or fragment
     * present, and the host portion of the authority must be a DNS hostname or valid IP (IPv4 or IPv6). The length must be
     * less than or equal to 256 characters.
     */
    public readonly baseUrls!: pulumi.Output<string[]>;
    /**
     * A container object for fields related to the user directory used to issue access tokens for accessing the APIs. If not
     * provided, `directory.type` will default to `PINGONE_SSO`.
     */
    public readonly directory!: pulumi.Output<outputs.AuthorizeApiServiceDirectory>;
    /**
     * The ID of the environment to create and manage the API Service in. Must be a valid PingOne resource ID. This field is
     * immutable and will trigger a replace plan if changed.
     */
    public readonly environmentId!: pulumi.Output<string>;
    /**
     * A string that specifies the API service resource name. The name value must be unique among all API services, and it must
     * be a valid resource name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * A string that represents the ID of the root policy.
     */
    public /*out*/ readonly policyId!: pulumi.Output<string>;

    /**
     * Create a AuthorizeApiService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AuthorizeApiServiceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AuthorizeApiServiceArgs | AuthorizeApiServiceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AuthorizeApiServiceState | undefined;
            resourceInputs["accessControl"] = state ? state.accessControl : undefined;
            resourceInputs["authorizationServer"] = state ? state.authorizationServer : undefined;
            resourceInputs["baseUrls"] = state ? state.baseUrls : undefined;
            resourceInputs["directory"] = state ? state.directory : undefined;
            resourceInputs["environmentId"] = state ? state.environmentId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["policyId"] = state ? state.policyId : undefined;
        } else {
            const args = argsOrState as AuthorizeApiServiceArgs | undefined;
            if ((!args || args.authorizationServer === undefined) && !opts.urn) {
                throw new Error("Missing required property 'authorizationServer'");
            }
            if ((!args || args.baseUrls === undefined) && !opts.urn) {
                throw new Error("Missing required property 'baseUrls'");
            }
            if ((!args || args.environmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'environmentId'");
            }
            resourceInputs["accessControl"] = args ? args.accessControl : undefined;
            resourceInputs["authorizationServer"] = args ? args.authorizationServer : undefined;
            resourceInputs["baseUrls"] = args ? args.baseUrls : undefined;
            resourceInputs["directory"] = args ? args.directory : undefined;
            resourceInputs["environmentId"] = args ? args.environmentId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["policyId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AuthorizeApiService.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AuthorizeApiService resources.
 */
export interface AuthorizeApiServiceState {
    /**
     * A single object that specifies properties related to access control settings of the API service.
     */
    accessControl?: pulumi.Input<inputs.AuthorizeApiServiceAccessControl>;
    /**
     * A single object that specifies properties related to the authorization server that will issue access tokens used to
     * access the APIs.
     */
    authorizationServer?: pulumi.Input<inputs.AuthorizeApiServiceAuthorizationServer>;
    /**
     * A set of strings that specifies the possible base URLs that an end-user will use to access the APIs hosted on the
     * customer's API service. Multiple base URLs may be specified to support cases where the same API may be available from
     * multiple URLs (for example, from a user-friendly domain URL and an internal domain URL). Base URLs must be valid
     * absolute URLs with the `https` or `http` scheme. If the path component is non-empty, it must not end in a trailing
     * slash. The path must not contain empty backslash, dot, or double-dot segments. It must not have a query or fragment
     * present, and the host portion of the authority must be a DNS hostname or valid IP (IPv4 or IPv6). The length must be
     * less than or equal to 256 characters.
     */
    baseUrls?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A container object for fields related to the user directory used to issue access tokens for accessing the APIs. If not
     * provided, `directory.type` will default to `PINGONE_SSO`.
     */
    directory?: pulumi.Input<inputs.AuthorizeApiServiceDirectory>;
    /**
     * The ID of the environment to create and manage the API Service in. Must be a valid PingOne resource ID. This field is
     * immutable and will trigger a replace plan if changed.
     */
    environmentId?: pulumi.Input<string>;
    /**
     * A string that specifies the API service resource name. The name value must be unique among all API services, and it must
     * be a valid resource name.
     */
    name?: pulumi.Input<string>;
    /**
     * A string that represents the ID of the root policy.
     */
    policyId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AuthorizeApiService resource.
 */
export interface AuthorizeApiServiceArgs {
    /**
     * A single object that specifies properties related to access control settings of the API service.
     */
    accessControl?: pulumi.Input<inputs.AuthorizeApiServiceAccessControl>;
    /**
     * A single object that specifies properties related to the authorization server that will issue access tokens used to
     * access the APIs.
     */
    authorizationServer: pulumi.Input<inputs.AuthorizeApiServiceAuthorizationServer>;
    /**
     * A set of strings that specifies the possible base URLs that an end-user will use to access the APIs hosted on the
     * customer's API service. Multiple base URLs may be specified to support cases where the same API may be available from
     * multiple URLs (for example, from a user-friendly domain URL and an internal domain URL). Base URLs must be valid
     * absolute URLs with the `https` or `http` scheme. If the path component is non-empty, it must not end in a trailing
     * slash. The path must not contain empty backslash, dot, or double-dot segments. It must not have a query or fragment
     * present, and the host portion of the authority must be a DNS hostname or valid IP (IPv4 or IPv6). The length must be
     * less than or equal to 256 characters.
     */
    baseUrls: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A container object for fields related to the user directory used to issue access tokens for accessing the APIs. If not
     * provided, `directory.type` will default to `PINGONE_SSO`.
     */
    directory?: pulumi.Input<inputs.AuthorizeApiServiceDirectory>;
    /**
     * The ID of the environment to create and manage the API Service in. Must be a valid PingOne resource ID. This field is
     * immutable and will trigger a replace plan if changed.
     */
    environmentId: pulumi.Input<string>;
    /**
     * A string that specifies the API service resource name. The name value must be unique among all API services, and it must
     * be a valid resource name.
     */
    name?: pulumi.Input<string>;
}
