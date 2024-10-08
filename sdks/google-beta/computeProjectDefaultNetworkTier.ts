// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ComputeProjectDefaultNetworkTier extends pulumi.CustomResource {
    /**
     * Get an existing ComputeProjectDefaultNetworkTier resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ComputeProjectDefaultNetworkTierState, opts?: pulumi.CustomResourceOptions): ComputeProjectDefaultNetworkTier {
        return new ComputeProjectDefaultNetworkTier(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/computeProjectDefaultNetworkTier:ComputeProjectDefaultNetworkTier';

    /**
     * Returns true if the given object is an instance of ComputeProjectDefaultNetworkTier.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ComputeProjectDefaultNetworkTier {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ComputeProjectDefaultNetworkTier.__pulumiType;
    }

    /**
     * The default network tier to be configured for the project. This field can take the following values: PREMIUM or
     * STANDARD.
     */
    public readonly networkTier!: pulumi.Output<string>;
    /**
     * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
     */
    public readonly project!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.ComputeProjectDefaultNetworkTierTimeouts | undefined>;

    /**
     * Create a ComputeProjectDefaultNetworkTier resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ComputeProjectDefaultNetworkTierArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ComputeProjectDefaultNetworkTierArgs | ComputeProjectDefaultNetworkTierState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ComputeProjectDefaultNetworkTierState | undefined;
            resourceInputs["networkTier"] = state ? state.networkTier : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ComputeProjectDefaultNetworkTierArgs | undefined;
            if ((!args || args.networkTier === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkTier'");
            }
            resourceInputs["networkTier"] = args ? args.networkTier : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ComputeProjectDefaultNetworkTier.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ComputeProjectDefaultNetworkTier resources.
 */
export interface ComputeProjectDefaultNetworkTierState {
    /**
     * The default network tier to be configured for the project. This field can take the following values: PREMIUM or
     * STANDARD.
     */
    networkTier?: pulumi.Input<string>;
    /**
     * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
     */
    project?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ComputeProjectDefaultNetworkTierTimeouts>;
}

/**
 * The set of arguments for constructing a ComputeProjectDefaultNetworkTier resource.
 */
export interface ComputeProjectDefaultNetworkTierArgs {
    /**
     * The default network tier to be configured for the project. This field can take the following values: PREMIUM or
     * STANDARD.
     */
    networkTier: pulumi.Input<string>;
    /**
     * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
     */
    project?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ComputeProjectDefaultNetworkTierTimeouts>;
}
