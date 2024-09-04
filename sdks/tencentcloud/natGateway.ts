// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class NatGateway extends pulumi.CustomResource {
    /**
     * Get an existing NatGateway resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NatGatewayState, opts?: pulumi.CustomResourceOptions): NatGateway {
        return new NatGateway(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/natGateway:NatGateway';

    /**
     * Returns true if the given object is an instance of NatGateway.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NatGateway {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NatGateway.__pulumiType;
    }

    /**
     * EIP IP address set bound to the gateway. The value of at least 1 and at most 10.
     */
    public readonly assignedEipSets!: pulumi.Output<string[]>;
    /**
     * The maximum public network output bandwidth of NAT gateway (unit: Mbps). Valid values: `20`, `50`, `100`, `200`, `500`,
     * `1000`, `2000`, `5000`. Default is 100.
     */
    public readonly bandwidth!: pulumi.Output<number | undefined>;
    /**
     * Create time of the NAT gateway.
     */
    public /*out*/ readonly createdTime!: pulumi.Output<string>;
    /**
     * The upper limit of concurrent connection of NAT gateway. Valid values: `1000000`, `3000000`, `10000000`. Default is
     * `1000000`.
     */
    public readonly maxConcurrent!: pulumi.Output<number | undefined>;
    /**
     * Name of the NAT gateway.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * 1: traditional NAT, 2: standard NAT, default value is 1.
     */
    public readonly natProductVersion!: pulumi.Output<number>;
    /**
     * Subnet of NAT.
     */
    public readonly subnetId!: pulumi.Output<string>;
    /**
     * The available tags within this NAT gateway.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * ID of the vpc.
     */
    public readonly vpcId!: pulumi.Output<string>;
    /**
     * The availability zone, such as `ap-guangzhou-3`.
     */
    public readonly zone!: pulumi.Output<string>;

    /**
     * Create a NatGateway resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NatGatewayArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NatGatewayArgs | NatGatewayState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NatGatewayState | undefined;
            resourceInputs["assignedEipSets"] = state ? state.assignedEipSets : undefined;
            resourceInputs["bandwidth"] = state ? state.bandwidth : undefined;
            resourceInputs["createdTime"] = state ? state.createdTime : undefined;
            resourceInputs["maxConcurrent"] = state ? state.maxConcurrent : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["natProductVersion"] = state ? state.natProductVersion : undefined;
            resourceInputs["subnetId"] = state ? state.subnetId : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["vpcId"] = state ? state.vpcId : undefined;
            resourceInputs["zone"] = state ? state.zone : undefined;
        } else {
            const args = argsOrState as NatGatewayArgs | undefined;
            if ((!args || args.assignedEipSets === undefined) && !opts.urn) {
                throw new Error("Missing required property 'assignedEipSets'");
            }
            if ((!args || args.vpcId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vpcId'");
            }
            resourceInputs["assignedEipSets"] = args ? args.assignedEipSets : undefined;
            resourceInputs["bandwidth"] = args ? args.bandwidth : undefined;
            resourceInputs["maxConcurrent"] = args ? args.maxConcurrent : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["natProductVersion"] = args ? args.natProductVersion : undefined;
            resourceInputs["subnetId"] = args ? args.subnetId : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vpcId"] = args ? args.vpcId : undefined;
            resourceInputs["zone"] = args ? args.zone : undefined;
            resourceInputs["createdTime"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NatGateway.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NatGateway resources.
 */
export interface NatGatewayState {
    /**
     * EIP IP address set bound to the gateway. The value of at least 1 and at most 10.
     */
    assignedEipSets?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The maximum public network output bandwidth of NAT gateway (unit: Mbps). Valid values: `20`, `50`, `100`, `200`, `500`,
     * `1000`, `2000`, `5000`. Default is 100.
     */
    bandwidth?: pulumi.Input<number>;
    /**
     * Create time of the NAT gateway.
     */
    createdTime?: pulumi.Input<string>;
    /**
     * The upper limit of concurrent connection of NAT gateway. Valid values: `1000000`, `3000000`, `10000000`. Default is
     * `1000000`.
     */
    maxConcurrent?: pulumi.Input<number>;
    /**
     * Name of the NAT gateway.
     */
    name?: pulumi.Input<string>;
    /**
     * 1: traditional NAT, 2: standard NAT, default value is 1.
     */
    natProductVersion?: pulumi.Input<number>;
    /**
     * Subnet of NAT.
     */
    subnetId?: pulumi.Input<string>;
    /**
     * The available tags within this NAT gateway.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * ID of the vpc.
     */
    vpcId?: pulumi.Input<string>;
    /**
     * The availability zone, such as `ap-guangzhou-3`.
     */
    zone?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a NatGateway resource.
 */
export interface NatGatewayArgs {
    /**
     * EIP IP address set bound to the gateway. The value of at least 1 and at most 10.
     */
    assignedEipSets: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The maximum public network output bandwidth of NAT gateway (unit: Mbps). Valid values: `20`, `50`, `100`, `200`, `500`,
     * `1000`, `2000`, `5000`. Default is 100.
     */
    bandwidth?: pulumi.Input<number>;
    /**
     * The upper limit of concurrent connection of NAT gateway. Valid values: `1000000`, `3000000`, `10000000`. Default is
     * `1000000`.
     */
    maxConcurrent?: pulumi.Input<number>;
    /**
     * Name of the NAT gateway.
     */
    name?: pulumi.Input<string>;
    /**
     * 1: traditional NAT, 2: standard NAT, default value is 1.
     */
    natProductVersion?: pulumi.Input<number>;
    /**
     * Subnet of NAT.
     */
    subnetId?: pulumi.Input<string>;
    /**
     * The available tags within this NAT gateway.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * ID of the vpc.
     */
    vpcId: pulumi.Input<string>;
    /**
     * The availability zone, such as `ap-guangzhou-3`.
     */
    zone?: pulumi.Input<string>;
}
