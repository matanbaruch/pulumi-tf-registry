// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class OauthResourceOwnerCredentialsMappings extends pulumi.CustomResource {
    /**
     * Get an existing OauthResourceOwnerCredentialsMappings resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OauthResourceOwnerCredentialsMappingsState, opts?: pulumi.CustomResourceOptions): OauthResourceOwnerCredentialsMappings {
        return new OauthResourceOwnerCredentialsMappings(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pingfederate:index/oauthResourceOwnerCredentialsMappings:OauthResourceOwnerCredentialsMappings';

    /**
     * Returns true if the given object is an instance of OauthResourceOwnerCredentialsMappings.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OauthResourceOwnerCredentialsMappings {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OauthResourceOwnerCredentialsMappings.__pulumiType;
    }

    /**
     * A list of mappings from attribute names to their fulfillment values.
     */
    public readonly attributeContractFulfillments!: pulumi.Output<outputs.OauthResourceOwnerCredentialsMappingsAttributeContractFulfillment[]>;
    /**
     * A list of custom configured data stores to look up attributes from.
     */
    public readonly customAttributeSources!: pulumi.Output<outputs.OauthResourceOwnerCredentialsMappingsCustomAttributeSource[] | undefined>;
    /**
     * The issuance criteria that this transaction must meet before the corresponding attribute contract is fulfilled.
     */
    public readonly issuanceCriteria!: pulumi.Output<outputs.OauthResourceOwnerCredentialsMappingsIssuanceCriteria | undefined>;
    /**
     * A list of jdbc configured data stores to look up attributes from.
     */
    public readonly jdbcAttributeSources!: pulumi.Output<outputs.OauthResourceOwnerCredentialsMappingsJdbcAttributeSource[] | undefined>;
    /**
     * A list of ldap configured data stores to look up attributes from.
     */
    public readonly ldapAttributeSources!: pulumi.Output<outputs.OauthResourceOwnerCredentialsMappingsLdapAttributeSource[] | undefined>;
    /**
     * Reference to the associated Source Password Validator Instance.
     */
    public readonly passwordValidatorRef!: pulumi.Output<outputs.OauthResourceOwnerCredentialsMappingsPasswordValidatorRef>;

    /**
     * Create a OauthResourceOwnerCredentialsMappings resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OauthResourceOwnerCredentialsMappingsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: OauthResourceOwnerCredentialsMappingsArgs | OauthResourceOwnerCredentialsMappingsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as OauthResourceOwnerCredentialsMappingsState | undefined;
            resourceInputs["attributeContractFulfillments"] = state ? state.attributeContractFulfillments : undefined;
            resourceInputs["customAttributeSources"] = state ? state.customAttributeSources : undefined;
            resourceInputs["issuanceCriteria"] = state ? state.issuanceCriteria : undefined;
            resourceInputs["jdbcAttributeSources"] = state ? state.jdbcAttributeSources : undefined;
            resourceInputs["ldapAttributeSources"] = state ? state.ldapAttributeSources : undefined;
            resourceInputs["passwordValidatorRef"] = state ? state.passwordValidatorRef : undefined;
        } else {
            const args = argsOrState as OauthResourceOwnerCredentialsMappingsArgs | undefined;
            if ((!args || args.attributeContractFulfillments === undefined) && !opts.urn) {
                throw new Error("Missing required property 'attributeContractFulfillments'");
            }
            if ((!args || args.passwordValidatorRef === undefined) && !opts.urn) {
                throw new Error("Missing required property 'passwordValidatorRef'");
            }
            resourceInputs["attributeContractFulfillments"] = args ? args.attributeContractFulfillments : undefined;
            resourceInputs["customAttributeSources"] = args ? args.customAttributeSources : undefined;
            resourceInputs["issuanceCriteria"] = args ? args.issuanceCriteria : undefined;
            resourceInputs["jdbcAttributeSources"] = args ? args.jdbcAttributeSources : undefined;
            resourceInputs["ldapAttributeSources"] = args ? args.ldapAttributeSources : undefined;
            resourceInputs["passwordValidatorRef"] = args ? args.passwordValidatorRef : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(OauthResourceOwnerCredentialsMappings.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering OauthResourceOwnerCredentialsMappings resources.
 */
export interface OauthResourceOwnerCredentialsMappingsState {
    /**
     * A list of mappings from attribute names to their fulfillment values.
     */
    attributeContractFulfillments?: pulumi.Input<pulumi.Input<inputs.OauthResourceOwnerCredentialsMappingsAttributeContractFulfillment>[]>;
    /**
     * A list of custom configured data stores to look up attributes from.
     */
    customAttributeSources?: pulumi.Input<pulumi.Input<inputs.OauthResourceOwnerCredentialsMappingsCustomAttributeSource>[]>;
    /**
     * The issuance criteria that this transaction must meet before the corresponding attribute contract is fulfilled.
     */
    issuanceCriteria?: pulumi.Input<inputs.OauthResourceOwnerCredentialsMappingsIssuanceCriteria>;
    /**
     * A list of jdbc configured data stores to look up attributes from.
     */
    jdbcAttributeSources?: pulumi.Input<pulumi.Input<inputs.OauthResourceOwnerCredentialsMappingsJdbcAttributeSource>[]>;
    /**
     * A list of ldap configured data stores to look up attributes from.
     */
    ldapAttributeSources?: pulumi.Input<pulumi.Input<inputs.OauthResourceOwnerCredentialsMappingsLdapAttributeSource>[]>;
    /**
     * Reference to the associated Source Password Validator Instance.
     */
    passwordValidatorRef?: pulumi.Input<inputs.OauthResourceOwnerCredentialsMappingsPasswordValidatorRef>;
}

/**
 * The set of arguments for constructing a OauthResourceOwnerCredentialsMappings resource.
 */
export interface OauthResourceOwnerCredentialsMappingsArgs {
    /**
     * A list of mappings from attribute names to their fulfillment values.
     */
    attributeContractFulfillments: pulumi.Input<pulumi.Input<inputs.OauthResourceOwnerCredentialsMappingsAttributeContractFulfillment>[]>;
    /**
     * A list of custom configured data stores to look up attributes from.
     */
    customAttributeSources?: pulumi.Input<pulumi.Input<inputs.OauthResourceOwnerCredentialsMappingsCustomAttributeSource>[]>;
    /**
     * The issuance criteria that this transaction must meet before the corresponding attribute contract is fulfilled.
     */
    issuanceCriteria?: pulumi.Input<inputs.OauthResourceOwnerCredentialsMappingsIssuanceCriteria>;
    /**
     * A list of jdbc configured data stores to look up attributes from.
     */
    jdbcAttributeSources?: pulumi.Input<pulumi.Input<inputs.OauthResourceOwnerCredentialsMappingsJdbcAttributeSource>[]>;
    /**
     * A list of ldap configured data stores to look up attributes from.
     */
    ldapAttributeSources?: pulumi.Input<pulumi.Input<inputs.OauthResourceOwnerCredentialsMappingsLdapAttributeSource>[]>;
    /**
     * Reference to the associated Source Password Validator Instance.
     */
    passwordValidatorRef: pulumi.Input<inputs.OauthResourceOwnerCredentialsMappingsPasswordValidatorRef>;
}
