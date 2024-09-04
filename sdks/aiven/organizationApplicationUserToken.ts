// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class OrganizationApplicationUserToken extends pulumi.CustomResource {
    /**
     * Get an existing OrganizationApplicationUserToken resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OrganizationApplicationUserTokenState, opts?: pulumi.CustomResourceOptions): OrganizationApplicationUserToken {
        return new OrganizationApplicationUserToken(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aiven:index/organizationApplicationUserToken:OrganizationApplicationUserToken';

    /**
     * Returns true if the given object is an instance of OrganizationApplicationUserToken.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OrganizationApplicationUserToken {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OrganizationApplicationUserToken.__pulumiType;
    }

    /**
     * Time when the token was created.
     */
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    /**
     * True for tokens explicitly created using the `access_tokens` API. False for tokens created when a user logs in.
     */
    public /*out*/ readonly createdManually!: pulumi.Output<boolean>;
    /**
     * True if the API request was made with this token.
     */
    public /*out*/ readonly currentlyActive!: pulumi.Output<boolean>;
    /**
     * Description of the token.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Timestamp when the access token will expire unless extended.
     */
    public /*out*/ readonly expiryTime!: pulumi.Output<string>;
    /**
     * Extends the token session duration when the token is used. Only applicable if a value is set for `max_age_seconds`.
     */
    public readonly extendWhenUsed!: pulumi.Output<boolean | undefined>;
    /**
     * Full token.
     */
    public /*out*/ readonly fullToken!: pulumi.Output<string>;
    /**
     * IP address of the last request made with this token.
     */
    public /*out*/ readonly lastIp!: pulumi.Output<string>;
    /**
     * Timestamp when the access token was last used.
     */
    public /*out*/ readonly lastUsedTime!: pulumi.Output<string>;
    /**
     * User agent of the last request made with this token.
     */
    public /*out*/ readonly lastUserAgent!: pulumi.Output<string>;
    /**
     * User agent of the last request made with this token in human-readable format.
     */
    public /*out*/ readonly lastUserAgentHumanReadable!: pulumi.Output<string>;
    /**
     * The number of hours after which a token expires. Default session duration is 10 hours.
     */
    public readonly maxAgeSeconds!: pulumi.Output<number | undefined>;
    /**
     * The ID of the organization the application user belongs to.
     */
    public readonly organizationId!: pulumi.Output<string>;
    /**
     * Limits access to specific resources by granting read or write privileges to them. For example: `billing:read`. Available
     * scopes are: `authentication`, `billing`, `payments` for [payment
     * methods](https://aiven.io/docs/platform/howto/list-billing), `privatelink`, `projects`, `services`, `static_ips`, and
     * `user`.
     */
    public readonly scopes!: pulumi.Output<string[] | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.OrganizationApplicationUserTokenTimeouts | undefined>;
    /**
     * Prefix of the token.
     */
    public /*out*/ readonly tokenPrefix!: pulumi.Output<string>;
    /**
     * The ID of the application user the token is created for.
     */
    public readonly userId!: pulumi.Output<string>;

    /**
     * Create a OrganizationApplicationUserToken resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OrganizationApplicationUserTokenArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: OrganizationApplicationUserTokenArgs | OrganizationApplicationUserTokenState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as OrganizationApplicationUserTokenState | undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["createdManually"] = state ? state.createdManually : undefined;
            resourceInputs["currentlyActive"] = state ? state.currentlyActive : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["expiryTime"] = state ? state.expiryTime : undefined;
            resourceInputs["extendWhenUsed"] = state ? state.extendWhenUsed : undefined;
            resourceInputs["fullToken"] = state ? state.fullToken : undefined;
            resourceInputs["lastIp"] = state ? state.lastIp : undefined;
            resourceInputs["lastUsedTime"] = state ? state.lastUsedTime : undefined;
            resourceInputs["lastUserAgent"] = state ? state.lastUserAgent : undefined;
            resourceInputs["lastUserAgentHumanReadable"] = state ? state.lastUserAgentHumanReadable : undefined;
            resourceInputs["maxAgeSeconds"] = state ? state.maxAgeSeconds : undefined;
            resourceInputs["organizationId"] = state ? state.organizationId : undefined;
            resourceInputs["scopes"] = state ? state.scopes : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["tokenPrefix"] = state ? state.tokenPrefix : undefined;
            resourceInputs["userId"] = state ? state.userId : undefined;
        } else {
            const args = argsOrState as OrganizationApplicationUserTokenArgs | undefined;
            if ((!args || args.organizationId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'organizationId'");
            }
            if ((!args || args.userId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'userId'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["extendWhenUsed"] = args ? args.extendWhenUsed : undefined;
            resourceInputs["maxAgeSeconds"] = args ? args.maxAgeSeconds : undefined;
            resourceInputs["organizationId"] = args ? args.organizationId : undefined;
            resourceInputs["scopes"] = args ? args.scopes : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["userId"] = args ? args.userId : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["createdManually"] = undefined /*out*/;
            resourceInputs["currentlyActive"] = undefined /*out*/;
            resourceInputs["expiryTime"] = undefined /*out*/;
            resourceInputs["fullToken"] = undefined /*out*/;
            resourceInputs["lastIp"] = undefined /*out*/;
            resourceInputs["lastUsedTime"] = undefined /*out*/;
            resourceInputs["lastUserAgent"] = undefined /*out*/;
            resourceInputs["lastUserAgentHumanReadable"] = undefined /*out*/;
            resourceInputs["tokenPrefix"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["fullToken"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(OrganizationApplicationUserToken.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering OrganizationApplicationUserToken resources.
 */
export interface OrganizationApplicationUserTokenState {
    /**
     * Time when the token was created.
     */
    createTime?: pulumi.Input<string>;
    /**
     * True for tokens explicitly created using the `access_tokens` API. False for tokens created when a user logs in.
     */
    createdManually?: pulumi.Input<boolean>;
    /**
     * True if the API request was made with this token.
     */
    currentlyActive?: pulumi.Input<boolean>;
    /**
     * Description of the token.
     */
    description?: pulumi.Input<string>;
    /**
     * Timestamp when the access token will expire unless extended.
     */
    expiryTime?: pulumi.Input<string>;
    /**
     * Extends the token session duration when the token is used. Only applicable if a value is set for `max_age_seconds`.
     */
    extendWhenUsed?: pulumi.Input<boolean>;
    /**
     * Full token.
     */
    fullToken?: pulumi.Input<string>;
    /**
     * IP address of the last request made with this token.
     */
    lastIp?: pulumi.Input<string>;
    /**
     * Timestamp when the access token was last used.
     */
    lastUsedTime?: pulumi.Input<string>;
    /**
     * User agent of the last request made with this token.
     */
    lastUserAgent?: pulumi.Input<string>;
    /**
     * User agent of the last request made with this token in human-readable format.
     */
    lastUserAgentHumanReadable?: pulumi.Input<string>;
    /**
     * The number of hours after which a token expires. Default session duration is 10 hours.
     */
    maxAgeSeconds?: pulumi.Input<number>;
    /**
     * The ID of the organization the application user belongs to.
     */
    organizationId?: pulumi.Input<string>;
    /**
     * Limits access to specific resources by granting read or write privileges to them. For example: `billing:read`. Available
     * scopes are: `authentication`, `billing`, `payments` for [payment
     * methods](https://aiven.io/docs/platform/howto/list-billing), `privatelink`, `projects`, `services`, `static_ips`, and
     * `user`.
     */
    scopes?: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.OrganizationApplicationUserTokenTimeouts>;
    /**
     * Prefix of the token.
     */
    tokenPrefix?: pulumi.Input<string>;
    /**
     * The ID of the application user the token is created for.
     */
    userId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a OrganizationApplicationUserToken resource.
 */
export interface OrganizationApplicationUserTokenArgs {
    /**
     * Description of the token.
     */
    description?: pulumi.Input<string>;
    /**
     * Extends the token session duration when the token is used. Only applicable if a value is set for `max_age_seconds`.
     */
    extendWhenUsed?: pulumi.Input<boolean>;
    /**
     * The number of hours after which a token expires. Default session duration is 10 hours.
     */
    maxAgeSeconds?: pulumi.Input<number>;
    /**
     * The ID of the organization the application user belongs to.
     */
    organizationId: pulumi.Input<string>;
    /**
     * Limits access to specific resources by granting read or write privileges to them. For example: `billing:read`. Available
     * scopes are: `authentication`, `billing`, `payments` for [payment
     * methods](https://aiven.io/docs/platform/howto/list-billing), `privatelink`, `projects`, `services`, `static_ips`, and
     * `user`.
     */
    scopes?: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.OrganizationApplicationUserTokenTimeouts>;
    /**
     * The ID of the application user the token is created for.
     */
    userId: pulumi.Input<string>;
}
