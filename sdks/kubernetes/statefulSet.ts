// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class StatefulSet extends pulumi.CustomResource {
    /**
     * Get an existing StatefulSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: StatefulSetState, opts?: pulumi.CustomResourceOptions): StatefulSet {
        return new StatefulSet(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'kubernetes:index/statefulSet:StatefulSet';

    /**
     * Returns true if the given object is an instance of StatefulSet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is StatefulSet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === StatefulSet.__pulumiType;
    }

    /**
     * Standard stateful set's metadata. More info:
     * https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    public readonly metadata!: pulumi.Output<outputs.StatefulSetMetadata>;
    /**
     * Spec defines the desired identities of pods in this set.
     */
    public readonly spec!: pulumi.Output<outputs.StatefulSetSpec>;
    public readonly timeouts!: pulumi.Output<outputs.StatefulSetTimeouts | undefined>;
    /**
     * Wait for the rollout of the stateful set to complete. Defaults to true.
     */
    public readonly waitForRollout!: pulumi.Output<boolean | undefined>;

    /**
     * Create a StatefulSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StatefulSetArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: StatefulSetArgs | StatefulSetState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as StatefulSetState | undefined;
            resourceInputs["metadata"] = state ? state.metadata : undefined;
            resourceInputs["spec"] = state ? state.spec : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["waitForRollout"] = state ? state.waitForRollout : undefined;
        } else {
            const args = argsOrState as StatefulSetArgs | undefined;
            if ((!args || args.metadata === undefined) && !opts.urn) {
                throw new Error("Missing required property 'metadata'");
            }
            if ((!args || args.spec === undefined) && !opts.urn) {
                throw new Error("Missing required property 'spec'");
            }
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["spec"] = args ? args.spec : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["waitForRollout"] = args ? args.waitForRollout : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(StatefulSet.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering StatefulSet resources.
 */
export interface StatefulSetState {
    /**
     * Standard stateful set's metadata. More info:
     * https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    metadata?: pulumi.Input<inputs.StatefulSetMetadata>;
    /**
     * Spec defines the desired identities of pods in this set.
     */
    spec?: pulumi.Input<inputs.StatefulSetSpec>;
    timeouts?: pulumi.Input<inputs.StatefulSetTimeouts>;
    /**
     * Wait for the rollout of the stateful set to complete. Defaults to true.
     */
    waitForRollout?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a StatefulSet resource.
 */
export interface StatefulSetArgs {
    /**
     * Standard stateful set's metadata. More info:
     * https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    metadata: pulumi.Input<inputs.StatefulSetMetadata>;
    /**
     * Spec defines the desired identities of pods in this set.
     */
    spec: pulumi.Input<inputs.StatefulSetSpec>;
    timeouts?: pulumi.Input<inputs.StatefulSetTimeouts>;
    /**
     * Wait for the rollout of the stateful set to complete. Defaults to true.
     */
    waitForRollout?: pulumi.Input<boolean>;
}
