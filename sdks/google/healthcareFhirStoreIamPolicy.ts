// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class HealthcareFhirStoreIamPolicy extends pulumi.CustomResource {
    /**
     * Get an existing HealthcareFhirStoreIamPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: HealthcareFhirStoreIamPolicyState, opts?: pulumi.CustomResourceOptions): HealthcareFhirStoreIamPolicy {
        return new HealthcareFhirStoreIamPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/healthcareFhirStoreIamPolicy:HealthcareFhirStoreIamPolicy';

    /**
     * Returns true if the given object is an instance of HealthcareFhirStoreIamPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is HealthcareFhirStoreIamPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === HealthcareFhirStoreIamPolicy.__pulumiType;
    }

    public /*out*/ readonly etag!: pulumi.Output<string>;
    public readonly fhirStoreId!: pulumi.Output<string>;
    public readonly policyData!: pulumi.Output<string>;

    /**
     * Create a HealthcareFhirStoreIamPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HealthcareFhirStoreIamPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: HealthcareFhirStoreIamPolicyArgs | HealthcareFhirStoreIamPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as HealthcareFhirStoreIamPolicyState | undefined;
            resourceInputs["etag"] = state ? state.etag : undefined;
            resourceInputs["fhirStoreId"] = state ? state.fhirStoreId : undefined;
            resourceInputs["policyData"] = state ? state.policyData : undefined;
        } else {
            const args = argsOrState as HealthcareFhirStoreIamPolicyArgs | undefined;
            if ((!args || args.fhirStoreId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'fhirStoreId'");
            }
            if ((!args || args.policyData === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policyData'");
            }
            resourceInputs["fhirStoreId"] = args ? args.fhirStoreId : undefined;
            resourceInputs["policyData"] = args ? args.policyData : undefined;
            resourceInputs["etag"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(HealthcareFhirStoreIamPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering HealthcareFhirStoreIamPolicy resources.
 */
export interface HealthcareFhirStoreIamPolicyState {
    etag?: pulumi.Input<string>;
    fhirStoreId?: pulumi.Input<string>;
    policyData?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a HealthcareFhirStoreIamPolicy resource.
 */
export interface HealthcareFhirStoreIamPolicyArgs {
    fhirStoreId: pulumi.Input<string>;
    policyData: pulumi.Input<string>;
}
