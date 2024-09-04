// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class NatGatewaySnat extends pulumi.CustomResource {
    /**
     * Get an existing NatGatewaySnat resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NatGatewaySnatState, opts?: pulumi.CustomResourceOptions): NatGatewaySnat {
        return new NatGatewaySnat(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/natGatewaySnat:NatGatewaySnat';

    /**
     * Returns true if the given object is an instance of NatGatewaySnat.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NatGatewaySnat {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NatGatewaySnat.__pulumiType;
    }

    /**
     * Create time.
     */
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    /**
     * Description.
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * Instance ID, required when `resource_type` is NETWORKINTERFACE.
     */
    public readonly instanceId!: pulumi.Output<string | undefined>;
    /**
     * Private IPs of the instance's primary ENI, required when `resource_type` is NETWORKINTERFACE.
     */
    public readonly instancePrivateIpAddr!: pulumi.Output<string | undefined>;
    /**
     * NAT gateway ID.
     */
    public readonly natGatewayId!: pulumi.Output<string>;
    /**
     * Elastic IP address pool.
     */
    public readonly publicIpAddrs!: pulumi.Output<string[]>;
    /**
     * Resource type. Valid values: SUBNET, NETWORKINTERFACE.
     */
    public readonly resourceType!: pulumi.Output<string>;
    /**
     * SNAT rule ID.
     */
    public /*out*/ readonly snatId!: pulumi.Output<string>;
    /**
     * The IPv4 CIDR of the subnet, required when `resource_type` is SUBNET.
     */
    public readonly subnetCidrBlock!: pulumi.Output<string | undefined>;
    /**
     * Subnet instance ID, required when `resource_type` is SUBNET.
     */
    public readonly subnetId!: pulumi.Output<string | undefined>;

    /**
     * Create a NatGatewaySnat resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NatGatewaySnatArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NatGatewaySnatArgs | NatGatewaySnatState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NatGatewaySnatState | undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["instanceId"] = state ? state.instanceId : undefined;
            resourceInputs["instancePrivateIpAddr"] = state ? state.instancePrivateIpAddr : undefined;
            resourceInputs["natGatewayId"] = state ? state.natGatewayId : undefined;
            resourceInputs["publicIpAddrs"] = state ? state.publicIpAddrs : undefined;
            resourceInputs["resourceType"] = state ? state.resourceType : undefined;
            resourceInputs["snatId"] = state ? state.snatId : undefined;
            resourceInputs["subnetCidrBlock"] = state ? state.subnetCidrBlock : undefined;
            resourceInputs["subnetId"] = state ? state.subnetId : undefined;
        } else {
            const args = argsOrState as NatGatewaySnatArgs | undefined;
            if ((!args || args.description === undefined) && !opts.urn) {
                throw new Error("Missing required property 'description'");
            }
            if ((!args || args.natGatewayId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'natGatewayId'");
            }
            if ((!args || args.publicIpAddrs === undefined) && !opts.urn) {
                throw new Error("Missing required property 'publicIpAddrs'");
            }
            if ((!args || args.resourceType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceType'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["instanceId"] = args ? args.instanceId : undefined;
            resourceInputs["instancePrivateIpAddr"] = args ? args.instancePrivateIpAddr : undefined;
            resourceInputs["natGatewayId"] = args ? args.natGatewayId : undefined;
            resourceInputs["publicIpAddrs"] = args ? args.publicIpAddrs : undefined;
            resourceInputs["resourceType"] = args ? args.resourceType : undefined;
            resourceInputs["subnetCidrBlock"] = args ? args.subnetCidrBlock : undefined;
            resourceInputs["subnetId"] = args ? args.subnetId : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["snatId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NatGatewaySnat.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NatGatewaySnat resources.
 */
export interface NatGatewaySnatState {
    /**
     * Create time.
     */
    createTime?: pulumi.Input<string>;
    /**
     * Description.
     */
    description?: pulumi.Input<string>;
    /**
     * Instance ID, required when `resource_type` is NETWORKINTERFACE.
     */
    instanceId?: pulumi.Input<string>;
    /**
     * Private IPs of the instance's primary ENI, required when `resource_type` is NETWORKINTERFACE.
     */
    instancePrivateIpAddr?: pulumi.Input<string>;
    /**
     * NAT gateway ID.
     */
    natGatewayId?: pulumi.Input<string>;
    /**
     * Elastic IP address pool.
     */
    publicIpAddrs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Resource type. Valid values: SUBNET, NETWORKINTERFACE.
     */
    resourceType?: pulumi.Input<string>;
    /**
     * SNAT rule ID.
     */
    snatId?: pulumi.Input<string>;
    /**
     * The IPv4 CIDR of the subnet, required when `resource_type` is SUBNET.
     */
    subnetCidrBlock?: pulumi.Input<string>;
    /**
     * Subnet instance ID, required when `resource_type` is SUBNET.
     */
    subnetId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a NatGatewaySnat resource.
 */
export interface NatGatewaySnatArgs {
    /**
     * Description.
     */
    description: pulumi.Input<string>;
    /**
     * Instance ID, required when `resource_type` is NETWORKINTERFACE.
     */
    instanceId?: pulumi.Input<string>;
    /**
     * Private IPs of the instance's primary ENI, required when `resource_type` is NETWORKINTERFACE.
     */
    instancePrivateIpAddr?: pulumi.Input<string>;
    /**
     * NAT gateway ID.
     */
    natGatewayId: pulumi.Input<string>;
    /**
     * Elastic IP address pool.
     */
    publicIpAddrs: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Resource type. Valid values: SUBNET, NETWORKINTERFACE.
     */
    resourceType: pulumi.Input<string>;
    /**
     * The IPv4 CIDR of the subnet, required when `resource_type` is SUBNET.
     */
    subnetCidrBlock?: pulumi.Input<string>;
    /**
     * Subnet instance ID, required when `resource_type` is SUBNET.
     */
    subnetId?: pulumi.Input<string>;
}
