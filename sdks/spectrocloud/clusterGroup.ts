// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ClusterGroup extends pulumi.CustomResource {
    /**
     * Get an existing ClusterGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ClusterGroupState, opts?: pulumi.CustomResourceOptions): ClusterGroup {
        return new ClusterGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'spectrocloud:index/clusterGroup:ClusterGroup';

    /**
     * Returns true if the given object is an instance of ClusterGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ClusterGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ClusterGroup.__pulumiType;
    }

    public readonly clusterProfiles!: pulumi.Output<outputs.ClusterGroupClusterProfile[] | undefined>;
    /**
     * A list of clusters to include in the cluster group.
     */
    public readonly clusters!: pulumi.Output<outputs.ClusterGroupCluster[] | undefined>;
    public readonly config!: pulumi.Output<outputs.ClusterGroupConfig>;
    public readonly context!: pulumi.Output<string | undefined>;
    /**
     * The description of the cluster. Default value is empty string.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Name of the cluster group
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * A list of tags to be applied to the cluster group. Tags must be in the form of `key:value`.
     */
    public readonly tags!: pulumi.Output<string[] | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.ClusterGroupTimeouts | undefined>;

    /**
     * Create a ClusterGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ClusterGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ClusterGroupArgs | ClusterGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ClusterGroupState | undefined;
            resourceInputs["clusterProfiles"] = state ? state.clusterProfiles : undefined;
            resourceInputs["clusters"] = state ? state.clusters : undefined;
            resourceInputs["config"] = state ? state.config : undefined;
            resourceInputs["context"] = state ? state.context : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ClusterGroupArgs | undefined;
            if ((!args || args.config === undefined) && !opts.urn) {
                throw new Error("Missing required property 'config'");
            }
            resourceInputs["clusterProfiles"] = args ? args.clusterProfiles : undefined;
            resourceInputs["clusters"] = args ? args.clusters : undefined;
            resourceInputs["config"] = args ? args.config : undefined;
            resourceInputs["context"] = args ? args.context : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ClusterGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ClusterGroup resources.
 */
export interface ClusterGroupState {
    clusterProfiles?: pulumi.Input<pulumi.Input<inputs.ClusterGroupClusterProfile>[]>;
    /**
     * A list of clusters to include in the cluster group.
     */
    clusters?: pulumi.Input<pulumi.Input<inputs.ClusterGroupCluster>[]>;
    config?: pulumi.Input<inputs.ClusterGroupConfig>;
    context?: pulumi.Input<string>;
    /**
     * The description of the cluster. Default value is empty string.
     */
    description?: pulumi.Input<string>;
    /**
     * Name of the cluster group
     */
    name?: pulumi.Input<string>;
    /**
     * A list of tags to be applied to the cluster group. Tags must be in the form of `key:value`.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.ClusterGroupTimeouts>;
}

/**
 * The set of arguments for constructing a ClusterGroup resource.
 */
export interface ClusterGroupArgs {
    clusterProfiles?: pulumi.Input<pulumi.Input<inputs.ClusterGroupClusterProfile>[]>;
    /**
     * A list of clusters to include in the cluster group.
     */
    clusters?: pulumi.Input<pulumi.Input<inputs.ClusterGroupCluster>[]>;
    config: pulumi.Input<inputs.ClusterGroupConfig>;
    context?: pulumi.Input<string>;
    /**
     * The description of the cluster. Default value is empty string.
     */
    description?: pulumi.Input<string>;
    /**
     * Name of the cluster group
     */
    name?: pulumi.Input<string>;
    /**
     * A list of tags to be applied to the cluster group. Tags must be in the form of `key:value`.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.ClusterGroupTimeouts>;
}
