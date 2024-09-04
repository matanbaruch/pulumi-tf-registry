// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ApigatewayDocumentationPart extends pulumi.CustomResource {
    /**
     * Get an existing ApigatewayDocumentationPart resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApigatewayDocumentationPartState, opts?: pulumi.CustomResourceOptions): ApigatewayDocumentationPart {
        return new ApigatewayDocumentationPart(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/apigatewayDocumentationPart:ApigatewayDocumentationPart';

    /**
     * Returns true if the given object is an instance of ApigatewayDocumentationPart.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApigatewayDocumentationPart {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApigatewayDocumentationPart.__pulumiType;
    }

    public /*out*/ readonly documentationPartId!: pulumi.Output<string>;
    /**
     * The location of the targeted API entity of the to-be-created documentation part.
     */
    public readonly location!: pulumi.Output<outputs.ApigatewayDocumentationPartLocation>;
    /**
     * The new documentation content map of the targeted API entity. Enclosed key-value pairs are API-specific, but only
     * OpenAPI-compliant key-value pairs can be exported and, hence, published.
     */
    public readonly properties!: pulumi.Output<string>;
    /**
     * The string identifier of the associated RestApi.
     */
    public readonly restApiId!: pulumi.Output<string>;

    /**
     * Create a ApigatewayDocumentationPart resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApigatewayDocumentationPartArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ApigatewayDocumentationPartArgs | ApigatewayDocumentationPartState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ApigatewayDocumentationPartState | undefined;
            resourceInputs["documentationPartId"] = state ? state.documentationPartId : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["properties"] = state ? state.properties : undefined;
            resourceInputs["restApiId"] = state ? state.restApiId : undefined;
        } else {
            const args = argsOrState as ApigatewayDocumentationPartArgs | undefined;
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.properties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'properties'");
            }
            if ((!args || args.restApiId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'restApiId'");
            }
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["restApiId"] = args ? args.restApiId : undefined;
            resourceInputs["documentationPartId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ApigatewayDocumentationPart.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ApigatewayDocumentationPart resources.
 */
export interface ApigatewayDocumentationPartState {
    documentationPartId?: pulumi.Input<string>;
    /**
     * The location of the targeted API entity of the to-be-created documentation part.
     */
    location?: pulumi.Input<inputs.ApigatewayDocumentationPartLocation>;
    /**
     * The new documentation content map of the targeted API entity. Enclosed key-value pairs are API-specific, but only
     * OpenAPI-compliant key-value pairs can be exported and, hence, published.
     */
    properties?: pulumi.Input<string>;
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ApigatewayDocumentationPart resource.
 */
export interface ApigatewayDocumentationPartArgs {
    /**
     * The location of the targeted API entity of the to-be-created documentation part.
     */
    location: pulumi.Input<inputs.ApigatewayDocumentationPartLocation>;
    /**
     * The new documentation content map of the targeted API entity. Enclosed key-value pairs are API-specific, but only
     * OpenAPI-compliant key-value pairs can be exported and, hence, published.
     */
    properties: pulumi.Input<string>;
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: pulumi.Input<string>;
}
