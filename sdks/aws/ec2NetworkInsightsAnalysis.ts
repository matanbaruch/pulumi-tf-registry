// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Ec2NetworkInsightsAnalysis extends pulumi.CustomResource {
    /**
     * Get an existing Ec2NetworkInsightsAnalysis resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Ec2NetworkInsightsAnalysisState, opts?: pulumi.CustomResourceOptions): Ec2NetworkInsightsAnalysis {
        return new Ec2NetworkInsightsAnalysis(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/ec2NetworkInsightsAnalysis:Ec2NetworkInsightsAnalysis';

    /**
     * Returns true if the given object is an instance of Ec2NetworkInsightsAnalysis.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Ec2NetworkInsightsAnalysis {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Ec2NetworkInsightsAnalysis.__pulumiType;
    }

    public /*out*/ readonly alternatePathHints!: pulumi.Output<outputs.Ec2NetworkInsightsAnalysisAlternatePathHint[]>;
    public /*out*/ readonly arn!: pulumi.Output<string>;
    public /*out*/ readonly explanations!: pulumi.Output<outputs.Ec2NetworkInsightsAnalysisExplanation[]>;
    public readonly filterInArns!: pulumi.Output<string[] | undefined>;
    public /*out*/ readonly forwardPathComponents!: pulumi.Output<outputs.Ec2NetworkInsightsAnalysisForwardPathComponent[]>;
    public readonly networkInsightsPathId!: pulumi.Output<string>;
    public /*out*/ readonly pathFound!: pulumi.Output<boolean>;
    public /*out*/ readonly returnPathComponents!: pulumi.Output<outputs.Ec2NetworkInsightsAnalysisReturnPathComponent[]>;
    public /*out*/ readonly startDate!: pulumi.Output<string>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    public /*out*/ readonly statusMessage!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tagsAll!: pulumi.Output<{[key: string]: string}>;
    public readonly waitForCompletion!: pulumi.Output<boolean | undefined>;
    public /*out*/ readonly warningMessage!: pulumi.Output<string>;

    /**
     * Create a Ec2NetworkInsightsAnalysis resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: Ec2NetworkInsightsAnalysisArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Ec2NetworkInsightsAnalysisArgs | Ec2NetworkInsightsAnalysisState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Ec2NetworkInsightsAnalysisState | undefined;
            resourceInputs["alternatePathHints"] = state ? state.alternatePathHints : undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["explanations"] = state ? state.explanations : undefined;
            resourceInputs["filterInArns"] = state ? state.filterInArns : undefined;
            resourceInputs["forwardPathComponents"] = state ? state.forwardPathComponents : undefined;
            resourceInputs["networkInsightsPathId"] = state ? state.networkInsightsPathId : undefined;
            resourceInputs["pathFound"] = state ? state.pathFound : undefined;
            resourceInputs["returnPathComponents"] = state ? state.returnPathComponents : undefined;
            resourceInputs["startDate"] = state ? state.startDate : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["statusMessage"] = state ? state.statusMessage : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
            resourceInputs["waitForCompletion"] = state ? state.waitForCompletion : undefined;
            resourceInputs["warningMessage"] = state ? state.warningMessage : undefined;
        } else {
            const args = argsOrState as Ec2NetworkInsightsAnalysisArgs | undefined;
            if ((!args || args.networkInsightsPathId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkInsightsPathId'");
            }
            resourceInputs["filterInArns"] = args ? args.filterInArns : undefined;
            resourceInputs["networkInsightsPathId"] = args ? args.networkInsightsPathId : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tagsAll"] = args ? args.tagsAll : undefined;
            resourceInputs["waitForCompletion"] = args ? args.waitForCompletion : undefined;
            resourceInputs["alternatePathHints"] = undefined /*out*/;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["explanations"] = undefined /*out*/;
            resourceInputs["forwardPathComponents"] = undefined /*out*/;
            resourceInputs["pathFound"] = undefined /*out*/;
            resourceInputs["returnPathComponents"] = undefined /*out*/;
            resourceInputs["startDate"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["statusMessage"] = undefined /*out*/;
            resourceInputs["warningMessage"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Ec2NetworkInsightsAnalysis.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Ec2NetworkInsightsAnalysis resources.
 */
export interface Ec2NetworkInsightsAnalysisState {
    alternatePathHints?: pulumi.Input<pulumi.Input<inputs.Ec2NetworkInsightsAnalysisAlternatePathHint>[]>;
    arn?: pulumi.Input<string>;
    explanations?: pulumi.Input<pulumi.Input<inputs.Ec2NetworkInsightsAnalysisExplanation>[]>;
    filterInArns?: pulumi.Input<pulumi.Input<string>[]>;
    forwardPathComponents?: pulumi.Input<pulumi.Input<inputs.Ec2NetworkInsightsAnalysisForwardPathComponent>[]>;
    networkInsightsPathId?: pulumi.Input<string>;
    pathFound?: pulumi.Input<boolean>;
    returnPathComponents?: pulumi.Input<pulumi.Input<inputs.Ec2NetworkInsightsAnalysisReturnPathComponent>[]>;
    startDate?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    statusMessage?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    waitForCompletion?: pulumi.Input<boolean>;
    warningMessage?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Ec2NetworkInsightsAnalysis resource.
 */
export interface Ec2NetworkInsightsAnalysisArgs {
    filterInArns?: pulumi.Input<pulumi.Input<string>[]>;
    networkInsightsPathId: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    waitForCompletion?: pulumi.Input<boolean>;
}
