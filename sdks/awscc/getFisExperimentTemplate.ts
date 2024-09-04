// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getFisExperimentTemplate(args: GetFisExperimentTemplateArgs, opts?: pulumi.InvokeOptions): Promise<GetFisExperimentTemplateResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getFisExperimentTemplate:getFisExperimentTemplate", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFisExperimentTemplate.
 */
export interface GetFisExperimentTemplateArgs {
    id: string;
}

/**
 * A collection of values returned by getFisExperimentTemplate.
 */
export interface GetFisExperimentTemplateResult {
    readonly actions: {[key: string]: outputs.GetFisExperimentTemplateActions};
    readonly description: string;
    readonly experimentOptions: outputs.GetFisExperimentTemplateExperimentOptions;
    readonly experimentTemplateId: string;
    readonly id: string;
    readonly logConfiguration: outputs.GetFisExperimentTemplateLogConfiguration;
    readonly roleArn: string;
    readonly stopConditions: outputs.GetFisExperimentTemplateStopCondition[];
    readonly tags: {[key: string]: string};
    readonly targets: {[key: string]: outputs.GetFisExperimentTemplateTargets};
}
export function getFisExperimentTemplateOutput(args: GetFisExperimentTemplateOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFisExperimentTemplateResult> {
    return pulumi.output(args).apply((a: any) => getFisExperimentTemplate(a, opts))
}

/**
 * A collection of arguments for invoking getFisExperimentTemplate.
 */
export interface GetFisExperimentTemplateOutputArgs {
    id: pulumi.Input<string>;
}
