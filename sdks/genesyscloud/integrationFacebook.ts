// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class IntegrationFacebook extends pulumi.CustomResource {
    /**
     * Get an existing IntegrationFacebook resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IntegrationFacebookState, opts?: pulumi.CustomResourceOptions): IntegrationFacebook {
        return new IntegrationFacebook(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'genesyscloud:index/integrationFacebook:IntegrationFacebook';

    /**
     * Returns true if the given object is an instance of IntegrationFacebook.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IntegrationFacebook {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IntegrationFacebook.__pulumiType;
    }

    /**
     * The app Id of Facebook app. The appId is required when a customer wants to use their own approved Facebook app.
     */
    public readonly appId!: pulumi.Output<string | undefined>;
    /**
     * The app Secret of Facebook app. The appSecret is required when appId is provided.
     */
    public readonly appSecret!: pulumi.Output<string | undefined>;
    /**
     * The messaging Setting unique identifier associated with this integration.
     */
    public readonly messagingSettingId!: pulumi.Output<string | undefined>;
    /**
     * The name of the Facebook Integration
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The long-lived Page Access Token of Facebook page. See
     * https://developers.facebook.com/docs/facebook-login/access-tokens. Either pageAccessToken or userAccessToken should be
     * provided.
     */
    public readonly pageAccessToken!: pulumi.Output<string | undefined>;
    /**
     * The page Id of Facebook page. The pageId is required when userAccessToken is provided.
     */
    public readonly pageId!: pulumi.Output<string | undefined>;
    /**
     * The SupportedContent unique identifier associated with this integration.
     */
    public readonly supportedContentId!: pulumi.Output<string | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.IntegrationFacebookTimeouts | undefined>;
    /**
     * The short-lived User Access Token of the Facebook user logged into the Facebook app. See
     * https://developers.facebook.com/docs/facebook-login/access-tokens. Either pageAccessToken or userAccessToken should be
     * provided.
     */
    public readonly userAccessToken!: pulumi.Output<string | undefined>;

    /**
     * Create a IntegrationFacebook resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: IntegrationFacebookArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IntegrationFacebookArgs | IntegrationFacebookState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IntegrationFacebookState | undefined;
            resourceInputs["appId"] = state ? state.appId : undefined;
            resourceInputs["appSecret"] = state ? state.appSecret : undefined;
            resourceInputs["messagingSettingId"] = state ? state.messagingSettingId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["pageAccessToken"] = state ? state.pageAccessToken : undefined;
            resourceInputs["pageId"] = state ? state.pageId : undefined;
            resourceInputs["supportedContentId"] = state ? state.supportedContentId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["userAccessToken"] = state ? state.userAccessToken : undefined;
        } else {
            const args = argsOrState as IntegrationFacebookArgs | undefined;
            resourceInputs["appId"] = args ? args.appId : undefined;
            resourceInputs["appSecret"] = args ? args.appSecret : undefined;
            resourceInputs["messagingSettingId"] = args ? args.messagingSettingId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["pageAccessToken"] = args ? args.pageAccessToken : undefined;
            resourceInputs["pageId"] = args ? args.pageId : undefined;
            resourceInputs["supportedContentId"] = args ? args.supportedContentId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["userAccessToken"] = args ? args.userAccessToken : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IntegrationFacebook.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IntegrationFacebook resources.
 */
export interface IntegrationFacebookState {
    /**
     * The app Id of Facebook app. The appId is required when a customer wants to use their own approved Facebook app.
     */
    appId?: pulumi.Input<string>;
    /**
     * The app Secret of Facebook app. The appSecret is required when appId is provided.
     */
    appSecret?: pulumi.Input<string>;
    /**
     * The messaging Setting unique identifier associated with this integration.
     */
    messagingSettingId?: pulumi.Input<string>;
    /**
     * The name of the Facebook Integration
     */
    name?: pulumi.Input<string>;
    /**
     * The long-lived Page Access Token of Facebook page. See
     * https://developers.facebook.com/docs/facebook-login/access-tokens. Either pageAccessToken or userAccessToken should be
     * provided.
     */
    pageAccessToken?: pulumi.Input<string>;
    /**
     * The page Id of Facebook page. The pageId is required when userAccessToken is provided.
     */
    pageId?: pulumi.Input<string>;
    /**
     * The SupportedContent unique identifier associated with this integration.
     */
    supportedContentId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.IntegrationFacebookTimeouts>;
    /**
     * The short-lived User Access Token of the Facebook user logged into the Facebook app. See
     * https://developers.facebook.com/docs/facebook-login/access-tokens. Either pageAccessToken or userAccessToken should be
     * provided.
     */
    userAccessToken?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a IntegrationFacebook resource.
 */
export interface IntegrationFacebookArgs {
    /**
     * The app Id of Facebook app. The appId is required when a customer wants to use their own approved Facebook app.
     */
    appId?: pulumi.Input<string>;
    /**
     * The app Secret of Facebook app. The appSecret is required when appId is provided.
     */
    appSecret?: pulumi.Input<string>;
    /**
     * The messaging Setting unique identifier associated with this integration.
     */
    messagingSettingId?: pulumi.Input<string>;
    /**
     * The name of the Facebook Integration
     */
    name?: pulumi.Input<string>;
    /**
     * The long-lived Page Access Token of Facebook page. See
     * https://developers.facebook.com/docs/facebook-login/access-tokens. Either pageAccessToken or userAccessToken should be
     * provided.
     */
    pageAccessToken?: pulumi.Input<string>;
    /**
     * The page Id of Facebook page. The pageId is required when userAccessToken is provided.
     */
    pageId?: pulumi.Input<string>;
    /**
     * The SupportedContent unique identifier associated with this integration.
     */
    supportedContentId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.IntegrationFacebookTimeouts>;
    /**
     * The short-lived User Access Token of the Facebook user logged into the Facebook app. See
     * https://developers.facebook.com/docs/facebook-login/access-tokens. Either pageAccessToken or userAccessToken should be
     * provided.
     */
    userAccessToken?: pulumi.Input<string>;
}
