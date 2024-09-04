// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ReviewAppConfig extends pulumi.CustomResource {
    /**
     * Get an existing ReviewAppConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ReviewAppConfigState, opts?: pulumi.CustomResourceOptions): ReviewAppConfig {
        return new ReviewAppConfig(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'heroku:index/reviewAppConfig:ReviewAppConfig';

    /**
     * Returns true if the given object is an instance of ReviewAppConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ReviewAppConfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ReviewAppConfig.__pulumiType;
    }

    public readonly automaticReviewApps!: pulumi.Output<boolean | undefined>;
    public readonly baseName!: pulumi.Output<string>;
    public readonly deployTarget!: pulumi.Output<outputs.ReviewAppConfigDeployTarget>;
    public readonly destroyStaleApps!: pulumi.Output<boolean | undefined>;
    public readonly orgRepo!: pulumi.Output<string>;
    public readonly pipelineId!: pulumi.Output<string>;
    public /*out*/ readonly repoId!: pulumi.Output<number>;
    public readonly staleDays!: pulumi.Output<number>;
    public readonly waitForCi!: pulumi.Output<boolean | undefined>;

    /**
     * Create a ReviewAppConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ReviewAppConfigArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ReviewAppConfigArgs | ReviewAppConfigState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ReviewAppConfigState | undefined;
            resourceInputs["automaticReviewApps"] = state ? state.automaticReviewApps : undefined;
            resourceInputs["baseName"] = state ? state.baseName : undefined;
            resourceInputs["deployTarget"] = state ? state.deployTarget : undefined;
            resourceInputs["destroyStaleApps"] = state ? state.destroyStaleApps : undefined;
            resourceInputs["orgRepo"] = state ? state.orgRepo : undefined;
            resourceInputs["pipelineId"] = state ? state.pipelineId : undefined;
            resourceInputs["repoId"] = state ? state.repoId : undefined;
            resourceInputs["staleDays"] = state ? state.staleDays : undefined;
            resourceInputs["waitForCi"] = state ? state.waitForCi : undefined;
        } else {
            const args = argsOrState as ReviewAppConfigArgs | undefined;
            if ((!args || args.deployTarget === undefined) && !opts.urn) {
                throw new Error("Missing required property 'deployTarget'");
            }
            if ((!args || args.orgRepo === undefined) && !opts.urn) {
                throw new Error("Missing required property 'orgRepo'");
            }
            if ((!args || args.pipelineId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'pipelineId'");
            }
            resourceInputs["automaticReviewApps"] = args ? args.automaticReviewApps : undefined;
            resourceInputs["baseName"] = args ? args.baseName : undefined;
            resourceInputs["deployTarget"] = args ? args.deployTarget : undefined;
            resourceInputs["destroyStaleApps"] = args ? args.destroyStaleApps : undefined;
            resourceInputs["orgRepo"] = args ? args.orgRepo : undefined;
            resourceInputs["pipelineId"] = args ? args.pipelineId : undefined;
            resourceInputs["staleDays"] = args ? args.staleDays : undefined;
            resourceInputs["waitForCi"] = args ? args.waitForCi : undefined;
            resourceInputs["repoId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ReviewAppConfig.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ReviewAppConfig resources.
 */
export interface ReviewAppConfigState {
    automaticReviewApps?: pulumi.Input<boolean>;
    baseName?: pulumi.Input<string>;
    deployTarget?: pulumi.Input<inputs.ReviewAppConfigDeployTarget>;
    destroyStaleApps?: pulumi.Input<boolean>;
    orgRepo?: pulumi.Input<string>;
    pipelineId?: pulumi.Input<string>;
    repoId?: pulumi.Input<number>;
    staleDays?: pulumi.Input<number>;
    waitForCi?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a ReviewAppConfig resource.
 */
export interface ReviewAppConfigArgs {
    automaticReviewApps?: pulumi.Input<boolean>;
    baseName?: pulumi.Input<string>;
    deployTarget: pulumi.Input<inputs.ReviewAppConfigDeployTarget>;
    destroyStaleApps?: pulumi.Input<boolean>;
    orgRepo: pulumi.Input<string>;
    pipelineId: pulumi.Input<string>;
    staleDays?: pulumi.Input<number>;
    waitForCi?: pulumi.Input<boolean>;
}
