// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SesMailManagerRuleSet extends pulumi.CustomResource {
    /**
     * Get an existing SesMailManagerRuleSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SesMailManagerRuleSetState, opts?: pulumi.CustomResourceOptions): SesMailManagerRuleSet {
        return new SesMailManagerRuleSet(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/sesMailManagerRuleSet:SesMailManagerRuleSet';

    /**
     * Returns true if the given object is an instance of SesMailManagerRuleSet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SesMailManagerRuleSet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SesMailManagerRuleSet.__pulumiType;
    }

    public /*out*/ readonly ruleSetArn!: pulumi.Output<string>;
    public /*out*/ readonly ruleSetId!: pulumi.Output<string>;
    public readonly ruleSetName!: pulumi.Output<string>;
    public readonly rules!: pulumi.Output<outputs.SesMailManagerRuleSetRule[]>;
    public readonly tags!: pulumi.Output<outputs.SesMailManagerRuleSetTag[]>;

    /**
     * Create a SesMailManagerRuleSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SesMailManagerRuleSetArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SesMailManagerRuleSetArgs | SesMailManagerRuleSetState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SesMailManagerRuleSetState | undefined;
            resourceInputs["ruleSetArn"] = state ? state.ruleSetArn : undefined;
            resourceInputs["ruleSetId"] = state ? state.ruleSetId : undefined;
            resourceInputs["ruleSetName"] = state ? state.ruleSetName : undefined;
            resourceInputs["rules"] = state ? state.rules : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as SesMailManagerRuleSetArgs | undefined;
            if ((!args || args.rules === undefined) && !opts.urn) {
                throw new Error("Missing required property 'rules'");
            }
            resourceInputs["ruleSetName"] = args ? args.ruleSetName : undefined;
            resourceInputs["rules"] = args ? args.rules : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["ruleSetArn"] = undefined /*out*/;
            resourceInputs["ruleSetId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SesMailManagerRuleSet.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SesMailManagerRuleSet resources.
 */
export interface SesMailManagerRuleSetState {
    ruleSetArn?: pulumi.Input<string>;
    ruleSetId?: pulumi.Input<string>;
    ruleSetName?: pulumi.Input<string>;
    rules?: pulumi.Input<pulumi.Input<inputs.SesMailManagerRuleSetRule>[]>;
    tags?: pulumi.Input<pulumi.Input<inputs.SesMailManagerRuleSetTag>[]>;
}

/**
 * The set of arguments for constructing a SesMailManagerRuleSet resource.
 */
export interface SesMailManagerRuleSetArgs {
    ruleSetName?: pulumi.Input<string>;
    rules: pulumi.Input<pulumi.Input<inputs.SesMailManagerRuleSetRule>[]>;
    tags?: pulumi.Input<pulumi.Input<inputs.SesMailManagerRuleSetTag>[]>;
}
