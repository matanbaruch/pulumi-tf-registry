// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheck extends pulumi.CustomResource {
    /**
     * Get an existing SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheck resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckState, opts?: pulumi.CustomResourceOptions): SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheck {
        return new SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheck(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/slbTemplateDnsRecursiveDnsResolutionGatewayHealthCheck:SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheck';

    /**
     * Returns true if the given object is an instance of SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheck.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheck {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheck.__pulumiType;
    }

    /**
     * 'disabled': Disable NS Cache Lookup; 'enabled': Enable NS Cache Lookup;
     */
    public readonly gwhcNsCacheLookup!: pulumi.Output<string | undefined>;
    /**
     * Specify the health check interval, default is 10 sec (Interval value, in seconds (default 10))
     */
    public readonly interval!: pulumi.Output<number | undefined>;
    /**
     * Name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Other record type value
     */
    public readonly numQueryType!: pulumi.Output<number | undefined>;
    /**
     * Specify the query name used in probe queries, default "a10networks.com"
     */
    public readonly queryName!: pulumi.Output<string | undefined>;
    /**
     * Maximum number of DNS query retries at each server level before health check fails, default 6 (Retry count (default 6))
     */
    public readonly retry!: pulumi.Output<number | undefined>;
    /**
     * Specify number of times that health check consecutively fails before declaring gateway DOWN, default 1 (retry-multi
     * count (default 1))
     */
    public readonly retryMulti!: pulumi.Output<number | undefined>;
    /**
     * 'A': Address record; 'AAAA': IPv6 Address record; 'CNAME': Canonical name record; 'MX': Mail exchange record; 'NS': Name
     * server record; 'SRV': Service locator; 'PTR': PTR resource record; 'SOA': Start of authority record; 'TXT': Text record;
     */
    public readonly strQueryType!: pulumi.Output<string | undefined>;
    /**
     * Specify the health check timeout before retrying or finish, default is 5 sec (Timeout value, in seconds (default 5))
     */
    public readonly timeout!: pulumi.Output<number | undefined>;
    /**
     * Specify number of times that health check consecutively passes before declaring gateway UP, default 1 (up-retry count
     * (default 1))
     */
    public readonly upRetry!: pulumi.Output<number | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheck resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckArgs | SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckState | undefined;
            resourceInputs["gwhcNsCacheLookup"] = state ? state.gwhcNsCacheLookup : undefined;
            resourceInputs["interval"] = state ? state.interval : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["numQueryType"] = state ? state.numQueryType : undefined;
            resourceInputs["queryName"] = state ? state.queryName : undefined;
            resourceInputs["retry"] = state ? state.retry : undefined;
            resourceInputs["retryMulti"] = state ? state.retryMulti : undefined;
            resourceInputs["strQueryType"] = state ? state.strQueryType : undefined;
            resourceInputs["timeout"] = state ? state.timeout : undefined;
            resourceInputs["upRetry"] = state ? state.upRetry : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckArgs | undefined;
            resourceInputs["gwhcNsCacheLookup"] = args ? args.gwhcNsCacheLookup : undefined;
            resourceInputs["interval"] = args ? args.interval : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["numQueryType"] = args ? args.numQueryType : undefined;
            resourceInputs["queryName"] = args ? args.queryName : undefined;
            resourceInputs["retry"] = args ? args.retry : undefined;
            resourceInputs["retryMulti"] = args ? args.retryMulti : undefined;
            resourceInputs["strQueryType"] = args ? args.strQueryType : undefined;
            resourceInputs["timeout"] = args ? args.timeout : undefined;
            resourceInputs["upRetry"] = args ? args.upRetry : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheck.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheck resources.
 */
export interface SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckState {
    /**
     * 'disabled': Disable NS Cache Lookup; 'enabled': Enable NS Cache Lookup;
     */
    gwhcNsCacheLookup?: pulumi.Input<string>;
    /**
     * Specify the health check interval, default is 10 sec (Interval value, in seconds (default 10))
     */
    interval?: pulumi.Input<number>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * Other record type value
     */
    numQueryType?: pulumi.Input<number>;
    /**
     * Specify the query name used in probe queries, default "a10networks.com"
     */
    queryName?: pulumi.Input<string>;
    /**
     * Maximum number of DNS query retries at each server level before health check fails, default 6 (Retry count (default 6))
     */
    retry?: pulumi.Input<number>;
    /**
     * Specify number of times that health check consecutively fails before declaring gateway DOWN, default 1 (retry-multi
     * count (default 1))
     */
    retryMulti?: pulumi.Input<number>;
    /**
     * 'A': Address record; 'AAAA': IPv6 Address record; 'CNAME': Canonical name record; 'MX': Mail exchange record; 'NS': Name
     * server record; 'SRV': Service locator; 'PTR': PTR resource record; 'SOA': Start of authority record; 'TXT': Text record;
     */
    strQueryType?: pulumi.Input<string>;
    /**
     * Specify the health check timeout before retrying or finish, default is 5 sec (Timeout value, in seconds (default 5))
     */
    timeout?: pulumi.Input<number>;
    /**
     * Specify number of times that health check consecutively passes before declaring gateway UP, default 1 (up-retry count
     * (default 1))
     */
    upRetry?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheck resource.
 */
export interface SlbTemplateDnsRecursiveDnsResolutionGatewayHealthCheckArgs {
    /**
     * 'disabled': Disable NS Cache Lookup; 'enabled': Enable NS Cache Lookup;
     */
    gwhcNsCacheLookup?: pulumi.Input<string>;
    /**
     * Specify the health check interval, default is 10 sec (Interval value, in seconds (default 10))
     */
    interval?: pulumi.Input<number>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * Other record type value
     */
    numQueryType?: pulumi.Input<number>;
    /**
     * Specify the query name used in probe queries, default "a10networks.com"
     */
    queryName?: pulumi.Input<string>;
    /**
     * Maximum number of DNS query retries at each server level before health check fails, default 6 (Retry count (default 6))
     */
    retry?: pulumi.Input<number>;
    /**
     * Specify number of times that health check consecutively fails before declaring gateway DOWN, default 1 (retry-multi
     * count (default 1))
     */
    retryMulti?: pulumi.Input<number>;
    /**
     * 'A': Address record; 'AAAA': IPv6 Address record; 'CNAME': Canonical name record; 'MX': Mail exchange record; 'NS': Name
     * server record; 'SRV': Service locator; 'PTR': PTR resource record; 'SOA': Start of authority record; 'TXT': Text record;
     */
    strQueryType?: pulumi.Input<string>;
    /**
     * Specify the health check timeout before retrying or finish, default is 5 sec (Timeout value, in seconds (default 5))
     */
    timeout?: pulumi.Input<number>;
    /**
     * Specify number of times that health check consecutively passes before declaring gateway UP, default 1 (up-retry count
     * (default 1))
     */
    upRetry?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
