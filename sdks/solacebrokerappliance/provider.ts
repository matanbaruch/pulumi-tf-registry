// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * The provider type for the solacebrokerappliance package. By default, resources use package-wide configuration
 * settings, however an explicit `Provider` instance may be created and passed during resource
 * construction to achieve fine-grained programmatic control over provider settings. See the
 * [documentation](https://www.pulumi.com/docs/reference/programming-model/#providers) for more information.
 */
export class Provider extends pulumi.ProviderResource {
    /** @internal */
    public static readonly __pulumiType = 'solacebrokerappliance';

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
     * A bearer token that will be sent in the Authorization header of SEMP requests. Requires TLS transport enabled. Conflicts
     * with username and password.
     */
    public readonly bearerToken!: pulumi.Output<string | undefined>;
    /**
     * The password to connect to the broker with. Requires username and conflicts with bearer_token.
     */
    public readonly password!: pulumi.Output<string | undefined>;
    /**
     * A [duration](https://pkg.go.dev/maze.io/x/duration#ParseDuration) string indicating the minimum interval between
     * requests; this serves as a rate limit. This setting does not apply to retries. Set to 0 for no rate limit. The default
     * value is 100ms (which equates to a rate limit of 10 calls per second).
     */
    public readonly requestMinInterval!: pulumi.Output<string | undefined>;
    /**
     * A [duration](https://pkg.go.dev/maze.io/x/duration#ParseDuration) string indicating the maximum time to wait for a SEMP
     * request. The default value is 1m.
     */
    public readonly requestTimeoutDuration!: pulumi.Output<string | undefined>;
    /**
     * A [duration](https://pkg.go.dev/maze.io/x/duration#ParseDuration) string indicating the maximum retry interval. The
     * default value is 30s.
     */
    public readonly retryMaxInterval!: pulumi.Output<string | undefined>;
    /**
     * A [duration](https://pkg.go.dev/maze.io/x/duration#ParseDuration) string indicating how long to wait after an initial
     * failed request before the first retry. Exponential backoff is used, up to the limit set by retry_max_interval. The
     * default value is 3s.
     */
    public readonly retryMinInterval!: pulumi.Output<string | undefined>;
    /**
     * The base URL of the event broker, for example `https://mybroker.example.org:<semp-service-port>/`. The trailing / can be
     * omitted.
     */
    public readonly url!: pulumi.Output<string>;
    /**
     * The username to connect to the broker with. Requires password and conflicts with bearer_token.
     */
    public readonly username!: pulumi.Output<string | undefined>;

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
            resourceInputs["bearerToken"] = args?.bearerToken ? pulumi.secret(args.bearerToken) : undefined;
            resourceInputs["insecureSkipVerify"] = pulumi.output(args ? args.insecureSkipVerify : undefined).apply(JSON.stringify);
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["requestMinInterval"] = args ? args.requestMinInterval : undefined;
            resourceInputs["requestTimeoutDuration"] = args ? args.requestTimeoutDuration : undefined;
            resourceInputs["retries"] = pulumi.output(args ? args.retries : undefined).apply(JSON.stringify);
            resourceInputs["retryMaxInterval"] = args ? args.retryMaxInterval : undefined;
            resourceInputs["retryMinInterval"] = args ? args.retryMinInterval : undefined;
            resourceInputs["skipApiCheck"] = pulumi.output(args ? args.skipApiCheck : undefined).apply(JSON.stringify);
            resourceInputs["url"] = args ? args.url : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["bearerToken", "password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(Provider.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * The set of arguments for constructing a Provider resource.
 */
export interface ProviderArgs {
    /**
     * A bearer token that will be sent in the Authorization header of SEMP requests. Requires TLS transport enabled. Conflicts
     * with username and password.
     */
    bearerToken?: pulumi.Input<string>;
    /**
     * Disable validation of server SSL certificates, accept/ignore self-signed. The default value is false.
     */
    insecureSkipVerify?: pulumi.Input<boolean>;
    /**
     * The password to connect to the broker with. Requires username and conflicts with bearer_token.
     */
    password?: pulumi.Input<string>;
    /**
     * A [duration](https://pkg.go.dev/maze.io/x/duration#ParseDuration) string indicating the minimum interval between
     * requests; this serves as a rate limit. This setting does not apply to retries. Set to 0 for no rate limit. The default
     * value is 100ms (which equates to a rate limit of 10 calls per second).
     */
    requestMinInterval?: pulumi.Input<string>;
    /**
     * A [duration](https://pkg.go.dev/maze.io/x/duration#ParseDuration) string indicating the maximum time to wait for a SEMP
     * request. The default value is 1m.
     */
    requestTimeoutDuration?: pulumi.Input<string>;
    /**
     * The number of retries for a SEMP call. The default value is 10.
     */
    retries?: pulumi.Input<number>;
    /**
     * A [duration](https://pkg.go.dev/maze.io/x/duration#ParseDuration) string indicating the maximum retry interval. The
     * default value is 30s.
     */
    retryMaxInterval?: pulumi.Input<string>;
    /**
     * A [duration](https://pkg.go.dev/maze.io/x/duration#ParseDuration) string indicating how long to wait after an initial
     * failed request before the first retry. Exponential backoff is used, up to the limit set by retry_max_interval. The
     * default value is 3s.
     */
    retryMinInterval?: pulumi.Input<string>;
    /**
     * Disable validation of the broker SEMP API for supported platform and minimum version. The default value is false.
     */
    skipApiCheck?: pulumi.Input<boolean>;
    /**
     * The base URL of the event broker, for example `https://mybroker.example.org:<semp-service-port>/`. The trailing / can be
     * omitted.
     */
    url: pulumi.Input<string>;
    /**
     * The username to connect to the broker with. Requires password and conflicts with bearer_token.
     */
    username?: pulumi.Input<string>;
}
