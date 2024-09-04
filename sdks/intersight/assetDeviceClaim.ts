// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AssetDeviceClaim extends pulumi.CustomResource {
    /**
     * Get an existing AssetDeviceClaim resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AssetDeviceClaimState, opts?: pulumi.CustomResourceOptions): AssetDeviceClaim {
        return new AssetDeviceClaim(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'intersight:index/assetDeviceClaim:AssetDeviceClaim';

    /**
     * Returns true if the given object is an instance of AssetDeviceClaim.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AssetDeviceClaim {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AssetDeviceClaim.__pulumiType;
    }

    /**
     * The Account ID for this managed object.
     */
    public readonly accountMoid!: pulumi.Output<string>;
    /**
     * A reference to a iamAccount resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    public readonly accounts!: pulumi.Output<outputs.AssetDeviceClaimAccount[]>;
    public readonly additionalProperties!: pulumi.Output<string | undefined>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    public readonly ancestors!: pulumi.Output<outputs.AssetDeviceClaimAncestor[]>;
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
     * An array of relationships to moBaseMo resources.
     */
    public readonly customPermissionResources!: pulumi.Output<outputs.AssetDeviceClaimCustomPermissionResource[]>;
    /**
     * A reference to a assetDeviceRegistration resource. When the $expand query parameter is specified, the referenced
     * resource is returned inline.
     */
    public readonly devices!: pulumi.Output<outputs.AssetDeviceClaimDevice[]>;
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
    public readonly parents!: pulumi.Output<outputs.AssetDeviceClaimParent[]>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    public readonly permissionResources!: pulumi.Output<outputs.AssetDeviceClaimPermissionResource[]>;
    /**
     * A reference to a resourceReservation resource. When the $expand query parameter is specified, the referenced resource is
     * returned inline.
     */
    public readonly reservations!: pulumi.Output<outputs.AssetDeviceClaimReservation[]>;
    /**
     * Obtained from the device connector management UI or API (REST endpoint '/connector/SecurityTokens').
     */
    public readonly securityToken!: pulumi.Output<string | undefined>;
    /**
     * Obtained from the device connector management UI or API (REST endpoint '/connector/DeviceIdentifiers').
     */
    public readonly serialNumber!: pulumi.Output<string | undefined>;
    /**
     * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs. Objects that are made
     * available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally
     * available to all end users or restricted to end users based on their license entitlement. Users can use this property to
     * differentiate the scope (global or a specific license tier) to which a shared MO belongs.
     */
    public readonly sharedScope!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<outputs.AssetDeviceClaimTag[]>;
    /**
     * The versioning info for this managed object.
     */
    public readonly versionContexts!: pulumi.Output<outputs.AssetDeviceClaimVersionContext[]>;

    /**
     * Create a AssetDeviceClaim resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: AssetDeviceClaimArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AssetDeviceClaimArgs | AssetDeviceClaimState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AssetDeviceClaimState | undefined;
            resourceInputs["accountMoid"] = state ? state.accountMoid : undefined;
            resourceInputs["accounts"] = state ? state.accounts : undefined;
            resourceInputs["additionalProperties"] = state ? state.additionalProperties : undefined;
            resourceInputs["ancestors"] = state ? state.ancestors : undefined;
            resourceInputs["classId"] = state ? state.classId : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["customPermissionResources"] = state ? state.customPermissionResources : undefined;
            resourceInputs["devices"] = state ? state.devices : undefined;
            resourceInputs["domainGroupMoid"] = state ? state.domainGroupMoid : undefined;
            resourceInputs["modTime"] = state ? state.modTime : undefined;
            resourceInputs["moid"] = state ? state.moid : undefined;
            resourceInputs["objectType"] = state ? state.objectType : undefined;
            resourceInputs["owners"] = state ? state.owners : undefined;
            resourceInputs["parents"] = state ? state.parents : undefined;
            resourceInputs["permissionResources"] = state ? state.permissionResources : undefined;
            resourceInputs["reservations"] = state ? state.reservations : undefined;
            resourceInputs["securityToken"] = state ? state.securityToken : undefined;
            resourceInputs["serialNumber"] = state ? state.serialNumber : undefined;
            resourceInputs["sharedScope"] = state ? state.sharedScope : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["versionContexts"] = state ? state.versionContexts : undefined;
        } else {
            const args = argsOrState as AssetDeviceClaimArgs | undefined;
            resourceInputs["accountMoid"] = args ? args.accountMoid : undefined;
            resourceInputs["accounts"] = args ? args.accounts : undefined;
            resourceInputs["additionalProperties"] = args ? args.additionalProperties : undefined;
            resourceInputs["ancestors"] = args ? args.ancestors : undefined;
            resourceInputs["classId"] = args ? args.classId : undefined;
            resourceInputs["createTime"] = args ? args.createTime : undefined;
            resourceInputs["customPermissionResources"] = args ? args.customPermissionResources : undefined;
            resourceInputs["devices"] = args ? args.devices : undefined;
            resourceInputs["domainGroupMoid"] = args ? args.domainGroupMoid : undefined;
            resourceInputs["modTime"] = args ? args.modTime : undefined;
            resourceInputs["moid"] = args ? args.moid : undefined;
            resourceInputs["objectType"] = args ? args.objectType : undefined;
            resourceInputs["owners"] = args ? args.owners : undefined;
            resourceInputs["parents"] = args ? args.parents : undefined;
            resourceInputs["permissionResources"] = args ? args.permissionResources : undefined;
            resourceInputs["reservations"] = args ? args.reservations : undefined;
            resourceInputs["securityToken"] = args ? args.securityToken : undefined;
            resourceInputs["serialNumber"] = args ? args.serialNumber : undefined;
            resourceInputs["sharedScope"] = args ? args.sharedScope : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["versionContexts"] = args ? args.versionContexts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AssetDeviceClaim.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AssetDeviceClaim resources.
 */
export interface AssetDeviceClaimState {
    /**
     * The Account ID for this managed object.
     */
    accountMoid?: pulumi.Input<string>;
    /**
     * A reference to a iamAccount resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    accounts?: pulumi.Input<pulumi.Input<inputs.AssetDeviceClaimAccount>[]>;
    additionalProperties?: pulumi.Input<string>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    ancestors?: pulumi.Input<pulumi.Input<inputs.AssetDeviceClaimAncestor>[]>;
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
     * An array of relationships to moBaseMo resources.
     */
    customPermissionResources?: pulumi.Input<pulumi.Input<inputs.AssetDeviceClaimCustomPermissionResource>[]>;
    /**
     * A reference to a assetDeviceRegistration resource. When the $expand query parameter is specified, the referenced
     * resource is returned inline.
     */
    devices?: pulumi.Input<pulumi.Input<inputs.AssetDeviceClaimDevice>[]>;
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
    parents?: pulumi.Input<pulumi.Input<inputs.AssetDeviceClaimParent>[]>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    permissionResources?: pulumi.Input<pulumi.Input<inputs.AssetDeviceClaimPermissionResource>[]>;
    /**
     * A reference to a resourceReservation resource. When the $expand query parameter is specified, the referenced resource is
     * returned inline.
     */
    reservations?: pulumi.Input<pulumi.Input<inputs.AssetDeviceClaimReservation>[]>;
    /**
     * Obtained from the device connector management UI or API (REST endpoint '/connector/SecurityTokens').
     */
    securityToken?: pulumi.Input<string>;
    /**
     * Obtained from the device connector management UI or API (REST endpoint '/connector/DeviceIdentifiers').
     */
    serialNumber?: pulumi.Input<string>;
    /**
     * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs. Objects that are made
     * available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally
     * available to all end users or restricted to end users based on their license entitlement. Users can use this property to
     * differentiate the scope (global or a specific license tier) to which a shared MO belongs.
     */
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.AssetDeviceClaimTag>[]>;
    /**
     * The versioning info for this managed object.
     */
    versionContexts?: pulumi.Input<pulumi.Input<inputs.AssetDeviceClaimVersionContext>[]>;
}

/**
 * The set of arguments for constructing a AssetDeviceClaim resource.
 */
export interface AssetDeviceClaimArgs {
    /**
     * The Account ID for this managed object.
     */
    accountMoid?: pulumi.Input<string>;
    /**
     * A reference to a iamAccount resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    accounts?: pulumi.Input<pulumi.Input<inputs.AssetDeviceClaimAccount>[]>;
    additionalProperties?: pulumi.Input<string>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    ancestors?: pulumi.Input<pulumi.Input<inputs.AssetDeviceClaimAncestor>[]>;
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
     * An array of relationships to moBaseMo resources.
     */
    customPermissionResources?: pulumi.Input<pulumi.Input<inputs.AssetDeviceClaimCustomPermissionResource>[]>;
    /**
     * A reference to a assetDeviceRegistration resource. When the $expand query parameter is specified, the referenced
     * resource is returned inline.
     */
    devices?: pulumi.Input<pulumi.Input<inputs.AssetDeviceClaimDevice>[]>;
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
    parents?: pulumi.Input<pulumi.Input<inputs.AssetDeviceClaimParent>[]>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    permissionResources?: pulumi.Input<pulumi.Input<inputs.AssetDeviceClaimPermissionResource>[]>;
    /**
     * A reference to a resourceReservation resource. When the $expand query parameter is specified, the referenced resource is
     * returned inline.
     */
    reservations?: pulumi.Input<pulumi.Input<inputs.AssetDeviceClaimReservation>[]>;
    /**
     * Obtained from the device connector management UI or API (REST endpoint '/connector/SecurityTokens').
     */
    securityToken?: pulumi.Input<string>;
    /**
     * Obtained from the device connector management UI or API (REST endpoint '/connector/DeviceIdentifiers').
     */
    serialNumber?: pulumi.Input<string>;
    /**
     * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs. Objects that are made
     * available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally
     * available to all end users or restricted to end users based on their license entitlement. Users can use this property to
     * differentiate the scope (global or a specific license tier) to which a shared MO belongs.
     */
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.AssetDeviceClaimTag>[]>;
    /**
     * The versioning info for this managed object.
     */
    versionContexts?: pulumi.Input<pulumi.Input<inputs.AssetDeviceClaimVersionContext>[]>;
}
