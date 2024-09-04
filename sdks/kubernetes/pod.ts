// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Pod extends pulumi.CustomResource {
    /**
     * Get an existing Pod resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PodState, opts?: pulumi.CustomResourceOptions): Pod {
        return new Pod(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'kubernetes:index/pod:Pod';

    /**
     * Returns true if the given object is an instance of Pod.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Pod {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Pod.__pulumiType;
    }

    /**
     * Standard pod's metadata. More info:
     * https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    public readonly metadata!: pulumi.Output<outputs.PodMetadata>;
    /**
     * Specification of the desired behavior of the pod.
     */
    public readonly spec!: pulumi.Output<outputs.PodSpec>;
    /**
     * A list of the pod phases that indicate whether it was successfully created. Options: "Pending", "Running", "Succeeded",
     * "Failed", "Unknown". Default: "Running". More info:
     * https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-phase
     */
    public readonly targetStates!: pulumi.Output<string[] | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.PodTimeouts | undefined>;

    /**
     * Create a Pod resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PodArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PodArgs | PodState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PodState | undefined;
            resourceInputs["metadata"] = state ? state.metadata : undefined;
            resourceInputs["spec"] = state ? state.spec : undefined;
            resourceInputs["targetStates"] = state ? state.targetStates : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as PodArgs | undefined;
            if ((!args || args.metadata === undefined) && !opts.urn) {
                throw new Error("Missing required property 'metadata'");
            }
            if ((!args || args.spec === undefined) && !opts.urn) {
                throw new Error("Missing required property 'spec'");
            }
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["spec"] = args ? args.spec : undefined;
            resourceInputs["targetStates"] = args ? args.targetStates : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Pod.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Pod resources.
 */
export interface PodState {
    /**
     * Standard pod's metadata. More info:
     * https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    metadata?: pulumi.Input<inputs.PodMetadata>;
    /**
     * Specification of the desired behavior of the pod.
     */
    spec?: pulumi.Input<inputs.PodSpec>;
    /**
     * A list of the pod phases that indicate whether it was successfully created. Options: "Pending", "Running", "Succeeded",
     * "Failed", "Unknown". Default: "Running". More info:
     * https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-phase
     */
    targetStates?: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.PodTimeouts>;
}

/**
 * The set of arguments for constructing a Pod resource.
 */
export interface PodArgs {
    /**
     * Standard pod's metadata. More info:
     * https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    metadata: pulumi.Input<inputs.PodMetadata>;
    /**
     * Specification of the desired behavior of the pod.
     */
    spec: pulumi.Input<inputs.PodSpec>;
    /**
     * A list of the pod phases that indicate whether it was successfully created. Options: "Pending", "Running", "Succeeded",
     * "Failed", "Unknown". Default: "Running". More info:
     * https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-phase
     */
    targetStates?: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.PodTimeouts>;
}
