// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ServiceendpointRunpipeline extends pulumi.CustomResource {
    /**
     * Get an existing ServiceendpointRunpipeline resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ServiceendpointRunpipelineState, opts?: pulumi.CustomResourceOptions): ServiceendpointRunpipeline {
        return new ServiceendpointRunpipeline(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azuredevops:index/serviceendpointRunpipeline:ServiceendpointRunpipeline';

    /**
     * Returns true if the given object is an instance of ServiceendpointRunpipeline.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ServiceendpointRunpipeline {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ServiceendpointRunpipeline.__pulumiType;
    }

    public readonly authPersonal!: pulumi.Output<outputs.ServiceendpointRunpipelineAuthPersonal>;
    public readonly authorization!: pulumi.Output<{[key: string]: string}>;
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Azure DevOps organization name
     */
    public readonly organizationName!: pulumi.Output<string>;
    public readonly projectId!: pulumi.Output<string>;
    public readonly serviceEndpointName!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.ServiceendpointRunpipelineTimeouts | undefined>;

    /**
     * Create a ServiceendpointRunpipeline resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceendpointRunpipelineArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ServiceendpointRunpipelineArgs | ServiceendpointRunpipelineState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ServiceendpointRunpipelineState | undefined;
            resourceInputs["authPersonal"] = state ? state.authPersonal : undefined;
            resourceInputs["authorization"] = state ? state.authorization : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["organizationName"] = state ? state.organizationName : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["serviceEndpointName"] = state ? state.serviceEndpointName : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ServiceendpointRunpipelineArgs | undefined;
            if ((!args || args.authPersonal === undefined) && !opts.urn) {
                throw new Error("Missing required property 'authPersonal'");
            }
            if ((!args || args.organizationName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'organizationName'");
            }
            if ((!args || args.projectId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'projectId'");
            }
            if ((!args || args.serviceEndpointName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceEndpointName'");
            }
            resourceInputs["authPersonal"] = args ? args.authPersonal : undefined;
            resourceInputs["authorization"] = args ? args.authorization : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["organizationName"] = args ? args.organizationName : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["serviceEndpointName"] = args ? args.serviceEndpointName : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ServiceendpointRunpipeline.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ServiceendpointRunpipeline resources.
 */
export interface ServiceendpointRunpipelineState {
    authPersonal?: pulumi.Input<inputs.ServiceendpointRunpipelineAuthPersonal>;
    authorization?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    description?: pulumi.Input<string>;
    /**
     * Azure DevOps organization name
     */
    organizationName?: pulumi.Input<string>;
    projectId?: pulumi.Input<string>;
    serviceEndpointName?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ServiceendpointRunpipelineTimeouts>;
}

/**
 * The set of arguments for constructing a ServiceendpointRunpipeline resource.
 */
export interface ServiceendpointRunpipelineArgs {
    authPersonal: pulumi.Input<inputs.ServiceendpointRunpipelineAuthPersonal>;
    authorization?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    description?: pulumi.Input<string>;
    /**
     * Azure DevOps organization name
     */
    organizationName: pulumi.Input<string>;
    projectId: pulumi.Input<string>;
    serviceEndpointName: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ServiceendpointRunpipelineTimeouts>;
}
