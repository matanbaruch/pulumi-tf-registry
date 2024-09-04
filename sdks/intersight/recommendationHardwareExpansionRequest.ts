// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class RecommendationHardwareExpansionRequest extends pulumi.CustomResource {
    /**
     * Get an existing RecommendationHardwareExpansionRequest resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RecommendationHardwareExpansionRequestState, opts?: pulumi.CustomResourceOptions): RecommendationHardwareExpansionRequest {
        return new RecommendationHardwareExpansionRequest(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'intersight:index/recommendationHardwareExpansionRequest:RecommendationHardwareExpansionRequest';

    /**
     * Returns true if the given object is an instance of RecommendationHardwareExpansionRequest.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RecommendationHardwareExpansionRequest {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RecommendationHardwareExpansionRequest.__pulumiType;
    }

    /**
     * The Account ID for this managed object.
     */
    public readonly accountMoid!: pulumi.Output<string>;
    /**
     * Action to be triggered for computing recommendation. Default value is None. * `None` - The Enum value None represents
     * that no action is triggered on the forecast Instance managed object. * `Evaluate` - The Enum value Evaluate represents
     * that a re-evaluation of the forecast needs to be triggered.
     */
    public readonly action!: pulumi.Output<string | undefined>;
    public readonly additionalProperties!: pulumi.Output<string | undefined>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    public readonly ancestors!: pulumi.Output<outputs.RecommendationHardwareExpansionRequestAncestor[]>;
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
     * An array of relationships to recommendationHardwareExpansionRequestItem resources.
     */
    public readonly hwExpansionRequestItems!: pulumi.Output<outputs.RecommendationHardwareExpansionRequestHwExpansionRequestItem[]>;
    /**
     * User visible error message for the Hardware Expansion request.
     */
    public readonly message!: pulumi.Output<string>;
    /**
     * The time when this managed object was last modified.
     */
    public readonly modTime!: pulumi.Output<string>;
    /**
     * The unique identifier of this Managed Object instance.
     */
    public readonly moid!: pulumi.Output<string>;
    /**
     * The name of the expansion specification.
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
    public readonly parents!: pulumi.Output<outputs.RecommendationHardwareExpansionRequestParent[]>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    public readonly permissionResources!: pulumi.Output<outputs.RecommendationHardwareExpansionRequestPermissionResource[]>;
    /**
     * A reference to a assetDeviceRegistration resource. When the $expand query parameter is specified, the referenced
     * resource is returned inline.
     */
    public readonly registeredDevices!: pulumi.Output<outputs.RecommendationHardwareExpansionRequestRegisteredDevice[]>;
    /**
     * The time when the expansion was requested.
     */
    public readonly requestTime!: pulumi.Output<string>;
    /**
     * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs. Objects that are made
     * available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally
     * available to all end users or restricted to end users based on their license entitlement. Users can use this property to
     * differentiate the scope (global or a specific license tier) to which a shared MO belongs.
     */
    public readonly sharedScope!: pulumi.Output<string>;
    /**
     * Status of the Hardware Expansion request. * `None` - The Enum value None represents the default status value before any
     * API call is made. * `Success` - The Enum value Success represents that the API call returned with success. * `Fail` -
     * The Enum value Fail represents that the API call returned with a failure.
     */
    public readonly status!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<outputs.RecommendationHardwareExpansionRequestTag[]>;
    /**
     * The versioning info for this managed object.
     */
    public readonly versionContexts!: pulumi.Output<outputs.RecommendationHardwareExpansionRequestVersionContext[]>;

    /**
     * Create a RecommendationHardwareExpansionRequest resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: RecommendationHardwareExpansionRequestArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RecommendationHardwareExpansionRequestArgs | RecommendationHardwareExpansionRequestState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RecommendationHardwareExpansionRequestState | undefined;
            resourceInputs["accountMoid"] = state ? state.accountMoid : undefined;
            resourceInputs["action"] = state ? state.action : undefined;
            resourceInputs["additionalProperties"] = state ? state.additionalProperties : undefined;
            resourceInputs["ancestors"] = state ? state.ancestors : undefined;
            resourceInputs["classId"] = state ? state.classId : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["domainGroupMoid"] = state ? state.domainGroupMoid : undefined;
            resourceInputs["hwExpansionRequestItems"] = state ? state.hwExpansionRequestItems : undefined;
            resourceInputs["message"] = state ? state.message : undefined;
            resourceInputs["modTime"] = state ? state.modTime : undefined;
            resourceInputs["moid"] = state ? state.moid : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["objectType"] = state ? state.objectType : undefined;
            resourceInputs["owners"] = state ? state.owners : undefined;
            resourceInputs["parents"] = state ? state.parents : undefined;
            resourceInputs["permissionResources"] = state ? state.permissionResources : undefined;
            resourceInputs["registeredDevices"] = state ? state.registeredDevices : undefined;
            resourceInputs["requestTime"] = state ? state.requestTime : undefined;
            resourceInputs["sharedScope"] = state ? state.sharedScope : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["versionContexts"] = state ? state.versionContexts : undefined;
        } else {
            const args = argsOrState as RecommendationHardwareExpansionRequestArgs | undefined;
            resourceInputs["accountMoid"] = args ? args.accountMoid : undefined;
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["additionalProperties"] = args ? args.additionalProperties : undefined;
            resourceInputs["ancestors"] = args ? args.ancestors : undefined;
            resourceInputs["classId"] = args ? args.classId : undefined;
            resourceInputs["createTime"] = args ? args.createTime : undefined;
            resourceInputs["domainGroupMoid"] = args ? args.domainGroupMoid : undefined;
            resourceInputs["hwExpansionRequestItems"] = args ? args.hwExpansionRequestItems : undefined;
            resourceInputs["message"] = args ? args.message : undefined;
            resourceInputs["modTime"] = args ? args.modTime : undefined;
            resourceInputs["moid"] = args ? args.moid : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["objectType"] = args ? args.objectType : undefined;
            resourceInputs["owners"] = args ? args.owners : undefined;
            resourceInputs["parents"] = args ? args.parents : undefined;
            resourceInputs["permissionResources"] = args ? args.permissionResources : undefined;
            resourceInputs["registeredDevices"] = args ? args.registeredDevices : undefined;
            resourceInputs["requestTime"] = args ? args.requestTime : undefined;
            resourceInputs["sharedScope"] = args ? args.sharedScope : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["versionContexts"] = args ? args.versionContexts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RecommendationHardwareExpansionRequest.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RecommendationHardwareExpansionRequest resources.
 */
export interface RecommendationHardwareExpansionRequestState {
    /**
     * The Account ID for this managed object.
     */
    accountMoid?: pulumi.Input<string>;
    /**
     * Action to be triggered for computing recommendation. Default value is None. * `None` - The Enum value None represents
     * that no action is triggered on the forecast Instance managed object. * `Evaluate` - The Enum value Evaluate represents
     * that a re-evaluation of the forecast needs to be triggered.
     */
    action?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    ancestors?: pulumi.Input<pulumi.Input<inputs.RecommendationHardwareExpansionRequestAncestor>[]>;
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
     * An array of relationships to recommendationHardwareExpansionRequestItem resources.
     */
    hwExpansionRequestItems?: pulumi.Input<pulumi.Input<inputs.RecommendationHardwareExpansionRequestHwExpansionRequestItem>[]>;
    /**
     * User visible error message for the Hardware Expansion request.
     */
    message?: pulumi.Input<string>;
    /**
     * The time when this managed object was last modified.
     */
    modTime?: pulumi.Input<string>;
    /**
     * The unique identifier of this Managed Object instance.
     */
    moid?: pulumi.Input<string>;
    /**
     * The name of the expansion specification.
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
    parents?: pulumi.Input<pulumi.Input<inputs.RecommendationHardwareExpansionRequestParent>[]>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    permissionResources?: pulumi.Input<pulumi.Input<inputs.RecommendationHardwareExpansionRequestPermissionResource>[]>;
    /**
     * A reference to a assetDeviceRegistration resource. When the $expand query parameter is specified, the referenced
     * resource is returned inline.
     */
    registeredDevices?: pulumi.Input<pulumi.Input<inputs.RecommendationHardwareExpansionRequestRegisteredDevice>[]>;
    /**
     * The time when the expansion was requested.
     */
    requestTime?: pulumi.Input<string>;
    /**
     * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs. Objects that are made
     * available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally
     * available to all end users or restricted to end users based on their license entitlement. Users can use this property to
     * differentiate the scope (global or a specific license tier) to which a shared MO belongs.
     */
    sharedScope?: pulumi.Input<string>;
    /**
     * Status of the Hardware Expansion request. * `None` - The Enum value None represents the default status value before any
     * API call is made. * `Success` - The Enum value Success represents that the API call returned with success. * `Fail` -
     * The Enum value Fail represents that the API call returned with a failure.
     */
    status?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.RecommendationHardwareExpansionRequestTag>[]>;
    /**
     * The versioning info for this managed object.
     */
    versionContexts?: pulumi.Input<pulumi.Input<inputs.RecommendationHardwareExpansionRequestVersionContext>[]>;
}

/**
 * The set of arguments for constructing a RecommendationHardwareExpansionRequest resource.
 */
export interface RecommendationHardwareExpansionRequestArgs {
    /**
     * The Account ID for this managed object.
     */
    accountMoid?: pulumi.Input<string>;
    /**
     * Action to be triggered for computing recommendation. Default value is None. * `None` - The Enum value None represents
     * that no action is triggered on the forecast Instance managed object. * `Evaluate` - The Enum value Evaluate represents
     * that a re-evaluation of the forecast needs to be triggered.
     */
    action?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    ancestors?: pulumi.Input<pulumi.Input<inputs.RecommendationHardwareExpansionRequestAncestor>[]>;
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
     * An array of relationships to recommendationHardwareExpansionRequestItem resources.
     */
    hwExpansionRequestItems?: pulumi.Input<pulumi.Input<inputs.RecommendationHardwareExpansionRequestHwExpansionRequestItem>[]>;
    /**
     * User visible error message for the Hardware Expansion request.
     */
    message?: pulumi.Input<string>;
    /**
     * The time when this managed object was last modified.
     */
    modTime?: pulumi.Input<string>;
    /**
     * The unique identifier of this Managed Object instance.
     */
    moid?: pulumi.Input<string>;
    /**
     * The name of the expansion specification.
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
    parents?: pulumi.Input<pulumi.Input<inputs.RecommendationHardwareExpansionRequestParent>[]>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    permissionResources?: pulumi.Input<pulumi.Input<inputs.RecommendationHardwareExpansionRequestPermissionResource>[]>;
    /**
     * A reference to a assetDeviceRegistration resource. When the $expand query parameter is specified, the referenced
     * resource is returned inline.
     */
    registeredDevices?: pulumi.Input<pulumi.Input<inputs.RecommendationHardwareExpansionRequestRegisteredDevice>[]>;
    /**
     * The time when the expansion was requested.
     */
    requestTime?: pulumi.Input<string>;
    /**
     * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs. Objects that are made
     * available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally
     * available to all end users or restricted to end users based on their license entitlement. Users can use this property to
     * differentiate the scope (global or a specific license tier) to which a shared MO belongs.
     */
    sharedScope?: pulumi.Input<string>;
    /**
     * Status of the Hardware Expansion request. * `None` - The Enum value None represents the default status value before any
     * API call is made. * `Success` - The Enum value Success represents that the API call returned with success. * `Fail` -
     * The Enum value Fail represents that the API call returned with a failure.
     */
    status?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.RecommendationHardwareExpansionRequestTag>[]>;
    /**
     * The versioning info for this managed object.
     */
    versionContexts?: pulumi.Input<pulumi.Input<inputs.RecommendationHardwareExpansionRequestVersionContext>[]>;
}
