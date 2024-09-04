// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DataplexLakeIamPolicy extends pulumi.CustomResource {
    /**
     * Get an existing DataplexLakeIamPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DataplexLakeIamPolicyState, opts?: pulumi.CustomResourceOptions): DataplexLakeIamPolicy {
        return new DataplexLakeIamPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/dataplexLakeIamPolicy:DataplexLakeIamPolicy';

    /**
     * Returns true if the given object is an instance of DataplexLakeIamPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DataplexLakeIamPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DataplexLakeIamPolicy.__pulumiType;
    }

    public /*out*/ readonly etag!: pulumi.Output<string>;
    public readonly lake!: pulumi.Output<string>;
    public readonly location!: pulumi.Output<string>;
    public readonly policyData!: pulumi.Output<string>;
    public readonly project!: pulumi.Output<string>;

    /**
     * Create a DataplexLakeIamPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DataplexLakeIamPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DataplexLakeIamPolicyArgs | DataplexLakeIamPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DataplexLakeIamPolicyState | undefined;
            resourceInputs["etag"] = state ? state.etag : undefined;
            resourceInputs["lake"] = state ? state.lake : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["policyData"] = state ? state.policyData : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
        } else {
            const args = argsOrState as DataplexLakeIamPolicyArgs | undefined;
            if ((!args || args.lake === undefined) && !opts.urn) {
                throw new Error("Missing required property 'lake'");
            }
            if ((!args || args.policyData === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policyData'");
            }
            resourceInputs["lake"] = args ? args.lake : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["policyData"] = args ? args.policyData : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["etag"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DataplexLakeIamPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DataplexLakeIamPolicy resources.
 */
export interface DataplexLakeIamPolicyState {
    etag?: pulumi.Input<string>;
    lake?: pulumi.Input<string>;
    location?: pulumi.Input<string>;
    policyData?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DataplexLakeIamPolicy resource.
 */
export interface DataplexLakeIamPolicyArgs {
    lake: pulumi.Input<string>;
    location?: pulumi.Input<string>;
    policyData: pulumi.Input<string>;
    project?: pulumi.Input<string>;
}
