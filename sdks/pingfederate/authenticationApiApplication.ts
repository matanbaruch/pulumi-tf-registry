// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AuthenticationApiApplication extends pulumi.CustomResource {
    /**
     * Get an existing AuthenticationApiApplication resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AuthenticationApiApplicationState, opts?: pulumi.CustomResourceOptions): AuthenticationApiApplication {
        return new AuthenticationApiApplication(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pingfederate:index/authenticationApiApplication:AuthenticationApiApplication';

    /**
     * Returns true if the given object is an instance of AuthenticationApiApplication.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AuthenticationApiApplication {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AuthenticationApiApplication.__pulumiType;
    }

    /**
     * The domain in the redirect URL is always whitelisted. This field contains a list of additional allowed origin URL's for
     * cross-origin resource sharing.
     */
    public readonly additionalAllowedOrigins!: pulumi.Output<string[]>;
    /**
     * The persistent, unique ID for the Authentication API application. It can be any combination of `[a-zA-Z0-9._-]`. This
     * property is system-assigned if not specified.
     */
    public readonly applicationId!: pulumi.Output<string>;
    /**
     * The client this application must use if it invokes the authentication API in redirectless mode. No client may be
     * specified if `restrict_access_to_redirectless_mode` is `false` under `pingfederate.AuthenticationApiSettings`.
     */
    public readonly clientForRedirectlessModeRef!: pulumi.Output<outputs.AuthenticationApiApplicationClientForRedirectlessModeRef>;
    /**
     * The Authentication API Application description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The Authentication API Application Name. Name must be unique.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The Authentication API Application redirect URL.
     */
    public readonly url!: pulumi.Output<string>;

    /**
     * Create a AuthenticationApiApplication resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AuthenticationApiApplicationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AuthenticationApiApplicationArgs | AuthenticationApiApplicationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AuthenticationApiApplicationState | undefined;
            resourceInputs["additionalAllowedOrigins"] = state ? state.additionalAllowedOrigins : undefined;
            resourceInputs["applicationId"] = state ? state.applicationId : undefined;
            resourceInputs["clientForRedirectlessModeRef"] = state ? state.clientForRedirectlessModeRef : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["url"] = state ? state.url : undefined;
        } else {
            const args = argsOrState as AuthenticationApiApplicationArgs | undefined;
            if ((!args || args.url === undefined) && !opts.urn) {
                throw new Error("Missing required property 'url'");
            }
            resourceInputs["additionalAllowedOrigins"] = args ? args.additionalAllowedOrigins : undefined;
            resourceInputs["applicationId"] = args ? args.applicationId : undefined;
            resourceInputs["clientForRedirectlessModeRef"] = args ? args.clientForRedirectlessModeRef : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["url"] = args ? args.url : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AuthenticationApiApplication.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AuthenticationApiApplication resources.
 */
export interface AuthenticationApiApplicationState {
    /**
     * The domain in the redirect URL is always whitelisted. This field contains a list of additional allowed origin URL's for
     * cross-origin resource sharing.
     */
    additionalAllowedOrigins?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The persistent, unique ID for the Authentication API application. It can be any combination of `[a-zA-Z0-9._-]`. This
     * property is system-assigned if not specified.
     */
    applicationId?: pulumi.Input<string>;
    /**
     * The client this application must use if it invokes the authentication API in redirectless mode. No client may be
     * specified if `restrict_access_to_redirectless_mode` is `false` under `pingfederate.AuthenticationApiSettings`.
     */
    clientForRedirectlessModeRef?: pulumi.Input<inputs.AuthenticationApiApplicationClientForRedirectlessModeRef>;
    /**
     * The Authentication API Application description.
     */
    description?: pulumi.Input<string>;
    /**
     * The Authentication API Application Name. Name must be unique.
     */
    name?: pulumi.Input<string>;
    /**
     * The Authentication API Application redirect URL.
     */
    url?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AuthenticationApiApplication resource.
 */
export interface AuthenticationApiApplicationArgs {
    /**
     * The domain in the redirect URL is always whitelisted. This field contains a list of additional allowed origin URL's for
     * cross-origin resource sharing.
     */
    additionalAllowedOrigins?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The persistent, unique ID for the Authentication API application. It can be any combination of `[a-zA-Z0-9._-]`. This
     * property is system-assigned if not specified.
     */
    applicationId?: pulumi.Input<string>;
    /**
     * The client this application must use if it invokes the authentication API in redirectless mode. No client may be
     * specified if `restrict_access_to_redirectless_mode` is `false` under `pingfederate.AuthenticationApiSettings`.
     */
    clientForRedirectlessModeRef?: pulumi.Input<inputs.AuthenticationApiApplicationClientForRedirectlessModeRef>;
    /**
     * The Authentication API Application description.
     */
    description?: pulumi.Input<string>;
    /**
     * The Authentication API Application Name. Name must be unique.
     */
    name?: pulumi.Input<string>;
    /**
     * The Authentication API Application redirect URL.
     */
    url: pulumi.Input<string>;
}
