// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DefaultRestResourceType extends pulumi.CustomResource {
    /**
     * Get an existing DefaultRestResourceType resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DefaultRestResourceTypeState, opts?: pulumi.CustomResourceOptions): DefaultRestResourceType {
        return new DefaultRestResourceType(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pingdirectory:index/defaultRestResourceType:DefaultRestResourceType';

    /**
     * Returns true if the given object is an instance of DefaultRestResourceType.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DefaultRestResourceType {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DefaultRestResourceType.__pulumiType;
    }

    /**
     * Specifies an auxiliary LDAP object class that should be exposed by this REST Resource Type.
     */
    public readonly auxiliaryLdapObjectclasses!: pulumi.Output<string[]>;
    /**
     * Specifies the name or OID of the LDAP attribute type to be used as the RDN of new resources.
     */
    public readonly createRdnAttributeType!: pulumi.Output<string>;
    /**
     * The maximum number of resources that may be included in a report.
     */
    public readonly delegatedAdminReportSizeLimit!: pulumi.Output<number>;
    /**
     * The maximum number of resources that may be returned from a search request.
     */
    public readonly delegatedAdminSearchSizeLimit!: pulumi.Output<number>;
    /**
     * A description for this REST Resource Type
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * A human readable display name for this REST Resource Type.
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * Indicates whether the REST Resource Type is enabled.
     */
    public readonly enabled!: pulumi.Output<boolean>;
    /**
     * The set of LDAP filters that define the LDAP entries that should be included in this REST Resource Type.
     */
    public readonly includeFilters!: pulumi.Output<string[]>;
    /**
     * Specifies the name of the group member column that will be displayed in the Delegated Admin UI
     */
    public readonly membersColumnName!: pulumi.Output<string>;
    /**
     * Name of this config object.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Specifies the name of the group nonmember column that will be displayed in the Delegated Admin UI
     */
    public readonly nonmembersColumnName!: pulumi.Output<string>;
    /**
     * Notifications returned by the PingDirectory Configuration API.
     */
    public /*out*/ readonly notifications!: pulumi.Output<string[]>;
    /**
     * Specifies the DN of the parent entry for new resources of this type, when a parent resource is not provided by the app.
     * The parent DN must be at or below the search base of this resource type.
     */
    public readonly parentDn!: pulumi.Output<string>;
    /**
     * Specifies the name of another resource type which may be a parent of new resources of this type. The search base DN of
     * the parent resource type must be at or above the search base DN of this resource type.
     */
    public readonly parentResourceType!: pulumi.Output<string>;
    /**
     * Specifies which attribute category the password belongs to.
     */
    public readonly passwordAttributeCategory!: pulumi.Output<string>;
    /**
     * This property determines the display order for the password within its attribute category. Attributes are ordered within
     * their category based on this index from least to greatest.
     */
    public readonly passwordDisplayOrderIndex!: pulumi.Output<number>;
    /**
     * Specifies an attribute whose values are to be constructed when a new resource is created. The values are only set at
     * creation time. Subsequent modifications to attributes in the constructed attribute value-pattern are not propagated
     * here.
     */
    public readonly postCreateConstructedAttributes!: pulumi.Output<string[]>;
    /**
     * Specifies the name or OID of the LDAP attribute type which is the primary display attribute. This attribute type must be
     * in the search filter pattern and must have a Delegated Admin Attribute definition.
     */
    public readonly primaryDisplayAttributeType!: pulumi.Output<string>;
    /**
     * Specifies a template for a relative DN from the parent resource which identifies the parent entry for a new resource of
     * this type. If this property is not specified then new resources are created immediately below the parent resource or
     * parent DN.
     */
    public readonly relativeDnFromParentResource!: pulumi.Output<string>;
    /**
     * Required actions returned by the PingDirectory Configuration API.
     */
    public /*out*/ readonly requiredActions!: pulumi.Output<outputs.DefaultRestResourceTypeRequiredAction[]>;
    /**
     * The HTTP addressable endpoint of this REST Resource Type relative to a REST API base URL. Do not include a leading '/'.
     */
    public readonly resourceEndpoint!: pulumi.Output<string>;
    /**
     * Specifies the base DN of the branch of the LDAP directory where resources of this type are located.
     */
    public readonly searchBaseDn!: pulumi.Output<string>;
    /**
     * Specifies the LDAP filter that should be used when searching for resources matching provided search text. All attribute
     * types in the filter pattern referencing the search text must have a Delegated Admin Attribute definition.
     */
    public readonly searchFilterPattern!: pulumi.Output<string>;
    /**
     * Specifies the LDAP structural object class that should be exposed by this REST Resource Type.
     */
    public readonly structuralLdapObjectclass!: pulumi.Output<string>;
    /**
     * The type of REST Resource Type resource. Options are ['user', 'generic', 'group']
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Specifies an attribute whose values are to be constructed when a resource is updated. The constructed values replace any
     * existing values of the attribute.
     */
    public readonly updateConstructedAttributes!: pulumi.Output<string[]>;

    /**
     * Create a DefaultRestResourceType resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: DefaultRestResourceTypeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DefaultRestResourceTypeArgs | DefaultRestResourceTypeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DefaultRestResourceTypeState | undefined;
            resourceInputs["auxiliaryLdapObjectclasses"] = state ? state.auxiliaryLdapObjectclasses : undefined;
            resourceInputs["createRdnAttributeType"] = state ? state.createRdnAttributeType : undefined;
            resourceInputs["delegatedAdminReportSizeLimit"] = state ? state.delegatedAdminReportSizeLimit : undefined;
            resourceInputs["delegatedAdminSearchSizeLimit"] = state ? state.delegatedAdminSearchSizeLimit : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["includeFilters"] = state ? state.includeFilters : undefined;
            resourceInputs["membersColumnName"] = state ? state.membersColumnName : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nonmembersColumnName"] = state ? state.nonmembersColumnName : undefined;
            resourceInputs["notifications"] = state ? state.notifications : undefined;
            resourceInputs["parentDn"] = state ? state.parentDn : undefined;
            resourceInputs["parentResourceType"] = state ? state.parentResourceType : undefined;
            resourceInputs["passwordAttributeCategory"] = state ? state.passwordAttributeCategory : undefined;
            resourceInputs["passwordDisplayOrderIndex"] = state ? state.passwordDisplayOrderIndex : undefined;
            resourceInputs["postCreateConstructedAttributes"] = state ? state.postCreateConstructedAttributes : undefined;
            resourceInputs["primaryDisplayAttributeType"] = state ? state.primaryDisplayAttributeType : undefined;
            resourceInputs["relativeDnFromParentResource"] = state ? state.relativeDnFromParentResource : undefined;
            resourceInputs["requiredActions"] = state ? state.requiredActions : undefined;
            resourceInputs["resourceEndpoint"] = state ? state.resourceEndpoint : undefined;
            resourceInputs["searchBaseDn"] = state ? state.searchBaseDn : undefined;
            resourceInputs["searchFilterPattern"] = state ? state.searchFilterPattern : undefined;
            resourceInputs["structuralLdapObjectclass"] = state ? state.structuralLdapObjectclass : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["updateConstructedAttributes"] = state ? state.updateConstructedAttributes : undefined;
        } else {
            const args = argsOrState as DefaultRestResourceTypeArgs | undefined;
            resourceInputs["auxiliaryLdapObjectclasses"] = args ? args.auxiliaryLdapObjectclasses : undefined;
            resourceInputs["createRdnAttributeType"] = args ? args.createRdnAttributeType : undefined;
            resourceInputs["delegatedAdminReportSizeLimit"] = args ? args.delegatedAdminReportSizeLimit : undefined;
            resourceInputs["delegatedAdminSearchSizeLimit"] = args ? args.delegatedAdminSearchSizeLimit : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["includeFilters"] = args ? args.includeFilters : undefined;
            resourceInputs["membersColumnName"] = args ? args.membersColumnName : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nonmembersColumnName"] = args ? args.nonmembersColumnName : undefined;
            resourceInputs["parentDn"] = args ? args.parentDn : undefined;
            resourceInputs["parentResourceType"] = args ? args.parentResourceType : undefined;
            resourceInputs["passwordAttributeCategory"] = args ? args.passwordAttributeCategory : undefined;
            resourceInputs["passwordDisplayOrderIndex"] = args ? args.passwordDisplayOrderIndex : undefined;
            resourceInputs["postCreateConstructedAttributes"] = args ? args.postCreateConstructedAttributes : undefined;
            resourceInputs["primaryDisplayAttributeType"] = args ? args.primaryDisplayAttributeType : undefined;
            resourceInputs["relativeDnFromParentResource"] = args ? args.relativeDnFromParentResource : undefined;
            resourceInputs["resourceEndpoint"] = args ? args.resourceEndpoint : undefined;
            resourceInputs["searchBaseDn"] = args ? args.searchBaseDn : undefined;
            resourceInputs["searchFilterPattern"] = args ? args.searchFilterPattern : undefined;
            resourceInputs["structuralLdapObjectclass"] = args ? args.structuralLdapObjectclass : undefined;
            resourceInputs["updateConstructedAttributes"] = args ? args.updateConstructedAttributes : undefined;
            resourceInputs["notifications"] = undefined /*out*/;
            resourceInputs["requiredActions"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DefaultRestResourceType.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DefaultRestResourceType resources.
 */
export interface DefaultRestResourceTypeState {
    /**
     * Specifies an auxiliary LDAP object class that should be exposed by this REST Resource Type.
     */
    auxiliaryLdapObjectclasses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the name or OID of the LDAP attribute type to be used as the RDN of new resources.
     */
    createRdnAttributeType?: pulumi.Input<string>;
    /**
     * The maximum number of resources that may be included in a report.
     */
    delegatedAdminReportSizeLimit?: pulumi.Input<number>;
    /**
     * The maximum number of resources that may be returned from a search request.
     */
    delegatedAdminSearchSizeLimit?: pulumi.Input<number>;
    /**
     * A description for this REST Resource Type
     */
    description?: pulumi.Input<string>;
    /**
     * A human readable display name for this REST Resource Type.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Indicates whether the REST Resource Type is enabled.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The set of LDAP filters that define the LDAP entries that should be included in this REST Resource Type.
     */
    includeFilters?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the name of the group member column that will be displayed in the Delegated Admin UI
     */
    membersColumnName?: pulumi.Input<string>;
    /**
     * Name of this config object.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the name of the group nonmember column that will be displayed in the Delegated Admin UI
     */
    nonmembersColumnName?: pulumi.Input<string>;
    /**
     * Notifications returned by the PingDirectory Configuration API.
     */
    notifications?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the DN of the parent entry for new resources of this type, when a parent resource is not provided by the app.
     * The parent DN must be at or below the search base of this resource type.
     */
    parentDn?: pulumi.Input<string>;
    /**
     * Specifies the name of another resource type which may be a parent of new resources of this type. The search base DN of
     * the parent resource type must be at or above the search base DN of this resource type.
     */
    parentResourceType?: pulumi.Input<string>;
    /**
     * Specifies which attribute category the password belongs to.
     */
    passwordAttributeCategory?: pulumi.Input<string>;
    /**
     * This property determines the display order for the password within its attribute category. Attributes are ordered within
     * their category based on this index from least to greatest.
     */
    passwordDisplayOrderIndex?: pulumi.Input<number>;
    /**
     * Specifies an attribute whose values are to be constructed when a new resource is created. The values are only set at
     * creation time. Subsequent modifications to attributes in the constructed attribute value-pattern are not propagated
     * here.
     */
    postCreateConstructedAttributes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the name or OID of the LDAP attribute type which is the primary display attribute. This attribute type must be
     * in the search filter pattern and must have a Delegated Admin Attribute definition.
     */
    primaryDisplayAttributeType?: pulumi.Input<string>;
    /**
     * Specifies a template for a relative DN from the parent resource which identifies the parent entry for a new resource of
     * this type. If this property is not specified then new resources are created immediately below the parent resource or
     * parent DN.
     */
    relativeDnFromParentResource?: pulumi.Input<string>;
    /**
     * Required actions returned by the PingDirectory Configuration API.
     */
    requiredActions?: pulumi.Input<pulumi.Input<inputs.DefaultRestResourceTypeRequiredAction>[]>;
    /**
     * The HTTP addressable endpoint of this REST Resource Type relative to a REST API base URL. Do not include a leading '/'.
     */
    resourceEndpoint?: pulumi.Input<string>;
    /**
     * Specifies the base DN of the branch of the LDAP directory where resources of this type are located.
     */
    searchBaseDn?: pulumi.Input<string>;
    /**
     * Specifies the LDAP filter that should be used when searching for resources matching provided search text. All attribute
     * types in the filter pattern referencing the search text must have a Delegated Admin Attribute definition.
     */
    searchFilterPattern?: pulumi.Input<string>;
    /**
     * Specifies the LDAP structural object class that should be exposed by this REST Resource Type.
     */
    structuralLdapObjectclass?: pulumi.Input<string>;
    /**
     * The type of REST Resource Type resource. Options are ['user', 'generic', 'group']
     */
    type?: pulumi.Input<string>;
    /**
     * Specifies an attribute whose values are to be constructed when a resource is updated. The constructed values replace any
     * existing values of the attribute.
     */
    updateConstructedAttributes?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a DefaultRestResourceType resource.
 */
export interface DefaultRestResourceTypeArgs {
    /**
     * Specifies an auxiliary LDAP object class that should be exposed by this REST Resource Type.
     */
    auxiliaryLdapObjectclasses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the name or OID of the LDAP attribute type to be used as the RDN of new resources.
     */
    createRdnAttributeType?: pulumi.Input<string>;
    /**
     * The maximum number of resources that may be included in a report.
     */
    delegatedAdminReportSizeLimit?: pulumi.Input<number>;
    /**
     * The maximum number of resources that may be returned from a search request.
     */
    delegatedAdminSearchSizeLimit?: pulumi.Input<number>;
    /**
     * A description for this REST Resource Type
     */
    description?: pulumi.Input<string>;
    /**
     * A human readable display name for this REST Resource Type.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Indicates whether the REST Resource Type is enabled.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The set of LDAP filters that define the LDAP entries that should be included in this REST Resource Type.
     */
    includeFilters?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the name of the group member column that will be displayed in the Delegated Admin UI
     */
    membersColumnName?: pulumi.Input<string>;
    /**
     * Name of this config object.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the name of the group nonmember column that will be displayed in the Delegated Admin UI
     */
    nonmembersColumnName?: pulumi.Input<string>;
    /**
     * Specifies the DN of the parent entry for new resources of this type, when a parent resource is not provided by the app.
     * The parent DN must be at or below the search base of this resource type.
     */
    parentDn?: pulumi.Input<string>;
    /**
     * Specifies the name of another resource type which may be a parent of new resources of this type. The search base DN of
     * the parent resource type must be at or above the search base DN of this resource type.
     */
    parentResourceType?: pulumi.Input<string>;
    /**
     * Specifies which attribute category the password belongs to.
     */
    passwordAttributeCategory?: pulumi.Input<string>;
    /**
     * This property determines the display order for the password within its attribute category. Attributes are ordered within
     * their category based on this index from least to greatest.
     */
    passwordDisplayOrderIndex?: pulumi.Input<number>;
    /**
     * Specifies an attribute whose values are to be constructed when a new resource is created. The values are only set at
     * creation time. Subsequent modifications to attributes in the constructed attribute value-pattern are not propagated
     * here.
     */
    postCreateConstructedAttributes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the name or OID of the LDAP attribute type which is the primary display attribute. This attribute type must be
     * in the search filter pattern and must have a Delegated Admin Attribute definition.
     */
    primaryDisplayAttributeType?: pulumi.Input<string>;
    /**
     * Specifies a template for a relative DN from the parent resource which identifies the parent entry for a new resource of
     * this type. If this property is not specified then new resources are created immediately below the parent resource or
     * parent DN.
     */
    relativeDnFromParentResource?: pulumi.Input<string>;
    /**
     * The HTTP addressable endpoint of this REST Resource Type relative to a REST API base URL. Do not include a leading '/'.
     */
    resourceEndpoint?: pulumi.Input<string>;
    /**
     * Specifies the base DN of the branch of the LDAP directory where resources of this type are located.
     */
    searchBaseDn?: pulumi.Input<string>;
    /**
     * Specifies the LDAP filter that should be used when searching for resources matching provided search text. All attribute
     * types in the filter pattern referencing the search text must have a Delegated Admin Attribute definition.
     */
    searchFilterPattern?: pulumi.Input<string>;
    /**
     * Specifies the LDAP structural object class that should be exposed by this REST Resource Type.
     */
    structuralLdapObjectclass?: pulumi.Input<string>;
    /**
     * Specifies an attribute whose values are to be constructed when a resource is updated. The constructed values replace any
     * existing values of the attribute.
     */
    updateConstructedAttributes?: pulumi.Input<pulumi.Input<string>[]>;
}
