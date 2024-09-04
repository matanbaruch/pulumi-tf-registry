// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class VirtualizationEsxiConsole extends pulumi.CustomResource {
    /**
     * Get an existing VirtualizationEsxiConsole resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VirtualizationEsxiConsoleState, opts?: pulumi.CustomResourceOptions): VirtualizationEsxiConsole {
        return new VirtualizationEsxiConsole(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'intersight:index/virtualizationEsxiConsole:VirtualizationEsxiConsole';

    /**
     * Returns true if the given object is an instance of VirtualizationEsxiConsole.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualizationEsxiConsole {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualizationEsxiConsole.__pulumiType;
    }

    /**
     * The Account ID for this managed object.
     */
    public readonly accountMoid!: pulumi.Output<string>;
    public readonly additionalProperties!: pulumi.Output<string | undefined>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    public readonly ancestors!: pulumi.Output<outputs.VirtualizationEsxiConsoleAncestor[]>;
    /**
     * The fully-qualified name of the instantiated, concrete type. This property is used as a discriminator to identify the
     * type of the payload when marshaling and unmarshaling data.
     */
    public readonly classId!: pulumi.Output<string | undefined>;
    /**
     * The user agent IP address from which the session is launched.
     */
    public readonly clientIpAddress!: pulumi.Output<string>;
    /**
     * The time when this managed object was created.
     */
    public readonly createTime!: pulumi.Output<string>;
    /**
     * A reference to a assetDeviceRegistration resource. When the $expand query parameter is specified, the referenced
     * resource is returned inline.
     */
    public readonly deviceRegistrations!: pulumi.Output<outputs.VirtualizationEsxiConsoleDeviceRegistration[]>;
    /**
     * The DomainGroup ID for this managed object.
     */
    public readonly domainGroupMoid!: pulumi.Output<string>;
    /**
     * The time at which the session ended.
     */
    public readonly endTime!: pulumi.Output<string>;
    /**
     * A reference to a virtualizationVmwareHost resource. When the $expand query parameter is specified, the referenced
     * resource is returned inline.
     */
    public readonly hosts!: pulumi.Output<outputs.VirtualizationEsxiConsoleHost[]>;
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
    public readonly parents!: pulumi.Output<outputs.VirtualizationEsxiConsoleParent[]>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    public readonly permissionResources!: pulumi.Output<outputs.VirtualizationEsxiConsolePermissionResource[]>;
    /**
     * Role of the user who launched the session.
     */
    public readonly role!: pulumi.Output<string>;
    /**
     * A reference to a sessionAbstractSession resource. When the $expand query parameter is specified, the referenced resource
     * is returned inline.
     */
    public readonly sessions!: pulumi.Output<outputs.VirtualizationEsxiConsoleSession[]>;
    /**
     * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs. Objects that are made
     * available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally
     * available to all end users or restricted to end users based on their license entitlement. Users can use this property to
     * differentiate the scope (global or a specific license tier) to which a shared MO belongs.
     */
    public readonly sharedScope!: pulumi.Output<string>;
    /**
     * The status of the session. * `Active` - The session is currently active. * `Ended` - The session has ended normally. *
     * `Terminated` - The session was terminated by an admin.
     */
    public readonly status!: pulumi.Output<string | undefined>;
    /**
     * The stream ID of the host console session opened.
     */
    public readonly streamId!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<outputs.VirtualizationEsxiConsoleTag[]>;
    /**
     * Name of target on which session is initiated.
     */
    public readonly targetName!: pulumi.Output<string>;
    /**
     * A reference to a moBaseMo resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    public readonly targets!: pulumi.Output<outputs.VirtualizationEsxiConsoleTarget[]>;
    /**
     * User ID or E-mail Address of the user who launched the session.
     */
    public readonly userIdOrEmail!: pulumi.Output<string>;
    /**
     * A reference to a iamUser resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    public readonly users!: pulumi.Output<outputs.VirtualizationEsxiConsoleUser[]>;
    /**
     * The versioning info for this managed object.
     */
    public readonly versionContexts!: pulumi.Output<outputs.VirtualizationEsxiConsoleVersionContext[]>;

    /**
     * Create a VirtualizationEsxiConsole resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: VirtualizationEsxiConsoleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VirtualizationEsxiConsoleArgs | VirtualizationEsxiConsoleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VirtualizationEsxiConsoleState | undefined;
            resourceInputs["accountMoid"] = state ? state.accountMoid : undefined;
            resourceInputs["additionalProperties"] = state ? state.additionalProperties : undefined;
            resourceInputs["ancestors"] = state ? state.ancestors : undefined;
            resourceInputs["classId"] = state ? state.classId : undefined;
            resourceInputs["clientIpAddress"] = state ? state.clientIpAddress : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["deviceRegistrations"] = state ? state.deviceRegistrations : undefined;
            resourceInputs["domainGroupMoid"] = state ? state.domainGroupMoid : undefined;
            resourceInputs["endTime"] = state ? state.endTime : undefined;
            resourceInputs["hosts"] = state ? state.hosts : undefined;
            resourceInputs["modTime"] = state ? state.modTime : undefined;
            resourceInputs["moid"] = state ? state.moid : undefined;
            resourceInputs["objectType"] = state ? state.objectType : undefined;
            resourceInputs["owners"] = state ? state.owners : undefined;
            resourceInputs["parents"] = state ? state.parents : undefined;
            resourceInputs["permissionResources"] = state ? state.permissionResources : undefined;
            resourceInputs["role"] = state ? state.role : undefined;
            resourceInputs["sessions"] = state ? state.sessions : undefined;
            resourceInputs["sharedScope"] = state ? state.sharedScope : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["streamId"] = state ? state.streamId : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["targetName"] = state ? state.targetName : undefined;
            resourceInputs["targets"] = state ? state.targets : undefined;
            resourceInputs["userIdOrEmail"] = state ? state.userIdOrEmail : undefined;
            resourceInputs["users"] = state ? state.users : undefined;
            resourceInputs["versionContexts"] = state ? state.versionContexts : undefined;
        } else {
            const args = argsOrState as VirtualizationEsxiConsoleArgs | undefined;
            resourceInputs["accountMoid"] = args ? args.accountMoid : undefined;
            resourceInputs["additionalProperties"] = args ? args.additionalProperties : undefined;
            resourceInputs["ancestors"] = args ? args.ancestors : undefined;
            resourceInputs["classId"] = args ? args.classId : undefined;
            resourceInputs["clientIpAddress"] = args ? args.clientIpAddress : undefined;
            resourceInputs["createTime"] = args ? args.createTime : undefined;
            resourceInputs["deviceRegistrations"] = args ? args.deviceRegistrations : undefined;
            resourceInputs["domainGroupMoid"] = args ? args.domainGroupMoid : undefined;
            resourceInputs["endTime"] = args ? args.endTime : undefined;
            resourceInputs["hosts"] = args ? args.hosts : undefined;
            resourceInputs["modTime"] = args ? args.modTime : undefined;
            resourceInputs["moid"] = args ? args.moid : undefined;
            resourceInputs["objectType"] = args ? args.objectType : undefined;
            resourceInputs["owners"] = args ? args.owners : undefined;
            resourceInputs["parents"] = args ? args.parents : undefined;
            resourceInputs["permissionResources"] = args ? args.permissionResources : undefined;
            resourceInputs["role"] = args ? args.role : undefined;
            resourceInputs["sessions"] = args ? args.sessions : undefined;
            resourceInputs["sharedScope"] = args ? args.sharedScope : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["streamId"] = args ? args.streamId : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["targetName"] = args ? args.targetName : undefined;
            resourceInputs["targets"] = args ? args.targets : undefined;
            resourceInputs["userIdOrEmail"] = args ? args.userIdOrEmail : undefined;
            resourceInputs["users"] = args ? args.users : undefined;
            resourceInputs["versionContexts"] = args ? args.versionContexts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VirtualizationEsxiConsole.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VirtualizationEsxiConsole resources.
 */
export interface VirtualizationEsxiConsoleState {
    /**
     * The Account ID for this managed object.
     */
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    ancestors?: pulumi.Input<pulumi.Input<inputs.VirtualizationEsxiConsoleAncestor>[]>;
    /**
     * The fully-qualified name of the instantiated, concrete type. This property is used as a discriminator to identify the
     * type of the payload when marshaling and unmarshaling data.
     */
    classId?: pulumi.Input<string>;
    /**
     * The user agent IP address from which the session is launched.
     */
    clientIpAddress?: pulumi.Input<string>;
    /**
     * The time when this managed object was created.
     */
    createTime?: pulumi.Input<string>;
    /**
     * A reference to a assetDeviceRegistration resource. When the $expand query parameter is specified, the referenced
     * resource is returned inline.
     */
    deviceRegistrations?: pulumi.Input<pulumi.Input<inputs.VirtualizationEsxiConsoleDeviceRegistration>[]>;
    /**
     * The DomainGroup ID for this managed object.
     */
    domainGroupMoid?: pulumi.Input<string>;
    /**
     * The time at which the session ended.
     */
    endTime?: pulumi.Input<string>;
    /**
     * A reference to a virtualizationVmwareHost resource. When the $expand query parameter is specified, the referenced
     * resource is returned inline.
     */
    hosts?: pulumi.Input<pulumi.Input<inputs.VirtualizationEsxiConsoleHost>[]>;
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
    parents?: pulumi.Input<pulumi.Input<inputs.VirtualizationEsxiConsoleParent>[]>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    permissionResources?: pulumi.Input<pulumi.Input<inputs.VirtualizationEsxiConsolePermissionResource>[]>;
    /**
     * Role of the user who launched the session.
     */
    role?: pulumi.Input<string>;
    /**
     * A reference to a sessionAbstractSession resource. When the $expand query parameter is specified, the referenced resource
     * is returned inline.
     */
    sessions?: pulumi.Input<pulumi.Input<inputs.VirtualizationEsxiConsoleSession>[]>;
    /**
     * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs. Objects that are made
     * available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally
     * available to all end users or restricted to end users based on their license entitlement. Users can use this property to
     * differentiate the scope (global or a specific license tier) to which a shared MO belongs.
     */
    sharedScope?: pulumi.Input<string>;
    /**
     * The status of the session. * `Active` - The session is currently active. * `Ended` - The session has ended normally. *
     * `Terminated` - The session was terminated by an admin.
     */
    status?: pulumi.Input<string>;
    /**
     * The stream ID of the host console session opened.
     */
    streamId?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.VirtualizationEsxiConsoleTag>[]>;
    /**
     * Name of target on which session is initiated.
     */
    targetName?: pulumi.Input<string>;
    /**
     * A reference to a moBaseMo resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    targets?: pulumi.Input<pulumi.Input<inputs.VirtualizationEsxiConsoleTarget>[]>;
    /**
     * User ID or E-mail Address of the user who launched the session.
     */
    userIdOrEmail?: pulumi.Input<string>;
    /**
     * A reference to a iamUser resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    users?: pulumi.Input<pulumi.Input<inputs.VirtualizationEsxiConsoleUser>[]>;
    /**
     * The versioning info for this managed object.
     */
    versionContexts?: pulumi.Input<pulumi.Input<inputs.VirtualizationEsxiConsoleVersionContext>[]>;
}

/**
 * The set of arguments for constructing a VirtualizationEsxiConsole resource.
 */
export interface VirtualizationEsxiConsoleArgs {
    /**
     * The Account ID for this managed object.
     */
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    ancestors?: pulumi.Input<pulumi.Input<inputs.VirtualizationEsxiConsoleAncestor>[]>;
    /**
     * The fully-qualified name of the instantiated, concrete type. This property is used as a discriminator to identify the
     * type of the payload when marshaling and unmarshaling data.
     */
    classId?: pulumi.Input<string>;
    /**
     * The user agent IP address from which the session is launched.
     */
    clientIpAddress?: pulumi.Input<string>;
    /**
     * The time when this managed object was created.
     */
    createTime?: pulumi.Input<string>;
    /**
     * A reference to a assetDeviceRegistration resource. When the $expand query parameter is specified, the referenced
     * resource is returned inline.
     */
    deviceRegistrations?: pulumi.Input<pulumi.Input<inputs.VirtualizationEsxiConsoleDeviceRegistration>[]>;
    /**
     * The DomainGroup ID for this managed object.
     */
    domainGroupMoid?: pulumi.Input<string>;
    /**
     * The time at which the session ended.
     */
    endTime?: pulumi.Input<string>;
    /**
     * A reference to a virtualizationVmwareHost resource. When the $expand query parameter is specified, the referenced
     * resource is returned inline.
     */
    hosts?: pulumi.Input<pulumi.Input<inputs.VirtualizationEsxiConsoleHost>[]>;
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
    parents?: pulumi.Input<pulumi.Input<inputs.VirtualizationEsxiConsoleParent>[]>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    permissionResources?: pulumi.Input<pulumi.Input<inputs.VirtualizationEsxiConsolePermissionResource>[]>;
    /**
     * Role of the user who launched the session.
     */
    role?: pulumi.Input<string>;
    /**
     * A reference to a sessionAbstractSession resource. When the $expand query parameter is specified, the referenced resource
     * is returned inline.
     */
    sessions?: pulumi.Input<pulumi.Input<inputs.VirtualizationEsxiConsoleSession>[]>;
    /**
     * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs. Objects that are made
     * available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally
     * available to all end users or restricted to end users based on their license entitlement. Users can use this property to
     * differentiate the scope (global or a specific license tier) to which a shared MO belongs.
     */
    sharedScope?: pulumi.Input<string>;
    /**
     * The status of the session. * `Active` - The session is currently active. * `Ended` - The session has ended normally. *
     * `Terminated` - The session was terminated by an admin.
     */
    status?: pulumi.Input<string>;
    /**
     * The stream ID of the host console session opened.
     */
    streamId?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.VirtualizationEsxiConsoleTag>[]>;
    /**
     * Name of target on which session is initiated.
     */
    targetName?: pulumi.Input<string>;
    /**
     * A reference to a moBaseMo resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    targets?: pulumi.Input<pulumi.Input<inputs.VirtualizationEsxiConsoleTarget>[]>;
    /**
     * User ID or E-mail Address of the user who launched the session.
     */
    userIdOrEmail?: pulumi.Input<string>;
    /**
     * A reference to a iamUser resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    users?: pulumi.Input<pulumi.Input<inputs.VirtualizationEsxiConsoleUser>[]>;
    /**
     * The versioning info for this managed object.
     */
    versionContexts?: pulumi.Input<pulumi.Input<inputs.VirtualizationEsxiConsoleVersionContext>[]>;
}
