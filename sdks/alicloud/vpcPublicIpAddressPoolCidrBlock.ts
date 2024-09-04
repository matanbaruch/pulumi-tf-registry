// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class VpcPublicIpAddressPoolCidrBlock extends pulumi.CustomResource {
    /**
     * Get an existing VpcPublicIpAddressPoolCidrBlock resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VpcPublicIpAddressPoolCidrBlockState, opts?: pulumi.CustomResourceOptions): VpcPublicIpAddressPoolCidrBlock {
        return new VpcPublicIpAddressPoolCidrBlock(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/vpcPublicIpAddressPoolCidrBlock:VpcPublicIpAddressPoolCidrBlock';

    /**
     * Returns true if the given object is an instance of VpcPublicIpAddressPoolCidrBlock.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VpcPublicIpAddressPoolCidrBlock {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VpcPublicIpAddressPoolCidrBlock.__pulumiType;
    }

    public readonly cidrBlock!: pulumi.Output<string>;
    public readonly cidrMask!: pulumi.Output<number | undefined>;
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    public readonly publicIpAddressPoolId!: pulumi.Output<string>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.VpcPublicIpAddressPoolCidrBlockTimeouts | undefined>;

    /**
     * Create a VpcPublicIpAddressPoolCidrBlock resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VpcPublicIpAddressPoolCidrBlockArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VpcPublicIpAddressPoolCidrBlockArgs | VpcPublicIpAddressPoolCidrBlockState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VpcPublicIpAddressPoolCidrBlockState | undefined;
            resourceInputs["cidrBlock"] = state ? state.cidrBlock : undefined;
            resourceInputs["cidrMask"] = state ? state.cidrMask : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["publicIpAddressPoolId"] = state ? state.publicIpAddressPoolId : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as VpcPublicIpAddressPoolCidrBlockArgs | undefined;
            if ((!args || args.publicIpAddressPoolId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'publicIpAddressPoolId'");
            }
            resourceInputs["cidrBlock"] = args ? args.cidrBlock : undefined;
            resourceInputs["cidrMask"] = args ? args.cidrMask : undefined;
            resourceInputs["publicIpAddressPoolId"] = args ? args.publicIpAddressPoolId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VpcPublicIpAddressPoolCidrBlock.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VpcPublicIpAddressPoolCidrBlock resources.
 */
export interface VpcPublicIpAddressPoolCidrBlockState {
    cidrBlock?: pulumi.Input<string>;
    cidrMask?: pulumi.Input<number>;
    createTime?: pulumi.Input<string>;
    publicIpAddressPoolId?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.VpcPublicIpAddressPoolCidrBlockTimeouts>;
}

/**
 * The set of arguments for constructing a VpcPublicIpAddressPoolCidrBlock resource.
 */
export interface VpcPublicIpAddressPoolCidrBlockArgs {
    cidrBlock?: pulumi.Input<string>;
    cidrMask?: pulumi.Input<number>;
    publicIpAddressPoolId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.VpcPublicIpAddressPoolCidrBlockTimeouts>;
}
