// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * The provider type for the grafana-adaptive-metrics package. By default, resources use package-wide configuration
 * settings, however an explicit `Provider` instance may be created and passed during resource
 * construction to achieve fine-grained programmatic control over provider settings. See the
 * [documentation](https://www.pulumi.com/docs/reference/programming-model/#providers) for more information.
 */
export class Provider extends pulumi.ProviderResource {
    /** @internal */
    public static readonly __pulumiType = 'grafana-adaptive-metrics';

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
     * Tenant ID and Access Policy Token (or API key) for Grafana Cloud in the format '<tenant-id>:<token-or-api-key>'. May
     * alternatively be set via the `GRAFANA_AM_API_KEY` environment variable.
     */
    public readonly apiKey!: pulumi.Output<string | undefined>;
    /**
     * Grafana Cloud's API URL. May alternatively be set via the `GRAFANA_AM_API_URL` environment variable.
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
            resourceInputs["apiKey"] = args?.apiKey ? pulumi.secret(args.apiKey) : undefined;
            resourceInputs["debug"] = pulumi.output(args ? args.debug : undefined).apply(JSON.stringify);
            resourceInputs["httpHeaders"] = pulumi.output(args?.httpHeaders ? pulumi.secret(args.httpHeaders) : undefined).apply(JSON.stringify);
            resourceInputs["retries"] = pulumi.output(args ? args.retries : undefined).apply(JSON.stringify);
            resourceInputs["url"] = args ? args.url : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["apiKey"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(Provider.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * The set of arguments for constructing a Provider resource.
 */
export interface ProviderArgs {
    /**
     * Tenant ID and Access Policy Token (or API key) for Grafana Cloud in the format '<tenant-id>:<token-or-api-key>'. May
     * alternatively be set via the `GRAFANA_AM_API_KEY` environment variable.
     */
    apiKey?: pulumi.Input<string>;
    /**
     * Whether to enable debug logging. Defaults to false.
     */
    debug?: pulumi.Input<boolean>;
    /**
     * HTTP headers mapping keys to values used for accessing Grafana Cloud APIs. May alternatively be set via the
     * `GRAFANA_AM_HTTP_HEADERS` environment variable in JSON format.
     */
    httpHeaders?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The amount of retries to use for Grafana API and Grafana Cloud API calls. Defaults to 3. May alternatively be set via
     * the `GRAFANA_AM_RETRIES` environment variable.
     */
    retries?: pulumi.Input<number>;
    /**
     * Grafana Cloud's API URL. May alternatively be set via the `GRAFANA_AM_API_URL` environment variable.
     */
    url?: pulumi.Input<string>;
}
