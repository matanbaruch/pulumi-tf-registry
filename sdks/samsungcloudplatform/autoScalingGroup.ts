// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AutoScalingGroup extends pulumi.CustomResource {
    /**
     * Get an existing AutoScalingGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AutoScalingGroupState, opts?: pulumi.CustomResourceOptions): AutoScalingGroup {
        return new AutoScalingGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'samsungcloudplatform:index/autoScalingGroup:AutoScalingGroup';

    /**
     * Returns true if the given object is an instance of AutoScalingGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AutoScalingGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AutoScalingGroup.__pulumiType;
    }

    /**
     * Auto-Scaling Group ID
     */
    public /*out*/ readonly asgId!: pulumi.Output<string>;
    /**
     * Auto-Scaling Group name. (3 to 20 using English letters, numbers and -)
     */
    public readonly asgName!: pulumi.Output<string>;
    /**
     * Auto-Scaling Group state
     */
    public /*out*/ readonly asgState!: pulumi.Output<string>;
    /**
     * Availability zone name
     */
    public readonly availabilityZoneName!: pulumi.Output<string | undefined>;
    /**
     * Block ID
     */
    public /*out*/ readonly blockId!: pulumi.Output<string>;
    /**
     * The person who created the resource
     */
    public /*out*/ readonly createdBy!: pulumi.Output<string>;
    /**
     * Creation date
     */
    public /*out*/ readonly createdDt!: pulumi.Output<string>;
    /**
     * Desired server count
     */
    public readonly desiredServerCount!: pulumi.Output<number>;
    /**
     * Desired server count editable
     */
    public readonly desiredServerCountEditable!: pulumi.Output<boolean>;
    /**
     * DNS enabled
     */
    public /*out*/ readonly dnsEnabled!: pulumi.Output<boolean>;
    /**
     * File Storage ID
     */
    public readonly fileStorageId!: pulumi.Output<string | undefined>;
    /**
     * Is terminating
     */
    public /*out*/ readonly isTerminating!: pulumi.Output<boolean>;
    /**
     * Launch Configuration ID
     */
    public readonly lcId!: pulumi.Output<string>;
    /**
     * Launch Configuration name
     */
    public /*out*/ readonly lcName!: pulumi.Output<string>;
    /**
     * Max server count
     */
    public readonly maxServerCount!: pulumi.Output<number>;
    /**
     * Min server count
     */
    public readonly minServerCount!: pulumi.Output<number>;
    /**
     * The person who modified the resource
     */
    public /*out*/ readonly modifiedBy!: pulumi.Output<string>;
    /**
     * Modification date
     */
    public /*out*/ readonly modifiedDt!: pulumi.Output<string>;
    /**
     * Enable multi availability zone feature for this Auto-Scaling Group.
     */
    public readonly multiAvailabilityZoneEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * Project ID
     */
    public /*out*/ readonly projectId!: pulumi.Output<string>;
    /**
     * Security Group ID list
     */
    public readonly securityGroupIds!: pulumi.Output<string[]>;
    /**
     * Server name prefix. (3 to 26 characters, starts with a lowercase letter, and uses lowercase letters, numbers, and -)
     */
    public readonly serverNamePrefix!: pulumi.Output<string>;
    /**
     * Service ID
     */
    public /*out*/ readonly serviceId!: pulumi.Output<string>;
    /**
     * Service zone ID
     */
    public /*out*/ readonly serviceZoneId!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * VPC information
     */
    public readonly vpcInfo!: pulumi.Output<outputs.AutoScalingGroupVpcInfo>;

    /**
     * Create a AutoScalingGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AutoScalingGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AutoScalingGroupArgs | AutoScalingGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AutoScalingGroupState | undefined;
            resourceInputs["asgId"] = state ? state.asgId : undefined;
            resourceInputs["asgName"] = state ? state.asgName : undefined;
            resourceInputs["asgState"] = state ? state.asgState : undefined;
            resourceInputs["availabilityZoneName"] = state ? state.availabilityZoneName : undefined;
            resourceInputs["blockId"] = state ? state.blockId : undefined;
            resourceInputs["createdBy"] = state ? state.createdBy : undefined;
            resourceInputs["createdDt"] = state ? state.createdDt : undefined;
            resourceInputs["desiredServerCount"] = state ? state.desiredServerCount : undefined;
            resourceInputs["desiredServerCountEditable"] = state ? state.desiredServerCountEditable : undefined;
            resourceInputs["dnsEnabled"] = state ? state.dnsEnabled : undefined;
            resourceInputs["fileStorageId"] = state ? state.fileStorageId : undefined;
            resourceInputs["isTerminating"] = state ? state.isTerminating : undefined;
            resourceInputs["lcId"] = state ? state.lcId : undefined;
            resourceInputs["lcName"] = state ? state.lcName : undefined;
            resourceInputs["maxServerCount"] = state ? state.maxServerCount : undefined;
            resourceInputs["minServerCount"] = state ? state.minServerCount : undefined;
            resourceInputs["modifiedBy"] = state ? state.modifiedBy : undefined;
            resourceInputs["modifiedDt"] = state ? state.modifiedDt : undefined;
            resourceInputs["multiAvailabilityZoneEnabled"] = state ? state.multiAvailabilityZoneEnabled : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["securityGroupIds"] = state ? state.securityGroupIds : undefined;
            resourceInputs["serverNamePrefix"] = state ? state.serverNamePrefix : undefined;
            resourceInputs["serviceId"] = state ? state.serviceId : undefined;
            resourceInputs["serviceZoneId"] = state ? state.serviceZoneId : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["vpcInfo"] = state ? state.vpcInfo : undefined;
        } else {
            const args = argsOrState as AutoScalingGroupArgs | undefined;
            if ((!args || args.asgName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'asgName'");
            }
            if ((!args || args.desiredServerCount === undefined) && !opts.urn) {
                throw new Error("Missing required property 'desiredServerCount'");
            }
            if ((!args || args.desiredServerCountEditable === undefined) && !opts.urn) {
                throw new Error("Missing required property 'desiredServerCountEditable'");
            }
            if ((!args || args.lcId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'lcId'");
            }
            if ((!args || args.maxServerCount === undefined) && !opts.urn) {
                throw new Error("Missing required property 'maxServerCount'");
            }
            if ((!args || args.minServerCount === undefined) && !opts.urn) {
                throw new Error("Missing required property 'minServerCount'");
            }
            if ((!args || args.securityGroupIds === undefined) && !opts.urn) {
                throw new Error("Missing required property 'securityGroupIds'");
            }
            if ((!args || args.serverNamePrefix === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverNamePrefix'");
            }
            if ((!args || args.vpcInfo === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vpcInfo'");
            }
            resourceInputs["asgName"] = args ? args.asgName : undefined;
            resourceInputs["availabilityZoneName"] = args ? args.availabilityZoneName : undefined;
            resourceInputs["desiredServerCount"] = args ? args.desiredServerCount : undefined;
            resourceInputs["desiredServerCountEditable"] = args ? args.desiredServerCountEditable : undefined;
            resourceInputs["fileStorageId"] = args ? args.fileStorageId : undefined;
            resourceInputs["lcId"] = args ? args.lcId : undefined;
            resourceInputs["maxServerCount"] = args ? args.maxServerCount : undefined;
            resourceInputs["minServerCount"] = args ? args.minServerCount : undefined;
            resourceInputs["multiAvailabilityZoneEnabled"] = args ? args.multiAvailabilityZoneEnabled : undefined;
            resourceInputs["securityGroupIds"] = args ? args.securityGroupIds : undefined;
            resourceInputs["serverNamePrefix"] = args ? args.serverNamePrefix : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vpcInfo"] = args ? args.vpcInfo : undefined;
            resourceInputs["asgId"] = undefined /*out*/;
            resourceInputs["asgState"] = undefined /*out*/;
            resourceInputs["blockId"] = undefined /*out*/;
            resourceInputs["createdBy"] = undefined /*out*/;
            resourceInputs["createdDt"] = undefined /*out*/;
            resourceInputs["dnsEnabled"] = undefined /*out*/;
            resourceInputs["isTerminating"] = undefined /*out*/;
            resourceInputs["lcName"] = undefined /*out*/;
            resourceInputs["modifiedBy"] = undefined /*out*/;
            resourceInputs["modifiedDt"] = undefined /*out*/;
            resourceInputs["projectId"] = undefined /*out*/;
            resourceInputs["serviceId"] = undefined /*out*/;
            resourceInputs["serviceZoneId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AutoScalingGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AutoScalingGroup resources.
 */
export interface AutoScalingGroupState {
    /**
     * Auto-Scaling Group ID
     */
    asgId?: pulumi.Input<string>;
    /**
     * Auto-Scaling Group name. (3 to 20 using English letters, numbers and -)
     */
    asgName?: pulumi.Input<string>;
    /**
     * Auto-Scaling Group state
     */
    asgState?: pulumi.Input<string>;
    /**
     * Availability zone name
     */
    availabilityZoneName?: pulumi.Input<string>;
    /**
     * Block ID
     */
    blockId?: pulumi.Input<string>;
    /**
     * The person who created the resource
     */
    createdBy?: pulumi.Input<string>;
    /**
     * Creation date
     */
    createdDt?: pulumi.Input<string>;
    /**
     * Desired server count
     */
    desiredServerCount?: pulumi.Input<number>;
    /**
     * Desired server count editable
     */
    desiredServerCountEditable?: pulumi.Input<boolean>;
    /**
     * DNS enabled
     */
    dnsEnabled?: pulumi.Input<boolean>;
    /**
     * File Storage ID
     */
    fileStorageId?: pulumi.Input<string>;
    /**
     * Is terminating
     */
    isTerminating?: pulumi.Input<boolean>;
    /**
     * Launch Configuration ID
     */
    lcId?: pulumi.Input<string>;
    /**
     * Launch Configuration name
     */
    lcName?: pulumi.Input<string>;
    /**
     * Max server count
     */
    maxServerCount?: pulumi.Input<number>;
    /**
     * Min server count
     */
    minServerCount?: pulumi.Input<number>;
    /**
     * The person who modified the resource
     */
    modifiedBy?: pulumi.Input<string>;
    /**
     * Modification date
     */
    modifiedDt?: pulumi.Input<string>;
    /**
     * Enable multi availability zone feature for this Auto-Scaling Group.
     */
    multiAvailabilityZoneEnabled?: pulumi.Input<boolean>;
    /**
     * Project ID
     */
    projectId?: pulumi.Input<string>;
    /**
     * Security Group ID list
     */
    securityGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Server name prefix. (3 to 26 characters, starts with a lowercase letter, and uses lowercase letters, numbers, and -)
     */
    serverNamePrefix?: pulumi.Input<string>;
    /**
     * Service ID
     */
    serviceId?: pulumi.Input<string>;
    /**
     * Service zone ID
     */
    serviceZoneId?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * VPC information
     */
    vpcInfo?: pulumi.Input<inputs.AutoScalingGroupVpcInfo>;
}

/**
 * The set of arguments for constructing a AutoScalingGroup resource.
 */
export interface AutoScalingGroupArgs {
    /**
     * Auto-Scaling Group name. (3 to 20 using English letters, numbers and -)
     */
    asgName: pulumi.Input<string>;
    /**
     * Availability zone name
     */
    availabilityZoneName?: pulumi.Input<string>;
    /**
     * Desired server count
     */
    desiredServerCount: pulumi.Input<number>;
    /**
     * Desired server count editable
     */
    desiredServerCountEditable: pulumi.Input<boolean>;
    /**
     * File Storage ID
     */
    fileStorageId?: pulumi.Input<string>;
    /**
     * Launch Configuration ID
     */
    lcId: pulumi.Input<string>;
    /**
     * Max server count
     */
    maxServerCount: pulumi.Input<number>;
    /**
     * Min server count
     */
    minServerCount: pulumi.Input<number>;
    /**
     * Enable multi availability zone feature for this Auto-Scaling Group.
     */
    multiAvailabilityZoneEnabled?: pulumi.Input<boolean>;
    /**
     * Security Group ID list
     */
    securityGroupIds: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Server name prefix. (3 to 26 characters, starts with a lowercase letter, and uses lowercase letters, numbers, and -)
     */
    serverNamePrefix: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * VPC information
     */
    vpcInfo: pulumi.Input<inputs.AutoScalingGroupVpcInfo>;
}
