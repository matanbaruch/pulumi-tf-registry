// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Ec2SecurityGroup extends pulumi.CustomResource {
    /**
     * Get an existing Ec2SecurityGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Ec2SecurityGroupState, opts?: pulumi.CustomResourceOptions): Ec2SecurityGroup {
        return new Ec2SecurityGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/ec2SecurityGroup:Ec2SecurityGroup';

    /**
     * Returns true if the given object is an instance of Ec2SecurityGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Ec2SecurityGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Ec2SecurityGroup.__pulumiType;
    }

    /**
     * A description for the security group.
     */
    public readonly groupDescription!: pulumi.Output<string>;
    /**
     * The group ID of the specified security group.
     */
    public /*out*/ readonly groupId!: pulumi.Output<string>;
    /**
     * The name of the security group.
     */
    public readonly groupName!: pulumi.Output<string>;
    /**
     * [VPC only] The outbound rules associated with the security group. There is a short interruption during which you cannot
     * connect to the security group.
     */
    public readonly securityGroupEgresses!: pulumi.Output<outputs.Ec2SecurityGroupSecurityGroupEgress[]>;
    /**
     * The group name or group ID depending on whether the SG is created in default or specific VPC
     */
    public /*out*/ readonly securityGroupId!: pulumi.Output<string>;
    /**
     * The inbound rules associated with the security group. There is a short interruption during which you cannot connect to
     * the security group.
     */
    public readonly securityGroupIngresses!: pulumi.Output<outputs.Ec2SecurityGroupSecurityGroupIngress[]>;
    /**
     * Any tags assigned to the security group.
     */
    public readonly tags!: pulumi.Output<outputs.Ec2SecurityGroupTag[]>;
    /**
     * The ID of the VPC for the security group.
     */
    public readonly vpcId!: pulumi.Output<string>;

    /**
     * Create a Ec2SecurityGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: Ec2SecurityGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Ec2SecurityGroupArgs | Ec2SecurityGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Ec2SecurityGroupState | undefined;
            resourceInputs["groupDescription"] = state ? state.groupDescription : undefined;
            resourceInputs["groupId"] = state ? state.groupId : undefined;
            resourceInputs["groupName"] = state ? state.groupName : undefined;
            resourceInputs["securityGroupEgresses"] = state ? state.securityGroupEgresses : undefined;
            resourceInputs["securityGroupId"] = state ? state.securityGroupId : undefined;
            resourceInputs["securityGroupIngresses"] = state ? state.securityGroupIngresses : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["vpcId"] = state ? state.vpcId : undefined;
        } else {
            const args = argsOrState as Ec2SecurityGroupArgs | undefined;
            if ((!args || args.groupDescription === undefined) && !opts.urn) {
                throw new Error("Missing required property 'groupDescription'");
            }
            resourceInputs["groupDescription"] = args ? args.groupDescription : undefined;
            resourceInputs["groupName"] = args ? args.groupName : undefined;
            resourceInputs["securityGroupEgresses"] = args ? args.securityGroupEgresses : undefined;
            resourceInputs["securityGroupIngresses"] = args ? args.securityGroupIngresses : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vpcId"] = args ? args.vpcId : undefined;
            resourceInputs["groupId"] = undefined /*out*/;
            resourceInputs["securityGroupId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Ec2SecurityGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Ec2SecurityGroup resources.
 */
export interface Ec2SecurityGroupState {
    /**
     * A description for the security group.
     */
    groupDescription?: pulumi.Input<string>;
    /**
     * The group ID of the specified security group.
     */
    groupId?: pulumi.Input<string>;
    /**
     * The name of the security group.
     */
    groupName?: pulumi.Input<string>;
    /**
     * [VPC only] The outbound rules associated with the security group. There is a short interruption during which you cannot
     * connect to the security group.
     */
    securityGroupEgresses?: pulumi.Input<pulumi.Input<inputs.Ec2SecurityGroupSecurityGroupEgress>[]>;
    /**
     * The group name or group ID depending on whether the SG is created in default or specific VPC
     */
    securityGroupId?: pulumi.Input<string>;
    /**
     * The inbound rules associated with the security group. There is a short interruption during which you cannot connect to
     * the security group.
     */
    securityGroupIngresses?: pulumi.Input<pulumi.Input<inputs.Ec2SecurityGroupSecurityGroupIngress>[]>;
    /**
     * Any tags assigned to the security group.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.Ec2SecurityGroupTag>[]>;
    /**
     * The ID of the VPC for the security group.
     */
    vpcId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Ec2SecurityGroup resource.
 */
export interface Ec2SecurityGroupArgs {
    /**
     * A description for the security group.
     */
    groupDescription: pulumi.Input<string>;
    /**
     * The name of the security group.
     */
    groupName?: pulumi.Input<string>;
    /**
     * [VPC only] The outbound rules associated with the security group. There is a short interruption during which you cannot
     * connect to the security group.
     */
    securityGroupEgresses?: pulumi.Input<pulumi.Input<inputs.Ec2SecurityGroupSecurityGroupEgress>[]>;
    /**
     * The inbound rules associated with the security group. There is a short interruption during which you cannot connect to
     * the security group.
     */
    securityGroupIngresses?: pulumi.Input<pulumi.Input<inputs.Ec2SecurityGroupSecurityGroupIngress>[]>;
    /**
     * Any tags assigned to the security group.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.Ec2SecurityGroupTag>[]>;
    /**
     * The ID of the VPC for the security group.
     */
    vpcId?: pulumi.Input<string>;
}
