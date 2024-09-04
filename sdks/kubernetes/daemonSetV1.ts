// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DaemonSetV1 extends pulumi.CustomResource {
    /**
     * Get an existing DaemonSetV1 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DaemonSetV1State, opts?: pulumi.CustomResourceOptions): DaemonSetV1 {
        return new DaemonSetV1(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'kubernetes:index/daemonSetV1:DaemonSetV1';

    /**
     * Returns true if the given object is an instance of DaemonSetV1.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DaemonSetV1 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DaemonSetV1.__pulumiType;
    }

    /**
     * Standard daemonset's metadata. More info:
     * https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    public readonly metadata!: pulumi.Output<outputs.DaemonSetV1Metadata>;
    /**
     * Spec defines the specification of the desired behavior of the daemonset. More info:
     * https://v1-9.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.9/#daemonset-v1-apps
     */
    public readonly spec!: pulumi.Output<outputs.DaemonSetV1Spec>;
    public readonly timeouts!: pulumi.Output<outputs.DaemonSetV1Timeouts | undefined>;
    /**
     * Wait for the rollout of the deployment to complete. Defaults to true.
     */
    public readonly waitForRollout!: pulumi.Output<boolean | undefined>;

    /**
     * Create a DaemonSetV1 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DaemonSetV1Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DaemonSetV1Args | DaemonSetV1State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DaemonSetV1State | undefined;
            resourceInputs["metadata"] = state ? state.metadata : undefined;
            resourceInputs["spec"] = state ? state.spec : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["waitForRollout"] = state ? state.waitForRollout : undefined;
        } else {
            const args = argsOrState as DaemonSetV1Args | undefined;
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
        super(DaemonSetV1.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DaemonSetV1 resources.
 */
export interface DaemonSetV1State {
    /**
     * Standard daemonset's metadata. More info:
     * https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    metadata?: pulumi.Input<inputs.DaemonSetV1Metadata>;
    /**
     * Spec defines the specification of the desired behavior of the daemonset. More info:
     * https://v1-9.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.9/#daemonset-v1-apps
     */
    spec?: pulumi.Input<inputs.DaemonSetV1Spec>;
    timeouts?: pulumi.Input<inputs.DaemonSetV1Timeouts>;
    /**
     * Wait for the rollout of the deployment to complete. Defaults to true.
     */
    waitForRollout?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a DaemonSetV1 resource.
 */
export interface DaemonSetV1Args {
    /**
     * Standard daemonset's metadata. More info:
     * https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    metadata: pulumi.Input<inputs.DaemonSetV1Metadata>;
    /**
     * Spec defines the specification of the desired behavior of the daemonset. More info:
     * https://v1-9.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.9/#daemonset-v1-apps
     */
    spec: pulumi.Input<inputs.DaemonSetV1Spec>;
    timeouts?: pulumi.Input<inputs.DaemonSetV1Timeouts>;
    /**
     * Wait for the rollout of the deployment to complete. Defaults to true.
     */
    waitForRollout?: pulumi.Input<boolean>;
}
