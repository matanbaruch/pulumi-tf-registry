// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class VpcPeering extends pulumi.CustomResource {
    /**
     * Get an existing VpcPeering resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VpcPeeringState, opts?: pulumi.CustomResourceOptions): VpcPeering {
        return new VpcPeering(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ncloud:index/vpcPeering:VpcPeering';

    /**
     * Returns true if the given object is an instance of VpcPeering.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VpcPeering {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VpcPeering.__pulumiType;
    }

    public readonly description!: pulumi.Output<string>;
    public /*out*/ readonly hasReverseVpcPeering!: pulumi.Output<boolean>;
    public /*out*/ readonly isBetweenAccounts!: pulumi.Output<boolean>;
    public readonly name!: pulumi.Output<string>;
    public readonly sourceVpcNo!: pulumi.Output<string>;
    public readonly targetVpcLoginId!: pulumi.Output<string>;
    public readonly targetVpcName!: pulumi.Output<string>;
    public readonly targetVpcNo!: pulumi.Output<string>;
    public /*out*/ readonly vpcPeeringNo!: pulumi.Output<string>;

    /**
     * Create a VpcPeering resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VpcPeeringArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VpcPeeringArgs | VpcPeeringState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VpcPeeringState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["hasReverseVpcPeering"] = state ? state.hasReverseVpcPeering : undefined;
            resourceInputs["isBetweenAccounts"] = state ? state.isBetweenAccounts : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["sourceVpcNo"] = state ? state.sourceVpcNo : undefined;
            resourceInputs["targetVpcLoginId"] = state ? state.targetVpcLoginId : undefined;
            resourceInputs["targetVpcName"] = state ? state.targetVpcName : undefined;
            resourceInputs["targetVpcNo"] = state ? state.targetVpcNo : undefined;
            resourceInputs["vpcPeeringNo"] = state ? state.vpcPeeringNo : undefined;
        } else {
            const args = argsOrState as VpcPeeringArgs | undefined;
            if ((!args || args.sourceVpcNo === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sourceVpcNo'");
            }
            if ((!args || args.targetVpcNo === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetVpcNo'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["sourceVpcNo"] = args ? args.sourceVpcNo : undefined;
            resourceInputs["targetVpcLoginId"] = args ? args.targetVpcLoginId : undefined;
            resourceInputs["targetVpcName"] = args ? args.targetVpcName : undefined;
            resourceInputs["targetVpcNo"] = args ? args.targetVpcNo : undefined;
            resourceInputs["hasReverseVpcPeering"] = undefined /*out*/;
            resourceInputs["isBetweenAccounts"] = undefined /*out*/;
            resourceInputs["vpcPeeringNo"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VpcPeering.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VpcPeering resources.
 */
export interface VpcPeeringState {
    description?: pulumi.Input<string>;
    hasReverseVpcPeering?: pulumi.Input<boolean>;
    isBetweenAccounts?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    sourceVpcNo?: pulumi.Input<string>;
    targetVpcLoginId?: pulumi.Input<string>;
    targetVpcName?: pulumi.Input<string>;
    targetVpcNo?: pulumi.Input<string>;
    vpcPeeringNo?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VpcPeering resource.
 */
export interface VpcPeeringArgs {
    description?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    sourceVpcNo: pulumi.Input<string>;
    targetVpcLoginId?: pulumi.Input<string>;
    targetVpcName?: pulumi.Input<string>;
    targetVpcNo: pulumi.Input<string>;
}
