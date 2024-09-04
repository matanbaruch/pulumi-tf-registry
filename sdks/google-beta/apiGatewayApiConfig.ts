// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ApiGatewayApiConfig extends pulumi.CustomResource {
    /**
     * Get an existing ApiGatewayApiConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApiGatewayApiConfigState, opts?: pulumi.CustomResourceOptions): ApiGatewayApiConfig {
        return new ApiGatewayApiConfig(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/apiGatewayApiConfig:ApiGatewayApiConfig';

    /**
     * Returns true if the given object is an instance of ApiGatewayApiConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApiGatewayApiConfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApiGatewayApiConfig.__pulumiType;
    }

    /**
     * The API to attach the config to.
     */
    public readonly api!: pulumi.Output<string>;
    /**
     * Identifier to assign to the API Config. Must be unique within scope of the parent resource(api).
     */
    public readonly apiConfigId!: pulumi.Output<string>;
    /**
     * Creates a unique name beginning with the specified prefix. If this and api_config_id are unspecified, a random value is
     * chosen for the name.
     */
    public readonly apiConfigIdPrefix!: pulumi.Output<string>;
    /**
     * A user-visible name for the API.
     */
    public readonly displayName!: pulumi.Output<string>;
    public /*out*/ readonly effectiveLabels!: pulumi.Output<{[key: string]: string}>;
    /**
     * Immutable. Gateway specific configuration. If not specified, backend authentication will be set to use OIDC
     * authentication using the default compute service account
     */
    public readonly gatewayConfig!: pulumi.Output<outputs.ApiGatewayApiConfigGatewayConfig | undefined>;
    /**
     * gRPC service definition files. If specified, openapiDocuments must not be included.
     */
    public readonly grpcServices!: pulumi.Output<outputs.ApiGatewayApiConfigGrpcService[] | undefined>;
    /**
     * Resource labels to represent user-provided metadata. **Note**: This field is non-authoritative, and will only manage the
     * labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels present on the
     * resource.
     */
    public readonly labels!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Optional. Service Configuration files. At least one must be included when using gRPC service definitions. See
     * https://cloud.google.com/endpoints/docs/grpc/grpc-service-config#service_configuration_overview for the expected file
     * contents. If multiple files are specified, the files are merged with the following rules: * All singular scalar fields
     * are merged using "last one wins" semantics in the order of the files uploaded. * Repeated fields are concatenated. *
     * Singular embedded messages are merged using these rules for nested fields.
     */
    public readonly managedServiceConfigs!: pulumi.Output<outputs.ApiGatewayApiConfigManagedServiceConfig[] | undefined>;
    /**
     * The resource name of the API Config.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * OpenAPI specification documents. If specified, grpcServices and managedServiceConfigs must not be included.
     */
    public readonly openapiDocuments!: pulumi.Output<outputs.ApiGatewayApiConfigOpenapiDocument[] | undefined>;
    public readonly project!: pulumi.Output<string>;
    /**
     * The ID of the associated Service Config (https://cloud.google.com/service-infrastructure/docs/glossary#config).
     */
    public /*out*/ readonly serviceConfigId!: pulumi.Output<string>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    public /*out*/ readonly terraformLabels!: pulumi.Output<{[key: string]: string}>;
    public readonly timeouts!: pulumi.Output<outputs.ApiGatewayApiConfigTimeouts | undefined>;

    /**
     * Create a ApiGatewayApiConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiGatewayApiConfigArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ApiGatewayApiConfigArgs | ApiGatewayApiConfigState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ApiGatewayApiConfigState | undefined;
            resourceInputs["api"] = state ? state.api : undefined;
            resourceInputs["apiConfigId"] = state ? state.apiConfigId : undefined;
            resourceInputs["apiConfigIdPrefix"] = state ? state.apiConfigIdPrefix : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["effectiveLabels"] = state ? state.effectiveLabels : undefined;
            resourceInputs["gatewayConfig"] = state ? state.gatewayConfig : undefined;
            resourceInputs["grpcServices"] = state ? state.grpcServices : undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["managedServiceConfigs"] = state ? state.managedServiceConfigs : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["openapiDocuments"] = state ? state.openapiDocuments : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["serviceConfigId"] = state ? state.serviceConfigId : undefined;
            resourceInputs["terraformLabels"] = state ? state.terraformLabels : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ApiGatewayApiConfigArgs | undefined;
            if ((!args || args.api === undefined) && !opts.urn) {
                throw new Error("Missing required property 'api'");
            }
            resourceInputs["api"] = args ? args.api : undefined;
            resourceInputs["apiConfigId"] = args ? args.apiConfigId : undefined;
            resourceInputs["apiConfigIdPrefix"] = args ? args.apiConfigIdPrefix : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["gatewayConfig"] = args ? args.gatewayConfig : undefined;
            resourceInputs["grpcServices"] = args ? args.grpcServices : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["managedServiceConfigs"] = args ? args.managedServiceConfigs : undefined;
            resourceInputs["openapiDocuments"] = args ? args.openapiDocuments : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["effectiveLabels"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["serviceConfigId"] = undefined /*out*/;
            resourceInputs["terraformLabels"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ApiGatewayApiConfig.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ApiGatewayApiConfig resources.
 */
export interface ApiGatewayApiConfigState {
    /**
     * The API to attach the config to.
     */
    api?: pulumi.Input<string>;
    /**
     * Identifier to assign to the API Config. Must be unique within scope of the parent resource(api).
     */
    apiConfigId?: pulumi.Input<string>;
    /**
     * Creates a unique name beginning with the specified prefix. If this and api_config_id are unspecified, a random value is
     * chosen for the name.
     */
    apiConfigIdPrefix?: pulumi.Input<string>;
    /**
     * A user-visible name for the API.
     */
    displayName?: pulumi.Input<string>;
    effectiveLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Immutable. Gateway specific configuration. If not specified, backend authentication will be set to use OIDC
     * authentication using the default compute service account
     */
    gatewayConfig?: pulumi.Input<inputs.ApiGatewayApiConfigGatewayConfig>;
    /**
     * gRPC service definition files. If specified, openapiDocuments must not be included.
     */
    grpcServices?: pulumi.Input<pulumi.Input<inputs.ApiGatewayApiConfigGrpcService>[]>;
    /**
     * Resource labels to represent user-provided metadata. **Note**: This field is non-authoritative, and will only manage the
     * labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels present on the
     * resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Optional. Service Configuration files. At least one must be included when using gRPC service definitions. See
     * https://cloud.google.com/endpoints/docs/grpc/grpc-service-config#service_configuration_overview for the expected file
     * contents. If multiple files are specified, the files are merged with the following rules: * All singular scalar fields
     * are merged using "last one wins" semantics in the order of the files uploaded. * Repeated fields are concatenated. *
     * Singular embedded messages are merged using these rules for nested fields.
     */
    managedServiceConfigs?: pulumi.Input<pulumi.Input<inputs.ApiGatewayApiConfigManagedServiceConfig>[]>;
    /**
     * The resource name of the API Config.
     */
    name?: pulumi.Input<string>;
    /**
     * OpenAPI specification documents. If specified, grpcServices and managedServiceConfigs must not be included.
     */
    openapiDocuments?: pulumi.Input<pulumi.Input<inputs.ApiGatewayApiConfigOpenapiDocument>[]>;
    project?: pulumi.Input<string>;
    /**
     * The ID of the associated Service Config (https://cloud.google.com/service-infrastructure/docs/glossary#config).
     */
    serviceConfigId?: pulumi.Input<string>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    terraformLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.ApiGatewayApiConfigTimeouts>;
}

/**
 * The set of arguments for constructing a ApiGatewayApiConfig resource.
 */
export interface ApiGatewayApiConfigArgs {
    /**
     * The API to attach the config to.
     */
    api: pulumi.Input<string>;
    /**
     * Identifier to assign to the API Config. Must be unique within scope of the parent resource(api).
     */
    apiConfigId?: pulumi.Input<string>;
    /**
     * Creates a unique name beginning with the specified prefix. If this and api_config_id are unspecified, a random value is
     * chosen for the name.
     */
    apiConfigIdPrefix?: pulumi.Input<string>;
    /**
     * A user-visible name for the API.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Immutable. Gateway specific configuration. If not specified, backend authentication will be set to use OIDC
     * authentication using the default compute service account
     */
    gatewayConfig?: pulumi.Input<inputs.ApiGatewayApiConfigGatewayConfig>;
    /**
     * gRPC service definition files. If specified, openapiDocuments must not be included.
     */
    grpcServices?: pulumi.Input<pulumi.Input<inputs.ApiGatewayApiConfigGrpcService>[]>;
    /**
     * Resource labels to represent user-provided metadata. **Note**: This field is non-authoritative, and will only manage the
     * labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels present on the
     * resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Optional. Service Configuration files. At least one must be included when using gRPC service definitions. See
     * https://cloud.google.com/endpoints/docs/grpc/grpc-service-config#service_configuration_overview for the expected file
     * contents. If multiple files are specified, the files are merged with the following rules: * All singular scalar fields
     * are merged using "last one wins" semantics in the order of the files uploaded. * Repeated fields are concatenated. *
     * Singular embedded messages are merged using these rules for nested fields.
     */
    managedServiceConfigs?: pulumi.Input<pulumi.Input<inputs.ApiGatewayApiConfigManagedServiceConfig>[]>;
    /**
     * OpenAPI specification documents. If specified, grpcServices and managedServiceConfigs must not be included.
     */
    openapiDocuments?: pulumi.Input<pulumi.Input<inputs.ApiGatewayApiConfigOpenapiDocument>[]>;
    project?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ApiGatewayApiConfigTimeouts>;
}
