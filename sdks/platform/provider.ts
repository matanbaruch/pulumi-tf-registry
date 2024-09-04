// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * The provider type for the platform package. By default, resources use package-wide configuration
 * settings, however an explicit `Provider` instance may be created and passed during resource
 * construction to achieve fine-grained programmatic control over provider settings. See the
 * [documentation](https://www.pulumi.com/docs/reference/programming-model/#providers) for more information.
 */
export class Provider extends pulumi.ProviderResource {
    /** @internal */
    public static readonly __pulumiType = 'platform';

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
     * This is a access token that can be given to you by your admin under `Platform Configuration > User Management > Access
     * Tokens`. This can also be sourced from the `JFROG_ACCESS_TOKEN` environment variable.
     */
    public readonly accessToken!: pulumi.Output<string | undefined>;
    /**
     * MyJFrog API token that allows you to make changes to your JFrog account. See [Generate a Token in
     * MyJFrog](https://jfrog.com/help/r/jfrog-hosting-models-documentation/generate-a-token-in-myjfrog) for more details. This
     * can also be sourced from the `JFROG_MYJFROG_API_TOKEN` environment variable.
     *
     * @deprecated Deprecated
     */
    public readonly myjfrogApiToken!: pulumi.Output<string | undefined>;
    /**
     * OIDC provider name. See [Configure an OIDC
     * Integration](https://jfrog.com/help/r/jfrog-platform-administration-documentation/configure-an-oidc-integration) for
     * more details.
     */
    public readonly oidcProviderName!: pulumi.Output<string | undefined>;
    /**
     * JFrog Platform URL. This can also be sourced from the `JFROG_URL` environment variable.
     */
    public readonly url!: pulumi.Output<string | undefined>;

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
            resourceInputs["accessToken"] = args?.accessToken ? pulumi.secret(args.accessToken) : undefined;
            resourceInputs["checkLicense"] = pulumi.output(args ? args.checkLicense : undefined).apply(JSON.stringify);
            resourceInputs["myjfrogApiToken"] = args?.myjfrogApiToken ? pulumi.secret(args.myjfrogApiToken) : undefined;
            resourceInputs["oidcProviderName"] = args ? args.oidcProviderName : undefined;
            resourceInputs["url"] = args ? args.url : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["accessToken", "myjfrogApiToken"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(Provider.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * The set of arguments for constructing a Provider resource.
 */
export interface ProviderArgs {
    /**
     * This is a access token that can be given to you by your admin under `Platform Configuration > User Management > Access
     * Tokens`. This can also be sourced from the `JFROG_ACCESS_TOKEN` environment variable.
     */
    accessToken?: pulumi.Input<string>;
    /**
     * Toggle for pre-flight checking of Artifactory Pro and Enterprise license. Default to `true`.
     *
     * @deprecated Deprecated
     */
    checkLicense?: pulumi.Input<boolean>;
    /**
     * MyJFrog API token that allows you to make changes to your JFrog account. See [Generate a Token in
     * MyJFrog](https://jfrog.com/help/r/jfrog-hosting-models-documentation/generate-a-token-in-myjfrog) for more details. This
     * can also be sourced from the `JFROG_MYJFROG_API_TOKEN` environment variable.
     *
     * @deprecated Deprecated
     */
    myjfrogApiToken?: pulumi.Input<string>;
    /**
     * OIDC provider name. See [Configure an OIDC
     * Integration](https://jfrog.com/help/r/jfrog-platform-administration-documentation/configure-an-oidc-integration) for
     * more details.
     */
    oidcProviderName?: pulumi.Input<string>;
    /**
     * JFrog Platform URL. This can also be sourced from the `JFROG_URL` environment variable.
     */
    url?: pulumi.Input<string>;
}
