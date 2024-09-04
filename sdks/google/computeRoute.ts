// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ComputeRoute extends pulumi.CustomResource {
    /**
     * Get an existing ComputeRoute resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ComputeRouteState, opts?: pulumi.CustomResourceOptions): ComputeRoute {
        return new ComputeRoute(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/computeRoute:ComputeRoute';

    /**
     * Returns true if the given object is an instance of ComputeRoute.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ComputeRoute {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ComputeRoute.__pulumiType;
    }

    /**
     * An optional description of this resource. Provide this property when you create the resource.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The destination range of outgoing packets that this route applies to. Only IPv4 is supported.
     */
    public readonly destRange!: pulumi.Output<string>;
    /**
     * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and
     * comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression 'a-z?' which
     * means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or
     * digit, except the last character, which cannot be a dash.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The network that this route applies to.
     */
    public readonly network!: pulumi.Output<string>;
    /**
     * URL to a gateway that should handle matching packets. Currently, you can only specify the internet gateway, using a full
     * or partial valid URL: *
     * 'https://www.googleapis.com/compute/v1/projects/project/global/gateways/default-internet-gateway' *
     * 'projects/project/global/gateways/default-internet-gateway' * 'global/gateways/default-internet-gateway' * The string
     * 'default-internet-gateway'.
     */
    public readonly nextHopGateway!: pulumi.Output<string | undefined>;
    /**
     * The IP address or URL to a forwarding rule of type loadBalancingScheme=INTERNAL that should handle matching packets.
     * With the GA provider you can only specify the forwarding rule as a partial or full URL. For example, the following are
     * all valid values: * 10.128.0.56 *
     * https://www.googleapis.com/compute/v1/projects/project/regions/region/forwardingRules/forwardingRule *
     * regions/region/forwardingRules/forwardingRule When the beta provider, you can also specify the IP address of a
     * forwarding rule from the same VPC or any peered VPC. Note that this can only be used when the destinationRange is a
     * public (non-RFC 1918) IP CIDR range.
     */
    public readonly nextHopIlb!: pulumi.Output<string | undefined>;
    /**
     * URL to an instance that should handle matching packets. You can specify this as a full or partial URL. For example: *
     * 'https://www.googleapis.com/compute/v1/projects/project/zones/zone/instances/instance' *
     * 'projects/project/zones/zone/instances/instance' * 'zones/zone/instances/instance' * Just the instance name, with the
     * zone in 'next_hop_instance_zone'.
     */
    public readonly nextHopInstance!: pulumi.Output<string | undefined>;
    /**
     * The zone of the instance specified in next_hop_instance. Omit if next_hop_instance is specified as a URL.
     */
    public readonly nextHopInstanceZone!: pulumi.Output<string>;
    /**
     * Network IP address of an instance that should handle matching packets.
     */
    public readonly nextHopIp!: pulumi.Output<string>;
    /**
     * URL to a Network that should handle matching packets.
     */
    public /*out*/ readonly nextHopNetwork!: pulumi.Output<string>;
    /**
     * URL to a VpnTunnel that should handle matching packets.
     */
    public readonly nextHopVpnTunnel!: pulumi.Output<string | undefined>;
    /**
     * The priority of this route. Priority is used to break ties in cases where there is more than one matching route of equal
     * prefix length. In the case of two routes with equal prefix length, the one with the lowest-numbered priority value wins.
     * Default value is 1000. Valid range is 0 through 65535.
     */
    public readonly priority!: pulumi.Output<number | undefined>;
    public readonly project!: pulumi.Output<string>;
    public /*out*/ readonly selfLink!: pulumi.Output<string>;
    /**
     * A list of instance tags to which this route applies.
     */
    public readonly tags!: pulumi.Output<string[] | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.ComputeRouteTimeouts | undefined>;

    /**
     * Create a ComputeRoute resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ComputeRouteArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ComputeRouteArgs | ComputeRouteState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ComputeRouteState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["destRange"] = state ? state.destRange : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["network"] = state ? state.network : undefined;
            resourceInputs["nextHopGateway"] = state ? state.nextHopGateway : undefined;
            resourceInputs["nextHopIlb"] = state ? state.nextHopIlb : undefined;
            resourceInputs["nextHopInstance"] = state ? state.nextHopInstance : undefined;
            resourceInputs["nextHopInstanceZone"] = state ? state.nextHopInstanceZone : undefined;
            resourceInputs["nextHopIp"] = state ? state.nextHopIp : undefined;
            resourceInputs["nextHopNetwork"] = state ? state.nextHopNetwork : undefined;
            resourceInputs["nextHopVpnTunnel"] = state ? state.nextHopVpnTunnel : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["selfLink"] = state ? state.selfLink : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ComputeRouteArgs | undefined;
            if ((!args || args.destRange === undefined) && !opts.urn) {
                throw new Error("Missing required property 'destRange'");
            }
            if ((!args || args.network === undefined) && !opts.urn) {
                throw new Error("Missing required property 'network'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["destRange"] = args ? args.destRange : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["network"] = args ? args.network : undefined;
            resourceInputs["nextHopGateway"] = args ? args.nextHopGateway : undefined;
            resourceInputs["nextHopIlb"] = args ? args.nextHopIlb : undefined;
            resourceInputs["nextHopInstance"] = args ? args.nextHopInstance : undefined;
            resourceInputs["nextHopInstanceZone"] = args ? args.nextHopInstanceZone : undefined;
            resourceInputs["nextHopIp"] = args ? args.nextHopIp : undefined;
            resourceInputs["nextHopVpnTunnel"] = args ? args.nextHopVpnTunnel : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["nextHopNetwork"] = undefined /*out*/;
            resourceInputs["selfLink"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ComputeRoute.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ComputeRoute resources.
 */
export interface ComputeRouteState {
    /**
     * An optional description of this resource. Provide this property when you create the resource.
     */
    description?: pulumi.Input<string>;
    /**
     * The destination range of outgoing packets that this route applies to. Only IPv4 is supported.
     */
    destRange?: pulumi.Input<string>;
    /**
     * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and
     * comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression 'a-z?' which
     * means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or
     * digit, except the last character, which cannot be a dash.
     */
    name?: pulumi.Input<string>;
    /**
     * The network that this route applies to.
     */
    network?: pulumi.Input<string>;
    /**
     * URL to a gateway that should handle matching packets. Currently, you can only specify the internet gateway, using a full
     * or partial valid URL: *
     * 'https://www.googleapis.com/compute/v1/projects/project/global/gateways/default-internet-gateway' *
     * 'projects/project/global/gateways/default-internet-gateway' * 'global/gateways/default-internet-gateway' * The string
     * 'default-internet-gateway'.
     */
    nextHopGateway?: pulumi.Input<string>;
    /**
     * The IP address or URL to a forwarding rule of type loadBalancingScheme=INTERNAL that should handle matching packets.
     * With the GA provider you can only specify the forwarding rule as a partial or full URL. For example, the following are
     * all valid values: * 10.128.0.56 *
     * https://www.googleapis.com/compute/v1/projects/project/regions/region/forwardingRules/forwardingRule *
     * regions/region/forwardingRules/forwardingRule When the beta provider, you can also specify the IP address of a
     * forwarding rule from the same VPC or any peered VPC. Note that this can only be used when the destinationRange is a
     * public (non-RFC 1918) IP CIDR range.
     */
    nextHopIlb?: pulumi.Input<string>;
    /**
     * URL to an instance that should handle matching packets. You can specify this as a full or partial URL. For example: *
     * 'https://www.googleapis.com/compute/v1/projects/project/zones/zone/instances/instance' *
     * 'projects/project/zones/zone/instances/instance' * 'zones/zone/instances/instance' * Just the instance name, with the
     * zone in 'next_hop_instance_zone'.
     */
    nextHopInstance?: pulumi.Input<string>;
    /**
     * The zone of the instance specified in next_hop_instance. Omit if next_hop_instance is specified as a URL.
     */
    nextHopInstanceZone?: pulumi.Input<string>;
    /**
     * Network IP address of an instance that should handle matching packets.
     */
    nextHopIp?: pulumi.Input<string>;
    /**
     * URL to a Network that should handle matching packets.
     */
    nextHopNetwork?: pulumi.Input<string>;
    /**
     * URL to a VpnTunnel that should handle matching packets.
     */
    nextHopVpnTunnel?: pulumi.Input<string>;
    /**
     * The priority of this route. Priority is used to break ties in cases where there is more than one matching route of equal
     * prefix length. In the case of two routes with equal prefix length, the one with the lowest-numbered priority value wins.
     * Default value is 1000. Valid range is 0 through 65535.
     */
    priority?: pulumi.Input<number>;
    project?: pulumi.Input<string>;
    selfLink?: pulumi.Input<string>;
    /**
     * A list of instance tags to which this route applies.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.ComputeRouteTimeouts>;
}

/**
 * The set of arguments for constructing a ComputeRoute resource.
 */
export interface ComputeRouteArgs {
    /**
     * An optional description of this resource. Provide this property when you create the resource.
     */
    description?: pulumi.Input<string>;
    /**
     * The destination range of outgoing packets that this route applies to. Only IPv4 is supported.
     */
    destRange: pulumi.Input<string>;
    /**
     * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and
     * comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression 'a-z?' which
     * means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or
     * digit, except the last character, which cannot be a dash.
     */
    name?: pulumi.Input<string>;
    /**
     * The network that this route applies to.
     */
    network: pulumi.Input<string>;
    /**
     * URL to a gateway that should handle matching packets. Currently, you can only specify the internet gateway, using a full
     * or partial valid URL: *
     * 'https://www.googleapis.com/compute/v1/projects/project/global/gateways/default-internet-gateway' *
     * 'projects/project/global/gateways/default-internet-gateway' * 'global/gateways/default-internet-gateway' * The string
     * 'default-internet-gateway'.
     */
    nextHopGateway?: pulumi.Input<string>;
    /**
     * The IP address or URL to a forwarding rule of type loadBalancingScheme=INTERNAL that should handle matching packets.
     * With the GA provider you can only specify the forwarding rule as a partial or full URL. For example, the following are
     * all valid values: * 10.128.0.56 *
     * https://www.googleapis.com/compute/v1/projects/project/regions/region/forwardingRules/forwardingRule *
     * regions/region/forwardingRules/forwardingRule When the beta provider, you can also specify the IP address of a
     * forwarding rule from the same VPC or any peered VPC. Note that this can only be used when the destinationRange is a
     * public (non-RFC 1918) IP CIDR range.
     */
    nextHopIlb?: pulumi.Input<string>;
    /**
     * URL to an instance that should handle matching packets. You can specify this as a full or partial URL. For example: *
     * 'https://www.googleapis.com/compute/v1/projects/project/zones/zone/instances/instance' *
     * 'projects/project/zones/zone/instances/instance' * 'zones/zone/instances/instance' * Just the instance name, with the
     * zone in 'next_hop_instance_zone'.
     */
    nextHopInstance?: pulumi.Input<string>;
    /**
     * The zone of the instance specified in next_hop_instance. Omit if next_hop_instance is specified as a URL.
     */
    nextHopInstanceZone?: pulumi.Input<string>;
    /**
     * Network IP address of an instance that should handle matching packets.
     */
    nextHopIp?: pulumi.Input<string>;
    /**
     * URL to a VpnTunnel that should handle matching packets.
     */
    nextHopVpnTunnel?: pulumi.Input<string>;
    /**
     * The priority of this route. Priority is used to break ties in cases where there is more than one matching route of equal
     * prefix length. In the case of two routes with equal prefix length, the one with the lowest-numbered priority value wins.
     * Default value is 1000. Valid range is 0 through 65535.
     */
    priority?: pulumi.Input<number>;
    project?: pulumi.Input<string>;
    /**
     * A list of instance tags to which this route applies.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.ComputeRouteTimeouts>;
}
