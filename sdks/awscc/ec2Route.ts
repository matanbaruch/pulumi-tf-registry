// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Ec2Route extends pulumi.CustomResource {
    /**
     * Get an existing Ec2Route resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Ec2RouteState, opts?: pulumi.CustomResourceOptions): Ec2Route {
        return new Ec2Route(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/ec2Route:Ec2Route';

    /**
     * Returns true if the given object is an instance of Ec2Route.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Ec2Route {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Ec2Route.__pulumiType;
    }

    /**
     * The ID of the carrier gateway. You can only use this option when the VPC contains a subnet which is associated with a
     * Wavelength Zone.
     */
    public readonly carrierGatewayId!: pulumi.Output<string>;
    public /*out*/ readonly cidrBlock!: pulumi.Output<string>;
    /**
     * The Amazon Resource Name (ARN) of the core network.
     */
    public readonly coreNetworkArn!: pulumi.Output<string>;
    /**
     * The IPv4 CIDR address block used for the destination match. Routing decisions are based on the most specific match. We
     * modify the specified CIDR block to its canonical form; for example, if you specify ``100.68.0.18/18``, we modify it to
     * ``100.68.0.0/18``.
     */
    public readonly destinationCidrBlock!: pulumi.Output<string>;
    /**
     * The IPv6 CIDR block used for the destination match. Routing decisions are based on the most specific match.
     */
    public readonly destinationIpv6CidrBlock!: pulumi.Output<string>;
    /**
     * The ID of a prefix list used for the destination match.
     */
    public readonly destinationPrefixListId!: pulumi.Output<string>;
    /**
     * [IPv6 traffic only] The ID of an egress-only internet gateway.
     */
    public readonly egressOnlyInternetGatewayId!: pulumi.Output<string>;
    /**
     * The ID of an internet gateway or virtual private gateway attached to your VPC.
     */
    public readonly gatewayId!: pulumi.Output<string>;
    /**
     * The ID of a NAT instance in your VPC. The operation fails if you specify an instance ID unless exactly one network
     * interface is attached.
     */
    public readonly instanceId!: pulumi.Output<string>;
    /**
     * The ID of the local gateway.
     */
    public readonly localGatewayId!: pulumi.Output<string>;
    /**
     * [IPv4 traffic only] The ID of a NAT gateway.
     */
    public readonly natGatewayId!: pulumi.Output<string>;
    /**
     * The ID of a network interface.
     */
    public readonly networkInterfaceId!: pulumi.Output<string>;
    /**
     * The ID of the route table for the route.
     */
    public readonly routeTableId!: pulumi.Output<string>;
    /**
     * The ID of a transit gateway.
     */
    public readonly transitGatewayId!: pulumi.Output<string>;
    /**
     * The ID of a VPC endpoint. Supported for Gateway Load Balancer endpoints only.
     */
    public readonly vpcEndpointId!: pulumi.Output<string>;
    /**
     * The ID of a VPC peering connection.
     */
    public readonly vpcPeeringConnectionId!: pulumi.Output<string>;

    /**
     * Create a Ec2Route resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: Ec2RouteArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Ec2RouteArgs | Ec2RouteState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Ec2RouteState | undefined;
            resourceInputs["carrierGatewayId"] = state ? state.carrierGatewayId : undefined;
            resourceInputs["cidrBlock"] = state ? state.cidrBlock : undefined;
            resourceInputs["coreNetworkArn"] = state ? state.coreNetworkArn : undefined;
            resourceInputs["destinationCidrBlock"] = state ? state.destinationCidrBlock : undefined;
            resourceInputs["destinationIpv6CidrBlock"] = state ? state.destinationIpv6CidrBlock : undefined;
            resourceInputs["destinationPrefixListId"] = state ? state.destinationPrefixListId : undefined;
            resourceInputs["egressOnlyInternetGatewayId"] = state ? state.egressOnlyInternetGatewayId : undefined;
            resourceInputs["gatewayId"] = state ? state.gatewayId : undefined;
            resourceInputs["instanceId"] = state ? state.instanceId : undefined;
            resourceInputs["localGatewayId"] = state ? state.localGatewayId : undefined;
            resourceInputs["natGatewayId"] = state ? state.natGatewayId : undefined;
            resourceInputs["networkInterfaceId"] = state ? state.networkInterfaceId : undefined;
            resourceInputs["routeTableId"] = state ? state.routeTableId : undefined;
            resourceInputs["transitGatewayId"] = state ? state.transitGatewayId : undefined;
            resourceInputs["vpcEndpointId"] = state ? state.vpcEndpointId : undefined;
            resourceInputs["vpcPeeringConnectionId"] = state ? state.vpcPeeringConnectionId : undefined;
        } else {
            const args = argsOrState as Ec2RouteArgs | undefined;
            if ((!args || args.routeTableId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'routeTableId'");
            }
            resourceInputs["carrierGatewayId"] = args ? args.carrierGatewayId : undefined;
            resourceInputs["coreNetworkArn"] = args ? args.coreNetworkArn : undefined;
            resourceInputs["destinationCidrBlock"] = args ? args.destinationCidrBlock : undefined;
            resourceInputs["destinationIpv6CidrBlock"] = args ? args.destinationIpv6CidrBlock : undefined;
            resourceInputs["destinationPrefixListId"] = args ? args.destinationPrefixListId : undefined;
            resourceInputs["egressOnlyInternetGatewayId"] = args ? args.egressOnlyInternetGatewayId : undefined;
            resourceInputs["gatewayId"] = args ? args.gatewayId : undefined;
            resourceInputs["instanceId"] = args ? args.instanceId : undefined;
            resourceInputs["localGatewayId"] = args ? args.localGatewayId : undefined;
            resourceInputs["natGatewayId"] = args ? args.natGatewayId : undefined;
            resourceInputs["networkInterfaceId"] = args ? args.networkInterfaceId : undefined;
            resourceInputs["routeTableId"] = args ? args.routeTableId : undefined;
            resourceInputs["transitGatewayId"] = args ? args.transitGatewayId : undefined;
            resourceInputs["vpcEndpointId"] = args ? args.vpcEndpointId : undefined;
            resourceInputs["vpcPeeringConnectionId"] = args ? args.vpcPeeringConnectionId : undefined;
            resourceInputs["cidrBlock"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Ec2Route.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Ec2Route resources.
 */
export interface Ec2RouteState {
    /**
     * The ID of the carrier gateway. You can only use this option when the VPC contains a subnet which is associated with a
     * Wavelength Zone.
     */
    carrierGatewayId?: pulumi.Input<string>;
    cidrBlock?: pulumi.Input<string>;
    /**
     * The Amazon Resource Name (ARN) of the core network.
     */
    coreNetworkArn?: pulumi.Input<string>;
    /**
     * The IPv4 CIDR address block used for the destination match. Routing decisions are based on the most specific match. We
     * modify the specified CIDR block to its canonical form; for example, if you specify ``100.68.0.18/18``, we modify it to
     * ``100.68.0.0/18``.
     */
    destinationCidrBlock?: pulumi.Input<string>;
    /**
     * The IPv6 CIDR block used for the destination match. Routing decisions are based on the most specific match.
     */
    destinationIpv6CidrBlock?: pulumi.Input<string>;
    /**
     * The ID of a prefix list used for the destination match.
     */
    destinationPrefixListId?: pulumi.Input<string>;
    /**
     * [IPv6 traffic only] The ID of an egress-only internet gateway.
     */
    egressOnlyInternetGatewayId?: pulumi.Input<string>;
    /**
     * The ID of an internet gateway or virtual private gateway attached to your VPC.
     */
    gatewayId?: pulumi.Input<string>;
    /**
     * The ID of a NAT instance in your VPC. The operation fails if you specify an instance ID unless exactly one network
     * interface is attached.
     */
    instanceId?: pulumi.Input<string>;
    /**
     * The ID of the local gateway.
     */
    localGatewayId?: pulumi.Input<string>;
    /**
     * [IPv4 traffic only] The ID of a NAT gateway.
     */
    natGatewayId?: pulumi.Input<string>;
    /**
     * The ID of a network interface.
     */
    networkInterfaceId?: pulumi.Input<string>;
    /**
     * The ID of the route table for the route.
     */
    routeTableId?: pulumi.Input<string>;
    /**
     * The ID of a transit gateway.
     */
    transitGatewayId?: pulumi.Input<string>;
    /**
     * The ID of a VPC endpoint. Supported for Gateway Load Balancer endpoints only.
     */
    vpcEndpointId?: pulumi.Input<string>;
    /**
     * The ID of a VPC peering connection.
     */
    vpcPeeringConnectionId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Ec2Route resource.
 */
export interface Ec2RouteArgs {
    /**
     * The ID of the carrier gateway. You can only use this option when the VPC contains a subnet which is associated with a
     * Wavelength Zone.
     */
    carrierGatewayId?: pulumi.Input<string>;
    /**
     * The Amazon Resource Name (ARN) of the core network.
     */
    coreNetworkArn?: pulumi.Input<string>;
    /**
     * The IPv4 CIDR address block used for the destination match. Routing decisions are based on the most specific match. We
     * modify the specified CIDR block to its canonical form; for example, if you specify ``100.68.0.18/18``, we modify it to
     * ``100.68.0.0/18``.
     */
    destinationCidrBlock?: pulumi.Input<string>;
    /**
     * The IPv6 CIDR block used for the destination match. Routing decisions are based on the most specific match.
     */
    destinationIpv6CidrBlock?: pulumi.Input<string>;
    /**
     * The ID of a prefix list used for the destination match.
     */
    destinationPrefixListId?: pulumi.Input<string>;
    /**
     * [IPv6 traffic only] The ID of an egress-only internet gateway.
     */
    egressOnlyInternetGatewayId?: pulumi.Input<string>;
    /**
     * The ID of an internet gateway or virtual private gateway attached to your VPC.
     */
    gatewayId?: pulumi.Input<string>;
    /**
     * The ID of a NAT instance in your VPC. The operation fails if you specify an instance ID unless exactly one network
     * interface is attached.
     */
    instanceId?: pulumi.Input<string>;
    /**
     * The ID of the local gateway.
     */
    localGatewayId?: pulumi.Input<string>;
    /**
     * [IPv4 traffic only] The ID of a NAT gateway.
     */
    natGatewayId?: pulumi.Input<string>;
    /**
     * The ID of a network interface.
     */
    networkInterfaceId?: pulumi.Input<string>;
    /**
     * The ID of the route table for the route.
     */
    routeTableId: pulumi.Input<string>;
    /**
     * The ID of a transit gateway.
     */
    transitGatewayId?: pulumi.Input<string>;
    /**
     * The ID of a VPC endpoint. Supported for Gateway Load Balancer endpoints only.
     */
    vpcEndpointId?: pulumi.Input<string>;
    /**
     * The ID of a VPC peering connection.
     */
    vpcPeeringConnectionId?: pulumi.Input<string>;
}
