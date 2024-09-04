// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation extends pulumi.CustomResource {
    /**
     * Get an existing Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociationState, opts?: pulumi.CustomResourceOptions): Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation {
        return new Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation:Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation';

    /**
     * Returns true if the given object is an instance of Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.__pulumiType;
    }

    /**
     * The ID of the local gateway.
     */
    public /*out*/ readonly localGatewayId!: pulumi.Output<string>;
    /**
     * The ARN of the local gateway route table.
     */
    public /*out*/ readonly localGatewayRouteTableArn!: pulumi.Output<string>;
    /**
     * The ID of the local gateway route table.
     */
    public readonly localGatewayRouteTableId!: pulumi.Output<string>;
    /**
     * The ID of the local gateway route table virtual interface group association.
     */
    public /*out*/ readonly localGatewayRouteTableVirtualInterfaceGroupAssociationId!: pulumi.Output<string>;
    /**
     * The ID of the local gateway route table virtual interface group.
     */
    public readonly localGatewayVirtualInterfaceGroupId!: pulumi.Output<string>;
    /**
     * The owner of the local gateway route table virtual interface group association.
     */
    public /*out*/ readonly ownerId!: pulumi.Output<string>;
    /**
     * The state of the local gateway route table virtual interface group association.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * The tags for the local gateway route table virtual interface group association.
     */
    public readonly tags!: pulumi.Output<outputs.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTag[]>;

    /**
     * Create a Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociationArgs | Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociationState | undefined;
            resourceInputs["localGatewayId"] = state ? state.localGatewayId : undefined;
            resourceInputs["localGatewayRouteTableArn"] = state ? state.localGatewayRouteTableArn : undefined;
            resourceInputs["localGatewayRouteTableId"] = state ? state.localGatewayRouteTableId : undefined;
            resourceInputs["localGatewayRouteTableVirtualInterfaceGroupAssociationId"] = state ? state.localGatewayRouteTableVirtualInterfaceGroupAssociationId : undefined;
            resourceInputs["localGatewayVirtualInterfaceGroupId"] = state ? state.localGatewayVirtualInterfaceGroupId : undefined;
            resourceInputs["ownerId"] = state ? state.ownerId : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociationArgs | undefined;
            if ((!args || args.localGatewayRouteTableId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'localGatewayRouteTableId'");
            }
            if ((!args || args.localGatewayVirtualInterfaceGroupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'localGatewayVirtualInterfaceGroupId'");
            }
            resourceInputs["localGatewayRouteTableId"] = args ? args.localGatewayRouteTableId : undefined;
            resourceInputs["localGatewayVirtualInterfaceGroupId"] = args ? args.localGatewayVirtualInterfaceGroupId : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["localGatewayId"] = undefined /*out*/;
            resourceInputs["localGatewayRouteTableArn"] = undefined /*out*/;
            resourceInputs["localGatewayRouteTableVirtualInterfaceGroupAssociationId"] = undefined /*out*/;
            resourceInputs["ownerId"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation resources.
 */
export interface Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociationState {
    /**
     * The ID of the local gateway.
     */
    localGatewayId?: pulumi.Input<string>;
    /**
     * The ARN of the local gateway route table.
     */
    localGatewayRouteTableArn?: pulumi.Input<string>;
    /**
     * The ID of the local gateway route table.
     */
    localGatewayRouteTableId?: pulumi.Input<string>;
    /**
     * The ID of the local gateway route table virtual interface group association.
     */
    localGatewayRouteTableVirtualInterfaceGroupAssociationId?: pulumi.Input<string>;
    /**
     * The ID of the local gateway route table virtual interface group.
     */
    localGatewayVirtualInterfaceGroupId?: pulumi.Input<string>;
    /**
     * The owner of the local gateway route table virtual interface group association.
     */
    ownerId?: pulumi.Input<string>;
    /**
     * The state of the local gateway route table virtual interface group association.
     */
    state?: pulumi.Input<string>;
    /**
     * The tags for the local gateway route table virtual interface group association.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTag>[]>;
}

/**
 * The set of arguments for constructing a Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociation resource.
 */
export interface Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociationArgs {
    /**
     * The ID of the local gateway route table.
     */
    localGatewayRouteTableId: pulumi.Input<string>;
    /**
     * The ID of the local gateway route table virtual interface group.
     */
    localGatewayVirtualInterfaceGroupId: pulumi.Input<string>;
    /**
     * The tags for the local gateway route table virtual interface group association.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.Ec2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTag>[]>;
}
