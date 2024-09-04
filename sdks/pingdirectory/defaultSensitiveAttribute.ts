// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DefaultSensitiveAttribute extends pulumi.CustomResource {
    /**
     * Get an existing DefaultSensitiveAttribute resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DefaultSensitiveAttributeState, opts?: pulumi.CustomResourceOptions): DefaultSensitiveAttribute {
        return new DefaultSensitiveAttribute(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pingdirectory:index/defaultSensitiveAttribute:DefaultSensitiveAttribute';

    /**
     * Returns true if the given object is an instance of DefaultSensitiveAttribute.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DefaultSensitiveAttribute {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DefaultSensitiveAttribute.__pulumiType;
    }

    /**
     * Indicates whether clients will be allowed to include sensitive attributes in add requests.
     */
    public readonly allowInAdd!: pulumi.Output<string>;
    /**
     * Indicates whether clients will be allowed to target sensitive attributes with compare requests.
     */
    public readonly allowInCompare!: pulumi.Output<string>;
    /**
     * Indicates whether clients will be allowed to include sensitive attributes in search filters. This also includes filters
     * that may be used in other forms, including assertion and LDAP join request controls.
     */
    public readonly allowInFilter!: pulumi.Output<string>;
    /**
     * Indicates whether clients will be allowed to target sensitive attributes with modify requests.
     */
    public readonly allowInModify!: pulumi.Output<string>;
    /**
     * Indicates whether sensitive attributes should be included in entries returned to the client. This includes not only
     * search result entries, but also other forms including in the values of controls like the pre-read, post-read, get
     * authorization entry, and LDAP join response controls.
     */
    public readonly allowInReturnedEntries!: pulumi.Output<string>;
    /**
     * The name(s) or OID(s) of the attribute types for attributes whose values may be considered sensitive.
     */
    public readonly attributeTypes!: pulumi.Output<string[]>;
    /**
     * A description for this Sensitive Attribute
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * Indicates whether to automatically include any server-generated operational attributes that may contain sensitive data.
     */
    public readonly includeDefaultSensitiveOperationalAttributes!: pulumi.Output<boolean>;
    /**
     * Name of this config object.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Notifications returned by the PingDirectory Configuration API.
     */
    public /*out*/ readonly notifications!: pulumi.Output<string[]>;
    /**
     * Required actions returned by the PingDirectory Configuration API.
     */
    public /*out*/ readonly requiredActions!: pulumi.Output<outputs.DefaultSensitiveAttributeRequiredAction[]>;
    /**
     * The type of Sensitive Attribute resource. Options are ['sensitive-attribute']
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DefaultSensitiveAttribute resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: DefaultSensitiveAttributeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DefaultSensitiveAttributeArgs | DefaultSensitiveAttributeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DefaultSensitiveAttributeState | undefined;
            resourceInputs["allowInAdd"] = state ? state.allowInAdd : undefined;
            resourceInputs["allowInCompare"] = state ? state.allowInCompare : undefined;
            resourceInputs["allowInFilter"] = state ? state.allowInFilter : undefined;
            resourceInputs["allowInModify"] = state ? state.allowInModify : undefined;
            resourceInputs["allowInReturnedEntries"] = state ? state.allowInReturnedEntries : undefined;
            resourceInputs["attributeTypes"] = state ? state.attributeTypes : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["includeDefaultSensitiveOperationalAttributes"] = state ? state.includeDefaultSensitiveOperationalAttributes : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["notifications"] = state ? state.notifications : undefined;
            resourceInputs["requiredActions"] = state ? state.requiredActions : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as DefaultSensitiveAttributeArgs | undefined;
            resourceInputs["allowInAdd"] = args ? args.allowInAdd : undefined;
            resourceInputs["allowInCompare"] = args ? args.allowInCompare : undefined;
            resourceInputs["allowInFilter"] = args ? args.allowInFilter : undefined;
            resourceInputs["allowInModify"] = args ? args.allowInModify : undefined;
            resourceInputs["allowInReturnedEntries"] = args ? args.allowInReturnedEntries : undefined;
            resourceInputs["attributeTypes"] = args ? args.attributeTypes : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["includeDefaultSensitiveOperationalAttributes"] = args ? args.includeDefaultSensitiveOperationalAttributes : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["notifications"] = undefined /*out*/;
            resourceInputs["requiredActions"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DefaultSensitiveAttribute.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DefaultSensitiveAttribute resources.
 */
export interface DefaultSensitiveAttributeState {
    /**
     * Indicates whether clients will be allowed to include sensitive attributes in add requests.
     */
    allowInAdd?: pulumi.Input<string>;
    /**
     * Indicates whether clients will be allowed to target sensitive attributes with compare requests.
     */
    allowInCompare?: pulumi.Input<string>;
    /**
     * Indicates whether clients will be allowed to include sensitive attributes in search filters. This also includes filters
     * that may be used in other forms, including assertion and LDAP join request controls.
     */
    allowInFilter?: pulumi.Input<string>;
    /**
     * Indicates whether clients will be allowed to target sensitive attributes with modify requests.
     */
    allowInModify?: pulumi.Input<string>;
    /**
     * Indicates whether sensitive attributes should be included in entries returned to the client. This includes not only
     * search result entries, but also other forms including in the values of controls like the pre-read, post-read, get
     * authorization entry, and LDAP join response controls.
     */
    allowInReturnedEntries?: pulumi.Input<string>;
    /**
     * The name(s) or OID(s) of the attribute types for attributes whose values may be considered sensitive.
     */
    attributeTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A description for this Sensitive Attribute
     */
    description?: pulumi.Input<string>;
    /**
     * Indicates whether to automatically include any server-generated operational attributes that may contain sensitive data.
     */
    includeDefaultSensitiveOperationalAttributes?: pulumi.Input<boolean>;
    /**
     * Name of this config object.
     */
    name?: pulumi.Input<string>;
    /**
     * Notifications returned by the PingDirectory Configuration API.
     */
    notifications?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Required actions returned by the PingDirectory Configuration API.
     */
    requiredActions?: pulumi.Input<pulumi.Input<inputs.DefaultSensitiveAttributeRequiredAction>[]>;
    /**
     * The type of Sensitive Attribute resource. Options are ['sensitive-attribute']
     */
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DefaultSensitiveAttribute resource.
 */
export interface DefaultSensitiveAttributeArgs {
    /**
     * Indicates whether clients will be allowed to include sensitive attributes in add requests.
     */
    allowInAdd?: pulumi.Input<string>;
    /**
     * Indicates whether clients will be allowed to target sensitive attributes with compare requests.
     */
    allowInCompare?: pulumi.Input<string>;
    /**
     * Indicates whether clients will be allowed to include sensitive attributes in search filters. This also includes filters
     * that may be used in other forms, including assertion and LDAP join request controls.
     */
    allowInFilter?: pulumi.Input<string>;
    /**
     * Indicates whether clients will be allowed to target sensitive attributes with modify requests.
     */
    allowInModify?: pulumi.Input<string>;
    /**
     * Indicates whether sensitive attributes should be included in entries returned to the client. This includes not only
     * search result entries, but also other forms including in the values of controls like the pre-read, post-read, get
     * authorization entry, and LDAP join response controls.
     */
    allowInReturnedEntries?: pulumi.Input<string>;
    /**
     * The name(s) or OID(s) of the attribute types for attributes whose values may be considered sensitive.
     */
    attributeTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A description for this Sensitive Attribute
     */
    description?: pulumi.Input<string>;
    /**
     * Indicates whether to automatically include any server-generated operational attributes that may contain sensitive data.
     */
    includeDefaultSensitiveOperationalAttributes?: pulumi.Input<boolean>;
    /**
     * Name of this config object.
     */
    name?: pulumi.Input<string>;
}
