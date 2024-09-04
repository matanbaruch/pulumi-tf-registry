// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class WafRuleGroup extends pulumi.CustomResource {
    /**
     * Get an existing WafRuleGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WafRuleGroupState, opts?: pulumi.CustomResourceOptions): WafRuleGroup {
        return new WafRuleGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/wafRuleGroup:WafRuleGroup';

    /**
     * Returns true if the given object is an instance of WafRuleGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WafRuleGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WafRuleGroup.__pulumiType;
    }

    public readonly activatedRules!: pulumi.Output<outputs.WafRuleGroupActivatedRule[] | undefined>;
    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly metricName!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tagsAll!: pulumi.Output<{[key: string]: string}>;

    /**
     * Create a WafRuleGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WafRuleGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WafRuleGroupArgs | WafRuleGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WafRuleGroupState | undefined;
            resourceInputs["activatedRules"] = state ? state.activatedRules : undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["metricName"] = state ? state.metricName : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
        } else {
            const args = argsOrState as WafRuleGroupArgs | undefined;
            if ((!args || args.metricName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'metricName'");
            }
            resourceInputs["activatedRules"] = args ? args.activatedRules : undefined;
            resourceInputs["metricName"] = args ? args.metricName : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tagsAll"] = args ? args.tagsAll : undefined;
            resourceInputs["arn"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(WafRuleGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering WafRuleGroup resources.
 */
export interface WafRuleGroupState {
    activatedRules?: pulumi.Input<pulumi.Input<inputs.WafRuleGroupActivatedRule>[]>;
    arn?: pulumi.Input<string>;
    metricName?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The set of arguments for constructing a WafRuleGroup resource.
 */
export interface WafRuleGroupArgs {
    activatedRules?: pulumi.Input<pulumi.Input<inputs.WafRuleGroupActivatedRule>[]>;
    metricName: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
