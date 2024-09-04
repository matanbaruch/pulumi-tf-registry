// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ServiceendpointGithubEnterprise extends pulumi.CustomResource {
    /**
     * Get an existing ServiceendpointGithubEnterprise resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ServiceendpointGithubEnterpriseState, opts?: pulumi.CustomResourceOptions): ServiceendpointGithubEnterprise {
        return new ServiceendpointGithubEnterprise(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azuredevops:index/serviceendpointGithubEnterprise:ServiceendpointGithubEnterprise';

    /**
     * Returns true if the given object is an instance of ServiceendpointGithubEnterprise.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ServiceendpointGithubEnterprise {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ServiceendpointGithubEnterprise.__pulumiType;
    }

    public readonly authPersonal!: pulumi.Output<outputs.ServiceendpointGithubEnterpriseAuthPersonal>;
    public readonly authorization!: pulumi.Output<{[key: string]: string}>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly projectId!: pulumi.Output<string>;
    public readonly serviceEndpointName!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.ServiceendpointGithubEnterpriseTimeouts | undefined>;
    public readonly url!: pulumi.Output<string>;

    /**
     * Create a ServiceendpointGithubEnterprise resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceendpointGithubEnterpriseArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ServiceendpointGithubEnterpriseArgs | ServiceendpointGithubEnterpriseState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ServiceendpointGithubEnterpriseState | undefined;
            resourceInputs["authPersonal"] = state ? state.authPersonal : undefined;
            resourceInputs["authorization"] = state ? state.authorization : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["serviceEndpointName"] = state ? state.serviceEndpointName : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["url"] = state ? state.url : undefined;
        } else {
            const args = argsOrState as ServiceendpointGithubEnterpriseArgs | undefined;
            if ((!args || args.authPersonal === undefined) && !opts.urn) {
                throw new Error("Missing required property 'authPersonal'");
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
            resourceInputs["authPersonal"] = args ? args.authPersonal : undefined;
            resourceInputs["authorization"] = args ? args.authorization : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["serviceEndpointName"] = args ? args.serviceEndpointName : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["url"] = args ? args.url : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ServiceendpointGithubEnterprise.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ServiceendpointGithubEnterprise resources.
 */
export interface ServiceendpointGithubEnterpriseState {
    authPersonal?: pulumi.Input<inputs.ServiceendpointGithubEnterpriseAuthPersonal>;
    authorization?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    description?: pulumi.Input<string>;
    projectId?: pulumi.Input<string>;
    serviceEndpointName?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ServiceendpointGithubEnterpriseTimeouts>;
    url?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ServiceendpointGithubEnterprise resource.
 */
export interface ServiceendpointGithubEnterpriseArgs {
    authPersonal: pulumi.Input<inputs.ServiceendpointGithubEnterpriseAuthPersonal>;
    authorization?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    description?: pulumi.Input<string>;
    projectId: pulumi.Input<string>;
    serviceEndpointName: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ServiceendpointGithubEnterpriseTimeouts>;
    url: pulumi.Input<string>;
}
