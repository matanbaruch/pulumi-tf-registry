// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Ec2TransitGatewayRouteTablePropagation extends pulumi.CustomResource {
    /**
     * Get an existing Ec2TransitGatewayRouteTablePropagation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Ec2TransitGatewayRouteTablePropagationState, opts?: pulumi.CustomResourceOptions): Ec2TransitGatewayRouteTablePropagation {
        return new Ec2TransitGatewayRouteTablePropagation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/ec2TransitGatewayRouteTablePropagation:Ec2TransitGatewayRouteTablePropagation';

    /**
     * Returns true if the given object is an instance of Ec2TransitGatewayRouteTablePropagation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Ec2TransitGatewayRouteTablePropagation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Ec2TransitGatewayRouteTablePropagation.__pulumiType;
    }

    /**
     * The ID of transit gateway attachment.
     */
    public readonly transitGatewayAttachmentId!: pulumi.Output<string>;
    /**
     * The ID of transit gateway route table.
     */
    public readonly transitGatewayRouteTableId!: pulumi.Output<string>;

    /**
     * Create a Ec2TransitGatewayRouteTablePropagation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: Ec2TransitGatewayRouteTablePropagationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Ec2TransitGatewayRouteTablePropagationArgs | Ec2TransitGatewayRouteTablePropagationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Ec2TransitGatewayRouteTablePropagationState | undefined;
            resourceInputs["transitGatewayAttachmentId"] = state ? state.transitGatewayAttachmentId : undefined;
            resourceInputs["transitGatewayRouteTableId"] = state ? state.transitGatewayRouteTableId : undefined;
        } else {
            const args = argsOrState as Ec2TransitGatewayRouteTablePropagationArgs | undefined;
            if ((!args || args.transitGatewayAttachmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'transitGatewayAttachmentId'");
            }
            if ((!args || args.transitGatewayRouteTableId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'transitGatewayRouteTableId'");
            }
            resourceInputs["transitGatewayAttachmentId"] = args ? args.transitGatewayAttachmentId : undefined;
            resourceInputs["transitGatewayRouteTableId"] = args ? args.transitGatewayRouteTableId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Ec2TransitGatewayRouteTablePropagation.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Ec2TransitGatewayRouteTablePropagation resources.
 */
export interface Ec2TransitGatewayRouteTablePropagationState {
    /**
     * The ID of transit gateway attachment.
     */
    transitGatewayAttachmentId?: pulumi.Input<string>;
    /**
     * The ID of transit gateway route table.
     */
    transitGatewayRouteTableId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Ec2TransitGatewayRouteTablePropagation resource.
 */
export interface Ec2TransitGatewayRouteTablePropagationArgs {
    /**
     * The ID of transit gateway attachment.
     */
    transitGatewayAttachmentId: pulumi.Input<string>;
    /**
     * The ID of transit gateway route table.
     */
    transitGatewayRouteTableId: pulumi.Input<string>;
}
