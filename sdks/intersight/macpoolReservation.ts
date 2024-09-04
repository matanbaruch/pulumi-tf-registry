// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class MacpoolReservation extends pulumi.CustomResource {
    /**
     * Get an existing MacpoolReservation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MacpoolReservationState, opts?: pulumi.CustomResourceOptions): MacpoolReservation {
        return new MacpoolReservation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'intersight:index/macpoolReservation:MacpoolReservation';

    /**
     * Returns true if the given object is an instance of MacpoolReservation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MacpoolReservation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MacpoolReservation.__pulumiType;
    }

    /**
     * The Account ID for this managed object.
     */
    public readonly accountMoid!: pulumi.Output<string>;
    public readonly additionalProperties!: pulumi.Output<string | undefined>;
    /**
     * Type of the allocation for the identity in the reservation either static or dynamic (i.e. via pool). * `dynamic` -
     * Identifiers to be allocated by system. * `static` - Identifiers are assigned by the user.
     */
    public readonly allocationType!: pulumi.Output<string | undefined>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    public readonly ancestors!: pulumi.Output<outputs.MacpoolReservationAncestor[]>;
    /**
     * A reference to a macpoolIdBlock resource. When the $expand query parameter is specified, the referenced resource is
     * returned inline.
     */
    public readonly blockHeads!: pulumi.Output<outputs.MacpoolReservationBlockHead[]>;
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
     * MAC identity to be reserved.
     */
    public readonly identity!: pulumi.Output<string | undefined>;
    public readonly memberOfs!: pulumi.Output<outputs.MacpoolReservationMemberOf[]>;
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
    /**
     * A reference to a organizationOrganization resource. When the $expand query parameter is specified, the referenced
     * resource is returned inline.
     */
    public readonly organizations!: pulumi.Output<outputs.MacpoolReservationOrganization[]>;
    public readonly owners!: pulumi.Output<string[]>;
    /**
     * A reference to a moBaseMo resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    public readonly parents!: pulumi.Output<outputs.MacpoolReservationParent[]>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    public readonly permissionResources!: pulumi.Output<outputs.MacpoolReservationPermissionResource[]>;
    /**
     * A reference to a macpoolPoolMember resource. When the $expand query parameter is specified, the referenced resource is
     * returned inline.
     */
    public readonly poolMembers!: pulumi.Output<outputs.MacpoolReservationPoolMember[]>;
    /**
     * A reference to a macpoolPool resource. When the $expand query parameter is specified, the referenced resource is
     * returned inline.
     */
    public readonly pools!: pulumi.Output<outputs.MacpoolReservationPool[]>;
    /**
     * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs. Objects that are made
     * available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally
     * available to all end users or restricted to end users based on their license entitlement. Users can use this property to
     * differentiate the scope (global or a specific license tier) to which a shared MO belongs.
     */
    public readonly sharedScope!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<outputs.MacpoolReservationTag[]>;
    /**
     * A reference to a macpoolUniverse resource. When the $expand query parameter is specified, the referenced resource is
     * returned inline.
     */
    public readonly universes!: pulumi.Output<outputs.MacpoolReservationUniverse[]>;
    /**
     * The versioning info for this managed object.
     */
    public readonly versionContexts!: pulumi.Output<outputs.MacpoolReservationVersionContext[]>;

    /**
     * Create a MacpoolReservation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: MacpoolReservationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MacpoolReservationArgs | MacpoolReservationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MacpoolReservationState | undefined;
            resourceInputs["accountMoid"] = state ? state.accountMoid : undefined;
            resourceInputs["additionalProperties"] = state ? state.additionalProperties : undefined;
            resourceInputs["allocationType"] = state ? state.allocationType : undefined;
            resourceInputs["ancestors"] = state ? state.ancestors : undefined;
            resourceInputs["blockHeads"] = state ? state.blockHeads : undefined;
            resourceInputs["classId"] = state ? state.classId : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["domainGroupMoid"] = state ? state.domainGroupMoid : undefined;
            resourceInputs["identity"] = state ? state.identity : undefined;
            resourceInputs["memberOfs"] = state ? state.memberOfs : undefined;
            resourceInputs["modTime"] = state ? state.modTime : undefined;
            resourceInputs["moid"] = state ? state.moid : undefined;
            resourceInputs["objectType"] = state ? state.objectType : undefined;
            resourceInputs["organizations"] = state ? state.organizations : undefined;
            resourceInputs["owners"] = state ? state.owners : undefined;
            resourceInputs["parents"] = state ? state.parents : undefined;
            resourceInputs["permissionResources"] = state ? state.permissionResources : undefined;
            resourceInputs["poolMembers"] = state ? state.poolMembers : undefined;
            resourceInputs["pools"] = state ? state.pools : undefined;
            resourceInputs["sharedScope"] = state ? state.sharedScope : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["universes"] = state ? state.universes : undefined;
            resourceInputs["versionContexts"] = state ? state.versionContexts : undefined;
        } else {
            const args = argsOrState as MacpoolReservationArgs | undefined;
            resourceInputs["accountMoid"] = args ? args.accountMoid : undefined;
            resourceInputs["additionalProperties"] = args ? args.additionalProperties : undefined;
            resourceInputs["allocationType"] = args ? args.allocationType : undefined;
            resourceInputs["ancestors"] = args ? args.ancestors : undefined;
            resourceInputs["blockHeads"] = args ? args.blockHeads : undefined;
            resourceInputs["classId"] = args ? args.classId : undefined;
            resourceInputs["createTime"] = args ? args.createTime : undefined;
            resourceInputs["domainGroupMoid"] = args ? args.domainGroupMoid : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["memberOfs"] = args ? args.memberOfs : undefined;
            resourceInputs["modTime"] = args ? args.modTime : undefined;
            resourceInputs["moid"] = args ? args.moid : undefined;
            resourceInputs["objectType"] = args ? args.objectType : undefined;
            resourceInputs["organizations"] = args ? args.organizations : undefined;
            resourceInputs["owners"] = args ? args.owners : undefined;
            resourceInputs["parents"] = args ? args.parents : undefined;
            resourceInputs["permissionResources"] = args ? args.permissionResources : undefined;
            resourceInputs["poolMembers"] = args ? args.poolMembers : undefined;
            resourceInputs["pools"] = args ? args.pools : undefined;
            resourceInputs["sharedScope"] = args ? args.sharedScope : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["universes"] = args ? args.universes : undefined;
            resourceInputs["versionContexts"] = args ? args.versionContexts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MacpoolReservation.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MacpoolReservation resources.
 */
export interface MacpoolReservationState {
    /**
     * The Account ID for this managed object.
     */
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    /**
     * Type of the allocation for the identity in the reservation either static or dynamic (i.e. via pool). * `dynamic` -
     * Identifiers to be allocated by system. * `static` - Identifiers are assigned by the user.
     */
    allocationType?: pulumi.Input<string>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    ancestors?: pulumi.Input<pulumi.Input<inputs.MacpoolReservationAncestor>[]>;
    /**
     * A reference to a macpoolIdBlock resource. When the $expand query parameter is specified, the referenced resource is
     * returned inline.
     */
    blockHeads?: pulumi.Input<pulumi.Input<inputs.MacpoolReservationBlockHead>[]>;
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
     * MAC identity to be reserved.
     */
    identity?: pulumi.Input<string>;
    memberOfs?: pulumi.Input<pulumi.Input<inputs.MacpoolReservationMemberOf>[]>;
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
    /**
     * A reference to a organizationOrganization resource. When the $expand query parameter is specified, the referenced
     * resource is returned inline.
     */
    organizations?: pulumi.Input<pulumi.Input<inputs.MacpoolReservationOrganization>[]>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A reference to a moBaseMo resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    parents?: pulumi.Input<pulumi.Input<inputs.MacpoolReservationParent>[]>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    permissionResources?: pulumi.Input<pulumi.Input<inputs.MacpoolReservationPermissionResource>[]>;
    /**
     * A reference to a macpoolPoolMember resource. When the $expand query parameter is specified, the referenced resource is
     * returned inline.
     */
    poolMembers?: pulumi.Input<pulumi.Input<inputs.MacpoolReservationPoolMember>[]>;
    /**
     * A reference to a macpoolPool resource. When the $expand query parameter is specified, the referenced resource is
     * returned inline.
     */
    pools?: pulumi.Input<pulumi.Input<inputs.MacpoolReservationPool>[]>;
    /**
     * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs. Objects that are made
     * available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally
     * available to all end users or restricted to end users based on their license entitlement. Users can use this property to
     * differentiate the scope (global or a specific license tier) to which a shared MO belongs.
     */
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.MacpoolReservationTag>[]>;
    /**
     * A reference to a macpoolUniverse resource. When the $expand query parameter is specified, the referenced resource is
     * returned inline.
     */
    universes?: pulumi.Input<pulumi.Input<inputs.MacpoolReservationUniverse>[]>;
    /**
     * The versioning info for this managed object.
     */
    versionContexts?: pulumi.Input<pulumi.Input<inputs.MacpoolReservationVersionContext>[]>;
}

/**
 * The set of arguments for constructing a MacpoolReservation resource.
 */
export interface MacpoolReservationArgs {
    /**
     * The Account ID for this managed object.
     */
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    /**
     * Type of the allocation for the identity in the reservation either static or dynamic (i.e. via pool). * `dynamic` -
     * Identifiers to be allocated by system. * `static` - Identifiers are assigned by the user.
     */
    allocationType?: pulumi.Input<string>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    ancestors?: pulumi.Input<pulumi.Input<inputs.MacpoolReservationAncestor>[]>;
    /**
     * A reference to a macpoolIdBlock resource. When the $expand query parameter is specified, the referenced resource is
     * returned inline.
     */
    blockHeads?: pulumi.Input<pulumi.Input<inputs.MacpoolReservationBlockHead>[]>;
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
     * MAC identity to be reserved.
     */
    identity?: pulumi.Input<string>;
    memberOfs?: pulumi.Input<pulumi.Input<inputs.MacpoolReservationMemberOf>[]>;
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
    /**
     * A reference to a organizationOrganization resource. When the $expand query parameter is specified, the referenced
     * resource is returned inline.
     */
    organizations?: pulumi.Input<pulumi.Input<inputs.MacpoolReservationOrganization>[]>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A reference to a moBaseMo resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    parents?: pulumi.Input<pulumi.Input<inputs.MacpoolReservationParent>[]>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    permissionResources?: pulumi.Input<pulumi.Input<inputs.MacpoolReservationPermissionResource>[]>;
    /**
     * A reference to a macpoolPoolMember resource. When the $expand query parameter is specified, the referenced resource is
     * returned inline.
     */
    poolMembers?: pulumi.Input<pulumi.Input<inputs.MacpoolReservationPoolMember>[]>;
    /**
     * A reference to a macpoolPool resource. When the $expand query parameter is specified, the referenced resource is
     * returned inline.
     */
    pools?: pulumi.Input<pulumi.Input<inputs.MacpoolReservationPool>[]>;
    /**
     * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs. Objects that are made
     * available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally
     * available to all end users or restricted to end users based on their license entitlement. Users can use this property to
     * differentiate the scope (global or a specific license tier) to which a shared MO belongs.
     */
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.MacpoolReservationTag>[]>;
    /**
     * A reference to a macpoolUniverse resource. When the $expand query parameter is specified, the referenced resource is
     * returned inline.
     */
    universes?: pulumi.Input<pulumi.Input<inputs.MacpoolReservationUniverse>[]>;
    /**
     * The versioning info for this managed object.
     */
    versionContexts?: pulumi.Input<pulumi.Input<inputs.MacpoolReservationVersionContext>[]>;
}
