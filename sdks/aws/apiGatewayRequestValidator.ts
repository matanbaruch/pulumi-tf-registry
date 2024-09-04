// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ApiGatewayRequestValidator extends pulumi.CustomResource {
    /**
     * Get an existing ApiGatewayRequestValidator resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApiGatewayRequestValidatorState, opts?: pulumi.CustomResourceOptions): ApiGatewayRequestValidator {
        return new ApiGatewayRequestValidator(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/apiGatewayRequestValidator:ApiGatewayRequestValidator';

    /**
     * Returns true if the given object is an instance of ApiGatewayRequestValidator.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApiGatewayRequestValidator {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApiGatewayRequestValidator.__pulumiType;
    }

    public readonly name!: pulumi.Output<string>;
    public readonly restApiId!: pulumi.Output<string>;
    public readonly validateRequestBody!: pulumi.Output<boolean | undefined>;
    public readonly validateRequestParameters!: pulumi.Output<boolean | undefined>;

    /**
     * Create a ApiGatewayRequestValidator resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiGatewayRequestValidatorArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ApiGatewayRequestValidatorArgs | ApiGatewayRequestValidatorState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ApiGatewayRequestValidatorState | undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["restApiId"] = state ? state.restApiId : undefined;
            resourceInputs["validateRequestBody"] = state ? state.validateRequestBody : undefined;
            resourceInputs["validateRequestParameters"] = state ? state.validateRequestParameters : undefined;
        } else {
            const args = argsOrState as ApiGatewayRequestValidatorArgs | undefined;
            if ((!args || args.restApiId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'restApiId'");
            }
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["restApiId"] = args ? args.restApiId : undefined;
            resourceInputs["validateRequestBody"] = args ? args.validateRequestBody : undefined;
            resourceInputs["validateRequestParameters"] = args ? args.validateRequestParameters : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ApiGatewayRequestValidator.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ApiGatewayRequestValidator resources.
 */
export interface ApiGatewayRequestValidatorState {
    name?: pulumi.Input<string>;
    restApiId?: pulumi.Input<string>;
    validateRequestBody?: pulumi.Input<boolean>;
    validateRequestParameters?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a ApiGatewayRequestValidator resource.
 */
export interface ApiGatewayRequestValidatorArgs {
    name?: pulumi.Input<string>;
    restApiId: pulumi.Input<string>;
    validateRequestBody?: pulumi.Input<boolean>;
    validateRequestParameters?: pulumi.Input<boolean>;
}
