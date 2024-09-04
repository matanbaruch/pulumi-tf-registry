// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class TechsupportmanagementTechSupportBundle extends pulumi.CustomResource {
    /**
     * Get an existing TechsupportmanagementTechSupportBundle resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TechsupportmanagementTechSupportBundleState, opts?: pulumi.CustomResourceOptions): TechsupportmanagementTechSupportBundle {
        return new TechsupportmanagementTechSupportBundle(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'intersight:index/techsupportmanagementTechSupportBundle:TechsupportmanagementTechSupportBundle';

    /**
     * Returns true if the given object is an instance of TechsupportmanagementTechSupportBundle.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TechsupportmanagementTechSupportBundle {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TechsupportmanagementTechSupportBundle.__pulumiType;
    }

    /**
     * The Account ID for this managed object.
     */
    public readonly accountMoid!: pulumi.Output<string>;
    public readonly additionalProperties!: pulumi.Output<string | undefined>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    public readonly ancestors!: pulumi.Output<outputs.TechsupportmanagementTechSupportBundleAncestor[]>;
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
     * The device identifier used to uniquely identify an individual device.
     */
    public readonly deviceIdentifier!: pulumi.Output<string>;
    /**
     * A reference to a assetDeviceRegistration resource. When the $expand query parameter is specified, the referenced
     * resource is returned inline.
     */
    public readonly deviceRegistrations!: pulumi.Output<outputs.TechsupportmanagementTechSupportBundleDeviceRegistration[]>;
    /**
     * The device type obtained from the inventory.
     */
    public readonly deviceType!: pulumi.Output<string>;
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
     * The fully-qualified name of the instantiated, concrete type. The value should be the same as the 'ClassId' property.
     */
    public readonly objectType!: pulumi.Output<string | undefined>;
    public readonly owners!: pulumi.Output<string[]>;
    /**
     * A reference to a moBaseMo resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    public readonly parents!: pulumi.Output<outputs.TechsupportmanagementTechSupportBundleParent[]>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    public readonly permissionResources!: pulumi.Output<outputs.TechsupportmanagementTechSupportBundlePermissionResource[]>;
    /**
     * Product identification of the device.
     */
    public readonly pid!: pulumi.Output<string | undefined>;
    /**
     * A platform specific data payload.
     */
    public readonly platformParams!: pulumi.Output<outputs.TechsupportmanagementTechSupportBundlePlatformParam[]>;
    public readonly platformType!: pulumi.Output<string | undefined>;
    /**
     * Serial number of the device.
     */
    public readonly serial!: pulumi.Output<string | undefined>;
    /**
     * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs. Objects that are made
     * available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally
     * available to all end users or restricted to end users based on their license entitlement. Users can use this property to
     * differentiate the scope (global or a specific license tier) to which a shared MO belongs.
     */
    public readonly sharedScope!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<outputs.TechsupportmanagementTechSupportBundleTag[]>;
    /**
     * A reference to a moBaseMo resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    public readonly targetResources!: pulumi.Output<outputs.TechsupportmanagementTechSupportBundleTargetResource[]>;
    /**
     * A reference to a techsupportmanagementTechSupportStatus resource. When the $expand query parameter is specified, the
     * referenced resource is returned inline.
     */
    public readonly techSupportStatuses!: pulumi.Output<outputs.TechsupportmanagementTechSupportBundleTechSupportStatus[]>;
    /**
     * The versioning info for this managed object.
     */
    public readonly versionContexts!: pulumi.Output<outputs.TechsupportmanagementTechSupportBundleVersionContext[]>;

    /**
     * Create a TechsupportmanagementTechSupportBundle resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: TechsupportmanagementTechSupportBundleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TechsupportmanagementTechSupportBundleArgs | TechsupportmanagementTechSupportBundleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TechsupportmanagementTechSupportBundleState | undefined;
            resourceInputs["accountMoid"] = state ? state.accountMoid : undefined;
            resourceInputs["additionalProperties"] = state ? state.additionalProperties : undefined;
            resourceInputs["ancestors"] = state ? state.ancestors : undefined;
            resourceInputs["classId"] = state ? state.classId : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["deviceIdentifier"] = state ? state.deviceIdentifier : undefined;
            resourceInputs["deviceRegistrations"] = state ? state.deviceRegistrations : undefined;
            resourceInputs["deviceType"] = state ? state.deviceType : undefined;
            resourceInputs["domainGroupMoid"] = state ? state.domainGroupMoid : undefined;
            resourceInputs["modTime"] = state ? state.modTime : undefined;
            resourceInputs["moid"] = state ? state.moid : undefined;
            resourceInputs["objectType"] = state ? state.objectType : undefined;
            resourceInputs["owners"] = state ? state.owners : undefined;
            resourceInputs["parents"] = state ? state.parents : undefined;
            resourceInputs["permissionResources"] = state ? state.permissionResources : undefined;
            resourceInputs["pid"] = state ? state.pid : undefined;
            resourceInputs["platformParams"] = state ? state.platformParams : undefined;
            resourceInputs["platformType"] = state ? state.platformType : undefined;
            resourceInputs["serial"] = state ? state.serial : undefined;
            resourceInputs["sharedScope"] = state ? state.sharedScope : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["targetResources"] = state ? state.targetResources : undefined;
            resourceInputs["techSupportStatuses"] = state ? state.techSupportStatuses : undefined;
            resourceInputs["versionContexts"] = state ? state.versionContexts : undefined;
        } else {
            const args = argsOrState as TechsupportmanagementTechSupportBundleArgs | undefined;
            resourceInputs["accountMoid"] = args ? args.accountMoid : undefined;
            resourceInputs["additionalProperties"] = args ? args.additionalProperties : undefined;
            resourceInputs["ancestors"] = args ? args.ancestors : undefined;
            resourceInputs["classId"] = args ? args.classId : undefined;
            resourceInputs["createTime"] = args ? args.createTime : undefined;
            resourceInputs["deviceIdentifier"] = args ? args.deviceIdentifier : undefined;
            resourceInputs["deviceRegistrations"] = args ? args.deviceRegistrations : undefined;
            resourceInputs["deviceType"] = args ? args.deviceType : undefined;
            resourceInputs["domainGroupMoid"] = args ? args.domainGroupMoid : undefined;
            resourceInputs["modTime"] = args ? args.modTime : undefined;
            resourceInputs["moid"] = args ? args.moid : undefined;
            resourceInputs["objectType"] = args ? args.objectType : undefined;
            resourceInputs["owners"] = args ? args.owners : undefined;
            resourceInputs["parents"] = args ? args.parents : undefined;
            resourceInputs["permissionResources"] = args ? args.permissionResources : undefined;
            resourceInputs["pid"] = args ? args.pid : undefined;
            resourceInputs["platformParams"] = args ? args.platformParams : undefined;
            resourceInputs["platformType"] = args ? args.platformType : undefined;
            resourceInputs["serial"] = args ? args.serial : undefined;
            resourceInputs["sharedScope"] = args ? args.sharedScope : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["targetResources"] = args ? args.targetResources : undefined;
            resourceInputs["techSupportStatuses"] = args ? args.techSupportStatuses : undefined;
            resourceInputs["versionContexts"] = args ? args.versionContexts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(TechsupportmanagementTechSupportBundle.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering TechsupportmanagementTechSupportBundle resources.
 */
export interface TechsupportmanagementTechSupportBundleState {
    /**
     * The Account ID for this managed object.
     */
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    ancestors?: pulumi.Input<pulumi.Input<inputs.TechsupportmanagementTechSupportBundleAncestor>[]>;
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
     * The device identifier used to uniquely identify an individual device.
     */
    deviceIdentifier?: pulumi.Input<string>;
    /**
     * A reference to a assetDeviceRegistration resource. When the $expand query parameter is specified, the referenced
     * resource is returned inline.
     */
    deviceRegistrations?: pulumi.Input<pulumi.Input<inputs.TechsupportmanagementTechSupportBundleDeviceRegistration>[]>;
    /**
     * The device type obtained from the inventory.
     */
    deviceType?: pulumi.Input<string>;
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
     * The fully-qualified name of the instantiated, concrete type. The value should be the same as the 'ClassId' property.
     */
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A reference to a moBaseMo resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    parents?: pulumi.Input<pulumi.Input<inputs.TechsupportmanagementTechSupportBundleParent>[]>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    permissionResources?: pulumi.Input<pulumi.Input<inputs.TechsupportmanagementTechSupportBundlePermissionResource>[]>;
    /**
     * Product identification of the device.
     */
    pid?: pulumi.Input<string>;
    /**
     * A platform specific data payload.
     */
    platformParams?: pulumi.Input<pulumi.Input<inputs.TechsupportmanagementTechSupportBundlePlatformParam>[]>;
    platformType?: pulumi.Input<string>;
    /**
     * Serial number of the device.
     */
    serial?: pulumi.Input<string>;
    /**
     * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs. Objects that are made
     * available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally
     * available to all end users or restricted to end users based on their license entitlement. Users can use this property to
     * differentiate the scope (global or a specific license tier) to which a shared MO belongs.
     */
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.TechsupportmanagementTechSupportBundleTag>[]>;
    /**
     * A reference to a moBaseMo resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    targetResources?: pulumi.Input<pulumi.Input<inputs.TechsupportmanagementTechSupportBundleTargetResource>[]>;
    /**
     * A reference to a techsupportmanagementTechSupportStatus resource. When the $expand query parameter is specified, the
     * referenced resource is returned inline.
     */
    techSupportStatuses?: pulumi.Input<pulumi.Input<inputs.TechsupportmanagementTechSupportBundleTechSupportStatus>[]>;
    /**
     * The versioning info for this managed object.
     */
    versionContexts?: pulumi.Input<pulumi.Input<inputs.TechsupportmanagementTechSupportBundleVersionContext>[]>;
}

/**
 * The set of arguments for constructing a TechsupportmanagementTechSupportBundle resource.
 */
export interface TechsupportmanagementTechSupportBundleArgs {
    /**
     * The Account ID for this managed object.
     */
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    ancestors?: pulumi.Input<pulumi.Input<inputs.TechsupportmanagementTechSupportBundleAncestor>[]>;
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
     * The device identifier used to uniquely identify an individual device.
     */
    deviceIdentifier?: pulumi.Input<string>;
    /**
     * A reference to a assetDeviceRegistration resource. When the $expand query parameter is specified, the referenced
     * resource is returned inline.
     */
    deviceRegistrations?: pulumi.Input<pulumi.Input<inputs.TechsupportmanagementTechSupportBundleDeviceRegistration>[]>;
    /**
     * The device type obtained from the inventory.
     */
    deviceType?: pulumi.Input<string>;
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
     * The fully-qualified name of the instantiated, concrete type. The value should be the same as the 'ClassId' property.
     */
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A reference to a moBaseMo resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    parents?: pulumi.Input<pulumi.Input<inputs.TechsupportmanagementTechSupportBundleParent>[]>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    permissionResources?: pulumi.Input<pulumi.Input<inputs.TechsupportmanagementTechSupportBundlePermissionResource>[]>;
    /**
     * Product identification of the device.
     */
    pid?: pulumi.Input<string>;
    /**
     * A platform specific data payload.
     */
    platformParams?: pulumi.Input<pulumi.Input<inputs.TechsupportmanagementTechSupportBundlePlatformParam>[]>;
    platformType?: pulumi.Input<string>;
    /**
     * Serial number of the device.
     */
    serial?: pulumi.Input<string>;
    /**
     * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs. Objects that are made
     * available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally
     * available to all end users or restricted to end users based on their license entitlement. Users can use this property to
     * differentiate the scope (global or a specific license tier) to which a shared MO belongs.
     */
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.TechsupportmanagementTechSupportBundleTag>[]>;
    /**
     * A reference to a moBaseMo resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    targetResources?: pulumi.Input<pulumi.Input<inputs.TechsupportmanagementTechSupportBundleTargetResource>[]>;
    /**
     * A reference to a techsupportmanagementTechSupportStatus resource. When the $expand query parameter is specified, the
     * referenced resource is returned inline.
     */
    techSupportStatuses?: pulumi.Input<pulumi.Input<inputs.TechsupportmanagementTechSupportBundleTechSupportStatus>[]>;
    /**
     * The versioning info for this managed object.
     */
    versionContexts?: pulumi.Input<pulumi.Input<inputs.TechsupportmanagementTechSupportBundleVersionContext>[]>;
}
