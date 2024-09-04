// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class OauthIdpAdapterMapping extends pulumi.CustomResource {
    /**
     * Get an existing OauthIdpAdapterMapping resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OauthIdpAdapterMappingState, opts?: pulumi.CustomResourceOptions): OauthIdpAdapterMapping {
        return new OauthIdpAdapterMapping(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pingfederate:index/oauthIdpAdapterMapping:OauthIdpAdapterMapping';

    /**
     * Returns true if the given object is an instance of OauthIdpAdapterMapping.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OauthIdpAdapterMapping {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OauthIdpAdapterMapping.__pulumiType;
    }

    /**
     * Defines how an attribute in an attribute contract should be populated. Map values `USER_NAME` and `USER_KEY` are
     * required. If extended attributes are configured on the persistent grant contract (for example, using the
     * `pingfederate.OauthAuthServerSettings` resource), these must also be configured as map keys.
     */
    public readonly attributeContractFulfillment!: pulumi.Output<{[key: string]: outputs.OauthIdpAdapterMappingAttributeContractFulfillment}>;
    /**
     * A list of configured data stores to look up attributes from.
     */
    public readonly attributeSources!: pulumi.Output<outputs.OauthIdpAdapterMappingAttributeSource[]>;
    /**
     * Read only reference to the associated IdP adapter.
     */
    public /*out*/ readonly idpAdapterRef!: pulumi.Output<outputs.OauthIdpAdapterMappingIdpAdapterRef>;
    /**
     * The issuance criteria that this transaction must meet before the corresponding attribute contract is fulfilled.
     */
    public readonly issuanceCriteria!: pulumi.Output<outputs.OauthIdpAdapterMappingIssuanceCriteria>;
    /**
     * The ID of the adapter mapping.
     */
    public readonly mappingId!: pulumi.Output<string>;

    /**
     * Create a OauthIdpAdapterMapping resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OauthIdpAdapterMappingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: OauthIdpAdapterMappingArgs | OauthIdpAdapterMappingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as OauthIdpAdapterMappingState | undefined;
            resourceInputs["attributeContractFulfillment"] = state ? state.attributeContractFulfillment : undefined;
            resourceInputs["attributeSources"] = state ? state.attributeSources : undefined;
            resourceInputs["idpAdapterRef"] = state ? state.idpAdapterRef : undefined;
            resourceInputs["issuanceCriteria"] = state ? state.issuanceCriteria : undefined;
            resourceInputs["mappingId"] = state ? state.mappingId : undefined;
        } else {
            const args = argsOrState as OauthIdpAdapterMappingArgs | undefined;
            if ((!args || args.attributeContractFulfillment === undefined) && !opts.urn) {
                throw new Error("Missing required property 'attributeContractFulfillment'");
            }
            if ((!args || args.mappingId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mappingId'");
            }
            resourceInputs["attributeContractFulfillment"] = args ? args.attributeContractFulfillment : undefined;
            resourceInputs["attributeSources"] = args ? args.attributeSources : undefined;
            resourceInputs["issuanceCriteria"] = args ? args.issuanceCriteria : undefined;
            resourceInputs["mappingId"] = args ? args.mappingId : undefined;
            resourceInputs["idpAdapterRef"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(OauthIdpAdapterMapping.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering OauthIdpAdapterMapping resources.
 */
export interface OauthIdpAdapterMappingState {
    /**
     * Defines how an attribute in an attribute contract should be populated. Map values `USER_NAME` and `USER_KEY` are
     * required. If extended attributes are configured on the persistent grant contract (for example, using the
     * `pingfederate.OauthAuthServerSettings` resource), these must also be configured as map keys.
     */
    attributeContractFulfillment?: pulumi.Input<{[key: string]: pulumi.Input<inputs.OauthIdpAdapterMappingAttributeContractFulfillment>}>;
    /**
     * A list of configured data stores to look up attributes from.
     */
    attributeSources?: pulumi.Input<pulumi.Input<inputs.OauthIdpAdapterMappingAttributeSource>[]>;
    /**
     * Read only reference to the associated IdP adapter.
     */
    idpAdapterRef?: pulumi.Input<inputs.OauthIdpAdapterMappingIdpAdapterRef>;
    /**
     * The issuance criteria that this transaction must meet before the corresponding attribute contract is fulfilled.
     */
    issuanceCriteria?: pulumi.Input<inputs.OauthIdpAdapterMappingIssuanceCriteria>;
    /**
     * The ID of the adapter mapping.
     */
    mappingId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a OauthIdpAdapterMapping resource.
 */
export interface OauthIdpAdapterMappingArgs {
    /**
     * Defines how an attribute in an attribute contract should be populated. Map values `USER_NAME` and `USER_KEY` are
     * required. If extended attributes are configured on the persistent grant contract (for example, using the
     * `pingfederate.OauthAuthServerSettings` resource), these must also be configured as map keys.
     */
    attributeContractFulfillment: pulumi.Input<{[key: string]: pulumi.Input<inputs.OauthIdpAdapterMappingAttributeContractFulfillment>}>;
    /**
     * A list of configured data stores to look up attributes from.
     */
    attributeSources?: pulumi.Input<pulumi.Input<inputs.OauthIdpAdapterMappingAttributeSource>[]>;
    /**
     * The issuance criteria that this transaction must meet before the corresponding attribute contract is fulfilled.
     */
    issuanceCriteria?: pulumi.Input<inputs.OauthIdpAdapterMappingIssuanceCriteria>;
    /**
     * The ID of the adapter mapping.
     */
    mappingId: pulumi.Input<string>;
}
