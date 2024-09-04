// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class BmcSubnet extends pulumi.CustomResource {
    /**
     * Get an existing BmcSubnet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BmcSubnetState, opts?: pulumi.CustomResourceOptions): BmcSubnet {
        return new BmcSubnet(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'zenlayercloud:index/bmcSubnet:BmcSubnet';

    /**
     * Returns true if the given object is an instance of BmcSubnet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BmcSubnet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BmcSubnet.__pulumiType;
    }

    /**
     * The ID of zone that the bmc subnet locates at.
     */
    public readonly availabilityZone!: pulumi.Output<string>;
    /**
     * A network address block which should be a subnet of the three internal network segments (10.0.0.0/16, 172.16.0.0/12 and
     * 192.168.0.0/16).
     */
    public readonly cidrBlock!: pulumi.Output<string>;
    /**
     * Create time of the subnet.
     */
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    /**
     * The name of the bmc subnet.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The resource group id the subnet belongs to, default to Default Resource Group.
     */
    public readonly resourceGroupId!: pulumi.Output<string>;
    /**
     * The resource group name the subnet belongs to, default to Default Resource Group.
     */
    public /*out*/ readonly resourceGroupName!: pulumi.Output<string>;
    /**
     * Current status of the subnet.
     */
    public /*out*/ readonly subnetStatus!: pulumi.Output<string>;
    /**
     * ID of the VPC to be associated.
     */
    public readonly vpcId!: pulumi.Output<string | undefined>;
    /**
     * Name of the VPC to be associated.
     */
    public /*out*/ readonly vpcName!: pulumi.Output<string>;

    /**
     * Create a BmcSubnet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BmcSubnetArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BmcSubnetArgs | BmcSubnetState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as BmcSubnetState | undefined;
            resourceInputs["availabilityZone"] = state ? state.availabilityZone : undefined;
            resourceInputs["cidrBlock"] = state ? state.cidrBlock : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["resourceGroupId"] = state ? state.resourceGroupId : undefined;
            resourceInputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            resourceInputs["subnetStatus"] = state ? state.subnetStatus : undefined;
            resourceInputs["vpcId"] = state ? state.vpcId : undefined;
            resourceInputs["vpcName"] = state ? state.vpcName : undefined;
        } else {
            const args = argsOrState as BmcSubnetArgs | undefined;
            if ((!args || args.availabilityZone === undefined) && !opts.urn) {
                throw new Error("Missing required property 'availabilityZone'");
            }
            if ((!args || args.cidrBlock === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cidrBlock'");
            }
            resourceInputs["availabilityZone"] = args ? args.availabilityZone : undefined;
            resourceInputs["cidrBlock"] = args ? args.cidrBlock : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupId"] = args ? args.resourceGroupId : undefined;
            resourceInputs["vpcId"] = args ? args.vpcId : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["resourceGroupName"] = undefined /*out*/;
            resourceInputs["subnetStatus"] = undefined /*out*/;
            resourceInputs["vpcName"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(BmcSubnet.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering BmcSubnet resources.
 */
export interface BmcSubnetState {
    /**
     * The ID of zone that the bmc subnet locates at.
     */
    availabilityZone?: pulumi.Input<string>;
    /**
     * A network address block which should be a subnet of the three internal network segments (10.0.0.0/16, 172.16.0.0/12 and
     * 192.168.0.0/16).
     */
    cidrBlock?: pulumi.Input<string>;
    /**
     * Create time of the subnet.
     */
    createTime?: pulumi.Input<string>;
    /**
     * The name of the bmc subnet.
     */
    name?: pulumi.Input<string>;
    /**
     * The resource group id the subnet belongs to, default to Default Resource Group.
     */
    resourceGroupId?: pulumi.Input<string>;
    /**
     * The resource group name the subnet belongs to, default to Default Resource Group.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * Current status of the subnet.
     */
    subnetStatus?: pulumi.Input<string>;
    /**
     * ID of the VPC to be associated.
     */
    vpcId?: pulumi.Input<string>;
    /**
     * Name of the VPC to be associated.
     */
    vpcName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a BmcSubnet resource.
 */
export interface BmcSubnetArgs {
    /**
     * The ID of zone that the bmc subnet locates at.
     */
    availabilityZone: pulumi.Input<string>;
    /**
     * A network address block which should be a subnet of the three internal network segments (10.0.0.0/16, 172.16.0.0/12 and
     * 192.168.0.0/16).
     */
    cidrBlock: pulumi.Input<string>;
    /**
     * The name of the bmc subnet.
     */
    name?: pulumi.Input<string>;
    /**
     * The resource group id the subnet belongs to, default to Default Resource Group.
     */
    resourceGroupId?: pulumi.Input<string>;
    /**
     * ID of the VPC to be associated.
     */
    vpcId?: pulumi.Input<string>;
}
