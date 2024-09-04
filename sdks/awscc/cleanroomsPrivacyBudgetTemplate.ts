// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CleanroomsPrivacyBudgetTemplate extends pulumi.CustomResource {
    /**
     * Get an existing CleanroomsPrivacyBudgetTemplate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CleanroomsPrivacyBudgetTemplateState, opts?: pulumi.CustomResourceOptions): CleanroomsPrivacyBudgetTemplate {
        return new CleanroomsPrivacyBudgetTemplate(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/cleanroomsPrivacyBudgetTemplate:CleanroomsPrivacyBudgetTemplate';

    /**
     * Returns true if the given object is an instance of CleanroomsPrivacyBudgetTemplate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CleanroomsPrivacyBudgetTemplate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CleanroomsPrivacyBudgetTemplate.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly autoRefresh!: pulumi.Output<string>;
    public /*out*/ readonly collaborationArn!: pulumi.Output<string>;
    public /*out*/ readonly collaborationIdentifier!: pulumi.Output<string>;
    public /*out*/ readonly membershipArn!: pulumi.Output<string>;
    public readonly membershipIdentifier!: pulumi.Output<string>;
    public readonly parameters!: pulumi.Output<outputs.CleanroomsPrivacyBudgetTemplateParameters>;
    public /*out*/ readonly privacyBudgetTemplateIdentifier!: pulumi.Output<string>;
    public readonly privacyBudgetType!: pulumi.Output<string>;
    /**
     * An arbitrary set of tags (key-value pairs) for this cleanrooms privacy budget template.
     */
    public readonly tags!: pulumi.Output<outputs.CleanroomsPrivacyBudgetTemplateTag[]>;

    /**
     * Create a CleanroomsPrivacyBudgetTemplate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CleanroomsPrivacyBudgetTemplateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CleanroomsPrivacyBudgetTemplateArgs | CleanroomsPrivacyBudgetTemplateState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CleanroomsPrivacyBudgetTemplateState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["autoRefresh"] = state ? state.autoRefresh : undefined;
            resourceInputs["collaborationArn"] = state ? state.collaborationArn : undefined;
            resourceInputs["collaborationIdentifier"] = state ? state.collaborationIdentifier : undefined;
            resourceInputs["membershipArn"] = state ? state.membershipArn : undefined;
            resourceInputs["membershipIdentifier"] = state ? state.membershipIdentifier : undefined;
            resourceInputs["parameters"] = state ? state.parameters : undefined;
            resourceInputs["privacyBudgetTemplateIdentifier"] = state ? state.privacyBudgetTemplateIdentifier : undefined;
            resourceInputs["privacyBudgetType"] = state ? state.privacyBudgetType : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as CleanroomsPrivacyBudgetTemplateArgs | undefined;
            if ((!args || args.autoRefresh === undefined) && !opts.urn) {
                throw new Error("Missing required property 'autoRefresh'");
            }
            if ((!args || args.membershipIdentifier === undefined) && !opts.urn) {
                throw new Error("Missing required property 'membershipIdentifier'");
            }
            if ((!args || args.parameters === undefined) && !opts.urn) {
                throw new Error("Missing required property 'parameters'");
            }
            if ((!args || args.privacyBudgetType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'privacyBudgetType'");
            }
            resourceInputs["autoRefresh"] = args ? args.autoRefresh : undefined;
            resourceInputs["membershipIdentifier"] = args ? args.membershipIdentifier : undefined;
            resourceInputs["parameters"] = args ? args.parameters : undefined;
            resourceInputs["privacyBudgetType"] = args ? args.privacyBudgetType : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["collaborationArn"] = undefined /*out*/;
            resourceInputs["collaborationIdentifier"] = undefined /*out*/;
            resourceInputs["membershipArn"] = undefined /*out*/;
            resourceInputs["privacyBudgetTemplateIdentifier"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CleanroomsPrivacyBudgetTemplate.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CleanroomsPrivacyBudgetTemplate resources.
 */
export interface CleanroomsPrivacyBudgetTemplateState {
    arn?: pulumi.Input<string>;
    autoRefresh?: pulumi.Input<string>;
    collaborationArn?: pulumi.Input<string>;
    collaborationIdentifier?: pulumi.Input<string>;
    membershipArn?: pulumi.Input<string>;
    membershipIdentifier?: pulumi.Input<string>;
    parameters?: pulumi.Input<inputs.CleanroomsPrivacyBudgetTemplateParameters>;
    privacyBudgetTemplateIdentifier?: pulumi.Input<string>;
    privacyBudgetType?: pulumi.Input<string>;
    /**
     * An arbitrary set of tags (key-value pairs) for this cleanrooms privacy budget template.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.CleanroomsPrivacyBudgetTemplateTag>[]>;
}

/**
 * The set of arguments for constructing a CleanroomsPrivacyBudgetTemplate resource.
 */
export interface CleanroomsPrivacyBudgetTemplateArgs {
    autoRefresh: pulumi.Input<string>;
    membershipIdentifier: pulumi.Input<string>;
    parameters: pulumi.Input<inputs.CleanroomsPrivacyBudgetTemplateParameters>;
    privacyBudgetType: pulumi.Input<string>;
    /**
     * An arbitrary set of tags (key-value pairs) for this cleanrooms privacy budget template.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.CleanroomsPrivacyBudgetTemplateTag>[]>;
}
