// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class FabricSwitchProfile extends pulumi.CustomResource {
    /**
     * Get an existing FabricSwitchProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FabricSwitchProfileState, opts?: pulumi.CustomResourceOptions): FabricSwitchProfile {
        return new FabricSwitchProfile(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'intersight:index/fabricSwitchProfile:FabricSwitchProfile';

    /**
     * Returns true if the given object is an instance of FabricSwitchProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FabricSwitchProfile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FabricSwitchProfile.__pulumiType;
    }

    /**
     * The Account ID for this managed object.
     */
    public readonly accountMoid!: pulumi.Output<string>;
    /**
     * User initiated action. Each profile type has its own supported actions. For HyperFlex cluster profile, the supported
     * actions are -- Validate, Deploy, Continue, Retry, Abort, Unassign For server profile, the support actions are -- Deploy,
     * Unassign.
     */
    public readonly action!: pulumi.Output<string | undefined>;
    public readonly actionParams!: pulumi.Output<outputs.FabricSwitchProfileActionParam[]>;
    public readonly additionalProperties!: pulumi.Output<string | undefined>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    public readonly ancestors!: pulumi.Output<outputs.FabricSwitchProfileAncestor[]>;
    /**
     * A reference to a networkElement resource. When the $expand query parameter is specified, the referenced resource is
     * returned inline.
     */
    public readonly assignedSwitches!: pulumi.Output<outputs.FabricSwitchProfileAssignedSwitch[]>;
    /**
     * A reference to a networkElement resource. When the $expand query parameter is specified, the referenced resource is
     * returned inline.
     */
    public readonly associatedSwitches!: pulumi.Output<outputs.FabricSwitchProfileAssociatedSwitch[]>;
    /**
     * The fully-qualified name of the instantiated, concrete type. This property is used as a discriminator to identify the
     * type of the payload when marshaling and unmarshaling data.
     */
    public readonly classId!: pulumi.Output<string | undefined>;
    /**
     * The configuration change state and results of the last change operation.
     */
    public readonly configChangeContexts!: pulumi.Output<outputs.FabricSwitchProfileConfigChangeContext[]>;
    /**
     * An array of relationships to fabricConfigChangeDetail resources.
     */
    public readonly configChangeDetails!: pulumi.Output<outputs.FabricSwitchProfileConfigChangeDetail[]>;
    /**
     * This lists the pending configuration changes at the summary level. Detailed changes are saved in configChangeDetails as
     * a separate object.
     */
    public readonly configChanges!: pulumi.Output<outputs.FabricSwitchProfileConfigChange[]>;
    /**
     * The configuration state and results of the last configuration operation.
     */
    public readonly configContexts!: pulumi.Output<outputs.FabricSwitchProfileConfigContext[]>;
    /**
     * A reference to a fabricConfigResult resource. When the $expand query parameter is specified, the referenced resource is
     * returned inline.
     */
    public readonly configResults!: pulumi.Output<outputs.FabricSwitchProfileConfigResult[]>;
    /**
     * The time when this managed object was created.
     */
    public readonly createTime!: pulumi.Output<string>;
    /**
     * Description of the profile.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The DomainGroup ID for this managed object.
     */
    public readonly domainGroupMoid!: pulumi.Output<string>;
    /**
     * The time when this managed object was last modified.
     */
    public readonly modTime!: pulumi.Output<string>;
    /**
     * The unique identifier of this Managed Object instance.
     */
    public readonly moid!: pulumi.Output<string>;
    /**
     * Name of the profile instance or profile template.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The fully-qualified name of the instantiated, concrete type. The value should be the same as the 'ClassId' property.
     */
    public readonly objectType!: pulumi.Output<string | undefined>;
    public readonly owners!: pulumi.Output<string[]>;
    /**
     * A reference to a moBaseMo resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    public readonly parents!: pulumi.Output<outputs.FabricSwitchProfileParent[]>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    public readonly permissionResources!: pulumi.Output<outputs.FabricSwitchProfilePermissionResource[]>;
    /**
     * An array of relationships to policyAbstractPolicy resources.
     */
    public readonly policyBuckets!: pulumi.Output<outputs.FabricSwitchProfilePolicyBucket[]>;
    /**
     * An array of relationships to workflowWorkflowInfo resources.
     */
    public readonly runningWorkflows!: pulumi.Output<outputs.FabricSwitchProfileRunningWorkflow[]>;
    public readonly scheduledActions!: pulumi.Output<outputs.FabricSwitchProfileScheduledAction[]>;
    /**
     * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs. Objects that are made
     * available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally
     * available to all end users or restricted to end users based on their license entitlement. Users can use this property to
     * differentiate the scope (global or a specific license tier) to which a shared MO belongs.
     */
    public readonly sharedScope!: pulumi.Output<string>;
    /**
     * A reference to a policyAbstractProfile resource. When the $expand query parameter is specified, the referenced resource
     * is returned inline.
     */
    public readonly srcTemplates!: pulumi.Output<outputs.FabricSwitchProfileSrcTemplate[]>;
    /**
     * A reference to a fabricSwitchClusterProfile resource. When the $expand query parameter is specified, the referenced
     * resource is returned inline.
     */
    public readonly switchClusterProfiles!: pulumi.Output<outputs.FabricSwitchProfileSwitchClusterProfile[]>;
    public readonly tags!: pulumi.Output<outputs.FabricSwitchProfileTag[]>;
    /**
     * Defines the type of the profile. Accepted values are instance or template. * `instance` - The profile defines the
     * configuration for a specific instance of a target.
     */
    public readonly type!: pulumi.Output<string | undefined>;
    /**
     * The versioning info for this managed object.
     */
    public readonly versionContexts!: pulumi.Output<outputs.FabricSwitchProfileVersionContext[]>;
    /**
     * This model object can trigger workflows. Use this option to wait for all running workflows to reach a complete state.
     */
    public readonly waitForCompletion!: pulumi.Output<boolean | undefined>;

    /**
     * Create a FabricSwitchProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: FabricSwitchProfileArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FabricSwitchProfileArgs | FabricSwitchProfileState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FabricSwitchProfileState | undefined;
            resourceInputs["accountMoid"] = state ? state.accountMoid : undefined;
            resourceInputs["action"] = state ? state.action : undefined;
            resourceInputs["actionParams"] = state ? state.actionParams : undefined;
            resourceInputs["additionalProperties"] = state ? state.additionalProperties : undefined;
            resourceInputs["ancestors"] = state ? state.ancestors : undefined;
            resourceInputs["assignedSwitches"] = state ? state.assignedSwitches : undefined;
            resourceInputs["associatedSwitches"] = state ? state.associatedSwitches : undefined;
            resourceInputs["classId"] = state ? state.classId : undefined;
            resourceInputs["configChangeContexts"] = state ? state.configChangeContexts : undefined;
            resourceInputs["configChangeDetails"] = state ? state.configChangeDetails : undefined;
            resourceInputs["configChanges"] = state ? state.configChanges : undefined;
            resourceInputs["configContexts"] = state ? state.configContexts : undefined;
            resourceInputs["configResults"] = state ? state.configResults : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["domainGroupMoid"] = state ? state.domainGroupMoid : undefined;
            resourceInputs["modTime"] = state ? state.modTime : undefined;
            resourceInputs["moid"] = state ? state.moid : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["objectType"] = state ? state.objectType : undefined;
            resourceInputs["owners"] = state ? state.owners : undefined;
            resourceInputs["parents"] = state ? state.parents : undefined;
            resourceInputs["permissionResources"] = state ? state.permissionResources : undefined;
            resourceInputs["policyBuckets"] = state ? state.policyBuckets : undefined;
            resourceInputs["runningWorkflows"] = state ? state.runningWorkflows : undefined;
            resourceInputs["scheduledActions"] = state ? state.scheduledActions : undefined;
            resourceInputs["sharedScope"] = state ? state.sharedScope : undefined;
            resourceInputs["srcTemplates"] = state ? state.srcTemplates : undefined;
            resourceInputs["switchClusterProfiles"] = state ? state.switchClusterProfiles : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["versionContexts"] = state ? state.versionContexts : undefined;
            resourceInputs["waitForCompletion"] = state ? state.waitForCompletion : undefined;
        } else {
            const args = argsOrState as FabricSwitchProfileArgs | undefined;
            resourceInputs["accountMoid"] = args ? args.accountMoid : undefined;
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["actionParams"] = args ? args.actionParams : undefined;
            resourceInputs["additionalProperties"] = args ? args.additionalProperties : undefined;
            resourceInputs["ancestors"] = args ? args.ancestors : undefined;
            resourceInputs["assignedSwitches"] = args ? args.assignedSwitches : undefined;
            resourceInputs["associatedSwitches"] = args ? args.associatedSwitches : undefined;
            resourceInputs["classId"] = args ? args.classId : undefined;
            resourceInputs["configChangeContexts"] = args ? args.configChangeContexts : undefined;
            resourceInputs["configChangeDetails"] = args ? args.configChangeDetails : undefined;
            resourceInputs["configChanges"] = args ? args.configChanges : undefined;
            resourceInputs["configContexts"] = args ? args.configContexts : undefined;
            resourceInputs["configResults"] = args ? args.configResults : undefined;
            resourceInputs["createTime"] = args ? args.createTime : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["domainGroupMoid"] = args ? args.domainGroupMoid : undefined;
            resourceInputs["modTime"] = args ? args.modTime : undefined;
            resourceInputs["moid"] = args ? args.moid : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["objectType"] = args ? args.objectType : undefined;
            resourceInputs["owners"] = args ? args.owners : undefined;
            resourceInputs["parents"] = args ? args.parents : undefined;
            resourceInputs["permissionResources"] = args ? args.permissionResources : undefined;
            resourceInputs["policyBuckets"] = args ? args.policyBuckets : undefined;
            resourceInputs["runningWorkflows"] = args ? args.runningWorkflows : undefined;
            resourceInputs["scheduledActions"] = args ? args.scheduledActions : undefined;
            resourceInputs["sharedScope"] = args ? args.sharedScope : undefined;
            resourceInputs["srcTemplates"] = args ? args.srcTemplates : undefined;
            resourceInputs["switchClusterProfiles"] = args ? args.switchClusterProfiles : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["versionContexts"] = args ? args.versionContexts : undefined;
            resourceInputs["waitForCompletion"] = args ? args.waitForCompletion : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(FabricSwitchProfile.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FabricSwitchProfile resources.
 */
export interface FabricSwitchProfileState {
    /**
     * The Account ID for this managed object.
     */
    accountMoid?: pulumi.Input<string>;
    /**
     * User initiated action. Each profile type has its own supported actions. For HyperFlex cluster profile, the supported
     * actions are -- Validate, Deploy, Continue, Retry, Abort, Unassign For server profile, the support actions are -- Deploy,
     * Unassign.
     */
    action?: pulumi.Input<string>;
    actionParams?: pulumi.Input<pulumi.Input<inputs.FabricSwitchProfileActionParam>[]>;
    additionalProperties?: pulumi.Input<string>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    ancestors?: pulumi.Input<pulumi.Input<inputs.FabricSwitchProfileAncestor>[]>;
    /**
     * A reference to a networkElement resource. When the $expand query parameter is specified, the referenced resource is
     * returned inline.
     */
    assignedSwitches?: pulumi.Input<pulumi.Input<inputs.FabricSwitchProfileAssignedSwitch>[]>;
    /**
     * A reference to a networkElement resource. When the $expand query parameter is specified, the referenced resource is
     * returned inline.
     */
    associatedSwitches?: pulumi.Input<pulumi.Input<inputs.FabricSwitchProfileAssociatedSwitch>[]>;
    /**
     * The fully-qualified name of the instantiated, concrete type. This property is used as a discriminator to identify the
     * type of the payload when marshaling and unmarshaling data.
     */
    classId?: pulumi.Input<string>;
    /**
     * The configuration change state and results of the last change operation.
     */
    configChangeContexts?: pulumi.Input<pulumi.Input<inputs.FabricSwitchProfileConfigChangeContext>[]>;
    /**
     * An array of relationships to fabricConfigChangeDetail resources.
     */
    configChangeDetails?: pulumi.Input<pulumi.Input<inputs.FabricSwitchProfileConfigChangeDetail>[]>;
    /**
     * This lists the pending configuration changes at the summary level. Detailed changes are saved in configChangeDetails as
     * a separate object.
     */
    configChanges?: pulumi.Input<pulumi.Input<inputs.FabricSwitchProfileConfigChange>[]>;
    /**
     * The configuration state and results of the last configuration operation.
     */
    configContexts?: pulumi.Input<pulumi.Input<inputs.FabricSwitchProfileConfigContext>[]>;
    /**
     * A reference to a fabricConfigResult resource. When the $expand query parameter is specified, the referenced resource is
     * returned inline.
     */
    configResults?: pulumi.Input<pulumi.Input<inputs.FabricSwitchProfileConfigResult>[]>;
    /**
     * The time when this managed object was created.
     */
    createTime?: pulumi.Input<string>;
    /**
     * Description of the profile.
     */
    description?: pulumi.Input<string>;
    /**
     * The DomainGroup ID for this managed object.
     */
    domainGroupMoid?: pulumi.Input<string>;
    /**
     * The time when this managed object was last modified.
     */
    modTime?: pulumi.Input<string>;
    /**
     * The unique identifier of this Managed Object instance.
     */
    moid?: pulumi.Input<string>;
    /**
     * Name of the profile instance or profile template.
     */
    name?: pulumi.Input<string>;
    /**
     * The fully-qualified name of the instantiated, concrete type. The value should be the same as the 'ClassId' property.
     */
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A reference to a moBaseMo resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    parents?: pulumi.Input<pulumi.Input<inputs.FabricSwitchProfileParent>[]>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    permissionResources?: pulumi.Input<pulumi.Input<inputs.FabricSwitchProfilePermissionResource>[]>;
    /**
     * An array of relationships to policyAbstractPolicy resources.
     */
    policyBuckets?: pulumi.Input<pulumi.Input<inputs.FabricSwitchProfilePolicyBucket>[]>;
    /**
     * An array of relationships to workflowWorkflowInfo resources.
     */
    runningWorkflows?: pulumi.Input<pulumi.Input<inputs.FabricSwitchProfileRunningWorkflow>[]>;
    scheduledActions?: pulumi.Input<pulumi.Input<inputs.FabricSwitchProfileScheduledAction>[]>;
    /**
     * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs. Objects that are made
     * available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally
     * available to all end users or restricted to end users based on their license entitlement. Users can use this property to
     * differentiate the scope (global or a specific license tier) to which a shared MO belongs.
     */
    sharedScope?: pulumi.Input<string>;
    /**
     * A reference to a policyAbstractProfile resource. When the $expand query parameter is specified, the referenced resource
     * is returned inline.
     */
    srcTemplates?: pulumi.Input<pulumi.Input<inputs.FabricSwitchProfileSrcTemplate>[]>;
    /**
     * A reference to a fabricSwitchClusterProfile resource. When the $expand query parameter is specified, the referenced
     * resource is returned inline.
     */
    switchClusterProfiles?: pulumi.Input<pulumi.Input<inputs.FabricSwitchProfileSwitchClusterProfile>[]>;
    tags?: pulumi.Input<pulumi.Input<inputs.FabricSwitchProfileTag>[]>;
    /**
     * Defines the type of the profile. Accepted values are instance or template. * `instance` - The profile defines the
     * configuration for a specific instance of a target.
     */
    type?: pulumi.Input<string>;
    /**
     * The versioning info for this managed object.
     */
    versionContexts?: pulumi.Input<pulumi.Input<inputs.FabricSwitchProfileVersionContext>[]>;
    /**
     * This model object can trigger workflows. Use this option to wait for all running workflows to reach a complete state.
     */
    waitForCompletion?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a FabricSwitchProfile resource.
 */
export interface FabricSwitchProfileArgs {
    /**
     * The Account ID for this managed object.
     */
    accountMoid?: pulumi.Input<string>;
    /**
     * User initiated action. Each profile type has its own supported actions. For HyperFlex cluster profile, the supported
     * actions are -- Validate, Deploy, Continue, Retry, Abort, Unassign For server profile, the support actions are -- Deploy,
     * Unassign.
     */
    action?: pulumi.Input<string>;
    actionParams?: pulumi.Input<pulumi.Input<inputs.FabricSwitchProfileActionParam>[]>;
    additionalProperties?: pulumi.Input<string>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    ancestors?: pulumi.Input<pulumi.Input<inputs.FabricSwitchProfileAncestor>[]>;
    /**
     * A reference to a networkElement resource. When the $expand query parameter is specified, the referenced resource is
     * returned inline.
     */
    assignedSwitches?: pulumi.Input<pulumi.Input<inputs.FabricSwitchProfileAssignedSwitch>[]>;
    /**
     * A reference to a networkElement resource. When the $expand query parameter is specified, the referenced resource is
     * returned inline.
     */
    associatedSwitches?: pulumi.Input<pulumi.Input<inputs.FabricSwitchProfileAssociatedSwitch>[]>;
    /**
     * The fully-qualified name of the instantiated, concrete type. This property is used as a discriminator to identify the
     * type of the payload when marshaling and unmarshaling data.
     */
    classId?: pulumi.Input<string>;
    /**
     * The configuration change state and results of the last change operation.
     */
    configChangeContexts?: pulumi.Input<pulumi.Input<inputs.FabricSwitchProfileConfigChangeContext>[]>;
    /**
     * An array of relationships to fabricConfigChangeDetail resources.
     */
    configChangeDetails?: pulumi.Input<pulumi.Input<inputs.FabricSwitchProfileConfigChangeDetail>[]>;
    /**
     * This lists the pending configuration changes at the summary level. Detailed changes are saved in configChangeDetails as
     * a separate object.
     */
    configChanges?: pulumi.Input<pulumi.Input<inputs.FabricSwitchProfileConfigChange>[]>;
    /**
     * The configuration state and results of the last configuration operation.
     */
    configContexts?: pulumi.Input<pulumi.Input<inputs.FabricSwitchProfileConfigContext>[]>;
    /**
     * A reference to a fabricConfigResult resource. When the $expand query parameter is specified, the referenced resource is
     * returned inline.
     */
    configResults?: pulumi.Input<pulumi.Input<inputs.FabricSwitchProfileConfigResult>[]>;
    /**
     * The time when this managed object was created.
     */
    createTime?: pulumi.Input<string>;
    /**
     * Description of the profile.
     */
    description?: pulumi.Input<string>;
    /**
     * The DomainGroup ID for this managed object.
     */
    domainGroupMoid?: pulumi.Input<string>;
    /**
     * The time when this managed object was last modified.
     */
    modTime?: pulumi.Input<string>;
    /**
     * The unique identifier of this Managed Object instance.
     */
    moid?: pulumi.Input<string>;
    /**
     * Name of the profile instance or profile template.
     */
    name?: pulumi.Input<string>;
    /**
     * The fully-qualified name of the instantiated, concrete type. The value should be the same as the 'ClassId' property.
     */
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A reference to a moBaseMo resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    parents?: pulumi.Input<pulumi.Input<inputs.FabricSwitchProfileParent>[]>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    permissionResources?: pulumi.Input<pulumi.Input<inputs.FabricSwitchProfilePermissionResource>[]>;
    /**
     * An array of relationships to policyAbstractPolicy resources.
     */
    policyBuckets?: pulumi.Input<pulumi.Input<inputs.FabricSwitchProfilePolicyBucket>[]>;
    /**
     * An array of relationships to workflowWorkflowInfo resources.
     */
    runningWorkflows?: pulumi.Input<pulumi.Input<inputs.FabricSwitchProfileRunningWorkflow>[]>;
    scheduledActions?: pulumi.Input<pulumi.Input<inputs.FabricSwitchProfileScheduledAction>[]>;
    /**
     * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs. Objects that are made
     * available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally
     * available to all end users or restricted to end users based on their license entitlement. Users can use this property to
     * differentiate the scope (global or a specific license tier) to which a shared MO belongs.
     */
    sharedScope?: pulumi.Input<string>;
    /**
     * A reference to a policyAbstractProfile resource. When the $expand query parameter is specified, the referenced resource
     * is returned inline.
     */
    srcTemplates?: pulumi.Input<pulumi.Input<inputs.FabricSwitchProfileSrcTemplate>[]>;
    /**
     * A reference to a fabricSwitchClusterProfile resource. When the $expand query parameter is specified, the referenced
     * resource is returned inline.
     */
    switchClusterProfiles?: pulumi.Input<pulumi.Input<inputs.FabricSwitchProfileSwitchClusterProfile>[]>;
    tags?: pulumi.Input<pulumi.Input<inputs.FabricSwitchProfileTag>[]>;
    /**
     * Defines the type of the profile. Accepted values are instance or template. * `instance` - The profile defines the
     * configuration for a specific instance of a target.
     */
    type?: pulumi.Input<string>;
    /**
     * The versioning info for this managed object.
     */
    versionContexts?: pulumi.Input<pulumi.Input<inputs.FabricSwitchProfileVersionContext>[]>;
    /**
     * This model object can trigger workflows. Use this option to wait for all running workflows to reach a complete state.
     */
    waitForCompletion?: pulumi.Input<boolean>;
}
