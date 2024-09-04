// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ApiGatewayRestApi extends pulumi.CustomResource {
    /**
     * Get an existing ApiGatewayRestApi resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApiGatewayRestApiState, opts?: pulumi.CustomResourceOptions): ApiGatewayRestApi {
        return new ApiGatewayRestApi(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/apiGatewayRestApi:ApiGatewayRestApi';

    /**
     * Returns true if the given object is an instance of ApiGatewayRestApi.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApiGatewayRestApi {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApiGatewayRestApi.__pulumiType;
    }

    public readonly apiKeySource!: pulumi.Output<string>;
    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly binaryMediaTypes!: pulumi.Output<string[]>;
    public readonly body!: pulumi.Output<string | undefined>;
    public /*out*/ readonly createdDate!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string>;
    public readonly disableExecuteApiEndpoint!: pulumi.Output<boolean>;
    public readonly endpointConfiguration!: pulumi.Output<outputs.ApiGatewayRestApiEndpointConfiguration | undefined>;
    public /*out*/ readonly executionArn!: pulumi.Output<string>;
    public readonly failOnWarnings!: pulumi.Output<boolean | undefined>;
    public readonly minimumCompressionSize!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly parameters!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly policy!: pulumi.Output<string>;
    public readonly putRestApiMode!: pulumi.Output<string | undefined>;
    public /*out*/ readonly rootResourceId!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tagsAll!: pulumi.Output<{[key: string]: string}>;

    /**
     * Create a ApiGatewayRestApi resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ApiGatewayRestApiArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ApiGatewayRestApiArgs | ApiGatewayRestApiState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ApiGatewayRestApiState | undefined;
            resourceInputs["apiKeySource"] = state ? state.apiKeySource : undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["binaryMediaTypes"] = state ? state.binaryMediaTypes : undefined;
            resourceInputs["body"] = state ? state.body : undefined;
            resourceInputs["createdDate"] = state ? state.createdDate : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["disableExecuteApiEndpoint"] = state ? state.disableExecuteApiEndpoint : undefined;
            resourceInputs["endpointConfiguration"] = state ? state.endpointConfiguration : undefined;
            resourceInputs["executionArn"] = state ? state.executionArn : undefined;
            resourceInputs["failOnWarnings"] = state ? state.failOnWarnings : undefined;
            resourceInputs["minimumCompressionSize"] = state ? state.minimumCompressionSize : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["parameters"] = state ? state.parameters : undefined;
            resourceInputs["policy"] = state ? state.policy : undefined;
            resourceInputs["putRestApiMode"] = state ? state.putRestApiMode : undefined;
            resourceInputs["rootResourceId"] = state ? state.rootResourceId : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
        } else {
            const args = argsOrState as ApiGatewayRestApiArgs | undefined;
            resourceInputs["apiKeySource"] = args ? args.apiKeySource : undefined;
            resourceInputs["binaryMediaTypes"] = args ? args.binaryMediaTypes : undefined;
            resourceInputs["body"] = args ? args.body : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["disableExecuteApiEndpoint"] = args ? args.disableExecuteApiEndpoint : undefined;
            resourceInputs["endpointConfiguration"] = args ? args.endpointConfiguration : undefined;
            resourceInputs["failOnWarnings"] = args ? args.failOnWarnings : undefined;
            resourceInputs["minimumCompressionSize"] = args ? args.minimumCompressionSize : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["parameters"] = args ? args.parameters : undefined;
            resourceInputs["policy"] = args ? args.policy : undefined;
            resourceInputs["putRestApiMode"] = args ? args.putRestApiMode : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tagsAll"] = args ? args.tagsAll : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["createdDate"] = undefined /*out*/;
            resourceInputs["executionArn"] = undefined /*out*/;
            resourceInputs["rootResourceId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ApiGatewayRestApi.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ApiGatewayRestApi resources.
 */
export interface ApiGatewayRestApiState {
    apiKeySource?: pulumi.Input<string>;
    arn?: pulumi.Input<string>;
    binaryMediaTypes?: pulumi.Input<pulumi.Input<string>[]>;
    body?: pulumi.Input<string>;
    createdDate?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    disableExecuteApiEndpoint?: pulumi.Input<boolean>;
    endpointConfiguration?: pulumi.Input<inputs.ApiGatewayRestApiEndpointConfiguration>;
    executionArn?: pulumi.Input<string>;
    failOnWarnings?: pulumi.Input<boolean>;
    minimumCompressionSize?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    policy?: pulumi.Input<string>;
    putRestApiMode?: pulumi.Input<string>;
    rootResourceId?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The set of arguments for constructing a ApiGatewayRestApi resource.
 */
export interface ApiGatewayRestApiArgs {
    apiKeySource?: pulumi.Input<string>;
    binaryMediaTypes?: pulumi.Input<pulumi.Input<string>[]>;
    body?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    disableExecuteApiEndpoint?: pulumi.Input<boolean>;
    endpointConfiguration?: pulumi.Input<inputs.ApiGatewayRestApiEndpointConfiguration>;
    failOnWarnings?: pulumi.Input<boolean>;
    minimumCompressionSize?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    policy?: pulumi.Input<string>;
    putRestApiMode?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
