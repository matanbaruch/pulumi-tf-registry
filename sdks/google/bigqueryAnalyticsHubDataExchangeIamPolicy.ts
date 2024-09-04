// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class BigqueryAnalyticsHubDataExchangeIamPolicy extends pulumi.CustomResource {
    /**
     * Get an existing BigqueryAnalyticsHubDataExchangeIamPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BigqueryAnalyticsHubDataExchangeIamPolicyState, opts?: pulumi.CustomResourceOptions): BigqueryAnalyticsHubDataExchangeIamPolicy {
        return new BigqueryAnalyticsHubDataExchangeIamPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/bigqueryAnalyticsHubDataExchangeIamPolicy:BigqueryAnalyticsHubDataExchangeIamPolicy';

    /**
     * Returns true if the given object is an instance of BigqueryAnalyticsHubDataExchangeIamPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BigqueryAnalyticsHubDataExchangeIamPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BigqueryAnalyticsHubDataExchangeIamPolicy.__pulumiType;
    }

    public readonly dataExchangeId!: pulumi.Output<string>;
    public /*out*/ readonly etag!: pulumi.Output<string>;
    public readonly location!: pulumi.Output<string>;
    public readonly policyData!: pulumi.Output<string>;
    public readonly project!: pulumi.Output<string>;

    /**
     * Create a BigqueryAnalyticsHubDataExchangeIamPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BigqueryAnalyticsHubDataExchangeIamPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BigqueryAnalyticsHubDataExchangeIamPolicyArgs | BigqueryAnalyticsHubDataExchangeIamPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as BigqueryAnalyticsHubDataExchangeIamPolicyState | undefined;
            resourceInputs["dataExchangeId"] = state ? state.dataExchangeId : undefined;
            resourceInputs["etag"] = state ? state.etag : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["policyData"] = state ? state.policyData : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
        } else {
            const args = argsOrState as BigqueryAnalyticsHubDataExchangeIamPolicyArgs | undefined;
            if ((!args || args.dataExchangeId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dataExchangeId'");
            }
            if ((!args || args.policyData === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policyData'");
            }
            resourceInputs["dataExchangeId"] = args ? args.dataExchangeId : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["policyData"] = args ? args.policyData : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["etag"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(BigqueryAnalyticsHubDataExchangeIamPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering BigqueryAnalyticsHubDataExchangeIamPolicy resources.
 */
export interface BigqueryAnalyticsHubDataExchangeIamPolicyState {
    dataExchangeId?: pulumi.Input<string>;
    etag?: pulumi.Input<string>;
    location?: pulumi.Input<string>;
    policyData?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a BigqueryAnalyticsHubDataExchangeIamPolicy resource.
 */
export interface BigqueryAnalyticsHubDataExchangeIamPolicyArgs {
    dataExchangeId: pulumi.Input<string>;
    location?: pulumi.Input<string>;
    policyData: pulumi.Input<string>;
    project?: pulumi.Input<string>;
}
