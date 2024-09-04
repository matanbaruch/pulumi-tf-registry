// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AutoscalingLaunchConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing AutoscalingLaunchConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AutoscalingLaunchConfigurationState, opts?: pulumi.CustomResourceOptions): AutoscalingLaunchConfiguration {
        return new AutoscalingLaunchConfiguration(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/autoscalingLaunchConfiguration:AutoscalingLaunchConfiguration';

    /**
     * Returns true if the given object is an instance of AutoscalingLaunchConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AutoscalingLaunchConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AutoscalingLaunchConfiguration.__pulumiType;
    }

    /**
     * For Auto Scaling groups that are running in a virtual private cloud (VPC), specifies whether to assign a public IP
     * address to the group's instances.
     */
    public readonly associatePublicIpAddress!: pulumi.Output<boolean>;
    /**
     * Specifies how block devices are exposed to the instance. You can specify virtual devices and EBS volumes.
     */
    public readonly blockDeviceMappings!: pulumi.Output<outputs.AutoscalingLaunchConfigurationBlockDeviceMapping[]>;
    /**
     * The ID of a ClassicLink-enabled VPC to link your EC2-Classic instances to.
     */
    public readonly classicLinkVpcId!: pulumi.Output<string>;
    /**
     * The IDs of one or more security groups for the VPC that you specified in the ClassicLinkVPCId property.
     */
    public readonly classicLinkVpcSecurityGroups!: pulumi.Output<string[]>;
    /**
     * Specifies whether the launch configuration is optimized for EBS I/O (true) or not (false).
     */
    public readonly ebsOptimized!: pulumi.Output<boolean>;
    /**
     * Provides the name or the Amazon Resource Name (ARN) of the instance profile associated with the IAM role for the
     * instance. The instance profile contains the IAM role.
     */
    public readonly iamInstanceProfile!: pulumi.Output<string>;
    /**
     * Provides the unique ID of the Amazon Machine Image (AMI) that was assigned during registration.
     */
    public readonly imageId!: pulumi.Output<string>;
    /**
     * The ID of the Amazon EC2 instance you want to use to create the launch configuration.
     */
    public readonly instanceId!: pulumi.Output<string>;
    /**
     * Controls whether instances in this group are launched with detailed (true) or basic (false) monitoring.
     */
    public readonly instanceMonitoring!: pulumi.Output<boolean>;
    /**
     * Specifies the instance type of the EC2 instance.
     */
    public readonly instanceType!: pulumi.Output<string>;
    /**
     * Provides the ID of the kernel associated with the EC2 AMI.
     */
    public readonly kernelId!: pulumi.Output<string>;
    /**
     * Provides the name of the EC2 key pair.
     */
    public readonly keyName!: pulumi.Output<string>;
    /**
     * The name of the launch configuration. This name must be unique per Region per account.
     */
    public readonly launchConfigurationName!: pulumi.Output<string>;
    /**
     * The metadata options for the instances.
     */
    public readonly metadataOptions!: pulumi.Output<outputs.AutoscalingLaunchConfigurationMetadataOptions>;
    /**
     * The tenancy of the instance, either default or dedicated.
     */
    public readonly placementTenancy!: pulumi.Output<string>;
    /**
     * The ID of the RAM disk to select.
     */
    public readonly ramDiskId!: pulumi.Output<string>;
    /**
     * A list that contains the security groups to assign to the instances in the Auto Scaling group.
     */
    public readonly securityGroups!: pulumi.Output<string[]>;
    /**
     * The maximum hourly price you are willing to pay for any Spot Instances launched to fulfill the request.
     */
    public readonly spotPrice!: pulumi.Output<string>;
    /**
     * The Base64-encoded user data to make available to the launched EC2 instances.
     */
    public readonly userData!: pulumi.Output<string>;

    /**
     * Create a AutoscalingLaunchConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AutoscalingLaunchConfigurationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AutoscalingLaunchConfigurationArgs | AutoscalingLaunchConfigurationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AutoscalingLaunchConfigurationState | undefined;
            resourceInputs["associatePublicIpAddress"] = state ? state.associatePublicIpAddress : undefined;
            resourceInputs["blockDeviceMappings"] = state ? state.blockDeviceMappings : undefined;
            resourceInputs["classicLinkVpcId"] = state ? state.classicLinkVpcId : undefined;
            resourceInputs["classicLinkVpcSecurityGroups"] = state ? state.classicLinkVpcSecurityGroups : undefined;
            resourceInputs["ebsOptimized"] = state ? state.ebsOptimized : undefined;
            resourceInputs["iamInstanceProfile"] = state ? state.iamInstanceProfile : undefined;
            resourceInputs["imageId"] = state ? state.imageId : undefined;
            resourceInputs["instanceId"] = state ? state.instanceId : undefined;
            resourceInputs["instanceMonitoring"] = state ? state.instanceMonitoring : undefined;
            resourceInputs["instanceType"] = state ? state.instanceType : undefined;
            resourceInputs["kernelId"] = state ? state.kernelId : undefined;
            resourceInputs["keyName"] = state ? state.keyName : undefined;
            resourceInputs["launchConfigurationName"] = state ? state.launchConfigurationName : undefined;
            resourceInputs["metadataOptions"] = state ? state.metadataOptions : undefined;
            resourceInputs["placementTenancy"] = state ? state.placementTenancy : undefined;
            resourceInputs["ramDiskId"] = state ? state.ramDiskId : undefined;
            resourceInputs["securityGroups"] = state ? state.securityGroups : undefined;
            resourceInputs["spotPrice"] = state ? state.spotPrice : undefined;
            resourceInputs["userData"] = state ? state.userData : undefined;
        } else {
            const args = argsOrState as AutoscalingLaunchConfigurationArgs | undefined;
            if ((!args || args.imageId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'imageId'");
            }
            if ((!args || args.instanceType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceType'");
            }
            resourceInputs["associatePublicIpAddress"] = args ? args.associatePublicIpAddress : undefined;
            resourceInputs["blockDeviceMappings"] = args ? args.blockDeviceMappings : undefined;
            resourceInputs["classicLinkVpcId"] = args ? args.classicLinkVpcId : undefined;
            resourceInputs["classicLinkVpcSecurityGroups"] = args ? args.classicLinkVpcSecurityGroups : undefined;
            resourceInputs["ebsOptimized"] = args ? args.ebsOptimized : undefined;
            resourceInputs["iamInstanceProfile"] = args ? args.iamInstanceProfile : undefined;
            resourceInputs["imageId"] = args ? args.imageId : undefined;
            resourceInputs["instanceId"] = args ? args.instanceId : undefined;
            resourceInputs["instanceMonitoring"] = args ? args.instanceMonitoring : undefined;
            resourceInputs["instanceType"] = args ? args.instanceType : undefined;
            resourceInputs["kernelId"] = args ? args.kernelId : undefined;
            resourceInputs["keyName"] = args ? args.keyName : undefined;
            resourceInputs["launchConfigurationName"] = args ? args.launchConfigurationName : undefined;
            resourceInputs["metadataOptions"] = args ? args.metadataOptions : undefined;
            resourceInputs["placementTenancy"] = args ? args.placementTenancy : undefined;
            resourceInputs["ramDiskId"] = args ? args.ramDiskId : undefined;
            resourceInputs["securityGroups"] = args ? args.securityGroups : undefined;
            resourceInputs["spotPrice"] = args ? args.spotPrice : undefined;
            resourceInputs["userData"] = args ? args.userData : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AutoscalingLaunchConfiguration.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AutoscalingLaunchConfiguration resources.
 */
export interface AutoscalingLaunchConfigurationState {
    /**
     * For Auto Scaling groups that are running in a virtual private cloud (VPC), specifies whether to assign a public IP
     * address to the group's instances.
     */
    associatePublicIpAddress?: pulumi.Input<boolean>;
    /**
     * Specifies how block devices are exposed to the instance. You can specify virtual devices and EBS volumes.
     */
    blockDeviceMappings?: pulumi.Input<pulumi.Input<inputs.AutoscalingLaunchConfigurationBlockDeviceMapping>[]>;
    /**
     * The ID of a ClassicLink-enabled VPC to link your EC2-Classic instances to.
     */
    classicLinkVpcId?: pulumi.Input<string>;
    /**
     * The IDs of one or more security groups for the VPC that you specified in the ClassicLinkVPCId property.
     */
    classicLinkVpcSecurityGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies whether the launch configuration is optimized for EBS I/O (true) or not (false).
     */
    ebsOptimized?: pulumi.Input<boolean>;
    /**
     * Provides the name or the Amazon Resource Name (ARN) of the instance profile associated with the IAM role for the
     * instance. The instance profile contains the IAM role.
     */
    iamInstanceProfile?: pulumi.Input<string>;
    /**
     * Provides the unique ID of the Amazon Machine Image (AMI) that was assigned during registration.
     */
    imageId?: pulumi.Input<string>;
    /**
     * The ID of the Amazon EC2 instance you want to use to create the launch configuration.
     */
    instanceId?: pulumi.Input<string>;
    /**
     * Controls whether instances in this group are launched with detailed (true) or basic (false) monitoring.
     */
    instanceMonitoring?: pulumi.Input<boolean>;
    /**
     * Specifies the instance type of the EC2 instance.
     */
    instanceType?: pulumi.Input<string>;
    /**
     * Provides the ID of the kernel associated with the EC2 AMI.
     */
    kernelId?: pulumi.Input<string>;
    /**
     * Provides the name of the EC2 key pair.
     */
    keyName?: pulumi.Input<string>;
    /**
     * The name of the launch configuration. This name must be unique per Region per account.
     */
    launchConfigurationName?: pulumi.Input<string>;
    /**
     * The metadata options for the instances.
     */
    metadataOptions?: pulumi.Input<inputs.AutoscalingLaunchConfigurationMetadataOptions>;
    /**
     * The tenancy of the instance, either default or dedicated.
     */
    placementTenancy?: pulumi.Input<string>;
    /**
     * The ID of the RAM disk to select.
     */
    ramDiskId?: pulumi.Input<string>;
    /**
     * A list that contains the security groups to assign to the instances in the Auto Scaling group.
     */
    securityGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The maximum hourly price you are willing to pay for any Spot Instances launched to fulfill the request.
     */
    spotPrice?: pulumi.Input<string>;
    /**
     * The Base64-encoded user data to make available to the launched EC2 instances.
     */
    userData?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AutoscalingLaunchConfiguration resource.
 */
export interface AutoscalingLaunchConfigurationArgs {
    /**
     * For Auto Scaling groups that are running in a virtual private cloud (VPC), specifies whether to assign a public IP
     * address to the group's instances.
     */
    associatePublicIpAddress?: pulumi.Input<boolean>;
    /**
     * Specifies how block devices are exposed to the instance. You can specify virtual devices and EBS volumes.
     */
    blockDeviceMappings?: pulumi.Input<pulumi.Input<inputs.AutoscalingLaunchConfigurationBlockDeviceMapping>[]>;
    /**
     * The ID of a ClassicLink-enabled VPC to link your EC2-Classic instances to.
     */
    classicLinkVpcId?: pulumi.Input<string>;
    /**
     * The IDs of one or more security groups for the VPC that you specified in the ClassicLinkVPCId property.
     */
    classicLinkVpcSecurityGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies whether the launch configuration is optimized for EBS I/O (true) or not (false).
     */
    ebsOptimized?: pulumi.Input<boolean>;
    /**
     * Provides the name or the Amazon Resource Name (ARN) of the instance profile associated with the IAM role for the
     * instance. The instance profile contains the IAM role.
     */
    iamInstanceProfile?: pulumi.Input<string>;
    /**
     * Provides the unique ID of the Amazon Machine Image (AMI) that was assigned during registration.
     */
    imageId: pulumi.Input<string>;
    /**
     * The ID of the Amazon EC2 instance you want to use to create the launch configuration.
     */
    instanceId?: pulumi.Input<string>;
    /**
     * Controls whether instances in this group are launched with detailed (true) or basic (false) monitoring.
     */
    instanceMonitoring?: pulumi.Input<boolean>;
    /**
     * Specifies the instance type of the EC2 instance.
     */
    instanceType: pulumi.Input<string>;
    /**
     * Provides the ID of the kernel associated with the EC2 AMI.
     */
    kernelId?: pulumi.Input<string>;
    /**
     * Provides the name of the EC2 key pair.
     */
    keyName?: pulumi.Input<string>;
    /**
     * The name of the launch configuration. This name must be unique per Region per account.
     */
    launchConfigurationName?: pulumi.Input<string>;
    /**
     * The metadata options for the instances.
     */
    metadataOptions?: pulumi.Input<inputs.AutoscalingLaunchConfigurationMetadataOptions>;
    /**
     * The tenancy of the instance, either default or dedicated.
     */
    placementTenancy?: pulumi.Input<string>;
    /**
     * The ID of the RAM disk to select.
     */
    ramDiskId?: pulumi.Input<string>;
    /**
     * A list that contains the security groups to assign to the instances in the Auto Scaling group.
     */
    securityGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The maximum hourly price you are willing to pay for any Spot Instances launched to fulfill the request.
     */
    spotPrice?: pulumi.Input<string>;
    /**
     * The Base64-encoded user data to make available to the launched EC2 instances.
     */
    userData?: pulumi.Input<string>;
}
