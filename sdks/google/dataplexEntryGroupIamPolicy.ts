// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DataplexEntryGroupIamPolicy extends pulumi.CustomResource {
    /**
     * Get an existing DataplexEntryGroupIamPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DataplexEntryGroupIamPolicyState, opts?: pulumi.CustomResourceOptions): DataplexEntryGroupIamPolicy {
        return new DataplexEntryGroupIamPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/dataplexEntryGroupIamPolicy:DataplexEntryGroupIamPolicy';

    /**
     * Returns true if the given object is an instance of DataplexEntryGroupIamPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DataplexEntryGroupIamPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DataplexEntryGroupIamPolicy.__pulumiType;
    }

    public readonly entryGroupId!: pulumi.Output<string>;
    public /*out*/ readonly etag!: pulumi.Output<string>;
    public readonly location!: pulumi.Output<string>;
    public readonly policyData!: pulumi.Output<string>;
    public readonly project!: pulumi.Output<string>;

    /**
     * Create a DataplexEntryGroupIamPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DataplexEntryGroupIamPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DataplexEntryGroupIamPolicyArgs | DataplexEntryGroupIamPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DataplexEntryGroupIamPolicyState | undefined;
            resourceInputs["entryGroupId"] = state ? state.entryGroupId : undefined;
            resourceInputs["etag"] = state ? state.etag : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["policyData"] = state ? state.policyData : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
        } else {
            const args = argsOrState as DataplexEntryGroupIamPolicyArgs | undefined;
            if ((!args || args.entryGroupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'entryGroupId'");
            }
            if ((!args || args.policyData === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policyData'");
            }
            resourceInputs["entryGroupId"] = args ? args.entryGroupId : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["policyData"] = args ? args.policyData : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["etag"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DataplexEntryGroupIamPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DataplexEntryGroupIamPolicy resources.
 */
export interface DataplexEntryGroupIamPolicyState {
    entryGroupId?: pulumi.Input<string>;
    etag?: pulumi.Input<string>;
    location?: pulumi.Input<string>;
    policyData?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DataplexEntryGroupIamPolicy resource.
 */
export interface DataplexEntryGroupIamPolicyArgs {
    entryGroupId: pulumi.Input<string>;
    location?: pulumi.Input<string>;
    policyData: pulumi.Input<string>;
    project?: pulumi.Input<string>;
}
