// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CiImageCompliancePolicy extends pulumi.CustomResource {
    /**
     * Get an existing CiImageCompliancePolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CiImageCompliancePolicyState, opts?: pulumi.CustomResourceOptions): CiImageCompliancePolicy {
        return new CiImageCompliancePolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'prismacloudcompute:index/ciImageCompliancePolicy:CiImageCompliancePolicy';

    /**
     * Returns true if the given object is an instance of CiImageCompliancePolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CiImageCompliancePolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CiImageCompliancePolicy.__pulumiType;
    }

    /**
     * Rules that make up the policy.
     */
    public readonly rules!: pulumi.Output<outputs.CiImageCompliancePolicyRule[] | undefined>;

    /**
     * Create a CiImageCompliancePolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: CiImageCompliancePolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CiImageCompliancePolicyArgs | CiImageCompliancePolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CiImageCompliancePolicyState | undefined;
            resourceInputs["rules"] = state ? state.rules : undefined;
        } else {
            const args = argsOrState as CiImageCompliancePolicyArgs | undefined;
            resourceInputs["rules"] = args ? args.rules : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CiImageCompliancePolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CiImageCompliancePolicy resources.
 */
export interface CiImageCompliancePolicyState {
    /**
     * Rules that make up the policy.
     */
    rules?: pulumi.Input<pulumi.Input<inputs.CiImageCompliancePolicyRule>[]>;
}

/**
 * The set of arguments for constructing a CiImageCompliancePolicy resource.
 */
export interface CiImageCompliancePolicyArgs {
    /**
     * Rules that make up the policy.
     */
    rules?: pulumi.Input<pulumi.Input<inputs.CiImageCompliancePolicyRule>[]>;
}
