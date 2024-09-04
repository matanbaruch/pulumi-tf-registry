// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class GroupSettings extends pulumi.CustomResource {
    /**
     * Get an existing GroupSettings resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GroupSettingsState, opts?: pulumi.CustomResourceOptions): GroupSettings {
        return new GroupSettings(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'gsuite:index/groupSettings:GroupSettings';

    /**
     * Returns true if the given object is an instance of GroupSettings.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GroupSettings {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GroupSettings.__pulumiType;
    }

    public readonly allowExternalMembers!: pulumi.Output<string | undefined>;
    public readonly allowGoogleCommunication!: pulumi.Output<string | undefined>;
    public readonly allowWebPosting!: pulumi.Output<string | undefined>;
    public readonly archiveOnly!: pulumi.Output<string | undefined>;
    public readonly customFooterText!: pulumi.Output<string | undefined>;
    public readonly customReplyTo!: pulumi.Output<string | undefined>;
    public /*out*/ readonly description!: pulumi.Output<string>;
    public readonly email!: pulumi.Output<string>;
    public readonly favoriteRepliesOnTop!: pulumi.Output<string | undefined>;
    public readonly includeCustomFooter!: pulumi.Output<string | undefined>;
    public readonly includeInGlobalAddressList!: pulumi.Output<string | undefined>;
    public /*out*/ readonly isArchived!: pulumi.Output<string>;
    public /*out*/ readonly kind!: pulumi.Output<string>;
    public readonly maxMessageBytes!: pulumi.Output<number | undefined>;
    public readonly membersCanPostAsTheGroup!: pulumi.Output<string | undefined>;
    public readonly messageDisplayFont!: pulumi.Output<string | undefined>;
    public readonly messageModerationLevel!: pulumi.Output<string | undefined>;
    public /*out*/ readonly name!: pulumi.Output<string>;
    public readonly primaryLanguage!: pulumi.Output<string | undefined>;
    public readonly replyTo!: pulumi.Output<string | undefined>;
    public readonly sendMessageDenyNotification!: pulumi.Output<string | undefined>;
    public readonly showInGroupDirectory!: pulumi.Output<string | undefined>;
    public readonly spamModerationLevel!: pulumi.Output<string | undefined>;
    public readonly whoCanAdd!: pulumi.Output<string | undefined>;
    public readonly whoCanAddReferences!: pulumi.Output<string | undefined>;
    public readonly whoCanApproveMembers!: pulumi.Output<string | undefined>;
    public readonly whoCanApproveMessages!: pulumi.Output<string | undefined>;
    public readonly whoCanAssignTopics!: pulumi.Output<string | undefined>;
    public readonly whoCanAssistContent!: pulumi.Output<string | undefined>;
    public readonly whoCanBanUsers!: pulumi.Output<string | undefined>;
    public readonly whoCanContactOwner!: pulumi.Output<string | undefined>;
    public readonly whoCanDeleteAnyPost!: pulumi.Output<string | undefined>;
    public readonly whoCanDeleteTopics!: pulumi.Output<string | undefined>;
    public readonly whoCanDiscoverGroup!: pulumi.Output<string | undefined>;
    public readonly whoCanEnterFreeFormTags!: pulumi.Output<string | undefined>;
    public readonly whoCanHideAbuse!: pulumi.Output<string | undefined>;
    public readonly whoCanInvite!: pulumi.Output<string | undefined>;
    public readonly whoCanJoin!: pulumi.Output<string | undefined>;
    public readonly whoCanLeaveGroup!: pulumi.Output<string | undefined>;
    public readonly whoCanLockTopics!: pulumi.Output<string | undefined>;
    public readonly whoCanMakeTopicsSticky!: pulumi.Output<string | undefined>;
    public readonly whoCanMarkDuplicate!: pulumi.Output<string | undefined>;
    public readonly whoCanMarkFavoriteReplyOnAnyTopic!: pulumi.Output<string | undefined>;
    public readonly whoCanMarkFavoriteReplyOnOwnTopic!: pulumi.Output<string | undefined>;
    public readonly whoCanMarkNoResponseNeeded!: pulumi.Output<string | undefined>;
    public readonly whoCanModerateContent!: pulumi.Output<string | undefined>;
    public readonly whoCanModerateMembers!: pulumi.Output<string | undefined>;
    public readonly whoCanModifyMembers!: pulumi.Output<string | undefined>;
    public readonly whoCanModifyTagsAndCategories!: pulumi.Output<string | undefined>;
    public readonly whoCanMoveTopicsIn!: pulumi.Output<string | undefined>;
    public readonly whoCanMoveTopicsOut!: pulumi.Output<string | undefined>;
    public readonly whoCanPostAnnouncements!: pulumi.Output<string | undefined>;
    public readonly whoCanPostMessage!: pulumi.Output<string | undefined>;
    public readonly whoCanTakeTopics!: pulumi.Output<string | undefined>;
    public readonly whoCanUnassignTopic!: pulumi.Output<string | undefined>;
    public readonly whoCanUnmarkFavoriteReplyOnAnyTopic!: pulumi.Output<string | undefined>;
    public readonly whoCanViewGroup!: pulumi.Output<string | undefined>;
    public readonly whoCanViewMembership!: pulumi.Output<string | undefined>;

    /**
     * Create a GroupSettings resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GroupSettingsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GroupSettingsArgs | GroupSettingsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GroupSettingsState | undefined;
            resourceInputs["allowExternalMembers"] = state ? state.allowExternalMembers : undefined;
            resourceInputs["allowGoogleCommunication"] = state ? state.allowGoogleCommunication : undefined;
            resourceInputs["allowWebPosting"] = state ? state.allowWebPosting : undefined;
            resourceInputs["archiveOnly"] = state ? state.archiveOnly : undefined;
            resourceInputs["customFooterText"] = state ? state.customFooterText : undefined;
            resourceInputs["customReplyTo"] = state ? state.customReplyTo : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["email"] = state ? state.email : undefined;
            resourceInputs["favoriteRepliesOnTop"] = state ? state.favoriteRepliesOnTop : undefined;
            resourceInputs["includeCustomFooter"] = state ? state.includeCustomFooter : undefined;
            resourceInputs["includeInGlobalAddressList"] = state ? state.includeInGlobalAddressList : undefined;
            resourceInputs["isArchived"] = state ? state.isArchived : undefined;
            resourceInputs["kind"] = state ? state.kind : undefined;
            resourceInputs["maxMessageBytes"] = state ? state.maxMessageBytes : undefined;
            resourceInputs["membersCanPostAsTheGroup"] = state ? state.membersCanPostAsTheGroup : undefined;
            resourceInputs["messageDisplayFont"] = state ? state.messageDisplayFont : undefined;
            resourceInputs["messageModerationLevel"] = state ? state.messageModerationLevel : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["primaryLanguage"] = state ? state.primaryLanguage : undefined;
            resourceInputs["replyTo"] = state ? state.replyTo : undefined;
            resourceInputs["sendMessageDenyNotification"] = state ? state.sendMessageDenyNotification : undefined;
            resourceInputs["showInGroupDirectory"] = state ? state.showInGroupDirectory : undefined;
            resourceInputs["spamModerationLevel"] = state ? state.spamModerationLevel : undefined;
            resourceInputs["whoCanAdd"] = state ? state.whoCanAdd : undefined;
            resourceInputs["whoCanAddReferences"] = state ? state.whoCanAddReferences : undefined;
            resourceInputs["whoCanApproveMembers"] = state ? state.whoCanApproveMembers : undefined;
            resourceInputs["whoCanApproveMessages"] = state ? state.whoCanApproveMessages : undefined;
            resourceInputs["whoCanAssignTopics"] = state ? state.whoCanAssignTopics : undefined;
            resourceInputs["whoCanAssistContent"] = state ? state.whoCanAssistContent : undefined;
            resourceInputs["whoCanBanUsers"] = state ? state.whoCanBanUsers : undefined;
            resourceInputs["whoCanContactOwner"] = state ? state.whoCanContactOwner : undefined;
            resourceInputs["whoCanDeleteAnyPost"] = state ? state.whoCanDeleteAnyPost : undefined;
            resourceInputs["whoCanDeleteTopics"] = state ? state.whoCanDeleteTopics : undefined;
            resourceInputs["whoCanDiscoverGroup"] = state ? state.whoCanDiscoverGroup : undefined;
            resourceInputs["whoCanEnterFreeFormTags"] = state ? state.whoCanEnterFreeFormTags : undefined;
            resourceInputs["whoCanHideAbuse"] = state ? state.whoCanHideAbuse : undefined;
            resourceInputs["whoCanInvite"] = state ? state.whoCanInvite : undefined;
            resourceInputs["whoCanJoin"] = state ? state.whoCanJoin : undefined;
            resourceInputs["whoCanLeaveGroup"] = state ? state.whoCanLeaveGroup : undefined;
            resourceInputs["whoCanLockTopics"] = state ? state.whoCanLockTopics : undefined;
            resourceInputs["whoCanMakeTopicsSticky"] = state ? state.whoCanMakeTopicsSticky : undefined;
            resourceInputs["whoCanMarkDuplicate"] = state ? state.whoCanMarkDuplicate : undefined;
            resourceInputs["whoCanMarkFavoriteReplyOnAnyTopic"] = state ? state.whoCanMarkFavoriteReplyOnAnyTopic : undefined;
            resourceInputs["whoCanMarkFavoriteReplyOnOwnTopic"] = state ? state.whoCanMarkFavoriteReplyOnOwnTopic : undefined;
            resourceInputs["whoCanMarkNoResponseNeeded"] = state ? state.whoCanMarkNoResponseNeeded : undefined;
            resourceInputs["whoCanModerateContent"] = state ? state.whoCanModerateContent : undefined;
            resourceInputs["whoCanModerateMembers"] = state ? state.whoCanModerateMembers : undefined;
            resourceInputs["whoCanModifyMembers"] = state ? state.whoCanModifyMembers : undefined;
            resourceInputs["whoCanModifyTagsAndCategories"] = state ? state.whoCanModifyTagsAndCategories : undefined;
            resourceInputs["whoCanMoveTopicsIn"] = state ? state.whoCanMoveTopicsIn : undefined;
            resourceInputs["whoCanMoveTopicsOut"] = state ? state.whoCanMoveTopicsOut : undefined;
            resourceInputs["whoCanPostAnnouncements"] = state ? state.whoCanPostAnnouncements : undefined;
            resourceInputs["whoCanPostMessage"] = state ? state.whoCanPostMessage : undefined;
            resourceInputs["whoCanTakeTopics"] = state ? state.whoCanTakeTopics : undefined;
            resourceInputs["whoCanUnassignTopic"] = state ? state.whoCanUnassignTopic : undefined;
            resourceInputs["whoCanUnmarkFavoriteReplyOnAnyTopic"] = state ? state.whoCanUnmarkFavoriteReplyOnAnyTopic : undefined;
            resourceInputs["whoCanViewGroup"] = state ? state.whoCanViewGroup : undefined;
            resourceInputs["whoCanViewMembership"] = state ? state.whoCanViewMembership : undefined;
        } else {
            const args = argsOrState as GroupSettingsArgs | undefined;
            if ((!args || args.email === undefined) && !opts.urn) {
                throw new Error("Missing required property 'email'");
            }
            resourceInputs["allowExternalMembers"] = args ? args.allowExternalMembers : undefined;
            resourceInputs["allowGoogleCommunication"] = args ? args.allowGoogleCommunication : undefined;
            resourceInputs["allowWebPosting"] = args ? args.allowWebPosting : undefined;
            resourceInputs["archiveOnly"] = args ? args.archiveOnly : undefined;
            resourceInputs["customFooterText"] = args ? args.customFooterText : undefined;
            resourceInputs["customReplyTo"] = args ? args.customReplyTo : undefined;
            resourceInputs["email"] = args ? args.email : undefined;
            resourceInputs["favoriteRepliesOnTop"] = args ? args.favoriteRepliesOnTop : undefined;
            resourceInputs["includeCustomFooter"] = args ? args.includeCustomFooter : undefined;
            resourceInputs["includeInGlobalAddressList"] = args ? args.includeInGlobalAddressList : undefined;
            resourceInputs["maxMessageBytes"] = args ? args.maxMessageBytes : undefined;
            resourceInputs["membersCanPostAsTheGroup"] = args ? args.membersCanPostAsTheGroup : undefined;
            resourceInputs["messageDisplayFont"] = args ? args.messageDisplayFont : undefined;
            resourceInputs["messageModerationLevel"] = args ? args.messageModerationLevel : undefined;
            resourceInputs["primaryLanguage"] = args ? args.primaryLanguage : undefined;
            resourceInputs["replyTo"] = args ? args.replyTo : undefined;
            resourceInputs["sendMessageDenyNotification"] = args ? args.sendMessageDenyNotification : undefined;
            resourceInputs["showInGroupDirectory"] = args ? args.showInGroupDirectory : undefined;
            resourceInputs["spamModerationLevel"] = args ? args.spamModerationLevel : undefined;
            resourceInputs["whoCanAdd"] = args ? args.whoCanAdd : undefined;
            resourceInputs["whoCanAddReferences"] = args ? args.whoCanAddReferences : undefined;
            resourceInputs["whoCanApproveMembers"] = args ? args.whoCanApproveMembers : undefined;
            resourceInputs["whoCanApproveMessages"] = args ? args.whoCanApproveMessages : undefined;
            resourceInputs["whoCanAssignTopics"] = args ? args.whoCanAssignTopics : undefined;
            resourceInputs["whoCanAssistContent"] = args ? args.whoCanAssistContent : undefined;
            resourceInputs["whoCanBanUsers"] = args ? args.whoCanBanUsers : undefined;
            resourceInputs["whoCanContactOwner"] = args ? args.whoCanContactOwner : undefined;
            resourceInputs["whoCanDeleteAnyPost"] = args ? args.whoCanDeleteAnyPost : undefined;
            resourceInputs["whoCanDeleteTopics"] = args ? args.whoCanDeleteTopics : undefined;
            resourceInputs["whoCanDiscoverGroup"] = args ? args.whoCanDiscoverGroup : undefined;
            resourceInputs["whoCanEnterFreeFormTags"] = args ? args.whoCanEnterFreeFormTags : undefined;
            resourceInputs["whoCanHideAbuse"] = args ? args.whoCanHideAbuse : undefined;
            resourceInputs["whoCanInvite"] = args ? args.whoCanInvite : undefined;
            resourceInputs["whoCanJoin"] = args ? args.whoCanJoin : undefined;
            resourceInputs["whoCanLeaveGroup"] = args ? args.whoCanLeaveGroup : undefined;
            resourceInputs["whoCanLockTopics"] = args ? args.whoCanLockTopics : undefined;
            resourceInputs["whoCanMakeTopicsSticky"] = args ? args.whoCanMakeTopicsSticky : undefined;
            resourceInputs["whoCanMarkDuplicate"] = args ? args.whoCanMarkDuplicate : undefined;
            resourceInputs["whoCanMarkFavoriteReplyOnAnyTopic"] = args ? args.whoCanMarkFavoriteReplyOnAnyTopic : undefined;
            resourceInputs["whoCanMarkFavoriteReplyOnOwnTopic"] = args ? args.whoCanMarkFavoriteReplyOnOwnTopic : undefined;
            resourceInputs["whoCanMarkNoResponseNeeded"] = args ? args.whoCanMarkNoResponseNeeded : undefined;
            resourceInputs["whoCanModerateContent"] = args ? args.whoCanModerateContent : undefined;
            resourceInputs["whoCanModerateMembers"] = args ? args.whoCanModerateMembers : undefined;
            resourceInputs["whoCanModifyMembers"] = args ? args.whoCanModifyMembers : undefined;
            resourceInputs["whoCanModifyTagsAndCategories"] = args ? args.whoCanModifyTagsAndCategories : undefined;
            resourceInputs["whoCanMoveTopicsIn"] = args ? args.whoCanMoveTopicsIn : undefined;
            resourceInputs["whoCanMoveTopicsOut"] = args ? args.whoCanMoveTopicsOut : undefined;
            resourceInputs["whoCanPostAnnouncements"] = args ? args.whoCanPostAnnouncements : undefined;
            resourceInputs["whoCanPostMessage"] = args ? args.whoCanPostMessage : undefined;
            resourceInputs["whoCanTakeTopics"] = args ? args.whoCanTakeTopics : undefined;
            resourceInputs["whoCanUnassignTopic"] = args ? args.whoCanUnassignTopic : undefined;
            resourceInputs["whoCanUnmarkFavoriteReplyOnAnyTopic"] = args ? args.whoCanUnmarkFavoriteReplyOnAnyTopic : undefined;
            resourceInputs["whoCanViewGroup"] = args ? args.whoCanViewGroup : undefined;
            resourceInputs["whoCanViewMembership"] = args ? args.whoCanViewMembership : undefined;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["isArchived"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(GroupSettings.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering GroupSettings resources.
 */
export interface GroupSettingsState {
    allowExternalMembers?: pulumi.Input<string>;
    allowGoogleCommunication?: pulumi.Input<string>;
    allowWebPosting?: pulumi.Input<string>;
    archiveOnly?: pulumi.Input<string>;
    customFooterText?: pulumi.Input<string>;
    customReplyTo?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    email?: pulumi.Input<string>;
    favoriteRepliesOnTop?: pulumi.Input<string>;
    includeCustomFooter?: pulumi.Input<string>;
    includeInGlobalAddressList?: pulumi.Input<string>;
    isArchived?: pulumi.Input<string>;
    kind?: pulumi.Input<string>;
    maxMessageBytes?: pulumi.Input<number>;
    membersCanPostAsTheGroup?: pulumi.Input<string>;
    messageDisplayFont?: pulumi.Input<string>;
    messageModerationLevel?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    primaryLanguage?: pulumi.Input<string>;
    replyTo?: pulumi.Input<string>;
    sendMessageDenyNotification?: pulumi.Input<string>;
    showInGroupDirectory?: pulumi.Input<string>;
    spamModerationLevel?: pulumi.Input<string>;
    whoCanAdd?: pulumi.Input<string>;
    whoCanAddReferences?: pulumi.Input<string>;
    whoCanApproveMembers?: pulumi.Input<string>;
    whoCanApproveMessages?: pulumi.Input<string>;
    whoCanAssignTopics?: pulumi.Input<string>;
    whoCanAssistContent?: pulumi.Input<string>;
    whoCanBanUsers?: pulumi.Input<string>;
    whoCanContactOwner?: pulumi.Input<string>;
    whoCanDeleteAnyPost?: pulumi.Input<string>;
    whoCanDeleteTopics?: pulumi.Input<string>;
    whoCanDiscoverGroup?: pulumi.Input<string>;
    whoCanEnterFreeFormTags?: pulumi.Input<string>;
    whoCanHideAbuse?: pulumi.Input<string>;
    whoCanInvite?: pulumi.Input<string>;
    whoCanJoin?: pulumi.Input<string>;
    whoCanLeaveGroup?: pulumi.Input<string>;
    whoCanLockTopics?: pulumi.Input<string>;
    whoCanMakeTopicsSticky?: pulumi.Input<string>;
    whoCanMarkDuplicate?: pulumi.Input<string>;
    whoCanMarkFavoriteReplyOnAnyTopic?: pulumi.Input<string>;
    whoCanMarkFavoriteReplyOnOwnTopic?: pulumi.Input<string>;
    whoCanMarkNoResponseNeeded?: pulumi.Input<string>;
    whoCanModerateContent?: pulumi.Input<string>;
    whoCanModerateMembers?: pulumi.Input<string>;
    whoCanModifyMembers?: pulumi.Input<string>;
    whoCanModifyTagsAndCategories?: pulumi.Input<string>;
    whoCanMoveTopicsIn?: pulumi.Input<string>;
    whoCanMoveTopicsOut?: pulumi.Input<string>;
    whoCanPostAnnouncements?: pulumi.Input<string>;
    whoCanPostMessage?: pulumi.Input<string>;
    whoCanTakeTopics?: pulumi.Input<string>;
    whoCanUnassignTopic?: pulumi.Input<string>;
    whoCanUnmarkFavoriteReplyOnAnyTopic?: pulumi.Input<string>;
    whoCanViewGroup?: pulumi.Input<string>;
    whoCanViewMembership?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a GroupSettings resource.
 */
export interface GroupSettingsArgs {
    allowExternalMembers?: pulumi.Input<string>;
    allowGoogleCommunication?: pulumi.Input<string>;
    allowWebPosting?: pulumi.Input<string>;
    archiveOnly?: pulumi.Input<string>;
    customFooterText?: pulumi.Input<string>;
    customReplyTo?: pulumi.Input<string>;
    email: pulumi.Input<string>;
    favoriteRepliesOnTop?: pulumi.Input<string>;
    includeCustomFooter?: pulumi.Input<string>;
    includeInGlobalAddressList?: pulumi.Input<string>;
    maxMessageBytes?: pulumi.Input<number>;
    membersCanPostAsTheGroup?: pulumi.Input<string>;
    messageDisplayFont?: pulumi.Input<string>;
    messageModerationLevel?: pulumi.Input<string>;
    primaryLanguage?: pulumi.Input<string>;
    replyTo?: pulumi.Input<string>;
    sendMessageDenyNotification?: pulumi.Input<string>;
    showInGroupDirectory?: pulumi.Input<string>;
    spamModerationLevel?: pulumi.Input<string>;
    whoCanAdd?: pulumi.Input<string>;
    whoCanAddReferences?: pulumi.Input<string>;
    whoCanApproveMembers?: pulumi.Input<string>;
    whoCanApproveMessages?: pulumi.Input<string>;
    whoCanAssignTopics?: pulumi.Input<string>;
    whoCanAssistContent?: pulumi.Input<string>;
    whoCanBanUsers?: pulumi.Input<string>;
    whoCanContactOwner?: pulumi.Input<string>;
    whoCanDeleteAnyPost?: pulumi.Input<string>;
    whoCanDeleteTopics?: pulumi.Input<string>;
    whoCanDiscoverGroup?: pulumi.Input<string>;
    whoCanEnterFreeFormTags?: pulumi.Input<string>;
    whoCanHideAbuse?: pulumi.Input<string>;
    whoCanInvite?: pulumi.Input<string>;
    whoCanJoin?: pulumi.Input<string>;
    whoCanLeaveGroup?: pulumi.Input<string>;
    whoCanLockTopics?: pulumi.Input<string>;
    whoCanMakeTopicsSticky?: pulumi.Input<string>;
    whoCanMarkDuplicate?: pulumi.Input<string>;
    whoCanMarkFavoriteReplyOnAnyTopic?: pulumi.Input<string>;
    whoCanMarkFavoriteReplyOnOwnTopic?: pulumi.Input<string>;
    whoCanMarkNoResponseNeeded?: pulumi.Input<string>;
    whoCanModerateContent?: pulumi.Input<string>;
    whoCanModerateMembers?: pulumi.Input<string>;
    whoCanModifyMembers?: pulumi.Input<string>;
    whoCanModifyTagsAndCategories?: pulumi.Input<string>;
    whoCanMoveTopicsIn?: pulumi.Input<string>;
    whoCanMoveTopicsOut?: pulumi.Input<string>;
    whoCanPostAnnouncements?: pulumi.Input<string>;
    whoCanPostMessage?: pulumi.Input<string>;
    whoCanTakeTopics?: pulumi.Input<string>;
    whoCanUnassignTopic?: pulumi.Input<string>;
    whoCanUnmarkFavoriteReplyOnAnyTopic?: pulumi.Input<string>;
    whoCanViewGroup?: pulumi.Input<string>;
    whoCanViewMembership?: pulumi.Input<string>;
}
