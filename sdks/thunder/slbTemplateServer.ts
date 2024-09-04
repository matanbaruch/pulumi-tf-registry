// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SlbTemplateServer extends pulumi.CustomResource {
    /**
     * Get an existing SlbTemplateServer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SlbTemplateServerState, opts?: pulumi.CustomResourceOptions): SlbTemplateServer {
        return new SlbTemplateServer(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/slbTemplateServer:SlbTemplateServer';

    /**
     * Returns true if the given object is an instance of SlbTemplateServer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SlbTemplateServer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SlbTemplateServer.__pulumiType;
    }

    /**
     * Slow start connection limit add by a number every interval (Add by this number every interval)
     */
    public readonly add!: pulumi.Output<number | undefined>;
    /**
     * Configure bandwidth rate limit on real server (Bandwidth rate limit in Kbps)
     */
    public readonly bwRateLimit!: pulumi.Output<number | undefined>;
    /**
     * 'to-server-only': Only account for traffic sent to server; 'from-server-only': Only account for traffic received from
     * server; 'all': Account for all traffic sent to and received from server;
     */
    public readonly bwRateLimitAcct!: pulumi.Output<string | undefined>;
    /**
     * Duration in seconds the observed rate needs to honor
     */
    public readonly bwRateLimitDuration!: pulumi.Output<number | undefined>;
    /**
     * Do not log bandwidth rate limit related state transitions
     */
    public readonly bwRateLimitNoLogging!: pulumi.Output<number | undefined>;
    /**
     * Resume server selection after bandwidth drops below this threshold (in Kbps) (Bandwidth rate limit resume threshold (in
     * Kbps))
     */
    public readonly bwRateLimitResume!: pulumi.Output<number | undefined>;
    /**
     * Connection limit
     */
    public readonly connLimit!: pulumi.Output<number | undefined>;
    /**
     * Do not log connection over limit event
     */
    public readonly connLimitNoLogging!: pulumi.Output<number | undefined>;
    /**
     * Connection rate limit
     */
    public readonly connRateLimit!: pulumi.Output<number | undefined>;
    /**
     * Do not log connection over limit event
     */
    public readonly connRateLimitNoLogging!: pulumi.Output<number | undefined>;
    /**
     * The interval to retry when DNS failed to query (DNS failure interval (in second, default is 30))
     */
    public readonly dnsFailInterval!: pulumi.Output<number | undefined>;
    /**
     * The interval to query DNS server for the hostname (DNS query interval (in minute, default is 10))
     */
    public readonly dnsQueryInterval!: pulumi.Output<number | undefined>;
    /**
     * Prefix of dynamic server (Prefix of dynamic server (default is "DRS"))
     */
    public readonly dynamicServerPrefix!: pulumi.Output<string | undefined>;
    /**
     * Slow start connection limit increment interval (default 10)
     */
    public readonly every!: pulumi.Output<number | undefined>;
    /**
     * Enable extended statistics on real server
     */
    public readonly extendedStats!: pulumi.Output<number | undefined>;
    /**
     * Health Check Monitor (Health monitor name)
     */
    public readonly healthCheck!: pulumi.Output<string | undefined>;
    /**
     * Disable configured health check configuration
     */
    public readonly healthCheckDisable!: pulumi.Output<number | undefined>;
    /**
     * Initial slow start connection limit (default 128)
     */
    public readonly initialSlowStart!: pulumi.Output<number | undefined>;
    /**
     * Enable real-time logging for server selection failure event
     */
    public readonly logSelectionFailure!: pulumi.Output<number | undefined>;
    /**
     * Maximum dynamic server number (Maximum dynamic server number (default is 255))
     */
    public readonly maxDynamicServer!: pulumi.Output<number | undefined>;
    /**
     * Minimum TTL to DNS query interval ratio (Minimum TTL ratio (default is 2))
     */
    public readonly minTtlRatio!: pulumi.Output<number | undefined>;
    /**
     * Server template name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * '100ms': Use 100 ms as sampling interval; 'second': Use 1 second as sampling interval;
     */
    public readonly rateInterval!: pulumi.Output<string | undefined>;
    /**
     * Resume accepting new connection after connection number drops below threshold (Connection resume threshold)
     */
    public readonly resume!: pulumi.Output<number | undefined>;
    /**
     * Slowly ramp up the connection number after server is up
     */
    public readonly slowStart!: pulumi.Output<number | undefined>;
    /**
     * Servers under the template are spoofing cache
     */
    public readonly spoofingCache!: pulumi.Output<number | undefined>;
    /**
     * 'stats-data-enable': Enable statistical data collection for real server; 'stats-data-disable': Disable statistical data
     * collection for real server;
     */
    public readonly statsDataAction!: pulumi.Output<string | undefined>;
    /**
     * Slow start ends when slow start connection limit reaches a number (default 4096) (Slow start ends when connection limit
     * reaches this number)
     */
    public readonly till!: pulumi.Output<number | undefined>;
    /**
     * Slow start connection limit multiply by a number every interval (default 2) (Multiply by this number every interval)
     */
    public readonly times!: pulumi.Output<number | undefined>;
    /**
     * Customized tag
     */
    public readonly userTag!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;
    /**
     * Weight for the Real Servers (Connection Weight (default is 1))
     */
    public readonly weight!: pulumi.Output<number | undefined>;

    /**
     * Create a SlbTemplateServer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SlbTemplateServerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SlbTemplateServerArgs | SlbTemplateServerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SlbTemplateServerState | undefined;
            resourceInputs["add"] = state ? state.add : undefined;
            resourceInputs["bwRateLimit"] = state ? state.bwRateLimit : undefined;
            resourceInputs["bwRateLimitAcct"] = state ? state.bwRateLimitAcct : undefined;
            resourceInputs["bwRateLimitDuration"] = state ? state.bwRateLimitDuration : undefined;
            resourceInputs["bwRateLimitNoLogging"] = state ? state.bwRateLimitNoLogging : undefined;
            resourceInputs["bwRateLimitResume"] = state ? state.bwRateLimitResume : undefined;
            resourceInputs["connLimit"] = state ? state.connLimit : undefined;
            resourceInputs["connLimitNoLogging"] = state ? state.connLimitNoLogging : undefined;
            resourceInputs["connRateLimit"] = state ? state.connRateLimit : undefined;
            resourceInputs["connRateLimitNoLogging"] = state ? state.connRateLimitNoLogging : undefined;
            resourceInputs["dnsFailInterval"] = state ? state.dnsFailInterval : undefined;
            resourceInputs["dnsQueryInterval"] = state ? state.dnsQueryInterval : undefined;
            resourceInputs["dynamicServerPrefix"] = state ? state.dynamicServerPrefix : undefined;
            resourceInputs["every"] = state ? state.every : undefined;
            resourceInputs["extendedStats"] = state ? state.extendedStats : undefined;
            resourceInputs["healthCheck"] = state ? state.healthCheck : undefined;
            resourceInputs["healthCheckDisable"] = state ? state.healthCheckDisable : undefined;
            resourceInputs["initialSlowStart"] = state ? state.initialSlowStart : undefined;
            resourceInputs["logSelectionFailure"] = state ? state.logSelectionFailure : undefined;
            resourceInputs["maxDynamicServer"] = state ? state.maxDynamicServer : undefined;
            resourceInputs["minTtlRatio"] = state ? state.minTtlRatio : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["rateInterval"] = state ? state.rateInterval : undefined;
            resourceInputs["resume"] = state ? state.resume : undefined;
            resourceInputs["slowStart"] = state ? state.slowStart : undefined;
            resourceInputs["spoofingCache"] = state ? state.spoofingCache : undefined;
            resourceInputs["statsDataAction"] = state ? state.statsDataAction : undefined;
            resourceInputs["till"] = state ? state.till : undefined;
            resourceInputs["times"] = state ? state.times : undefined;
            resourceInputs["userTag"] = state ? state.userTag : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
            resourceInputs["weight"] = state ? state.weight : undefined;
        } else {
            const args = argsOrState as SlbTemplateServerArgs | undefined;
            resourceInputs["add"] = args ? args.add : undefined;
            resourceInputs["bwRateLimit"] = args ? args.bwRateLimit : undefined;
            resourceInputs["bwRateLimitAcct"] = args ? args.bwRateLimitAcct : undefined;
            resourceInputs["bwRateLimitDuration"] = args ? args.bwRateLimitDuration : undefined;
            resourceInputs["bwRateLimitNoLogging"] = args ? args.bwRateLimitNoLogging : undefined;
            resourceInputs["bwRateLimitResume"] = args ? args.bwRateLimitResume : undefined;
            resourceInputs["connLimit"] = args ? args.connLimit : undefined;
            resourceInputs["connLimitNoLogging"] = args ? args.connLimitNoLogging : undefined;
            resourceInputs["connRateLimit"] = args ? args.connRateLimit : undefined;
            resourceInputs["connRateLimitNoLogging"] = args ? args.connRateLimitNoLogging : undefined;
            resourceInputs["dnsFailInterval"] = args ? args.dnsFailInterval : undefined;
            resourceInputs["dnsQueryInterval"] = args ? args.dnsQueryInterval : undefined;
            resourceInputs["dynamicServerPrefix"] = args ? args.dynamicServerPrefix : undefined;
            resourceInputs["every"] = args ? args.every : undefined;
            resourceInputs["extendedStats"] = args ? args.extendedStats : undefined;
            resourceInputs["healthCheck"] = args ? args.healthCheck : undefined;
            resourceInputs["healthCheckDisable"] = args ? args.healthCheckDisable : undefined;
            resourceInputs["initialSlowStart"] = args ? args.initialSlowStart : undefined;
            resourceInputs["logSelectionFailure"] = args ? args.logSelectionFailure : undefined;
            resourceInputs["maxDynamicServer"] = args ? args.maxDynamicServer : undefined;
            resourceInputs["minTtlRatio"] = args ? args.minTtlRatio : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["rateInterval"] = args ? args.rateInterval : undefined;
            resourceInputs["resume"] = args ? args.resume : undefined;
            resourceInputs["slowStart"] = args ? args.slowStart : undefined;
            resourceInputs["spoofingCache"] = args ? args.spoofingCache : undefined;
            resourceInputs["statsDataAction"] = args ? args.statsDataAction : undefined;
            resourceInputs["till"] = args ? args.till : undefined;
            resourceInputs["times"] = args ? args.times : undefined;
            resourceInputs["userTag"] = args ? args.userTag : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
            resourceInputs["weight"] = args ? args.weight : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SlbTemplateServer.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SlbTemplateServer resources.
 */
export interface SlbTemplateServerState {
    /**
     * Slow start connection limit add by a number every interval (Add by this number every interval)
     */
    add?: pulumi.Input<number>;
    /**
     * Configure bandwidth rate limit on real server (Bandwidth rate limit in Kbps)
     */
    bwRateLimit?: pulumi.Input<number>;
    /**
     * 'to-server-only': Only account for traffic sent to server; 'from-server-only': Only account for traffic received from
     * server; 'all': Account for all traffic sent to and received from server;
     */
    bwRateLimitAcct?: pulumi.Input<string>;
    /**
     * Duration in seconds the observed rate needs to honor
     */
    bwRateLimitDuration?: pulumi.Input<number>;
    /**
     * Do not log bandwidth rate limit related state transitions
     */
    bwRateLimitNoLogging?: pulumi.Input<number>;
    /**
     * Resume server selection after bandwidth drops below this threshold (in Kbps) (Bandwidth rate limit resume threshold (in
     * Kbps))
     */
    bwRateLimitResume?: pulumi.Input<number>;
    /**
     * Connection limit
     */
    connLimit?: pulumi.Input<number>;
    /**
     * Do not log connection over limit event
     */
    connLimitNoLogging?: pulumi.Input<number>;
    /**
     * Connection rate limit
     */
    connRateLimit?: pulumi.Input<number>;
    /**
     * Do not log connection over limit event
     */
    connRateLimitNoLogging?: pulumi.Input<number>;
    /**
     * The interval to retry when DNS failed to query (DNS failure interval (in second, default is 30))
     */
    dnsFailInterval?: pulumi.Input<number>;
    /**
     * The interval to query DNS server for the hostname (DNS query interval (in minute, default is 10))
     */
    dnsQueryInterval?: pulumi.Input<number>;
    /**
     * Prefix of dynamic server (Prefix of dynamic server (default is "DRS"))
     */
    dynamicServerPrefix?: pulumi.Input<string>;
    /**
     * Slow start connection limit increment interval (default 10)
     */
    every?: pulumi.Input<number>;
    /**
     * Enable extended statistics on real server
     */
    extendedStats?: pulumi.Input<number>;
    /**
     * Health Check Monitor (Health monitor name)
     */
    healthCheck?: pulumi.Input<string>;
    /**
     * Disable configured health check configuration
     */
    healthCheckDisable?: pulumi.Input<number>;
    /**
     * Initial slow start connection limit (default 128)
     */
    initialSlowStart?: pulumi.Input<number>;
    /**
     * Enable real-time logging for server selection failure event
     */
    logSelectionFailure?: pulumi.Input<number>;
    /**
     * Maximum dynamic server number (Maximum dynamic server number (default is 255))
     */
    maxDynamicServer?: pulumi.Input<number>;
    /**
     * Minimum TTL to DNS query interval ratio (Minimum TTL ratio (default is 2))
     */
    minTtlRatio?: pulumi.Input<number>;
    /**
     * Server template name
     */
    name?: pulumi.Input<string>;
    /**
     * '100ms': Use 100 ms as sampling interval; 'second': Use 1 second as sampling interval;
     */
    rateInterval?: pulumi.Input<string>;
    /**
     * Resume accepting new connection after connection number drops below threshold (Connection resume threshold)
     */
    resume?: pulumi.Input<number>;
    /**
     * Slowly ramp up the connection number after server is up
     */
    slowStart?: pulumi.Input<number>;
    /**
     * Servers under the template are spoofing cache
     */
    spoofingCache?: pulumi.Input<number>;
    /**
     * 'stats-data-enable': Enable statistical data collection for real server; 'stats-data-disable': Disable statistical data
     * collection for real server;
     */
    statsDataAction?: pulumi.Input<string>;
    /**
     * Slow start ends when slow start connection limit reaches a number (default 4096) (Slow start ends when connection limit
     * reaches this number)
     */
    till?: pulumi.Input<number>;
    /**
     * Slow start connection limit multiply by a number every interval (default 2) (Multiply by this number every interval)
     */
    times?: pulumi.Input<number>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    /**
     * Weight for the Real Servers (Connection Weight (default is 1))
     */
    weight?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a SlbTemplateServer resource.
 */
export interface SlbTemplateServerArgs {
    /**
     * Slow start connection limit add by a number every interval (Add by this number every interval)
     */
    add?: pulumi.Input<number>;
    /**
     * Configure bandwidth rate limit on real server (Bandwidth rate limit in Kbps)
     */
    bwRateLimit?: pulumi.Input<number>;
    /**
     * 'to-server-only': Only account for traffic sent to server; 'from-server-only': Only account for traffic received from
     * server; 'all': Account for all traffic sent to and received from server;
     */
    bwRateLimitAcct?: pulumi.Input<string>;
    /**
     * Duration in seconds the observed rate needs to honor
     */
    bwRateLimitDuration?: pulumi.Input<number>;
    /**
     * Do not log bandwidth rate limit related state transitions
     */
    bwRateLimitNoLogging?: pulumi.Input<number>;
    /**
     * Resume server selection after bandwidth drops below this threshold (in Kbps) (Bandwidth rate limit resume threshold (in
     * Kbps))
     */
    bwRateLimitResume?: pulumi.Input<number>;
    /**
     * Connection limit
     */
    connLimit?: pulumi.Input<number>;
    /**
     * Do not log connection over limit event
     */
    connLimitNoLogging?: pulumi.Input<number>;
    /**
     * Connection rate limit
     */
    connRateLimit?: pulumi.Input<number>;
    /**
     * Do not log connection over limit event
     */
    connRateLimitNoLogging?: pulumi.Input<number>;
    /**
     * The interval to retry when DNS failed to query (DNS failure interval (in second, default is 30))
     */
    dnsFailInterval?: pulumi.Input<number>;
    /**
     * The interval to query DNS server for the hostname (DNS query interval (in minute, default is 10))
     */
    dnsQueryInterval?: pulumi.Input<number>;
    /**
     * Prefix of dynamic server (Prefix of dynamic server (default is "DRS"))
     */
    dynamicServerPrefix?: pulumi.Input<string>;
    /**
     * Slow start connection limit increment interval (default 10)
     */
    every?: pulumi.Input<number>;
    /**
     * Enable extended statistics on real server
     */
    extendedStats?: pulumi.Input<number>;
    /**
     * Health Check Monitor (Health monitor name)
     */
    healthCheck?: pulumi.Input<string>;
    /**
     * Disable configured health check configuration
     */
    healthCheckDisable?: pulumi.Input<number>;
    /**
     * Initial slow start connection limit (default 128)
     */
    initialSlowStart?: pulumi.Input<number>;
    /**
     * Enable real-time logging for server selection failure event
     */
    logSelectionFailure?: pulumi.Input<number>;
    /**
     * Maximum dynamic server number (Maximum dynamic server number (default is 255))
     */
    maxDynamicServer?: pulumi.Input<number>;
    /**
     * Minimum TTL to DNS query interval ratio (Minimum TTL ratio (default is 2))
     */
    minTtlRatio?: pulumi.Input<number>;
    /**
     * Server template name
     */
    name?: pulumi.Input<string>;
    /**
     * '100ms': Use 100 ms as sampling interval; 'second': Use 1 second as sampling interval;
     */
    rateInterval?: pulumi.Input<string>;
    /**
     * Resume accepting new connection after connection number drops below threshold (Connection resume threshold)
     */
    resume?: pulumi.Input<number>;
    /**
     * Slowly ramp up the connection number after server is up
     */
    slowStart?: pulumi.Input<number>;
    /**
     * Servers under the template are spoofing cache
     */
    spoofingCache?: pulumi.Input<number>;
    /**
     * 'stats-data-enable': Enable statistical data collection for real server; 'stats-data-disable': Disable statistical data
     * collection for real server;
     */
    statsDataAction?: pulumi.Input<string>;
    /**
     * Slow start ends when slow start connection limit reaches a number (default 4096) (Slow start ends when connection limit
     * reaches this number)
     */
    till?: pulumi.Input<number>;
    /**
     * Slow start connection limit multiply by a number every interval (default 2) (Multiply by this number every interval)
     */
    times?: pulumi.Input<number>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
    /**
     * Weight for the Real Servers (Connection Weight (default is 1))
     */
    weight?: pulumi.Input<number>;
}
