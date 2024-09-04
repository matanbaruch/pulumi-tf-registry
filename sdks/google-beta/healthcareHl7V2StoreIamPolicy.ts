// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class HealthcareHl7V2StoreIamPolicy extends pulumi.CustomResource {
    /**
     * Get an existing HealthcareHl7V2StoreIamPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: HealthcareHl7V2StoreIamPolicyState, opts?: pulumi.CustomResourceOptions): HealthcareHl7V2StoreIamPolicy {
        return new HealthcareHl7V2StoreIamPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/healthcareHl7V2StoreIamPolicy:HealthcareHl7V2StoreIamPolicy';

    /**
     * Returns true if the given object is an instance of HealthcareHl7V2StoreIamPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is HealthcareHl7V2StoreIamPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === HealthcareHl7V2StoreIamPolicy.__pulumiType;
    }

    public /*out*/ readonly etag!: pulumi.Output<string>;
    public readonly hl7V2StoreId!: pulumi.Output<string>;
    public readonly policyData!: pulumi.Output<string>;

    /**
     * Create a HealthcareHl7V2StoreIamPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HealthcareHl7V2StoreIamPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: HealthcareHl7V2StoreIamPolicyArgs | HealthcareHl7V2StoreIamPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as HealthcareHl7V2StoreIamPolicyState | undefined;
            resourceInputs["etag"] = state ? state.etag : undefined;
            resourceInputs["hl7V2StoreId"] = state ? state.hl7V2StoreId : undefined;
            resourceInputs["policyData"] = state ? state.policyData : undefined;
        } else {
            const args = argsOrState as HealthcareHl7V2StoreIamPolicyArgs | undefined;
            if ((!args || args.hl7V2StoreId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'hl7V2StoreId'");
            }
            if ((!args || args.policyData === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policyData'");
            }
            resourceInputs["hl7V2StoreId"] = args ? args.hl7V2StoreId : undefined;
            resourceInputs["policyData"] = args ? args.policyData : undefined;
            resourceInputs["etag"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(HealthcareHl7V2StoreIamPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering HealthcareHl7V2StoreIamPolicy resources.
 */
export interface HealthcareHl7V2StoreIamPolicyState {
    etag?: pulumi.Input<string>;
    hl7V2StoreId?: pulumi.Input<string>;
    policyData?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a HealthcareHl7V2StoreIamPolicy resource.
 */
export interface HealthcareHl7V2StoreIamPolicyArgs {
    hl7V2StoreId: pulumi.Input<string>;
    policyData: pulumi.Input<string>;
}
