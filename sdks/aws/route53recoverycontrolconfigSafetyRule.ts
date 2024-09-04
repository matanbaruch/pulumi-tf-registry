// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Route53recoverycontrolconfigSafetyRule extends pulumi.CustomResource {
    /**
     * Get an existing Route53recoverycontrolconfigSafetyRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Route53recoverycontrolconfigSafetyRuleState, opts?: pulumi.CustomResourceOptions): Route53recoverycontrolconfigSafetyRule {
        return new Route53recoverycontrolconfigSafetyRule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/route53recoverycontrolconfigSafetyRule:Route53recoverycontrolconfigSafetyRule';

    /**
     * Returns true if the given object is an instance of Route53recoverycontrolconfigSafetyRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Route53recoverycontrolconfigSafetyRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Route53recoverycontrolconfigSafetyRule.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly assertedControls!: pulumi.Output<string[] | undefined>;
    public readonly controlPanelArn!: pulumi.Output<string>;
    public readonly gatingControls!: pulumi.Output<string[] | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly ruleConfig!: pulumi.Output<outputs.Route53recoverycontrolconfigSafetyRuleRuleConfig>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    public readonly targetControls!: pulumi.Output<string[] | undefined>;
    public readonly waitPeriodMs!: pulumi.Output<number>;

    /**
     * Create a Route53recoverycontrolconfigSafetyRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: Route53recoverycontrolconfigSafetyRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Route53recoverycontrolconfigSafetyRuleArgs | Route53recoverycontrolconfigSafetyRuleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Route53recoverycontrolconfigSafetyRuleState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["assertedControls"] = state ? state.assertedControls : undefined;
            resourceInputs["controlPanelArn"] = state ? state.controlPanelArn : undefined;
            resourceInputs["gatingControls"] = state ? state.gatingControls : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["ruleConfig"] = state ? state.ruleConfig : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["targetControls"] = state ? state.targetControls : undefined;
            resourceInputs["waitPeriodMs"] = state ? state.waitPeriodMs : undefined;
        } else {
            const args = argsOrState as Route53recoverycontrolconfigSafetyRuleArgs | undefined;
            if ((!args || args.controlPanelArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'controlPanelArn'");
            }
            if ((!args || args.ruleConfig === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ruleConfig'");
            }
            if ((!args || args.waitPeriodMs === undefined) && !opts.urn) {
                throw new Error("Missing required property 'waitPeriodMs'");
            }
            resourceInputs["assertedControls"] = args ? args.assertedControls : undefined;
            resourceInputs["controlPanelArn"] = args ? args.controlPanelArn : undefined;
            resourceInputs["gatingControls"] = args ? args.gatingControls : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["ruleConfig"] = args ? args.ruleConfig : undefined;
            resourceInputs["targetControls"] = args ? args.targetControls : undefined;
            resourceInputs["waitPeriodMs"] = args ? args.waitPeriodMs : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Route53recoverycontrolconfigSafetyRule.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Route53recoverycontrolconfigSafetyRule resources.
 */
export interface Route53recoverycontrolconfigSafetyRuleState {
    arn?: pulumi.Input<string>;
    assertedControls?: pulumi.Input<pulumi.Input<string>[]>;
    controlPanelArn?: pulumi.Input<string>;
    gatingControls?: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    ruleConfig?: pulumi.Input<inputs.Route53recoverycontrolconfigSafetyRuleRuleConfig>;
    status?: pulumi.Input<string>;
    targetControls?: pulumi.Input<pulumi.Input<string>[]>;
    waitPeriodMs?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a Route53recoverycontrolconfigSafetyRule resource.
 */
export interface Route53recoverycontrolconfigSafetyRuleArgs {
    assertedControls?: pulumi.Input<pulumi.Input<string>[]>;
    controlPanelArn: pulumi.Input<string>;
    gatingControls?: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    ruleConfig: pulumi.Input<inputs.Route53recoverycontrolconfigSafetyRuleRuleConfig>;
    targetControls?: pulumi.Input<pulumi.Input<string>[]>;
    waitPeriodMs: pulumi.Input<number>;
}
