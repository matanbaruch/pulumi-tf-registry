// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SmartRulesRewrite extends pulumi.CustomResource {
    /**
     * Get an existing SmartRulesRewrite resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SmartRulesRewriteState, opts?: pulumi.CustomResourceOptions): SmartRulesRewrite {
        return new SmartRulesRewrite(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'gocache:index/smartRulesRewrite:SmartRulesRewrite';

    /**
     * Returns true if the given object is an instance of SmartRulesRewrite.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SmartRulesRewrite {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SmartRulesRewrite.__pulumiType;
    }

    public /*out*/ readonly bulkId!: pulumi.Output<number>;
    public readonly domain!: pulumi.Output<string>;
    public readonly smartRules!: pulumi.Output<outputs.SmartRulesRewriteSmartRule[]>;

    /**
     * Create a SmartRulesRewrite resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SmartRulesRewriteArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SmartRulesRewriteArgs | SmartRulesRewriteState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SmartRulesRewriteState | undefined;
            resourceInputs["bulkId"] = state ? state.bulkId : undefined;
            resourceInputs["domain"] = state ? state.domain : undefined;
            resourceInputs["smartRules"] = state ? state.smartRules : undefined;
        } else {
            const args = argsOrState as SmartRulesRewriteArgs | undefined;
            if ((!args || args.domain === undefined) && !opts.urn) {
                throw new Error("Missing required property 'domain'");
            }
            if ((!args || args.smartRules === undefined) && !opts.urn) {
                throw new Error("Missing required property 'smartRules'");
            }
            resourceInputs["domain"] = args ? args.domain : undefined;
            resourceInputs["smartRules"] = args ? args.smartRules : undefined;
            resourceInputs["bulkId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SmartRulesRewrite.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SmartRulesRewrite resources.
 */
export interface SmartRulesRewriteState {
    bulkId?: pulumi.Input<number>;
    domain?: pulumi.Input<string>;
    smartRules?: pulumi.Input<pulumi.Input<inputs.SmartRulesRewriteSmartRule>[]>;
}

/**
 * The set of arguments for constructing a SmartRulesRewrite resource.
 */
export interface SmartRulesRewriteArgs {
    domain: pulumi.Input<string>;
    smartRules: pulumi.Input<pulumi.Input<inputs.SmartRulesRewriteSmartRule>[]>;
}
