// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class IdentityPlatformOauthIdpConfig extends pulumi.CustomResource {
    /**
     * Get an existing IdentityPlatformOauthIdpConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IdentityPlatformOauthIdpConfigState, opts?: pulumi.CustomResourceOptions): IdentityPlatformOauthIdpConfig {
        return new IdentityPlatformOauthIdpConfig(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/identityPlatformOauthIdpConfig:IdentityPlatformOauthIdpConfig';

    /**
     * Returns true if the given object is an instance of IdentityPlatformOauthIdpConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IdentityPlatformOauthIdpConfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IdentityPlatformOauthIdpConfig.__pulumiType;
    }

    /**
     * The client id of an OAuth client.
     */
    public readonly clientId!: pulumi.Output<string>;
    /**
     * The client secret of the OAuth client, to enable OIDC code flow.
     */
    public readonly clientSecret!: pulumi.Output<string | undefined>;
    /**
     * Human friendly display name.
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * If this config allows users to sign in with the provider.
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * For OIDC Idps, the issuer identifier.
     */
    public readonly issuer!: pulumi.Output<string>;
    /**
     * The name of the OauthIdpConfig. Must start with 'oidc.'.
     */
    public readonly name!: pulumi.Output<string>;
    public readonly project!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.IdentityPlatformOauthIdpConfigTimeouts | undefined>;

    /**
     * Create a IdentityPlatformOauthIdpConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IdentityPlatformOauthIdpConfigArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IdentityPlatformOauthIdpConfigArgs | IdentityPlatformOauthIdpConfigState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IdentityPlatformOauthIdpConfigState | undefined;
            resourceInputs["clientId"] = state ? state.clientId : undefined;
            resourceInputs["clientSecret"] = state ? state.clientSecret : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["issuer"] = state ? state.issuer : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as IdentityPlatformOauthIdpConfigArgs | undefined;
            if ((!args || args.clientId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clientId'");
            }
            if ((!args || args.issuer === undefined) && !opts.urn) {
                throw new Error("Missing required property 'issuer'");
            }
            resourceInputs["clientId"] = args ? args.clientId : undefined;
            resourceInputs["clientSecret"] = args ? args.clientSecret : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["issuer"] = args ? args.issuer : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IdentityPlatformOauthIdpConfig.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IdentityPlatformOauthIdpConfig resources.
 */
export interface IdentityPlatformOauthIdpConfigState {
    /**
     * The client id of an OAuth client.
     */
    clientId?: pulumi.Input<string>;
    /**
     * The client secret of the OAuth client, to enable OIDC code flow.
     */
    clientSecret?: pulumi.Input<string>;
    /**
     * Human friendly display name.
     */
    displayName?: pulumi.Input<string>;
    /**
     * If this config allows users to sign in with the provider.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * For OIDC Idps, the issuer identifier.
     */
    issuer?: pulumi.Input<string>;
    /**
     * The name of the OauthIdpConfig. Must start with 'oidc.'.
     */
    name?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.IdentityPlatformOauthIdpConfigTimeouts>;
}

/**
 * The set of arguments for constructing a IdentityPlatformOauthIdpConfig resource.
 */
export interface IdentityPlatformOauthIdpConfigArgs {
    /**
     * The client id of an OAuth client.
     */
    clientId: pulumi.Input<string>;
    /**
     * The client secret of the OAuth client, to enable OIDC code flow.
     */
    clientSecret?: pulumi.Input<string>;
    /**
     * Human friendly display name.
     */
    displayName?: pulumi.Input<string>;
    /**
     * If this config allows users to sign in with the provider.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * For OIDC Idps, the issuer identifier.
     */
    issuer: pulumi.Input<string>;
    /**
     * The name of the OauthIdpConfig. Must start with 'oidc.'.
     */
    name?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.IdentityPlatformOauthIdpConfigTimeouts>;
}
