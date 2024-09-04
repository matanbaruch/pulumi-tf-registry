// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class NetworkPolicyV1 extends pulumi.CustomResource {
    /**
     * Get an existing NetworkPolicyV1 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetworkPolicyV1State, opts?: pulumi.CustomResourceOptions): NetworkPolicyV1 {
        return new NetworkPolicyV1(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'kubernetes:index/networkPolicyV1:NetworkPolicyV1';

    /**
     * Returns true if the given object is an instance of NetworkPolicyV1.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkPolicyV1 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkPolicyV1.__pulumiType;
    }

    /**
     * Standard network policy's metadata. More info:
     * https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    public readonly metadata!: pulumi.Output<outputs.NetworkPolicyV1Metadata>;
    /**
     * spec represents the specification of the desired behavior for this NetworkPolicy.
     */
    public readonly spec!: pulumi.Output<outputs.NetworkPolicyV1Spec>;

    /**
     * Create a NetworkPolicyV1 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkPolicyV1Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NetworkPolicyV1Args | NetworkPolicyV1State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NetworkPolicyV1State | undefined;
            resourceInputs["metadata"] = state ? state.metadata : undefined;
            resourceInputs["spec"] = state ? state.spec : undefined;
        } else {
            const args = argsOrState as NetworkPolicyV1Args | undefined;
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
        super(NetworkPolicyV1.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NetworkPolicyV1 resources.
 */
export interface NetworkPolicyV1State {
    /**
     * Standard network policy's metadata. More info:
     * https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    metadata?: pulumi.Input<inputs.NetworkPolicyV1Metadata>;
    /**
     * spec represents the specification of the desired behavior for this NetworkPolicy.
     */
    spec?: pulumi.Input<inputs.NetworkPolicyV1Spec>;
}

/**
 * The set of arguments for constructing a NetworkPolicyV1 resource.
 */
export interface NetworkPolicyV1Args {
    /**
     * Standard network policy's metadata. More info:
     * https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    metadata: pulumi.Input<inputs.NetworkPolicyV1Metadata>;
    /**
     * spec represents the specification of the desired behavior for this NetworkPolicy.
     */
    spec: pulumi.Input<inputs.NetworkPolicyV1Spec>;
}
