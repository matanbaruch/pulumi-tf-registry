// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * The provider type for the vultr package. By default, resources use package-wide configuration
 * settings, however an explicit `Provider` instance may be created and passed during resource
 * construction to achieve fine-grained programmatic control over provider settings. See the
 * [documentation](https://www.pulumi.com/docs/reference/programming-model/#providers) for more information.
 */
export class Provider extends pulumi.ProviderResource {
    /** @internal */
    public static readonly __pulumiType = 'vultr';

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
     * The API Key that allows interaction with the API
     */
    public readonly apiKey!: pulumi.Output<string>;

    /**
     * Create a Provider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProviderArgs, opts?: pulumi.ResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        {
            if ((!args || args.apiKey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apiKey'");
            }
            resourceInputs["apiKey"] = args ? args.apiKey : undefined;
            resourceInputs["rateLimit"] = pulumi.output(args ? args.rateLimit : undefined).apply(JSON.stringify);
            resourceInputs["retryLimit"] = pulumi.output(args ? args.retryLimit : undefined).apply(JSON.stringify);
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Provider.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * The set of arguments for constructing a Provider resource.
 */
export interface ProviderArgs {
    /**
     * The API Key that allows interaction with the API
     */
    apiKey: pulumi.Input<string>;
    /**
     * Allows users to set the speed of API calls to work with the Vultr Rate Limit
     */
    rateLimit?: pulumi.Input<number>;
    /**
     * Allows users to set the maximum number of retries allowed for a failed API call.
     */
    retryLimit?: pulumi.Input<number>;
}
