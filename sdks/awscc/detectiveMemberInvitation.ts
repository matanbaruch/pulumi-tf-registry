// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DetectiveMemberInvitation extends pulumi.CustomResource {
    /**
     * Get an existing DetectiveMemberInvitation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DetectiveMemberInvitationState, opts?: pulumi.CustomResourceOptions): DetectiveMemberInvitation {
        return new DetectiveMemberInvitation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/detectiveMemberInvitation:DetectiveMemberInvitation';

    /**
     * Returns true if the given object is an instance of DetectiveMemberInvitation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DetectiveMemberInvitation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DetectiveMemberInvitation.__pulumiType;
    }

    /**
     * When set to true, invitation emails are not sent to the member accounts. Member accounts must still accept the
     * invitation before they are added to the behavior graph. Updating this field has no effect.
     */
    public readonly disableEmailNotification!: pulumi.Output<boolean>;
    /**
     * The ARN of the graph to which the member account will be invited
     */
    public readonly graphArn!: pulumi.Output<string>;
    /**
     * The root email address for the account to be invited, for validation. Updating this field has no effect.
     */
    public readonly memberEmailAddress!: pulumi.Output<string>;
    /**
     * The AWS account ID to be invited to join the graph as a member
     */
    public readonly memberId!: pulumi.Output<string>;
    /**
     * A message to be included in the email invitation sent to the invited account. Updating this field has no effect.
     */
    public readonly message!: pulumi.Output<string>;

    /**
     * Create a DetectiveMemberInvitation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DetectiveMemberInvitationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DetectiveMemberInvitationArgs | DetectiveMemberInvitationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DetectiveMemberInvitationState | undefined;
            resourceInputs["disableEmailNotification"] = state ? state.disableEmailNotification : undefined;
            resourceInputs["graphArn"] = state ? state.graphArn : undefined;
            resourceInputs["memberEmailAddress"] = state ? state.memberEmailAddress : undefined;
            resourceInputs["memberId"] = state ? state.memberId : undefined;
            resourceInputs["message"] = state ? state.message : undefined;
        } else {
            const args = argsOrState as DetectiveMemberInvitationArgs | undefined;
            if ((!args || args.graphArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'graphArn'");
            }
            if ((!args || args.memberEmailAddress === undefined) && !opts.urn) {
                throw new Error("Missing required property 'memberEmailAddress'");
            }
            if ((!args || args.memberId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'memberId'");
            }
            resourceInputs["disableEmailNotification"] = args ? args.disableEmailNotification : undefined;
            resourceInputs["graphArn"] = args ? args.graphArn : undefined;
            resourceInputs["memberEmailAddress"] = args ? args.memberEmailAddress : undefined;
            resourceInputs["memberId"] = args ? args.memberId : undefined;
            resourceInputs["message"] = args ? args.message : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DetectiveMemberInvitation.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DetectiveMemberInvitation resources.
 */
export interface DetectiveMemberInvitationState {
    /**
     * When set to true, invitation emails are not sent to the member accounts. Member accounts must still accept the
     * invitation before they are added to the behavior graph. Updating this field has no effect.
     */
    disableEmailNotification?: pulumi.Input<boolean>;
    /**
     * The ARN of the graph to which the member account will be invited
     */
    graphArn?: pulumi.Input<string>;
    /**
     * The root email address for the account to be invited, for validation. Updating this field has no effect.
     */
    memberEmailAddress?: pulumi.Input<string>;
    /**
     * The AWS account ID to be invited to join the graph as a member
     */
    memberId?: pulumi.Input<string>;
    /**
     * A message to be included in the email invitation sent to the invited account. Updating this field has no effect.
     */
    message?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DetectiveMemberInvitation resource.
 */
export interface DetectiveMemberInvitationArgs {
    /**
     * When set to true, invitation emails are not sent to the member accounts. Member accounts must still accept the
     * invitation before they are added to the behavior graph. Updating this field has no effect.
     */
    disableEmailNotification?: pulumi.Input<boolean>;
    /**
     * The ARN of the graph to which the member account will be invited
     */
    graphArn: pulumi.Input<string>;
    /**
     * The root email address for the account to be invited, for validation. Updating this field has no effect.
     */
    memberEmailAddress: pulumi.Input<string>;
    /**
     * The AWS account ID to be invited to join the graph as a member
     */
    memberId: pulumi.Input<string>;
    /**
     * A message to be included in the email invitation sent to the invited account. Updating this field has no effect.
     */
    message?: pulumi.Input<string>;
}
