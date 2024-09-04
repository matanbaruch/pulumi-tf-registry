// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Ec2VerifiedAccessGroup extends pulumi.CustomResource {
    /**
     * Get an existing Ec2VerifiedAccessGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Ec2VerifiedAccessGroupState, opts?: pulumi.CustomResourceOptions): Ec2VerifiedAccessGroup {
        return new Ec2VerifiedAccessGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/ec2VerifiedAccessGroup:Ec2VerifiedAccessGroup';

    /**
     * Returns true if the given object is an instance of Ec2VerifiedAccessGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Ec2VerifiedAccessGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Ec2VerifiedAccessGroup.__pulumiType;
    }

    /**
     * Time this Verified Access Group was created.
     */
    public /*out*/ readonly creationTime!: pulumi.Output<string>;
    /**
     * A description for the AWS Verified Access group.
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * Time this Verified Access Group was last updated.
     */
    public /*out*/ readonly lastUpdatedTime!: pulumi.Output<string>;
    /**
     * The AWS account number that owns the group.
     */
    public /*out*/ readonly owner!: pulumi.Output<string>;
    /**
     * The AWS Verified Access policy document.
     */
    public readonly policyDocument!: pulumi.Output<string>;
    /**
     * The status of the Verified Access policy.
     */
    public readonly policyEnabled!: pulumi.Output<boolean>;
    /**
     * The configuration options for customer provided KMS encryption.
     */
    public readonly sseSpecification!: pulumi.Output<outputs.Ec2VerifiedAccessGroupSseSpecification>;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    public readonly tags!: pulumi.Output<outputs.Ec2VerifiedAccessGroupTag[]>;
    /**
     * The ARN of the Verified Access group.
     */
    public /*out*/ readonly verifiedAccessGroupArn!: pulumi.Output<string>;
    /**
     * The ID of the AWS Verified Access group.
     */
    public /*out*/ readonly verifiedAccessGroupId!: pulumi.Output<string>;
    /**
     * The ID of the AWS Verified Access instance.
     */
    public readonly verifiedAccessInstanceId!: pulumi.Output<string>;

    /**
     * Create a Ec2VerifiedAccessGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: Ec2VerifiedAccessGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Ec2VerifiedAccessGroupArgs | Ec2VerifiedAccessGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Ec2VerifiedAccessGroupState | undefined;
            resourceInputs["creationTime"] = state ? state.creationTime : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["lastUpdatedTime"] = state ? state.lastUpdatedTime : undefined;
            resourceInputs["owner"] = state ? state.owner : undefined;
            resourceInputs["policyDocument"] = state ? state.policyDocument : undefined;
            resourceInputs["policyEnabled"] = state ? state.policyEnabled : undefined;
            resourceInputs["sseSpecification"] = state ? state.sseSpecification : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["verifiedAccessGroupArn"] = state ? state.verifiedAccessGroupArn : undefined;
            resourceInputs["verifiedAccessGroupId"] = state ? state.verifiedAccessGroupId : undefined;
            resourceInputs["verifiedAccessInstanceId"] = state ? state.verifiedAccessInstanceId : undefined;
        } else {
            const args = argsOrState as Ec2VerifiedAccessGroupArgs | undefined;
            if ((!args || args.verifiedAccessInstanceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'verifiedAccessInstanceId'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["policyDocument"] = args ? args.policyDocument : undefined;
            resourceInputs["policyEnabled"] = args ? args.policyEnabled : undefined;
            resourceInputs["sseSpecification"] = args ? args.sseSpecification : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["verifiedAccessInstanceId"] = args ? args.verifiedAccessInstanceId : undefined;
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["lastUpdatedTime"] = undefined /*out*/;
            resourceInputs["owner"] = undefined /*out*/;
            resourceInputs["verifiedAccessGroupArn"] = undefined /*out*/;
            resourceInputs["verifiedAccessGroupId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Ec2VerifiedAccessGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Ec2VerifiedAccessGroup resources.
 */
export interface Ec2VerifiedAccessGroupState {
    /**
     * Time this Verified Access Group was created.
     */
    creationTime?: pulumi.Input<string>;
    /**
     * A description for the AWS Verified Access group.
     */
    description?: pulumi.Input<string>;
    /**
     * Time this Verified Access Group was last updated.
     */
    lastUpdatedTime?: pulumi.Input<string>;
    /**
     * The AWS account number that owns the group.
     */
    owner?: pulumi.Input<string>;
    /**
     * The AWS Verified Access policy document.
     */
    policyDocument?: pulumi.Input<string>;
    /**
     * The status of the Verified Access policy.
     */
    policyEnabled?: pulumi.Input<boolean>;
    /**
     * The configuration options for customer provided KMS encryption.
     */
    sseSpecification?: pulumi.Input<inputs.Ec2VerifiedAccessGroupSseSpecification>;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.Ec2VerifiedAccessGroupTag>[]>;
    /**
     * The ARN of the Verified Access group.
     */
    verifiedAccessGroupArn?: pulumi.Input<string>;
    /**
     * The ID of the AWS Verified Access group.
     */
    verifiedAccessGroupId?: pulumi.Input<string>;
    /**
     * The ID of the AWS Verified Access instance.
     */
    verifiedAccessInstanceId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Ec2VerifiedAccessGroup resource.
 */
export interface Ec2VerifiedAccessGroupArgs {
    /**
     * A description for the AWS Verified Access group.
     */
    description?: pulumi.Input<string>;
    /**
     * The AWS Verified Access policy document.
     */
    policyDocument?: pulumi.Input<string>;
    /**
     * The status of the Verified Access policy.
     */
    policyEnabled?: pulumi.Input<boolean>;
    /**
     * The configuration options for customer provided KMS encryption.
     */
    sseSpecification?: pulumi.Input<inputs.Ec2VerifiedAccessGroupSseSpecification>;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.Ec2VerifiedAccessGroupTag>[]>;
    /**
     * The ID of the AWS Verified Access instance.
     */
    verifiedAccessInstanceId: pulumi.Input<string>;
}
