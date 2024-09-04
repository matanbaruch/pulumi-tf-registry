// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SlbTemplateDnsRecursiveDnsResolution extends pulumi.CustomResource {
    /**
     * Get an existing SlbTemplateDnsRecursiveDnsResolution resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SlbTemplateDnsRecursiveDnsResolutionState, opts?: pulumi.CustomResourceOptions): SlbTemplateDnsRecursiveDnsResolution {
        return new SlbTemplateDnsRecursiveDnsResolution(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/slbTemplateDnsRecursiveDnsResolution:SlbTemplateDnsRecursiveDnsResolution';

    /**
     * Returns true if the given object is an instance of SlbTemplateDnsRecursiveDnsResolution.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SlbTemplateDnsRecursiveDnsResolution {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SlbTemplateDnsRecursiveDnsResolution.__pulumiType;
    }

    /**
     * retry when server REFUSED AX inserted EDNS(0) subnet, works only when insert-client-subnet is configured
     */
    public readonly csubnetRetry!: pulumi.Output<number | undefined>;
    /**
     * Default recursive mode, forward query to bound service-group if hostnames matched
     */
    public readonly defaultRecursive!: pulumi.Output<number | undefined>;
    /**
     * 'enabled': Enable DNSSEC validation; 'disabled': Disable DNSSEC validation;
     */
    public readonly dnssecValidation!: pulumi.Output<string | undefined>;
    /**
     * 'enabled': Enable fast NS selection; 'disabled': Disable fast NS selection;
     */
    public readonly fastNsSelection!: pulumi.Output<string | undefined>;
    /**
     * 'enabled': Force CNAME resolution always; 'disabled': Use answer record in CNAME response if it exists, else resolve;
     */
    public readonly forceCnameResolution!: pulumi.Output<string | undefined>;
    /**
     * Serve all records (authority and additional) when applicable
     */
    public readonly fullResponse!: pulumi.Output<number | undefined>;
    public readonly gatewayHealthCheck!: pulumi.Output<outputs.SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheck | undefined>;
    public readonly hostListCfgs!: pulumi.Output<outputs.SlbTemplateDnsRecursiveDnsResolutionHostListCfg[] | undefined>;
    /**
     * IPv4 Source NAT pool or pool group
     */
    public readonly ipv4NatPool!: pulumi.Output<string | undefined>;
    /**
     * IPv6 Source NAT pool or pool group
     */
    public readonly ipv6NatPool!: pulumi.Output<string | undefined>;
    public readonly lookupOrder!: pulumi.Output<outputs.SlbTemplateDnsRecursiveDnsResolutionLookupOrder | undefined>;
    /**
     * Total number of times to try DNS query to server before closing client connection, default 255
     */
    public readonly maxTrials!: pulumi.Output<number | undefined>;
    /**
     * Name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * 'disabled': Disable NS Cache Lookup; 'enabled': Enable NS Cache Lookup;
     */
    public readonly nsCacheLookup!: pulumi.Output<string | undefined>;
    /**
     * 'drop': Drop of the request during ongoing; 'respond-with-servfail': Respond with SERVFAIL of the request during
     * ongoing; 'start-new-resolution': Start new resolution of the request during ongoing;
     */
    public readonly requestForPendingResolution!: pulumi.Output<string | undefined>;
    /**
     * Number of DNS query retries at each server level before closing client connection, default 6
     */
    public readonly retriesPerLevel!: pulumi.Output<number | undefined>;
    /**
     * UDP DNS Retry Interval value 1-6, default is 5 sec (1-6, default is 5sec)
     */
    public readonly udpInitialInterval!: pulumi.Output<number | undefined>;
    /**
     * UDP DNS Retry Interval value 1-6, default is 1 sec (1-6 , default is 1 sec)
     */
    public readonly udpRetryInterval!: pulumi.Output<number | undefined>;
    /**
     * Use client side query id for recursive query
     */
    public readonly useClientQid!: pulumi.Output<number | undefined>;
    /**
     * 'disabled': Start Recursive Resolver if Server response doesnt have final answer; 'enabled': Forward Backend Server
     * response to client and dont start recursive resolver;
     */
    public readonly useServiceGroupResponse!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a SlbTemplateDnsRecursiveDnsResolution resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SlbTemplateDnsRecursiveDnsResolutionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SlbTemplateDnsRecursiveDnsResolutionArgs | SlbTemplateDnsRecursiveDnsResolutionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SlbTemplateDnsRecursiveDnsResolutionState | undefined;
            resourceInputs["csubnetRetry"] = state ? state.csubnetRetry : undefined;
            resourceInputs["defaultRecursive"] = state ? state.defaultRecursive : undefined;
            resourceInputs["dnssecValidation"] = state ? state.dnssecValidation : undefined;
            resourceInputs["fastNsSelection"] = state ? state.fastNsSelection : undefined;
            resourceInputs["forceCnameResolution"] = state ? state.forceCnameResolution : undefined;
            resourceInputs["fullResponse"] = state ? state.fullResponse : undefined;
            resourceInputs["gatewayHealthCheck"] = state ? state.gatewayHealthCheck : undefined;
            resourceInputs["hostListCfgs"] = state ? state.hostListCfgs : undefined;
            resourceInputs["ipv4NatPool"] = state ? state.ipv4NatPool : undefined;
            resourceInputs["ipv6NatPool"] = state ? state.ipv6NatPool : undefined;
            resourceInputs["lookupOrder"] = state ? state.lookupOrder : undefined;
            resourceInputs["maxTrials"] = state ? state.maxTrials : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nsCacheLookup"] = state ? state.nsCacheLookup : undefined;
            resourceInputs["requestForPendingResolution"] = state ? state.requestForPendingResolution : undefined;
            resourceInputs["retriesPerLevel"] = state ? state.retriesPerLevel : undefined;
            resourceInputs["udpInitialInterval"] = state ? state.udpInitialInterval : undefined;
            resourceInputs["udpRetryInterval"] = state ? state.udpRetryInterval : undefined;
            resourceInputs["useClientQid"] = state ? state.useClientQid : undefined;
            resourceInputs["useServiceGroupResponse"] = state ? state.useServiceGroupResponse : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as SlbTemplateDnsRecursiveDnsResolutionArgs | undefined;
            resourceInputs["csubnetRetry"] = args ? args.csubnetRetry : undefined;
            resourceInputs["defaultRecursive"] = args ? args.defaultRecursive : undefined;
            resourceInputs["dnssecValidation"] = args ? args.dnssecValidation : undefined;
            resourceInputs["fastNsSelection"] = args ? args.fastNsSelection : undefined;
            resourceInputs["forceCnameResolution"] = args ? args.forceCnameResolution : undefined;
            resourceInputs["fullResponse"] = args ? args.fullResponse : undefined;
            resourceInputs["gatewayHealthCheck"] = args ? args.gatewayHealthCheck : undefined;
            resourceInputs["hostListCfgs"] = args ? args.hostListCfgs : undefined;
            resourceInputs["ipv4NatPool"] = args ? args.ipv4NatPool : undefined;
            resourceInputs["ipv6NatPool"] = args ? args.ipv6NatPool : undefined;
            resourceInputs["lookupOrder"] = args ? args.lookupOrder : undefined;
            resourceInputs["maxTrials"] = args ? args.maxTrials : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nsCacheLookup"] = args ? args.nsCacheLookup : undefined;
            resourceInputs["requestForPendingResolution"] = args ? args.requestForPendingResolution : undefined;
            resourceInputs["retriesPerLevel"] = args ? args.retriesPerLevel : undefined;
            resourceInputs["udpInitialInterval"] = args ? args.udpInitialInterval : undefined;
            resourceInputs["udpRetryInterval"] = args ? args.udpRetryInterval : undefined;
            resourceInputs["useClientQid"] = args ? args.useClientQid : undefined;
            resourceInputs["useServiceGroupResponse"] = args ? args.useServiceGroupResponse : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SlbTemplateDnsRecursiveDnsResolution.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SlbTemplateDnsRecursiveDnsResolution resources.
 */
export interface SlbTemplateDnsRecursiveDnsResolutionState {
    /**
     * retry when server REFUSED AX inserted EDNS(0) subnet, works only when insert-client-subnet is configured
     */
    csubnetRetry?: pulumi.Input<number>;
    /**
     * Default recursive mode, forward query to bound service-group if hostnames matched
     */
    defaultRecursive?: pulumi.Input<number>;
    /**
     * 'enabled': Enable DNSSEC validation; 'disabled': Disable DNSSEC validation;
     */
    dnssecValidation?: pulumi.Input<string>;
    /**
     * 'enabled': Enable fast NS selection; 'disabled': Disable fast NS selection;
     */
    fastNsSelection?: pulumi.Input<string>;
    /**
     * 'enabled': Force CNAME resolution always; 'disabled': Use answer record in CNAME response if it exists, else resolve;
     */
    forceCnameResolution?: pulumi.Input<string>;
    /**
     * Serve all records (authority and additional) when applicable
     */
    fullResponse?: pulumi.Input<number>;
    gatewayHealthCheck?: pulumi.Input<inputs.SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheck>;
    hostListCfgs?: pulumi.Input<pulumi.Input<inputs.SlbTemplateDnsRecursiveDnsResolutionHostListCfg>[]>;
    /**
     * IPv4 Source NAT pool or pool group
     */
    ipv4NatPool?: pulumi.Input<string>;
    /**
     * IPv6 Source NAT pool or pool group
     */
    ipv6NatPool?: pulumi.Input<string>;
    lookupOrder?: pulumi.Input<inputs.SlbTemplateDnsRecursiveDnsResolutionLookupOrder>;
    /**
     * Total number of times to try DNS query to server before closing client connection, default 255
     */
    maxTrials?: pulumi.Input<number>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * 'disabled': Disable NS Cache Lookup; 'enabled': Enable NS Cache Lookup;
     */
    nsCacheLookup?: pulumi.Input<string>;
    /**
     * 'drop': Drop of the request during ongoing; 'respond-with-servfail': Respond with SERVFAIL of the request during
     * ongoing; 'start-new-resolution': Start new resolution of the request during ongoing;
     */
    requestForPendingResolution?: pulumi.Input<string>;
    /**
     * Number of DNS query retries at each server level before closing client connection, default 6
     */
    retriesPerLevel?: pulumi.Input<number>;
    /**
     * UDP DNS Retry Interval value 1-6, default is 5 sec (1-6, default is 5sec)
     */
    udpInitialInterval?: pulumi.Input<number>;
    /**
     * UDP DNS Retry Interval value 1-6, default is 1 sec (1-6 , default is 1 sec)
     */
    udpRetryInterval?: pulumi.Input<number>;
    /**
     * Use client side query id for recursive query
     */
    useClientQid?: pulumi.Input<number>;
    /**
     * 'disabled': Start Recursive Resolver if Server response doesnt have final answer; 'enabled': Forward Backend Server
     * response to client and dont start recursive resolver;
     */
    useServiceGroupResponse?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SlbTemplateDnsRecursiveDnsResolution resource.
 */
export interface SlbTemplateDnsRecursiveDnsResolutionArgs {
    /**
     * retry when server REFUSED AX inserted EDNS(0) subnet, works only when insert-client-subnet is configured
     */
    csubnetRetry?: pulumi.Input<number>;
    /**
     * Default recursive mode, forward query to bound service-group if hostnames matched
     */
    defaultRecursive?: pulumi.Input<number>;
    /**
     * 'enabled': Enable DNSSEC validation; 'disabled': Disable DNSSEC validation;
     */
    dnssecValidation?: pulumi.Input<string>;
    /**
     * 'enabled': Enable fast NS selection; 'disabled': Disable fast NS selection;
     */
    fastNsSelection?: pulumi.Input<string>;
    /**
     * 'enabled': Force CNAME resolution always; 'disabled': Use answer record in CNAME response if it exists, else resolve;
     */
    forceCnameResolution?: pulumi.Input<string>;
    /**
     * Serve all records (authority and additional) when applicable
     */
    fullResponse?: pulumi.Input<number>;
    gatewayHealthCheck?: pulumi.Input<inputs.SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheck>;
    hostListCfgs?: pulumi.Input<pulumi.Input<inputs.SlbTemplateDnsRecursiveDnsResolutionHostListCfg>[]>;
    /**
     * IPv4 Source NAT pool or pool group
     */
    ipv4NatPool?: pulumi.Input<string>;
    /**
     * IPv6 Source NAT pool or pool group
     */
    ipv6NatPool?: pulumi.Input<string>;
    lookupOrder?: pulumi.Input<inputs.SlbTemplateDnsRecursiveDnsResolutionLookupOrder>;
    /**
     * Total number of times to try DNS query to server before closing client connection, default 255
     */
    maxTrials?: pulumi.Input<number>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * 'disabled': Disable NS Cache Lookup; 'enabled': Enable NS Cache Lookup;
     */
    nsCacheLookup?: pulumi.Input<string>;
    /**
     * 'drop': Drop of the request during ongoing; 'respond-with-servfail': Respond with SERVFAIL of the request during
     * ongoing; 'start-new-resolution': Start new resolution of the request during ongoing;
     */
    requestForPendingResolution?: pulumi.Input<string>;
    /**
     * Number of DNS query retries at each server level before closing client connection, default 6
     */
    retriesPerLevel?: pulumi.Input<number>;
    /**
     * UDP DNS Retry Interval value 1-6, default is 5 sec (1-6, default is 5sec)
     */
    udpInitialInterval?: pulumi.Input<number>;
    /**
     * UDP DNS Retry Interval value 1-6, default is 1 sec (1-6 , default is 1 sec)
     */
    udpRetryInterval?: pulumi.Input<number>;
    /**
     * Use client side query id for recursive query
     */
    useClientQid?: pulumi.Input<number>;
    /**
     * 'disabled': Start Recursive Resolver if Server response doesnt have final answer; 'enabled': Forward Backend Server
     * response to client and dont start recursive resolver;
     */
    useServiceGroupResponse?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
