// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class OauthAccessTokenMappings extends pulumi.CustomResource {
    /**
     * Get an existing OauthAccessTokenMappings resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OauthAccessTokenMappingsState, opts?: pulumi.CustomResourceOptions): OauthAccessTokenMappings {
        return new OauthAccessTokenMappings(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pingfederate:index/oauthAccessTokenMappings:OauthAccessTokenMappings';

    /**
     * Returns true if the given object is an instance of OauthAccessTokenMappings.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OauthAccessTokenMappings {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OauthAccessTokenMappings.__pulumiType;
    }

    /**
     * Reference to the access token manager this mapping is associated with. This property cannot be changed after the mapping
     * is created.
     */
    public readonly accessTokenManagerRef!: pulumi.Output<outputs.OauthAccessTokenMappingsAccessTokenManagerRef>;
    /**
     * A list of mappings from attribute names to their fulfillment values.
     */
    public readonly attributeContractFulfillments!: pulumi.Output<outputs.OauthAccessTokenMappingsAttributeContractFulfillment[]>;
    /**
     * The context of the Access Token Mapping. This property cannot be changed after the mapping is created.
     */
    public readonly context!: pulumi.Output<outputs.OauthAccessTokenMappingsContext>;
    /**
     * A list of configured custom data stores to look up attributes from.
     */
    public readonly customAttributeSources!: pulumi.Output<outputs.OauthAccessTokenMappingsCustomAttributeSource[] | undefined>;
    /**
     * The issuance criteria that this transaction must meet before the corresponding attribute contract is fulfilled.
     */
    public readonly issuanceCriteria!: pulumi.Output<outputs.OauthAccessTokenMappingsIssuanceCriteria | undefined>;
    /**
     * A list of configured jdbc data stores to look up attributes from.
     */
    public readonly jdbcAttributeSources!: pulumi.Output<outputs.OauthAccessTokenMappingsJdbcAttributeSource[] | undefined>;
    /**
     * A list of configured ldap data stores to look up attributes from.
     */
    public readonly ldapAttributeSources!: pulumi.Output<outputs.OauthAccessTokenMappingsLdapAttributeSource[] | undefined>;

    /**
     * Create a OauthAccessTokenMappings resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OauthAccessTokenMappingsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: OauthAccessTokenMappingsArgs | OauthAccessTokenMappingsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as OauthAccessTokenMappingsState | undefined;
            resourceInputs["accessTokenManagerRef"] = state ? state.accessTokenManagerRef : undefined;
            resourceInputs["attributeContractFulfillments"] = state ? state.attributeContractFulfillments : undefined;
            resourceInputs["context"] = state ? state.context : undefined;
            resourceInputs["customAttributeSources"] = state ? state.customAttributeSources : undefined;
            resourceInputs["issuanceCriteria"] = state ? state.issuanceCriteria : undefined;
            resourceInputs["jdbcAttributeSources"] = state ? state.jdbcAttributeSources : undefined;
            resourceInputs["ldapAttributeSources"] = state ? state.ldapAttributeSources : undefined;
        } else {
            const args = argsOrState as OauthAccessTokenMappingsArgs | undefined;
            if ((!args || args.accessTokenManagerRef === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accessTokenManagerRef'");
            }
            if ((!args || args.attributeContractFulfillments === undefined) && !opts.urn) {
                throw new Error("Missing required property 'attributeContractFulfillments'");
            }
            if ((!args || args.context === undefined) && !opts.urn) {
                throw new Error("Missing required property 'context'");
            }
            resourceInputs["accessTokenManagerRef"] = args ? args.accessTokenManagerRef : undefined;
            resourceInputs["attributeContractFulfillments"] = args ? args.attributeContractFulfillments : undefined;
            resourceInputs["context"] = args ? args.context : undefined;
            resourceInputs["customAttributeSources"] = args ? args.customAttributeSources : undefined;
            resourceInputs["issuanceCriteria"] = args ? args.issuanceCriteria : undefined;
            resourceInputs["jdbcAttributeSources"] = args ? args.jdbcAttributeSources : undefined;
            resourceInputs["ldapAttributeSources"] = args ? args.ldapAttributeSources : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(OauthAccessTokenMappings.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering OauthAccessTokenMappings resources.
 */
export interface OauthAccessTokenMappingsState {
    /**
     * Reference to the access token manager this mapping is associated with. This property cannot be changed after the mapping
     * is created.
     */
    accessTokenManagerRef?: pulumi.Input<inputs.OauthAccessTokenMappingsAccessTokenManagerRef>;
    /**
     * A list of mappings from attribute names to their fulfillment values.
     */
    attributeContractFulfillments?: pulumi.Input<pulumi.Input<inputs.OauthAccessTokenMappingsAttributeContractFulfillment>[]>;
    /**
     * The context of the Access Token Mapping. This property cannot be changed after the mapping is created.
     */
    context?: pulumi.Input<inputs.OauthAccessTokenMappingsContext>;
    /**
     * A list of configured custom data stores to look up attributes from.
     */
    customAttributeSources?: pulumi.Input<pulumi.Input<inputs.OauthAccessTokenMappingsCustomAttributeSource>[]>;
    /**
     * The issuance criteria that this transaction must meet before the corresponding attribute contract is fulfilled.
     */
    issuanceCriteria?: pulumi.Input<inputs.OauthAccessTokenMappingsIssuanceCriteria>;
    /**
     * A list of configured jdbc data stores to look up attributes from.
     */
    jdbcAttributeSources?: pulumi.Input<pulumi.Input<inputs.OauthAccessTokenMappingsJdbcAttributeSource>[]>;
    /**
     * A list of configured ldap data stores to look up attributes from.
     */
    ldapAttributeSources?: pulumi.Input<pulumi.Input<inputs.OauthAccessTokenMappingsLdapAttributeSource>[]>;
}

/**
 * The set of arguments for constructing a OauthAccessTokenMappings resource.
 */
export interface OauthAccessTokenMappingsArgs {
    /**
     * Reference to the access token manager this mapping is associated with. This property cannot be changed after the mapping
     * is created.
     */
    accessTokenManagerRef: pulumi.Input<inputs.OauthAccessTokenMappingsAccessTokenManagerRef>;
    /**
     * A list of mappings from attribute names to their fulfillment values.
     */
    attributeContractFulfillments: pulumi.Input<pulumi.Input<inputs.OauthAccessTokenMappingsAttributeContractFulfillment>[]>;
    /**
     * The context of the Access Token Mapping. This property cannot be changed after the mapping is created.
     */
    context: pulumi.Input<inputs.OauthAccessTokenMappingsContext>;
    /**
     * A list of configured custom data stores to look up attributes from.
     */
    customAttributeSources?: pulumi.Input<pulumi.Input<inputs.OauthAccessTokenMappingsCustomAttributeSource>[]>;
    /**
     * The issuance criteria that this transaction must meet before the corresponding attribute contract is fulfilled.
     */
    issuanceCriteria?: pulumi.Input<inputs.OauthAccessTokenMappingsIssuanceCriteria>;
    /**
     * A list of configured jdbc data stores to look up attributes from.
     */
    jdbcAttributeSources?: pulumi.Input<pulumi.Input<inputs.OauthAccessTokenMappingsJdbcAttributeSource>[]>;
    /**
     * A list of configured ldap data stores to look up attributes from.
     */
    ldapAttributeSources?: pulumi.Input<pulumi.Input<inputs.OauthAccessTokenMappingsLdapAttributeSource>[]>;
}
