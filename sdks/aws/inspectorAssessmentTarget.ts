// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class InspectorAssessmentTarget extends pulumi.CustomResource {
    /**
     * Get an existing InspectorAssessmentTarget resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InspectorAssessmentTargetState, opts?: pulumi.CustomResourceOptions): InspectorAssessmentTarget {
        return new InspectorAssessmentTarget(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/inspectorAssessmentTarget:InspectorAssessmentTarget';

    /**
     * Returns true if the given object is an instance of InspectorAssessmentTarget.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is InspectorAssessmentTarget {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === InspectorAssessmentTarget.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly resourceGroupArn!: pulumi.Output<string | undefined>;

    /**
     * Create a InspectorAssessmentTarget resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: InspectorAssessmentTargetArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: InspectorAssessmentTargetArgs | InspectorAssessmentTargetState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as InspectorAssessmentTargetState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["resourceGroupArn"] = state ? state.resourceGroupArn : undefined;
        } else {
            const args = argsOrState as InspectorAssessmentTargetArgs | undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupArn"] = args ? args.resourceGroupArn : undefined;
            resourceInputs["arn"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(InspectorAssessmentTarget.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering InspectorAssessmentTarget resources.
 */
export interface InspectorAssessmentTargetState {
    arn?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    resourceGroupArn?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a InspectorAssessmentTarget resource.
 */
export interface InspectorAssessmentTargetArgs {
    name?: pulumi.Input<string>;
    resourceGroupArn?: pulumi.Input<string>;
}
