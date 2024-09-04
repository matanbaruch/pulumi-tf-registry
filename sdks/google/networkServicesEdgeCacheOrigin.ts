// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class NetworkServicesEdgeCacheOrigin extends pulumi.CustomResource {
    /**
     * Get an existing NetworkServicesEdgeCacheOrigin resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetworkServicesEdgeCacheOriginState, opts?: pulumi.CustomResourceOptions): NetworkServicesEdgeCacheOrigin {
        return new NetworkServicesEdgeCacheOrigin(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/networkServicesEdgeCacheOrigin:NetworkServicesEdgeCacheOrigin';

    /**
     * Returns true if the given object is an instance of NetworkServicesEdgeCacheOrigin.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkServicesEdgeCacheOrigin {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkServicesEdgeCacheOrigin.__pulumiType;
    }

    /**
     * Enable AWS Signature Version 4 origin authentication.
     */
    public readonly awsV4Authentication!: pulumi.Output<outputs.NetworkServicesEdgeCacheOriginAwsV4Authentication | undefined>;
    /**
     * A human-readable description of the resource.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    public /*out*/ readonly effectiveLabels!: pulumi.Output<{[key: string]: string}>;
    /**
     * The Origin resource to try when the current origin cannot be reached. After maxAttempts is reached, the configured
     * failoverOrigin will be used to fulfil the request. The value of timeout.maxAttemptsTimeout dictates the timeout across
     * all origins. A reference to a Topic resource.
     */
    public readonly failoverOrigin!: pulumi.Output<string | undefined>;
    /**
     * Set of label tags associated with the EdgeCache resource. **Note**: This field is non-authoritative, and will only
     * manage the labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels
     * present on the resource.
     */
    public readonly labels!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The maximum number of attempts to cache fill from this origin. Another attempt is made when a cache fill fails with one
     * of the retryConditions. Once maxAttempts to this origin have failed the failoverOrigin will be used, if one is
     * specified. That failoverOrigin may specify its own maxAttempts, retryConditions and failoverOrigin to control its own
     * cache fill failures. The total number of allowed attempts to cache fill across this and failover origins is limited to
     * four. The total time allowed for cache fill attempts across this and failover origins can be controlled with
     * maxAttemptsTimeout. The last valid, non-retried response from all origins will be returned to the client. If no origin
     * returns a valid response, an HTTP 502 will be returned to the client. Defaults to 1. Must be a value greater than 0 and
     * less than 4.
     */
    public readonly maxAttempts!: pulumi.Output<number | undefined>;
    /**
     * Name of the resource; provided by the client when the resource is created. The name must be 1-64 characters long, and
     * match the regular expression [a-zA-Z][a-zA-Z0-9_-]* which means the first character must be a letter, and all following
     * characters must be a dash, underscore, letter or digit.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * A fully qualified domain name (FQDN) or IP address reachable over the public Internet, or the address of a Google Cloud
     * Storage bucket. This address will be used as the origin for cache requests - e.g. FQDN: media-backend.example.com, IPv4:
     * 35.218.1.1, IPv6: 2607:f8b0:4012:809::200e, Cloud Storage: gs://bucketname When providing an FQDN (hostname), it must be
     * publicly resolvable (e.g. via Google public DNS) and IP addresses must be publicly routable. It must not contain a
     * protocol (e.g., https://) and it must not contain any slashes. If a Cloud Storage bucket is provided, it must be in the
     * canonical "gs://bucketname" format. Other forms, such as "storage.googleapis.com", will be rejected.
     */
    public readonly originAddress!: pulumi.Output<string>;
    /**
     * The override actions, including url rewrites and header additions, for requests that use this origin.
     */
    public readonly originOverrideAction!: pulumi.Output<outputs.NetworkServicesEdgeCacheOriginOriginOverrideAction | undefined>;
    /**
     * Follow redirects from this origin.
     */
    public readonly originRedirect!: pulumi.Output<outputs.NetworkServicesEdgeCacheOriginOriginRedirect | undefined>;
    /**
     * The port to connect to the origin on. Defaults to port 443 for HTTP2 and HTTPS protocols, and port 80 for HTTP.
     */
    public readonly port!: pulumi.Output<number>;
    public readonly project!: pulumi.Output<string>;
    /**
     * The protocol to use to connect to the configured origin. Defaults to HTTP2, and it is strongly recommended that users
     * use HTTP2 for both security & performance. When using HTTP2 or HTTPS as the protocol, a valid, publicly-signed,
     * unexpired TLS (SSL) certificate must be presented by the origin server. Possible values: ["HTTP2", "HTTPS", "HTTP"]
     */
    public readonly protocol!: pulumi.Output<string>;
    /**
     * Specifies one or more retry conditions for the configured origin. If the failure mode during a connection attempt to the
     * origin matches the configured retryCondition(s), the origin request will be retried up to maxAttempts times. The
     * failoverOrigin, if configured, will then be used to satisfy the request. The default retryCondition is
     * "CONNECT_FAILURE". retryConditions apply to this origin, and not subsequent failoverOrigin(s), which may specify their
     * own retryConditions and maxAttempts. Valid values are: - CONNECT_FAILURE: Retry on failures connecting to origins, for
     * example due to connection timeouts. - HTTP_5XX: Retry if the origin responds with any 5xx response code, or if the
     * origin does not respond at all, example: disconnects, reset, read timeout, connection failure, and refused streams. -
     * GATEWAY_ERROR: Similar to 5xx, but only applies to response codes 502, 503 or 504. - RETRIABLE_4XX: Retry for retriable
     * 4xx response codes, which include HTTP 409 (Conflict) and HTTP 429 (Too Many Requests) - NOT_FOUND: Retry if the origin
     * returns a HTTP 404 (Not Found). This can be useful when generating video content, and the segment is not available yet.
     * - FORBIDDEN: Retry if the origin returns a HTTP 403 (Forbidden). Possible values: ["CONNECT_FAILURE", "HTTP_5XX",
     * "GATEWAY_ERROR", "RETRIABLE_4XX", "NOT_FOUND", "FORBIDDEN"]
     */
    public readonly retryConditions!: pulumi.Output<string[]>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    public /*out*/ readonly terraformLabels!: pulumi.Output<{[key: string]: string}>;
    /**
     * The connection and HTTP timeout configuration for this origin.
     */
    public readonly timeout!: pulumi.Output<outputs.NetworkServicesEdgeCacheOriginTimeout | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.NetworkServicesEdgeCacheOriginTimeouts | undefined>;

    /**
     * Create a NetworkServicesEdgeCacheOrigin resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkServicesEdgeCacheOriginArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NetworkServicesEdgeCacheOriginArgs | NetworkServicesEdgeCacheOriginState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NetworkServicesEdgeCacheOriginState | undefined;
            resourceInputs["awsV4Authentication"] = state ? state.awsV4Authentication : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["effectiveLabels"] = state ? state.effectiveLabels : undefined;
            resourceInputs["failoverOrigin"] = state ? state.failoverOrigin : undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["maxAttempts"] = state ? state.maxAttempts : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["originAddress"] = state ? state.originAddress : undefined;
            resourceInputs["originOverrideAction"] = state ? state.originOverrideAction : undefined;
            resourceInputs["originRedirect"] = state ? state.originRedirect : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["protocol"] = state ? state.protocol : undefined;
            resourceInputs["retryConditions"] = state ? state.retryConditions : undefined;
            resourceInputs["terraformLabels"] = state ? state.terraformLabels : undefined;
            resourceInputs["timeout"] = state ? state.timeout : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as NetworkServicesEdgeCacheOriginArgs | undefined;
            if ((!args || args.originAddress === undefined) && !opts.urn) {
                throw new Error("Missing required property 'originAddress'");
            }
            resourceInputs["awsV4Authentication"] = args ? args.awsV4Authentication : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["failoverOrigin"] = args ? args.failoverOrigin : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["maxAttempts"] = args ? args.maxAttempts : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["originAddress"] = args ? args.originAddress : undefined;
            resourceInputs["originOverrideAction"] = args ? args.originOverrideAction : undefined;
            resourceInputs["originRedirect"] = args ? args.originRedirect : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
            resourceInputs["retryConditions"] = args ? args.retryConditions : undefined;
            resourceInputs["timeout"] = args ? args.timeout : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["effectiveLabels"] = undefined /*out*/;
            resourceInputs["terraformLabels"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NetworkServicesEdgeCacheOrigin.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NetworkServicesEdgeCacheOrigin resources.
 */
export interface NetworkServicesEdgeCacheOriginState {
    /**
     * Enable AWS Signature Version 4 origin authentication.
     */
    awsV4Authentication?: pulumi.Input<inputs.NetworkServicesEdgeCacheOriginAwsV4Authentication>;
    /**
     * A human-readable description of the resource.
     */
    description?: pulumi.Input<string>;
    effectiveLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The Origin resource to try when the current origin cannot be reached. After maxAttempts is reached, the configured
     * failoverOrigin will be used to fulfil the request. The value of timeout.maxAttemptsTimeout dictates the timeout across
     * all origins. A reference to a Topic resource.
     */
    failoverOrigin?: pulumi.Input<string>;
    /**
     * Set of label tags associated with the EdgeCache resource. **Note**: This field is non-authoritative, and will only
     * manage the labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels
     * present on the resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The maximum number of attempts to cache fill from this origin. Another attempt is made when a cache fill fails with one
     * of the retryConditions. Once maxAttempts to this origin have failed the failoverOrigin will be used, if one is
     * specified. That failoverOrigin may specify its own maxAttempts, retryConditions and failoverOrigin to control its own
     * cache fill failures. The total number of allowed attempts to cache fill across this and failover origins is limited to
     * four. The total time allowed for cache fill attempts across this and failover origins can be controlled with
     * maxAttemptsTimeout. The last valid, non-retried response from all origins will be returned to the client. If no origin
     * returns a valid response, an HTTP 502 will be returned to the client. Defaults to 1. Must be a value greater than 0 and
     * less than 4.
     */
    maxAttempts?: pulumi.Input<number>;
    /**
     * Name of the resource; provided by the client when the resource is created. The name must be 1-64 characters long, and
     * match the regular expression [a-zA-Z][a-zA-Z0-9_-]* which means the first character must be a letter, and all following
     * characters must be a dash, underscore, letter or digit.
     */
    name?: pulumi.Input<string>;
    /**
     * A fully qualified domain name (FQDN) or IP address reachable over the public Internet, or the address of a Google Cloud
     * Storage bucket. This address will be used as the origin for cache requests - e.g. FQDN: media-backend.example.com, IPv4:
     * 35.218.1.1, IPv6: 2607:f8b0:4012:809::200e, Cloud Storage: gs://bucketname When providing an FQDN (hostname), it must be
     * publicly resolvable (e.g. via Google public DNS) and IP addresses must be publicly routable. It must not contain a
     * protocol (e.g., https://) and it must not contain any slashes. If a Cloud Storage bucket is provided, it must be in the
     * canonical "gs://bucketname" format. Other forms, such as "storage.googleapis.com", will be rejected.
     */
    originAddress?: pulumi.Input<string>;
    /**
     * The override actions, including url rewrites and header additions, for requests that use this origin.
     */
    originOverrideAction?: pulumi.Input<inputs.NetworkServicesEdgeCacheOriginOriginOverrideAction>;
    /**
     * Follow redirects from this origin.
     */
    originRedirect?: pulumi.Input<inputs.NetworkServicesEdgeCacheOriginOriginRedirect>;
    /**
     * The port to connect to the origin on. Defaults to port 443 for HTTP2 and HTTPS protocols, and port 80 for HTTP.
     */
    port?: pulumi.Input<number>;
    project?: pulumi.Input<string>;
    /**
     * The protocol to use to connect to the configured origin. Defaults to HTTP2, and it is strongly recommended that users
     * use HTTP2 for both security & performance. When using HTTP2 or HTTPS as the protocol, a valid, publicly-signed,
     * unexpired TLS (SSL) certificate must be presented by the origin server. Possible values: ["HTTP2", "HTTPS", "HTTP"]
     */
    protocol?: pulumi.Input<string>;
    /**
     * Specifies one or more retry conditions for the configured origin. If the failure mode during a connection attempt to the
     * origin matches the configured retryCondition(s), the origin request will be retried up to maxAttempts times. The
     * failoverOrigin, if configured, will then be used to satisfy the request. The default retryCondition is
     * "CONNECT_FAILURE". retryConditions apply to this origin, and not subsequent failoverOrigin(s), which may specify their
     * own retryConditions and maxAttempts. Valid values are: - CONNECT_FAILURE: Retry on failures connecting to origins, for
     * example due to connection timeouts. - HTTP_5XX: Retry if the origin responds with any 5xx response code, or if the
     * origin does not respond at all, example: disconnects, reset, read timeout, connection failure, and refused streams. -
     * GATEWAY_ERROR: Similar to 5xx, but only applies to response codes 502, 503 or 504. - RETRIABLE_4XX: Retry for retriable
     * 4xx response codes, which include HTTP 409 (Conflict) and HTTP 429 (Too Many Requests) - NOT_FOUND: Retry if the origin
     * returns a HTTP 404 (Not Found). This can be useful when generating video content, and the segment is not available yet.
     * - FORBIDDEN: Retry if the origin returns a HTTP 403 (Forbidden). Possible values: ["CONNECT_FAILURE", "HTTP_5XX",
     * "GATEWAY_ERROR", "RETRIABLE_4XX", "NOT_FOUND", "FORBIDDEN"]
     */
    retryConditions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    terraformLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The connection and HTTP timeout configuration for this origin.
     */
    timeout?: pulumi.Input<inputs.NetworkServicesEdgeCacheOriginTimeout>;
    timeouts?: pulumi.Input<inputs.NetworkServicesEdgeCacheOriginTimeouts>;
}

/**
 * The set of arguments for constructing a NetworkServicesEdgeCacheOrigin resource.
 */
export interface NetworkServicesEdgeCacheOriginArgs {
    /**
     * Enable AWS Signature Version 4 origin authentication.
     */
    awsV4Authentication?: pulumi.Input<inputs.NetworkServicesEdgeCacheOriginAwsV4Authentication>;
    /**
     * A human-readable description of the resource.
     */
    description?: pulumi.Input<string>;
    /**
     * The Origin resource to try when the current origin cannot be reached. After maxAttempts is reached, the configured
     * failoverOrigin will be used to fulfil the request. The value of timeout.maxAttemptsTimeout dictates the timeout across
     * all origins. A reference to a Topic resource.
     */
    failoverOrigin?: pulumi.Input<string>;
    /**
     * Set of label tags associated with the EdgeCache resource. **Note**: This field is non-authoritative, and will only
     * manage the labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels
     * present on the resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The maximum number of attempts to cache fill from this origin. Another attempt is made when a cache fill fails with one
     * of the retryConditions. Once maxAttempts to this origin have failed the failoverOrigin will be used, if one is
     * specified. That failoverOrigin may specify its own maxAttempts, retryConditions and failoverOrigin to control its own
     * cache fill failures. The total number of allowed attempts to cache fill across this and failover origins is limited to
     * four. The total time allowed for cache fill attempts across this and failover origins can be controlled with
     * maxAttemptsTimeout. The last valid, non-retried response from all origins will be returned to the client. If no origin
     * returns a valid response, an HTTP 502 will be returned to the client. Defaults to 1. Must be a value greater than 0 and
     * less than 4.
     */
    maxAttempts?: pulumi.Input<number>;
    /**
     * Name of the resource; provided by the client when the resource is created. The name must be 1-64 characters long, and
     * match the regular expression [a-zA-Z][a-zA-Z0-9_-]* which means the first character must be a letter, and all following
     * characters must be a dash, underscore, letter or digit.
     */
    name?: pulumi.Input<string>;
    /**
     * A fully qualified domain name (FQDN) or IP address reachable over the public Internet, or the address of a Google Cloud
     * Storage bucket. This address will be used as the origin for cache requests - e.g. FQDN: media-backend.example.com, IPv4:
     * 35.218.1.1, IPv6: 2607:f8b0:4012:809::200e, Cloud Storage: gs://bucketname When providing an FQDN (hostname), it must be
     * publicly resolvable (e.g. via Google public DNS) and IP addresses must be publicly routable. It must not contain a
     * protocol (e.g., https://) and it must not contain any slashes. If a Cloud Storage bucket is provided, it must be in the
     * canonical "gs://bucketname" format. Other forms, such as "storage.googleapis.com", will be rejected.
     */
    originAddress: pulumi.Input<string>;
    /**
     * The override actions, including url rewrites and header additions, for requests that use this origin.
     */
    originOverrideAction?: pulumi.Input<inputs.NetworkServicesEdgeCacheOriginOriginOverrideAction>;
    /**
     * Follow redirects from this origin.
     */
    originRedirect?: pulumi.Input<inputs.NetworkServicesEdgeCacheOriginOriginRedirect>;
    /**
     * The port to connect to the origin on. Defaults to port 443 for HTTP2 and HTTPS protocols, and port 80 for HTTP.
     */
    port?: pulumi.Input<number>;
    project?: pulumi.Input<string>;
    /**
     * The protocol to use to connect to the configured origin. Defaults to HTTP2, and it is strongly recommended that users
     * use HTTP2 for both security & performance. When using HTTP2 or HTTPS as the protocol, a valid, publicly-signed,
     * unexpired TLS (SSL) certificate must be presented by the origin server. Possible values: ["HTTP2", "HTTPS", "HTTP"]
     */
    protocol?: pulumi.Input<string>;
    /**
     * Specifies one or more retry conditions for the configured origin. If the failure mode during a connection attempt to the
     * origin matches the configured retryCondition(s), the origin request will be retried up to maxAttempts times. The
     * failoverOrigin, if configured, will then be used to satisfy the request. The default retryCondition is
     * "CONNECT_FAILURE". retryConditions apply to this origin, and not subsequent failoverOrigin(s), which may specify their
     * own retryConditions and maxAttempts. Valid values are: - CONNECT_FAILURE: Retry on failures connecting to origins, for
     * example due to connection timeouts. - HTTP_5XX: Retry if the origin responds with any 5xx response code, or if the
     * origin does not respond at all, example: disconnects, reset, read timeout, connection failure, and refused streams. -
     * GATEWAY_ERROR: Similar to 5xx, but only applies to response codes 502, 503 or 504. - RETRIABLE_4XX: Retry for retriable
     * 4xx response codes, which include HTTP 409 (Conflict) and HTTP 429 (Too Many Requests) - NOT_FOUND: Retry if the origin
     * returns a HTTP 404 (Not Found). This can be useful when generating video content, and the segment is not available yet.
     * - FORBIDDEN: Retry if the origin returns a HTTP 403 (Forbidden). Possible values: ["CONNECT_FAILURE", "HTTP_5XX",
     * "GATEWAY_ERROR", "RETRIABLE_4XX", "NOT_FOUND", "FORBIDDEN"]
     */
    retryConditions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The connection and HTTP timeout configuration for this origin.
     */
    timeout?: pulumi.Input<inputs.NetworkServicesEdgeCacheOriginTimeout>;
    timeouts?: pulumi.Input<inputs.NetworkServicesEdgeCacheOriginTimeouts>;
}
