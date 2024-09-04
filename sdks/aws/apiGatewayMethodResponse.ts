// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ApiGatewayMethodResponse extends pulumi.CustomResource {
    /**
     * Get an existing ApiGatewayMethodResponse resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApiGatewayMethodResponseState, opts?: pulumi.CustomResourceOptions): ApiGatewayMethodResponse {
        return new ApiGatewayMethodResponse(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/apiGatewayMethodResponse:ApiGatewayMethodResponse';

    /**
     * Returns true if the given object is an instance of ApiGatewayMethodResponse.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApiGatewayMethodResponse {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApiGatewayMethodResponse.__pulumiType;
    }

    public readonly httpMethod!: pulumi.Output<string>;
    public readonly resourceId!: pulumi.Output<string>;
    public readonly responseModels!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly responseParameters!: pulumi.Output<{[key: string]: boolean} | undefined>;
    public readonly restApiId!: pulumi.Output<string>;
    public readonly statusCode!: pulumi.Output<string>;

    /**
     * Create a ApiGatewayMethodResponse resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiGatewayMethodResponseArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ApiGatewayMethodResponseArgs | ApiGatewayMethodResponseState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ApiGatewayMethodResponseState | undefined;
            resourceInputs["httpMethod"] = state ? state.httpMethod : undefined;
            resourceInputs["resourceId"] = state ? state.resourceId : undefined;
            resourceInputs["responseModels"] = state ? state.responseModels : undefined;
            resourceInputs["responseParameters"] = state ? state.responseParameters : undefined;
            resourceInputs["restApiId"] = state ? state.restApiId : undefined;
            resourceInputs["statusCode"] = state ? state.statusCode : undefined;
        } else {
            const args = argsOrState as ApiGatewayMethodResponseArgs | undefined;
            if ((!args || args.httpMethod === undefined) && !opts.urn) {
                throw new Error("Missing required property 'httpMethod'");
            }
            if ((!args || args.resourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceId'");
            }
            if ((!args || args.restApiId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'restApiId'");
            }
            if ((!args || args.statusCode === undefined) && !opts.urn) {
                throw new Error("Missing required property 'statusCode'");
            }
            resourceInputs["httpMethod"] = args ? args.httpMethod : undefined;
            resourceInputs["resourceId"] = args ? args.resourceId : undefined;
            resourceInputs["responseModels"] = args ? args.responseModels : undefined;
            resourceInputs["responseParameters"] = args ? args.responseParameters : undefined;
            resourceInputs["restApiId"] = args ? args.restApiId : undefined;
            resourceInputs["statusCode"] = args ? args.statusCode : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ApiGatewayMethodResponse.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ApiGatewayMethodResponse resources.
 */
export interface ApiGatewayMethodResponseState {
    httpMethod?: pulumi.Input<string>;
    resourceId?: pulumi.Input<string>;
    responseModels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    responseParameters?: pulumi.Input<{[key: string]: pulumi.Input<boolean>}>;
    restApiId?: pulumi.Input<string>;
    statusCode?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ApiGatewayMethodResponse resource.
 */
export interface ApiGatewayMethodResponseArgs {
    httpMethod: pulumi.Input<string>;
    resourceId: pulumi.Input<string>;
    responseModels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    responseParameters?: pulumi.Input<{[key: string]: pulumi.Input<boolean>}>;
    restApiId: pulumi.Input<string>;
    statusCode: pulumi.Input<string>;
}
