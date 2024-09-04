// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ServiceWinrm extends pulumi.CustomResource {
    /**
     * Get an existing ServiceWinrm resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ServiceWinrmState, opts?: pulumi.CustomResourceOptions): ServiceWinrm {
        return new ServiceWinrm(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'harness:index/serviceWinrm:ServiceWinrm';

    /**
     * Returns true if the given object is an instance of ServiceWinrm.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ServiceWinrm {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ServiceWinrm.__pulumiType;
    }

    /**
     * The id of the application the service belongs to
     */
    public readonly appId!: pulumi.Output<string>;
    /**
     * The type of artifact to deploy.
     */
    public readonly artifactType!: pulumi.Output<string>;
    /**
     * Description of th service
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Name of the service
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Variables to be used in the service
     */
    public readonly variables!: pulumi.Output<outputs.ServiceWinrmVariable[] | undefined>;

    /**
     * Create a ServiceWinrm resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceWinrmArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ServiceWinrmArgs | ServiceWinrmState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ServiceWinrmState | undefined;
            resourceInputs["appId"] = state ? state.appId : undefined;
            resourceInputs["artifactType"] = state ? state.artifactType : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["variables"] = state ? state.variables : undefined;
        } else {
            const args = argsOrState as ServiceWinrmArgs | undefined;
            if ((!args || args.appId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'appId'");
            }
            if ((!args || args.artifactType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'artifactType'");
            }
            resourceInputs["appId"] = args ? args.appId : undefined;
            resourceInputs["artifactType"] = args ? args.artifactType : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["variables"] = args ? args.variables : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ServiceWinrm.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ServiceWinrm resources.
 */
export interface ServiceWinrmState {
    /**
     * The id of the application the service belongs to
     */
    appId?: pulumi.Input<string>;
    /**
     * The type of artifact to deploy.
     */
    artifactType?: pulumi.Input<string>;
    /**
     * Description of th service
     */
    description?: pulumi.Input<string>;
    /**
     * Name of the service
     */
    name?: pulumi.Input<string>;
    /**
     * Variables to be used in the service
     */
    variables?: pulumi.Input<pulumi.Input<inputs.ServiceWinrmVariable>[]>;
}

/**
 * The set of arguments for constructing a ServiceWinrm resource.
 */
export interface ServiceWinrmArgs {
    /**
     * The id of the application the service belongs to
     */
    appId: pulumi.Input<string>;
    /**
     * The type of artifact to deploy.
     */
    artifactType: pulumi.Input<string>;
    /**
     * Description of th service
     */
    description?: pulumi.Input<string>;
    /**
     * Name of the service
     */
    name?: pulumi.Input<string>;
    /**
     * Variables to be used in the service
     */
    variables?: pulumi.Input<pulumi.Input<inputs.ServiceWinrmVariable>[]>;
}
