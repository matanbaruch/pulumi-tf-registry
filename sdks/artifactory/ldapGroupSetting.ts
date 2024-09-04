// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class LdapGroupSetting extends pulumi.CustomResource {
    /**
     * Get an existing LdapGroupSetting resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LdapGroupSettingState, opts?: pulumi.CustomResourceOptions): LdapGroupSetting {
        return new LdapGroupSetting(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'artifactory:index/ldapGroupSetting:LdapGroupSetting';

    /**
     * Returns true if the given object is an instance of LdapGroupSetting.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LdapGroupSetting {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LdapGroupSetting.__pulumiType;
    }

    /**
     * An attribute on the group entry which denoting the group description. Used when importing groups.
     */
    public readonly descriptionAttribute!: pulumi.Output<string>;
    /**
     * The LDAP filter used to search for group entries. Used for importing groups.
     */
    public readonly filter!: pulumi.Output<string>;
    /**
     * A search base for group entry DNs, relative to the DN on the LDAP server’s URL (and not relative to the LDAP
     * Setting’s “Search Base”). Used when importing groups.
     */
    public readonly groupBaseDn!: pulumi.Output<string | undefined>;
    /**
     * A multi-value attribute on the group entry containing user DNs or IDs of the group members (e.g., uniqueMember,member).
     */
    public readonly groupMemberAttribute!: pulumi.Output<string>;
    /**
     * Attribute on the group entry denoting the group name. Used when importing groups.
     */
    public readonly groupNameAttribute!: pulumi.Output<string>;
    /**
     * The LDAP setting key you want to use for group retrieval. The value for this field corresponds to 'enabledLdap' field of
     * the ldap group setting XML block of system configuration.
     */
    public readonly ldapSettingKey!: pulumi.Output<string>;
    /**
     * Ldap group setting name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The JFrog Platform Deployment (JPD) supports three ways of mapping groups to LDAP schemas: Static: Group objects are
     * aware of their members, however, the users are not aware of the groups they belong to. Each group object such as
     * groupOfNames or groupOfUniqueNames holds its respective member attributes, typically member or uniqueMember, which is a
     * user DN. Dynamic: User objects are aware of what groups they belong to, but the group objects are not aware of their
     * members. Each user object contains a custom attribute, such as group, that holds the group DNs or group names of which
     * the user is a member. Hierarchy: The user's DN is indicative of the groups the user belongs to by using group names as
     * part of user DN hierarchy. Each user DN contains a list of ou's or custom attributes that make up the group association.
     * For example, uid=user1,ou=developers,ou=uk,dc=jfrog,dc=org indicates that user1 belongs to two groups: uk and
     * developers.
     */
    public readonly strategy!: pulumi.Output<string>;
    /**
     * When set, enables deep search through the sub-tree of the LDAP URL + Search Base. True by default.
     */
    public readonly subTree!: pulumi.Output<boolean | undefined>;

    /**
     * Create a LdapGroupSetting resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LdapGroupSettingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LdapGroupSettingArgs | LdapGroupSettingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LdapGroupSettingState | undefined;
            resourceInputs["descriptionAttribute"] = state ? state.descriptionAttribute : undefined;
            resourceInputs["filter"] = state ? state.filter : undefined;
            resourceInputs["groupBaseDn"] = state ? state.groupBaseDn : undefined;
            resourceInputs["groupMemberAttribute"] = state ? state.groupMemberAttribute : undefined;
            resourceInputs["groupNameAttribute"] = state ? state.groupNameAttribute : undefined;
            resourceInputs["ldapSettingKey"] = state ? state.ldapSettingKey : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["strategy"] = state ? state.strategy : undefined;
            resourceInputs["subTree"] = state ? state.subTree : undefined;
        } else {
            const args = argsOrState as LdapGroupSettingArgs | undefined;
            if ((!args || args.descriptionAttribute === undefined) && !opts.urn) {
                throw new Error("Missing required property 'descriptionAttribute'");
            }
            if ((!args || args.filter === undefined) && !opts.urn) {
                throw new Error("Missing required property 'filter'");
            }
            if ((!args || args.groupMemberAttribute === undefined) && !opts.urn) {
                throw new Error("Missing required property 'groupMemberAttribute'");
            }
            if ((!args || args.groupNameAttribute === undefined) && !opts.urn) {
                throw new Error("Missing required property 'groupNameAttribute'");
            }
            if ((!args || args.ldapSettingKey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ldapSettingKey'");
            }
            if ((!args || args.strategy === undefined) && !opts.urn) {
                throw new Error("Missing required property 'strategy'");
            }
            resourceInputs["descriptionAttribute"] = args ? args.descriptionAttribute : undefined;
            resourceInputs["filter"] = args ? args.filter : undefined;
            resourceInputs["groupBaseDn"] = args ? args.groupBaseDn : undefined;
            resourceInputs["groupMemberAttribute"] = args ? args.groupMemberAttribute : undefined;
            resourceInputs["groupNameAttribute"] = args ? args.groupNameAttribute : undefined;
            resourceInputs["ldapSettingKey"] = args ? args.ldapSettingKey : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["strategy"] = args ? args.strategy : undefined;
            resourceInputs["subTree"] = args ? args.subTree : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LdapGroupSetting.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LdapGroupSetting resources.
 */
export interface LdapGroupSettingState {
    /**
     * An attribute on the group entry which denoting the group description. Used when importing groups.
     */
    descriptionAttribute?: pulumi.Input<string>;
    /**
     * The LDAP filter used to search for group entries. Used for importing groups.
     */
    filter?: pulumi.Input<string>;
    /**
     * A search base for group entry DNs, relative to the DN on the LDAP server’s URL (and not relative to the LDAP
     * Setting’s “Search Base”). Used when importing groups.
     */
    groupBaseDn?: pulumi.Input<string>;
    /**
     * A multi-value attribute on the group entry containing user DNs or IDs of the group members (e.g., uniqueMember,member).
     */
    groupMemberAttribute?: pulumi.Input<string>;
    /**
     * Attribute on the group entry denoting the group name. Used when importing groups.
     */
    groupNameAttribute?: pulumi.Input<string>;
    /**
     * The LDAP setting key you want to use for group retrieval. The value for this field corresponds to 'enabledLdap' field of
     * the ldap group setting XML block of system configuration.
     */
    ldapSettingKey?: pulumi.Input<string>;
    /**
     * Ldap group setting name.
     */
    name?: pulumi.Input<string>;
    /**
     * The JFrog Platform Deployment (JPD) supports three ways of mapping groups to LDAP schemas: Static: Group objects are
     * aware of their members, however, the users are not aware of the groups they belong to. Each group object such as
     * groupOfNames or groupOfUniqueNames holds its respective member attributes, typically member or uniqueMember, which is a
     * user DN. Dynamic: User objects are aware of what groups they belong to, but the group objects are not aware of their
     * members. Each user object contains a custom attribute, such as group, that holds the group DNs or group names of which
     * the user is a member. Hierarchy: The user's DN is indicative of the groups the user belongs to by using group names as
     * part of user DN hierarchy. Each user DN contains a list of ou's or custom attributes that make up the group association.
     * For example, uid=user1,ou=developers,ou=uk,dc=jfrog,dc=org indicates that user1 belongs to two groups: uk and
     * developers.
     */
    strategy?: pulumi.Input<string>;
    /**
     * When set, enables deep search through the sub-tree of the LDAP URL + Search Base. True by default.
     */
    subTree?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a LdapGroupSetting resource.
 */
export interface LdapGroupSettingArgs {
    /**
     * An attribute on the group entry which denoting the group description. Used when importing groups.
     */
    descriptionAttribute: pulumi.Input<string>;
    /**
     * The LDAP filter used to search for group entries. Used for importing groups.
     */
    filter: pulumi.Input<string>;
    /**
     * A search base for group entry DNs, relative to the DN on the LDAP server’s URL (and not relative to the LDAP
     * Setting’s “Search Base”). Used when importing groups.
     */
    groupBaseDn?: pulumi.Input<string>;
    /**
     * A multi-value attribute on the group entry containing user DNs or IDs of the group members (e.g., uniqueMember,member).
     */
    groupMemberAttribute: pulumi.Input<string>;
    /**
     * Attribute on the group entry denoting the group name. Used when importing groups.
     */
    groupNameAttribute: pulumi.Input<string>;
    /**
     * The LDAP setting key you want to use for group retrieval. The value for this field corresponds to 'enabledLdap' field of
     * the ldap group setting XML block of system configuration.
     */
    ldapSettingKey: pulumi.Input<string>;
    /**
     * Ldap group setting name.
     */
    name?: pulumi.Input<string>;
    /**
     * The JFrog Platform Deployment (JPD) supports three ways of mapping groups to LDAP schemas: Static: Group objects are
     * aware of their members, however, the users are not aware of the groups they belong to. Each group object such as
     * groupOfNames or groupOfUniqueNames holds its respective member attributes, typically member or uniqueMember, which is a
     * user DN. Dynamic: User objects are aware of what groups they belong to, but the group objects are not aware of their
     * members. Each user object contains a custom attribute, such as group, that holds the group DNs or group names of which
     * the user is a member. Hierarchy: The user's DN is indicative of the groups the user belongs to by using group names as
     * part of user DN hierarchy. Each user DN contains a list of ou's or custom attributes that make up the group association.
     * For example, uid=user1,ou=developers,ou=uk,dc=jfrog,dc=org indicates that user1 belongs to two groups: uk and
     * developers.
     */
    strategy: pulumi.Input<string>;
    /**
     * When set, enables deep search through the sub-tree of the LDAP URL + Search Base. True by default.
     */
    subTree?: pulumi.Input<boolean>;
}
