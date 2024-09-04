// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ContainerCompliancePolicy extends pulumi.CustomResource {
    /**
     * Get an existing ContainerCompliancePolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ContainerCompliancePolicyState, opts?: pulumi.CustomResourceOptions): ContainerCompliancePolicy {
        return new ContainerCompliancePolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'prismacloudcompute:index/containerCompliancePolicy:ContainerCompliancePolicy';

    /**
     * Returns true if the given object is an instance of ContainerCompliancePolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ContainerCompliancePolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ContainerCompliancePolicy.__pulumiType;
    }

    /**
     * Rules that make up the policy.
     */
    public readonly rules!: pulumi.Output<outputs.ContainerCompliancePolicyRule[] | undefined>;

    /**
     * Create a ContainerCompliancePolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ContainerCompliancePolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ContainerCompliancePolicyArgs | ContainerCompliancePolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ContainerCompliancePolicyState | undefined;
            resourceInputs["rules"] = state ? state.rules : undefined;
        } else {
            const args = argsOrState as ContainerCompliancePolicyArgs | undefined;
            resourceInputs["rules"] = args ? args.rules : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ContainerCompliancePolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ContainerCompliancePolicy resources.
 */
export interface ContainerCompliancePolicyState {
    /**
     * Rules that make up the policy.
     */
    rules?: pulumi.Input<pulumi.Input<inputs.ContainerCompliancePolicyRule>[]>;
}

/**
 * The set of arguments for constructing a ContainerCompliancePolicy resource.
 */
export interface ContainerCompliancePolicyArgs {
    /**
     * Rules that make up the policy.
     */
    rules?: pulumi.Input<pulumi.Input<inputs.ContainerCompliancePolicyRule>[]>;
}
