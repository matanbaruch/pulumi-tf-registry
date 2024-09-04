// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SiteWebhook extends pulumi.CustomResource {
    /**
     * Get an existing SiteWebhook resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SiteWebhookState, opts?: pulumi.CustomResourceOptions): SiteWebhook {
        return new SiteWebhook(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'mist:index/siteWebhook:SiteWebhook';

    /**
     * Returns true if the given object is an instance of SiteWebhook.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SiteWebhook {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SiteWebhook.__pulumiType;
    }

    /**
     * whether webhook is enabled
     */
    public readonly enabled!: pulumi.Output<boolean>;
    /**
     * if `type`=`http-post`, additional custom HTTP headers to add the headers name and value must be string, total bytes of
     * headers name and value must be less than 1000
     */
    public readonly headers!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * name of the webhook
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * required when `oauth2_grant_type`==`client_credentials`
     */
    public readonly oauth2ClientId!: pulumi.Output<string | undefined>;
    /**
     * required when `oauth2_grant_type`==`client_credentials`
     */
    public readonly oauth2ClientSecret!: pulumi.Output<string | undefined>;
    /**
     * required when `type`==`oauth2`. enum: `client_credentials`, `password`
     */
    public readonly oauth2GrantType!: pulumi.Output<string | undefined>;
    /**
     * required when `oauth2_grant_type`==`password`
     */
    public readonly oauth2Password!: pulumi.Output<string | undefined>;
    /**
     * required when `type`==`oauth2`, if provided, will be used in the token request
     */
    public readonly oauth2Scopes!: pulumi.Output<string[] | undefined>;
    /**
     * required when `type`==`oauth2`
     */
    public readonly oauth2TokenUrl!: pulumi.Output<string | undefined>;
    /**
     * required when `oauth2_grant_type`==`password`
     */
    public readonly oauth2Username!: pulumi.Output<string | undefined>;
    public /*out*/ readonly orgId!: pulumi.Output<string>;
    /**
     * only if `type`=`http-post` when `secret` is provided, two HTTP headers will be added: * X-Mist-Signature-v2:
     * HMAC_SHA256(secret, body) * X-Mist-Signature: HMAC_SHA1(secret, body)
     */
    public readonly secret!: pulumi.Output<string | undefined>;
    public readonly siteId!: pulumi.Output<string>;
    /**
     * required if `type`=`splunk` If splunk_token is not defined for a type Splunk webhook, it will not send, regardless if
     * the webhook receiver is configured to accept it.'
     */
    public readonly splunkToken!: pulumi.Output<string | undefined>;
    /**
     * enum: `alarms`, `asset-raw`, `asset-raw-rssi`, `audits`, `client-info`, `client-join`, `client-latency`,
     * `client-sessions`, `device-updowns`, `device-events`, `discovered-raw-rssi`, `location`, `location_asset`,
     * `location_centrak`, `location_client`, `location_sdk`, `location_unclient`, `mxedge-events`, `nac-accounting`,
     * `nac_events`, `occupancy-alerts`, `rssizone`, `sdkclient_scan_data`, `site_sle`, `vbeacon`, `wifi-conn-raw`,
     * `wifi-unconn-raw`, `zone`
     */
    public readonly topics!: pulumi.Output<string[]>;
    /**
     * enum: `aws-sns`, `google-pubsub`, `http-post`, `oauth2`, `splunk`
     */
    public readonly type!: pulumi.Output<string>;
    public readonly url!: pulumi.Output<string>;
    /**
     * when url uses HTTPS, whether to verify the certificate
     */
    public readonly verifyCert!: pulumi.Output<boolean>;

    /**
     * Create a SiteWebhook resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SiteWebhookArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SiteWebhookArgs | SiteWebhookState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SiteWebhookState | undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["headers"] = state ? state.headers : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["oauth2ClientId"] = state ? state.oauth2ClientId : undefined;
            resourceInputs["oauth2ClientSecret"] = state ? state.oauth2ClientSecret : undefined;
            resourceInputs["oauth2GrantType"] = state ? state.oauth2GrantType : undefined;
            resourceInputs["oauth2Password"] = state ? state.oauth2Password : undefined;
            resourceInputs["oauth2Scopes"] = state ? state.oauth2Scopes : undefined;
            resourceInputs["oauth2TokenUrl"] = state ? state.oauth2TokenUrl : undefined;
            resourceInputs["oauth2Username"] = state ? state.oauth2Username : undefined;
            resourceInputs["orgId"] = state ? state.orgId : undefined;
            resourceInputs["secret"] = state ? state.secret : undefined;
            resourceInputs["siteId"] = state ? state.siteId : undefined;
            resourceInputs["splunkToken"] = state ? state.splunkToken : undefined;
            resourceInputs["topics"] = state ? state.topics : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["url"] = state ? state.url : undefined;
            resourceInputs["verifyCert"] = state ? state.verifyCert : undefined;
        } else {
            const args = argsOrState as SiteWebhookArgs | undefined;
            if ((!args || args.siteId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'siteId'");
            }
            if ((!args || args.topics === undefined) && !opts.urn) {
                throw new Error("Missing required property 'topics'");
            }
            if ((!args || args.url === undefined) && !opts.urn) {
                throw new Error("Missing required property 'url'");
            }
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["headers"] = args ? args.headers : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["oauth2ClientId"] = args ? args.oauth2ClientId : undefined;
            resourceInputs["oauth2ClientSecret"] = args?.oauth2ClientSecret ? pulumi.secret(args.oauth2ClientSecret) : undefined;
            resourceInputs["oauth2GrantType"] = args ? args.oauth2GrantType : undefined;
            resourceInputs["oauth2Password"] = args?.oauth2Password ? pulumi.secret(args.oauth2Password) : undefined;
            resourceInputs["oauth2Scopes"] = args ? args.oauth2Scopes : undefined;
            resourceInputs["oauth2TokenUrl"] = args ? args.oauth2TokenUrl : undefined;
            resourceInputs["oauth2Username"] = args ? args.oauth2Username : undefined;
            resourceInputs["secret"] = args?.secret ? pulumi.secret(args.secret) : undefined;
            resourceInputs["siteId"] = args ? args.siteId : undefined;
            resourceInputs["splunkToken"] = args?.splunkToken ? pulumi.secret(args.splunkToken) : undefined;
            resourceInputs["topics"] = args ? args.topics : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["url"] = args ? args.url : undefined;
            resourceInputs["verifyCert"] = args ? args.verifyCert : undefined;
            resourceInputs["orgId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["oauth2ClientSecret", "oauth2Password", "secret", "splunkToken"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(SiteWebhook.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SiteWebhook resources.
 */
export interface SiteWebhookState {
    /**
     * whether webhook is enabled
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * if `type`=`http-post`, additional custom HTTP headers to add the headers name and value must be string, total bytes of
     * headers name and value must be less than 1000
     */
    headers?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * name of the webhook
     */
    name?: pulumi.Input<string>;
    /**
     * required when `oauth2_grant_type`==`client_credentials`
     */
    oauth2ClientId?: pulumi.Input<string>;
    /**
     * required when `oauth2_grant_type`==`client_credentials`
     */
    oauth2ClientSecret?: pulumi.Input<string>;
    /**
     * required when `type`==`oauth2`. enum: `client_credentials`, `password`
     */
    oauth2GrantType?: pulumi.Input<string>;
    /**
     * required when `oauth2_grant_type`==`password`
     */
    oauth2Password?: pulumi.Input<string>;
    /**
     * required when `type`==`oauth2`, if provided, will be used in the token request
     */
    oauth2Scopes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * required when `type`==`oauth2`
     */
    oauth2TokenUrl?: pulumi.Input<string>;
    /**
     * required when `oauth2_grant_type`==`password`
     */
    oauth2Username?: pulumi.Input<string>;
    orgId?: pulumi.Input<string>;
    /**
     * only if `type`=`http-post` when `secret` is provided, two HTTP headers will be added: * X-Mist-Signature-v2:
     * HMAC_SHA256(secret, body) * X-Mist-Signature: HMAC_SHA1(secret, body)
     */
    secret?: pulumi.Input<string>;
    siteId?: pulumi.Input<string>;
    /**
     * required if `type`=`splunk` If splunk_token is not defined for a type Splunk webhook, it will not send, regardless if
     * the webhook receiver is configured to accept it.'
     */
    splunkToken?: pulumi.Input<string>;
    /**
     * enum: `alarms`, `asset-raw`, `asset-raw-rssi`, `audits`, `client-info`, `client-join`, `client-latency`,
     * `client-sessions`, `device-updowns`, `device-events`, `discovered-raw-rssi`, `location`, `location_asset`,
     * `location_centrak`, `location_client`, `location_sdk`, `location_unclient`, `mxedge-events`, `nac-accounting`,
     * `nac_events`, `occupancy-alerts`, `rssizone`, `sdkclient_scan_data`, `site_sle`, `vbeacon`, `wifi-conn-raw`,
     * `wifi-unconn-raw`, `zone`
     */
    topics?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * enum: `aws-sns`, `google-pubsub`, `http-post`, `oauth2`, `splunk`
     */
    type?: pulumi.Input<string>;
    url?: pulumi.Input<string>;
    /**
     * when url uses HTTPS, whether to verify the certificate
     */
    verifyCert?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a SiteWebhook resource.
 */
export interface SiteWebhookArgs {
    /**
     * whether webhook is enabled
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * if `type`=`http-post`, additional custom HTTP headers to add the headers name and value must be string, total bytes of
     * headers name and value must be less than 1000
     */
    headers?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * name of the webhook
     */
    name?: pulumi.Input<string>;
    /**
     * required when `oauth2_grant_type`==`client_credentials`
     */
    oauth2ClientId?: pulumi.Input<string>;
    /**
     * required when `oauth2_grant_type`==`client_credentials`
     */
    oauth2ClientSecret?: pulumi.Input<string>;
    /**
     * required when `type`==`oauth2`. enum: `client_credentials`, `password`
     */
    oauth2GrantType?: pulumi.Input<string>;
    /**
     * required when `oauth2_grant_type`==`password`
     */
    oauth2Password?: pulumi.Input<string>;
    /**
     * required when `type`==`oauth2`, if provided, will be used in the token request
     */
    oauth2Scopes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * required when `type`==`oauth2`
     */
    oauth2TokenUrl?: pulumi.Input<string>;
    /**
     * required when `oauth2_grant_type`==`password`
     */
    oauth2Username?: pulumi.Input<string>;
    /**
     * only if `type`=`http-post` when `secret` is provided, two HTTP headers will be added: * X-Mist-Signature-v2:
     * HMAC_SHA256(secret, body) * X-Mist-Signature: HMAC_SHA1(secret, body)
     */
    secret?: pulumi.Input<string>;
    siteId: pulumi.Input<string>;
    /**
     * required if `type`=`splunk` If splunk_token is not defined for a type Splunk webhook, it will not send, regardless if
     * the webhook receiver is configured to accept it.'
     */
    splunkToken?: pulumi.Input<string>;
    /**
     * enum: `alarms`, `asset-raw`, `asset-raw-rssi`, `audits`, `client-info`, `client-join`, `client-latency`,
     * `client-sessions`, `device-updowns`, `device-events`, `discovered-raw-rssi`, `location`, `location_asset`,
     * `location_centrak`, `location_client`, `location_sdk`, `location_unclient`, `mxedge-events`, `nac-accounting`,
     * `nac_events`, `occupancy-alerts`, `rssizone`, `sdkclient_scan_data`, `site_sle`, `vbeacon`, `wifi-conn-raw`,
     * `wifi-unconn-raw`, `zone`
     */
    topics: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * enum: `aws-sns`, `google-pubsub`, `http-post`, `oauth2`, `splunk`
     */
    type?: pulumi.Input<string>;
    url: pulumi.Input<string>;
    /**
     * when url uses HTTPS, whether to verify the certificate
     */
    verifyCert?: pulumi.Input<boolean>;
}
