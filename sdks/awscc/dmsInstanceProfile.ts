// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DmsInstanceProfile extends pulumi.CustomResource {
    /**
     * Get an existing DmsInstanceProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DmsInstanceProfileState, opts?: pulumi.CustomResourceOptions): DmsInstanceProfile {
        return new DmsInstanceProfile(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/dmsInstanceProfile:DmsInstanceProfile';

    /**
     * Returns true if the given object is an instance of DmsInstanceProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DmsInstanceProfile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DmsInstanceProfile.__pulumiType;
    }

    /**
     * The property describes an availability zone of the instance profile.
     */
    public readonly availabilityZone!: pulumi.Output<string>;
    /**
     * The optional description of the instance profile.
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * The property describes an ARN of the instance profile.
     */
    public /*out*/ readonly instanceProfileArn!: pulumi.Output<string>;
    /**
     * The property describes a creating time of the instance profile.
     */
    public /*out*/ readonly instanceProfileCreationTime!: pulumi.Output<string>;
    /**
     * The property describes an identifier for the instance profile. It is used for describing/deleting/modifying. Can be
     * name/arn
     */
    public readonly instanceProfileIdentifier!: pulumi.Output<string>;
    /**
     * The property describes a name for the instance profile.
     */
    public readonly instanceProfileName!: pulumi.Output<string>;
    /**
     * The property describes kms key arn for the instance profile.
     */
    public readonly kmsKeyArn!: pulumi.Output<string>;
    /**
     * The property describes a network type for the instance profile.
     */
    public readonly networkType!: pulumi.Output<string>;
    /**
     * The property describes the publicly accessible of the instance profile
     */
    public readonly publiclyAccessible!: pulumi.Output<boolean>;
    /**
     * The property describes a subnet group identifier for the instance profile.
     */
    public readonly subnetGroupIdentifier!: pulumi.Output<string>;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    public readonly tags!: pulumi.Output<outputs.DmsInstanceProfileTag[]>;
    /**
     * The property describes vps security groups for the instance profile.
     */
    public readonly vpcSecurityGroups!: pulumi.Output<string[]>;

    /**
     * Create a DmsInstanceProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: DmsInstanceProfileArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DmsInstanceProfileArgs | DmsInstanceProfileState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DmsInstanceProfileState | undefined;
            resourceInputs["availabilityZone"] = state ? state.availabilityZone : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["instanceProfileArn"] = state ? state.instanceProfileArn : undefined;
            resourceInputs["instanceProfileCreationTime"] = state ? state.instanceProfileCreationTime : undefined;
            resourceInputs["instanceProfileIdentifier"] = state ? state.instanceProfileIdentifier : undefined;
            resourceInputs["instanceProfileName"] = state ? state.instanceProfileName : undefined;
            resourceInputs["kmsKeyArn"] = state ? state.kmsKeyArn : undefined;
            resourceInputs["networkType"] = state ? state.networkType : undefined;
            resourceInputs["publiclyAccessible"] = state ? state.publiclyAccessible : undefined;
            resourceInputs["subnetGroupIdentifier"] = state ? state.subnetGroupIdentifier : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["vpcSecurityGroups"] = state ? state.vpcSecurityGroups : undefined;
        } else {
            const args = argsOrState as DmsInstanceProfileArgs | undefined;
            resourceInputs["availabilityZone"] = args ? args.availabilityZone : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["instanceProfileIdentifier"] = args ? args.instanceProfileIdentifier : undefined;
            resourceInputs["instanceProfileName"] = args ? args.instanceProfileName : undefined;
            resourceInputs["kmsKeyArn"] = args ? args.kmsKeyArn : undefined;
            resourceInputs["networkType"] = args ? args.networkType : undefined;
            resourceInputs["publiclyAccessible"] = args ? args.publiclyAccessible : undefined;
            resourceInputs["subnetGroupIdentifier"] = args ? args.subnetGroupIdentifier : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vpcSecurityGroups"] = args ? args.vpcSecurityGroups : undefined;
            resourceInputs["instanceProfileArn"] = undefined /*out*/;
            resourceInputs["instanceProfileCreationTime"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DmsInstanceProfile.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DmsInstanceProfile resources.
 */
export interface DmsInstanceProfileState {
    /**
     * The property describes an availability zone of the instance profile.
     */
    availabilityZone?: pulumi.Input<string>;
    /**
     * The optional description of the instance profile.
     */
    description?: pulumi.Input<string>;
    /**
     * The property describes an ARN of the instance profile.
     */
    instanceProfileArn?: pulumi.Input<string>;
    /**
     * The property describes a creating time of the instance profile.
     */
    instanceProfileCreationTime?: pulumi.Input<string>;
    /**
     * The property describes an identifier for the instance profile. It is used for describing/deleting/modifying. Can be
     * name/arn
     */
    instanceProfileIdentifier?: pulumi.Input<string>;
    /**
     * The property describes a name for the instance profile.
     */
    instanceProfileName?: pulumi.Input<string>;
    /**
     * The property describes kms key arn for the instance profile.
     */
    kmsKeyArn?: pulumi.Input<string>;
    /**
     * The property describes a network type for the instance profile.
     */
    networkType?: pulumi.Input<string>;
    /**
     * The property describes the publicly accessible of the instance profile
     */
    publiclyAccessible?: pulumi.Input<boolean>;
    /**
     * The property describes a subnet group identifier for the instance profile.
     */
    subnetGroupIdentifier?: pulumi.Input<string>;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.DmsInstanceProfileTag>[]>;
    /**
     * The property describes vps security groups for the instance profile.
     */
    vpcSecurityGroups?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a DmsInstanceProfile resource.
 */
export interface DmsInstanceProfileArgs {
    /**
     * The property describes an availability zone of the instance profile.
     */
    availabilityZone?: pulumi.Input<string>;
    /**
     * The optional description of the instance profile.
     */
    description?: pulumi.Input<string>;
    /**
     * The property describes an identifier for the instance profile. It is used for describing/deleting/modifying. Can be
     * name/arn
     */
    instanceProfileIdentifier?: pulumi.Input<string>;
    /**
     * The property describes a name for the instance profile.
     */
    instanceProfileName?: pulumi.Input<string>;
    /**
     * The property describes kms key arn for the instance profile.
     */
    kmsKeyArn?: pulumi.Input<string>;
    /**
     * The property describes a network type for the instance profile.
     */
    networkType?: pulumi.Input<string>;
    /**
     * The property describes the publicly accessible of the instance profile
     */
    publiclyAccessible?: pulumi.Input<boolean>;
    /**
     * The property describes a subnet group identifier for the instance profile.
     */
    subnetGroupIdentifier?: pulumi.Input<string>;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.DmsInstanceProfileTag>[]>;
    /**
     * The property describes vps security groups for the instance profile.
     */
    vpcSecurityGroups?: pulumi.Input<pulumi.Input<string>[]>;
}
