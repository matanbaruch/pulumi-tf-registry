// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * The provider type for the dynatrace package. By default, resources use package-wide configuration
 * settings, however an explicit `Provider` instance may be created and passed during resource
 * construction to achieve fine-grained programmatic control over provider settings. See the
 * [documentation](https://www.pulumi.com/docs/reference/programming-model/#providers) for more information.
 */
export class Provider extends pulumi.ProviderResource {
    /** @internal */
    public static readonly __pulumiType = 'dynatrace';

    /**
     * Returns true if the given object is an instance of Provider.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Provider {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === "pulumi:providers:" + Provider.__pulumiType;
    }

    public readonly accountId!: pulumi.Output<string | undefined>;
    public readonly automationClientId!: pulumi.Output<string | undefined>;
    public readonly automationClientSecret!: pulumi.Output<string | undefined>;
    /**
     * The URL of the Dynatrace Environment with Platform capabilities turned on (`https://#####.apps.dynatrace.com)`. This is
     * optional configuration when `dt_env_url` already specifies a SaaS Environment like `https://#####.live.dynatrace.com` or
     * `https://#####.apps.dynatrace.com`
     */
    public readonly automationEnvUrl!: pulumi.Output<string | undefined>;
    /**
     * The URL that provides the Bearer tokens when accessing the Automation REST API. This is optional configuration when
     * `dt_env_url` already specifies a SaaS Environment like `https://#####.live.dynatrace.com` or
     * `https://#####.apps.dynatrace.com`
     */
    public readonly automationTokenUrl!: pulumi.Output<string | undefined>;
    public readonly clientId!: pulumi.Output<string | undefined>;
    public readonly clientSecret!: pulumi.Output<string | undefined>;
    public readonly dtApiToken!: pulumi.Output<string | undefined>;
    public readonly dtClusterApiToken!: pulumi.Output<string | undefined>;
    public readonly dtClusterUrl!: pulumi.Output<string | undefined>;
    public readonly dtEnvUrl!: pulumi.Output<string | undefined>;
    public readonly iamAccountId!: pulumi.Output<string | undefined>;
    public readonly iamClientId!: pulumi.Output<string | undefined>;
    public readonly iamClientSecret!: pulumi.Output<string | undefined>;

    /**
     * Create a Provider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ProviderArgs, opts?: pulumi.ResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        {
            resourceInputs["accountId"] = args?.accountId ? pulumi.secret(args.accountId) : undefined;
            resourceInputs["automationClientId"] = args?.automationClientId ? pulumi.secret(args.automationClientId) : undefined;
            resourceInputs["automationClientSecret"] = args?.automationClientSecret ? pulumi.secret(args.automationClientSecret) : undefined;
            resourceInputs["automationEnvUrl"] = args ? args.automationEnvUrl : undefined;
            resourceInputs["automationTokenUrl"] = args ? args.automationTokenUrl : undefined;
            resourceInputs["clientId"] = args?.clientId ? pulumi.secret(args.clientId) : undefined;
            resourceInputs["clientSecret"] = args?.clientSecret ? pulumi.secret(args.clientSecret) : undefined;
            resourceInputs["dtApiToken"] = args?.dtApiToken ? pulumi.secret(args.dtApiToken) : undefined;
            resourceInputs["dtClusterApiToken"] = args?.dtClusterApiToken ? pulumi.secret(args.dtClusterApiToken) : undefined;
            resourceInputs["dtClusterUrl"] = args?.dtClusterUrl ? pulumi.secret(args.dtClusterUrl) : undefined;
            resourceInputs["dtEnvUrl"] = args ? args.dtEnvUrl : undefined;
            resourceInputs["iamAccountId"] = args?.iamAccountId ? pulumi.secret(args.iamAccountId) : undefined;
            resourceInputs["iamClientId"] = args?.iamClientId ? pulumi.secret(args.iamClientId) : undefined;
            resourceInputs["iamClientSecret"] = args?.iamClientSecret ? pulumi.secret(args.iamClientSecret) : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["accountId", "automationClientId", "automationClientSecret", "clientId", "clientSecret", "dtApiToken", "dtClusterApiToken", "dtClusterUrl", "iamAccountId", "iamClientId", "iamClientSecret"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(Provider.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * The set of arguments for constructing a Provider resource.
 */
export interface ProviderArgs {
    accountId?: pulumi.Input<string>;
    automationClientId?: pulumi.Input<string>;
    automationClientSecret?: pulumi.Input<string>;
    /**
     * The URL of the Dynatrace Environment with Platform capabilities turned on (`https://#####.apps.dynatrace.com)`. This is
     * optional configuration when `dt_env_url` already specifies a SaaS Environment like `https://#####.live.dynatrace.com` or
     * `https://#####.apps.dynatrace.com`
     */
    automationEnvUrl?: pulumi.Input<string>;
    /**
     * The URL that provides the Bearer tokens when accessing the Automation REST API. This is optional configuration when
     * `dt_env_url` already specifies a SaaS Environment like `https://#####.live.dynatrace.com` or
     * `https://#####.apps.dynatrace.com`
     */
    automationTokenUrl?: pulumi.Input<string>;
    clientId?: pulumi.Input<string>;
    clientSecret?: pulumi.Input<string>;
    dtApiToken?: pulumi.Input<string>;
    dtClusterApiToken?: pulumi.Input<string>;
    dtClusterUrl?: pulumi.Input<string>;
    dtEnvUrl?: pulumi.Input<string>;
    iamAccountId?: pulumi.Input<string>;
    iamClientId?: pulumi.Input<string>;
    iamClientSecret?: pulumi.Input<string>;
}
