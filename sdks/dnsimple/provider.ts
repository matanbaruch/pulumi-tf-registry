// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * The provider type for the dnsimple package. By default, resources use package-wide configuration
 * settings, however an explicit `Provider` instance may be created and passed during resource
 * construction to achieve fine-grained programmatic control over provider settings. See the
 * [documentation](https://www.pulumi.com/docs/reference/programming-model/#providers) for more information.
 */
export class Provider extends pulumi.ProviderResource {
    /** @internal */
    public static readonly __pulumiType = 'dnsimple';

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
     * The account for API operations.
     */
    public readonly account!: pulumi.Output<string | undefined>;
    /**
     * The API v2 token for API operations.
     */
    public readonly token!: pulumi.Output<string | undefined>;
    /**
     * Custom string to append to the user agent used for sending HTTP requests to the API.
     */
    public readonly userAgent!: pulumi.Output<string | undefined>;

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
            resourceInputs["account"] = args ? args.account : undefined;
            resourceInputs["prefetch"] = pulumi.output(args ? args.prefetch : undefined).apply(JSON.stringify);
            resourceInputs["sandbox"] = pulumi.output(args ? args.sandbox : undefined).apply(JSON.stringify);
            resourceInputs["token"] = args?.token ? pulumi.secret(args.token) : undefined;
            resourceInputs["userAgent"] = args ? args.userAgent : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["token"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(Provider.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * The set of arguments for constructing a Provider resource.
 */
export interface ProviderArgs {
    /**
     * The account for API operations.
     */
    account?: pulumi.Input<string>;
    /**
     * Flag to enable the prefetch of zone records.
     */
    prefetch?: pulumi.Input<boolean>;
    /**
     * Flag to enable the sandbox API.
     */
    sandbox?: pulumi.Input<boolean>;
    /**
     * The API v2 token for API operations.
     */
    token?: pulumi.Input<string>;
    /**
     * Custom string to append to the user agent used for sending HTTP requests to the API.
     */
    userAgent?: pulumi.Input<string>;
}
