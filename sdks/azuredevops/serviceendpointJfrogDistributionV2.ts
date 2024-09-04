// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ServiceendpointJfrogDistributionV2 extends pulumi.CustomResource {
    /**
     * Get an existing ServiceendpointJfrogDistributionV2 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ServiceendpointJfrogDistributionV2State, opts?: pulumi.CustomResourceOptions): ServiceendpointJfrogDistributionV2 {
        return new ServiceendpointJfrogDistributionV2(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azuredevops:index/serviceendpointJfrogDistributionV2:ServiceendpointJfrogDistributionV2';

    /**
     * Returns true if the given object is an instance of ServiceendpointJfrogDistributionV2.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ServiceendpointJfrogDistributionV2 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ServiceendpointJfrogDistributionV2.__pulumiType;
    }

    public readonly authenticationBasic!: pulumi.Output<outputs.ServiceendpointJfrogDistributionV2AuthenticationBasic | undefined>;
    public readonly authenticationToken!: pulumi.Output<outputs.ServiceendpointJfrogDistributionV2AuthenticationToken | undefined>;
    public readonly authorization!: pulumi.Output<{[key: string]: string}>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly projectId!: pulumi.Output<string>;
    public readonly serviceEndpointName!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.ServiceendpointJfrogDistributionV2Timeouts | undefined>;
    /**
     * Url for the JFrog Artifactory Server
     */
    public readonly url!: pulumi.Output<string>;

    /**
     * Create a ServiceendpointJfrogDistributionV2 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceendpointJfrogDistributionV2Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ServiceendpointJfrogDistributionV2Args | ServiceendpointJfrogDistributionV2State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ServiceendpointJfrogDistributionV2State | undefined;
            resourceInputs["authenticationBasic"] = state ? state.authenticationBasic : undefined;
            resourceInputs["authenticationToken"] = state ? state.authenticationToken : undefined;
            resourceInputs["authorization"] = state ? state.authorization : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["serviceEndpointName"] = state ? state.serviceEndpointName : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["url"] = state ? state.url : undefined;
        } else {
            const args = argsOrState as ServiceendpointJfrogDistributionV2Args | undefined;
            if ((!args || args.projectId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'projectId'");
            }
            if ((!args || args.serviceEndpointName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceEndpointName'");
            }
            if ((!args || args.url === undefined) && !opts.urn) {
                throw new Error("Missing required property 'url'");
            }
            resourceInputs["authenticationBasic"] = args ? args.authenticationBasic : undefined;
            resourceInputs["authenticationToken"] = args ? args.authenticationToken : undefined;
            resourceInputs["authorization"] = args ? args.authorization : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["serviceEndpointName"] = args ? args.serviceEndpointName : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["url"] = args ? args.url : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ServiceendpointJfrogDistributionV2.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ServiceendpointJfrogDistributionV2 resources.
 */
export interface ServiceendpointJfrogDistributionV2State {
    authenticationBasic?: pulumi.Input<inputs.ServiceendpointJfrogDistributionV2AuthenticationBasic>;
    authenticationToken?: pulumi.Input<inputs.ServiceendpointJfrogDistributionV2AuthenticationToken>;
    authorization?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    description?: pulumi.Input<string>;
    projectId?: pulumi.Input<string>;
    serviceEndpointName?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ServiceendpointJfrogDistributionV2Timeouts>;
    /**
     * Url for the JFrog Artifactory Server
     */
    url?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ServiceendpointJfrogDistributionV2 resource.
 */
export interface ServiceendpointJfrogDistributionV2Args {
    authenticationBasic?: pulumi.Input<inputs.ServiceendpointJfrogDistributionV2AuthenticationBasic>;
    authenticationToken?: pulumi.Input<inputs.ServiceendpointJfrogDistributionV2AuthenticationToken>;
    authorization?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    description?: pulumi.Input<string>;
    projectId: pulumi.Input<string>;
    serviceEndpointName: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ServiceendpointJfrogDistributionV2Timeouts>;
    /**
     * Url for the JFrog Artifactory Server
     */
    url: pulumi.Input<string>;
}
