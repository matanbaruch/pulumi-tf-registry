// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class VpcNatIp extends pulumi.CustomResource {
    /**
     * Get an existing VpcNatIp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VpcNatIpState, opts?: pulumi.CustomResourceOptions): VpcNatIp {
        return new VpcNatIp(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/vpcNatIp:VpcNatIp';

    /**
     * Returns true if the given object is an instance of VpcNatIp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VpcNatIp {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VpcNatIp.__pulumiType;
    }

    public readonly dryRun!: pulumi.Output<boolean>;
    public readonly natGatewayId!: pulumi.Output<string>;
    public readonly natIp!: pulumi.Output<string>;
    public readonly natIpCidr!: pulumi.Output<string | undefined>;
    public readonly natIpCidrId!: pulumi.Output<string | undefined>;
    public readonly natIpDescription!: pulumi.Output<string | undefined>;
    public /*out*/ readonly natIpId!: pulumi.Output<string>;
    public readonly natIpName!: pulumi.Output<string | undefined>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.VpcNatIpTimeouts | undefined>;

    /**
     * Create a VpcNatIp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VpcNatIpArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VpcNatIpArgs | VpcNatIpState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VpcNatIpState | undefined;
            resourceInputs["dryRun"] = state ? state.dryRun : undefined;
            resourceInputs["natGatewayId"] = state ? state.natGatewayId : undefined;
            resourceInputs["natIp"] = state ? state.natIp : undefined;
            resourceInputs["natIpCidr"] = state ? state.natIpCidr : undefined;
            resourceInputs["natIpCidrId"] = state ? state.natIpCidrId : undefined;
            resourceInputs["natIpDescription"] = state ? state.natIpDescription : undefined;
            resourceInputs["natIpId"] = state ? state.natIpId : undefined;
            resourceInputs["natIpName"] = state ? state.natIpName : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as VpcNatIpArgs | undefined;
            if ((!args || args.natGatewayId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'natGatewayId'");
            }
            resourceInputs["dryRun"] = args ? args.dryRun : undefined;
            resourceInputs["natGatewayId"] = args ? args.natGatewayId : undefined;
            resourceInputs["natIp"] = args ? args.natIp : undefined;
            resourceInputs["natIpCidr"] = args ? args.natIpCidr : undefined;
            resourceInputs["natIpCidrId"] = args ? args.natIpCidrId : undefined;
            resourceInputs["natIpDescription"] = args ? args.natIpDescription : undefined;
            resourceInputs["natIpName"] = args ? args.natIpName : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["natIpId"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VpcNatIp.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VpcNatIp resources.
 */
export interface VpcNatIpState {
    dryRun?: pulumi.Input<boolean>;
    natGatewayId?: pulumi.Input<string>;
    natIp?: pulumi.Input<string>;
    natIpCidr?: pulumi.Input<string>;
    natIpCidrId?: pulumi.Input<string>;
    natIpDescription?: pulumi.Input<string>;
    natIpId?: pulumi.Input<string>;
    natIpName?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.VpcNatIpTimeouts>;
}

/**
 * The set of arguments for constructing a VpcNatIp resource.
 */
export interface VpcNatIpArgs {
    dryRun?: pulumi.Input<boolean>;
    natGatewayId: pulumi.Input<string>;
    natIp?: pulumi.Input<string>;
    natIpCidr?: pulumi.Input<string>;
    natIpCidrId?: pulumi.Input<string>;
    natIpDescription?: pulumi.Input<string>;
    natIpName?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.VpcNatIpTimeouts>;
}
