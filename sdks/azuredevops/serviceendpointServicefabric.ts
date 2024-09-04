// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ServiceendpointServicefabric extends pulumi.CustomResource {
    /**
     * Get an existing ServiceendpointServicefabric resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ServiceendpointServicefabricState, opts?: pulumi.CustomResourceOptions): ServiceendpointServicefabric {
        return new ServiceendpointServicefabric(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azuredevops:index/serviceendpointServicefabric:ServiceendpointServicefabric';

    /**
     * Returns true if the given object is an instance of ServiceendpointServicefabric.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ServiceendpointServicefabric {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ServiceendpointServicefabric.__pulumiType;
    }

    public readonly authorization!: pulumi.Output<{[key: string]: string}>;
    public readonly azureActiveDirectory!: pulumi.Output<outputs.ServiceendpointServicefabricAzureActiveDirectory | undefined>;
    public readonly certificate!: pulumi.Output<outputs.ServiceendpointServicefabricCertificate | undefined>;
    /**
     * Client connection endpoint for the cluster. Prefix the value with 'tcp://';. This value overrides the publish profile.
     */
    public readonly clusterEndpoint!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly none!: pulumi.Output<outputs.ServiceendpointServicefabricNone | undefined>;
    public readonly projectId!: pulumi.Output<string>;
    public readonly serviceEndpointName!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.ServiceendpointServicefabricTimeouts | undefined>;

    /**
     * Create a ServiceendpointServicefabric resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceendpointServicefabricArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ServiceendpointServicefabricArgs | ServiceendpointServicefabricState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ServiceendpointServicefabricState | undefined;
            resourceInputs["authorization"] = state ? state.authorization : undefined;
            resourceInputs["azureActiveDirectory"] = state ? state.azureActiveDirectory : undefined;
            resourceInputs["certificate"] = state ? state.certificate : undefined;
            resourceInputs["clusterEndpoint"] = state ? state.clusterEndpoint : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["none"] = state ? state.none : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["serviceEndpointName"] = state ? state.serviceEndpointName : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ServiceendpointServicefabricArgs | undefined;
            if ((!args || args.clusterEndpoint === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterEndpoint'");
            }
            if ((!args || args.projectId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'projectId'");
            }
            if ((!args || args.serviceEndpointName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceEndpointName'");
            }
            resourceInputs["authorization"] = args ? args.authorization : undefined;
            resourceInputs["azureActiveDirectory"] = args ? args.azureActiveDirectory : undefined;
            resourceInputs["certificate"] = args ? args.certificate : undefined;
            resourceInputs["clusterEndpoint"] = args ? args.clusterEndpoint : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["none"] = args ? args.none : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["serviceEndpointName"] = args ? args.serviceEndpointName : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ServiceendpointServicefabric.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ServiceendpointServicefabric resources.
 */
export interface ServiceendpointServicefabricState {
    authorization?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    azureActiveDirectory?: pulumi.Input<inputs.ServiceendpointServicefabricAzureActiveDirectory>;
    certificate?: pulumi.Input<inputs.ServiceendpointServicefabricCertificate>;
    /**
     * Client connection endpoint for the cluster. Prefix the value with 'tcp://';. This value overrides the publish profile.
     */
    clusterEndpoint?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    none?: pulumi.Input<inputs.ServiceendpointServicefabricNone>;
    projectId?: pulumi.Input<string>;
    serviceEndpointName?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ServiceendpointServicefabricTimeouts>;
}

/**
 * The set of arguments for constructing a ServiceendpointServicefabric resource.
 */
export interface ServiceendpointServicefabricArgs {
    authorization?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    azureActiveDirectory?: pulumi.Input<inputs.ServiceendpointServicefabricAzureActiveDirectory>;
    certificate?: pulumi.Input<inputs.ServiceendpointServicefabricCertificate>;
    /**
     * Client connection endpoint for the cluster. Prefix the value with 'tcp://';. This value overrides the publish profile.
     */
    clusterEndpoint: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    none?: pulumi.Input<inputs.ServiceendpointServicefabricNone>;
    projectId: pulumi.Input<string>;
    serviceEndpointName: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ServiceendpointServicefabricTimeouts>;
}
