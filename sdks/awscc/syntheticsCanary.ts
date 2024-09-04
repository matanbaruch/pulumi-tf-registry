// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SyntheticsCanary extends pulumi.CustomResource {
    /**
     * Get an existing SyntheticsCanary resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SyntheticsCanaryState, opts?: pulumi.CustomResourceOptions): SyntheticsCanary {
        return new SyntheticsCanary(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/syntheticsCanary:SyntheticsCanary';

    /**
     * Returns true if the given object is an instance of SyntheticsCanary.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SyntheticsCanary {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SyntheticsCanary.__pulumiType;
    }

    /**
     * Provide artifact configuration
     */
    public readonly artifactConfig!: pulumi.Output<outputs.SyntheticsCanaryArtifactConfig>;
    /**
     * Provide the s3 bucket output location for test results
     */
    public readonly artifactS3Location!: pulumi.Output<string>;
    /**
     * Id of the canary
     */
    public /*out*/ readonly canaryId!: pulumi.Output<string>;
    /**
     * Provide the canary script source
     */
    public readonly code!: pulumi.Output<outputs.SyntheticsCanaryCode>;
    /**
     * Deletes associated lambda resources created by Synthetics if set to True. Default is False
     */
    public readonly deleteLambdaResourcesOnCanaryDeletion!: pulumi.Output<boolean>;
    /**
     * Lambda Execution role used to run your canaries
     */
    public readonly executionRoleArn!: pulumi.Output<string>;
    /**
     * Retention period of failed canary runs represented in number of days
     */
    public readonly failureRetentionPeriod!: pulumi.Output<number>;
    /**
     * Name of the canary.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Provide canary run configuration
     */
    public readonly runConfig!: pulumi.Output<outputs.SyntheticsCanaryRunConfig>;
    /**
     * Runtime version of Synthetics Library
     */
    public readonly runtimeVersion!: pulumi.Output<string>;
    /**
     * Frequency to run your canaries
     */
    public readonly schedule!: pulumi.Output<outputs.SyntheticsCanarySchedule>;
    /**
     * Runs canary if set to True. Default is False
     */
    public readonly startCanaryAfterCreation!: pulumi.Output<boolean>;
    /**
     * State of the canary
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * Retention period of successful canary runs represented in number of days
     */
    public readonly successRetentionPeriod!: pulumi.Output<number>;
    public readonly tags!: pulumi.Output<outputs.SyntheticsCanaryTag[]>;
    /**
     * Visual reference configuration for visual testing
     */
    public readonly visualReference!: pulumi.Output<outputs.SyntheticsCanaryVisualReference>;
    /**
     * Provide VPC Configuration if enabled.
     */
    public readonly vpcConfig!: pulumi.Output<outputs.SyntheticsCanaryVpcConfig>;

    /**
     * Create a SyntheticsCanary resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SyntheticsCanaryArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SyntheticsCanaryArgs | SyntheticsCanaryState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SyntheticsCanaryState | undefined;
            resourceInputs["artifactConfig"] = state ? state.artifactConfig : undefined;
            resourceInputs["artifactS3Location"] = state ? state.artifactS3Location : undefined;
            resourceInputs["canaryId"] = state ? state.canaryId : undefined;
            resourceInputs["code"] = state ? state.code : undefined;
            resourceInputs["deleteLambdaResourcesOnCanaryDeletion"] = state ? state.deleteLambdaResourcesOnCanaryDeletion : undefined;
            resourceInputs["executionRoleArn"] = state ? state.executionRoleArn : undefined;
            resourceInputs["failureRetentionPeriod"] = state ? state.failureRetentionPeriod : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["runConfig"] = state ? state.runConfig : undefined;
            resourceInputs["runtimeVersion"] = state ? state.runtimeVersion : undefined;
            resourceInputs["schedule"] = state ? state.schedule : undefined;
            resourceInputs["startCanaryAfterCreation"] = state ? state.startCanaryAfterCreation : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["successRetentionPeriod"] = state ? state.successRetentionPeriod : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["visualReference"] = state ? state.visualReference : undefined;
            resourceInputs["vpcConfig"] = state ? state.vpcConfig : undefined;
        } else {
            const args = argsOrState as SyntheticsCanaryArgs | undefined;
            if ((!args || args.artifactS3Location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'artifactS3Location'");
            }
            if ((!args || args.code === undefined) && !opts.urn) {
                throw new Error("Missing required property 'code'");
            }
            if ((!args || args.executionRoleArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'executionRoleArn'");
            }
            if ((!args || args.runtimeVersion === undefined) && !opts.urn) {
                throw new Error("Missing required property 'runtimeVersion'");
            }
            if ((!args || args.schedule === undefined) && !opts.urn) {
                throw new Error("Missing required property 'schedule'");
            }
            resourceInputs["artifactConfig"] = args ? args.artifactConfig : undefined;
            resourceInputs["artifactS3Location"] = args ? args.artifactS3Location : undefined;
            resourceInputs["code"] = args ? args.code : undefined;
            resourceInputs["deleteLambdaResourcesOnCanaryDeletion"] = args ? args.deleteLambdaResourcesOnCanaryDeletion : undefined;
            resourceInputs["executionRoleArn"] = args ? args.executionRoleArn : undefined;
            resourceInputs["failureRetentionPeriod"] = args ? args.failureRetentionPeriod : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["runConfig"] = args ? args.runConfig : undefined;
            resourceInputs["runtimeVersion"] = args ? args.runtimeVersion : undefined;
            resourceInputs["schedule"] = args ? args.schedule : undefined;
            resourceInputs["startCanaryAfterCreation"] = args ? args.startCanaryAfterCreation : undefined;
            resourceInputs["successRetentionPeriod"] = args ? args.successRetentionPeriod : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["visualReference"] = args ? args.visualReference : undefined;
            resourceInputs["vpcConfig"] = args ? args.vpcConfig : undefined;
            resourceInputs["canaryId"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SyntheticsCanary.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SyntheticsCanary resources.
 */
export interface SyntheticsCanaryState {
    /**
     * Provide artifact configuration
     */
    artifactConfig?: pulumi.Input<inputs.SyntheticsCanaryArtifactConfig>;
    /**
     * Provide the s3 bucket output location for test results
     */
    artifactS3Location?: pulumi.Input<string>;
    /**
     * Id of the canary
     */
    canaryId?: pulumi.Input<string>;
    /**
     * Provide the canary script source
     */
    code?: pulumi.Input<inputs.SyntheticsCanaryCode>;
    /**
     * Deletes associated lambda resources created by Synthetics if set to True. Default is False
     */
    deleteLambdaResourcesOnCanaryDeletion?: pulumi.Input<boolean>;
    /**
     * Lambda Execution role used to run your canaries
     */
    executionRoleArn?: pulumi.Input<string>;
    /**
     * Retention period of failed canary runs represented in number of days
     */
    failureRetentionPeriod?: pulumi.Input<number>;
    /**
     * Name of the canary.
     */
    name?: pulumi.Input<string>;
    /**
     * Provide canary run configuration
     */
    runConfig?: pulumi.Input<inputs.SyntheticsCanaryRunConfig>;
    /**
     * Runtime version of Synthetics Library
     */
    runtimeVersion?: pulumi.Input<string>;
    /**
     * Frequency to run your canaries
     */
    schedule?: pulumi.Input<inputs.SyntheticsCanarySchedule>;
    /**
     * Runs canary if set to True. Default is False
     */
    startCanaryAfterCreation?: pulumi.Input<boolean>;
    /**
     * State of the canary
     */
    state?: pulumi.Input<string>;
    /**
     * Retention period of successful canary runs represented in number of days
     */
    successRetentionPeriod?: pulumi.Input<number>;
    tags?: pulumi.Input<pulumi.Input<inputs.SyntheticsCanaryTag>[]>;
    /**
     * Visual reference configuration for visual testing
     */
    visualReference?: pulumi.Input<inputs.SyntheticsCanaryVisualReference>;
    /**
     * Provide VPC Configuration if enabled.
     */
    vpcConfig?: pulumi.Input<inputs.SyntheticsCanaryVpcConfig>;
}

/**
 * The set of arguments for constructing a SyntheticsCanary resource.
 */
export interface SyntheticsCanaryArgs {
    /**
     * Provide artifact configuration
     */
    artifactConfig?: pulumi.Input<inputs.SyntheticsCanaryArtifactConfig>;
    /**
     * Provide the s3 bucket output location for test results
     */
    artifactS3Location: pulumi.Input<string>;
    /**
     * Provide the canary script source
     */
    code: pulumi.Input<inputs.SyntheticsCanaryCode>;
    /**
     * Deletes associated lambda resources created by Synthetics if set to True. Default is False
     */
    deleteLambdaResourcesOnCanaryDeletion?: pulumi.Input<boolean>;
    /**
     * Lambda Execution role used to run your canaries
     */
    executionRoleArn: pulumi.Input<string>;
    /**
     * Retention period of failed canary runs represented in number of days
     */
    failureRetentionPeriod?: pulumi.Input<number>;
    /**
     * Name of the canary.
     */
    name?: pulumi.Input<string>;
    /**
     * Provide canary run configuration
     */
    runConfig?: pulumi.Input<inputs.SyntheticsCanaryRunConfig>;
    /**
     * Runtime version of Synthetics Library
     */
    runtimeVersion: pulumi.Input<string>;
    /**
     * Frequency to run your canaries
     */
    schedule: pulumi.Input<inputs.SyntheticsCanarySchedule>;
    /**
     * Runs canary if set to True. Default is False
     */
    startCanaryAfterCreation?: pulumi.Input<boolean>;
    /**
     * Retention period of successful canary runs represented in number of days
     */
    successRetentionPeriod?: pulumi.Input<number>;
    tags?: pulumi.Input<pulumi.Input<inputs.SyntheticsCanaryTag>[]>;
    /**
     * Visual reference configuration for visual testing
     */
    visualReference?: pulumi.Input<inputs.SyntheticsCanaryVisualReference>;
    /**
     * Provide VPC Configuration if enabled.
     */
    vpcConfig?: pulumi.Input<inputs.SyntheticsCanaryVpcConfig>;
}
