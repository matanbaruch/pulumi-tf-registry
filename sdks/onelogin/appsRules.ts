// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AppsRules extends pulumi.CustomResource {
    /**
     * Get an existing AppsRules resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AppsRulesState, opts?: pulumi.CustomResourceOptions): AppsRules {
        return new AppsRules(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'onelogin:index/appsRules:AppsRules';

    /**
     * Returns true if the given object is an instance of AppsRules.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AppsRules {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AppsRules.__pulumiType;
    }

    public readonly actions!: pulumi.Output<outputs.AppsRulesAction[] | undefined>;
    public readonly appsId!: pulumi.Output<string>;
    /**
     * An array of conditions that the user must meet in order for the rule to be applied.
     */
    public readonly conditions!: pulumi.Output<outputs.AppsRulesCondition[] | undefined>;
    /**
     * Indicates if the rule is enabled or not.
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * Indicates how conditions should be matched.
     */
    public readonly match!: pulumi.Output<string | undefined>;
    /**
     * Rule Name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Indicates the order of the rule. When `null` this will default to last position.
     */
    public readonly position!: pulumi.Output<number | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.AppsRulesTimeouts | undefined>;

    /**
     * Create a AppsRules resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AppsRulesArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AppsRulesArgs | AppsRulesState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AppsRulesState | undefined;
            resourceInputs["actions"] = state ? state.actions : undefined;
            resourceInputs["appsId"] = state ? state.appsId : undefined;
            resourceInputs["conditions"] = state ? state.conditions : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["match"] = state ? state.match : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["position"] = state ? state.position : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as AppsRulesArgs | undefined;
            if ((!args || args.appsId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'appsId'");
            }
            resourceInputs["actions"] = args ? args.actions : undefined;
            resourceInputs["appsId"] = args ? args.appsId : undefined;
            resourceInputs["conditions"] = args ? args.conditions : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["match"] = args ? args.match : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["position"] = args ? args.position : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AppsRules.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AppsRules resources.
 */
export interface AppsRulesState {
    actions?: pulumi.Input<pulumi.Input<inputs.AppsRulesAction>[]>;
    appsId?: pulumi.Input<string>;
    /**
     * An array of conditions that the user must meet in order for the rule to be applied.
     */
    conditions?: pulumi.Input<pulumi.Input<inputs.AppsRulesCondition>[]>;
    /**
     * Indicates if the rule is enabled or not.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Indicates how conditions should be matched.
     */
    match?: pulumi.Input<string>;
    /**
     * Rule Name
     */
    name?: pulumi.Input<string>;
    /**
     * Indicates the order of the rule. When `null` this will default to last position.
     */
    position?: pulumi.Input<number>;
    timeouts?: pulumi.Input<inputs.AppsRulesTimeouts>;
}

/**
 * The set of arguments for constructing a AppsRules resource.
 */
export interface AppsRulesArgs {
    actions?: pulumi.Input<pulumi.Input<inputs.AppsRulesAction>[]>;
    appsId: pulumi.Input<string>;
    /**
     * An array of conditions that the user must meet in order for the rule to be applied.
     */
    conditions?: pulumi.Input<pulumi.Input<inputs.AppsRulesCondition>[]>;
    /**
     * Indicates if the rule is enabled or not.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Indicates how conditions should be matched.
     */
    match?: pulumi.Input<string>;
    /**
     * Rule Name
     */
    name?: pulumi.Input<string>;
    /**
     * Indicates the order of the rule. When `null` this will default to last position.
     */
    position?: pulumi.Input<number>;
    timeouts?: pulumi.Input<inputs.AppsRulesTimeouts>;
}
