// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class VpcIpamPreviewNextCidr extends pulumi.CustomResource {
    /**
     * Get an existing VpcIpamPreviewNextCidr resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VpcIpamPreviewNextCidrState, opts?: pulumi.CustomResourceOptions): VpcIpamPreviewNextCidr {
        return new VpcIpamPreviewNextCidr(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/vpcIpamPreviewNextCidr:VpcIpamPreviewNextCidr';

    /**
     * Returns true if the given object is an instance of VpcIpamPreviewNextCidr.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VpcIpamPreviewNextCidr {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VpcIpamPreviewNextCidr.__pulumiType;
    }

    public /*out*/ readonly cidr!: pulumi.Output<string>;
    public readonly disallowedCidrs!: pulumi.Output<string[] | undefined>;
    public readonly ipamPoolId!: pulumi.Output<string>;
    public readonly netmaskLength!: pulumi.Output<number | undefined>;

    /**
     * Create a VpcIpamPreviewNextCidr resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VpcIpamPreviewNextCidrArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VpcIpamPreviewNextCidrArgs | VpcIpamPreviewNextCidrState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VpcIpamPreviewNextCidrState | undefined;
            resourceInputs["cidr"] = state ? state.cidr : undefined;
            resourceInputs["disallowedCidrs"] = state ? state.disallowedCidrs : undefined;
            resourceInputs["ipamPoolId"] = state ? state.ipamPoolId : undefined;
            resourceInputs["netmaskLength"] = state ? state.netmaskLength : undefined;
        } else {
            const args = argsOrState as VpcIpamPreviewNextCidrArgs | undefined;
            if ((!args || args.ipamPoolId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ipamPoolId'");
            }
            resourceInputs["disallowedCidrs"] = args ? args.disallowedCidrs : undefined;
            resourceInputs["ipamPoolId"] = args ? args.ipamPoolId : undefined;
            resourceInputs["netmaskLength"] = args ? args.netmaskLength : undefined;
            resourceInputs["cidr"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VpcIpamPreviewNextCidr.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VpcIpamPreviewNextCidr resources.
 */
export interface VpcIpamPreviewNextCidrState {
    cidr?: pulumi.Input<string>;
    disallowedCidrs?: pulumi.Input<pulumi.Input<string>[]>;
    ipamPoolId?: pulumi.Input<string>;
    netmaskLength?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a VpcIpamPreviewNextCidr resource.
 */
export interface VpcIpamPreviewNextCidrArgs {
    disallowedCidrs?: pulumi.Input<pulumi.Input<string>[]>;
    ipamPoolId: pulumi.Input<string>;
    netmaskLength?: pulumi.Input<number>;
}
