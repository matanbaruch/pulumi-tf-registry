// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ActivateCentralizedPolicy extends pulumi.CustomResource {
    /**
     * Get an existing ActivateCentralizedPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ActivateCentralizedPolicyState, opts?: pulumi.CustomResourceOptions): ActivateCentralizedPolicy {
        return new ActivateCentralizedPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'sdwan:index/activateCentralizedPolicy:ActivateCentralizedPolicy';

    /**
     * Returns true if the given object is an instance of ActivateCentralizedPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ActivateCentralizedPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ActivateCentralizedPolicy.__pulumiType;
    }

    /**
     * The version of the centralized policy
     */
    public readonly version!: pulumi.Output<number | undefined>;

    /**
     * Create a ActivateCentralizedPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ActivateCentralizedPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ActivateCentralizedPolicyArgs | ActivateCentralizedPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ActivateCentralizedPolicyState | undefined;
            resourceInputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as ActivateCentralizedPolicyArgs | undefined;
            resourceInputs["version"] = args ? args.version : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ActivateCentralizedPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ActivateCentralizedPolicy resources.
 */
export interface ActivateCentralizedPolicyState {
    /**
     * The version of the centralized policy
     */
    version?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a ActivateCentralizedPolicy resource.
 */
export interface ActivateCentralizedPolicyArgs {
    /**
     * The version of the centralized policy
     */
    version?: pulumi.Input<number>;
}
