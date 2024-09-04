// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * The provider type for the illumio-core package. By default, resources use package-wide configuration
 * settings, however an explicit `Provider` instance may be created and passed during resource
 * construction to achieve fine-grained programmatic control over provider settings. See the
 * [documentation](https://www.pulumi.com/docs/reference/programming-model/#providers) for more information.
 */
export class Provider extends pulumi.ProviderResource {
    /** @internal */
    public static readonly __pulumiType = 'illumio-core';

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
     * Secret of API Key. This can also be set by environment variable `ILLUMIO_API_KEY_SECRET`
     */
    public readonly apiSecret!: pulumi.Output<string>;
    /**
     * Username of API Key. This can also be set by environment variable `ILLUMIO_API_KEY_USERNAME`
     */
    public readonly apiUsername!: pulumi.Output<string>;
    /**
     * The path to CA certificate file (PEM). In case, certificate is based on legacy CN instead of ASN, set env. variable
     * `GODEBUG=x509ignoreCN=0`. This can also be set by environment variable `ILLUMIO_CA_FILE`
     */
    public readonly caFile!: pulumi.Output<string | undefined>;
    /**
     * Allow insecure TLS. Only `yes` will mark it insecure. This can also be set by environment variable
     * `ILLUMIO_ALLOW_INSECURE_TLS`
     */
    public readonly insecure!: pulumi.Output<string | undefined>;
    /**
     * Host URL of Illumio PCE. This can also be set by environment variable `ILLUMIO_PCE_HOST`
     */
    public readonly pceHost!: pulumi.Output<string>;
    /**
     * Proxy credential in format `username:password`. This can also be set by environment variable `ILLUMIO_PROXY_CREDENTIALS`
     */
    public readonly proxyCreds!: pulumi.Output<string | undefined>;
    /**
     * Proxy Server URL with port number. This can also be set by environment variable `ILLUMIO_PROXY_URL`
     */
    public readonly proxyUrl!: pulumi.Output<string | undefined>;

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
            if ((!args || args.apiSecret === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apiSecret'");
            }
            if ((!args || args.apiUsername === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apiUsername'");
            }
            if ((!args || args.pceHost === undefined) && !opts.urn) {
                throw new Error("Missing required property 'pceHost'");
            }
            resourceInputs["apiSecret"] = args?.apiSecret ? pulumi.secret(args.apiSecret) : undefined;
            resourceInputs["apiUsername"] = args ? args.apiUsername : undefined;
            resourceInputs["backoffTime"] = pulumi.output(args ? args.backoffTime : undefined).apply(JSON.stringify);
            resourceInputs["caFile"] = args ? args.caFile : undefined;
            resourceInputs["insecure"] = args ? args.insecure : undefined;
            resourceInputs["maxRetries"] = pulumi.output(args ? args.maxRetries : undefined).apply(JSON.stringify);
            resourceInputs["orgId"] = pulumi.output(args ? args.orgId : undefined).apply(JSON.stringify);
            resourceInputs["pceHost"] = args ? args.pceHost : undefined;
            resourceInputs["proxyCreds"] = args ? args.proxyCreds : undefined;
            resourceInputs["proxyUrl"] = args ? args.proxyUrl : undefined;
            resourceInputs["requestTimeout"] = pulumi.output(args ? args.requestTimeout : undefined).apply(JSON.stringify);
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["apiSecret"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(Provider.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * The set of arguments for constructing a Provider resource.
 */
export interface ProviderArgs {
    /**
     * Secret of API Key. This can also be set by environment variable `ILLUMIO_API_KEY_SECRET`
     */
    apiSecret: pulumi.Input<string>;
    /**
     * Username of API Key. This can also be set by environment variable `ILLUMIO_API_KEY_USERNAME`
     */
    apiUsername: pulumi.Input<string>;
    /**
     * Backoff Time (in seconds) on getting 429 (Too Many Requests). Default value: 10. Note: A default rate limit of 125
     * requests/min is already in place. A jitter of 1-5 seconds will be added to backoff time to randomize backoff.
     */
    backoffTime?: pulumi.Input<number>;
    /**
     * The path to CA certificate file (PEM). In case, certificate is based on legacy CN instead of ASN, set env. variable
     * `GODEBUG=x509ignoreCN=0`. This can also be set by environment variable `ILLUMIO_CA_FILE`
     */
    caFile?: pulumi.Input<string>;
    /**
     * Allow insecure TLS. Only `yes` will mark it insecure. This can also be set by environment variable
     * `ILLUMIO_ALLOW_INSECURE_TLS`
     */
    insecure?: pulumi.Input<string>;
    /**
     * Maximum retries for an API request. Default value: 3
     */
    maxRetries?: pulumi.Input<number>;
    /**
     * ID of the Organization. Can also be set by environment variable `ILLUMIO_PCE_ORG_ID`. Default value: 1
     */
    orgId?: pulumi.Input<number>;
    /**
     * Host URL of Illumio PCE. This can also be set by environment variable `ILLUMIO_PCE_HOST`
     */
    pceHost: pulumi.Input<string>;
    /**
     * Proxy credential in format `username:password`. This can also be set by environment variable `ILLUMIO_PROXY_CREDENTIALS`
     */
    proxyCreds?: pulumi.Input<string>;
    /**
     * Proxy Server URL with port number. This can also be set by environment variable `ILLUMIO_PROXY_URL`
     */
    proxyUrl?: pulumi.Input<string>;
    /**
     * Timeout for HTTP requests. Default value: 30
     */
    requestTimeout?: pulumi.Input<number>;
}
