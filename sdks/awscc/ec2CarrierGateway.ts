// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Ec2CarrierGateway extends pulumi.CustomResource {
    /**
     * Get an existing Ec2CarrierGateway resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Ec2CarrierGatewayState, opts?: pulumi.CustomResourceOptions): Ec2CarrierGateway {
        return new Ec2CarrierGateway(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/ec2CarrierGateway:Ec2CarrierGateway';

    /**
     * Returns true if the given object is an instance of Ec2CarrierGateway.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Ec2CarrierGateway {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Ec2CarrierGateway.__pulumiType;
    }

    /**
     * The ID of the carrier gateway.
     */
    public /*out*/ readonly carrierGatewayId!: pulumi.Output<string>;
    /**
     * The ID of the owner.
     */
    public /*out*/ readonly ownerId!: pulumi.Output<string>;
    /**
     * The state of the carrier gateway.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * The tags for the carrier gateway.
     */
    public readonly tags!: pulumi.Output<outputs.Ec2CarrierGatewayTag[]>;
    /**
     * The ID of the VPC.
     */
    public readonly vpcId!: pulumi.Output<string>;

    /**
     * Create a Ec2CarrierGateway resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: Ec2CarrierGatewayArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Ec2CarrierGatewayArgs | Ec2CarrierGatewayState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Ec2CarrierGatewayState | undefined;
            resourceInputs["carrierGatewayId"] = state ? state.carrierGatewayId : undefined;
            resourceInputs["ownerId"] = state ? state.ownerId : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["vpcId"] = state ? state.vpcId : undefined;
        } else {
            const args = argsOrState as Ec2CarrierGatewayArgs | undefined;
            if ((!args || args.vpcId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vpcId'");
            }
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vpcId"] = args ? args.vpcId : undefined;
            resourceInputs["carrierGatewayId"] = undefined /*out*/;
            resourceInputs["ownerId"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Ec2CarrierGateway.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Ec2CarrierGateway resources.
 */
export interface Ec2CarrierGatewayState {
    /**
     * The ID of the carrier gateway.
     */
    carrierGatewayId?: pulumi.Input<string>;
    /**
     * The ID of the owner.
     */
    ownerId?: pulumi.Input<string>;
    /**
     * The state of the carrier gateway.
     */
    state?: pulumi.Input<string>;
    /**
     * The tags for the carrier gateway.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.Ec2CarrierGatewayTag>[]>;
    /**
     * The ID of the VPC.
     */
    vpcId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Ec2CarrierGateway resource.
 */
export interface Ec2CarrierGatewayArgs {
    /**
     * The tags for the carrier gateway.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.Ec2CarrierGatewayTag>[]>;
    /**
     * The ID of the VPC.
     */
    vpcId: pulumi.Input<string>;
}
