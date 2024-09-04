// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ComplexPolicy extends pulumi.CustomResource {
    /**
     * Get an existing ComplexPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ComplexPolicyState, opts?: pulumi.CustomResourceOptions): ComplexPolicy {
        return new ComplexPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'bridgecrew:index/complexPolicy:ComplexPolicy';

    /**
     * Returns true if the given object is an instance of ComplexPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ComplexPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ComplexPolicy.__pulumiType;
    }

    /**
     * This associates the check to one or many compliance frameworks.
     */
    public readonly benchmarks!: pulumi.Output<outputs.ComplexPolicyBenchmarks | undefined>;
    /**
     * Check category for grouping similar checks.
     */
    public readonly category!: pulumi.Output<string>;
    /**
     * The Cloud provider this is for e.g. - aws, gcp, azure.
     */
    public readonly cloudProvider!: pulumi.Output<string>;
    /**
     * The actual query.
     */
    public readonly conditionquery!: pulumi.Output<outputs.ComplexPolicyConditionquery | undefined>;
    /**
     * Which IAC framework is this policy targeting.
     */
    public readonly frameworks!: pulumi.Output<string[]>;
    /**
     * A detailed description helps you understand why the check was written and should include details on how to fix the
     * violation. The field must more than 50 chars in it, to encourage detail.
     */
    public readonly guidelines!: pulumi.Output<string | undefined>;
    public /*out*/ readonly lastUpdated!: pulumi.Output<string>;
    /**
     * Severity category allows you to indicate importance and this value can determine build or PR failure in the platform.
     */
    public readonly severity!: pulumi.Output<string>;
    /**
     * The title of the check, needs to be longer than 20 chars - an effort to ensure detailed names.
     */
    public readonly title!: pulumi.Output<string>;

    /**
     * Create a ComplexPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ComplexPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ComplexPolicyArgs | ComplexPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ComplexPolicyState | undefined;
            resourceInputs["benchmarks"] = state ? state.benchmarks : undefined;
            resourceInputs["category"] = state ? state.category : undefined;
            resourceInputs["cloudProvider"] = state ? state.cloudProvider : undefined;
            resourceInputs["conditionquery"] = state ? state.conditionquery : undefined;
            resourceInputs["frameworks"] = state ? state.frameworks : undefined;
            resourceInputs["guidelines"] = state ? state.guidelines : undefined;
            resourceInputs["lastUpdated"] = state ? state.lastUpdated : undefined;
            resourceInputs["severity"] = state ? state.severity : undefined;
            resourceInputs["title"] = state ? state.title : undefined;
        } else {
            const args = argsOrState as ComplexPolicyArgs | undefined;
            if ((!args || args.category === undefined) && !opts.urn) {
                throw new Error("Missing required property 'category'");
            }
            if ((!args || args.cloudProvider === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cloudProvider'");
            }
            if ((!args || args.frameworks === undefined) && !opts.urn) {
                throw new Error("Missing required property 'frameworks'");
            }
            if ((!args || args.severity === undefined) && !opts.urn) {
                throw new Error("Missing required property 'severity'");
            }
            if ((!args || args.title === undefined) && !opts.urn) {
                throw new Error("Missing required property 'title'");
            }
            resourceInputs["benchmarks"] = args ? args.benchmarks : undefined;
            resourceInputs["category"] = args ? args.category : undefined;
            resourceInputs["cloudProvider"] = args ? args.cloudProvider : undefined;
            resourceInputs["conditionquery"] = args ? args.conditionquery : undefined;
            resourceInputs["frameworks"] = args ? args.frameworks : undefined;
            resourceInputs["guidelines"] = args ? args.guidelines : undefined;
            resourceInputs["severity"] = args ? args.severity : undefined;
            resourceInputs["title"] = args ? args.title : undefined;
            resourceInputs["lastUpdated"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ComplexPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ComplexPolicy resources.
 */
export interface ComplexPolicyState {
    /**
     * This associates the check to one or many compliance frameworks.
     */
    benchmarks?: pulumi.Input<inputs.ComplexPolicyBenchmarks>;
    /**
     * Check category for grouping similar checks.
     */
    category?: pulumi.Input<string>;
    /**
     * The Cloud provider this is for e.g. - aws, gcp, azure.
     */
    cloudProvider?: pulumi.Input<string>;
    /**
     * The actual query.
     */
    conditionquery?: pulumi.Input<inputs.ComplexPolicyConditionquery>;
    /**
     * Which IAC framework is this policy targeting.
     */
    frameworks?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A detailed description helps you understand why the check was written and should include details on how to fix the
     * violation. The field must more than 50 chars in it, to encourage detail.
     */
    guidelines?: pulumi.Input<string>;
    lastUpdated?: pulumi.Input<string>;
    /**
     * Severity category allows you to indicate importance and this value can determine build or PR failure in the platform.
     */
    severity?: pulumi.Input<string>;
    /**
     * The title of the check, needs to be longer than 20 chars - an effort to ensure detailed names.
     */
    title?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ComplexPolicy resource.
 */
export interface ComplexPolicyArgs {
    /**
     * This associates the check to one or many compliance frameworks.
     */
    benchmarks?: pulumi.Input<inputs.ComplexPolicyBenchmarks>;
    /**
     * Check category for grouping similar checks.
     */
    category: pulumi.Input<string>;
    /**
     * The Cloud provider this is for e.g. - aws, gcp, azure.
     */
    cloudProvider: pulumi.Input<string>;
    /**
     * The actual query.
     */
    conditionquery?: pulumi.Input<inputs.ComplexPolicyConditionquery>;
    /**
     * Which IAC framework is this policy targeting.
     */
    frameworks: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A detailed description helps you understand why the check was written and should include details on how to fix the
     * violation. The field must more than 50 chars in it, to encourage detail.
     */
    guidelines?: pulumi.Input<string>;
    /**
     * Severity category allows you to indicate importance and this value can determine build or PR failure in the platform.
     */
    severity: pulumi.Input<string>;
    /**
     * The title of the check, needs to be longer than 20 chars - an effort to ensure detailed names.
     */
    title: pulumi.Input<string>;
}
