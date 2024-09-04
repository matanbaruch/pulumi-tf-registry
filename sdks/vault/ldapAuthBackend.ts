// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class LdapAuthBackend extends pulumi.CustomResource {
    /**
     * Get an existing LdapAuthBackend resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LdapAuthBackendState, opts?: pulumi.CustomResourceOptions): LdapAuthBackend {
        return new LdapAuthBackend(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'vault:index/ldapAuthBackend:LdapAuthBackend';

    /**
     * Returns true if the given object is an instance of LdapAuthBackend.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LdapAuthBackend {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LdapAuthBackend.__pulumiType;
    }

    /**
     * The accessor of the LDAP auth backend
     */
    public /*out*/ readonly accessor!: pulumi.Output<string>;
    public readonly binddn!: pulumi.Output<string>;
    public readonly bindpass!: pulumi.Output<string>;
    public readonly caseSensitiveNames!: pulumi.Output<boolean>;
    public readonly certificate!: pulumi.Output<string>;
    public readonly clientTlsCert!: pulumi.Output<string>;
    public readonly clientTlsKey!: pulumi.Output<string>;
    public readonly denyNullBind!: pulumi.Output<boolean>;
    public readonly description!: pulumi.Output<string>;
    /**
     * If set, opts out of mount migration on path updates.
     */
    public readonly disableRemount!: pulumi.Output<boolean | undefined>;
    public readonly discoverdn!: pulumi.Output<boolean>;
    public readonly groupattr!: pulumi.Output<string>;
    public readonly groupdn!: pulumi.Output<string>;
    public readonly groupfilter!: pulumi.Output<string>;
    public readonly insecureTls!: pulumi.Output<boolean>;
    /**
     * Specifies if the auth method is local only
     */
    public readonly local!: pulumi.Output<boolean | undefined>;
    public readonly maxPageSize!: pulumi.Output<number | undefined>;
    /**
     * Target namespace. (requires Enterprise)
     */
    public readonly namespace!: pulumi.Output<string | undefined>;
    public readonly path!: pulumi.Output<string | undefined>;
    public readonly starttls!: pulumi.Output<boolean>;
    public readonly tlsMaxVersion!: pulumi.Output<string>;
    public readonly tlsMinVersion!: pulumi.Output<string>;
    /**
     * Specifies the blocks of IP addresses which are allowed to use the generated token
     */
    public readonly tokenBoundCidrs!: pulumi.Output<string[] | undefined>;
    /**
     * Generated Token's Explicit Maximum TTL in seconds
     */
    public readonly tokenExplicitMaxTtl!: pulumi.Output<number | undefined>;
    /**
     * The maximum lifetime of the generated token
     */
    public readonly tokenMaxTtl!: pulumi.Output<number | undefined>;
    /**
     * If true, the 'default' policy will not automatically be added to generated tokens
     */
    public readonly tokenNoDefaultPolicy!: pulumi.Output<boolean | undefined>;
    /**
     * The maximum number of times a token may be used, a value of zero means unlimited
     */
    public readonly tokenNumUses!: pulumi.Output<number | undefined>;
    /**
     * Generated Token's Period
     */
    public readonly tokenPeriod!: pulumi.Output<number | undefined>;
    /**
     * Generated Token's Policies
     */
    public readonly tokenPolicies!: pulumi.Output<string[] | undefined>;
    /**
     * The initial ttl of the token to generate in seconds
     */
    public readonly tokenTtl!: pulumi.Output<number | undefined>;
    /**
     * The type of token to generate, service or batch
     */
    public readonly tokenType!: pulumi.Output<string | undefined>;
    public readonly upndomain!: pulumi.Output<string>;
    public readonly url!: pulumi.Output<string>;
    public readonly useTokenGroups!: pulumi.Output<boolean>;
    public readonly userattr!: pulumi.Output<string>;
    public readonly userdn!: pulumi.Output<string>;
    public readonly userfilter!: pulumi.Output<string>;
    /**
     * Force the auth method to use the username passed by the user as the alias name.
     */
    public readonly usernameAsAlias!: pulumi.Output<boolean>;

    /**
     * Create a LdapAuthBackend resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LdapAuthBackendArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LdapAuthBackendArgs | LdapAuthBackendState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LdapAuthBackendState | undefined;
            resourceInputs["accessor"] = state ? state.accessor : undefined;
            resourceInputs["binddn"] = state ? state.binddn : undefined;
            resourceInputs["bindpass"] = state ? state.bindpass : undefined;
            resourceInputs["caseSensitiveNames"] = state ? state.caseSensitiveNames : undefined;
            resourceInputs["certificate"] = state ? state.certificate : undefined;
            resourceInputs["clientTlsCert"] = state ? state.clientTlsCert : undefined;
            resourceInputs["clientTlsKey"] = state ? state.clientTlsKey : undefined;
            resourceInputs["denyNullBind"] = state ? state.denyNullBind : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["disableRemount"] = state ? state.disableRemount : undefined;
            resourceInputs["discoverdn"] = state ? state.discoverdn : undefined;
            resourceInputs["groupattr"] = state ? state.groupattr : undefined;
            resourceInputs["groupdn"] = state ? state.groupdn : undefined;
            resourceInputs["groupfilter"] = state ? state.groupfilter : undefined;
            resourceInputs["insecureTls"] = state ? state.insecureTls : undefined;
            resourceInputs["local"] = state ? state.local : undefined;
            resourceInputs["maxPageSize"] = state ? state.maxPageSize : undefined;
            resourceInputs["namespace"] = state ? state.namespace : undefined;
            resourceInputs["path"] = state ? state.path : undefined;
            resourceInputs["starttls"] = state ? state.starttls : undefined;
            resourceInputs["tlsMaxVersion"] = state ? state.tlsMaxVersion : undefined;
            resourceInputs["tlsMinVersion"] = state ? state.tlsMinVersion : undefined;
            resourceInputs["tokenBoundCidrs"] = state ? state.tokenBoundCidrs : undefined;
            resourceInputs["tokenExplicitMaxTtl"] = state ? state.tokenExplicitMaxTtl : undefined;
            resourceInputs["tokenMaxTtl"] = state ? state.tokenMaxTtl : undefined;
            resourceInputs["tokenNoDefaultPolicy"] = state ? state.tokenNoDefaultPolicy : undefined;
            resourceInputs["tokenNumUses"] = state ? state.tokenNumUses : undefined;
            resourceInputs["tokenPeriod"] = state ? state.tokenPeriod : undefined;
            resourceInputs["tokenPolicies"] = state ? state.tokenPolicies : undefined;
            resourceInputs["tokenTtl"] = state ? state.tokenTtl : undefined;
            resourceInputs["tokenType"] = state ? state.tokenType : undefined;
            resourceInputs["upndomain"] = state ? state.upndomain : undefined;
            resourceInputs["url"] = state ? state.url : undefined;
            resourceInputs["useTokenGroups"] = state ? state.useTokenGroups : undefined;
            resourceInputs["userattr"] = state ? state.userattr : undefined;
            resourceInputs["userdn"] = state ? state.userdn : undefined;
            resourceInputs["userfilter"] = state ? state.userfilter : undefined;
            resourceInputs["usernameAsAlias"] = state ? state.usernameAsAlias : undefined;
        } else {
            const args = argsOrState as LdapAuthBackendArgs | undefined;
            if ((!args || args.url === undefined) && !opts.urn) {
                throw new Error("Missing required property 'url'");
            }
            resourceInputs["binddn"] = args ? args.binddn : undefined;
            resourceInputs["bindpass"] = args?.bindpass ? pulumi.secret(args.bindpass) : undefined;
            resourceInputs["caseSensitiveNames"] = args ? args.caseSensitiveNames : undefined;
            resourceInputs["certificate"] = args ? args.certificate : undefined;
            resourceInputs["clientTlsCert"] = args ? args.clientTlsCert : undefined;
            resourceInputs["clientTlsKey"] = args?.clientTlsKey ? pulumi.secret(args.clientTlsKey) : undefined;
            resourceInputs["denyNullBind"] = args ? args.denyNullBind : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["disableRemount"] = args ? args.disableRemount : undefined;
            resourceInputs["discoverdn"] = args ? args.discoverdn : undefined;
            resourceInputs["groupattr"] = args ? args.groupattr : undefined;
            resourceInputs["groupdn"] = args ? args.groupdn : undefined;
            resourceInputs["groupfilter"] = args ? args.groupfilter : undefined;
            resourceInputs["insecureTls"] = args ? args.insecureTls : undefined;
            resourceInputs["local"] = args ? args.local : undefined;
            resourceInputs["maxPageSize"] = args ? args.maxPageSize : undefined;
            resourceInputs["namespace"] = args ? args.namespace : undefined;
            resourceInputs["path"] = args ? args.path : undefined;
            resourceInputs["starttls"] = args ? args.starttls : undefined;
            resourceInputs["tlsMaxVersion"] = args ? args.tlsMaxVersion : undefined;
            resourceInputs["tlsMinVersion"] = args ? args.tlsMinVersion : undefined;
            resourceInputs["tokenBoundCidrs"] = args ? args.tokenBoundCidrs : undefined;
            resourceInputs["tokenExplicitMaxTtl"] = args ? args.tokenExplicitMaxTtl : undefined;
            resourceInputs["tokenMaxTtl"] = args ? args.tokenMaxTtl : undefined;
            resourceInputs["tokenNoDefaultPolicy"] = args ? args.tokenNoDefaultPolicy : undefined;
            resourceInputs["tokenNumUses"] = args ? args.tokenNumUses : undefined;
            resourceInputs["tokenPeriod"] = args ? args.tokenPeriod : undefined;
            resourceInputs["tokenPolicies"] = args ? args.tokenPolicies : undefined;
            resourceInputs["tokenTtl"] = args ? args.tokenTtl : undefined;
            resourceInputs["tokenType"] = args ? args.tokenType : undefined;
            resourceInputs["upndomain"] = args ? args.upndomain : undefined;
            resourceInputs["url"] = args ? args.url : undefined;
            resourceInputs["useTokenGroups"] = args ? args.useTokenGroups : undefined;
            resourceInputs["userattr"] = args ? args.userattr : undefined;
            resourceInputs["userdn"] = args ? args.userdn : undefined;
            resourceInputs["userfilter"] = args ? args.userfilter : undefined;
            resourceInputs["usernameAsAlias"] = args ? args.usernameAsAlias : undefined;
            resourceInputs["accessor"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["bindpass", "clientTlsKey"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(LdapAuthBackend.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LdapAuthBackend resources.
 */
export interface LdapAuthBackendState {
    /**
     * The accessor of the LDAP auth backend
     */
    accessor?: pulumi.Input<string>;
    binddn?: pulumi.Input<string>;
    bindpass?: pulumi.Input<string>;
    caseSensitiveNames?: pulumi.Input<boolean>;
    certificate?: pulumi.Input<string>;
    clientTlsCert?: pulumi.Input<string>;
    clientTlsKey?: pulumi.Input<string>;
    denyNullBind?: pulumi.Input<boolean>;
    description?: pulumi.Input<string>;
    /**
     * If set, opts out of mount migration on path updates.
     */
    disableRemount?: pulumi.Input<boolean>;
    discoverdn?: pulumi.Input<boolean>;
    groupattr?: pulumi.Input<string>;
    groupdn?: pulumi.Input<string>;
    groupfilter?: pulumi.Input<string>;
    insecureTls?: pulumi.Input<boolean>;
    /**
     * Specifies if the auth method is local only
     */
    local?: pulumi.Input<boolean>;
    maxPageSize?: pulumi.Input<number>;
    /**
     * Target namespace. (requires Enterprise)
     */
    namespace?: pulumi.Input<string>;
    path?: pulumi.Input<string>;
    starttls?: pulumi.Input<boolean>;
    tlsMaxVersion?: pulumi.Input<string>;
    tlsMinVersion?: pulumi.Input<string>;
    /**
     * Specifies the blocks of IP addresses which are allowed to use the generated token
     */
    tokenBoundCidrs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Generated Token's Explicit Maximum TTL in seconds
     */
    tokenExplicitMaxTtl?: pulumi.Input<number>;
    /**
     * The maximum lifetime of the generated token
     */
    tokenMaxTtl?: pulumi.Input<number>;
    /**
     * If true, the 'default' policy will not automatically be added to generated tokens
     */
    tokenNoDefaultPolicy?: pulumi.Input<boolean>;
    /**
     * The maximum number of times a token may be used, a value of zero means unlimited
     */
    tokenNumUses?: pulumi.Input<number>;
    /**
     * Generated Token's Period
     */
    tokenPeriod?: pulumi.Input<number>;
    /**
     * Generated Token's Policies
     */
    tokenPolicies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The initial ttl of the token to generate in seconds
     */
    tokenTtl?: pulumi.Input<number>;
    /**
     * The type of token to generate, service or batch
     */
    tokenType?: pulumi.Input<string>;
    upndomain?: pulumi.Input<string>;
    url?: pulumi.Input<string>;
    useTokenGroups?: pulumi.Input<boolean>;
    userattr?: pulumi.Input<string>;
    userdn?: pulumi.Input<string>;
    userfilter?: pulumi.Input<string>;
    /**
     * Force the auth method to use the username passed by the user as the alias name.
     */
    usernameAsAlias?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a LdapAuthBackend resource.
 */
export interface LdapAuthBackendArgs {
    binddn?: pulumi.Input<string>;
    bindpass?: pulumi.Input<string>;
    caseSensitiveNames?: pulumi.Input<boolean>;
    certificate?: pulumi.Input<string>;
    clientTlsCert?: pulumi.Input<string>;
    clientTlsKey?: pulumi.Input<string>;
    denyNullBind?: pulumi.Input<boolean>;
    description?: pulumi.Input<string>;
    /**
     * If set, opts out of mount migration on path updates.
     */
    disableRemount?: pulumi.Input<boolean>;
    discoverdn?: pulumi.Input<boolean>;
    groupattr?: pulumi.Input<string>;
    groupdn?: pulumi.Input<string>;
    groupfilter?: pulumi.Input<string>;
    insecureTls?: pulumi.Input<boolean>;
    /**
     * Specifies if the auth method is local only
     */
    local?: pulumi.Input<boolean>;
    maxPageSize?: pulumi.Input<number>;
    /**
     * Target namespace. (requires Enterprise)
     */
    namespace?: pulumi.Input<string>;
    path?: pulumi.Input<string>;
    starttls?: pulumi.Input<boolean>;
    tlsMaxVersion?: pulumi.Input<string>;
    tlsMinVersion?: pulumi.Input<string>;
    /**
     * Specifies the blocks of IP addresses which are allowed to use the generated token
     */
    tokenBoundCidrs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Generated Token's Explicit Maximum TTL in seconds
     */
    tokenExplicitMaxTtl?: pulumi.Input<number>;
    /**
     * The maximum lifetime of the generated token
     */
    tokenMaxTtl?: pulumi.Input<number>;
    /**
     * If true, the 'default' policy will not automatically be added to generated tokens
     */
    tokenNoDefaultPolicy?: pulumi.Input<boolean>;
    /**
     * The maximum number of times a token may be used, a value of zero means unlimited
     */
    tokenNumUses?: pulumi.Input<number>;
    /**
     * Generated Token's Period
     */
    tokenPeriod?: pulumi.Input<number>;
    /**
     * Generated Token's Policies
     */
    tokenPolicies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The initial ttl of the token to generate in seconds
     */
    tokenTtl?: pulumi.Input<number>;
    /**
     * The type of token to generate, service or batch
     */
    tokenType?: pulumi.Input<string>;
    upndomain?: pulumi.Input<string>;
    url: pulumi.Input<string>;
    useTokenGroups?: pulumi.Input<boolean>;
    userattr?: pulumi.Input<string>;
    userdn?: pulumi.Input<string>;
    userfilter?: pulumi.Input<string>;
    /**
     * Force the auth method to use the username passed by the user as the alias name.
     */
    usernameAsAlias?: pulumi.Input<boolean>;
}
