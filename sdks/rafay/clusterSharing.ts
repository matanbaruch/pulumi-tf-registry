// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ClusterSharing extends pulumi.CustomResource {
    /**
     * Get an existing ClusterSharing resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ClusterSharingState, opts?: pulumi.CustomResourceOptions): ClusterSharing {
        return new ClusterSharing(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'rafay:index/clusterSharing:ClusterSharing';

    /**
     * Returns true if the given object is an instance of ClusterSharing.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ClusterSharing {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ClusterSharing.__pulumiType;
    }

    public readonly clustername!: pulumi.Output<string>;
    public readonly project!: pulumi.Output<string>;
    /**
     * cluster sharing configuration
     */
    public readonly sharing!: pulumi.Output<outputs.ClusterSharingSharing | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.ClusterSharingTimeouts | undefined>;

    /**
     * Create a ClusterSharing resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ClusterSharingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ClusterSharingArgs | ClusterSharingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ClusterSharingState | undefined;
            resourceInputs["clustername"] = state ? state.clustername : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["sharing"] = state ? state.sharing : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ClusterSharingArgs | undefined;
            if ((!args || args.clustername === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clustername'");
            }
            if ((!args || args.project === undefined) && !opts.urn) {
                throw new Error("Missing required property 'project'");
            }
            resourceInputs["clustername"] = args ? args.clustername : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["sharing"] = args ? args.sharing : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ClusterSharing.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ClusterSharing resources.
 */
export interface ClusterSharingState {
    clustername?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * cluster sharing configuration
     */
    sharing?: pulumi.Input<inputs.ClusterSharingSharing>;
    timeouts?: pulumi.Input<inputs.ClusterSharingTimeouts>;
}

/**
 * The set of arguments for constructing a ClusterSharing resource.
 */
export interface ClusterSharingArgs {
    clustername: pulumi.Input<string>;
    project: pulumi.Input<string>;
    /**
     * cluster sharing configuration
     */
    sharing?: pulumi.Input<inputs.ClusterSharingSharing>;
    timeouts?: pulumi.Input<inputs.ClusterSharingTimeouts>;
}
