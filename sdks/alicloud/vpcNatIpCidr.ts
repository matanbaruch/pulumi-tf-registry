// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class VpcNatIpCidr extends pulumi.CustomResource {
    /**
     * Get an existing VpcNatIpCidr resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VpcNatIpCidrState, opts?: pulumi.CustomResourceOptions): VpcNatIpCidr {
        return new VpcNatIpCidr(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/vpcNatIpCidr:VpcNatIpCidr';

    /**
     * Returns true if the given object is an instance of VpcNatIpCidr.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VpcNatIpCidr {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VpcNatIpCidr.__pulumiType;
    }

    public readonly dryRun!: pulumi.Output<boolean>;
    public readonly natGatewayId!: pulumi.Output<string>;
    public readonly natIpCidr!: pulumi.Output<string | undefined>;
    public readonly natIpCidrDescription!: pulumi.Output<string | undefined>;
    public readonly natIpCidrName!: pulumi.Output<string | undefined>;
    public /*out*/ readonly status!: pulumi.Output<string>;

    /**
     * Create a VpcNatIpCidr resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VpcNatIpCidrArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VpcNatIpCidrArgs | VpcNatIpCidrState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VpcNatIpCidrState | undefined;
            resourceInputs["dryRun"] = state ? state.dryRun : undefined;
            resourceInputs["natGatewayId"] = state ? state.natGatewayId : undefined;
            resourceInputs["natIpCidr"] = state ? state.natIpCidr : undefined;
            resourceInputs["natIpCidrDescription"] = state ? state.natIpCidrDescription : undefined;
            resourceInputs["natIpCidrName"] = state ? state.natIpCidrName : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
        } else {
            const args = argsOrState as VpcNatIpCidrArgs | undefined;
            if ((!args || args.natGatewayId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'natGatewayId'");
            }
            resourceInputs["dryRun"] = args ? args.dryRun : undefined;
            resourceInputs["natGatewayId"] = args ? args.natGatewayId : undefined;
            resourceInputs["natIpCidr"] = args ? args.natIpCidr : undefined;
            resourceInputs["natIpCidrDescription"] = args ? args.natIpCidrDescription : undefined;
            resourceInputs["natIpCidrName"] = args ? args.natIpCidrName : undefined;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VpcNatIpCidr.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VpcNatIpCidr resources.
 */
export interface VpcNatIpCidrState {
    dryRun?: pulumi.Input<boolean>;
    natGatewayId?: pulumi.Input<string>;
    natIpCidr?: pulumi.Input<string>;
    natIpCidrDescription?: pulumi.Input<string>;
    natIpCidrName?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VpcNatIpCidr resource.
 */
export interface VpcNatIpCidrArgs {
    dryRun?: pulumi.Input<boolean>;
    natGatewayId: pulumi.Input<string>;
    natIpCidr?: pulumi.Input<string>;
    natIpCidrDescription?: pulumi.Input<string>;
    natIpCidrName?: pulumi.Input<string>;
}
