// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class VertexAiEndpoint extends pulumi.CustomResource {
    /**
     * Get an existing VertexAiEndpoint resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VertexAiEndpointState, opts?: pulumi.CustomResourceOptions): VertexAiEndpoint {
        return new VertexAiEndpoint(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/vertexAiEndpoint:VertexAiEndpoint';

    /**
     * Returns true if the given object is an instance of VertexAiEndpoint.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VertexAiEndpoint {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VertexAiEndpoint.__pulumiType;
    }

    /**
     * Output only. Timestamp when this Endpoint was created.
     */
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    /**
     * Output only. The models deployed in this Endpoint. To add or remove DeployedModels use EndpointService.DeployModel and
     * EndpointService.UndeployModel respectively. Models can also be deployed and undeployed using the [Cloud
     * Console](https://console.cloud.google.com/vertex-ai/).
     */
    public /*out*/ readonly deployedModels!: pulumi.Output<outputs.VertexAiEndpointDeployedModel[]>;
    /**
     * The description of the Endpoint.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Required. The display name of the Endpoint. The name can be up to 128 characters long and can consist of any UTF-8
     * characters.
     */
    public readonly displayName!: pulumi.Output<string>;
    public /*out*/ readonly effectiveLabels!: pulumi.Output<{[key: string]: string}>;
    /**
     * Customer-managed encryption key spec for an Endpoint. If set, this Endpoint and all sub-resources of this Endpoint will
     * be secured by this key.
     */
    public readonly encryptionSpec!: pulumi.Output<outputs.VertexAiEndpointEncryptionSpec | undefined>;
    /**
     * Used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The labels with user-defined metadata to organize your Endpoints. Label keys and values can be no longer than 64
     * characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes.
     * International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels. **Note**:
     * This field is non-authoritative, and will only manage the labels present in your configuration. Please refer to the
     * field 'effective_labels' for all of the labels present on the resource.
     */
    public readonly labels!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The location for the resource
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Output only. Resource name of the Model Monitoring job associated with this Endpoint if monitoring is enabled by
     * CreateModelDeploymentMonitoringJob. Format:
     * 'projects/{project}/locations/{location}/modelDeploymentMonitoringJobs/{model_deployment_monitoring_job}'
     */
    public /*out*/ readonly modelDeploymentMonitoringJob!: pulumi.Output<string>;
    /**
     * The resource name of the Endpoint. The name must be numeric with no leading zeros and can be at most 10 digits.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The full name of the Google Compute Engine
     * [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks) to which the Endpoint should be
     * peered. Private services access must already be configured for the network. If left unspecified, the Endpoint is not
     * peered with any network. Only one of the fields, network or enable_private_service_connect, can be set.
     * [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert):
     * 'projects/{project}/global/networks/{network}'. Where '{project}' is a project number, as in '12345', and '{network}' is
     * network name.
     */
    public readonly network!: pulumi.Output<string | undefined>;
    public readonly project!: pulumi.Output<string>;
    /**
     * The region for the resource
     */
    public readonly region!: pulumi.Output<string | undefined>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    public /*out*/ readonly terraformLabels!: pulumi.Output<{[key: string]: string}>;
    public readonly timeouts!: pulumi.Output<outputs.VertexAiEndpointTimeouts | undefined>;
    /**
     * Output only. Timestamp when this Endpoint was last updated.
     */
    public /*out*/ readonly updateTime!: pulumi.Output<string>;

    /**
     * Create a VertexAiEndpoint resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VertexAiEndpointArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VertexAiEndpointArgs | VertexAiEndpointState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VertexAiEndpointState | undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["deployedModels"] = state ? state.deployedModels : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["effectiveLabels"] = state ? state.effectiveLabels : undefined;
            resourceInputs["encryptionSpec"] = state ? state.encryptionSpec : undefined;
            resourceInputs["etag"] = state ? state.etag : undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["modelDeploymentMonitoringJob"] = state ? state.modelDeploymentMonitoringJob : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["network"] = state ? state.network : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["terraformLabels"] = state ? state.terraformLabels : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["updateTime"] = state ? state.updateTime : undefined;
        } else {
            const args = argsOrState as VertexAiEndpointArgs | undefined;
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["encryptionSpec"] = args ? args.encryptionSpec : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["network"] = args ? args.network : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["deployedModels"] = undefined /*out*/;
            resourceInputs["effectiveLabels"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["modelDeploymentMonitoringJob"] = undefined /*out*/;
            resourceInputs["terraformLabels"] = undefined /*out*/;
            resourceInputs["updateTime"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VertexAiEndpoint.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VertexAiEndpoint resources.
 */
export interface VertexAiEndpointState {
    /**
     * Output only. Timestamp when this Endpoint was created.
     */
    createTime?: pulumi.Input<string>;
    /**
     * Output only. The models deployed in this Endpoint. To add or remove DeployedModels use EndpointService.DeployModel and
     * EndpointService.UndeployModel respectively. Models can also be deployed and undeployed using the [Cloud
     * Console](https://console.cloud.google.com/vertex-ai/).
     */
    deployedModels?: pulumi.Input<pulumi.Input<inputs.VertexAiEndpointDeployedModel>[]>;
    /**
     * The description of the Endpoint.
     */
    description?: pulumi.Input<string>;
    /**
     * Required. The display name of the Endpoint. The name can be up to 128 characters long and can consist of any UTF-8
     * characters.
     */
    displayName?: pulumi.Input<string>;
    effectiveLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Customer-managed encryption key spec for an Endpoint. If set, this Endpoint and all sub-resources of this Endpoint will
     * be secured by this key.
     */
    encryptionSpec?: pulumi.Input<inputs.VertexAiEndpointEncryptionSpec>;
    /**
     * Used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.
     */
    etag?: pulumi.Input<string>;
    /**
     * The labels with user-defined metadata to organize your Endpoints. Label keys and values can be no longer than 64
     * characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes.
     * International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels. **Note**:
     * This field is non-authoritative, and will only manage the labels present in your configuration. Please refer to the
     * field 'effective_labels' for all of the labels present on the resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The location for the resource
     */
    location?: pulumi.Input<string>;
    /**
     * Output only. Resource name of the Model Monitoring job associated with this Endpoint if monitoring is enabled by
     * CreateModelDeploymentMonitoringJob. Format:
     * 'projects/{project}/locations/{location}/modelDeploymentMonitoringJobs/{model_deployment_monitoring_job}'
     */
    modelDeploymentMonitoringJob?: pulumi.Input<string>;
    /**
     * The resource name of the Endpoint. The name must be numeric with no leading zeros and can be at most 10 digits.
     */
    name?: pulumi.Input<string>;
    /**
     * The full name of the Google Compute Engine
     * [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks) to which the Endpoint should be
     * peered. Private services access must already be configured for the network. If left unspecified, the Endpoint is not
     * peered with any network. Only one of the fields, network or enable_private_service_connect, can be set.
     * [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert):
     * 'projects/{project}/global/networks/{network}'. Where '{project}' is a project number, as in '12345', and '{network}' is
     * network name.
     */
    network?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * The region for the resource
     */
    region?: pulumi.Input<string>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    terraformLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.VertexAiEndpointTimeouts>;
    /**
     * Output only. Timestamp when this Endpoint was last updated.
     */
    updateTime?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VertexAiEndpoint resource.
 */
export interface VertexAiEndpointArgs {
    /**
     * The description of the Endpoint.
     */
    description?: pulumi.Input<string>;
    /**
     * Required. The display name of the Endpoint. The name can be up to 128 characters long and can consist of any UTF-8
     * characters.
     */
    displayName: pulumi.Input<string>;
    /**
     * Customer-managed encryption key spec for an Endpoint. If set, this Endpoint and all sub-resources of this Endpoint will
     * be secured by this key.
     */
    encryptionSpec?: pulumi.Input<inputs.VertexAiEndpointEncryptionSpec>;
    /**
     * The labels with user-defined metadata to organize your Endpoints. Label keys and values can be no longer than 64
     * characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes.
     * International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels. **Note**:
     * This field is non-authoritative, and will only manage the labels present in your configuration. Please refer to the
     * field 'effective_labels' for all of the labels present on the resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The location for the resource
     */
    location: pulumi.Input<string>;
    /**
     * The resource name of the Endpoint. The name must be numeric with no leading zeros and can be at most 10 digits.
     */
    name?: pulumi.Input<string>;
    /**
     * The full name of the Google Compute Engine
     * [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks) to which the Endpoint should be
     * peered. Private services access must already be configured for the network. If left unspecified, the Endpoint is not
     * peered with any network. Only one of the fields, network or enable_private_service_connect, can be set.
     * [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert):
     * 'projects/{project}/global/networks/{network}'. Where '{project}' is a project number, as in '12345', and '{network}' is
     * network name.
     */
    network?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * The region for the resource
     */
    region?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.VertexAiEndpointTimeouts>;
}
