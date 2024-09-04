// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class OprsDeployment extends pulumi.CustomResource {
    /**
     * Get an existing OprsDeployment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OprsDeploymentState, opts?: pulumi.CustomResourceOptions): OprsDeployment {
        return new OprsDeployment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'intersight:index/oprsDeployment:OprsDeployment';

    /**
     * Returns true if the given object is an instance of OprsDeployment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OprsDeployment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OprsDeployment.__pulumiType;
    }

    /**
     * The Account ID for this managed object.
     */
    public readonly accountMoid!: pulumi.Output<string>;
    public readonly additionalProperties!: pulumi.Output<string | undefined>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    public readonly ancestors!: pulumi.Output<outputs.OprsDeploymentAncestor[]>;
    /**
     * A reference to a assetDeviceRegistration resource. When the $expand query parameter is specified, the referenced
     * resource is returned inline.
     */
    public readonly assists!: pulumi.Output<outputs.OprsDeploymentAssist[]>;
    /**
     * Available number of replicas.
     */
    public readonly availableReplicas!: pulumi.Output<number | undefined>;
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
     * The expected number of replicas.
     */
    public readonly desiredReplicas!: pulumi.Output<number | undefined>;
    /**
     * The DomainGroup ID for this managed object.
     */
    public readonly domainGroupMoid!: pulumi.Output<string>;
    /**
     * The type of event which was triggered.
     */
    public readonly event!: pulumi.Output<string | undefined>;
    public readonly labels!: pulumi.Output<outputs.OprsDeploymentLabel[]>;
    /**
     * The time when this managed object was last modified.
     */
    public readonly modTime!: pulumi.Output<string>;
    /**
     * The unique identifier of this Managed Object instance.
     */
    public readonly moid!: pulumi.Output<string>;
    /**
     * Agent name for which the event is triggered.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Name space in which the agents are running.
     */
    public readonly namespace!: pulumi.Output<string | undefined>;
    /**
     * The fully-qualified name of the instantiated, concrete type. The value should be the same as the 'ClassId' property.
     */
    public readonly objectType!: pulumi.Output<string | undefined>;
    public readonly owners!: pulumi.Output<string[]>;
    /**
     * A reference to a moBaseMo resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    public readonly parents!: pulumi.Output<outputs.OprsDeploymentParent[]>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    public readonly permissionResources!: pulumi.Output<outputs.OprsDeploymentPermissionResource[]>;
    /**
     * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs. Objects that are made
     * available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally
     * available to all end users or restricted to end users based on their license entitlement. Users can use this property to
     * differentiate the scope (global or a specific license tier) to which a shared MO belongs.
     */
    public readonly sharedScope!: pulumi.Output<string>;
    /**
     * Status which shows if the resource is healthy or not. * `` - An Unknown status indicates that the resource status is not
     * known. * `Healthy` - A healthy status indicates that the resource is healthy and running as per spec. * `Unhealthy` - An
     * unhealthy status indicates that the resource is down.
     */
    public readonly status!: pulumi.Output<string | undefined>;
    public readonly tags!: pulumi.Output<outputs.OprsDeploymentTag[]>;
    /**
     * The time at which the event was generated. Date is accurate to Intersights clock. This time will be used to identify
     * order of events.
     */
    public readonly timeStamp!: pulumi.Output<string>;
    /**
     * Number of replicas Unavailable.
     */
    public readonly unavailableReplicas!: pulumi.Output<number | undefined>;
    /**
     * The versioning info for this managed object.
     */
    public readonly versionContexts!: pulumi.Output<outputs.OprsDeploymentVersionContext[]>;

    /**
     * Create a OprsDeployment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: OprsDeploymentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: OprsDeploymentArgs | OprsDeploymentState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as OprsDeploymentState | undefined;
            resourceInputs["accountMoid"] = state ? state.accountMoid : undefined;
            resourceInputs["additionalProperties"] = state ? state.additionalProperties : undefined;
            resourceInputs["ancestors"] = state ? state.ancestors : undefined;
            resourceInputs["assists"] = state ? state.assists : undefined;
            resourceInputs["availableReplicas"] = state ? state.availableReplicas : undefined;
            resourceInputs["classId"] = state ? state.classId : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["desiredReplicas"] = state ? state.desiredReplicas : undefined;
            resourceInputs["domainGroupMoid"] = state ? state.domainGroupMoid : undefined;
            resourceInputs["event"] = state ? state.event : undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["modTime"] = state ? state.modTime : undefined;
            resourceInputs["moid"] = state ? state.moid : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["namespace"] = state ? state.namespace : undefined;
            resourceInputs["objectType"] = state ? state.objectType : undefined;
            resourceInputs["owners"] = state ? state.owners : undefined;
            resourceInputs["parents"] = state ? state.parents : undefined;
            resourceInputs["permissionResources"] = state ? state.permissionResources : undefined;
            resourceInputs["sharedScope"] = state ? state.sharedScope : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeStamp"] = state ? state.timeStamp : undefined;
            resourceInputs["unavailableReplicas"] = state ? state.unavailableReplicas : undefined;
            resourceInputs["versionContexts"] = state ? state.versionContexts : undefined;
        } else {
            const args = argsOrState as OprsDeploymentArgs | undefined;
            resourceInputs["accountMoid"] = args ? args.accountMoid : undefined;
            resourceInputs["additionalProperties"] = args ? args.additionalProperties : undefined;
            resourceInputs["ancestors"] = args ? args.ancestors : undefined;
            resourceInputs["assists"] = args ? args.assists : undefined;
            resourceInputs["availableReplicas"] = args ? args.availableReplicas : undefined;
            resourceInputs["classId"] = args ? args.classId : undefined;
            resourceInputs["createTime"] = args ? args.createTime : undefined;
            resourceInputs["desiredReplicas"] = args ? args.desiredReplicas : undefined;
            resourceInputs["domainGroupMoid"] = args ? args.domainGroupMoid : undefined;
            resourceInputs["event"] = args ? args.event : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["modTime"] = args ? args.modTime : undefined;
            resourceInputs["moid"] = args ? args.moid : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["namespace"] = args ? args.namespace : undefined;
            resourceInputs["objectType"] = args ? args.objectType : undefined;
            resourceInputs["owners"] = args ? args.owners : undefined;
            resourceInputs["parents"] = args ? args.parents : undefined;
            resourceInputs["permissionResources"] = args ? args.permissionResources : undefined;
            resourceInputs["sharedScope"] = args ? args.sharedScope : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeStamp"] = args ? args.timeStamp : undefined;
            resourceInputs["unavailableReplicas"] = args ? args.unavailableReplicas : undefined;
            resourceInputs["versionContexts"] = args ? args.versionContexts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(OprsDeployment.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering OprsDeployment resources.
 */
export interface OprsDeploymentState {
    /**
     * The Account ID for this managed object.
     */
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    ancestors?: pulumi.Input<pulumi.Input<inputs.OprsDeploymentAncestor>[]>;
    /**
     * A reference to a assetDeviceRegistration resource. When the $expand query parameter is specified, the referenced
     * resource is returned inline.
     */
    assists?: pulumi.Input<pulumi.Input<inputs.OprsDeploymentAssist>[]>;
    /**
     * Available number of replicas.
     */
    availableReplicas?: pulumi.Input<number>;
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
     * The expected number of replicas.
     */
    desiredReplicas?: pulumi.Input<number>;
    /**
     * The DomainGroup ID for this managed object.
     */
    domainGroupMoid?: pulumi.Input<string>;
    /**
     * The type of event which was triggered.
     */
    event?: pulumi.Input<string>;
    labels?: pulumi.Input<pulumi.Input<inputs.OprsDeploymentLabel>[]>;
    /**
     * The time when this managed object was last modified.
     */
    modTime?: pulumi.Input<string>;
    /**
     * The unique identifier of this Managed Object instance.
     */
    moid?: pulumi.Input<string>;
    /**
     * Agent name for which the event is triggered.
     */
    name?: pulumi.Input<string>;
    /**
     * Name space in which the agents are running.
     */
    namespace?: pulumi.Input<string>;
    /**
     * The fully-qualified name of the instantiated, concrete type. The value should be the same as the 'ClassId' property.
     */
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A reference to a moBaseMo resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    parents?: pulumi.Input<pulumi.Input<inputs.OprsDeploymentParent>[]>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    permissionResources?: pulumi.Input<pulumi.Input<inputs.OprsDeploymentPermissionResource>[]>;
    /**
     * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs. Objects that are made
     * available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally
     * available to all end users or restricted to end users based on their license entitlement. Users can use this property to
     * differentiate the scope (global or a specific license tier) to which a shared MO belongs.
     */
    sharedScope?: pulumi.Input<string>;
    /**
     * Status which shows if the resource is healthy or not. * `` - An Unknown status indicates that the resource status is not
     * known. * `Healthy` - A healthy status indicates that the resource is healthy and running as per spec. * `Unhealthy` - An
     * unhealthy status indicates that the resource is down.
     */
    status?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.OprsDeploymentTag>[]>;
    /**
     * The time at which the event was generated. Date is accurate to Intersights clock. This time will be used to identify
     * order of events.
     */
    timeStamp?: pulumi.Input<string>;
    /**
     * Number of replicas Unavailable.
     */
    unavailableReplicas?: pulumi.Input<number>;
    /**
     * The versioning info for this managed object.
     */
    versionContexts?: pulumi.Input<pulumi.Input<inputs.OprsDeploymentVersionContext>[]>;
}

/**
 * The set of arguments for constructing a OprsDeployment resource.
 */
export interface OprsDeploymentArgs {
    /**
     * The Account ID for this managed object.
     */
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    ancestors?: pulumi.Input<pulumi.Input<inputs.OprsDeploymentAncestor>[]>;
    /**
     * A reference to a assetDeviceRegistration resource. When the $expand query parameter is specified, the referenced
     * resource is returned inline.
     */
    assists?: pulumi.Input<pulumi.Input<inputs.OprsDeploymentAssist>[]>;
    /**
     * Available number of replicas.
     */
    availableReplicas?: pulumi.Input<number>;
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
     * The expected number of replicas.
     */
    desiredReplicas?: pulumi.Input<number>;
    /**
     * The DomainGroup ID for this managed object.
     */
    domainGroupMoid?: pulumi.Input<string>;
    /**
     * The type of event which was triggered.
     */
    event?: pulumi.Input<string>;
    labels?: pulumi.Input<pulumi.Input<inputs.OprsDeploymentLabel>[]>;
    /**
     * The time when this managed object was last modified.
     */
    modTime?: pulumi.Input<string>;
    /**
     * The unique identifier of this Managed Object instance.
     */
    moid?: pulumi.Input<string>;
    /**
     * Agent name for which the event is triggered.
     */
    name?: pulumi.Input<string>;
    /**
     * Name space in which the agents are running.
     */
    namespace?: pulumi.Input<string>;
    /**
     * The fully-qualified name of the instantiated, concrete type. The value should be the same as the 'ClassId' property.
     */
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A reference to a moBaseMo resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    parents?: pulumi.Input<pulumi.Input<inputs.OprsDeploymentParent>[]>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    permissionResources?: pulumi.Input<pulumi.Input<inputs.OprsDeploymentPermissionResource>[]>;
    /**
     * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs. Objects that are made
     * available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally
     * available to all end users or restricted to end users based on their license entitlement. Users can use this property to
     * differentiate the scope (global or a specific license tier) to which a shared MO belongs.
     */
    sharedScope?: pulumi.Input<string>;
    /**
     * Status which shows if the resource is healthy or not. * `` - An Unknown status indicates that the resource status is not
     * known. * `Healthy` - A healthy status indicates that the resource is healthy and running as per spec. * `Unhealthy` - An
     * unhealthy status indicates that the resource is down.
     */
    status?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.OprsDeploymentTag>[]>;
    /**
     * The time at which the event was generated. Date is accurate to Intersights clock. This time will be used to identify
     * order of events.
     */
    timeStamp?: pulumi.Input<string>;
    /**
     * Number of replicas Unavailable.
     */
    unavailableReplicas?: pulumi.Input<number>;
    /**
     * The versioning info for this managed object.
     */
    versionContexts?: pulumi.Input<pulumi.Input<inputs.OprsDeploymentVersionContext>[]>;
}
