// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SupportappSlackChannelConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing SupportappSlackChannelConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SupportappSlackChannelConfigurationState, opts?: pulumi.CustomResourceOptions): SupportappSlackChannelConfiguration {
        return new SupportappSlackChannelConfiguration(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/supportappSlackChannelConfiguration:SupportappSlackChannelConfiguration';

    /**
     * Returns true if the given object is an instance of SupportappSlackChannelConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SupportappSlackChannelConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SupportappSlackChannelConfiguration.__pulumiType;
    }

    /**
     * The channel ID in Slack, which identifies a channel within a workspace.
     */
    public readonly channelId!: pulumi.Output<string>;
    /**
     * The channel name in Slack.
     */
    public readonly channelName!: pulumi.Output<string>;
    /**
     * The Amazon Resource Name (ARN) of an IAM role that grants the AWS Support App access to perform operations for AWS
     * services.
     */
    public readonly channelRoleArn!: pulumi.Output<string>;
    /**
     * Whether to notify when a correspondence is added to a case.
     */
    public readonly notifyOnAddCorrespondenceToCase!: pulumi.Output<boolean>;
    /**
     * The severity level of a support case that a customer wants to get notified for.
     */
    public readonly notifyOnCaseSeverity!: pulumi.Output<string>;
    /**
     * Whether to notify when a case is created or reopened.
     */
    public readonly notifyOnCreateOrReopenCase!: pulumi.Output<boolean>;
    /**
     * Whether to notify when a case is resolved.
     */
    public readonly notifyOnResolveCase!: pulumi.Output<boolean>;
    /**
     * The team ID in Slack, which uniquely identifies a workspace.
     */
    public readonly teamId!: pulumi.Output<string>;

    /**
     * Create a SupportappSlackChannelConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SupportappSlackChannelConfigurationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SupportappSlackChannelConfigurationArgs | SupportappSlackChannelConfigurationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SupportappSlackChannelConfigurationState | undefined;
            resourceInputs["channelId"] = state ? state.channelId : undefined;
            resourceInputs["channelName"] = state ? state.channelName : undefined;
            resourceInputs["channelRoleArn"] = state ? state.channelRoleArn : undefined;
            resourceInputs["notifyOnAddCorrespondenceToCase"] = state ? state.notifyOnAddCorrespondenceToCase : undefined;
            resourceInputs["notifyOnCaseSeverity"] = state ? state.notifyOnCaseSeverity : undefined;
            resourceInputs["notifyOnCreateOrReopenCase"] = state ? state.notifyOnCreateOrReopenCase : undefined;
            resourceInputs["notifyOnResolveCase"] = state ? state.notifyOnResolveCase : undefined;
            resourceInputs["teamId"] = state ? state.teamId : undefined;
        } else {
            const args = argsOrState as SupportappSlackChannelConfigurationArgs | undefined;
            if ((!args || args.channelId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'channelId'");
            }
            if ((!args || args.channelRoleArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'channelRoleArn'");
            }
            if ((!args || args.notifyOnCaseSeverity === undefined) && !opts.urn) {
                throw new Error("Missing required property 'notifyOnCaseSeverity'");
            }
            if ((!args || args.teamId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'teamId'");
            }
            resourceInputs["channelId"] = args ? args.channelId : undefined;
            resourceInputs["channelName"] = args ? args.channelName : undefined;
            resourceInputs["channelRoleArn"] = args ? args.channelRoleArn : undefined;
            resourceInputs["notifyOnAddCorrespondenceToCase"] = args ? args.notifyOnAddCorrespondenceToCase : undefined;
            resourceInputs["notifyOnCaseSeverity"] = args ? args.notifyOnCaseSeverity : undefined;
            resourceInputs["notifyOnCreateOrReopenCase"] = args ? args.notifyOnCreateOrReopenCase : undefined;
            resourceInputs["notifyOnResolveCase"] = args ? args.notifyOnResolveCase : undefined;
            resourceInputs["teamId"] = args ? args.teamId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SupportappSlackChannelConfiguration.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SupportappSlackChannelConfiguration resources.
 */
export interface SupportappSlackChannelConfigurationState {
    /**
     * The channel ID in Slack, which identifies a channel within a workspace.
     */
    channelId?: pulumi.Input<string>;
    /**
     * The channel name in Slack.
     */
    channelName?: pulumi.Input<string>;
    /**
     * The Amazon Resource Name (ARN) of an IAM role that grants the AWS Support App access to perform operations for AWS
     * services.
     */
    channelRoleArn?: pulumi.Input<string>;
    /**
     * Whether to notify when a correspondence is added to a case.
     */
    notifyOnAddCorrespondenceToCase?: pulumi.Input<boolean>;
    /**
     * The severity level of a support case that a customer wants to get notified for.
     */
    notifyOnCaseSeverity?: pulumi.Input<string>;
    /**
     * Whether to notify when a case is created or reopened.
     */
    notifyOnCreateOrReopenCase?: pulumi.Input<boolean>;
    /**
     * Whether to notify when a case is resolved.
     */
    notifyOnResolveCase?: pulumi.Input<boolean>;
    /**
     * The team ID in Slack, which uniquely identifies a workspace.
     */
    teamId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SupportappSlackChannelConfiguration resource.
 */
export interface SupportappSlackChannelConfigurationArgs {
    /**
     * The channel ID in Slack, which identifies a channel within a workspace.
     */
    channelId: pulumi.Input<string>;
    /**
     * The channel name in Slack.
     */
    channelName?: pulumi.Input<string>;
    /**
     * The Amazon Resource Name (ARN) of an IAM role that grants the AWS Support App access to perform operations for AWS
     * services.
     */
    channelRoleArn: pulumi.Input<string>;
    /**
     * Whether to notify when a correspondence is added to a case.
     */
    notifyOnAddCorrespondenceToCase?: pulumi.Input<boolean>;
    /**
     * The severity level of a support case that a customer wants to get notified for.
     */
    notifyOnCaseSeverity: pulumi.Input<string>;
    /**
     * Whether to notify when a case is created or reopened.
     */
    notifyOnCreateOrReopenCase?: pulumi.Input<boolean>;
    /**
     * Whether to notify when a case is resolved.
     */
    notifyOnResolveCase?: pulumi.Input<boolean>;
    /**
     * The team ID in Slack, which uniquely identifies a workspace.
     */
    teamId: pulumi.Input<string>;
}
