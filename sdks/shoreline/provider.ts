// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * The provider type for the shoreline package. By default, resources use package-wide configuration
 * settings, however an explicit `Provider` instance may be created and passed during resource
 * construction to achieve fine-grained programmatic control over provider settings. See the
 * [documentation](https://www.pulumi.com/docs/reference/programming-model/#providers) for more information.
 */
export class Provider extends pulumi.ProviderResource {
    /** @internal */
    public static readonly __pulumiType = 'shoreline';

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
     * Minimum version required on the Shoreline backend (API server).
     */
    public readonly minVersion!: pulumi.Output<string | undefined>;
    /**
     * Customer/user-specific authorization token for the Shoreline API server. May be provided via `SHORELINE_TOKEN` env
     * variable.
     */
    public readonly token!: pulumi.Output<string | undefined>;
    /**
     * Customer-specific URL for the Shoreline API server. It should be of the form
     * ```https://(<backend_node>.)?<customer>.<region>.api.shoreline-<cluster>.io``` .
     */
    public readonly url!: pulumi.Output<string>;

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
            if ((!args || args.url === undefined) && !opts.urn) {
                throw new Error("Missing required property 'url'");
            }
            resourceInputs["debug"] = pulumi.output(args ? args.debug : undefined).apply(JSON.stringify);
            resourceInputs["minVersion"] = args ? args.minVersion : undefined;
            resourceInputs["retries"] = pulumi.output(args ? args.retries : undefined).apply(JSON.stringify);
            resourceInputs["token"] = args?.token ? pulumi.secret(args.token) : undefined;
            resourceInputs["url"] = args ? args.url : undefined;
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
     * Debug logging to `/tmp/tf-shoreline.log`.
     */
    debug?: pulumi.Input<boolean>;
    /**
     * Minimum version required on the Shoreline backend (API server).
     */
    minVersion?: pulumi.Input<string>;
    /**
     * Number of retries for API calls, in case of e.g. transient network failures.
     */
    retries?: pulumi.Input<number>;
    /**
     * Customer/user-specific authorization token for the Shoreline API server. May be provided via `SHORELINE_TOKEN` env
     * variable.
     */
    token?: pulumi.Input<string>;
    /**
     * Customer-specific URL for the Shoreline API server. It should be of the form
     * ```https://(<backend_node>.)?<customer>.<region>.api.shoreline-<cluster>.io``` .
     */
    url: pulumi.Input<string>;
}
