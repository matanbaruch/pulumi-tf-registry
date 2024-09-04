// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * The provider type for the davinci package. By default, resources use package-wide configuration
 * settings, however an explicit `Provider` instance may be created and passed during resource
 * construction to achieve fine-grained programmatic control over provider settings. See the
 * [documentation](https://www.pulumi.com/docs/reference/programming-model/#providers) for more information.
 */
export class Provider extends pulumi.ProviderResource {
    /** @internal */
    public static readonly __pulumiType = 'davinci';

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

    /**
     * PingOne DaVinci specific access token. Must be authorized for environment_id. Default value can be set with the
     * `PINGONE_DAVINCI_ACCESS_TOKEN` environment variable. Must provide username and password, or access_token.
     */
    public readonly accessToken!: pulumi.Output<string | undefined>;
    /**
     * Environment ID PingOne User Login. Default value can be set with the `PINGONE_ENVIRONMENT_ID` environment variable.
     */
    public readonly environmentId!: pulumi.Output<string | undefined>;
    /**
     * To override the default region-based url, provide a PingOne DaVinci API host url. Default value can be set with the
     * `PINGONE_DAVINCI_HOST_URL` environment variable.
     */
    public readonly hostUrl!: pulumi.Output<string | undefined>;
    /**
     * The PingOne password used for SSO into a Davinci tenant. Default value can be set with the `PINGONE_PASSWORD`
     * environment variable. Must provide username and password, or access_token.
     */
    public readonly password!: pulumi.Output<string | undefined>;
    /**
     * The PingOne region to use. Options are `AsiaPacific` `Canada` `Europe` and `NorthAmerica`. Default value can be set with
     * the `PINGONE_REGION` environment variable.
     */
    public readonly region!: pulumi.Output<string | undefined>;
    /**
     * The PingOne username used for SSO into a Davinci tenant. Default value can be set with the `PINGONE_USERNAME`
     * environment variable. Must provide username and password, or access_token.
     */
    public readonly username!: pulumi.Output<string | undefined>;

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
            resourceInputs["accessToken"] = args ? args.accessToken : undefined;
            resourceInputs["environmentId"] = args ? args.environmentId : undefined;
            resourceInputs["hostUrl"] = args ? args.hostUrl : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(Provider.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * The set of arguments for constructing a Provider resource.
 */
export interface ProviderArgs {
    /**
     * PingOne DaVinci specific access token. Must be authorized for environment_id. Default value can be set with the
     * `PINGONE_DAVINCI_ACCESS_TOKEN` environment variable. Must provide username and password, or access_token.
     */
    accessToken?: pulumi.Input<string>;
    /**
     * Environment ID PingOne User Login. Default value can be set with the `PINGONE_ENVIRONMENT_ID` environment variable.
     */
    environmentId?: pulumi.Input<string>;
    /**
     * To override the default region-based url, provide a PingOne DaVinci API host url. Default value can be set with the
     * `PINGONE_DAVINCI_HOST_URL` environment variable.
     */
    hostUrl?: pulumi.Input<string>;
    /**
     * The PingOne password used for SSO into a Davinci tenant. Default value can be set with the `PINGONE_PASSWORD`
     * environment variable. Must provide username and password, or access_token.
     */
    password?: pulumi.Input<string>;
    /**
     * The PingOne region to use. Options are `AsiaPacific` `Canada` `Europe` and `NorthAmerica`. Default value can be set with
     * the `PINGONE_REGION` environment variable.
     */
    region?: pulumi.Input<string>;
    /**
     * The PingOne username used for SSO into a Davinci tenant. Default value can be set with the `PINGONE_USERNAME`
     * environment variable. Must provide username and password, or access_token.
     */
    username?: pulumi.Input<string>;
}
