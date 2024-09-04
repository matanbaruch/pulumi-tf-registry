// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AnnouncementsServiceAnnouncementSubscription extends pulumi.CustomResource {
    /**
     * Get an existing AnnouncementsServiceAnnouncementSubscription resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AnnouncementsServiceAnnouncementSubscriptionState, opts?: pulumi.CustomResourceOptions): AnnouncementsServiceAnnouncementSubscription {
        return new AnnouncementsServiceAnnouncementSubscription(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/announcementsServiceAnnouncementSubscription:AnnouncementsServiceAnnouncementSubscription';

    /**
     * Returns true if the given object is an instance of AnnouncementsServiceAnnouncementSubscription.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AnnouncementsServiceAnnouncementSubscription {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AnnouncementsServiceAnnouncementSubscription.__pulumiType;
    }

    public readonly compartmentId!: pulumi.Output<string>;
    public readonly definedTags!: pulumi.Output<{[key: string]: string}>;
    public readonly description!: pulumi.Output<string>;
    public readonly displayName!: pulumi.Output<string>;
    public readonly filterGroups!: pulumi.Output<outputs.AnnouncementsServiceAnnouncementSubscriptionFilterGroups | undefined>;
    public readonly freeformTags!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly lifecycleDetails!: pulumi.Output<string>;
    public readonly onsTopicId!: pulumi.Output<string>;
    public readonly preferredLanguage!: pulumi.Output<string>;
    public readonly preferredTimeZone!: pulumi.Output<string>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public /*out*/ readonly systemTags!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    public /*out*/ readonly timeUpdated!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.AnnouncementsServiceAnnouncementSubscriptionTimeouts | undefined>;

    /**
     * Create a AnnouncementsServiceAnnouncementSubscription resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AnnouncementsServiceAnnouncementSubscriptionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AnnouncementsServiceAnnouncementSubscriptionArgs | AnnouncementsServiceAnnouncementSubscriptionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AnnouncementsServiceAnnouncementSubscriptionState | undefined;
            resourceInputs["compartmentId"] = state ? state.compartmentId : undefined;
            resourceInputs["definedTags"] = state ? state.definedTags : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["filterGroups"] = state ? state.filterGroups : undefined;
            resourceInputs["freeformTags"] = state ? state.freeformTags : undefined;
            resourceInputs["lifecycleDetails"] = state ? state.lifecycleDetails : undefined;
            resourceInputs["onsTopicId"] = state ? state.onsTopicId : undefined;
            resourceInputs["preferredLanguage"] = state ? state.preferredLanguage : undefined;
            resourceInputs["preferredTimeZone"] = state ? state.preferredTimeZone : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["systemTags"] = state ? state.systemTags : undefined;
            resourceInputs["timeCreated"] = state ? state.timeCreated : undefined;
            resourceInputs["timeUpdated"] = state ? state.timeUpdated : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as AnnouncementsServiceAnnouncementSubscriptionArgs | undefined;
            if ((!args || args.compartmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'compartmentId'");
            }
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.onsTopicId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'onsTopicId'");
            }
            resourceInputs["compartmentId"] = args ? args.compartmentId : undefined;
            resourceInputs["definedTags"] = args ? args.definedTags : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["filterGroups"] = args ? args.filterGroups : undefined;
            resourceInputs["freeformTags"] = args ? args.freeformTags : undefined;
            resourceInputs["onsTopicId"] = args ? args.onsTopicId : undefined;
            resourceInputs["preferredLanguage"] = args ? args.preferredLanguage : undefined;
            resourceInputs["preferredTimeZone"] = args ? args.preferredTimeZone : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["lifecycleDetails"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["systemTags"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["timeUpdated"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AnnouncementsServiceAnnouncementSubscription.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AnnouncementsServiceAnnouncementSubscription resources.
 */
export interface AnnouncementsServiceAnnouncementSubscriptionState {
    compartmentId?: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    description?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    filterGroups?: pulumi.Input<inputs.AnnouncementsServiceAnnouncementSubscriptionFilterGroups>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    lifecycleDetails?: pulumi.Input<string>;
    onsTopicId?: pulumi.Input<string>;
    preferredLanguage?: pulumi.Input<string>;
    preferredTimeZone?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    systemTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeCreated?: pulumi.Input<string>;
    timeUpdated?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.AnnouncementsServiceAnnouncementSubscriptionTimeouts>;
}

/**
 * The set of arguments for constructing a AnnouncementsServiceAnnouncementSubscription resource.
 */
export interface AnnouncementsServiceAnnouncementSubscriptionArgs {
    compartmentId: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    description?: pulumi.Input<string>;
    displayName: pulumi.Input<string>;
    filterGroups?: pulumi.Input<inputs.AnnouncementsServiceAnnouncementSubscriptionFilterGroups>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    onsTopicId: pulumi.Input<string>;
    preferredLanguage?: pulumi.Input<string>;
    preferredTimeZone?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.AnnouncementsServiceAnnouncementSubscriptionTimeouts>;
}
