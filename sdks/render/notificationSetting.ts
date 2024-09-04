// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class NotificationSetting extends pulumi.CustomResource {
    /**
     * Get an existing NotificationSetting resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NotificationSettingState, opts?: pulumi.CustomResourceOptions): NotificationSetting {
        return new NotificationSetting(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'render:index/notificationSetting:NotificationSetting';

    /**
     * Returns true if the given object is an instance of NotificationSetting.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NotificationSetting {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NotificationSetting.__pulumiType;
    }

    /**
     * Whether email notifications are enabled.
     */
    public readonly emailEnabled!: pulumi.Output<boolean>;
    /**
     * The types of notifications to send. Must be one of `all`, `failure`, or `none`.
     */
    public readonly notificationsToSend!: pulumi.Output<string>;
    /**
     * Whether notifications for preview environments are sent.
     */
    public readonly previewNotificationsEnabled!: pulumi.Output<boolean>;
    /**
     * Whether Slack notifications are enabled.
     */
    public /*out*/ readonly slackEnabled!: pulumi.Output<boolean>;

    /**
     * Create a NotificationSetting resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: NotificationSettingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NotificationSettingArgs | NotificationSettingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NotificationSettingState | undefined;
            resourceInputs["emailEnabled"] = state ? state.emailEnabled : undefined;
            resourceInputs["notificationsToSend"] = state ? state.notificationsToSend : undefined;
            resourceInputs["previewNotificationsEnabled"] = state ? state.previewNotificationsEnabled : undefined;
            resourceInputs["slackEnabled"] = state ? state.slackEnabled : undefined;
        } else {
            const args = argsOrState as NotificationSettingArgs | undefined;
            resourceInputs["emailEnabled"] = args ? args.emailEnabled : undefined;
            resourceInputs["notificationsToSend"] = args ? args.notificationsToSend : undefined;
            resourceInputs["previewNotificationsEnabled"] = args ? args.previewNotificationsEnabled : undefined;
            resourceInputs["slackEnabled"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NotificationSetting.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NotificationSetting resources.
 */
export interface NotificationSettingState {
    /**
     * Whether email notifications are enabled.
     */
    emailEnabled?: pulumi.Input<boolean>;
    /**
     * The types of notifications to send. Must be one of `all`, `failure`, or `none`.
     */
    notificationsToSend?: pulumi.Input<string>;
    /**
     * Whether notifications for preview environments are sent.
     */
    previewNotificationsEnabled?: pulumi.Input<boolean>;
    /**
     * Whether Slack notifications are enabled.
     */
    slackEnabled?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a NotificationSetting resource.
 */
export interface NotificationSettingArgs {
    /**
     * Whether email notifications are enabled.
     */
    emailEnabled?: pulumi.Input<boolean>;
    /**
     * The types of notifications to send. Must be one of `all`, `failure`, or `none`.
     */
    notificationsToSend?: pulumi.Input<string>;
    /**
     * Whether notifications for preview environments are sent.
     */
    previewNotificationsEnabled?: pulumi.Input<boolean>;
}
