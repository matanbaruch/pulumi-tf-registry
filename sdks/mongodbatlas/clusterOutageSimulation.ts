// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ClusterOutageSimulation extends pulumi.CustomResource {
    /**
     * Get an existing ClusterOutageSimulation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ClusterOutageSimulationState, opts?: pulumi.CustomResourceOptions): ClusterOutageSimulation {
        return new ClusterOutageSimulation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'mongodbatlas:index/clusterOutageSimulation:ClusterOutageSimulation';

    /**
     * Returns true if the given object is an instance of ClusterOutageSimulation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ClusterOutageSimulation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ClusterOutageSimulation.__pulumiType;
    }

    public readonly clusterName!: pulumi.Output<string>;
    public readonly outageFilters!: pulumi.Output<outputs.ClusterOutageSimulationOutageFilter[]>;
    public readonly projectId!: pulumi.Output<string>;
    public /*out*/ readonly simulationId!: pulumi.Output<string>;
    public /*out*/ readonly startRequestDate!: pulumi.Output<string>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.ClusterOutageSimulationTimeouts | undefined>;

    /**
     * Create a ClusterOutageSimulation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ClusterOutageSimulationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ClusterOutageSimulationArgs | ClusterOutageSimulationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ClusterOutageSimulationState | undefined;
            resourceInputs["clusterName"] = state ? state.clusterName : undefined;
            resourceInputs["outageFilters"] = state ? state.outageFilters : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["simulationId"] = state ? state.simulationId : undefined;
            resourceInputs["startRequestDate"] = state ? state.startRequestDate : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ClusterOutageSimulationArgs | undefined;
            if ((!args || args.clusterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterName'");
            }
            if ((!args || args.outageFilters === undefined) && !opts.urn) {
                throw new Error("Missing required property 'outageFilters'");
            }
            if ((!args || args.projectId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'projectId'");
            }
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["outageFilters"] = args ? args.outageFilters : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["simulationId"] = undefined /*out*/;
            resourceInputs["startRequestDate"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ClusterOutageSimulation.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ClusterOutageSimulation resources.
 */
export interface ClusterOutageSimulationState {
    clusterName?: pulumi.Input<string>;
    outageFilters?: pulumi.Input<pulumi.Input<inputs.ClusterOutageSimulationOutageFilter>[]>;
    projectId?: pulumi.Input<string>;
    simulationId?: pulumi.Input<string>;
    startRequestDate?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ClusterOutageSimulationTimeouts>;
}

/**
 * The set of arguments for constructing a ClusterOutageSimulation resource.
 */
export interface ClusterOutageSimulationArgs {
    clusterName: pulumi.Input<string>;
    outageFilters: pulumi.Input<pulumi.Input<inputs.ClusterOutageSimulationOutageFilter>[]>;
    projectId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ClusterOutageSimulationTimeouts>;
}
