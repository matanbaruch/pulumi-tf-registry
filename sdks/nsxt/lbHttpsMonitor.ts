// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class LbHttpsMonitor extends pulumi.CustomResource {
    /**
     * Get an existing LbHttpsMonitor resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LbHttpsMonitorState, opts?: pulumi.CustomResourceOptions): LbHttpsMonitor {
        return new LbHttpsMonitor(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'nsxt:index/lbHttpsMonitor:LbHttpsMonitor';

    /**
     * Returns true if the given object is an instance of LbHttpsMonitor.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LbHttpsMonitor {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LbHttpsMonitor.__pulumiType;
    }

    /**
     * Verification depth in the server certificate chain
     */
    public readonly certificateChainDepth!: pulumi.Output<number | undefined>;
    /**
     * Supported SSL cipher list
     */
    public readonly ciphers!: pulumi.Output<string[]>;
    /**
     * client certificate can be specified to support client authentication
     */
    public readonly clientCertificateId!: pulumi.Output<string | undefined>;
    /**
     * Description of this resource
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The display name of this resource. Defaults to ID if not set
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * Number of consecutive checks that must fail before marking it down
     */
    public readonly fallCount!: pulumi.Output<number | undefined>;
    /**
     * The frequency at which the system issues the monitor check (in seconds)
     */
    public readonly interval!: pulumi.Output<number | undefined>;
    /**
     * This flag is set to true when all the ciphers and protocols are secure. It is set to false when one of the ciphers or
     * protocols is insecure
     */
    public /*out*/ readonly isSecure!: pulumi.Output<boolean>;
    /**
     * If the monitor port is specified, it would override pool member port setting for healthcheck. A port range is not
     * supported
     */
    public readonly monitorPort!: pulumi.Output<string | undefined>;
    /**
     * SSL versions TLS1.1 and TLS1.2 are supported and enabled by default. SSLv2, SSLv3, and TLS1.0 are supported, but
     * disabled by default
     */
    public readonly protocols!: pulumi.Output<string[]>;
    /**
     * String to send as HTTP health check request body. Valid only for certain HTTP methods like POST
     */
    public readonly requestBody!: pulumi.Output<string | undefined>;
    /**
     * Array of HTTP request headers
     */
    public readonly requestHeaders!: pulumi.Output<outputs.LbHttpsMonitorRequestHeader[] | undefined>;
    /**
     * Health check method for HTTP monitor type
     */
    public readonly requestMethod!: pulumi.Output<string | undefined>;
    /**
     * URL used for HTTP monitor
     */
    public readonly requestUrl!: pulumi.Output<string | undefined>;
    /**
     * HTTP request version
     */
    public readonly requestVersion!: pulumi.Output<string | undefined>;
    /**
     * If HTTP specified, healthcheck HTTP response body is matched against the specified string (regular expressions not
     * supported), and succeeds only if there is a match
     */
    public readonly responseBody!: pulumi.Output<string | undefined>;
    /**
     * The HTTP response status code should be a valid HTTP status code
     */
    public readonly responseStatusCodes!: pulumi.Output<number[]>;
    /**
     * The _revision property describes the current revision of the resource. To prevent clients from overwriting each other's
     * changes, PUT operations must include the current _revision of the resource, which clients should obtain by issuing a GET
     * operation. If the _revision provided in a PUT request is missing or stale, the operation will be rejected
     */
    public /*out*/ readonly revision!: pulumi.Output<number>;
    /**
     * Number of consecutive checks that must pass before marking it up
     */
    public readonly riseCount!: pulumi.Output<number | undefined>;
    /**
     * Server authentication mode
     */
    public readonly serverAuth!: pulumi.Output<string | undefined>;
    /**
     * If server auth type is REQUIRED, server certificate must be signed by one of the CAs
     */
    public readonly serverAuthCaIds!: pulumi.Output<string[] | undefined>;
    /**
     * Certificate Revocation List (CRL) to disallow compromised server certificates
     */
    public readonly serverAuthCrlIds!: pulumi.Output<string[] | undefined>;
    /**
     * Set of opaque identifiers meaningful to the user
     */
    public readonly tags!: pulumi.Output<outputs.LbHttpsMonitorTag[] | undefined>;
    /**
     * Number of seconds the target has to respond to the monitor request
     */
    public readonly timeout!: pulumi.Output<number | undefined>;

    /**
     * Create a LbHttpsMonitor resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: LbHttpsMonitorArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LbHttpsMonitorArgs | LbHttpsMonitorState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LbHttpsMonitorState | undefined;
            resourceInputs["certificateChainDepth"] = state ? state.certificateChainDepth : undefined;
            resourceInputs["ciphers"] = state ? state.ciphers : undefined;
            resourceInputs["clientCertificateId"] = state ? state.clientCertificateId : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["fallCount"] = state ? state.fallCount : undefined;
            resourceInputs["interval"] = state ? state.interval : undefined;
            resourceInputs["isSecure"] = state ? state.isSecure : undefined;
            resourceInputs["monitorPort"] = state ? state.monitorPort : undefined;
            resourceInputs["protocols"] = state ? state.protocols : undefined;
            resourceInputs["requestBody"] = state ? state.requestBody : undefined;
            resourceInputs["requestHeaders"] = state ? state.requestHeaders : undefined;
            resourceInputs["requestMethod"] = state ? state.requestMethod : undefined;
            resourceInputs["requestUrl"] = state ? state.requestUrl : undefined;
            resourceInputs["requestVersion"] = state ? state.requestVersion : undefined;
            resourceInputs["responseBody"] = state ? state.responseBody : undefined;
            resourceInputs["responseStatusCodes"] = state ? state.responseStatusCodes : undefined;
            resourceInputs["revision"] = state ? state.revision : undefined;
            resourceInputs["riseCount"] = state ? state.riseCount : undefined;
            resourceInputs["serverAuth"] = state ? state.serverAuth : undefined;
            resourceInputs["serverAuthCaIds"] = state ? state.serverAuthCaIds : undefined;
            resourceInputs["serverAuthCrlIds"] = state ? state.serverAuthCrlIds : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeout"] = state ? state.timeout : undefined;
        } else {
            const args = argsOrState as LbHttpsMonitorArgs | undefined;
            resourceInputs["certificateChainDepth"] = args ? args.certificateChainDepth : undefined;
            resourceInputs["ciphers"] = args ? args.ciphers : undefined;
            resourceInputs["clientCertificateId"] = args ? args.clientCertificateId : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["fallCount"] = args ? args.fallCount : undefined;
            resourceInputs["interval"] = args ? args.interval : undefined;
            resourceInputs["monitorPort"] = args ? args.monitorPort : undefined;
            resourceInputs["protocols"] = args ? args.protocols : undefined;
            resourceInputs["requestBody"] = args ? args.requestBody : undefined;
            resourceInputs["requestHeaders"] = args ? args.requestHeaders : undefined;
            resourceInputs["requestMethod"] = args ? args.requestMethod : undefined;
            resourceInputs["requestUrl"] = args ? args.requestUrl : undefined;
            resourceInputs["requestVersion"] = args ? args.requestVersion : undefined;
            resourceInputs["responseBody"] = args ? args.responseBody : undefined;
            resourceInputs["responseStatusCodes"] = args ? args.responseStatusCodes : undefined;
            resourceInputs["riseCount"] = args ? args.riseCount : undefined;
            resourceInputs["serverAuth"] = args ? args.serverAuth : undefined;
            resourceInputs["serverAuthCaIds"] = args ? args.serverAuthCaIds : undefined;
            resourceInputs["serverAuthCrlIds"] = args ? args.serverAuthCrlIds : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeout"] = args ? args.timeout : undefined;
            resourceInputs["isSecure"] = undefined /*out*/;
            resourceInputs["revision"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LbHttpsMonitor.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LbHttpsMonitor resources.
 */
export interface LbHttpsMonitorState {
    /**
     * Verification depth in the server certificate chain
     */
    certificateChainDepth?: pulumi.Input<number>;
    /**
     * Supported SSL cipher list
     */
    ciphers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * client certificate can be specified to support client authentication
     */
    clientCertificateId?: pulumi.Input<string>;
    /**
     * Description of this resource
     */
    description?: pulumi.Input<string>;
    /**
     * The display name of this resource. Defaults to ID if not set
     */
    displayName?: pulumi.Input<string>;
    /**
     * Number of consecutive checks that must fail before marking it down
     */
    fallCount?: pulumi.Input<number>;
    /**
     * The frequency at which the system issues the monitor check (in seconds)
     */
    interval?: pulumi.Input<number>;
    /**
     * This flag is set to true when all the ciphers and protocols are secure. It is set to false when one of the ciphers or
     * protocols is insecure
     */
    isSecure?: pulumi.Input<boolean>;
    /**
     * If the monitor port is specified, it would override pool member port setting for healthcheck. A port range is not
     * supported
     */
    monitorPort?: pulumi.Input<string>;
    /**
     * SSL versions TLS1.1 and TLS1.2 are supported and enabled by default. SSLv2, SSLv3, and TLS1.0 are supported, but
     * disabled by default
     */
    protocols?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * String to send as HTTP health check request body. Valid only for certain HTTP methods like POST
     */
    requestBody?: pulumi.Input<string>;
    /**
     * Array of HTTP request headers
     */
    requestHeaders?: pulumi.Input<pulumi.Input<inputs.LbHttpsMonitorRequestHeader>[]>;
    /**
     * Health check method for HTTP monitor type
     */
    requestMethod?: pulumi.Input<string>;
    /**
     * URL used for HTTP monitor
     */
    requestUrl?: pulumi.Input<string>;
    /**
     * HTTP request version
     */
    requestVersion?: pulumi.Input<string>;
    /**
     * If HTTP specified, healthcheck HTTP response body is matched against the specified string (regular expressions not
     * supported), and succeeds only if there is a match
     */
    responseBody?: pulumi.Input<string>;
    /**
     * The HTTP response status code should be a valid HTTP status code
     */
    responseStatusCodes?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * The _revision property describes the current revision of the resource. To prevent clients from overwriting each other's
     * changes, PUT operations must include the current _revision of the resource, which clients should obtain by issuing a GET
     * operation. If the _revision provided in a PUT request is missing or stale, the operation will be rejected
     */
    revision?: pulumi.Input<number>;
    /**
     * Number of consecutive checks that must pass before marking it up
     */
    riseCount?: pulumi.Input<number>;
    /**
     * Server authentication mode
     */
    serverAuth?: pulumi.Input<string>;
    /**
     * If server auth type is REQUIRED, server certificate must be signed by one of the CAs
     */
    serverAuthCaIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Certificate Revocation List (CRL) to disallow compromised server certificates
     */
    serverAuthCrlIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Set of opaque identifiers meaningful to the user
     */
    tags?: pulumi.Input<pulumi.Input<inputs.LbHttpsMonitorTag>[]>;
    /**
     * Number of seconds the target has to respond to the monitor request
     */
    timeout?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a LbHttpsMonitor resource.
 */
export interface LbHttpsMonitorArgs {
    /**
     * Verification depth in the server certificate chain
     */
    certificateChainDepth?: pulumi.Input<number>;
    /**
     * Supported SSL cipher list
     */
    ciphers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * client certificate can be specified to support client authentication
     */
    clientCertificateId?: pulumi.Input<string>;
    /**
     * Description of this resource
     */
    description?: pulumi.Input<string>;
    /**
     * The display name of this resource. Defaults to ID if not set
     */
    displayName?: pulumi.Input<string>;
    /**
     * Number of consecutive checks that must fail before marking it down
     */
    fallCount?: pulumi.Input<number>;
    /**
     * The frequency at which the system issues the monitor check (in seconds)
     */
    interval?: pulumi.Input<number>;
    /**
     * If the monitor port is specified, it would override pool member port setting for healthcheck. A port range is not
     * supported
     */
    monitorPort?: pulumi.Input<string>;
    /**
     * SSL versions TLS1.1 and TLS1.2 are supported and enabled by default. SSLv2, SSLv3, and TLS1.0 are supported, but
     * disabled by default
     */
    protocols?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * String to send as HTTP health check request body. Valid only for certain HTTP methods like POST
     */
    requestBody?: pulumi.Input<string>;
    /**
     * Array of HTTP request headers
     */
    requestHeaders?: pulumi.Input<pulumi.Input<inputs.LbHttpsMonitorRequestHeader>[]>;
    /**
     * Health check method for HTTP monitor type
     */
    requestMethod?: pulumi.Input<string>;
    /**
     * URL used for HTTP monitor
     */
    requestUrl?: pulumi.Input<string>;
    /**
     * HTTP request version
     */
    requestVersion?: pulumi.Input<string>;
    /**
     * If HTTP specified, healthcheck HTTP response body is matched against the specified string (regular expressions not
     * supported), and succeeds only if there is a match
     */
    responseBody?: pulumi.Input<string>;
    /**
     * The HTTP response status code should be a valid HTTP status code
     */
    responseStatusCodes?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Number of consecutive checks that must pass before marking it up
     */
    riseCount?: pulumi.Input<number>;
    /**
     * Server authentication mode
     */
    serverAuth?: pulumi.Input<string>;
    /**
     * If server auth type is REQUIRED, server certificate must be signed by one of the CAs
     */
    serverAuthCaIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Certificate Revocation List (CRL) to disallow compromised server certificates
     */
    serverAuthCrlIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Set of opaque identifiers meaningful to the user
     */
    tags?: pulumi.Input<pulumi.Input<inputs.LbHttpsMonitorTag>[]>;
    /**
     * Number of seconds the target has to respond to the monitor request
     */
    timeout?: pulumi.Input<number>;
}
