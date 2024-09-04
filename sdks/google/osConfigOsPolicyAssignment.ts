// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class OsConfigOsPolicyAssignment extends pulumi.CustomResource {
    /**
     * Get an existing OsConfigOsPolicyAssignment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OsConfigOsPolicyAssignmentState, opts?: pulumi.CustomResourceOptions): OsConfigOsPolicyAssignment {
        return new OsConfigOsPolicyAssignment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/osConfigOsPolicyAssignment:OsConfigOsPolicyAssignment';

    /**
     * Returns true if the given object is an instance of OsConfigOsPolicyAssignment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OsConfigOsPolicyAssignment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OsConfigOsPolicyAssignment.__pulumiType;
    }

    /**
     * Output only. Indicates that this revision has been successfully rolled out in this zone and new VMs will be assigned OS
     * policies from this revision. For a given OS policy assignment, there is only one revision with a value of 'true' for
     * this field.
     */
    public /*out*/ readonly baseline!: pulumi.Output<boolean>;
    /**
     * Output only. Indicates that this revision deletes the OS policy assignment.
     */
    public /*out*/ readonly deleted!: pulumi.Output<boolean>;
    /**
     * OS policy assignment description. Length of the description is limited to 1024 characters.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The etag for this OS policy assignment. If this is provided on update, it must match the server's etag.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Filter to select VMs.
     */
    public readonly instanceFilter!: pulumi.Output<outputs.OsConfigOsPolicyAssignmentInstanceFilter>;
    /**
     * The location for the resource
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * List of OS policies to be applied to the VMs.
     */
    public readonly osPolicies!: pulumi.Output<outputs.OsConfigOsPolicyAssignmentOsPolicy[]>;
    /**
     * The project for the resource
     */
    public readonly project!: pulumi.Output<string>;
    /**
     * Output only. Indicates that reconciliation is in progress for the revision. This value is 'true' when the
     * 'rollout_state' is one of: * IN_PROGRESS * CANCELLING
     */
    public /*out*/ readonly reconciling!: pulumi.Output<boolean>;
    /**
     * Output only. The timestamp that the revision was created.
     */
    public /*out*/ readonly revisionCreateTime!: pulumi.Output<string>;
    /**
     * Output only. The assignment revision ID A new revision is committed whenever a rollout is triggered for a OS policy
     * assignment
     */
    public /*out*/ readonly revisionId!: pulumi.Output<string>;
    /**
     * Rollout to deploy the OS policy assignment. A rollout is triggered in the following situations: 1) OSPolicyAssignment is
     * created. 2) OSPolicyAssignment is updated and the update contains changes to one of the following fields: -
     * instance_filter - os_policies 3) OSPolicyAssignment is deleted.
     */
    public readonly rollout!: pulumi.Output<outputs.OsConfigOsPolicyAssignmentRollout>;
    /**
     * Output only. OS policy assignment rollout state
     */
    public /*out*/ readonly rolloutState!: pulumi.Output<string>;
    /**
     * Set to true to skip awaiting rollout during resource creation and update.
     */
    public readonly skipAwaitRollout!: pulumi.Output<boolean | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.OsConfigOsPolicyAssignmentTimeouts | undefined>;
    /**
     * Output only. Server generated unique id for the OS policy assignment resource.
     */
    public /*out*/ readonly uid!: pulumi.Output<string>;

    /**
     * Create a OsConfigOsPolicyAssignment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OsConfigOsPolicyAssignmentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: OsConfigOsPolicyAssignmentArgs | OsConfigOsPolicyAssignmentState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as OsConfigOsPolicyAssignmentState | undefined;
            resourceInputs["baseline"] = state ? state.baseline : undefined;
            resourceInputs["deleted"] = state ? state.deleted : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["etag"] = state ? state.etag : undefined;
            resourceInputs["instanceFilter"] = state ? state.instanceFilter : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["osPolicies"] = state ? state.osPolicies : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["reconciling"] = state ? state.reconciling : undefined;
            resourceInputs["revisionCreateTime"] = state ? state.revisionCreateTime : undefined;
            resourceInputs["revisionId"] = state ? state.revisionId : undefined;
            resourceInputs["rollout"] = state ? state.rollout : undefined;
            resourceInputs["rolloutState"] = state ? state.rolloutState : undefined;
            resourceInputs["skipAwaitRollout"] = state ? state.skipAwaitRollout : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["uid"] = state ? state.uid : undefined;
        } else {
            const args = argsOrState as OsConfigOsPolicyAssignmentArgs | undefined;
            if ((!args || args.instanceFilter === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceFilter'");
            }
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.osPolicies === undefined) && !opts.urn) {
                throw new Error("Missing required property 'osPolicies'");
            }
            if ((!args || args.rollout === undefined) && !opts.urn) {
                throw new Error("Missing required property 'rollout'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["instanceFilter"] = args ? args.instanceFilter : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["osPolicies"] = args ? args.osPolicies : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["rollout"] = args ? args.rollout : undefined;
            resourceInputs["skipAwaitRollout"] = args ? args.skipAwaitRollout : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["baseline"] = undefined /*out*/;
            resourceInputs["deleted"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["reconciling"] = undefined /*out*/;
            resourceInputs["revisionCreateTime"] = undefined /*out*/;
            resourceInputs["revisionId"] = undefined /*out*/;
            resourceInputs["rolloutState"] = undefined /*out*/;
            resourceInputs["uid"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(OsConfigOsPolicyAssignment.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering OsConfigOsPolicyAssignment resources.
 */
export interface OsConfigOsPolicyAssignmentState {
    /**
     * Output only. Indicates that this revision has been successfully rolled out in this zone and new VMs will be assigned OS
     * policies from this revision. For a given OS policy assignment, there is only one revision with a value of 'true' for
     * this field.
     */
    baseline?: pulumi.Input<boolean>;
    /**
     * Output only. Indicates that this revision deletes the OS policy assignment.
     */
    deleted?: pulumi.Input<boolean>;
    /**
     * OS policy assignment description. Length of the description is limited to 1024 characters.
     */
    description?: pulumi.Input<string>;
    /**
     * The etag for this OS policy assignment. If this is provided on update, it must match the server's etag.
     */
    etag?: pulumi.Input<string>;
    /**
     * Filter to select VMs.
     */
    instanceFilter?: pulumi.Input<inputs.OsConfigOsPolicyAssignmentInstanceFilter>;
    /**
     * The location for the resource
     */
    location?: pulumi.Input<string>;
    /**
     * Resource name.
     */
    name?: pulumi.Input<string>;
    /**
     * List of OS policies to be applied to the VMs.
     */
    osPolicies?: pulumi.Input<pulumi.Input<inputs.OsConfigOsPolicyAssignmentOsPolicy>[]>;
    /**
     * The project for the resource
     */
    project?: pulumi.Input<string>;
    /**
     * Output only. Indicates that reconciliation is in progress for the revision. This value is 'true' when the
     * 'rollout_state' is one of: * IN_PROGRESS * CANCELLING
     */
    reconciling?: pulumi.Input<boolean>;
    /**
     * Output only. The timestamp that the revision was created.
     */
    revisionCreateTime?: pulumi.Input<string>;
    /**
     * Output only. The assignment revision ID A new revision is committed whenever a rollout is triggered for a OS policy
     * assignment
     */
    revisionId?: pulumi.Input<string>;
    /**
     * Rollout to deploy the OS policy assignment. A rollout is triggered in the following situations: 1) OSPolicyAssignment is
     * created. 2) OSPolicyAssignment is updated and the update contains changes to one of the following fields: -
     * instance_filter - os_policies 3) OSPolicyAssignment is deleted.
     */
    rollout?: pulumi.Input<inputs.OsConfigOsPolicyAssignmentRollout>;
    /**
     * Output only. OS policy assignment rollout state
     */
    rolloutState?: pulumi.Input<string>;
    /**
     * Set to true to skip awaiting rollout during resource creation and update.
     */
    skipAwaitRollout?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.OsConfigOsPolicyAssignmentTimeouts>;
    /**
     * Output only. Server generated unique id for the OS policy assignment resource.
     */
    uid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a OsConfigOsPolicyAssignment resource.
 */
export interface OsConfigOsPolicyAssignmentArgs {
    /**
     * OS policy assignment description. Length of the description is limited to 1024 characters.
     */
    description?: pulumi.Input<string>;
    /**
     * Filter to select VMs.
     */
    instanceFilter: pulumi.Input<inputs.OsConfigOsPolicyAssignmentInstanceFilter>;
    /**
     * The location for the resource
     */
    location: pulumi.Input<string>;
    /**
     * Resource name.
     */
    name?: pulumi.Input<string>;
    /**
     * List of OS policies to be applied to the VMs.
     */
    osPolicies: pulumi.Input<pulumi.Input<inputs.OsConfigOsPolicyAssignmentOsPolicy>[]>;
    /**
     * The project for the resource
     */
    project?: pulumi.Input<string>;
    /**
     * Rollout to deploy the OS policy assignment. A rollout is triggered in the following situations: 1) OSPolicyAssignment is
     * created. 2) OSPolicyAssignment is updated and the update contains changes to one of the following fields: -
     * instance_filter - os_policies 3) OSPolicyAssignment is deleted.
     */
    rollout: pulumi.Input<inputs.OsConfigOsPolicyAssignmentRollout>;
    /**
     * Set to true to skip awaiting rollout during resource creation and update.
     */
    skipAwaitRollout?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.OsConfigOsPolicyAssignmentTimeouts>;
}
