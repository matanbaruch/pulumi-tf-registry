// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class NamespaceMeshPolicy extends pulumi.CustomResource {
    /**
     * Get an existing NamespaceMeshPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NamespaceMeshPolicyState, opts?: pulumi.CustomResourceOptions): NamespaceMeshPolicy {
        return new NamespaceMeshPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'rafay:index/namespaceMeshPolicy:NamespaceMeshPolicy';

    /**
     * Returns true if the given object is an instance of NamespaceMeshPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NamespaceMeshPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NamespaceMeshPolicy.__pulumiType;
    }

    /**
     * Metadata of the namespace policy resource
     */
    public readonly metadata!: pulumi.Output<outputs.NamespaceMeshPolicyMetadata | undefined>;
    /**
     * Specification of the namespace policy resource
     */
    public readonly spec!: pulumi.Output<outputs.NamespaceMeshPolicySpec | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.NamespaceMeshPolicyTimeouts | undefined>;

    /**
     * Create a NamespaceMeshPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: NamespaceMeshPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NamespaceMeshPolicyArgs | NamespaceMeshPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NamespaceMeshPolicyState | undefined;
            resourceInputs["metadata"] = state ? state.metadata : undefined;
            resourceInputs["spec"] = state ? state.spec : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as NamespaceMeshPolicyArgs | undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["spec"] = args ? args.spec : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NamespaceMeshPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NamespaceMeshPolicy resources.
 */
export interface NamespaceMeshPolicyState {
    /**
     * Metadata of the namespace policy resource
     */
    metadata?: pulumi.Input<inputs.NamespaceMeshPolicyMetadata>;
    /**
     * Specification of the namespace policy resource
     */
    spec?: pulumi.Input<inputs.NamespaceMeshPolicySpec>;
    timeouts?: pulumi.Input<inputs.NamespaceMeshPolicyTimeouts>;
}

/**
 * The set of arguments for constructing a NamespaceMeshPolicy resource.
 */
export interface NamespaceMeshPolicyArgs {
    /**
     * Metadata of the namespace policy resource
     */
    metadata?: pulumi.Input<inputs.NamespaceMeshPolicyMetadata>;
    /**
     * Specification of the namespace policy resource
     */
    spec?: pulumi.Input<inputs.NamespaceMeshPolicySpec>;
    timeouts?: pulumi.Input<inputs.NamespaceMeshPolicyTimeouts>;
}
