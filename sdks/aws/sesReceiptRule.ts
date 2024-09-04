// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SesReceiptRule extends pulumi.CustomResource {
    /**
     * Get an existing SesReceiptRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SesReceiptRuleState, opts?: pulumi.CustomResourceOptions): SesReceiptRule {
        return new SesReceiptRule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/sesReceiptRule:SesReceiptRule';

    /**
     * Returns true if the given object is an instance of SesReceiptRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SesReceiptRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SesReceiptRule.__pulumiType;
    }

    public readonly addHeaderActions!: pulumi.Output<outputs.SesReceiptRuleAddHeaderAction[] | undefined>;
    public readonly after!: pulumi.Output<string | undefined>;
    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly bounceActions!: pulumi.Output<outputs.SesReceiptRuleBounceAction[] | undefined>;
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    public readonly lambdaActions!: pulumi.Output<outputs.SesReceiptRuleLambdaAction[] | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly recipients!: pulumi.Output<string[] | undefined>;
    public readonly ruleSetName!: pulumi.Output<string>;
    public readonly s3Actions!: pulumi.Output<outputs.SesReceiptRuleS3Action[] | undefined>;
    public readonly scanEnabled!: pulumi.Output<boolean | undefined>;
    public readonly snsActions!: pulumi.Output<outputs.SesReceiptRuleSnsAction[] | undefined>;
    public readonly stopActions!: pulumi.Output<outputs.SesReceiptRuleStopAction[] | undefined>;
    public readonly tlsPolicy!: pulumi.Output<string>;
    public readonly workmailActions!: pulumi.Output<outputs.SesReceiptRuleWorkmailAction[] | undefined>;

    /**
     * Create a SesReceiptRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SesReceiptRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SesReceiptRuleArgs | SesReceiptRuleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SesReceiptRuleState | undefined;
            resourceInputs["addHeaderActions"] = state ? state.addHeaderActions : undefined;
            resourceInputs["after"] = state ? state.after : undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["bounceActions"] = state ? state.bounceActions : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["lambdaActions"] = state ? state.lambdaActions : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["recipients"] = state ? state.recipients : undefined;
            resourceInputs["ruleSetName"] = state ? state.ruleSetName : undefined;
            resourceInputs["s3Actions"] = state ? state.s3Actions : undefined;
            resourceInputs["scanEnabled"] = state ? state.scanEnabled : undefined;
            resourceInputs["snsActions"] = state ? state.snsActions : undefined;
            resourceInputs["stopActions"] = state ? state.stopActions : undefined;
            resourceInputs["tlsPolicy"] = state ? state.tlsPolicy : undefined;
            resourceInputs["workmailActions"] = state ? state.workmailActions : undefined;
        } else {
            const args = argsOrState as SesReceiptRuleArgs | undefined;
            if ((!args || args.ruleSetName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ruleSetName'");
            }
            resourceInputs["addHeaderActions"] = args ? args.addHeaderActions : undefined;
            resourceInputs["after"] = args ? args.after : undefined;
            resourceInputs["bounceActions"] = args ? args.bounceActions : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["lambdaActions"] = args ? args.lambdaActions : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["recipients"] = args ? args.recipients : undefined;
            resourceInputs["ruleSetName"] = args ? args.ruleSetName : undefined;
            resourceInputs["s3Actions"] = args ? args.s3Actions : undefined;
            resourceInputs["scanEnabled"] = args ? args.scanEnabled : undefined;
            resourceInputs["snsActions"] = args ? args.snsActions : undefined;
            resourceInputs["stopActions"] = args ? args.stopActions : undefined;
            resourceInputs["tlsPolicy"] = args ? args.tlsPolicy : undefined;
            resourceInputs["workmailActions"] = args ? args.workmailActions : undefined;
            resourceInputs["arn"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SesReceiptRule.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SesReceiptRule resources.
 */
export interface SesReceiptRuleState {
    addHeaderActions?: pulumi.Input<pulumi.Input<inputs.SesReceiptRuleAddHeaderAction>[]>;
    after?: pulumi.Input<string>;
    arn?: pulumi.Input<string>;
    bounceActions?: pulumi.Input<pulumi.Input<inputs.SesReceiptRuleBounceAction>[]>;
    enabled?: pulumi.Input<boolean>;
    lambdaActions?: pulumi.Input<pulumi.Input<inputs.SesReceiptRuleLambdaAction>[]>;
    name?: pulumi.Input<string>;
    recipients?: pulumi.Input<pulumi.Input<string>[]>;
    ruleSetName?: pulumi.Input<string>;
    s3Actions?: pulumi.Input<pulumi.Input<inputs.SesReceiptRuleS3Action>[]>;
    scanEnabled?: pulumi.Input<boolean>;
    snsActions?: pulumi.Input<pulumi.Input<inputs.SesReceiptRuleSnsAction>[]>;
    stopActions?: pulumi.Input<pulumi.Input<inputs.SesReceiptRuleStopAction>[]>;
    tlsPolicy?: pulumi.Input<string>;
    workmailActions?: pulumi.Input<pulumi.Input<inputs.SesReceiptRuleWorkmailAction>[]>;
}

/**
 * The set of arguments for constructing a SesReceiptRule resource.
 */
export interface SesReceiptRuleArgs {
    addHeaderActions?: pulumi.Input<pulumi.Input<inputs.SesReceiptRuleAddHeaderAction>[]>;
    after?: pulumi.Input<string>;
    bounceActions?: pulumi.Input<pulumi.Input<inputs.SesReceiptRuleBounceAction>[]>;
    enabled?: pulumi.Input<boolean>;
    lambdaActions?: pulumi.Input<pulumi.Input<inputs.SesReceiptRuleLambdaAction>[]>;
    name?: pulumi.Input<string>;
    recipients?: pulumi.Input<pulumi.Input<string>[]>;
    ruleSetName: pulumi.Input<string>;
    s3Actions?: pulumi.Input<pulumi.Input<inputs.SesReceiptRuleS3Action>[]>;
    scanEnabled?: pulumi.Input<boolean>;
    snsActions?: pulumi.Input<pulumi.Input<inputs.SesReceiptRuleSnsAction>[]>;
    stopActions?: pulumi.Input<pulumi.Input<inputs.SesReceiptRuleStopAction>[]>;
    tlsPolicy?: pulumi.Input<string>;
    workmailActions?: pulumi.Input<pulumi.Input<inputs.SesReceiptRuleWorkmailAction>[]>;
}
