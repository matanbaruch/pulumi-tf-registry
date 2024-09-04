// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DefaultScimResourceType extends pulumi.CustomResource {
    /**
     * Get an existing DefaultScimResourceType resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DefaultScimResourceTypeState, opts?: pulumi.CustomResourceOptions): DefaultScimResourceType {
        return new DefaultScimResourceType(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pingdirectory:index/defaultScimResourceType:DefaultScimResourceType';

    /**
     * Returns true if the given object is an instance of DefaultScimResourceType.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DefaultScimResourceType {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DefaultScimResourceType.__pulumiType;
    }

    /**
     * Specifies an auxiliary LDAP object class that should be exposed by this SCIM Resource Type.
     */
    public readonly auxiliaryLdapObjectclasses!: pulumi.Output<string[]>;
    /**
     * The core schema enforced on core attributes at the top level of a SCIM resource representation exposed by thisMapping
     * SCIM Resource Type.
     */
    public readonly coreSchema!: pulumi.Output<string>;
    /**
     * Specifies the template to use for the DN when creating new entries.
     */
    public readonly createDnPattern!: pulumi.Output<string>;
    /**
     * A description for this SCIM Resource Type
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * Indicates whether the SCIM Resource Type is enabled.
     */
    public readonly enabled!: pulumi.Output<boolean>;
    /**
     * The HTTP addressable endpoint of this SCIM Resource Type relative to the '/scim/v2' base URL. Do not include a leading
     * '/'.
     */
    public readonly endpoint!: pulumi.Output<string>;
    /**
     * Specifies the base DN of the branch of the LDAP directory that can be accessed by this SCIM Resource Type.
     */
    public readonly includeBaseDn!: pulumi.Output<string>;
    /**
     * The set of LDAP filters that define the LDAP entries that should be included in this SCIM Resource Type.
     */
    public readonly includeFilters!: pulumi.Output<string[]>;
    /**
     * Specifies the set of operational LDAP attributes to be provided by this SCIM Resource Type.
     */
    public readonly includeOperationalAttributes!: pulumi.Output<string[]>;
    /**
     * The maximum number of resources that the SCIM Resource Type should "look through" in the course of processing a search
     * request.
     */
    public readonly lookthroughLimit!: pulumi.Output<number>;
    /**
     * Name of this config object.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Notifications returned by the PingDirectory Configuration API.
     */
    public /*out*/ readonly notifications!: pulumi.Output<string[]>;
    /**
     * Optional additive schemas that are enforced on extension attributes in a SCIM resource representation for this Mapping
     * SCIM Resource Type.
     */
    public readonly optionalSchemaExtensions!: pulumi.Output<string[]>;
    /**
     * Required actions returned by the PingDirectory Configuration API.
     */
    public /*out*/ readonly requiredActions!: pulumi.Output<outputs.DefaultScimResourceTypeRequiredAction[]>;
    /**
     * Required additive schemas that are enforced on extension attributes in a SCIM resource representation for this Mapping
     * SCIM Resource Type.
     */
    public readonly requiredSchemaExtensions!: pulumi.Output<string[]>;
    /**
     * Options to alter the way schema checking is performed during create or modify requests.
     */
    public readonly schemaCheckingOptions!: pulumi.Output<string[]>;
    /**
     * Specifies the LDAP structural object class that should be exposed by this SCIM Resource Type.
     */
    public readonly structuralLdapObjectclass!: pulumi.Output<string>;
    /**
     * The type of SCIM Resource Type resource. Options are ['ldap-pass-through', 'mapping', 'ldap-mapping']
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DefaultScimResourceType resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: DefaultScimResourceTypeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DefaultScimResourceTypeArgs | DefaultScimResourceTypeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DefaultScimResourceTypeState | undefined;
            resourceInputs["auxiliaryLdapObjectclasses"] = state ? state.auxiliaryLdapObjectclasses : undefined;
            resourceInputs["coreSchema"] = state ? state.coreSchema : undefined;
            resourceInputs["createDnPattern"] = state ? state.createDnPattern : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["endpoint"] = state ? state.endpoint : undefined;
            resourceInputs["includeBaseDn"] = state ? state.includeBaseDn : undefined;
            resourceInputs["includeFilters"] = state ? state.includeFilters : undefined;
            resourceInputs["includeOperationalAttributes"] = state ? state.includeOperationalAttributes : undefined;
            resourceInputs["lookthroughLimit"] = state ? state.lookthroughLimit : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["notifications"] = state ? state.notifications : undefined;
            resourceInputs["optionalSchemaExtensions"] = state ? state.optionalSchemaExtensions : undefined;
            resourceInputs["requiredActions"] = state ? state.requiredActions : undefined;
            resourceInputs["requiredSchemaExtensions"] = state ? state.requiredSchemaExtensions : undefined;
            resourceInputs["schemaCheckingOptions"] = state ? state.schemaCheckingOptions : undefined;
            resourceInputs["structuralLdapObjectclass"] = state ? state.structuralLdapObjectclass : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as DefaultScimResourceTypeArgs | undefined;
            resourceInputs["auxiliaryLdapObjectclasses"] = args ? args.auxiliaryLdapObjectclasses : undefined;
            resourceInputs["coreSchema"] = args ? args.coreSchema : undefined;
            resourceInputs["createDnPattern"] = args ? args.createDnPattern : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["endpoint"] = args ? args.endpoint : undefined;
            resourceInputs["includeBaseDn"] = args ? args.includeBaseDn : undefined;
            resourceInputs["includeFilters"] = args ? args.includeFilters : undefined;
            resourceInputs["includeOperationalAttributes"] = args ? args.includeOperationalAttributes : undefined;
            resourceInputs["lookthroughLimit"] = args ? args.lookthroughLimit : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["optionalSchemaExtensions"] = args ? args.optionalSchemaExtensions : undefined;
            resourceInputs["requiredSchemaExtensions"] = args ? args.requiredSchemaExtensions : undefined;
            resourceInputs["schemaCheckingOptions"] = args ? args.schemaCheckingOptions : undefined;
            resourceInputs["structuralLdapObjectclass"] = args ? args.structuralLdapObjectclass : undefined;
            resourceInputs["notifications"] = undefined /*out*/;
            resourceInputs["requiredActions"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DefaultScimResourceType.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DefaultScimResourceType resources.
 */
export interface DefaultScimResourceTypeState {
    /**
     * Specifies an auxiliary LDAP object class that should be exposed by this SCIM Resource Type.
     */
    auxiliaryLdapObjectclasses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The core schema enforced on core attributes at the top level of a SCIM resource representation exposed by thisMapping
     * SCIM Resource Type.
     */
    coreSchema?: pulumi.Input<string>;
    /**
     * Specifies the template to use for the DN when creating new entries.
     */
    createDnPattern?: pulumi.Input<string>;
    /**
     * A description for this SCIM Resource Type
     */
    description?: pulumi.Input<string>;
    /**
     * Indicates whether the SCIM Resource Type is enabled.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The HTTP addressable endpoint of this SCIM Resource Type relative to the '/scim/v2' base URL. Do not include a leading
     * '/'.
     */
    endpoint?: pulumi.Input<string>;
    /**
     * Specifies the base DN of the branch of the LDAP directory that can be accessed by this SCIM Resource Type.
     */
    includeBaseDn?: pulumi.Input<string>;
    /**
     * The set of LDAP filters that define the LDAP entries that should be included in this SCIM Resource Type.
     */
    includeFilters?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the set of operational LDAP attributes to be provided by this SCIM Resource Type.
     */
    includeOperationalAttributes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The maximum number of resources that the SCIM Resource Type should "look through" in the course of processing a search
     * request.
     */
    lookthroughLimit?: pulumi.Input<number>;
    /**
     * Name of this config object.
     */
    name?: pulumi.Input<string>;
    /**
     * Notifications returned by the PingDirectory Configuration API.
     */
    notifications?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Optional additive schemas that are enforced on extension attributes in a SCIM resource representation for this Mapping
     * SCIM Resource Type.
     */
    optionalSchemaExtensions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Required actions returned by the PingDirectory Configuration API.
     */
    requiredActions?: pulumi.Input<pulumi.Input<inputs.DefaultScimResourceTypeRequiredAction>[]>;
    /**
     * Required additive schemas that are enforced on extension attributes in a SCIM resource representation for this Mapping
     * SCIM Resource Type.
     */
    requiredSchemaExtensions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Options to alter the way schema checking is performed during create or modify requests.
     */
    schemaCheckingOptions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the LDAP structural object class that should be exposed by this SCIM Resource Type.
     */
    structuralLdapObjectclass?: pulumi.Input<string>;
    /**
     * The type of SCIM Resource Type resource. Options are ['ldap-pass-through', 'mapping', 'ldap-mapping']
     */
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DefaultScimResourceType resource.
 */
export interface DefaultScimResourceTypeArgs {
    /**
     * Specifies an auxiliary LDAP object class that should be exposed by this SCIM Resource Type.
     */
    auxiliaryLdapObjectclasses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The core schema enforced on core attributes at the top level of a SCIM resource representation exposed by thisMapping
     * SCIM Resource Type.
     */
    coreSchema?: pulumi.Input<string>;
    /**
     * Specifies the template to use for the DN when creating new entries.
     */
    createDnPattern?: pulumi.Input<string>;
    /**
     * A description for this SCIM Resource Type
     */
    description?: pulumi.Input<string>;
    /**
     * Indicates whether the SCIM Resource Type is enabled.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The HTTP addressable endpoint of this SCIM Resource Type relative to the '/scim/v2' base URL. Do not include a leading
     * '/'.
     */
    endpoint?: pulumi.Input<string>;
    /**
     * Specifies the base DN of the branch of the LDAP directory that can be accessed by this SCIM Resource Type.
     */
    includeBaseDn?: pulumi.Input<string>;
    /**
     * The set of LDAP filters that define the LDAP entries that should be included in this SCIM Resource Type.
     */
    includeFilters?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the set of operational LDAP attributes to be provided by this SCIM Resource Type.
     */
    includeOperationalAttributes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The maximum number of resources that the SCIM Resource Type should "look through" in the course of processing a search
     * request.
     */
    lookthroughLimit?: pulumi.Input<number>;
    /**
     * Name of this config object.
     */
    name?: pulumi.Input<string>;
    /**
     * Optional additive schemas that are enforced on extension attributes in a SCIM resource representation for this Mapping
     * SCIM Resource Type.
     */
    optionalSchemaExtensions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Required additive schemas that are enforced on extension attributes in a SCIM resource representation for this Mapping
     * SCIM Resource Type.
     */
    requiredSchemaExtensions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Options to alter the way schema checking is performed during create or modify requests.
     */
    schemaCheckingOptions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the LDAP structural object class that should be exposed by this SCIM Resource Type.
     */
    structuralLdapObjectclass?: pulumi.Input<string>;
}
