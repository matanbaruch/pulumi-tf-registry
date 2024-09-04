// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class OauthAuthenticationPolicyContractMapping extends pulumi.CustomResource {
    /**
     * Get an existing OauthAuthenticationPolicyContractMapping resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OauthAuthenticationPolicyContractMappingState, opts?: pulumi.CustomResourceOptions): OauthAuthenticationPolicyContractMapping {
        return new OauthAuthenticationPolicyContractMapping(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pingfederate:index/oauthAuthenticationPolicyContractMapping:OauthAuthenticationPolicyContractMapping';

    /**
     * Returns true if the given object is an instance of OauthAuthenticationPolicyContractMapping.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OauthAuthenticationPolicyContractMapping {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OauthAuthenticationPolicyContractMapping.__pulumiType;
    }

    /**
     * Defines how an attribute in an attribute contract should be populated. Map values `USER_NAME` and `USER_KEY` are
     * required. If extended attributes are configured on the persistent grant contract (for example, using the
     * `pingfederate.OauthAuthServerSettings` resource), these must also be configured as map keys.
     */
    public readonly attributeContractFulfillment!: pulumi.Output<{[key: string]: outputs.OauthAuthenticationPolicyContractMappingAttributeContractFulfillment}>;
    /**
     * A list of configured data stores to look up attributes from.
     */
    public readonly attributeSources!: pulumi.Output<outputs.OauthAuthenticationPolicyContractMappingAttributeSource[]>;
    /**
     * Reference to the associated authentication policy contract. The reference cannot be changed after the mapping has been
     * created.
     */
    public readonly authenticationPolicyContractRef!: pulumi.Output<outputs.OauthAuthenticationPolicyContractMappingAuthenticationPolicyContractRef>;
    /**
     * The issuance criteria that this transaction must meet before the corresponding attribute contract is fulfilled.
     */
    public readonly issuanceCriteria!: pulumi.Output<outputs.OauthAuthenticationPolicyContractMappingIssuanceCriteria>;
    /**
     * The ID of the authentication policy contract to persistent grant mapping.
     */
    public /*out*/ readonly mappingId!: pulumi.Output<string>;

    /**
     * Create a OauthAuthenticationPolicyContractMapping resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OauthAuthenticationPolicyContractMappingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: OauthAuthenticationPolicyContractMappingArgs | OauthAuthenticationPolicyContractMappingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as OauthAuthenticationPolicyContractMappingState | undefined;
            resourceInputs["attributeContractFulfillment"] = state ? state.attributeContractFulfillment : undefined;
            resourceInputs["attributeSources"] = state ? state.attributeSources : undefined;
            resourceInputs["authenticationPolicyContractRef"] = state ? state.authenticationPolicyContractRef : undefined;
            resourceInputs["issuanceCriteria"] = state ? state.issuanceCriteria : undefined;
            resourceInputs["mappingId"] = state ? state.mappingId : undefined;
        } else {
            const args = argsOrState as OauthAuthenticationPolicyContractMappingArgs | undefined;
            if ((!args || args.attributeContractFulfillment === undefined) && !opts.urn) {
                throw new Error("Missing required property 'attributeContractFulfillment'");
            }
            if ((!args || args.authenticationPolicyContractRef === undefined) && !opts.urn) {
                throw new Error("Missing required property 'authenticationPolicyContractRef'");
            }
            resourceInputs["attributeContractFulfillment"] = args ? args.attributeContractFulfillment : undefined;
            resourceInputs["attributeSources"] = args ? args.attributeSources : undefined;
            resourceInputs["authenticationPolicyContractRef"] = args ? args.authenticationPolicyContractRef : undefined;
            resourceInputs["issuanceCriteria"] = args ? args.issuanceCriteria : undefined;
            resourceInputs["mappingId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(OauthAuthenticationPolicyContractMapping.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering OauthAuthenticationPolicyContractMapping resources.
 */
export interface OauthAuthenticationPolicyContractMappingState {
    /**
     * Defines how an attribute in an attribute contract should be populated. Map values `USER_NAME` and `USER_KEY` are
     * required. If extended attributes are configured on the persistent grant contract (for example, using the
     * `pingfederate.OauthAuthServerSettings` resource), these must also be configured as map keys.
     */
    attributeContractFulfillment?: pulumi.Input<{[key: string]: pulumi.Input<inputs.OauthAuthenticationPolicyContractMappingAttributeContractFulfillment>}>;
    /**
     * A list of configured data stores to look up attributes from.
     */
    attributeSources?: pulumi.Input<pulumi.Input<inputs.OauthAuthenticationPolicyContractMappingAttributeSource>[]>;
    /**
     * Reference to the associated authentication policy contract. The reference cannot be changed after the mapping has been
     * created.
     */
    authenticationPolicyContractRef?: pulumi.Input<inputs.OauthAuthenticationPolicyContractMappingAuthenticationPolicyContractRef>;
    /**
     * The issuance criteria that this transaction must meet before the corresponding attribute contract is fulfilled.
     */
    issuanceCriteria?: pulumi.Input<inputs.OauthAuthenticationPolicyContractMappingIssuanceCriteria>;
    /**
     * The ID of the authentication policy contract to persistent grant mapping.
     */
    mappingId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a OauthAuthenticationPolicyContractMapping resource.
 */
export interface OauthAuthenticationPolicyContractMappingArgs {
    /**
     * Defines how an attribute in an attribute contract should be populated. Map values `USER_NAME` and `USER_KEY` are
     * required. If extended attributes are configured on the persistent grant contract (for example, using the
     * `pingfederate.OauthAuthServerSettings` resource), these must also be configured as map keys.
     */
    attributeContractFulfillment: pulumi.Input<{[key: string]: pulumi.Input<inputs.OauthAuthenticationPolicyContractMappingAttributeContractFulfillment>}>;
    /**
     * A list of configured data stores to look up attributes from.
     */
    attributeSources?: pulumi.Input<pulumi.Input<inputs.OauthAuthenticationPolicyContractMappingAttributeSource>[]>;
    /**
     * Reference to the associated authentication policy contract. The reference cannot be changed after the mapping has been
     * created.
     */
    authenticationPolicyContractRef: pulumi.Input<inputs.OauthAuthenticationPolicyContractMappingAuthenticationPolicyContractRef>;
    /**
     * The issuance criteria that this transaction must meet before the corresponding attribute contract is fulfilled.
     */
    issuanceCriteria?: pulumi.Input<inputs.OauthAuthenticationPolicyContractMappingIssuanceCriteria>;
}
