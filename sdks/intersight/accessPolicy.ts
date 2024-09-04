// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AccessPolicy extends pulumi.CustomResource {
    /**
     * Get an existing AccessPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AccessPolicyState, opts?: pulumi.CustomResourceOptions): AccessPolicy {
        return new AccessPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'intersight:index/accessPolicy:AccessPolicy';

    /**
     * Returns true if the given object is an instance of AccessPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AccessPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AccessPolicy.__pulumiType;
    }

    /**
     * The Account ID for this managed object.
     */
    public readonly accountMoid!: pulumi.Output<string>;
    public readonly additionalProperties!: pulumi.Output<string | undefined>;
    /**
     * The type of address to be retrieved from Inband IP Pool object.
     */
    public readonly addressTypes!: pulumi.Output<outputs.AccessPolicyAddressType[]>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    public readonly ancestors!: pulumi.Output<outputs.AccessPolicyAncestor[]>;
    /**
     * The fully-qualified name of the instantiated, concrete type. This property is used as a discriminator to identify the
     * type of the payload when marshaling and unmarshaling data.
     */
    public readonly classId!: pulumi.Output<string | undefined>;
    /**
     * The type of configuration, In-Band and/or Out-Of-Band to be configured on the CIMC.
     */
    public readonly configurationTypes!: pulumi.Output<outputs.AccessPolicyConfigurationType[]>;
    /**
     * The time when this managed object was created.
     */
    public readonly createTime!: pulumi.Output<string>;
    /**
     * Description of the policy.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The DomainGroup ID for this managed object.
     */
    public readonly domainGroupMoid!: pulumi.Output<string>;
    /**
     * A reference to a ippoolPool resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    public readonly inbandIpPools!: pulumi.Output<outputs.AccessPolicyInbandIpPool[]>;
    /**
     * VLAN to be used for server access over Inband network.
     */
    public readonly inbandVlan!: pulumi.Output<number | undefined>;
    /**
     * A reference to a vrfVrf resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    public readonly inbandVrves!: pulumi.Output<outputs.AccessPolicyInbandVrf[]>;
    /**
     * The time when this managed object was last modified.
     */
    public readonly modTime!: pulumi.Output<string>;
    /**
     * The unique identifier of this Managed Object instance.
     */
    public readonly moid!: pulumi.Output<string>;
    /**
     * Name of the concrete policy.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The fully-qualified name of the instantiated, concrete type. The value should be the same as the 'ClassId' property.
     */
    public readonly objectType!: pulumi.Output<string | undefined>;
    /**
     * A reference to a organizationOrganization resource. When the $expand query parameter is specified, the referenced
     * resource is returned inline.
     */
    public readonly organizations!: pulumi.Output<outputs.AccessPolicyOrganization[]>;
    /**
     * A reference to a ippoolPool resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    public readonly outOfBandIpPools!: pulumi.Output<outputs.AccessPolicyOutOfBandIpPool[]>;
    /**
     * A reference to a vrfVrf resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    public readonly outOfBandVrves!: pulumi.Output<outputs.AccessPolicyOutOfBandVrf[]>;
    public readonly owners!: pulumi.Output<string[]>;
    /**
     * A reference to a moBaseMo resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    public readonly parents!: pulumi.Output<outputs.AccessPolicyParent[]>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    public readonly permissionResources!: pulumi.Output<outputs.AccessPolicyPermissionResource[]>;
    /**
     * An array of relationships to policyAbstractConfigProfile resources.
     */
    public readonly profiles!: pulumi.Output<outputs.AccessPolicyProfile[]>;
    /**
     * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs. Objects that are made
     * available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally
     * available to all end users or restricted to end users based on their license entitlement. Users can use this property to
     * differentiate the scope (global or a specific license tier) to which a shared MO belongs.
     */
    public readonly sharedScope!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<outputs.AccessPolicyTag[]>;
    /**
     * The versioning info for this managed object.
     */
    public readonly versionContexts!: pulumi.Output<outputs.AccessPolicyVersionContext[]>;

    /**
     * Create a AccessPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: AccessPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AccessPolicyArgs | AccessPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AccessPolicyState | undefined;
            resourceInputs["accountMoid"] = state ? state.accountMoid : undefined;
            resourceInputs["additionalProperties"] = state ? state.additionalProperties : undefined;
            resourceInputs["addressTypes"] = state ? state.addressTypes : undefined;
            resourceInputs["ancestors"] = state ? state.ancestors : undefined;
            resourceInputs["classId"] = state ? state.classId : undefined;
            resourceInputs["configurationTypes"] = state ? state.configurationTypes : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["domainGroupMoid"] = state ? state.domainGroupMoid : undefined;
            resourceInputs["inbandIpPools"] = state ? state.inbandIpPools : undefined;
            resourceInputs["inbandVlan"] = state ? state.inbandVlan : undefined;
            resourceInputs["inbandVrves"] = state ? state.inbandVrves : undefined;
            resourceInputs["modTime"] = state ? state.modTime : undefined;
            resourceInputs["moid"] = state ? state.moid : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["objectType"] = state ? state.objectType : undefined;
            resourceInputs["organizations"] = state ? state.organizations : undefined;
            resourceInputs["outOfBandIpPools"] = state ? state.outOfBandIpPools : undefined;
            resourceInputs["outOfBandVrves"] = state ? state.outOfBandVrves : undefined;
            resourceInputs["owners"] = state ? state.owners : undefined;
            resourceInputs["parents"] = state ? state.parents : undefined;
            resourceInputs["permissionResources"] = state ? state.permissionResources : undefined;
            resourceInputs["profiles"] = state ? state.profiles : undefined;
            resourceInputs["sharedScope"] = state ? state.sharedScope : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["versionContexts"] = state ? state.versionContexts : undefined;
        } else {
            const args = argsOrState as AccessPolicyArgs | undefined;
            resourceInputs["accountMoid"] = args ? args.accountMoid : undefined;
            resourceInputs["additionalProperties"] = args ? args.additionalProperties : undefined;
            resourceInputs["addressTypes"] = args ? args.addressTypes : undefined;
            resourceInputs["ancestors"] = args ? args.ancestors : undefined;
            resourceInputs["classId"] = args ? args.classId : undefined;
            resourceInputs["configurationTypes"] = args ? args.configurationTypes : undefined;
            resourceInputs["createTime"] = args ? args.createTime : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["domainGroupMoid"] = args ? args.domainGroupMoid : undefined;
            resourceInputs["inbandIpPools"] = args ? args.inbandIpPools : undefined;
            resourceInputs["inbandVlan"] = args ? args.inbandVlan : undefined;
            resourceInputs["inbandVrves"] = args ? args.inbandVrves : undefined;
            resourceInputs["modTime"] = args ? args.modTime : undefined;
            resourceInputs["moid"] = args ? args.moid : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["objectType"] = args ? args.objectType : undefined;
            resourceInputs["organizations"] = args ? args.organizations : undefined;
            resourceInputs["outOfBandIpPools"] = args ? args.outOfBandIpPools : undefined;
            resourceInputs["outOfBandVrves"] = args ? args.outOfBandVrves : undefined;
            resourceInputs["owners"] = args ? args.owners : undefined;
            resourceInputs["parents"] = args ? args.parents : undefined;
            resourceInputs["permissionResources"] = args ? args.permissionResources : undefined;
            resourceInputs["profiles"] = args ? args.profiles : undefined;
            resourceInputs["sharedScope"] = args ? args.sharedScope : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["versionContexts"] = args ? args.versionContexts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AccessPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AccessPolicy resources.
 */
export interface AccessPolicyState {
    /**
     * The Account ID for this managed object.
     */
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    /**
     * The type of address to be retrieved from Inband IP Pool object.
     */
    addressTypes?: pulumi.Input<pulumi.Input<inputs.AccessPolicyAddressType>[]>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    ancestors?: pulumi.Input<pulumi.Input<inputs.AccessPolicyAncestor>[]>;
    /**
     * The fully-qualified name of the instantiated, concrete type. This property is used as a discriminator to identify the
     * type of the payload when marshaling and unmarshaling data.
     */
    classId?: pulumi.Input<string>;
    /**
     * The type of configuration, In-Band and/or Out-Of-Band to be configured on the CIMC.
     */
    configurationTypes?: pulumi.Input<pulumi.Input<inputs.AccessPolicyConfigurationType>[]>;
    /**
     * The time when this managed object was created.
     */
    createTime?: pulumi.Input<string>;
    /**
     * Description of the policy.
     */
    description?: pulumi.Input<string>;
    /**
     * The DomainGroup ID for this managed object.
     */
    domainGroupMoid?: pulumi.Input<string>;
    /**
     * A reference to a ippoolPool resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    inbandIpPools?: pulumi.Input<pulumi.Input<inputs.AccessPolicyInbandIpPool>[]>;
    /**
     * VLAN to be used for server access over Inband network.
     */
    inbandVlan?: pulumi.Input<number>;
    /**
     * A reference to a vrfVrf resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    inbandVrves?: pulumi.Input<pulumi.Input<inputs.AccessPolicyInbandVrf>[]>;
    /**
     * The time when this managed object was last modified.
     */
    modTime?: pulumi.Input<string>;
    /**
     * The unique identifier of this Managed Object instance.
     */
    moid?: pulumi.Input<string>;
    /**
     * Name of the concrete policy.
     */
    name?: pulumi.Input<string>;
    /**
     * The fully-qualified name of the instantiated, concrete type. The value should be the same as the 'ClassId' property.
     */
    objectType?: pulumi.Input<string>;
    /**
     * A reference to a organizationOrganization resource. When the $expand query parameter is specified, the referenced
     * resource is returned inline.
     */
    organizations?: pulumi.Input<pulumi.Input<inputs.AccessPolicyOrganization>[]>;
    /**
     * A reference to a ippoolPool resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    outOfBandIpPools?: pulumi.Input<pulumi.Input<inputs.AccessPolicyOutOfBandIpPool>[]>;
    /**
     * A reference to a vrfVrf resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    outOfBandVrves?: pulumi.Input<pulumi.Input<inputs.AccessPolicyOutOfBandVrf>[]>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A reference to a moBaseMo resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    parents?: pulumi.Input<pulumi.Input<inputs.AccessPolicyParent>[]>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    permissionResources?: pulumi.Input<pulumi.Input<inputs.AccessPolicyPermissionResource>[]>;
    /**
     * An array of relationships to policyAbstractConfigProfile resources.
     */
    profiles?: pulumi.Input<pulumi.Input<inputs.AccessPolicyProfile>[]>;
    /**
     * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs. Objects that are made
     * available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally
     * available to all end users or restricted to end users based on their license entitlement. Users can use this property to
     * differentiate the scope (global or a specific license tier) to which a shared MO belongs.
     */
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.AccessPolicyTag>[]>;
    /**
     * The versioning info for this managed object.
     */
    versionContexts?: pulumi.Input<pulumi.Input<inputs.AccessPolicyVersionContext>[]>;
}

/**
 * The set of arguments for constructing a AccessPolicy resource.
 */
export interface AccessPolicyArgs {
    /**
     * The Account ID for this managed object.
     */
    accountMoid?: pulumi.Input<string>;
    additionalProperties?: pulumi.Input<string>;
    /**
     * The type of address to be retrieved from Inband IP Pool object.
     */
    addressTypes?: pulumi.Input<pulumi.Input<inputs.AccessPolicyAddressType>[]>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    ancestors?: pulumi.Input<pulumi.Input<inputs.AccessPolicyAncestor>[]>;
    /**
     * The fully-qualified name of the instantiated, concrete type. This property is used as a discriminator to identify the
     * type of the payload when marshaling and unmarshaling data.
     */
    classId?: pulumi.Input<string>;
    /**
     * The type of configuration, In-Band and/or Out-Of-Band to be configured on the CIMC.
     */
    configurationTypes?: pulumi.Input<pulumi.Input<inputs.AccessPolicyConfigurationType>[]>;
    /**
     * The time when this managed object was created.
     */
    createTime?: pulumi.Input<string>;
    /**
     * Description of the policy.
     */
    description?: pulumi.Input<string>;
    /**
     * The DomainGroup ID for this managed object.
     */
    domainGroupMoid?: pulumi.Input<string>;
    /**
     * A reference to a ippoolPool resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    inbandIpPools?: pulumi.Input<pulumi.Input<inputs.AccessPolicyInbandIpPool>[]>;
    /**
     * VLAN to be used for server access over Inband network.
     */
    inbandVlan?: pulumi.Input<number>;
    /**
     * A reference to a vrfVrf resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    inbandVrves?: pulumi.Input<pulumi.Input<inputs.AccessPolicyInbandVrf>[]>;
    /**
     * The time when this managed object was last modified.
     */
    modTime?: pulumi.Input<string>;
    /**
     * The unique identifier of this Managed Object instance.
     */
    moid?: pulumi.Input<string>;
    /**
     * Name of the concrete policy.
     */
    name?: pulumi.Input<string>;
    /**
     * The fully-qualified name of the instantiated, concrete type. The value should be the same as the 'ClassId' property.
     */
    objectType?: pulumi.Input<string>;
    /**
     * A reference to a organizationOrganization resource. When the $expand query parameter is specified, the referenced
     * resource is returned inline.
     */
    organizations?: pulumi.Input<pulumi.Input<inputs.AccessPolicyOrganization>[]>;
    /**
     * A reference to a ippoolPool resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    outOfBandIpPools?: pulumi.Input<pulumi.Input<inputs.AccessPolicyOutOfBandIpPool>[]>;
    /**
     * A reference to a vrfVrf resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    outOfBandVrves?: pulumi.Input<pulumi.Input<inputs.AccessPolicyOutOfBandVrf>[]>;
    owners?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A reference to a moBaseMo resource. When the $expand query parameter is specified, the referenced resource is returned
     * inline.
     */
    parents?: pulumi.Input<pulumi.Input<inputs.AccessPolicyParent>[]>;
    /**
     * An array of relationships to moBaseMo resources.
     */
    permissionResources?: pulumi.Input<pulumi.Input<inputs.AccessPolicyPermissionResource>[]>;
    /**
     * An array of relationships to policyAbstractConfigProfile resources.
     */
    profiles?: pulumi.Input<pulumi.Input<inputs.AccessPolicyProfile>[]>;
    /**
     * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs. Objects that are made
     * available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally
     * available to all end users or restricted to end users based on their license entitlement. Users can use this property to
     * differentiate the scope (global or a specific license tier) to which a shared MO belongs.
     */
    sharedScope?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.AccessPolicyTag>[]>;
    /**
     * The versioning info for this managed object.
     */
    versionContexts?: pulumi.Input<pulumi.Input<inputs.AccessPolicyVersionContext>[]>;
}
