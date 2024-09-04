// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ServiceendpointOctopusdeploy extends pulumi.CustomResource {
    /**
     * Get an existing ServiceendpointOctopusdeploy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ServiceendpointOctopusdeployState, opts?: pulumi.CustomResourceOptions): ServiceendpointOctopusdeploy {
        return new ServiceendpointOctopusdeploy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azuredevops:index/serviceendpointOctopusdeploy:ServiceendpointOctopusdeploy';

    /**
     * Returns true if the given object is an instance of ServiceendpointOctopusdeploy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ServiceendpointOctopusdeploy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ServiceendpointOctopusdeploy.__pulumiType;
    }

    public readonly apiKey!: pulumi.Output<string>;
    public readonly authorization!: pulumi.Output<{[key: string]: string}>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly ignoreSslError!: pulumi.Output<boolean | undefined>;
    public readonly projectId!: pulumi.Output<string>;
    public readonly serviceEndpointName!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.ServiceendpointOctopusdeployTimeouts | undefined>;
    public readonly url!: pulumi.Output<string>;

    /**
     * Create a ServiceendpointOctopusdeploy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceendpointOctopusdeployArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ServiceendpointOctopusdeployArgs | ServiceendpointOctopusdeployState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ServiceendpointOctopusdeployState | undefined;
            resourceInputs["apiKey"] = state ? state.apiKey : undefined;
            resourceInputs["authorization"] = state ? state.authorization : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["ignoreSslError"] = state ? state.ignoreSslError : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["serviceEndpointName"] = state ? state.serviceEndpointName : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["url"] = state ? state.url : undefined;
        } else {
            const args = argsOrState as ServiceendpointOctopusdeployArgs | undefined;
            if ((!args || args.apiKey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apiKey'");
            }
            if ((!args || args.projectId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'projectId'");
            }
            if ((!args || args.serviceEndpointName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceEndpointName'");
            }
            if ((!args || args.url === undefined) && !opts.urn) {
                throw new Error("Missing required property 'url'");
            }
            resourceInputs["apiKey"] = args ? args.apiKey : undefined;
            resourceInputs["authorization"] = args ? args.authorization : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["ignoreSslError"] = args ? args.ignoreSslError : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["serviceEndpointName"] = args ? args.serviceEndpointName : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["url"] = args ? args.url : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ServiceendpointOctopusdeploy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ServiceendpointOctopusdeploy resources.
 */
export interface ServiceendpointOctopusdeployState {
    apiKey?: pulumi.Input<string>;
    authorization?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    description?: pulumi.Input<string>;
    ignoreSslError?: pulumi.Input<boolean>;
    projectId?: pulumi.Input<string>;
    serviceEndpointName?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ServiceendpointOctopusdeployTimeouts>;
    url?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ServiceendpointOctopusdeploy resource.
 */
export interface ServiceendpointOctopusdeployArgs {
    apiKey: pulumi.Input<string>;
    authorization?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    description?: pulumi.Input<string>;
    ignoreSslError?: pulumi.Input<boolean>;
    projectId: pulumi.Input<string>;
    serviceEndpointName: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ServiceendpointOctopusdeployTimeouts>;
    url: pulumi.Input<string>;
}
