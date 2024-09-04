// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CmsMetricRuleTemplate extends pulumi.CustomResource {
    /**
     * Get an existing CmsMetricRuleTemplate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CmsMetricRuleTemplateState, opts?: pulumi.CustomResourceOptions): CmsMetricRuleTemplate {
        return new CmsMetricRuleTemplate(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/cmsMetricRuleTemplate:CmsMetricRuleTemplate';

    /**
     * Returns true if the given object is an instance of CmsMetricRuleTemplate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CmsMetricRuleTemplate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CmsMetricRuleTemplate.__pulumiType;
    }

    public readonly alertTemplates!: pulumi.Output<outputs.CmsMetricRuleTemplateAlertTemplate[] | undefined>;
    public readonly applyMode!: pulumi.Output<string | undefined>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly enableEndTime!: pulumi.Output<string | undefined>;
    public readonly enableStartTime!: pulumi.Output<string | undefined>;
    public readonly groupId!: pulumi.Output<string | undefined>;
    public readonly metricRuleTemplateName!: pulumi.Output<string>;
    public readonly notifyLevel!: pulumi.Output<string | undefined>;
    public /*out*/ readonly restVersion!: pulumi.Output<string>;
    public readonly silenceTime!: pulumi.Output<number | undefined>;
    public readonly webhook!: pulumi.Output<string | undefined>;

    /**
     * Create a CmsMetricRuleTemplate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CmsMetricRuleTemplateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CmsMetricRuleTemplateArgs | CmsMetricRuleTemplateState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CmsMetricRuleTemplateState | undefined;
            resourceInputs["alertTemplates"] = state ? state.alertTemplates : undefined;
            resourceInputs["applyMode"] = state ? state.applyMode : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["enableEndTime"] = state ? state.enableEndTime : undefined;
            resourceInputs["enableStartTime"] = state ? state.enableStartTime : undefined;
            resourceInputs["groupId"] = state ? state.groupId : undefined;
            resourceInputs["metricRuleTemplateName"] = state ? state.metricRuleTemplateName : undefined;
            resourceInputs["notifyLevel"] = state ? state.notifyLevel : undefined;
            resourceInputs["restVersion"] = state ? state.restVersion : undefined;
            resourceInputs["silenceTime"] = state ? state.silenceTime : undefined;
            resourceInputs["webhook"] = state ? state.webhook : undefined;
        } else {
            const args = argsOrState as CmsMetricRuleTemplateArgs | undefined;
            if ((!args || args.metricRuleTemplateName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'metricRuleTemplateName'");
            }
            resourceInputs["alertTemplates"] = args ? args.alertTemplates : undefined;
            resourceInputs["applyMode"] = args ? args.applyMode : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["enableEndTime"] = args ? args.enableEndTime : undefined;
            resourceInputs["enableStartTime"] = args ? args.enableStartTime : undefined;
            resourceInputs["groupId"] = args ? args.groupId : undefined;
            resourceInputs["metricRuleTemplateName"] = args ? args.metricRuleTemplateName : undefined;
            resourceInputs["notifyLevel"] = args ? args.notifyLevel : undefined;
            resourceInputs["silenceTime"] = args ? args.silenceTime : undefined;
            resourceInputs["webhook"] = args ? args.webhook : undefined;
            resourceInputs["restVersion"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CmsMetricRuleTemplate.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CmsMetricRuleTemplate resources.
 */
export interface CmsMetricRuleTemplateState {
    alertTemplates?: pulumi.Input<pulumi.Input<inputs.CmsMetricRuleTemplateAlertTemplate>[]>;
    applyMode?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    enableEndTime?: pulumi.Input<string>;
    enableStartTime?: pulumi.Input<string>;
    groupId?: pulumi.Input<string>;
    metricRuleTemplateName?: pulumi.Input<string>;
    notifyLevel?: pulumi.Input<string>;
    restVersion?: pulumi.Input<string>;
    silenceTime?: pulumi.Input<number>;
    webhook?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CmsMetricRuleTemplate resource.
 */
export interface CmsMetricRuleTemplateArgs {
    alertTemplates?: pulumi.Input<pulumi.Input<inputs.CmsMetricRuleTemplateAlertTemplate>[]>;
    applyMode?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    enableEndTime?: pulumi.Input<string>;
    enableStartTime?: pulumi.Input<string>;
    groupId?: pulumi.Input<string>;
    metricRuleTemplateName: pulumi.Input<string>;
    notifyLevel?: pulumi.Input<string>;
    silenceTime?: pulumi.Input<number>;
    webhook?: pulumi.Input<string>;
}
