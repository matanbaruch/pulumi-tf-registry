// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ApplianceDeviceClaim extends pulumi.CustomResource {
    /**
     * Get an existing ApplianceDeviceClaim resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApplianceDeviceClaimState, opts?: pulumi.CustomResourceOptions): ApplianceDeviceClaim {
        return new ApplianceDeviceClaim(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'intersight:index/applianceDeviceClaim:ApplianceDeviceClaim';

    /**
     * Returns true if the given object is an instance of ApplianceDeviceClaim.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApplianceDeviceClaim {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApplianceDeviceClaim.__pulumiType;
    }

    /**
     * The Account ID for this managed object.
     */
    public readonly accountMoid!: pulumi.Output<string>;
    /**
     * A reference to a iamAccount resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    public readonly accounts!: pulumi.Output<outputs.ApplianceDeviceClaimAccount[]>;
    public readonly additionalProperties!: pulumi.Output<string | undefined>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    public readonly ancestors!: pulumi.Output<outputs.ApplianceDeviceClaimAncestor[]>;
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
     * Device identifier of the endpoint device.
     */
    public readonly deviceId!: pulumi.Output<string>;
    /**
     * The DomainGroup ID for this managed object.
     */
    public readonly domainGroupMoid!: pulumi.Output<string>;
    /**
     * Hostname or IP address of the endpoint device the user wants to claim.
     */
    public readonly hostname!: pulumi.Output<string | undefined>;
    /**
     * Indicates whether the value of the 'password' property has been set.
     */
    public readonly isPasswordSet!: pulumi.Output<boolean>;
    /**
     * Tracks if this device is to be claimed or certificate renewal.
     */
    public readonly isRenew!: pulumi.Output<boolean | undefined>;
    /**
     * Message set by the device claim process.
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
     * The fully-qualified name of the instantiated, concrete type. The value should be the same as the 'ClassId' property.
     */
    public readonly objectType!: pulumi.Output<string | undefined>;
    public readonly owners!: pulumi.Output<string[]>;
    /**
     * A reference to a moBaseMo resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    public readonly parents!: pulumi.Output<outputs.ApplianceDeviceClaimParent[]>;
    /**
     * Password to be used to login to the endpoint device.
     */
    public readonly password!: pulumi.Output<string | undefined>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    public readonly permissionResources!: pulumi.Output<outputs.ApplianceDeviceClaimPermissionResource[]>;
    public readonly platformType!: pulumi.Output<string | undefined>;
    /**
     * User defined claim request identifier set by the UI. The RequestId field is not a mandatory. The Intersight Appliance
     * will assign a unique value automatically if the field is not set.
     */
    public readonly requestId!: pulumi.Output<string | undefined>;
    /**
     * A reference to a resourceReservation resource. When the $expand query parameter is specified, the referenced resource is
     * returned inline.
     */
    public readonly reservations!: pulumi.Output<outputs.ApplianceDeviceClaimReservation[]>;
    /**
     * Device security token of the endpoint device.
     */
    public readonly securityToken!: pulumi.Output<string>;
    /**
     * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs. Objects that are made
     * available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally
     * available to all end users or restricted to end users based on their license entitlement. Users can use this property to
     * differentiate the scope (global or a specific license tier) to which a shared MO belongs.
     */
    public readonly sharedScope!: pulumi.Output<string>;
    /**
     * Status of the device claim process. * `started` - Device claim operation has started. * `failed` - Device claim
     * operation has failed. * `completed` - Device claim operation has completed.
     */
    public readonly status!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<outputs.ApplianceDeviceClaimTag[]>;
    /**
     * Username to log in to the endpoint device.
     */
    public readonly username!: pulumi.Output<string | undefined>;
    /**
     * The versioning info for this managed object.
     */
    public readonly versionContexts!: pulumi.Output<outputs.ApplianceDeviceClaimVersionContext[]>;

    /**
     * Create a ApplianceDeviceClaim resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ApplianceDeviceClaimArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ApplianceDeviceClaimArgs | ApplianceDeviceClaimState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ApplianceDeviceClaimState | undefined;
            resourceInputs["accountMoid"] = state ? state.accountMoid : undefined;
            resourceInputs["accounts"] = state ? state.accounts : undefined;
            resourceInputs["additionalProperties"] = state ? state.additionalProperties : undefined;
            resourceInputs["ancestors"] = state ? state.ancestors : undefined;
            resourceInputs["classId"] = state ? state.classId : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["deviceId"] = state ? state.deviceId : undefined;
            resourceInputs["domainGroupMoid"] = state ? state.domainGroupMoid : undefined;
            resourceInputs["hostname"] = state ? state.hostname : undefined;
            resourceInputs["isPasswordSet"] = state ? state.isPasswordSet : undefined;
            resourceInputs["isRenew"] = state ? state.isRenew : undefined;
            resourceInputs["message"] = state ? state.message : undefined;
            resourceInputs["modTime"] = state ? state.modTime : undefined;
            resourceInputs["moid"] = state ? state.moid : undefined;
            resourceInputs["objectType"] = state ? state.objectType : undefined;
            resourceInputs["owners"] = state ? state.owners : undefined;
            resourceInputs["parents"] = state ? state.parents : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["permissionResources"] = state ? state.permissionResources : undefined;
            resourceInputs["platformType"] = state ? state.platformType : undefined;
            resourceInputs["requestId"] = state ? state.requestId : undefined;
            resourceInputs["reservations"] = state ? state.reservations : undefined;
            resourceInputs["securityToken"] = state ? state.securityToken : undefined;
            resourceInputs["sharedScope"] = state ? state.sharedScope : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
            resourceInputs["versionContexts"] = state ? state.versionContexts : undefined;
        } else {
            const args = argsOrState as ApplianceDeviceClaimArgs | undefined;
            resourceInputs["accountMoid"] = args ? args.accountMoid : undefined;
            resourceInputs["accounts"] = args ? args.accounts : undefined;
            resourceInputs["additionalProperties"] = args ? args.additionalProperties : undefined;
            resourceInputs["ancestors"] = args ? args.ancestors : undefined;
            resourceInputs["classId"] = args ? args.classId : undefined;
            resourceInputs["createTime"] = args ? args.createTime : undefined;
            resourceInputs["deviceId"] = args ? args.deviceId : undefined;
            resourceInputs["domainGroupMoid"] = args ? args.domainGroupMoid : undefined;
            resourceInputs["hostname"] = args ? args.hostname : undefined;
            resourceInputs["isPasswordSet"] = args ? args.isPasswordSet : undefined;
            resourceInputs["isRenew"] = args ? args.isRenew : undefined;
            resourceInputs["message"] = args ? args.message : undefined;
            resourceInputs["modTime"] = args ? args.modTime : undefined;
            resourceInputs["moid"] = args ? args.moid : undefined;
            resourceInputs["objectType"] = args ? args.objectType : undefined;
            resourceInputs["owners"] = args ? args.owners : undefined;
            resourceInputs["parents"] = args ? args.parents : undefined;
            resourceInputs["password"] = args ? args.password : undefined;
            resourceInputs["permissionResources"] = args ? args.permissionResources : undefined;
            resourceInputs["platformType"] = args ? args.platformType : undefined;
            resourceInputs["requestId"] = args ? args.requestId : undefined;
            resourceInputs["reservations"] = args ? args.reservations : undefined;
            resourceInputs["securityToken"] = args ? args.securityToken : undefined;
            resourceInputs["sharedScope"] = args ? args.sharedScope : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
            resourceInputs["versionContexts"] = args ? args.versionContexts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ApplianceDeviceClaim.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ApplianceDeviceClaim resources.
 */
export interface ApplianceDeviceClaimState {
    /**
     * The Account ID for this managed object.
     */
    accountMoid?: pulumi.Input<string>;
    /**
     * A reference to a iamAccount resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    accounts?: pulumi.Input<pulumi.Input<inputs.ApplianceDeviceClaimAccount>[]>;
    additionalProperties?: pulumi.Input<string>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    ancestors?: pulumi.Input<pulumi.Input<inputs.ApplianceDeviceClaimAncestor>[]>;
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
     * Device identifier of the endpoint device.
     */
    deviceId?: pulumi.Input<string>;
    /**
     * The DomainGroup ID for this managed object.
     */
    domainGroupMoid?: pulumi.Input<string>;
    /**
     * Hostname or IP address of the endpoint device the user wants to claim.
     */
    hostname?: pulumi.Input<string>;
    /**
     * Indicates whether the value of the 'password' property has been set.
     */
    isPasswordSet?: pulumi.Input<boolean>;
    /**
     * Tracks if this device is to be claimed or certificate renewal.
     */
    isRenew?: pulumi.Input<boolean>;
    /**
     * Message set by the device claim process.
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
     * The fully-qualified name of the instantiated, concrete type. The value should be the same as the 'ClassId' property.
     */
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A reference to a moBaseMo resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    parents?: pulumi.Input<pulumi.Input<inputs.ApplianceDeviceClaimParent>[]>;
    /**
     * Password to be used to login to the endpoint device.
     */
    password?: pulumi.Input<string>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    permissionResources?: pulumi.Input<pulumi.Input<inputs.ApplianceDeviceClaimPermissionResource>[]>;
    platformType?: pulumi.Input<string>;
    /**
     * User defined claim request identifier set by the UI. The RequestId field is not a mandatory. The Intersight Appliance
     * will assign a unique value automatically if the field is not set.
     */
    requestId?: pulumi.Input<string>;
    /**
     * A reference to a resourceReservation resource. When the $expand query parameter is specified, the referenced resource is
     * returned inline.
     */
    reservations?: pulumi.Input<pulumi.Input<inputs.ApplianceDeviceClaimReservation>[]>;
    /**
     * Device security token of the endpoint device.
     */
    securityToken?: pulumi.Input<string>;
    /**
     * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs. Objects that are made
     * available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally
     * available to all end users or restricted to end users based on their license entitlement. Users can use this property to
     * differentiate the scope (global or a specific license tier) to which a shared MO belongs.
     */
    sharedScope?: pulumi.Input<string>;
    /**
     * Status of the device claim process. * `started` - Device claim operation has started. * `failed` - Device claim
     * operation has failed. * `completed` - Device claim operation has completed.
     */
    status?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.ApplianceDeviceClaimTag>[]>;
    /**
     * Username to log in to the endpoint device.
     */
    username?: pulumi.Input<string>;
    /**
     * The versioning info for this managed object.
     */
    versionContexts?: pulumi.Input<pulumi.Input<inputs.ApplianceDeviceClaimVersionContext>[]>;
}

/**
 * The set of arguments for constructing a ApplianceDeviceClaim resource.
 */
export interface ApplianceDeviceClaimArgs {
    /**
     * The Account ID for this managed object.
     */
    accountMoid?: pulumi.Input<string>;
    /**
     * A reference to a iamAccount resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    accounts?: pulumi.Input<pulumi.Input<inputs.ApplianceDeviceClaimAccount>[]>;
    additionalProperties?: pulumi.Input<string>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    ancestors?: pulumi.Input<pulumi.Input<inputs.ApplianceDeviceClaimAncestor>[]>;
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
     * Device identifier of the endpoint device.
     */
    deviceId?: pulumi.Input<string>;
    /**
     * The DomainGroup ID for this managed object.
     */
    domainGroupMoid?: pulumi.Input<string>;
    /**
     * Hostname or IP address of the endpoint device the user wants to claim.
     */
    hostname?: pulumi.Input<string>;
    /**
     * Indicates whether the value of the 'password' property has been set.
     */
    isPasswordSet?: pulumi.Input<boolean>;
    /**
     * Tracks if this device is to be claimed or certificate renewal.
     */
    isRenew?: pulumi.Input<boolean>;
    /**
     * Message set by the device claim process.
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
     * The fully-qualified name of the instantiated, concrete type. The value should be the same as the 'ClassId' property.
     */
    objectType?: pulumi.Input<string>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A reference to a moBaseMo resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    parents?: pulumi.Input<pulumi.Input<inputs.ApplianceDeviceClaimParent>[]>;
    /**
     * Password to be used to login to the endpoint device.
     */
    password?: pulumi.Input<string>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    permissionResources?: pulumi.Input<pulumi.Input<inputs.ApplianceDeviceClaimPermissionResource>[]>;
    platformType?: pulumi.Input<string>;
    /**
     * User defined claim request identifier set by the UI. The RequestId field is not a mandatory. The Intersight Appliance
     * will assign a unique value automatically if the field is not set.
     */
    requestId?: pulumi.Input<string>;
    /**
     * A reference to a resourceReservation resource. When the $expand query parameter is specified, the referenced resource is
     * returned inline.
     */
    reservations?: pulumi.Input<pulumi.Input<inputs.ApplianceDeviceClaimReservation>[]>;
    /**
     * Device security token of the endpoint device.
     */
    securityToken?: pulumi.Input<string>;
    /**
     * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs. Objects that are made
     * available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally
     * available to all end users or restricted to end users based on their license entitlement. Users can use this property to
     * differentiate the scope (global or a specific license tier) to which a shared MO belongs.
     */
    sharedScope?: pulumi.Input<string>;
    /**
     * Status of the device claim process. * `started` - Device claim operation has started. * `failed` - Device claim
     * operation has failed. * `completed` - Device claim operation has completed.
     */
    status?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.ApplianceDeviceClaimTag>[]>;
    /**
     * Username to log in to the endpoint device.
     */
    username?: pulumi.Input<string>;
    /**
     * The versioning info for this managed object.
     */
    versionContexts?: pulumi.Input<pulumi.Input<inputs.ApplianceDeviceClaimVersionContext>[]>;
}
