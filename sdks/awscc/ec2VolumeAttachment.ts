// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Ec2VolumeAttachment extends pulumi.CustomResource {
    /**
     * Get an existing Ec2VolumeAttachment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Ec2VolumeAttachmentState, opts?: pulumi.CustomResourceOptions): Ec2VolumeAttachment {
        return new Ec2VolumeAttachment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/ec2VolumeAttachment:Ec2VolumeAttachment';

    /**
     * Returns true if the given object is an instance of Ec2VolumeAttachment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Ec2VolumeAttachment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Ec2VolumeAttachment.__pulumiType;
    }

    /**
     * The device name (for example, ``/dev/sdh`` or ``xvdh``).
     */
    public readonly device!: pulumi.Output<string>;
    /**
     * The ID of the instance to which the volume attaches. This value can be a reference to an
     * [AWS::EC2::Instance](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance.html)
     * resource, or it can be the physical ID of an existing EC2 instance.
     */
    public readonly instanceId!: pulumi.Output<string>;
    /**
     * The ID of the Amazon EBS volume. The volume and instance must be within the same Availability Zone. This value can be a
     * reference to an
     * [AWS::EC2::Volume](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ebs-volume.html)
     * resource, or it can be the volume ID of an existing Amazon EBS volume.
     */
    public readonly volumeId!: pulumi.Output<string>;

    /**
     * Create a Ec2VolumeAttachment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: Ec2VolumeAttachmentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Ec2VolumeAttachmentArgs | Ec2VolumeAttachmentState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Ec2VolumeAttachmentState | undefined;
            resourceInputs["device"] = state ? state.device : undefined;
            resourceInputs["instanceId"] = state ? state.instanceId : undefined;
            resourceInputs["volumeId"] = state ? state.volumeId : undefined;
        } else {
            const args = argsOrState as Ec2VolumeAttachmentArgs | undefined;
            if ((!args || args.instanceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceId'");
            }
            if ((!args || args.volumeId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'volumeId'");
            }
            resourceInputs["device"] = args ? args.device : undefined;
            resourceInputs["instanceId"] = args ? args.instanceId : undefined;
            resourceInputs["volumeId"] = args ? args.volumeId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Ec2VolumeAttachment.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Ec2VolumeAttachment resources.
 */
export interface Ec2VolumeAttachmentState {
    /**
     * The device name (for example, ``/dev/sdh`` or ``xvdh``).
     */
    device?: pulumi.Input<string>;
    /**
     * The ID of the instance to which the volume attaches. This value can be a reference to an
     * [AWS::EC2::Instance](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance.html)
     * resource, or it can be the physical ID of an existing EC2 instance.
     */
    instanceId?: pulumi.Input<string>;
    /**
     * The ID of the Amazon EBS volume. The volume and instance must be within the same Availability Zone. This value can be a
     * reference to an
     * [AWS::EC2::Volume](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ebs-volume.html)
     * resource, or it can be the volume ID of an existing Amazon EBS volume.
     */
    volumeId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Ec2VolumeAttachment resource.
 */
export interface Ec2VolumeAttachmentArgs {
    /**
     * The device name (for example, ``/dev/sdh`` or ``xvdh``).
     */
    device?: pulumi.Input<string>;
    /**
     * The ID of the instance to which the volume attaches. This value can be a reference to an
     * [AWS::EC2::Instance](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance.html)
     * resource, or it can be the physical ID of an existing EC2 instance.
     */
    instanceId: pulumi.Input<string>;
    /**
     * The ID of the Amazon EBS volume. The volume and instance must be within the same Availability Zone. This value can be a
     * reference to an
     * [AWS::EC2::Volume](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-ebs-volume.html)
     * resource, or it can be the volume ID of an existing Amazon EBS volume.
     */
    volumeId: pulumi.Input<string>;
}
