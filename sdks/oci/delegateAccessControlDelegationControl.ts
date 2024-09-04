// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DelegateAccessControlDelegationControl extends pulumi.CustomResource {
    /**
     * Get an existing DelegateAccessControlDelegationControl resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DelegateAccessControlDelegationControlState, opts?: pulumi.CustomResourceOptions): DelegateAccessControlDelegationControl {
        return new DelegateAccessControlDelegationControl(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/delegateAccessControlDelegationControl:DelegateAccessControlDelegationControl';

    /**
     * Returns true if the given object is an instance of DelegateAccessControlDelegationControl.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DelegateAccessControlDelegationControl {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DelegateAccessControlDelegationControl.__pulumiType;
    }

    public readonly compartmentId!: pulumi.Output<string>;
    public readonly definedTags!: pulumi.Output<{[key: string]: string}>;
    public readonly delegationSubscriptionIds!: pulumi.Output<string[]>;
    public readonly description!: pulumi.Output<string>;
    public readonly displayName!: pulumi.Output<string>;
    public readonly freeformTags!: pulumi.Output<{[key: string]: string}>;
    public readonly isAutoApproveDuringMaintenance!: pulumi.Output<boolean>;
    public /*out*/ readonly lifecycleStateDetails!: pulumi.Output<string>;
    public readonly notificationMessageFormat!: pulumi.Output<string>;
    public readonly notificationTopicId!: pulumi.Output<string>;
    public readonly numApprovalsRequired!: pulumi.Output<number>;
    public readonly preApprovedServiceProviderActionNames!: pulumi.Output<string[]>;
    public readonly resourceIds!: pulumi.Output<string[]>;
    public readonly resourceType!: pulumi.Output<string>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public /*out*/ readonly systemTags!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    public /*out*/ readonly timeDeleted!: pulumi.Output<string>;
    public /*out*/ readonly timeUpdated!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.DelegateAccessControlDelegationControlTimeouts | undefined>;
    public readonly vaultId!: pulumi.Output<string>;
    public readonly vaultKeyId!: pulumi.Output<string>;

    /**
     * Create a DelegateAccessControlDelegationControl resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DelegateAccessControlDelegationControlArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DelegateAccessControlDelegationControlArgs | DelegateAccessControlDelegationControlState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DelegateAccessControlDelegationControlState | undefined;
            resourceInputs["compartmentId"] = state ? state.compartmentId : undefined;
            resourceInputs["definedTags"] = state ? state.definedTags : undefined;
            resourceInputs["delegationSubscriptionIds"] = state ? state.delegationSubscriptionIds : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["freeformTags"] = state ? state.freeformTags : undefined;
            resourceInputs["isAutoApproveDuringMaintenance"] = state ? state.isAutoApproveDuringMaintenance : undefined;
            resourceInputs["lifecycleStateDetails"] = state ? state.lifecycleStateDetails : undefined;
            resourceInputs["notificationMessageFormat"] = state ? state.notificationMessageFormat : undefined;
            resourceInputs["notificationTopicId"] = state ? state.notificationTopicId : undefined;
            resourceInputs["numApprovalsRequired"] = state ? state.numApprovalsRequired : undefined;
            resourceInputs["preApprovedServiceProviderActionNames"] = state ? state.preApprovedServiceProviderActionNames : undefined;
            resourceInputs["resourceIds"] = state ? state.resourceIds : undefined;
            resourceInputs["resourceType"] = state ? state.resourceType : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["systemTags"] = state ? state.systemTags : undefined;
            resourceInputs["timeCreated"] = state ? state.timeCreated : undefined;
            resourceInputs["timeDeleted"] = state ? state.timeDeleted : undefined;
            resourceInputs["timeUpdated"] = state ? state.timeUpdated : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["vaultId"] = state ? state.vaultId : undefined;
            resourceInputs["vaultKeyId"] = state ? state.vaultKeyId : undefined;
        } else {
            const args = argsOrState as DelegateAccessControlDelegationControlArgs | undefined;
            if ((!args || args.compartmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'compartmentId'");
            }
            if ((!args || args.delegationSubscriptionIds === undefined) && !opts.urn) {
                throw new Error("Missing required property 'delegationSubscriptionIds'");
            }
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.notificationMessageFormat === undefined) && !opts.urn) {
                throw new Error("Missing required property 'notificationMessageFormat'");
            }
            if ((!args || args.notificationTopicId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'notificationTopicId'");
            }
            if ((!args || args.resourceIds === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceIds'");
            }
            if ((!args || args.resourceType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceType'");
            }
            resourceInputs["compartmentId"] = args ? args.compartmentId : undefined;
            resourceInputs["definedTags"] = args ? args.definedTags : undefined;
            resourceInputs["delegationSubscriptionIds"] = args ? args.delegationSubscriptionIds : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["freeformTags"] = args ? args.freeformTags : undefined;
            resourceInputs["isAutoApproveDuringMaintenance"] = args ? args.isAutoApproveDuringMaintenance : undefined;
            resourceInputs["notificationMessageFormat"] = args ? args.notificationMessageFormat : undefined;
            resourceInputs["notificationTopicId"] = args ? args.notificationTopicId : undefined;
            resourceInputs["numApprovalsRequired"] = args ? args.numApprovalsRequired : undefined;
            resourceInputs["preApprovedServiceProviderActionNames"] = args ? args.preApprovedServiceProviderActionNames : undefined;
            resourceInputs["resourceIds"] = args ? args.resourceIds : undefined;
            resourceInputs["resourceType"] = args ? args.resourceType : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["vaultId"] = args ? args.vaultId : undefined;
            resourceInputs["vaultKeyId"] = args ? args.vaultKeyId : undefined;
            resourceInputs["lifecycleStateDetails"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["systemTags"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["timeDeleted"] = undefined /*out*/;
            resourceInputs["timeUpdated"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DelegateAccessControlDelegationControl.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DelegateAccessControlDelegationControl resources.
 */
export interface DelegateAccessControlDelegationControlState {
    compartmentId?: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    delegationSubscriptionIds?: pulumi.Input<pulumi.Input<string>[]>;
    description?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    isAutoApproveDuringMaintenance?: pulumi.Input<boolean>;
    lifecycleStateDetails?: pulumi.Input<string>;
    notificationMessageFormat?: pulumi.Input<string>;
    notificationTopicId?: pulumi.Input<string>;
    numApprovalsRequired?: pulumi.Input<number>;
    preApprovedServiceProviderActionNames?: pulumi.Input<pulumi.Input<string>[]>;
    resourceIds?: pulumi.Input<pulumi.Input<string>[]>;
    resourceType?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    systemTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeCreated?: pulumi.Input<string>;
    timeDeleted?: pulumi.Input<string>;
    timeUpdated?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DelegateAccessControlDelegationControlTimeouts>;
    vaultId?: pulumi.Input<string>;
    vaultKeyId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DelegateAccessControlDelegationControl resource.
 */
export interface DelegateAccessControlDelegationControlArgs {
    compartmentId: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    delegationSubscriptionIds: pulumi.Input<pulumi.Input<string>[]>;
    description?: pulumi.Input<string>;
    displayName: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    isAutoApproveDuringMaintenance?: pulumi.Input<boolean>;
    notificationMessageFormat: pulumi.Input<string>;
    notificationTopicId: pulumi.Input<string>;
    numApprovalsRequired?: pulumi.Input<number>;
    preApprovedServiceProviderActionNames?: pulumi.Input<pulumi.Input<string>[]>;
    resourceIds: pulumi.Input<pulumi.Input<string>[]>;
    resourceType: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DelegateAccessControlDelegationControlTimeouts>;
    vaultId?: pulumi.Input<string>;
    vaultKeyId?: pulumi.Input<string>;
}
