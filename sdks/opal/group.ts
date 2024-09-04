// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Group extends pulumi.CustomResource {
    /**
     * Get an existing Group resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GroupState, opts?: pulumi.CustomResourceOptions): Group {
        return new Group(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'opal:index/group:Group';

    /**
     * Returns true if the given object is an instance of Group.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Group {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Group.__pulumiType;
    }

    /**
     * The ID of the owner of the group.
     */
    public readonly adminOwnerId!: pulumi.Output<string>;
    /**
     * The ID of the app for the group. Requires replacement if changed.
     */
    public readonly appId!: pulumi.Output<string>;
    /**
     * A description of the remote group.
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * The ID of the associated group binding.
     */
    public /*out*/ readonly groupBindingId!: pulumi.Output<string>;
    /**
     * A list of User IDs for the group leaders of the group
     */
    public readonly groupLeaderUserIds!: pulumi.Output<string[]>;
    /**
     * The type of the group. Requires replacement if changed. ; must be one of ["ACTIVE_DIRECTORY_GROUP", "AWS_SSO_GROUP",
     * "DUO_GROUP", "GIT_HUB_TEAM", "GIT_LAB_GROUP", "GOOGLE_GROUPS_GROUP", "LDAP_GROUP", "OKTA_GROUP", "OPAL_GROUP",
     * "AZURE_AD_SECURITY_GROUP", "AZURE_AD_MICROSOFT_365_GROUP"]
     */
    public readonly groupType!: pulumi.Output<string>;
    public readonly messageChannelIds!: pulumi.Output<string[]>;
    /**
     * The audit and reviewer message channels attached to the group.
     */
    public /*out*/ readonly messageChannels!: pulumi.Output<outputs.GroupMessageChannels>;
    /**
     * The name of the remote group.
     */
    public readonly name!: pulumi.Output<string>;
    public readonly onCallScheduleIds!: pulumi.Output<string[]>;
    /**
     * The on call schedules attached to the group.
     */
    public /*out*/ readonly oncallSchedules!: pulumi.Output<outputs.GroupOncallSchedules>;
    /**
     * Information that defines the remote group. This replaces the deprecated remote_id and metadata fields. Requires
     * replacement if changed.
     */
    public readonly remoteInfo!: pulumi.Output<outputs.GroupRemoteInfo>;
    /**
     * The name of the remote.
     */
    public /*out*/ readonly remoteName!: pulumi.Output<string>;
    /**
     * The request configuration list of the configuration template. If not provided, the default request configuration will be
     * used.
     */
    public readonly requestConfigurations!: pulumi.Output<outputs.GroupRequestConfiguration[]>;
    /**
     * A bool representing whether or not to require MFA for reviewers to approve requests for this group.
     */
    public readonly requireMfaToApprove!: pulumi.Output<boolean>;
    /**
     * The visibility level of the entity. must be one of ["GLOBAL", "LIMITED"]
     */
    public readonly visibility!: pulumi.Output<string>;
    public readonly visibilityGroupIds!: pulumi.Output<string[]>;

    /**
     * Create a Group resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GroupArgs | GroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GroupState | undefined;
            resourceInputs["adminOwnerId"] = state ? state.adminOwnerId : undefined;
            resourceInputs["appId"] = state ? state.appId : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["groupBindingId"] = state ? state.groupBindingId : undefined;
            resourceInputs["groupLeaderUserIds"] = state ? state.groupLeaderUserIds : undefined;
            resourceInputs["groupType"] = state ? state.groupType : undefined;
            resourceInputs["messageChannelIds"] = state ? state.messageChannelIds : undefined;
            resourceInputs["messageChannels"] = state ? state.messageChannels : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["onCallScheduleIds"] = state ? state.onCallScheduleIds : undefined;
            resourceInputs["oncallSchedules"] = state ? state.oncallSchedules : undefined;
            resourceInputs["remoteInfo"] = state ? state.remoteInfo : undefined;
            resourceInputs["remoteName"] = state ? state.remoteName : undefined;
            resourceInputs["requestConfigurations"] = state ? state.requestConfigurations : undefined;
            resourceInputs["requireMfaToApprove"] = state ? state.requireMfaToApprove : undefined;
            resourceInputs["visibility"] = state ? state.visibility : undefined;
            resourceInputs["visibilityGroupIds"] = state ? state.visibilityGroupIds : undefined;
        } else {
            const args = argsOrState as GroupArgs | undefined;
            if ((!args || args.appId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'appId'");
            }
            if ((!args || args.groupType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'groupType'");
            }
            if ((!args || args.messageChannelIds === undefined) && !opts.urn) {
                throw new Error("Missing required property 'messageChannelIds'");
            }
            if ((!args || args.onCallScheduleIds === undefined) && !opts.urn) {
                throw new Error("Missing required property 'onCallScheduleIds'");
            }
            if ((!args || args.requestConfigurations === undefined) && !opts.urn) {
                throw new Error("Missing required property 'requestConfigurations'");
            }
            if ((!args || args.visibility === undefined) && !opts.urn) {
                throw new Error("Missing required property 'visibility'");
            }
            resourceInputs["adminOwnerId"] = args ? args.adminOwnerId : undefined;
            resourceInputs["appId"] = args ? args.appId : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["groupLeaderUserIds"] = args ? args.groupLeaderUserIds : undefined;
            resourceInputs["groupType"] = args ? args.groupType : undefined;
            resourceInputs["messageChannelIds"] = args ? args.messageChannelIds : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["onCallScheduleIds"] = args ? args.onCallScheduleIds : undefined;
            resourceInputs["remoteInfo"] = args ? args.remoteInfo : undefined;
            resourceInputs["requestConfigurations"] = args ? args.requestConfigurations : undefined;
            resourceInputs["requireMfaToApprove"] = args ? args.requireMfaToApprove : undefined;
            resourceInputs["visibility"] = args ? args.visibility : undefined;
            resourceInputs["visibilityGroupIds"] = args ? args.visibilityGroupIds : undefined;
            resourceInputs["groupBindingId"] = undefined /*out*/;
            resourceInputs["messageChannels"] = undefined /*out*/;
            resourceInputs["oncallSchedules"] = undefined /*out*/;
            resourceInputs["remoteName"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Group.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Group resources.
 */
export interface GroupState {
    /**
     * The ID of the owner of the group.
     */
    adminOwnerId?: pulumi.Input<string>;
    /**
     * The ID of the app for the group. Requires replacement if changed.
     */
    appId?: pulumi.Input<string>;
    /**
     * A description of the remote group.
     */
    description?: pulumi.Input<string>;
    /**
     * The ID of the associated group binding.
     */
    groupBindingId?: pulumi.Input<string>;
    /**
     * A list of User IDs for the group leaders of the group
     */
    groupLeaderUserIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The type of the group. Requires replacement if changed. ; must be one of ["ACTIVE_DIRECTORY_GROUP", "AWS_SSO_GROUP",
     * "DUO_GROUP", "GIT_HUB_TEAM", "GIT_LAB_GROUP", "GOOGLE_GROUPS_GROUP", "LDAP_GROUP", "OKTA_GROUP", "OPAL_GROUP",
     * "AZURE_AD_SECURITY_GROUP", "AZURE_AD_MICROSOFT_365_GROUP"]
     */
    groupType?: pulumi.Input<string>;
    messageChannelIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The audit and reviewer message channels attached to the group.
     */
    messageChannels?: pulumi.Input<inputs.GroupMessageChannels>;
    /**
     * The name of the remote group.
     */
    name?: pulumi.Input<string>;
    onCallScheduleIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The on call schedules attached to the group.
     */
    oncallSchedules?: pulumi.Input<inputs.GroupOncallSchedules>;
    /**
     * Information that defines the remote group. This replaces the deprecated remote_id and metadata fields. Requires
     * replacement if changed.
     */
    remoteInfo?: pulumi.Input<inputs.GroupRemoteInfo>;
    /**
     * The name of the remote.
     */
    remoteName?: pulumi.Input<string>;
    /**
     * The request configuration list of the configuration template. If not provided, the default request configuration will be
     * used.
     */
    requestConfigurations?: pulumi.Input<pulumi.Input<inputs.GroupRequestConfiguration>[]>;
    /**
     * A bool representing whether or not to require MFA for reviewers to approve requests for this group.
     */
    requireMfaToApprove?: pulumi.Input<boolean>;
    /**
     * The visibility level of the entity. must be one of ["GLOBAL", "LIMITED"]
     */
    visibility?: pulumi.Input<string>;
    visibilityGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a Group resource.
 */
export interface GroupArgs {
    /**
     * The ID of the owner of the group.
     */
    adminOwnerId?: pulumi.Input<string>;
    /**
     * The ID of the app for the group. Requires replacement if changed.
     */
    appId: pulumi.Input<string>;
    /**
     * A description of the remote group.
     */
    description?: pulumi.Input<string>;
    /**
     * A list of User IDs for the group leaders of the group
     */
    groupLeaderUserIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The type of the group. Requires replacement if changed. ; must be one of ["ACTIVE_DIRECTORY_GROUP", "AWS_SSO_GROUP",
     * "DUO_GROUP", "GIT_HUB_TEAM", "GIT_LAB_GROUP", "GOOGLE_GROUPS_GROUP", "LDAP_GROUP", "OKTA_GROUP", "OPAL_GROUP",
     * "AZURE_AD_SECURITY_GROUP", "AZURE_AD_MICROSOFT_365_GROUP"]
     */
    groupType: pulumi.Input<string>;
    messageChannelIds: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the remote group.
     */
    name?: pulumi.Input<string>;
    onCallScheduleIds: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Information that defines the remote group. This replaces the deprecated remote_id and metadata fields. Requires
     * replacement if changed.
     */
    remoteInfo?: pulumi.Input<inputs.GroupRemoteInfo>;
    /**
     * The request configuration list of the configuration template. If not provided, the default request configuration will be
     * used.
     */
    requestConfigurations: pulumi.Input<pulumi.Input<inputs.GroupRequestConfiguration>[]>;
    /**
     * A bool representing whether or not to require MFA for reviewers to approve requests for this group.
     */
    requireMfaToApprove?: pulumi.Input<boolean>;
    /**
     * The visibility level of the entity. must be one of ["GLOBAL", "LIMITED"]
     */
    visibility: pulumi.Input<string>;
    visibilityGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
}
