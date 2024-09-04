// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Policy extends pulumi.CustomResource {
    /**
     * Get an existing Policy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PolicyState, opts?: pulumi.CustomResourceOptions): Policy {
        return new Policy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'bridgecrew:index/policy:Policy';

    /**
     * Returns true if the given object is an instance of Policy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Policy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Policy.__pulumiType;
    }

    /**
     * This associates the check to one or many compliance frameworks.
     */
    public readonly benchmarks!: pulumi.Output<outputs.PolicyBenchmarks | undefined>;
    /**
     * The Cloud provider this is for e.g. - aws, gcp, azure.
     */
    public readonly cloudProvider!: pulumi.Output<string>;
    /**
     * This is the name of the YAML policy file.
     */
    public readonly file!: pulumi.Output<string>;
    /**
     * Which IAC framework is this policy targeting.
     */
    public readonly frameworks!: pulumi.Output<string[]>;
    public /*out*/ readonly lastUpdated!: pulumi.Output<string>;
    /**
     * By providing the source code hash change to the YAML file can be caught and the resource updated.
     */
    public readonly sourceCodeHash!: pulumi.Output<string>;

    /**
     * Create a Policy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PolicyArgs | PolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PolicyState | undefined;
            resourceInputs["benchmarks"] = state ? state.benchmarks : undefined;
            resourceInputs["cloudProvider"] = state ? state.cloudProvider : undefined;
            resourceInputs["file"] = state ? state.file : undefined;
            resourceInputs["frameworks"] = state ? state.frameworks : undefined;
            resourceInputs["lastUpdated"] = state ? state.lastUpdated : undefined;
            resourceInputs["sourceCodeHash"] = state ? state.sourceCodeHash : undefined;
        } else {
            const args = argsOrState as PolicyArgs | undefined;
            if ((!args || args.cloudProvider === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cloudProvider'");
            }
            if ((!args || args.file === undefined) && !opts.urn) {
                throw new Error("Missing required property 'file'");
            }
            if ((!args || args.frameworks === undefined) && !opts.urn) {
                throw new Error("Missing required property 'frameworks'");
            }
            resourceInputs["benchmarks"] = args ? args.benchmarks : undefined;
            resourceInputs["cloudProvider"] = args ? args.cloudProvider : undefined;
            resourceInputs["file"] = args ? args.file : undefined;
            resourceInputs["frameworks"] = args ? args.frameworks : undefined;
            resourceInputs["sourceCodeHash"] = args ? args.sourceCodeHash : undefined;
            resourceInputs["lastUpdated"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Policy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Policy resources.
 */
export interface PolicyState {
    /**
     * This associates the check to one or many compliance frameworks.
     */
    benchmarks?: pulumi.Input<inputs.PolicyBenchmarks>;
    /**
     * The Cloud provider this is for e.g. - aws, gcp, azure.
     */
    cloudProvider?: pulumi.Input<string>;
    /**
     * This is the name of the YAML policy file.
     */
    file?: pulumi.Input<string>;
    /**
     * Which IAC framework is this policy targeting.
     */
    frameworks?: pulumi.Input<pulumi.Input<string>[]>;
    lastUpdated?: pulumi.Input<string>;
    /**
     * By providing the source code hash change to the YAML file can be caught and the resource updated.
     */
    sourceCodeHash?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Policy resource.
 */
export interface PolicyArgs {
    /**
     * This associates the check to one or many compliance frameworks.
     */
    benchmarks?: pulumi.Input<inputs.PolicyBenchmarks>;
    /**
     * The Cloud provider this is for e.g. - aws, gcp, azure.
     */
    cloudProvider: pulumi.Input<string>;
    /**
     * This is the name of the YAML policy file.
     */
    file: pulumi.Input<string>;
    /**
     * Which IAC framework is this policy targeting.
     */
    frameworks: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * By providing the source code hash change to the YAML file can be caught and the resource updated.
     */
    sourceCodeHash?: pulumi.Input<string>;
}
