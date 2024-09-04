// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DomainRoute extends pulumi.CustomResource {
    /**
     * Get an existing DomainRoute resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DomainRouteState, opts?: pulumi.CustomResourceOptions): DomainRoute {
        return new DomainRoute(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'cpln:index/domainRoute:DomainRoute';

    /**
     * Returns true if the given object is an instance of DomainRoute.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DomainRoute {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DomainRoute.__pulumiType;
    }

    /**
     * The self link of the domain to add the route to.
     */
    public readonly domainLink!: pulumi.Output<string>;
    /**
     * The port the route corresponds to. Default: 443
     */
    public readonly domainPort!: pulumi.Output<number | undefined>;
    /**
     * Modify the headers for all http requests for this route.
     */
    public readonly headers!: pulumi.Output<outputs.DomainRouteHeaders | undefined>;
    /**
     * This option allows forwarding traffic for different host headers to different workloads. This will only be used when the
     * target GVC has dedicated load balancing enabled and the Domain is configured for wildcard support. Please contact us on
     * Slack or at support@controlplane.com for additional details.
     */
    public readonly hostPrefix!: pulumi.Output<string | undefined>;
    /**
     * For the linked workload, the port to route traffic to.
     */
    public readonly port!: pulumi.Output<number | undefined>;
    /**
     * The path will match any unmatched path prefixes for the subdomain.
     */
    public readonly prefix!: pulumi.Output<string | undefined>;
    /**
     * Used to match URI paths. Uses the google re2 regex syntax.
     */
    public readonly regex!: pulumi.Output<string | undefined>;
    /**
     * A path prefix can be configured to be replaced when forwarding the request to the Workload.
     */
    public readonly replacePrefix!: pulumi.Output<string | undefined>;
    /**
     * The link of the workload to map the prefix to.
     */
    public readonly workloadLink!: pulumi.Output<string>;

    /**
     * Create a DomainRoute resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DomainRouteArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DomainRouteArgs | DomainRouteState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DomainRouteState | undefined;
            resourceInputs["domainLink"] = state ? state.domainLink : undefined;
            resourceInputs["domainPort"] = state ? state.domainPort : undefined;
            resourceInputs["headers"] = state ? state.headers : undefined;
            resourceInputs["hostPrefix"] = state ? state.hostPrefix : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["prefix"] = state ? state.prefix : undefined;
            resourceInputs["regex"] = state ? state.regex : undefined;
            resourceInputs["replacePrefix"] = state ? state.replacePrefix : undefined;
            resourceInputs["workloadLink"] = state ? state.workloadLink : undefined;
        } else {
            const args = argsOrState as DomainRouteArgs | undefined;
            if ((!args || args.domainLink === undefined) && !opts.urn) {
                throw new Error("Missing required property 'domainLink'");
            }
            if ((!args || args.workloadLink === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workloadLink'");
            }
            resourceInputs["domainLink"] = args ? args.domainLink : undefined;
            resourceInputs["domainPort"] = args ? args.domainPort : undefined;
            resourceInputs["headers"] = args ? args.headers : undefined;
            resourceInputs["hostPrefix"] = args ? args.hostPrefix : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["prefix"] = args ? args.prefix : undefined;
            resourceInputs["regex"] = args ? args.regex : undefined;
            resourceInputs["replacePrefix"] = args ? args.replacePrefix : undefined;
            resourceInputs["workloadLink"] = args ? args.workloadLink : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DomainRoute.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DomainRoute resources.
 */
export interface DomainRouteState {
    /**
     * The self link of the domain to add the route to.
     */
    domainLink?: pulumi.Input<string>;
    /**
     * The port the route corresponds to. Default: 443
     */
    domainPort?: pulumi.Input<number>;
    /**
     * Modify the headers for all http requests for this route.
     */
    headers?: pulumi.Input<inputs.DomainRouteHeaders>;
    /**
     * This option allows forwarding traffic for different host headers to different workloads. This will only be used when the
     * target GVC has dedicated load balancing enabled and the Domain is configured for wildcard support. Please contact us on
     * Slack or at support@controlplane.com for additional details.
     */
    hostPrefix?: pulumi.Input<string>;
    /**
     * For the linked workload, the port to route traffic to.
     */
    port?: pulumi.Input<number>;
    /**
     * The path will match any unmatched path prefixes for the subdomain.
     */
    prefix?: pulumi.Input<string>;
    /**
     * Used to match URI paths. Uses the google re2 regex syntax.
     */
    regex?: pulumi.Input<string>;
    /**
     * A path prefix can be configured to be replaced when forwarding the request to the Workload.
     */
    replacePrefix?: pulumi.Input<string>;
    /**
     * The link of the workload to map the prefix to.
     */
    workloadLink?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DomainRoute resource.
 */
export interface DomainRouteArgs {
    /**
     * The self link of the domain to add the route to.
     */
    domainLink: pulumi.Input<string>;
    /**
     * The port the route corresponds to. Default: 443
     */
    domainPort?: pulumi.Input<number>;
    /**
     * Modify the headers for all http requests for this route.
     */
    headers?: pulumi.Input<inputs.DomainRouteHeaders>;
    /**
     * This option allows forwarding traffic for different host headers to different workloads. This will only be used when the
     * target GVC has dedicated load balancing enabled and the Domain is configured for wildcard support. Please contact us on
     * Slack or at support@controlplane.com for additional details.
     */
    hostPrefix?: pulumi.Input<string>;
    /**
     * For the linked workload, the port to route traffic to.
     */
    port?: pulumi.Input<number>;
    /**
     * The path will match any unmatched path prefixes for the subdomain.
     */
    prefix?: pulumi.Input<string>;
    /**
     * Used to match URI paths. Uses the google re2 regex syntax.
     */
    regex?: pulumi.Input<string>;
    /**
     * A path prefix can be configured to be replaced when forwarding the request to the Workload.
     */
    replacePrefix?: pulumi.Input<string>;
    /**
     * The link of the workload to map the prefix to.
     */
    workloadLink: pulumi.Input<string>;
}
