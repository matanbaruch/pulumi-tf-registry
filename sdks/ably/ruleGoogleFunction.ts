// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class RuleGoogleFunction extends pulumi.CustomResource {
    /**
     * Get an existing RuleGoogleFunction resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RuleGoogleFunctionState, opts?: pulumi.CustomResourceOptions): RuleGoogleFunction {
        return new RuleGoogleFunction(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ably:index/ruleGoogleFunction:RuleGoogleFunction';

    /**
     * Returns true if the given object is an instance of RuleGoogleFunction.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RuleGoogleFunction {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RuleGoogleFunction.__pulumiType;
    }

    /**
     * The Ably application ID.
     */
    public readonly appId!: pulumi.Output<string>;
    /**
     * This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint
     * specified by the rule
     */
    public readonly requestMode!: pulumi.Output<string>;
    /**
     * object (rule_source)
     */
    public readonly source!: pulumi.Output<outputs.RuleGoogleFunctionSource>;
    /**
     * The status of the rule. Rules can be enabled or disabled.
     */
    public readonly status!: pulumi.Output<string | undefined>;
    /**
     * object (rule_source)
     */
    public readonly target!: pulumi.Output<outputs.RuleGoogleFunctionTarget>;

    /**
     * Create a RuleGoogleFunction resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RuleGoogleFunctionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RuleGoogleFunctionArgs | RuleGoogleFunctionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RuleGoogleFunctionState | undefined;
            resourceInputs["appId"] = state ? state.appId : undefined;
            resourceInputs["requestMode"] = state ? state.requestMode : undefined;
            resourceInputs["source"] = state ? state.source : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["target"] = state ? state.target : undefined;
        } else {
            const args = argsOrState as RuleGoogleFunctionArgs | undefined;
            if ((!args || args.appId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'appId'");
            }
            if ((!args || args.source === undefined) && !opts.urn) {
                throw new Error("Missing required property 'source'");
            }
            if ((!args || args.target === undefined) && !opts.urn) {
                throw new Error("Missing required property 'target'");
            }
            resourceInputs["appId"] = args ? args.appId : undefined;
            resourceInputs["requestMode"] = args ? args.requestMode : undefined;
            resourceInputs["source"] = args ? args.source : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["target"] = args ? args.target : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RuleGoogleFunction.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RuleGoogleFunction resources.
 */
export interface RuleGoogleFunctionState {
    /**
     * The Ably application ID.
     */
    appId?: pulumi.Input<string>;
    /**
     * This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint
     * specified by the rule
     */
    requestMode?: pulumi.Input<string>;
    /**
     * object (rule_source)
     */
    source?: pulumi.Input<inputs.RuleGoogleFunctionSource>;
    /**
     * The status of the rule. Rules can be enabled or disabled.
     */
    status?: pulumi.Input<string>;
    /**
     * object (rule_source)
     */
    target?: pulumi.Input<inputs.RuleGoogleFunctionTarget>;
}

/**
 * The set of arguments for constructing a RuleGoogleFunction resource.
 */
export interface RuleGoogleFunctionArgs {
    /**
     * The Ably application ID.
     */
    appId: pulumi.Input<string>;
    /**
     * This is Single Request mode or Batch Request mode. Single Request mode sends each event separately to the endpoint
     * specified by the rule
     */
    requestMode?: pulumi.Input<string>;
    /**
     * object (rule_source)
     */
    source: pulumi.Input<inputs.RuleGoogleFunctionSource>;
    /**
     * The status of the rule. Rules can be enabled or disabled.
     */
    status?: pulumi.Input<string>;
    /**
     * object (rule_source)
     */
    target: pulumi.Input<inputs.RuleGoogleFunctionTarget>;
}
