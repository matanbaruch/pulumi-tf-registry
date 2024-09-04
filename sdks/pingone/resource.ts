// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Resource extends pulumi.CustomResource {
    /**
     * Get an existing Resource resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ResourceState, opts?: pulumi.CustomResourceOptions): Resource {
        return new Resource(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pingone:index/resource:Resource';

    /**
     * Returns true if the given object is an instance of Resource.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Resource {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Resource.__pulumiType;
    }

    /**
     * An integer that specifies the number of seconds that the access token is valid. The minimum value is `300` seconds (5
     * minutes); the maximum value is `2592000` seconds (30 days). Defaults to `3600`.
     */
    public readonly accessTokenValiditySeconds!: pulumi.Output<number>;
    /**
     * A single object that specifies whether application permissions are added to access tokens generated by PingOne. If not
     * set, the default value for `claim_enabled` is `false`.
     */
    public readonly applicationPermissionsSettings!: pulumi.Output<outputs.ResourceApplicationPermissionsSettings>;
    /**
     * A string that specifies a URL without a fragment or `@ObjectName` and must not contain `pingone` or `pingidentity` (for
     * example, `https://api.myresource.com`). If a URL is not specified, the resource name is used.
     */
    public readonly audience!: pulumi.Output<string>;
    /**
     * A string that specifies a description of the resource.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The ID of the environment to create and manage the resource in. Must be a valid PingOne resource ID. This field is
     * immutable and will trigger a replace plan if changed.
     */
    public readonly environmentId!: pulumi.Output<string>;
    /**
     * A string that specifies the client authentication methods supported by the token endpoint. Options are
     * `CLIENT_SECRET_BASIC`, `CLIENT_SECRET_POST`, `NONE`. Defaults to `CLIENT_SECRET_BASIC`.
     */
    public readonly introspectEndpointAuthMethod!: pulumi.Output<string>;
    /**
     * A string that specifies the resource name, which must be provided and must be unique within an environment.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * A string that specifies the type of resource. Options are `CUSTOM` (specifies the a resource that has been created by
     * admin), `OPENID_CONNECT` (specifies the built-in platform resource for OpenID Connect), `PINGONE_API` (specifies the
     * built-in platform resource for PingOne). Only the `CUSTOM` resource type can be created. `OPENID_CONNECT` specifies the
     * built-in platform resource for OpenID Connect. `PINGONE_API` specifies the built-in platform resource for PingOne.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Resource resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ResourceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ResourceArgs | ResourceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ResourceState | undefined;
            resourceInputs["accessTokenValiditySeconds"] = state ? state.accessTokenValiditySeconds : undefined;
            resourceInputs["applicationPermissionsSettings"] = state ? state.applicationPermissionsSettings : undefined;
            resourceInputs["audience"] = state ? state.audience : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["environmentId"] = state ? state.environmentId : undefined;
            resourceInputs["introspectEndpointAuthMethod"] = state ? state.introspectEndpointAuthMethod : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as ResourceArgs | undefined;
            if ((!args || args.environmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'environmentId'");
            }
            resourceInputs["accessTokenValiditySeconds"] = args ? args.accessTokenValiditySeconds : undefined;
            resourceInputs["applicationPermissionsSettings"] = args ? args.applicationPermissionsSettings : undefined;
            resourceInputs["audience"] = args ? args.audience : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["environmentId"] = args ? args.environmentId : undefined;
            resourceInputs["introspectEndpointAuthMethod"] = args ? args.introspectEndpointAuthMethod : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Resource.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Resource resources.
 */
export interface ResourceState {
    /**
     * An integer that specifies the number of seconds that the access token is valid. The minimum value is `300` seconds (5
     * minutes); the maximum value is `2592000` seconds (30 days). Defaults to `3600`.
     */
    accessTokenValiditySeconds?: pulumi.Input<number>;
    /**
     * A single object that specifies whether application permissions are added to access tokens generated by PingOne. If not
     * set, the default value for `claim_enabled` is `false`.
     */
    applicationPermissionsSettings?: pulumi.Input<inputs.ResourceApplicationPermissionsSettings>;
    /**
     * A string that specifies a URL without a fragment or `@ObjectName` and must not contain `pingone` or `pingidentity` (for
     * example, `https://api.myresource.com`). If a URL is not specified, the resource name is used.
     */
    audience?: pulumi.Input<string>;
    /**
     * A string that specifies a description of the resource.
     */
    description?: pulumi.Input<string>;
    /**
     * The ID of the environment to create and manage the resource in. Must be a valid PingOne resource ID. This field is
     * immutable and will trigger a replace plan if changed.
     */
    environmentId?: pulumi.Input<string>;
    /**
     * A string that specifies the client authentication methods supported by the token endpoint. Options are
     * `CLIENT_SECRET_BASIC`, `CLIENT_SECRET_POST`, `NONE`. Defaults to `CLIENT_SECRET_BASIC`.
     */
    introspectEndpointAuthMethod?: pulumi.Input<string>;
    /**
     * A string that specifies the resource name, which must be provided and must be unique within an environment.
     */
    name?: pulumi.Input<string>;
    /**
     * A string that specifies the type of resource. Options are `CUSTOM` (specifies the a resource that has been created by
     * admin), `OPENID_CONNECT` (specifies the built-in platform resource for OpenID Connect), `PINGONE_API` (specifies the
     * built-in platform resource for PingOne). Only the `CUSTOM` resource type can be created. `OPENID_CONNECT` specifies the
     * built-in platform resource for OpenID Connect. `PINGONE_API` specifies the built-in platform resource for PingOne.
     */
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Resource resource.
 */
export interface ResourceArgs {
    /**
     * An integer that specifies the number of seconds that the access token is valid. The minimum value is `300` seconds (5
     * minutes); the maximum value is `2592000` seconds (30 days). Defaults to `3600`.
     */
    accessTokenValiditySeconds?: pulumi.Input<number>;
    /**
     * A single object that specifies whether application permissions are added to access tokens generated by PingOne. If not
     * set, the default value for `claim_enabled` is `false`.
     */
    applicationPermissionsSettings?: pulumi.Input<inputs.ResourceApplicationPermissionsSettings>;
    /**
     * A string that specifies a URL without a fragment or `@ObjectName` and must not contain `pingone` or `pingidentity` (for
     * example, `https://api.myresource.com`). If a URL is not specified, the resource name is used.
     */
    audience?: pulumi.Input<string>;
    /**
     * A string that specifies a description of the resource.
     */
    description?: pulumi.Input<string>;
    /**
     * The ID of the environment to create and manage the resource in. Must be a valid PingOne resource ID. This field is
     * immutable and will trigger a replace plan if changed.
     */
    environmentId: pulumi.Input<string>;
    /**
     * A string that specifies the client authentication methods supported by the token endpoint. Options are
     * `CLIENT_SECRET_BASIC`, `CLIENT_SECRET_POST`, `NONE`. Defaults to `CLIENT_SECRET_BASIC`.
     */
    introspectEndpointAuthMethod?: pulumi.Input<string>;
    /**
     * A string that specifies the resource name, which must be provided and must be unique within an environment.
     */
    name?: pulumi.Input<string>;
}
