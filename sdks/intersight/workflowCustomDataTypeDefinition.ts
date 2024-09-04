// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class WorkflowCustomDataTypeDefinition extends pulumi.CustomResource {
    /**
     * Get an existing WorkflowCustomDataTypeDefinition resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WorkflowCustomDataTypeDefinitionState, opts?: pulumi.CustomResourceOptions): WorkflowCustomDataTypeDefinition {
        return new WorkflowCustomDataTypeDefinition(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'intersight:index/workflowCustomDataTypeDefinition:WorkflowCustomDataTypeDefinition';

    /**
     * Returns true if the given object is an instance of WorkflowCustomDataTypeDefinition.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WorkflowCustomDataTypeDefinition {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WorkflowCustomDataTypeDefinition.__pulumiType;
    }

    /**
     * The Account ID for this managed object.
     */
    public readonly accountMoid!: pulumi.Output<string>;
    public readonly additionalProperties!: pulumi.Output<string | undefined>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    public readonly ancestors!: pulumi.Output<outputs.WorkflowCustomDataTypeDefinitionAncestor[]>;
    /**
     * A reference to a workflowCatalog resource. When the $expand query parameter is specified, the referenced resource is
     * returned inline.
     */
    public readonly catalogs!: pulumi.Output<outputs.WorkflowCustomDataTypeDefinitionCatalog[]>;
    /**
     * The fully-qualified name of the instantiated, concrete type. This property is used as a discriminator to identify the
     * type of the payload when marshaling and unmarshaling data.
     */
    public readonly classId!: pulumi.Output<string | undefined>;
    /**
     * A reference to a workflowCustomDataTypeDefinition resource. When the $expand query parameter is specified, the
     * referenced resource is returned inline.
     */
    public readonly clonedFroms!: pulumi.Output<outputs.WorkflowCustomDataTypeDefinitionClonedFrom[]>;
    /**
     * When true this data type definition is a collection of type definitions to represent composite data like JSON.
     */
    public readonly compositeType!: pulumi.Output<boolean | undefined>;
    /**
     * The time when this managed object was created.
     */
    public readonly createTime!: pulumi.Output<string>;
    /**
     * A human-friendly description of this custom data type indicating it's domain and usage.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The DomainGroup ID for this managed object.
     */
    public readonly domainGroupMoid!: pulumi.Output<string>;
    /**
     * A user friendly short name to identify the custom data type definition. Label can only contain letters (a-z, A-Z),
     * numbers (0-9), hyphen (-), period (.), colon (:), space ( ), single quote ('), or an underscore (_) and must be at least
     * 2 characters.
     */
    public readonly label!: pulumi.Output<string | undefined>;
    /**
     * The time when this managed object was last modified.
     */
    public readonly modTime!: pulumi.Output<string>;
    /**
     * The unique identifier of this Managed Object instance.
     */
    public readonly moid!: pulumi.Output<string>;
    /**
     * The name of custom data type definition. The valid name can contain lower case and upper case alphabetic characters,
     * digits and special characters '-' and '_'.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The fully-qualified name of the instantiated, concrete type. The value should be the same as the 'ClassId' property.
     */
    public readonly objectType!: pulumi.Output<string | undefined>;
    public readonly owners!: pulumi.Output<string[]>;
    public readonly parameterSets!: pulumi.Output<outputs.WorkflowCustomDataTypeDefinitionParameterSet[]>;
    /**
     * A reference to a moBaseMo resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    public readonly parents!: pulumi.Output<outputs.WorkflowCustomDataTypeDefinitionParent[]>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    public readonly permissionResources!: pulumi.Output<outputs.WorkflowCustomDataTypeDefinitionPermissionResource[]>;
    /**
     * Type to capture all the properties for the custom data type definition.
     */
    public readonly properties!: pulumi.Output<outputs.WorkflowCustomDataTypeDefinitionProperty[]>;
    /**
     * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs. Objects that are made
     * available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally
     * available to all end users or restricted to end users based on their license entitlement. Users can use this property to
     * differentiate the scope (global or a specific license tier) to which a shared MO belongs.
     */
    public readonly sharedScope!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<outputs.WorkflowCustomDataTypeDefinitionTag[]>;
    public readonly typeDefinitions!: pulumi.Output<outputs.WorkflowCustomDataTypeDefinitionTypeDefinition[]>;
    /**
     * The versioning info for this managed object.
     */
    public readonly versionContexts!: pulumi.Output<outputs.WorkflowCustomDataTypeDefinitionVersionContext[]>;

    /**
     * Create a WorkflowCustomDataTypeDefinition resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: WorkflowCustomDataTypeDefinitionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WorkflowCustomDataTypeDefinitionArgs | WorkflowCustomDataTypeDefinitionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WorkflowCustomDataTypeDefinitionState | undefined;
            resourceInputs["accountMoid"] = state ? state.accountMoid : undefined;
            resourceInputs["additionalProperties"] = state ? state.additionalProperties : undefined;
            resourceInputs["ancestors"] = state ? state.ancestors : undefined;
            resourceInputs["catalogs"] = state ? state.catalogs : undefined;
            resourceInputs["classId"] = state ? state.classId : undefined;
            resourceInputs["clonedFroms"] = state ? state.clonedFroms : undefined;
            resourceInputs["compositeType"] = state ? state.compositeType : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["domainGroupMoid"] = state ? state.domainGroupMoid : undefined;
            resourceInputs["label"] = state ? state.label : undefined;
            resourceInputs["modTime"] = state ? state.modTime : undefined;
            resourceInputs["moid"] = state ? state.moid : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["objectType"] = state ? state.objectType : undefined;
            resourceInputs["owners"] = state ? state.owners : undefined;
            resourceInputs["parameterSets"] = state ? state.parameterSets : undefined;
            resourceInputs["parents"] = state ? state.parents : undefined;
            resourceInputs["permissionResources"] = state ? state.permissionResources : undefined;
            resourceInputs["properties"] = state ? state.properties : undefined;
            resourceInputs["sharedScope"] = state ? state.sharedScope : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["typeDefinitions"] = state ? state.typeDefinitions : undefined;
            resourceInputs["versionContexts"] = state ? state.versionContexts : undefined;
        } else {
            const args = argsOrState as WorkflowCustomDataTypeDefinitionArgs | undefined;
            resourceInputs["accountMoid"] = args ? args.accountMoid : undefined;
            resourceInputs["additionalProperties"] = args ? args.additionalProperties : undefined;
            resourceInputs["ancestors"] = args ? args.ancestors : undefined;
            resourceInputs["catalogs"] = args ? args.catalogs : undefined;
            resourceInputs["classId"] = args ? args.classId : undefined;
            resourceInputs["clonedFroms"] = args ? args.clonedFroms : undefined;
            resourceInputs["compositeType"] = args ? args.compositeType : undefined;
            resourceInputs["createTime"] = args ? args.createTime : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["domainGroupMoid"] = args ? args.domainGroupMoid : undefined;
            resourceInputs["label"] = args ? args.label : undefined;
            resourceInputs["modTime"] = args ? args.modTime : undefined;
            resourceInputs["moid"] = args ? args.moid : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["objectType"] = args ? args.objectType : undefined;
            resourceInputs["owners"] = args ? args.owners : undefined;
            resourceInputs["parameterSets"] = args ? args.parameterSets : undefined;
            resourceInputs["parents"] = args ? args.parents : undefined;
            resourceInputs["permissionResources"] = args ? args.permissionResources : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["sharedScope"] = args ? args.sharedScope : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["typeDefinitions"] = args ? args.typeDefinitions : undefined;
            resourceInputs["versionContexts"] = args ? args.versionContexts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(WorkflowCustomDataTypeDefinition.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering WorkflowCustomDataTypeDefinition resources.
 */
export interface WorkflowCustomDataTypeDefinitionState {
    /**
     * The Account ID for this managed object.
     */
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    ancestors?: pulumi.Input<pulumi.Input<inputs.WorkflowCustomDataTypeDefinitionAncestor>[]>;
    /**
     * A reference to a workflowCatalog resource. When the $expand query parameter is specified, the referenced resource is
     * returned inline.
     */
    catalogs?: pulumi.Input<pulumi.Input<inputs.WorkflowCustomDataTypeDefinitionCatalog>[]>;
    /**
     * The fully-qualified name of the instantiated, concrete type. This property is used as a discriminator to identify the
     * type of the payload when marshaling and unmarshaling data.
     */
    classId?: pulumi.Input<string>;
    /**
     * A reference to a workflowCustomDataTypeDefinition resource. When the $expand query parameter is specified, the
     * referenced resource is returned inline.
     */
    clonedFroms?: pulumi.Input<pulumi.Input<inputs.WorkflowCustomDataTypeDefinitionClonedFrom>[]>;
    /**
     * When true this data type definition is a collection of type definitions to represent composite data like JSON.
     */
    compositeType?: pulumi.Input<boolean>;
    /**
     * The time when this managed object was created.
     */
    createTime?: pulumi.Input<string>;
    /**
     * A human-friendly description of this custom data type indicating it's domain and usage.
     */
    description?: pulumi.Input<string>;
    /**
     * The DomainGroup ID for this managed object.
     */
    domainGroupMoid?: pulumi.Input<string>;
    /**
     * A user friendly short name to identify the custom data type definition. Label can only contain letters (a-z, A-Z),
     * numbers (0-9), hyphen (-), period (.), colon (:), space ( ), single quote ('), or an underscore (_) and must be at least
     * 2 characters.
     */
    label?: pulumi.Input<string>;
    /**
     * The time when this managed object was last modified.
     */
    modTime?: pulumi.Input<string>;
    /**
     * The unique identifier of this Managed Object instance.
     */
    moid?: pulumi.Input<string>;
    /**
     * The name of custom data type definition. The valid name can contain lower case and upper case alphabetic characters,
     * digits and special characters '-' and '_'.
     */
    name?: pulumi.Input<string>;
    /**
     * The fully-qualified name of the instantiated, concrete type. The value should be the same as the 'ClassId' property.
     */
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parameterSets?: pulumi.Input<pulumi.Input<inputs.WorkflowCustomDataTypeDefinitionParameterSet>[]>;
    /**
     * A reference to a moBaseMo resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    parents?: pulumi.Input<pulumi.Input<inputs.WorkflowCustomDataTypeDefinitionParent>[]>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    permissionResources?: pulumi.Input<pulumi.Input<inputs.WorkflowCustomDataTypeDefinitionPermissionResource>[]>;
    /**
     * Type to capture all the properties for the custom data type definition.
     */
    properties?: pulumi.Input<pulumi.Input<inputs.WorkflowCustomDataTypeDefinitionProperty>[]>;
    /**
     * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs. Objects that are made
     * available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally
     * available to all end users or restricted to end users based on their license entitlement. Users can use this property to
     * differentiate the scope (global or a specific license tier) to which a shared MO belongs.
     */
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.WorkflowCustomDataTypeDefinitionTag>[]>;
    typeDefinitions?: pulumi.Input<pulumi.Input<inputs.WorkflowCustomDataTypeDefinitionTypeDefinition>[]>;
    /**
     * The versioning info for this managed object.
     */
    versionContexts?: pulumi.Input<pulumi.Input<inputs.WorkflowCustomDataTypeDefinitionVersionContext>[]>;
}

/**
 * The set of arguments for constructing a WorkflowCustomDataTypeDefinition resource.
 */
export interface WorkflowCustomDataTypeDefinitionArgs {
    /**
     * The Account ID for this managed object.
     */
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    ancestors?: pulumi.Input<pulumi.Input<inputs.WorkflowCustomDataTypeDefinitionAncestor>[]>;
    /**
     * A reference to a workflowCatalog resource. When the $expand query parameter is specified, the referenced resource is
     * returned inline.
     */
    catalogs?: pulumi.Input<pulumi.Input<inputs.WorkflowCustomDataTypeDefinitionCatalog>[]>;
    /**
     * The fully-qualified name of the instantiated, concrete type. This property is used as a discriminator to identify the
     * type of the payload when marshaling and unmarshaling data.
     */
    classId?: pulumi.Input<string>;
    /**
     * A reference to a workflowCustomDataTypeDefinition resource. When the $expand query parameter is specified, the
     * referenced resource is returned inline.
     */
    clonedFroms?: pulumi.Input<pulumi.Input<inputs.WorkflowCustomDataTypeDefinitionClonedFrom>[]>;
    /**
     * When true this data type definition is a collection of type definitions to represent composite data like JSON.
     */
    compositeType?: pulumi.Input<boolean>;
    /**
     * The time when this managed object was created.
     */
    createTime?: pulumi.Input<string>;
    /**
     * A human-friendly description of this custom data type indicating it's domain and usage.
     */
    description?: pulumi.Input<string>;
    /**
     * The DomainGroup ID for this managed object.
     */
    domainGroupMoid?: pulumi.Input<string>;
    /**
     * A user friendly short name to identify the custom data type definition. Label can only contain letters (a-z, A-Z),
     * numbers (0-9), hyphen (-), period (.), colon (:), space ( ), single quote ('), or an underscore (_) and must be at least
     * 2 characters.
     */
    label?: pulumi.Input<string>;
    /**
     * The time when this managed object was last modified.
     */
    modTime?: pulumi.Input<string>;
    /**
     * The unique identifier of this Managed Object instance.
     */
    moid?: pulumi.Input<string>;
    /**
     * The name of custom data type definition. The valid name can contain lower case and upper case alphabetic characters,
     * digits and special characters '-' and '_'.
     */
    name?: pulumi.Input<string>;
    /**
     * The fully-qualified name of the instantiated, concrete type. The value should be the same as the 'ClassId' property.
     */
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    parameterSets?: pulumi.Input<pulumi.Input<inputs.WorkflowCustomDataTypeDefinitionParameterSet>[]>;
    /**
     * A reference to a moBaseMo resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    parents?: pulumi.Input<pulumi.Input<inputs.WorkflowCustomDataTypeDefinitionParent>[]>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    permissionResources?: pulumi.Input<pulumi.Input<inputs.WorkflowCustomDataTypeDefinitionPermissionResource>[]>;
    /**
     * Type to capture all the properties for the custom data type definition.
     */
    properties?: pulumi.Input<pulumi.Input<inputs.WorkflowCustomDataTypeDefinitionProperty>[]>;
    /**
     * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs. Objects that are made
     * available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally
     * available to all end users or restricted to end users based on their license entitlement. Users can use this property to
     * differentiate the scope (global or a specific license tier) to which a shared MO belongs.
     */
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.WorkflowCustomDataTypeDefinitionTag>[]>;
    typeDefinitions?: pulumi.Input<pulumi.Input<inputs.WorkflowCustomDataTypeDefinitionTypeDefinition>[]>;
    /**
     * The versioning info for this managed object.
     */
    versionContexts?: pulumi.Input<pulumi.Input<inputs.WorkflowCustomDataTypeDefinitionVersionContext>[]>;
}
