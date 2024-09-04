// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class InspectorAssessmentTemplate extends pulumi.CustomResource {
    /**
     * Get an existing InspectorAssessmentTemplate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InspectorAssessmentTemplateState, opts?: pulumi.CustomResourceOptions): InspectorAssessmentTemplate {
        return new InspectorAssessmentTemplate(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/inspectorAssessmentTemplate:InspectorAssessmentTemplate';

    /**
     * Returns true if the given object is an instance of InspectorAssessmentTemplate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is InspectorAssessmentTemplate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === InspectorAssessmentTemplate.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly duration!: pulumi.Output<number>;
    public readonly eventSubscriptions!: pulumi.Output<outputs.InspectorAssessmentTemplateEventSubscription[] | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly rulesPackageArns!: pulumi.Output<string[]>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tagsAll!: pulumi.Output<{[key: string]: string}>;
    public readonly targetArn!: pulumi.Output<string>;

    /**
     * Create a InspectorAssessmentTemplate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InspectorAssessmentTemplateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: InspectorAssessmentTemplateArgs | InspectorAssessmentTemplateState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as InspectorAssessmentTemplateState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["duration"] = state ? state.duration : undefined;
            resourceInputs["eventSubscriptions"] = state ? state.eventSubscriptions : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["rulesPackageArns"] = state ? state.rulesPackageArns : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
            resourceInputs["targetArn"] = state ? state.targetArn : undefined;
        } else {
            const args = argsOrState as InspectorAssessmentTemplateArgs | undefined;
            if ((!args || args.duration === undefined) && !opts.urn) {
                throw new Error("Missing required property 'duration'");
            }
            if ((!args || args.rulesPackageArns === undefined) && !opts.urn) {
                throw new Error("Missing required property 'rulesPackageArns'");
            }
            if ((!args || args.targetArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetArn'");
            }
            resourceInputs["duration"] = args ? args.duration : undefined;
            resourceInputs["eventSubscriptions"] = args ? args.eventSubscriptions : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["rulesPackageArns"] = args ? args.rulesPackageArns : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tagsAll"] = args ? args.tagsAll : undefined;
            resourceInputs["targetArn"] = args ? args.targetArn : undefined;
            resourceInputs["arn"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(InspectorAssessmentTemplate.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering InspectorAssessmentTemplate resources.
 */
export interface InspectorAssessmentTemplateState {
    arn?: pulumi.Input<string>;
    duration?: pulumi.Input<number>;
    eventSubscriptions?: pulumi.Input<pulumi.Input<inputs.InspectorAssessmentTemplateEventSubscription>[]>;
    name?: pulumi.Input<string>;
    rulesPackageArns?: pulumi.Input<pulumi.Input<string>[]>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    targetArn?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a InspectorAssessmentTemplate resource.
 */
export interface InspectorAssessmentTemplateArgs {
    duration: pulumi.Input<number>;
    eventSubscriptions?: pulumi.Input<pulumi.Input<inputs.InspectorAssessmentTemplateEventSubscription>[]>;
    name?: pulumi.Input<string>;
    rulesPackageArns: pulumi.Input<pulumi.Input<string>[]>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    targetArn: pulumi.Input<string>;
}
