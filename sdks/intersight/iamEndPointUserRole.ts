// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class IamEndPointUserRole extends pulumi.CustomResource {
    /**
     * Get an existing IamEndPointUserRole resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IamEndPointUserRoleState, opts?: pulumi.CustomResourceOptions): IamEndPointUserRole {
        return new IamEndPointUserRole(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'intersight:index/iamEndPointUserRole:IamEndPointUserRole';

    /**
     * Returns true if the given object is an instance of IamEndPointUserRole.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IamEndPointUserRole {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IamEndPointUserRole.__pulumiType;
    }

    /**
     * The Account ID for this managed object.
     */
    public readonly accountMoid!: pulumi.Output<string>;
    public readonly additionalProperties!: pulumi.Output<string | undefined>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    public readonly ancestors!: pulumi.Output<outputs.IamEndPointUserRoleAncestor[]>;
    /**
     * Denotes whether password has changed.
     */
    public readonly changePassword!: pulumi.Output<boolean>;
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
     * Enables the user account on the endpoint.
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * An array of relationships to iamEndPointRole resources.
     */
    public readonly endPointRoles!: pulumi.Output<outputs.IamEndPointUserRoleEndPointRole[]>;
    /**
     * A reference to a iamEndPointUserPolicy resource. When the $expand query parameter is specified, the referenced resource
     * is returned inline.
     */
    public readonly endPointUserPolicies!: pulumi.Output<outputs.IamEndPointUserRoleEndPointUserPolicy[]>;
    /**
     * A reference to a iamEndPointUser resource. When the $expand query parameter is specified, the referenced resource is
     * returned inline.
     */
    public readonly endPointUsers!: pulumi.Output<outputs.IamEndPointUserRoleEndPointUser[]>;
    /**
     * Indicates whether the value of the 'password' property has been set.
     */
    public readonly isPasswordSet!: pulumi.Output<boolean>;
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
    public readonly parents!: pulumi.Output<outputs.IamEndPointUserRoleParent[]>;
    /**
     * The password must have a minimum of 8 and a maximum of 127 characters. For servers with IPMI user role enabled, the
     * maximum length is limited to 20 characters. When strong password is enabled, must satisfy below requirements: A. The
     * password must not contain the User's Name. B. The password must contain characters from three of the following four
     * categories. 1) English uppercase characters (A through Z). 2) English lowercase characters (a through z). 3) Base 10
     * digits (0 through 9). 4) Non-alphabetic characters (! , @, #, $, %, ^, &, *, -, _, +, =).
     */
    public readonly password!: pulumi.Output<string | undefined>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    public readonly permissionResources!: pulumi.Output<outputs.IamEndPointUserRolePermissionResource[]>;
    /**
     * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs. Objects that are made
     * available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally
     * available to all end users or restricted to end users based on their license entitlement. Users can use this property to
     * differentiate the scope (global or a specific license tier) to which a shared MO belongs.
     */
    public readonly sharedScope!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<outputs.IamEndPointUserRoleTag[]>;
    /**
     * The versioning info for this managed object.
     */
    public readonly versionContexts!: pulumi.Output<outputs.IamEndPointUserRoleVersionContext[]>;

    /**
     * Create a IamEndPointUserRole resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: IamEndPointUserRoleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IamEndPointUserRoleArgs | IamEndPointUserRoleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IamEndPointUserRoleState | undefined;
            resourceInputs["accountMoid"] = state ? state.accountMoid : undefined;
            resourceInputs["additionalProperties"] = state ? state.additionalProperties : undefined;
            resourceInputs["ancestors"] = state ? state.ancestors : undefined;
            resourceInputs["changePassword"] = state ? state.changePassword : undefined;
            resourceInputs["classId"] = state ? state.classId : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["domainGroupMoid"] = state ? state.domainGroupMoid : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["endPointRoles"] = state ? state.endPointRoles : undefined;
            resourceInputs["endPointUserPolicies"] = state ? state.endPointUserPolicies : undefined;
            resourceInputs["endPointUsers"] = state ? state.endPointUsers : undefined;
            resourceInputs["isPasswordSet"] = state ? state.isPasswordSet : undefined;
            resourceInputs["modTime"] = state ? state.modTime : undefined;
            resourceInputs["moid"] = state ? state.moid : undefined;
            resourceInputs["objectType"] = state ? state.objectType : undefined;
            resourceInputs["owners"] = state ? state.owners : undefined;
            resourceInputs["parents"] = state ? state.parents : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["permissionResources"] = state ? state.permissionResources : undefined;
            resourceInputs["sharedScope"] = state ? state.sharedScope : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["versionContexts"] = state ? state.versionContexts : undefined;
        } else {
            const args = argsOrState as IamEndPointUserRoleArgs | undefined;
            resourceInputs["accountMoid"] = args ? args.accountMoid : undefined;
            resourceInputs["additionalProperties"] = args ? args.additionalProperties : undefined;
            resourceInputs["ancestors"] = args ? args.ancestors : undefined;
            resourceInputs["changePassword"] = args ? args.changePassword : undefined;
            resourceInputs["classId"] = args ? args.classId : undefined;
            resourceInputs["createTime"] = args ? args.createTime : undefined;
            resourceInputs["domainGroupMoid"] = args ? args.domainGroupMoid : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["endPointRoles"] = args ? args.endPointRoles : undefined;
            resourceInputs["endPointUserPolicies"] = args ? args.endPointUserPolicies : undefined;
            resourceInputs["endPointUsers"] = args ? args.endPointUsers : undefined;
            resourceInputs["isPasswordSet"] = args ? args.isPasswordSet : undefined;
            resourceInputs["modTime"] = args ? args.modTime : undefined;
            resourceInputs["moid"] = args ? args.moid : undefined;
            resourceInputs["objectType"] = args ? args.objectType : undefined;
            resourceInputs["owners"] = args ? args.owners : undefined;
            resourceInputs["parents"] = args ? args.parents : undefined;
            resourceInputs["password"] = args ? args.password : undefined;
            resourceInputs["permissionResources"] = args ? args.permissionResources : undefined;
            resourceInputs["sharedScope"] = args ? args.sharedScope : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["versionContexts"] = args ? args.versionContexts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IamEndPointUserRole.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IamEndPointUserRole resources.
 */
export interface IamEndPointUserRoleState {
    /**
     * The Account ID for this managed object.
     */
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    ancestors?: pulumi.Input<pulumi.Input<inputs.IamEndPointUserRoleAncestor>[]>;
    /**
     * Denotes whether password has changed.
     */
    changePassword?: pulumi.Input<boolean>;
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
     * Enables the user account on the endpoint.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * An array of relationships to iamEndPointRole resources.
     */
    endPointRoles?: pulumi.Input<pulumi.Input<inputs.IamEndPointUserRoleEndPointRole>[]>;
    /**
     * A reference to a iamEndPointUserPolicy resource. When the $expand query parameter is specified, the referenced resource
     * is returned inline.
     */
    endPointUserPolicies?: pulumi.Input<pulumi.Input<inputs.IamEndPointUserRoleEndPointUserPolicy>[]>;
    /**
     * A reference to a iamEndPointUser resource. When the $expand query parameter is specified, the referenced resource is
     * returned inline.
     */
    endPointUsers?: pulumi.Input<pulumi.Input<inputs.IamEndPointUserRoleEndPointUser>[]>;
    /**
     * Indicates whether the value of the 'password' property has been set.
     */
    isPasswordSet?: pulumi.Input<boolean>;
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
    parents?: pulumi.Input<pulumi.Input<inputs.IamEndPointUserRoleParent>[]>;
    /**
     * The password must have a minimum of 8 and a maximum of 127 characters. For servers with IPMI user role enabled, the
     * maximum length is limited to 20 characters. When strong password is enabled, must satisfy below requirements: A. The
     * password must not contain the User's Name. B. The password must contain characters from three of the following four
     * categories. 1) English uppercase characters (A through Z). 2) English lowercase characters (a through z). 3) Base 10
     * digits (0 through 9). 4) Non-alphabetic characters (! , @, #, $, %, ^, &, *, -, _, +, =).
     */
    password?: pulumi.Input<string>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    permissionResources?: pulumi.Input<pulumi.Input<inputs.IamEndPointUserRolePermissionResource>[]>;
    /**
     * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs. Objects that are made
     * available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally
     * available to all end users or restricted to end users based on their license entitlement. Users can use this property to
     * differentiate the scope (global or a specific license tier) to which a shared MO belongs.
     */
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.IamEndPointUserRoleTag>[]>;
    /**
     * The versioning info for this managed object.
     */
    versionContexts?: pulumi.Input<pulumi.Input<inputs.IamEndPointUserRoleVersionContext>[]>;
}

/**
 * The set of arguments for constructing a IamEndPointUserRole resource.
 */
export interface IamEndPointUserRoleArgs {
    /**
     * The Account ID for this managed object.
     */
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    ancestors?: pulumi.Input<pulumi.Input<inputs.IamEndPointUserRoleAncestor>[]>;
    /**
     * Denotes whether password has changed.
     */
    changePassword?: pulumi.Input<boolean>;
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
     * Enables the user account on the endpoint.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * An array of relationships to iamEndPointRole resources.
     */
    endPointRoles?: pulumi.Input<pulumi.Input<inputs.IamEndPointUserRoleEndPointRole>[]>;
    /**
     * A reference to a iamEndPointUserPolicy resource. When the $expand query parameter is specified, the referenced resource
     * is returned inline.
     */
    endPointUserPolicies?: pulumi.Input<pulumi.Input<inputs.IamEndPointUserRoleEndPointUserPolicy>[]>;
    /**
     * A reference to a iamEndPointUser resource. When the $expand query parameter is specified, the referenced resource is
     * returned inline.
     */
    endPointUsers?: pulumi.Input<pulumi.Input<inputs.IamEndPointUserRoleEndPointUser>[]>;
    /**
     * Indicates whether the value of the 'password' property has been set.
     */
    isPasswordSet?: pulumi.Input<boolean>;
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
    parents?: pulumi.Input<pulumi.Input<inputs.IamEndPointUserRoleParent>[]>;
    /**
     * The password must have a minimum of 8 and a maximum of 127 characters. For servers with IPMI user role enabled, the
     * maximum length is limited to 20 characters. When strong password is enabled, must satisfy below requirements: A. The
     * password must not contain the User's Name. B. The password must contain characters from three of the following four
     * categories. 1) English uppercase characters (A through Z). 2) English lowercase characters (a through z). 3) Base 10
     * digits (0 through 9). 4) Non-alphabetic characters (! , @, #, $, %, ^, &, *, -, _, +, =).
     */
    password?: pulumi.Input<string>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    permissionResources?: pulumi.Input<pulumi.Input<inputs.IamEndPointUserRolePermissionResource>[]>;
    /**
     * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs. Objects that are made
     * available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally
     * available to all end users or restricted to end users based on their license entitlement. Users can use this property to
     * differentiate the scope (global or a specific license tier) to which a shared MO belongs.
     */
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.IamEndPointUserRoleTag>[]>;
    /**
     * The versioning info for this managed object.
     */
    versionContexts?: pulumi.Input<pulumi.Input<inputs.IamEndPointUserRoleVersionContext>[]>;
}
