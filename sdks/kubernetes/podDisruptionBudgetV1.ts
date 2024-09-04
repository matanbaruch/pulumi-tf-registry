// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class PodDisruptionBudgetV1 extends pulumi.CustomResource {
    /**
     * Get an existing PodDisruptionBudgetV1 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PodDisruptionBudgetV1State, opts?: pulumi.CustomResourceOptions): PodDisruptionBudgetV1 {
        return new PodDisruptionBudgetV1(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'kubernetes:index/podDisruptionBudgetV1:PodDisruptionBudgetV1';

    /**
     * Returns true if the given object is an instance of PodDisruptionBudgetV1.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PodDisruptionBudgetV1 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PodDisruptionBudgetV1.__pulumiType;
    }

    /**
     * Standard pod disruption budget's metadata. More info:
     * https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    public readonly metadata!: pulumi.Output<outputs.PodDisruptionBudgetV1Metadata>;
    /**
     * Specification of the desired behavior of the PodDisruptionBudget.
     */
    public readonly spec!: pulumi.Output<outputs.PodDisruptionBudgetV1Spec>;

    /**
     * Create a PodDisruptionBudgetV1 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PodDisruptionBudgetV1Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PodDisruptionBudgetV1Args | PodDisruptionBudgetV1State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PodDisruptionBudgetV1State | undefined;
            resourceInputs["metadata"] = state ? state.metadata : undefined;
            resourceInputs["spec"] = state ? state.spec : undefined;
        } else {
            const args = argsOrState as PodDisruptionBudgetV1Args | undefined;
            if ((!args || args.metadata === undefined) && !opts.urn) {
                throw new Error("Missing required property 'metadata'");
            }
            if ((!args || args.spec === undefined) && !opts.urn) {
                throw new Error("Missing required property 'spec'");
            }
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["spec"] = args ? args.spec : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PodDisruptionBudgetV1.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PodDisruptionBudgetV1 resources.
 */
export interface PodDisruptionBudgetV1State {
    /**
     * Standard pod disruption budget's metadata. More info:
     * https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    metadata?: pulumi.Input<inputs.PodDisruptionBudgetV1Metadata>;
    /**
     * Specification of the desired behavior of the PodDisruptionBudget.
     */
    spec?: pulumi.Input<inputs.PodDisruptionBudgetV1Spec>;
}

/**
 * The set of arguments for constructing a PodDisruptionBudgetV1 resource.
 */
export interface PodDisruptionBudgetV1Args {
    /**
     * Standard pod disruption budget's metadata. More info:
     * https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    metadata: pulumi.Input<inputs.PodDisruptionBudgetV1Metadata>;
    /**
     * Specification of the desired behavior of the PodDisruptionBudget.
     */
    spec: pulumi.Input<inputs.PodDisruptionBudgetV1Spec>;
}
