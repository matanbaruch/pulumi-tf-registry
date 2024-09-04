// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Ec2TransitGatewayAttachment extends pulumi.CustomResource {
    /**
     * Get an existing Ec2TransitGatewayAttachment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Ec2TransitGatewayAttachmentState, opts?: pulumi.CustomResourceOptions): Ec2TransitGatewayAttachment {
        return new Ec2TransitGatewayAttachment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/ec2TransitGatewayAttachment:Ec2TransitGatewayAttachment';

    /**
     * Returns true if the given object is an instance of Ec2TransitGatewayAttachment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Ec2TransitGatewayAttachment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Ec2TransitGatewayAttachment.__pulumiType;
    }

    /**
     * The options for the transit gateway vpc attachment.
     */
    public readonly options!: pulumi.Output<outputs.Ec2TransitGatewayAttachmentOptions>;
    public readonly subnetIds!: pulumi.Output<string[]>;
    public readonly tags!: pulumi.Output<outputs.Ec2TransitGatewayAttachmentTag[]>;
    public /*out*/ readonly transitGatewayAttachmentId!: pulumi.Output<string>;
    public readonly transitGatewayId!: pulumi.Output<string>;
    public readonly vpcId!: pulumi.Output<string>;

    /**
     * Create a Ec2TransitGatewayAttachment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: Ec2TransitGatewayAttachmentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Ec2TransitGatewayAttachmentArgs | Ec2TransitGatewayAttachmentState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Ec2TransitGatewayAttachmentState | undefined;
            resourceInputs["options"] = state ? state.options : undefined;
            resourceInputs["subnetIds"] = state ? state.subnetIds : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["transitGatewayAttachmentId"] = state ? state.transitGatewayAttachmentId : undefined;
            resourceInputs["transitGatewayId"] = state ? state.transitGatewayId : undefined;
            resourceInputs["vpcId"] = state ? state.vpcId : undefined;
        } else {
            const args = argsOrState as Ec2TransitGatewayAttachmentArgs | undefined;
            if ((!args || args.subnetIds === undefined) && !opts.urn) {
                throw new Error("Missing required property 'subnetIds'");
            }
            if ((!args || args.transitGatewayId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'transitGatewayId'");
            }
            if ((!args || args.vpcId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vpcId'");
            }
            resourceInputs["options"] = args ? args.options : undefined;
            resourceInputs["subnetIds"] = args ? args.subnetIds : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["transitGatewayId"] = args ? args.transitGatewayId : undefined;
            resourceInputs["vpcId"] = args ? args.vpcId : undefined;
            resourceInputs["transitGatewayAttachmentId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Ec2TransitGatewayAttachment.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Ec2TransitGatewayAttachment resources.
 */
export interface Ec2TransitGatewayAttachmentState {
    /**
     * The options for the transit gateway vpc attachment.
     */
    options?: pulumi.Input<inputs.Ec2TransitGatewayAttachmentOptions>;
    subnetIds?: pulumi.Input<pulumi.Input<string>[]>;
    tags?: pulumi.Input<pulumi.Input<inputs.Ec2TransitGatewayAttachmentTag>[]>;
    transitGatewayAttachmentId?: pulumi.Input<string>;
    transitGatewayId?: pulumi.Input<string>;
    vpcId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Ec2TransitGatewayAttachment resource.
 */
export interface Ec2TransitGatewayAttachmentArgs {
    /**
     * The options for the transit gateway vpc attachment.
     */
    options?: pulumi.Input<inputs.Ec2TransitGatewayAttachmentOptions>;
    subnetIds: pulumi.Input<pulumi.Input<string>[]>;
    tags?: pulumi.Input<pulumi.Input<inputs.Ec2TransitGatewayAttachmentTag>[]>;
    transitGatewayId: pulumi.Input<string>;
    vpcId: pulumi.Input<string>;
}
