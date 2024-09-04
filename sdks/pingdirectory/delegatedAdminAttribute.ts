// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DelegatedAdminAttribute extends pulumi.CustomResource {
    /**
     * Get an existing DelegatedAdminAttribute resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DelegatedAdminAttributeState, opts?: pulumi.CustomResourceOptions): DelegatedAdminAttribute {
        return new DelegatedAdminAttribute(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pingdirectory:index/delegatedAdminAttribute:DelegatedAdminAttribute';

    /**
     * Returns true if the given object is an instance of DelegatedAdminAttribute.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DelegatedAdminAttribute {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DelegatedAdminAttribute.__pulumiType;
    }

    /**
     * The list of file types allowed to be uploaded. If no types are specified, then all types will be allowed.
     */
    public readonly allowedMimeTypes!: pulumi.Output<string[]>;
    /**
     * Specifies which attribute category this attribute belongs to.
     */
    public readonly attributeCategory!: pulumi.Output<string | undefined>;
    /**
     * Indicates how the attribute is presented to the user of the app.
     */
    public readonly attributePresentation!: pulumi.Output<string | undefined>;
    /**
     * Specifies the name or OID of the LDAP attribute type.
     */
    public readonly attributeType!: pulumi.Output<string>;
    /**
     * Specifies the format string that is used to present a date and/or time value to the user of the app. This property only
     * applies to LDAP attribute types whose LDAP syntax is GeneralizedTime and is ignored if the attribute type has any other
     * syntax.
     */
    public readonly dateTimeFormat!: pulumi.Output<string>;
    /**
     * A description for this Delegated Admin Attribute
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * A human readable display name for this Delegated Admin Attribute.
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * This property determines a display order for attributes within a given attribute category. Attributes are ordered within
     * their category based on this index from least to greatest.
     */
    public readonly displayOrderIndex!: pulumi.Output<number>;
    /**
     * Indicates whether this Delegated Admin Attribute is to be included in the summary display for a resource.
     */
    public readonly includeInSummary!: pulumi.Output<boolean>;
    /**
     * Indicates whether this Delegated Admin Attribute may have multiple values.
     */
    public readonly multiValued!: pulumi.Output<boolean>;
    /**
     * Specifies the circumstances under which the values of the attribute can be written.
     */
    public readonly mutability!: pulumi.Output<string>;
    /**
     * Notifications returned by the PingDirectory Configuration API.
     */
    public /*out*/ readonly notifications!: pulumi.Output<string[]>;
    /**
     * For LDAP attributes with DN syntax, specifies what kind of resource is referenced.
     */
    public readonly referenceResourceType!: pulumi.Output<string | undefined>;
    /**
     * Required actions returned by the PingDirectory Configuration API.
     */
    public /*out*/ readonly requiredActions!: pulumi.Output<outputs.DelegatedAdminAttributeRequiredAction[]>;
    /**
     * Name of the parent REST Resource Type
     */
    public readonly restResourceTypeName!: pulumi.Output<string>;
    /**
     * The type of Delegated Admin Attribute resource. Options are ['certificate', 'photo', 'generic']
     */
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a DelegatedAdminAttribute resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DelegatedAdminAttributeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DelegatedAdminAttributeArgs | DelegatedAdminAttributeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DelegatedAdminAttributeState | undefined;
            resourceInputs["allowedMimeTypes"] = state ? state.allowedMimeTypes : undefined;
            resourceInputs["attributeCategory"] = state ? state.attributeCategory : undefined;
            resourceInputs["attributePresentation"] = state ? state.attributePresentation : undefined;
            resourceInputs["attributeType"] = state ? state.attributeType : undefined;
            resourceInputs["dateTimeFormat"] = state ? state.dateTimeFormat : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["displayOrderIndex"] = state ? state.displayOrderIndex : undefined;
            resourceInputs["includeInSummary"] = state ? state.includeInSummary : undefined;
            resourceInputs["multiValued"] = state ? state.multiValued : undefined;
            resourceInputs["mutability"] = state ? state.mutability : undefined;
            resourceInputs["notifications"] = state ? state.notifications : undefined;
            resourceInputs["referenceResourceType"] = state ? state.referenceResourceType : undefined;
            resourceInputs["requiredActions"] = state ? state.requiredActions : undefined;
            resourceInputs["restResourceTypeName"] = state ? state.restResourceTypeName : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as DelegatedAdminAttributeArgs | undefined;
            if ((!args || args.attributeType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'attributeType'");
            }
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.restResourceTypeName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'restResourceTypeName'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["allowedMimeTypes"] = args ? args.allowedMimeTypes : undefined;
            resourceInputs["attributeCategory"] = args ? args.attributeCategory : undefined;
            resourceInputs["attributePresentation"] = args ? args.attributePresentation : undefined;
            resourceInputs["attributeType"] = args ? args.attributeType : undefined;
            resourceInputs["dateTimeFormat"] = args ? args.dateTimeFormat : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["displayOrderIndex"] = args ? args.displayOrderIndex : undefined;
            resourceInputs["includeInSummary"] = args ? args.includeInSummary : undefined;
            resourceInputs["multiValued"] = args ? args.multiValued : undefined;
            resourceInputs["mutability"] = args ? args.mutability : undefined;
            resourceInputs["referenceResourceType"] = args ? args.referenceResourceType : undefined;
            resourceInputs["restResourceTypeName"] = args ? args.restResourceTypeName : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["notifications"] = undefined /*out*/;
            resourceInputs["requiredActions"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DelegatedAdminAttribute.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DelegatedAdminAttribute resources.
 */
export interface DelegatedAdminAttributeState {
    /**
     * The list of file types allowed to be uploaded. If no types are specified, then all types will be allowed.
     */
    allowedMimeTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies which attribute category this attribute belongs to.
     */
    attributeCategory?: pulumi.Input<string>;
    /**
     * Indicates how the attribute is presented to the user of the app.
     */
    attributePresentation?: pulumi.Input<string>;
    /**
     * Specifies the name or OID of the LDAP attribute type.
     */
    attributeType?: pulumi.Input<string>;
    /**
     * Specifies the format string that is used to present a date and/or time value to the user of the app. This property only
     * applies to LDAP attribute types whose LDAP syntax is GeneralizedTime and is ignored if the attribute type has any other
     * syntax.
     */
    dateTimeFormat?: pulumi.Input<string>;
    /**
     * A description for this Delegated Admin Attribute
     */
    description?: pulumi.Input<string>;
    /**
     * A human readable display name for this Delegated Admin Attribute.
     */
    displayName?: pulumi.Input<string>;
    /**
     * This property determines a display order for attributes within a given attribute category. Attributes are ordered within
     * their category based on this index from least to greatest.
     */
    displayOrderIndex?: pulumi.Input<number>;
    /**
     * Indicates whether this Delegated Admin Attribute is to be included in the summary display for a resource.
     */
    includeInSummary?: pulumi.Input<boolean>;
    /**
     * Indicates whether this Delegated Admin Attribute may have multiple values.
     */
    multiValued?: pulumi.Input<boolean>;
    /**
     * Specifies the circumstances under which the values of the attribute can be written.
     */
    mutability?: pulumi.Input<string>;
    /**
     * Notifications returned by the PingDirectory Configuration API.
     */
    notifications?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * For LDAP attributes with DN syntax, specifies what kind of resource is referenced.
     */
    referenceResourceType?: pulumi.Input<string>;
    /**
     * Required actions returned by the PingDirectory Configuration API.
     */
    requiredActions?: pulumi.Input<pulumi.Input<inputs.DelegatedAdminAttributeRequiredAction>[]>;
    /**
     * Name of the parent REST Resource Type
     */
    restResourceTypeName?: pulumi.Input<string>;
    /**
     * The type of Delegated Admin Attribute resource. Options are ['certificate', 'photo', 'generic']
     */
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DelegatedAdminAttribute resource.
 */
export interface DelegatedAdminAttributeArgs {
    /**
     * The list of file types allowed to be uploaded. If no types are specified, then all types will be allowed.
     */
    allowedMimeTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies which attribute category this attribute belongs to.
     */
    attributeCategory?: pulumi.Input<string>;
    /**
     * Indicates how the attribute is presented to the user of the app.
     */
    attributePresentation?: pulumi.Input<string>;
    /**
     * Specifies the name or OID of the LDAP attribute type.
     */
    attributeType: pulumi.Input<string>;
    /**
     * Specifies the format string that is used to present a date and/or time value to the user of the app. This property only
     * applies to LDAP attribute types whose LDAP syntax is GeneralizedTime and is ignored if the attribute type has any other
     * syntax.
     */
    dateTimeFormat?: pulumi.Input<string>;
    /**
     * A description for this Delegated Admin Attribute
     */
    description?: pulumi.Input<string>;
    /**
     * A human readable display name for this Delegated Admin Attribute.
     */
    displayName: pulumi.Input<string>;
    /**
     * This property determines a display order for attributes within a given attribute category. Attributes are ordered within
     * their category based on this index from least to greatest.
     */
    displayOrderIndex?: pulumi.Input<number>;
    /**
     * Indicates whether this Delegated Admin Attribute is to be included in the summary display for a resource.
     */
    includeInSummary?: pulumi.Input<boolean>;
    /**
     * Indicates whether this Delegated Admin Attribute may have multiple values.
     */
    multiValued?: pulumi.Input<boolean>;
    /**
     * Specifies the circumstances under which the values of the attribute can be written.
     */
    mutability?: pulumi.Input<string>;
    /**
     * For LDAP attributes with DN syntax, specifies what kind of resource is referenced.
     */
    referenceResourceType?: pulumi.Input<string>;
    /**
     * Name of the parent REST Resource Type
     */
    restResourceTypeName: pulumi.Input<string>;
    /**
     * The type of Delegated Admin Attribute resource. Options are ['certificate', 'photo', 'generic']
     */
    type: pulumi.Input<string>;
}
