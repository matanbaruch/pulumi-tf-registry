// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class WorkflowServiceItemActionInstance extends pulumi.CustomResource {
    /**
     * Get an existing WorkflowServiceItemActionInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WorkflowServiceItemActionInstanceState, opts?: pulumi.CustomResourceOptions): WorkflowServiceItemActionInstance {
        return new WorkflowServiceItemActionInstance(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'intersight:index/workflowServiceItemActionInstance:WorkflowServiceItemActionInstance';

    /**
     * Returns true if the given object is an instance of WorkflowServiceItemActionInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WorkflowServiceItemActionInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WorkflowServiceItemActionInstance.__pulumiType;
    }

    /**
     * The Account ID for this managed object.
     */
    public readonly accountMoid!: pulumi.Output<string>;
    /**
     * Name of the action that needs to be performed on the service item instance. * `None` - No action is set, this is the
     * default value for action field. * `Validate` - Validate the action instance inputs and run the validation workflows. *
     * `Start` - Start a new execution of the action instance. * `Rerun` - Rerun the service item action instance from the
     * beginning. * `Retry` - Retry the workflow that has failed from the failure point. * `Cancel` - Cancel the core workflow
     * that is in running or waiting state. This action can be used when the workflows are stuck and not progressing. * `Stop`
     * - Stop the action instance which is in progress and didn't complete successfully. Use this action to clear the state and
     * then delete the action instance. A completed action cannot be stopped.
     */
    public readonly action!: pulumi.Output<string | undefined>;
    /**
     * A reference to a workflowWorkflowInfo resource. When the $expand query parameter is specified, the referenced resource
     * is returned inline.
     */
    public readonly actionWorkflowInfos!: pulumi.Output<outputs.WorkflowServiceItemActionInstanceActionWorkflowInfo[]>;
    public readonly additionalProperties!: pulumi.Output<string | undefined>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    public readonly ancestors!: pulumi.Output<outputs.WorkflowServiceItemActionInstanceAncestor[]>;
    /**
     * An array of relationships to workflowCatalogServiceRequest resources.
     */
    public readonly catalogServiceRequests!: pulumi.Output<outputs.WorkflowServiceItemActionInstanceCatalogServiceRequest[]>;
    /**
     * The fully-qualified name of the instantiated, concrete type. This property is used as a discriminator to identify the
     * type of the payload when marshaling and unmarshaling data.
     */
    public readonly classId!: pulumi.Output<string | undefined>;
    /**
     * The time when this managed object was created.
     */
    public readonly createTime!: pulumi.Output<string>;
    /**
     * The DomainGroup ID for this managed object.
     */
    public readonly domainGroupMoid!: pulumi.Output<string>;
    /**
     * The time when the action was stopped or completed execution last time.
     */
    public readonly endTime!: pulumi.Output<string>;
    /**
     * A reference to a iamIdpReference resource. When the $expand query parameter is specified, the referenced resource is
     * returned inline.
     */
    public readonly idpReferences!: pulumi.Output<outputs.WorkflowServiceItemActionInstanceIdpReference[]>;
    /**
     * A reference to a iamIdp resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    public readonly idps!: pulumi.Output<outputs.WorkflowServiceItemActionInstanceIdp[]>;
    /**
     * Inputs for a service item action and the format is specified by input definition of the service item action definition.
     */
    public readonly input!: pulumi.Output<string | undefined>;
    /**
     * The last action that was issued on the action definition workflows is saved in this property. * `None` - No action is
     * set, this is the default value for action field. * `Validate` - Validate the action instance inputs and run the
     * validation workflows. * `Start` - Start a new execution of the action instance. * `Rerun` - Rerun the service item
     * action instance from the beginning. * `Retry` - Retry the workflow that has failed from the failure point. * `Cancel` -
     * Cancel the core workflow that is in running or waiting state. This action can be used when the workflows are stuck and
     * not progressing. * `Stop` - Stop the action instance which is in progress and didn't complete successfully. Use this
     * action to clear the state and then delete the action instance. A completed action cannot be stopped.
     */
    public readonly lastAction!: pulumi.Output<string>;
    public readonly messages!: pulumi.Output<outputs.WorkflowServiceItemActionInstanceMessage[]>;
    /**
     * The time when this managed object was last modified.
     */
    public readonly modTime!: pulumi.Output<string>;
    /**
     * The unique identifier of this Managed Object instance.
     */
    public readonly moid!: pulumi.Output<string>;
    /**
     * Name for the action instance is created in the system by appending name of the service item instance to the name of the
     * action definition.
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
    public readonly parents!: pulumi.Output<outputs.WorkflowServiceItemActionInstanceParent[]>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    public readonly permissionResources!: pulumi.Output<outputs.WorkflowServiceItemActionInstancePermissionResource[]>;
    /**
     * Lifecycle state of service item instance. * `Creating` - The service item is not yet created and creation action is in
     * progress. * `Created` - The service item is created. * `Decommissioning` - The service item is not yet decommissioned
     * and decommission action is in progress. * `Decommissioned` - The service item is decommisioned. * `Deleting` - The
     * service item is not yet deleted and deletion action is in progress. * `Deleted` - The service item is deleted. *
     * `Failed` - The service item action is failed to perform the operation.
     */
    public readonly resourcelifecycleStatus!: pulumi.Output<string>;
    public readonly selectionCriteriaInputs!: pulumi.Output<outputs.WorkflowServiceItemActionInstanceSelectionCriteriaInput[]>;
    /**
     * A reference to a workflowServiceItemActionDefinition resource. When the $expand query parameter is specified, the
     * referenced resource is returned inline.
     */
    public readonly serviceItemActionDefinitions!: pulumi.Output<outputs.WorkflowServiceItemActionInstanceServiceItemActionDefinition[]>;
    /**
     * A reference to a workflowServiceItemDefinition resource. When the $expand query parameter is specified, the referenced
     * resource is returned inline.
     */
    public readonly serviceItemDefinitions!: pulumi.Output<outputs.WorkflowServiceItemActionInstanceServiceItemDefinition[]>;
    /**
     * A reference to a workflowServiceItemInstance resource. When the $expand query parameter is specified, the referenced
     * resource is returned inline.
     */
    public readonly serviceItemInstances!: pulumi.Output<outputs.WorkflowServiceItemActionInstanceServiceItemInstance[]>;
    /**
     * Inputs for a service item action from catalog service request and the format is specified by input definition of the
     * catalog item definition.
     */
    public readonly serviceRequestInput!: pulumi.Output<string>;
    /**
     * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs. Objects that are made
     * available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally
     * available to all end users or restricted to end users based on their license entitlement. Users can use this property to
     * differentiate the scope (global or a specific license tier) to which a shared MO belongs.
     */
    public readonly sharedScope!: pulumi.Output<string>;
    /**
     * The time when the action was started for execution last time.
     */
    public readonly startTime!: pulumi.Output<string>;
    /**
     * State of the service item action instance. * `NotStarted` - An action on the service item is not yet started and it is
     * in a draft mode. A service item action instance can be deleted in this state. * `Validating` - A validate action has
     * been triggered on the action and until it completes the start action cannot be issued. * `InProgress` - An action is in
     * progress and until that action has reached a final state, another action cannot be started. * `Failed` - The action on
     * the service item instance failed and can be retried. * `Completed` - The action on the service item instance completed
     * successfully. * `Stopping` - The stop action is running on the action instance. * `Stopped` - The action on the service
     * item instance has stopped.
     */
    public readonly status!: pulumi.Output<string>;
    /**
     * A reference to a workflowWorkflowInfo resource. When the $expand query parameter is specified, the referenced resource
     * is returned inline.
     */
    public readonly stopWorkflowInfos!: pulumi.Output<outputs.WorkflowServiceItemActionInstanceStopWorkflowInfo[]>;
    public readonly tags!: pulumi.Output<outputs.WorkflowServiceItemActionInstanceTag[]>;
    /**
     * The user identifier who invoked the request to create the service item instance.
     */
    public readonly userIdOrEmail!: pulumi.Output<string>;
    /**
     * A reference to a iamUser resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    public readonly users!: pulumi.Output<outputs.WorkflowServiceItemActionInstanceUser[]>;
    /**
     * A reference to a workflowWorkflowInfo resource. When the $expand query parameter is specified, the referenced resource
     * is returned inline.
     */
    public readonly validationWorkflowInfos!: pulumi.Output<outputs.WorkflowServiceItemActionInstanceValidationWorkflowInfo[]>;
    /**
     * The versioning info for this managed object.
     */
    public readonly versionContexts!: pulumi.Output<outputs.WorkflowServiceItemActionInstanceVersionContext[]>;
    /**
     * This model object can trigger workflows. Use this option to wait for all running workflows to reach a complete state.
     */
    public readonly waitForCompletion!: pulumi.Output<boolean | undefined>;

    /**
     * Create a WorkflowServiceItemActionInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: WorkflowServiceItemActionInstanceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WorkflowServiceItemActionInstanceArgs | WorkflowServiceItemActionInstanceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WorkflowServiceItemActionInstanceState | undefined;
            resourceInputs["accountMoid"] = state ? state.accountMoid : undefined;
            resourceInputs["action"] = state ? state.action : undefined;
            resourceInputs["actionWorkflowInfos"] = state ? state.actionWorkflowInfos : undefined;
            resourceInputs["additionalProperties"] = state ? state.additionalProperties : undefined;
            resourceInputs["ancestors"] = state ? state.ancestors : undefined;
            resourceInputs["catalogServiceRequests"] = state ? state.catalogServiceRequests : undefined;
            resourceInputs["classId"] = state ? state.classId : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["domainGroupMoid"] = state ? state.domainGroupMoid : undefined;
            resourceInputs["endTime"] = state ? state.endTime : undefined;
            resourceInputs["idpReferences"] = state ? state.idpReferences : undefined;
            resourceInputs["idps"] = state ? state.idps : undefined;
            resourceInputs["input"] = state ? state.input : undefined;
            resourceInputs["lastAction"] = state ? state.lastAction : undefined;
            resourceInputs["messages"] = state ? state.messages : undefined;
            resourceInputs["modTime"] = state ? state.modTime : undefined;
            resourceInputs["moid"] = state ? state.moid : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["objectType"] = state ? state.objectType : undefined;
            resourceInputs["owners"] = state ? state.owners : undefined;
            resourceInputs["parents"] = state ? state.parents : undefined;
            resourceInputs["permissionResources"] = state ? state.permissionResources : undefined;
            resourceInputs["resourcelifecycleStatus"] = state ? state.resourcelifecycleStatus : undefined;
            resourceInputs["selectionCriteriaInputs"] = state ? state.selectionCriteriaInputs : undefined;
            resourceInputs["serviceItemActionDefinitions"] = state ? state.serviceItemActionDefinitions : undefined;
            resourceInputs["serviceItemDefinitions"] = state ? state.serviceItemDefinitions : undefined;
            resourceInputs["serviceItemInstances"] = state ? state.serviceItemInstances : undefined;
            resourceInputs["serviceRequestInput"] = state ? state.serviceRequestInput : undefined;
            resourceInputs["sharedScope"] = state ? state.sharedScope : undefined;
            resourceInputs["startTime"] = state ? state.startTime : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["stopWorkflowInfos"] = state ? state.stopWorkflowInfos : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["userIdOrEmail"] = state ? state.userIdOrEmail : undefined;
            resourceInputs["users"] = state ? state.users : undefined;
            resourceInputs["validationWorkflowInfos"] = state ? state.validationWorkflowInfos : undefined;
            resourceInputs["versionContexts"] = state ? state.versionContexts : undefined;
            resourceInputs["waitForCompletion"] = state ? state.waitForCompletion : undefined;
        } else {
            const args = argsOrState as WorkflowServiceItemActionInstanceArgs | undefined;
            resourceInputs["accountMoid"] = args ? args.accountMoid : undefined;
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["actionWorkflowInfos"] = args ? args.actionWorkflowInfos : undefined;
            resourceInputs["additionalProperties"] = args ? args.additionalProperties : undefined;
            resourceInputs["ancestors"] = args ? args.ancestors : undefined;
            resourceInputs["catalogServiceRequests"] = args ? args.catalogServiceRequests : undefined;
            resourceInputs["classId"] = args ? args.classId : undefined;
            resourceInputs["createTime"] = args ? args.createTime : undefined;
            resourceInputs["domainGroupMoid"] = args ? args.domainGroupMoid : undefined;
            resourceInputs["endTime"] = args ? args.endTime : undefined;
            resourceInputs["idpReferences"] = args ? args.idpReferences : undefined;
            resourceInputs["idps"] = args ? args.idps : undefined;
            resourceInputs["input"] = args ? args.input : undefined;
            resourceInputs["lastAction"] = args ? args.lastAction : undefined;
            resourceInputs["messages"] = args ? args.messages : undefined;
            resourceInputs["modTime"] = args ? args.modTime : undefined;
            resourceInputs["moid"] = args ? args.moid : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["objectType"] = args ? args.objectType : undefined;
            resourceInputs["owners"] = args ? args.owners : undefined;
            resourceInputs["parents"] = args ? args.parents : undefined;
            resourceInputs["permissionResources"] = args ? args.permissionResources : undefined;
            resourceInputs["resourcelifecycleStatus"] = args ? args.resourcelifecycleStatus : undefined;
            resourceInputs["selectionCriteriaInputs"] = args ? args.selectionCriteriaInputs : undefined;
            resourceInputs["serviceItemActionDefinitions"] = args ? args.serviceItemActionDefinitions : undefined;
            resourceInputs["serviceItemDefinitions"] = args ? args.serviceItemDefinitions : undefined;
            resourceInputs["serviceItemInstances"] = args ? args.serviceItemInstances : undefined;
            resourceInputs["serviceRequestInput"] = args ? args.serviceRequestInput : undefined;
            resourceInputs["sharedScope"] = args ? args.sharedScope : undefined;
            resourceInputs["startTime"] = args ? args.startTime : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["stopWorkflowInfos"] = args ? args.stopWorkflowInfos : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["userIdOrEmail"] = args ? args.userIdOrEmail : undefined;
            resourceInputs["users"] = args ? args.users : undefined;
            resourceInputs["validationWorkflowInfos"] = args ? args.validationWorkflowInfos : undefined;
            resourceInputs["versionContexts"] = args ? args.versionContexts : undefined;
            resourceInputs["waitForCompletion"] = args ? args.waitForCompletion : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(WorkflowServiceItemActionInstance.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering WorkflowServiceItemActionInstance resources.
 */
export interface WorkflowServiceItemActionInstanceState {
    /**
     * The Account ID for this managed object.
     */
    accountMoid?: pulumi.Input<string>;
    /**
     * Name of the action that needs to be performed on the service item instance. * `None` - No action is set, this is the
     * default value for action field. * `Validate` - Validate the action instance inputs and run the validation workflows. *
     * `Start` - Start a new execution of the action instance. * `Rerun` - Rerun the service item action instance from the
     * beginning. * `Retry` - Retry the workflow that has failed from the failure point. * `Cancel` - Cancel the core workflow
     * that is in running or waiting state. This action can be used when the workflows are stuck and not progressing. * `Stop`
     * - Stop the action instance which is in progress and didn't complete successfully. Use this action to clear the state and
     * then delete the action instance. A completed action cannot be stopped.
     */
    action?: pulumi.Input<string>;
    /**
     * A reference to a workflowWorkflowInfo resource. When the $expand query parameter is specified, the referenced resource
     * is returned inline.
     */
    actionWorkflowInfos?: pulumi.Input<pulumi.Input<inputs.WorkflowServiceItemActionInstanceActionWorkflowInfo>[]>;
    additionalProperties?: pulumi.Input<string>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    ancestors?: pulumi.Input<pulumi.Input<inputs.WorkflowServiceItemActionInstanceAncestor>[]>;
    /**
     * An array of relationships to workflowCatalogServiceRequest resources.
     */
    catalogServiceRequests?: pulumi.Input<pulumi.Input<inputs.WorkflowServiceItemActionInstanceCatalogServiceRequest>[]>;
    /**
     * The fully-qualified name of the instantiated, concrete type. This property is used as a discriminator to identify the
     * type of the payload when marshaling and unmarshaling data.
     */
    classId?: pulumi.Input<string>;
    /**
     * The time when this managed object was created.
     */
    createTime?: pulumi.Input<string>;
    /**
     * The DomainGroup ID for this managed object.
     */
    domainGroupMoid?: pulumi.Input<string>;
    /**
     * The time when the action was stopped or completed execution last time.
     */
    endTime?: pulumi.Input<string>;
    /**
     * A reference to a iamIdpReference resource. When the $expand query parameter is specified, the referenced resource is
     * returned inline.
     */
    idpReferences?: pulumi.Input<pulumi.Input<inputs.WorkflowServiceItemActionInstanceIdpReference>[]>;
    /**
     * A reference to a iamIdp resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    idps?: pulumi.Input<pulumi.Input<inputs.WorkflowServiceItemActionInstanceIdp>[]>;
    /**
     * Inputs for a service item action and the format is specified by input definition of the service item action definition.
     */
    input?: pulumi.Input<string>;
    /**
     * The last action that was issued on the action definition workflows is saved in this property. * `None` - No action is
     * set, this is the default value for action field. * `Validate` - Validate the action instance inputs and run the
     * validation workflows. * `Start` - Start a new execution of the action instance. * `Rerun` - Rerun the service item
     * action instance from the beginning. * `Retry` - Retry the workflow that has failed from the failure point. * `Cancel` -
     * Cancel the core workflow that is in running or waiting state. This action can be used when the workflows are stuck and
     * not progressing. * `Stop` - Stop the action instance which is in progress and didn't complete successfully. Use this
     * action to clear the state and then delete the action instance. A completed action cannot be stopped.
     */
    lastAction?: pulumi.Input<string>;
    messages?: pulumi.Input<pulumi.Input<inputs.WorkflowServiceItemActionInstanceMessage>[]>;
    /**
     * The time when this managed object was last modified.
     */
    modTime?: pulumi.Input<string>;
    /**
     * The unique identifier of this Managed Object instance.
     */
    moid?: pulumi.Input<string>;
    /**
     * Name for the action instance is created in the system by appending name of the service item instance to the name of the
     * action definition.
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
    parents?: pulumi.Input<pulumi.Input<inputs.WorkflowServiceItemActionInstanceParent>[]>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    permissionResources?: pulumi.Input<pulumi.Input<inputs.WorkflowServiceItemActionInstancePermissionResource>[]>;
    /**
     * Lifecycle state of service item instance. * `Creating` - The service item is not yet created and creation action is in
     * progress. * `Created` - The service item is created. * `Decommissioning` - The service item is not yet decommissioned
     * and decommission action is in progress. * `Decommissioned` - The service item is decommisioned. * `Deleting` - The
     * service item is not yet deleted and deletion action is in progress. * `Deleted` - The service item is deleted. *
     * `Failed` - The service item action is failed to perform the operation.
     */
    resourcelifecycleStatus?: pulumi.Input<string>;
    selectionCriteriaInputs?: pulumi.Input<pulumi.Input<inputs.WorkflowServiceItemActionInstanceSelectionCriteriaInput>[]>;
    /**
     * A reference to a workflowServiceItemActionDefinition resource. When the $expand query parameter is specified, the
     * referenced resource is returned inline.
     */
    serviceItemActionDefinitions?: pulumi.Input<pulumi.Input<inputs.WorkflowServiceItemActionInstanceServiceItemActionDefinition>[]>;
    /**
     * A reference to a workflowServiceItemDefinition resource. When the $expand query parameter is specified, the referenced
     * resource is returned inline.
     */
    serviceItemDefinitions?: pulumi.Input<pulumi.Input<inputs.WorkflowServiceItemActionInstanceServiceItemDefinition>[]>;
    /**
     * A reference to a workflowServiceItemInstance resource. When the $expand query parameter is specified, the referenced
     * resource is returned inline.
     */
    serviceItemInstances?: pulumi.Input<pulumi.Input<inputs.WorkflowServiceItemActionInstanceServiceItemInstance>[]>;
    /**
     * Inputs for a service item action from catalog service request and the format is specified by input definition of the
     * catalog item definition.
     */
    serviceRequestInput?: pulumi.Input<string>;
    /**
     * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs. Objects that are made
     * available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally
     * available to all end users or restricted to end users based on their license entitlement. Users can use this property to
     * differentiate the scope (global or a specific license tier) to which a shared MO belongs.
     */
    sharedScope?: pulumi.Input<string>;
    /**
     * The time when the action was started for execution last time.
     */
    startTime?: pulumi.Input<string>;
    /**
     * State of the service item action instance. * `NotStarted` - An action on the service item is not yet started and it is
     * in a draft mode. A service item action instance can be deleted in this state. * `Validating` - A validate action has
     * been triggered on the action and until it completes the start action cannot be issued. * `InProgress` - An action is in
     * progress and until that action has reached a final state, another action cannot be started. * `Failed` - The action on
     * the service item instance failed and can be retried. * `Completed` - The action on the service item instance completed
     * successfully. * `Stopping` - The stop action is running on the action instance. * `Stopped` - The action on the service
     * item instance has stopped.
     */
    status?: pulumi.Input<string>;
    /**
     * A reference to a workflowWorkflowInfo resource. When the $expand query parameter is specified, the referenced resource
     * is returned inline.
     */
    stopWorkflowInfos?: pulumi.Input<pulumi.Input<inputs.WorkflowServiceItemActionInstanceStopWorkflowInfo>[]>;
    tags?: pulumi.Input<pulumi.Input<inputs.WorkflowServiceItemActionInstanceTag>[]>;
    /**
     * The user identifier who invoked the request to create the service item instance.
     */
    userIdOrEmail?: pulumi.Input<string>;
    /**
     * A reference to a iamUser resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    users?: pulumi.Input<pulumi.Input<inputs.WorkflowServiceItemActionInstanceUser>[]>;
    /**
     * A reference to a workflowWorkflowInfo resource. When the $expand query parameter is specified, the referenced resource
     * is returned inline.
     */
    validationWorkflowInfos?: pulumi.Input<pulumi.Input<inputs.WorkflowServiceItemActionInstanceValidationWorkflowInfo>[]>;
    /**
     * The versioning info for this managed object.
     */
    versionContexts?: pulumi.Input<pulumi.Input<inputs.WorkflowServiceItemActionInstanceVersionContext>[]>;
    /**
     * This model object can trigger workflows. Use this option to wait for all running workflows to reach a complete state.
     */
    waitForCompletion?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a WorkflowServiceItemActionInstance resource.
 */
export interface WorkflowServiceItemActionInstanceArgs {
    /**
     * The Account ID for this managed object.
     */
    accountMoid?: pulumi.Input<string>;
    /**
     * Name of the action that needs to be performed on the service item instance. * `None` - No action is set, this is the
     * default value for action field. * `Validate` - Validate the action instance inputs and run the validation workflows. *
     * `Start` - Start a new execution of the action instance. * `Rerun` - Rerun the service item action instance from the
     * beginning. * `Retry` - Retry the workflow that has failed from the failure point. * `Cancel` - Cancel the core workflow
     * that is in running or waiting state. This action can be used when the workflows are stuck and not progressing. * `Stop`
     * - Stop the action instance which is in progress and didn't complete successfully. Use this action to clear the state and
     * then delete the action instance. A completed action cannot be stopped.
     */
    action?: pulumi.Input<string>;
    /**
     * A reference to a workflowWorkflowInfo resource. When the $expand query parameter is specified, the referenced resource
     * is returned inline.
     */
    actionWorkflowInfos?: pulumi.Input<pulumi.Input<inputs.WorkflowServiceItemActionInstanceActionWorkflowInfo>[]>;
    additionalProperties?: pulumi.Input<string>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    ancestors?: pulumi.Input<pulumi.Input<inputs.WorkflowServiceItemActionInstanceAncestor>[]>;
    /**
     * An array of relationships to workflowCatalogServiceRequest resources.
     */
    catalogServiceRequests?: pulumi.Input<pulumi.Input<inputs.WorkflowServiceItemActionInstanceCatalogServiceRequest>[]>;
    /**
     * The fully-qualified name of the instantiated, concrete type. This property is used as a discriminator to identify the
     * type of the payload when marshaling and unmarshaling data.
     */
    classId?: pulumi.Input<string>;
    /**
     * The time when this managed object was created.
     */
    createTime?: pulumi.Input<string>;
    /**
     * The DomainGroup ID for this managed object.
     */
    domainGroupMoid?: pulumi.Input<string>;
    /**
     * The time when the action was stopped or completed execution last time.
     */
    endTime?: pulumi.Input<string>;
    /**
     * A reference to a iamIdpReference resource. When the $expand query parameter is specified, the referenced resource is
     * returned inline.
     */
    idpReferences?: pulumi.Input<pulumi.Input<inputs.WorkflowServiceItemActionInstanceIdpReference>[]>;
    /**
     * A reference to a iamIdp resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    idps?: pulumi.Input<pulumi.Input<inputs.WorkflowServiceItemActionInstanceIdp>[]>;
    /**
     * Inputs for a service item action and the format is specified by input definition of the service item action definition.
     */
    input?: pulumi.Input<string>;
    /**
     * The last action that was issued on the action definition workflows is saved in this property. * `None` - No action is
     * set, this is the default value for action field. * `Validate` - Validate the action instance inputs and run the
     * validation workflows. * `Start` - Start a new execution of the action instance. * `Rerun` - Rerun the service item
     * action instance from the beginning. * `Retry` - Retry the workflow that has failed from the failure point. * `Cancel` -
     * Cancel the core workflow that is in running or waiting state. This action can be used when the workflows are stuck and
     * not progressing. * `Stop` - Stop the action instance which is in progress and didn't complete successfully. Use this
     * action to clear the state and then delete the action instance. A completed action cannot be stopped.
     */
    lastAction?: pulumi.Input<string>;
    messages?: pulumi.Input<pulumi.Input<inputs.WorkflowServiceItemActionInstanceMessage>[]>;
    /**
     * The time when this managed object was last modified.
     */
    modTime?: pulumi.Input<string>;
    /**
     * The unique identifier of this Managed Object instance.
     */
    moid?: pulumi.Input<string>;
    /**
     * Name for the action instance is created in the system by appending name of the service item instance to the name of the
     * action definition.
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
    parents?: pulumi.Input<pulumi.Input<inputs.WorkflowServiceItemActionInstanceParent>[]>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    permissionResources?: pulumi.Input<pulumi.Input<inputs.WorkflowServiceItemActionInstancePermissionResource>[]>;
    /**
     * Lifecycle state of service item instance. * `Creating` - The service item is not yet created and creation action is in
     * progress. * `Created` - The service item is created. * `Decommissioning` - The service item is not yet decommissioned
     * and decommission action is in progress. * `Decommissioned` - The service item is decommisioned. * `Deleting` - The
     * service item is not yet deleted and deletion action is in progress. * `Deleted` - The service item is deleted. *
     * `Failed` - The service item action is failed to perform the operation.
     */
    resourcelifecycleStatus?: pulumi.Input<string>;
    selectionCriteriaInputs?: pulumi.Input<pulumi.Input<inputs.WorkflowServiceItemActionInstanceSelectionCriteriaInput>[]>;
    /**
     * A reference to a workflowServiceItemActionDefinition resource. When the $expand query parameter is specified, the
     * referenced resource is returned inline.
     */
    serviceItemActionDefinitions?: pulumi.Input<pulumi.Input<inputs.WorkflowServiceItemActionInstanceServiceItemActionDefinition>[]>;
    /**
     * A reference to a workflowServiceItemDefinition resource. When the $expand query parameter is specified, the referenced
     * resource is returned inline.
     */
    serviceItemDefinitions?: pulumi.Input<pulumi.Input<inputs.WorkflowServiceItemActionInstanceServiceItemDefinition>[]>;
    /**
     * A reference to a workflowServiceItemInstance resource. When the $expand query parameter is specified, the referenced
     * resource is returned inline.
     */
    serviceItemInstances?: pulumi.Input<pulumi.Input<inputs.WorkflowServiceItemActionInstanceServiceItemInstance>[]>;
    /**
     * Inputs for a service item action from catalog service request and the format is specified by input definition of the
     * catalog item definition.
     */
    serviceRequestInput?: pulumi.Input<string>;
    /**
     * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs. Objects that are made
     * available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally
     * available to all end users or restricted to end users based on their license entitlement. Users can use this property to
     * differentiate the scope (global or a specific license tier) to which a shared MO belongs.
     */
    sharedScope?: pulumi.Input<string>;
    /**
     * The time when the action was started for execution last time.
     */
    startTime?: pulumi.Input<string>;
    /**
     * State of the service item action instance. * `NotStarted` - An action on the service item is not yet started and it is
     * in a draft mode. A service item action instance can be deleted in this state. * `Validating` - A validate action has
     * been triggered on the action and until it completes the start action cannot be issued. * `InProgress` - An action is in
     * progress and until that action has reached a final state, another action cannot be started. * `Failed` - The action on
     * the service item instance failed and can be retried. * `Completed` - The action on the service item instance completed
     * successfully. * `Stopping` - The stop action is running on the action instance. * `Stopped` - The action on the service
     * item instance has stopped.
     */
    status?: pulumi.Input<string>;
    /**
     * A reference to a workflowWorkflowInfo resource. When the $expand query parameter is specified, the referenced resource
     * is returned inline.
     */
    stopWorkflowInfos?: pulumi.Input<pulumi.Input<inputs.WorkflowServiceItemActionInstanceStopWorkflowInfo>[]>;
    tags?: pulumi.Input<pulumi.Input<inputs.WorkflowServiceItemActionInstanceTag>[]>;
    /**
     * The user identifier who invoked the request to create the service item instance.
     */
    userIdOrEmail?: pulumi.Input<string>;
    /**
     * A reference to a iamUser resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    users?: pulumi.Input<pulumi.Input<inputs.WorkflowServiceItemActionInstanceUser>[]>;
    /**
     * A reference to a workflowWorkflowInfo resource. When the $expand query parameter is specified, the referenced resource
     * is returned inline.
     */
    validationWorkflowInfos?: pulumi.Input<pulumi.Input<inputs.WorkflowServiceItemActionInstanceValidationWorkflowInfo>[]>;
    /**
     * The versioning info for this managed object.
     */
    versionContexts?: pulumi.Input<pulumi.Input<inputs.WorkflowServiceItemActionInstanceVersionContext>[]>;
    /**
     * This model object can trigger workflows. Use this option to wait for all running workflows to reach a complete state.
     */
    waitForCompletion?: pulumi.Input<boolean>;
}
